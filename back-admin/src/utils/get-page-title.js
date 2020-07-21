import defaultSettings from '@/settings'

const title = defaultSettings.title || '后台操作系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
