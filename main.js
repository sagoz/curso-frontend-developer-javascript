const imgflechitaNav = document.querySelector('.img-flechita-nav');
const destokMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navShoppigCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');

imgflechitaNav.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
navShoppigCart.addEventListener('click', toggleshoppingCartContainer);
productDetailClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    destokMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isshoppingCartContainerClosed =  shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed)
    {
        shoppingCartContainer.classList.add('inactive');
    }
    const isproductDetailClose = productDetailContainer.classList.contains('inactive');

    if (!isproductDetailClose)
    {
        productDetailContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleshoppingCartContainer() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed)
    {
        mobileMenu.classList.add('inactive');
    }
    const isproductDetailClose = productDetailContainer.classList.contains('inactive');

    if (!isproductDetailClose)
    {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '$120,00',
    image: './logos/pexels-photo-276517.jpeg'
});
productList.push({
    name: 'Bike pro',
    price: '$220,00',
    image: './logos/pexels-photo-276517.jpeg'
});
productList.push({
    name: 'Bike premium',
    price: '$580,00',
    image: './logos/pexels-photo-276517.jpeg'
});

/* <div class="product-card">
<img src="./logos/pexels-photo-276517.jpeg" alt="" class="product-img">
<div class="product-info">
    <div>
        <p>$120,00</p>
        <p>bike</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
</div>

</div> */

function renderProducts (arr) {
    for (product of arr)
    {
     const productCard = document.createElement('div');
     productCard.classList.add('product-card');
    
     const img = document.createElement('img');
     img.setAttribute('src', product.image);
     img.addEventListener('click', openProductDetailAside);
    
     const productInfo = document.createElement('div');
     productInfo.classList.add('product-info');
    
    
    
     const productInfoDiv = document.createElement('div');
     const productPrice = document.createElement('p');
     productPrice.innerText = product.price;
     const productName = document.createElement('p');
     productName.innerText = product.name;
    
     productInfoDiv.appendChild(productPrice);
     productInfoDiv.appendChild(productName);
    
     const productInfoFigure = document.createElement('figure');
     const imgFigure = document.createElement('img');
     imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
    
     productInfoFigure.appendChild(imgFigure);
    
     productInfo.appendChild(productInfoDiv);
     productInfo.appendChild(productInfoFigure);
    
     productCard.appendChild(img);
     productCard.appendChild(productInfo);
    
     cardsContainer.appendChild(productCard);
    }
}


function renderProductsHTML(arr){

    let html_code = '';


    for (product of arr){

        html_code += `

        <div class="product-card">
            <img class="productImg" src="${product.image}" alt="${product.name}">
                        
            <div class="product-info">
            
                <div>
                
                    <p>${product.price}</p>
                    <p>${product.name}</p>
                    
                </div>
                <figure>
                    <img src="icons/bt_add_to_cart.svg" alt="">
                </figure>
                </div>
        </div>
        `;

    }

    cardsContainer.innerHTML += html_code;
    const imgProduct = document.querySelector('.productImg');
    imgProduct.addEventListener('click', openProductDetailAside);
}


renderProducts(productList);


