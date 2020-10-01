const hasStorage = typeof Storage !== 'undefined'

export const get = (key) => {
    if (hasStorage) {
        return localStorage.getItem(key);
    }
    return null;
}

export const set = (key, value) => {
    if (hasStorage) {
        localStorage.setItem(key, value);
    }
}

export const remove = (key) => {
    localStorage.removeItem(key);
}