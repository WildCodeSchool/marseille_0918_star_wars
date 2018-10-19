returnId = (url) => {
    url.replace("htpp/bjdhdf/", "")
    url.replace("/", "")
    return parseInt(url)
}

module.exports = {
    returnId: returnId
}