const imgflechitaNav = document.querySelector('.img-flechita-nav');
const destokMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navShoppigCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


imgflechitaNav.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
navShoppigCart.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu() {
    destokMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isProductDetailClosed =  productDetail.classList.contains('inactive');

    if (!isProductDetailClosed)
    {
        productDetail.classList.add('inactive');
    }


    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed)
    {
        mobileMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');

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
            <img src="${product.image}" alt="${product.name}">
                        
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
}

renderProductsHTML(productList);