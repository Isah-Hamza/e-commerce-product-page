export = { }


console.log('start of script')

const menuIcon = document.querySelector('[data-menu-img]')!;
const closeIcon = document.querySelector('[data-close-img]')!;
const navlinks = document.querySelector('[data-navlinks]');
const thumbnailContainers = [...document.querySelectorAll('[data-thumbnail-container]')];
const imageElems = [...document.querySelectorAll('[data-image-container] > img')];
const previousBtn = document.querySelector('[data-previous-btn]')!;
const nextBtn = document.querySelector('[data-next-btn]')!;
const plusBtn = document.querySelector('[data-plus-btn]')!;
const minusBtn = document.querySelector('[data-minus-btn]')!;
const quantity:HTMLSpanElement = document.querySelector('[data-quantity]')!;
const cartItems:HTMLDivElement = document.querySelector('[data-cart-item-count]')!;
const cartBtn = document.querySelector('[data-cart-btn]')!;
let deleteIcons:Array< HTMLElement > = Array.from(document.querySelectorAll('[data-delete-icon]'));
const cartItemsContainer = document.querySelector('[data-cart-items-container]')!;
const cartItemTemplate:HTMLTemplateElement = document.querySelector('[data-cart-item-template]')!;
const emptyText = cartItemsContainer.querySelector('p')!;

console.log(cartItems)

let cartItemsCount = 0;
let imageIndex:number = 0;
let currentQuantity:number | string = 1 ;

const toggleShowEmptyCart = () => {
    if(cartItemsCount <= 0){
        emptyText.style.display = 'block';
    }else{
        emptyText.style.display = 'none';
    }
}

const toggleShowCartItemCount = () => {
    if(cartItemsCount <= 0){
        cartItems.style.display = 'none';
    }else{
        cartItems.style.display = 'flex';
        const cartItemCountSpan = cartItems.children[0];
        cartItemCountSpan.textContent = cartItemsCount.toString();
    }
}

cartBtn.addEventListener('click', () => {
    let cartItem:HTMLDivElement = cartItemTemplate.content.cloneNode(true).children[0];
    const quantity = cartItem.querySelector('[data-quantity]')!;
    const total = cartItem.querySelector('[data-total')!;
    quantity.textContent = currentQuantity.toString();
    total.textContent =  `$ ${(currentQuantity * 125)}`;
    cartItemsContainer.prepend(cartItem);

    cartItemsCount ++;
    globalThis.quantity.textContent = '1';
    toggleShowEmptyCart();
    toggleShowCartItemCount();

    // settimeout to add event listener to the delete icon of each cart item
    setTimeout(() => {
        deleteIcons = Array.from(document.querySelectorAll('[data-delete-icon]'))!;
        deleteIcons.forEach(icon => {
            icon.addEventListener('click', function(){
                const cartItem = icon.parentElement.parentElement;
                if(cartItemsContainer.contains(cartItem)){
                    cartItemsContainer.removeChild(cartItem);
                    cartItemsCount--;
                    toggleShowEmptyCart();
                    toggleShowCartItemCount();
                }
            })
    }, 0)
    
    })

    console.log(deleteIcons)
})

plusBtn.addEventListener('click', () => {
    currentQuantity = quantity.textContent;
    currentQuantity = Number(currentQuantity);
    currentQuantity++;
    quantity.textContent = currentQuantity.toString();
})

minusBtn.addEventListener('click', () => {
    if(Number(quantity.textContent) == 1) return;
    currentQuantity = quantity.textContent;
    currentQuantity = Number(currentQuantity);
    currentQuantity--;
    quantity.textContent = currentQuantity.toString();
})

menuIcon.addEventListener('click', () => {
    navlinks.classList.toggle('show');
})

closeIcon.addEventListener('click', () => {
    navlinks.classList.toggle('show');
})

const removeActiveClass = (items:Array<HTMLDivElement>) => {
    items.forEach(item => {
        item.classList.remove('active');
    })
}

nextBtn.addEventListener('click', () => {
    imageIndex++;
    if(imageIndex == 4) imageIndex = 0;
    removeActiveClass(imageElems as Array<HTMLDivElement>);
    imageElems[imageIndex].classList.add('active');
})

previousBtn.addEventListener('click', () => {
    imageIndex--;
    if(imageIndex == -1) imageIndex = 3;
    removeActiveClass(imageElems as Array<HTMLDivElement>);
    imageElems[imageIndex].classList.add('active');
})

thumbnailContainers.forEach((tc, index) =>{
    tc.addEventListener('click', () => {
        removeActiveClass(thumbnailContainers as Array<HTMLDivElement> );
        removeActiveClass(imageElems as Array<HTMLDivElement> );
        tc.classList.add('active');
        imageElems[index].classList.add('active');
    })
})

console.log('end of script');