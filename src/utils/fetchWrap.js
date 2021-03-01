export const fetchWrap = (url) => (
    fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err.message))
);