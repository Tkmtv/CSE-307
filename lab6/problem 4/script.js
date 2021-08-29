let products = [
    {
        ID: 1,
        Product_Name: "SS1",
        Quantity: 200,
        Price: 100000,
        ImgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmartworldkenya.com%2Fpublic%2Fuploads%2Fproducts%2Fmeta%2FKNeBBYP850z53YKrHIP8ORlNWR70zpOCEo4xHzAZ.jpeg&f=1&nofb=1",
    },
    {
        ID: 2,
        Product_Name: "SS2",
        Quantity: 200,
        Price: 200000,
        ImgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmartworldkenya.com%2Fpublic%2Fuploads%2Fproducts%2Fmeta%2FKNeBBYP850z53YKrHIP8ORlNWR70zpOCEo4xHzAZ.jpeg&f=1&nofb=1",
    },
    {
        ID: 2,
        Product_Name: "SS3",
        Quantity: 200,
        Price: 200000,
        ImgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmartworldkenya.com%2Fpublic%2Fuploads%2Fproducts%2Fmeta%2FKNeBBYP850z53YKrHIP8ORlNWR70zpOCEo4xHzAZ.jpeg&f=1&nofb=1",
    },
    {
        ID: 2,
        Product_Name: "SS4",
        Quantity: 200,
        Price: 200000,
        ImgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmartworldkenya.com%2Fpublic%2Fuploads%2Fproducts%2Fmeta%2FKNeBBYP850z53YKrHIP8ORlNWR70zpOCEo4xHzAZ.jpeg&f=1&nofb=1",
    },
];

function printObj() {
    let _s = "";
    for (var obj of products) {
        console.log(obj)
        _s +=       `<div class="col-md-2">
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


printObj();