const pricesButtons = document.querySelectorAll('.wishlist__product-button');

[...pricesButtons].forEach((button) => {
  button.addEventListener('click', (e) => {
    changeModalType('wishlist', 'prices')
  })
})