export async function fetchData(url = '') {
    return (await fetch(url)).json()
}