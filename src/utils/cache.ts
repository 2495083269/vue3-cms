// 封装缓存相关的方法 window.localStorage长久储存，没有过期时间
class LocalCache {
    setCache(key: string, value: any) {
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    getCache(key: string) {
        const value = window.localStorage.getItem(key)
        if (value) {
            return JSON.parse(value)
        }
    }

    deleteCache(key: string) {
        window.localStorage.removeItem(key)
    }

    clearCache() {
        window.localStorage.clear()
    }
}

export default new LocalCache()