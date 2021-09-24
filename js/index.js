const productsList = [
  {
    name: "iPhone Pro",
    img: "img/iphone-bg.jpg",
    price: "$100",
  },
  {
    name: "iPad Pro",
    img: "img/ipad-bg.jpg",
    price: "$100",
  },
  {
    name: "iMac",
    img: "img/imac-bg.jpg",
    price: "$100",
  },
  {
    name: "Macbook Pro",
    img: "img/macbook-bg.png",
    price: "$100",
  },
  {
    name: "Mac mini",
    img: "img/mac-mini-bg.jpg",
    price: "$100",
  },
  {
    name: "iWatch",
    img: "img/iwatch-bg.jpg",
    price: "$100",
  },
];

const productTemplate = (product) => {
  return /* html */ `
    <div class="product__item">
      <img src="${product.img}" alt="" class="product__img">
      <div class="product__info">
        <h3 class="product__name">${product.name}</h3>
        <span class="product__price">${product.price}</span>
      </div>
    </div>`;
};

const makeProductsList = () => {
  const container = document.querySelector(".product__list");
  productsList.forEach(product => {
    container.innerHTML += productTemplate(product);
  });
};

document.addEventListener('DOMContentLoaded', makeProductsList)