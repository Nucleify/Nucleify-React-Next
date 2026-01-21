export {}

declare global {
  type ObjectNameType =
    | 'activity'
    | 'article'
    | 'card'
    | 'contact'
    | 'feature'
    | 'file'
    | 'link'
    | 'money'
    | 'question'
    | 'task'
    | 'technology'
    | 'user'

  type AdTypeType = ObjectNameType | 'main'
}
