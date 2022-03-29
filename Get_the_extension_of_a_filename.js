function extensionExtracted(filename) {
    let decimal = filename.indexOf ('.');
    let subtraction = filename.substr(decimal + 1);
    console.log(subtraction);
}
extensionExtracted('Gogs.html')