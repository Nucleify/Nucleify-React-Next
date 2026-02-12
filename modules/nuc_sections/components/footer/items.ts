export type FooterItem = {
  name: string
  url: string
  header?: boolean
}

export type FooterTranslate = (key: string) => string

export function getColumns(lang: string, t: FooterTranslate): FooterItem[][] {
  return [
    [
      { name: t('footer-services'), header: true, url: '#' },
      { name: t('footer-business-websites'), url: '#' },
      { name: t('footer-ecommerce'), url: '#' },
      { name: t('footer-custom-cms'), url: '#' },
      { name: t('footer-landing-pages'), url: '#' },
      { name: t('footer-website-redesign'), url: '#' },
    ],
    [
      { name: t('footer-company'), header: true, url: '#' },
      { name: t('footer-about'), url: '#' },
      { name: t('footer-process'), url: '#' },
      { name: t('footer-contact'), url: '#contact' },
    ],
    [
      { name: t('footer-resources'), header: true, url: '#' },
      { name: t('footer-pricing'), url: '#' },
      { name: t('footer-consultation'), url: '#start' },
      { name: t('footer-terms'), url: '#' },
      { name: t('footer-faq'), url: '#faq' },
    ],
    [
      { name: t('footer-documentation'), header: true, url: '#' },
      {
        name: t('footer-getting-started'),
        url: `/${lang}/docs/getting-started/introduction`,
      },
      {
        name: t('footer-atomic-design'),
        url: `/${lang}/docs/core-concepts/atomic-design`,
      },
      {
        name: t('footer-modules'),
        url: `/${lang}/docs/core-concepts/modules`,
      },
      {
        name: t('footer-philosophy'),
        url: `/${lang}/docs/about/philosophy`,
      },
      {
        name: t('footer-code-standards'),
        url: `/${lang}/docs/about/code-standards`,
      },
    ],
  ]
}
