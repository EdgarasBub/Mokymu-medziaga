function addProductsIntoDiv(products) {
    let productsDiv = document.getElementById('products');

    let productCard = '';
    for (let product of products) {
        productCard +=`
        <div class="card">
            <div class="product-card">
                <img class="card-img-top" src="${product.image}">
                <h4 class="card-tittle">${product.title}</h4>
                <button class="button-card">perziureti</button>
            </div>
        </div>
    `

        productsDiv.innerHTML = productCard;

    }
    // console.log(products)
}



window.addEventListener('load', () => {
    fetch('https://fakestoreapi.com/products/')
        .then(reponse => reponse.json())
        .then(data => addProductsIntoDiv(data));
});