const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 19,
    description: "The Air Force 1 was created by designer Bruce Kilgore and was the first basketball shoe to use the Nike Air technology.",
    colors: [
      {
        code: "black",
        img: "./img/Product/air.png",
      },
      {
        code: "darkblue",
        img: "./img/Product/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 239,
    description: "The Air Jordan line is a collection of basketball shoes and athletic wear produced by Nike for NBA legend Michael Jordan.",
    colors: [
      {
        code: "lightgray",
        img: "./img/Product/jordan.png",
      },
      {
        code: "green",
        img: "./img/Product/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 919,
    description: "The Blazer combines vintage basketball style with modern comfort, making it a stylish yet functional sneaker.",
    colors: [
      {
        code: "lightgray",
        img: "./img/Product/blazer.png",
      },
      {
        code: "green",
        img: "./img/Product/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 9,
    description: "The Crater series is known for its environmentally friendly materials, giving you comfort with a reduced carbon footprint.",
    colors: [
      {
        code: "black",
        img: "./img/Product/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/Product/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 1009,
    description: "A bold and unconventional style, the Hippie sneakers are made for those who want to make a statement with their footwear.",
    colors: [
      {
        code: "gray",
        img: "./img/Product/hippie.png",
      },
      {
        code: "black",
        img: "./img/Product/hippie2.png",
      },
    ],
  },
  {
    id: 6,
    title: "SKIBDI",
    price: 229,
    description: "Designed for urban adventurers, the SKIBDI offers both durability and flair for those who embrace an active lifestyle.",
    colors: [
      {
        code: "black",
        img: "./img/Product/SKIBDI.png",
      },
      {
        code: "lightgray",
        img: "./img/Product/SKIBDI.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDescription = document.querySelector(".productDesc"); // added description element
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the chosen product
    choosenProduct = products[index];

    // Change the product title, price, and description
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductDescription.textContent = choosenProduct.description; // dynamically update description
    currentProductImg.src = choosenProduct.colors[0].img;

    // Assign new colors
    currentProductColors.forEach((color, index) => {
      if (choosenProduct.colors[index]) {
        color.style.backgroundColor = choosenProduct.colors[index].code;
        color.style.display = "inline-block";
      } else {
        color.style.display = "none";
      }
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    if (choosenProduct.colors[index]) {
      currentProductImg.src = choosenProduct.colors[index].img;
    }
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

if (productButton && payment) {
  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });
}

if (close && payment) {
  close.addEventListener("click", () => {
    payment.style.display = "none";
  });
}
