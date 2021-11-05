async function retrieveContent(URL) {
    let result = await fetch(URL);
    let parsedResult = await result.json();
    return parsedResult
}