function addLink() {
    for (var i = 0; i < 10; i++) {
        var _a = document.createElement("a");
        var link = document.createTextNode('link');
        _a.appendChild(link);
        _a.title = "This is Link"; 
        _a.href = "#";

        document.body.appendChild(_a); 
    }

}
addLink();