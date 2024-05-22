const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

//used for product colour choose
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 6990,
      colors: [
        {
          code: "black",
          img: "air.png",
        },
        {
          code: "darkblue",
          img: "air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 7990,
      colors: [
        {
          code: "lightgray",
          img: "jordan.png",
        },
        {
          code: "green",
          img: "jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 4990,
      colors: [
        {
          code: "lightgray",
          img: "blazer.png",
        },
        {
          code: "green",
          img: "blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 10990,
      colors: [
        {
          code: "black",
          img: "crater.png",
        },
        {
          code: "lightgray",
          img: "crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 3990,
      colors: [
        {
          code: "gray",
          img: "hippie.png",
        },
        {
          code: "black",
          img: "hippie2.png",
        },
      ],
    },
  ];
  
  let choosenProduct = products[0];
  
  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");

//used for slider transition
menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the colour slide
        wrapper.style.transform= `translateX(${-100 * index}vw)`
        //change the choosen product
        choosenProduct = products[index]

        //change texts and images of current product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "BDT"+ choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assigning new color of shoes
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
          });

    });
});
//click on the color and change the shoe color
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
       currentProductImg.src = choosenProduct.colors[index].img 
    });
});
//click size
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

//used to show details form by tap on the Buy Now button
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
close.addEventListener("click", () => {
    payment.style.display = "none";
  });