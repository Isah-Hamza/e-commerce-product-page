"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log('start of script');
var menuIcon = document.querySelector('[data-menu-img]');
var closeIcon = document.querySelector('[data-close-img]');
var navlinks = document.querySelector('[data-navlinks]');
var thumbnailContainers = __spreadArray([], document.querySelectorAll('[data-thumbnail-container]'), true);
var imageElems = __spreadArray([], document.querySelectorAll('[data-image-container] > img'), true);
var previousBtn = document.querySelector('[data-previous-btn]');
var nextBtn = document.querySelector('[data-next-btn]');
var plusBtn = document.querySelector('[data-plus-btn]');
var minusBtn = document.querySelector('[data-minus-btn]');
var quantity = document.querySelector('[data-quantity]');
var cartItems = document.querySelector('[data-cart-item-count]');
var cartBtn = document.querySelector('[data-cart-btn]');
var deleteIcons = Array.from(document.querySelectorAll('[data-delete-icon]'));
var cartItemsContainer = document.querySelector('[data-cart-items-container]');
var cartItemTemplate = document.querySelector('[data-cart-item-template]');
var emptyText = cartItemsContainer.querySelector('p');
console.log(cartItems);
var cartItemsCount = 0;
var imageIndex = 0;
var currentQuantity = 1;
var toggleShowEmptyCart = function () {
    if (cartItemsCount <= 0) {
        emptyText.style.display = 'block';
    }
    else {
        emptyText.style.display = 'none';
    }
};
var toggleShowCartItemCount = function () {
    if (cartItemsCount <= 0) {
        cartItems.style.display = 'none';
    }
    else {
        cartItems.style.display = 'flex';
        var cartItemCountSpan = cartItems.children[0];
        cartItemCountSpan.textContent = cartItemsCount.toString();
    }
};
cartBtn.addEventListener('click', function () {
    var cartItem = cartItemTemplate.content.cloneNode(true).children[0];
    var quantity = cartItem.querySelector('[data-quantity]');
    var total = cartItem.querySelector('[data-total');
    quantity.textContent = currentQuantity.toString();
    total.textContent = "$ ".concat((currentQuantity * 125));
    cartItemsContainer.prepend(cartItem);
    cartItemsCount++;
    globalThis.quantity.textContent = '1';
    toggleShowEmptyCart();
    toggleShowCartItemCount();
    // settimeout to add event listener to the delete icon of each cart item
    setTimeout(function () {
        deleteIcons = Array.from(document.querySelectorAll('[data-delete-icon]'));
        deleteIcons.forEach(function (icon) {
            icon.addEventListener('click', function () {
                var cartItem = icon.parentElement.parentElement;
                if (cartItemsContainer.contains(cartItem)) {
                    cartItemsContainer.removeChild(cartItem);
                    cartItemsCount--;
                    toggleShowEmptyCart();
                    toggleShowCartItemCount();
                }
            });
        }, 0);
    });
    console.log(deleteIcons);
});
plusBtn.addEventListener('click', function () {
    currentQuantity = quantity.textContent;
    currentQuantity = Number(currentQuantity);
    currentQuantity++;
    quantity.textContent = currentQuantity.toString();
});
minusBtn.addEventListener('click', function () {
    if (Number(quantity.textContent) == 1)
        return;
    currentQuantity = quantity.textContent;
    currentQuantity = Number(currentQuantity);
    currentQuantity--;
    quantity.textContent = currentQuantity.toString();
});
menuIcon.addEventListener('click', function () {
    navlinks.classList.toggle('show');
});
closeIcon.addEventListener('click', function () {
    navlinks.classList.toggle('show');
});
var removeActiveClass = function (items) {
    items.forEach(function (item) {
        item.classList.remove('active');
    });
};
nextBtn.addEventListener('click', function () {
    imageIndex++;
    if (imageIndex == 4)
        imageIndex = 0;
    removeActiveClass(imageElems);
    imageElems[imageIndex].classList.add('active');
});
previousBtn.addEventListener('click', function () {
    imageIndex--;
    if (imageIndex == -1)
        imageIndex = 3;
    removeActiveClass(imageElems);
    imageElems[imageIndex].classList.add('active');
});
thumbnailContainers.forEach(function (tc, index) {
    tc.addEventListener('click', function () {
        removeActiveClass(thumbnailContainers);
        removeActiveClass(imageElems);
        tc.classList.add('active');
        imageElems[index].classList.add('active');
    });
});
console.log('end of script');
module.exports = {};
