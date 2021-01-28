export function setToLocalStorage(magicString, array) {
    localStorage.setItem(magicString, JSON.stringify(array));
}

export function getFromLocalStorage(magicString) {
    return JSON.parse(localStorage.getItem(magicString));
}
