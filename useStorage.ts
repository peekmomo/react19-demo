import { useSyncExternalStore } from "react"
export const useHistory = () => {
    const subscribe = (callback: () => void) => {
        window.addEventListener('popstate', callback)
        window.addEventListener('hashchange', callback)
        return () => {
            window.removeEventListener('popstate', callback)
            window.removeEventListener('hashchange', callback)
        }
    }
    const getSnapshot = () => {
        return window.location.href
    }
    const push = (path: string) => {
        window.history.pushState(null, '', path)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }
    const replace = (path: string) => {
        window.history.replaceState(null, '', path)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }
    const res = useSyncExternalStore(subscribe, getSnapshot)
    return [res, push, replace] as const
}
