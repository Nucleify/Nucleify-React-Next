import type { ApiResponseType, HttpMethodType } from 'atomic'

function getCookieValue(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined

  const parts = document.cookie.split(';').map((part) => part.trim())
  const entry = parts.find((part) => part.startsWith(`${name}=`))
  if (!entry) return undefined

  return decodeURIComponent(entry.slice(name.length + 1))
}

export async function apiRequest<T>(
  url: string,
  method: HttpMethodType = 'GET',
  data: object | null = null,
  id: string | number | null = null,
  params: Record<string, unknown> = {}
): Promise<ApiResponseType<T>> {
  const finalUrl = id ? `${url}/${id}` : url
  const searchParams = new URLSearchParams()

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue
    searchParams.append(key, String(value))
  }

  const queryString = searchParams.toString()
  const requestUrl = queryString ? `${finalUrl}?${queryString}` : finalUrl
  const xsrfTokenValue = getCookieValue('XSRF-TOKEN')

  const headers: Record<string, string> = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  if (xsrfTokenValue) {
    headers['X-XSRF-TOKEN'] = xsrfTokenValue
  }

  if (typeof window !== 'undefined') {
    headers['Referer-Slug'] = window.location.pathname
  }

  const response = await fetch(requestUrl, {
    method,
    body: data ? JSON.stringify(data) : undefined,
    headers,
    credentials: 'include',
  })

  if (!response.ok) {
    let errorData: unknown = null
    try {
      errorData = await response.json()
    } catch {
      errorData = { error: response.statusText }
    }

    throw {
      response: {
        status: response.status,
        data: errorData,
      },
      data: errorData,
    }
  }

  return (await response.json()) as ApiResponseType<T>
}
