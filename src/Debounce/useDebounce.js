function useDebounce(cb,delay = 500) {
    let timer;
    return(...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        },delay)
    }
}

export default useDebounce;