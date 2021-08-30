function replaceLink() {
    let _a = document.getElementsByTagName("a");
    for (let i of _a) {
        i.href = "https://google.com";
    }
}
replaceLink();