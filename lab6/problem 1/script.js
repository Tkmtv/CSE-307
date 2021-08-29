function test() {
    let _s = 'How you doing "?", Joey said';
    let pNode = document.createElement("p");
    pNode.innerHTML = _s;
    document.body.appendChild(pNode);
};

test();