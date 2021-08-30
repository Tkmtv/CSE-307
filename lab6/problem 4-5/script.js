let products = [];

for (var i = 0; i < 10; i++) {
    products[i] = {
        ID: i + 1,
        Product_Name: `SS ${i + 1}`,
        Quantity: (i + 1) * 10,
        Price: i * 1000000,
        ImgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmartworldkenya.com%2Fpublic%2Fuploads%2Fproducts%2Fmeta%2FKNeBBYP850z53YKrHIP8ORlNWR70zpOCEo4xHzAZ.jpeg&f=1&nofb=1",
    };
}

function printObj(target) {
    for (var obj of target) {
        console.log(obj);
    }
}

function showObj(target) {
    let _s = "";
    for (var obj of target) {
        _s += `<div class="col-md-2">
                        <div class="product_grp">   
                            <div class="img_wrapper">
                                <img src="${obj.ImgUrl}" alt="rt" loading="lazy">
                                <div class="info">
                                    <a href="#">đặt hàng</a>
                                    <a href="#">chi tiết</a>
                                </div>
                             </div>
                            <a href="#">
                                <p>
                                    ${obj.Product_Name}
                                </p>
                                <p class="tel">
                                    ${obj.Price}
                                </p>
                            </a>
                        </div>
                    </div>`;
    }
    let productList = document.getElementById("products_row");
    productList.innerHTML = _s;
}

function addToHead() {
    console.log("\nAdding to array head...");
    console.log(`before: ${products.length}`);
    products.unshift({
        ID: 0,
        Product_Name: 'SS 0',
        Quantity: 1,
        Price: 150000000000,
        ImgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmartworldkenya.com%2Fpublic%2Fuploads%2Fproducts%2Fmeta%2FKNeBBYP850z53YKrHIP8ORlNWR70zpOCEo4xHzAZ.jpeg&f=1&nofb=1",
    });
    console.log(`after: ${products.length}`);
    printObj(products);
    showObj(products);
}

function addToTail() {
    console.log("\nAdding to array tail...");
    console.log(`before: ${products.length}`);
    products.push({
        ID: products.length,
        Product_Name: `SS ${products.length + 1}`,
        Quantity: 1,
        Price: products.length * 1000000,
        ImgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmartworldkenya.com%2Fpublic%2Fuploads%2Fproducts%2Fmeta%2FKNeBBYP850z53YKrHIP8ORlNWR70zpOCEo4xHzAZ.jpeg&f=1&nofb=1",
    });
    console.log(`after: ${products.length}`);
    printObj(products);
    showObj(products);
}

function seachByName() {
    var _input = document.getElementById("search").value;
    var _s = "";
    for (var obj of products) {
        var pName = obj.Product_Name.toLowerCase();
        var key = _input.toLowerCase();
        if (pName.indexOf(key) > -1) {
            _s += `<div class="col-md-2">
            <div class="product_grp">   
                <div class="img_wrapper">
                    <img src="${obj.ImgUrl}" alt="rt" loading="lazy">
                    <div class="info">
                        <a href="#">đặt hàng</a>
                        <a href="#">chi tiết</a>
                    </div>
                 </div>
                <a href="#">
                    <p>
                        ${obj.Product_Name}
                    </p>
                    <p class="tel">
                        ${obj.Price}
                    </p>
                </a>
            </div>
        </div>`;
        }
    }
    let productListNode = document.getElementById("products_row");
    productListNode.innerHTML = _s;
}

function removeID() {
    var _input = document.getElementById("search&destroy").value;
    for (var i = 0; i < products.length; i++) {
        var pID = products[i].ID;
        if (pID == _input) {
            products.splice(i, 1);
            alert("done");
            showObj(products);
            printObj(products);
            break;
        }
    }
}

function compareName(a, b) {
    if (a.Product_Name < b.Product_Name) {
        return -1;
    }
    if (a.Product_Name > b.Product_Name) {
        return 1;
    }
    return 0;
}

function comparePrice(a, b) {
    if (a.Price < b.Price) {
        return -1;
    }
    if (a.Price > b.Price) {
        return 1;
    }
    return 0;
}

function sortNameAcs() {
    products.sort(compareName);
    printObj(products);
    showObj(products);
}

function sortPriceAcs() {
    products.sort(comparePrice);
    printObj(products);
    showObj(products);
}

printObj(products);
showObj(products);
addToHead();
addToTail();
