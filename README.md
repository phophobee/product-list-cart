# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Git Repository](https://github.com/phophobee/product-list-cart)
- Live Site URL: [GitHub Pages](https://phophobee.github.io/product-list-cart/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com) - CSS framework

### What I learned

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      rel="icon"
      type="image/svg+xml"
      href="./public/images/favicon-32x32.png"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Product List Cart Main</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: "Red Hat";
  src: url(/public/fonts/RedHatDisplayRegular.ttf) format("truetype");
}

@font-face {
  font-family: "Red Hat Bold";
  src: url(/public/fonts/RedHatDisplayBold.ttf) format("truetype");
}

@font-face {
  font-family: "Red Hat Italic";
  src: url(/public/fonts/RedHatDisplayItalic.ttf) format("truetype");
}

body {
  @apply bg-[#FAF9F6] text-gray-800 font-redhat;
}
```

```js
export const desserts = [
  {
    id: 1,
    name: "Waffle with Berries",
    price: 6.5,
    image: "image-waffle-desktop.jpg",
    short_name: "Waffle",
  },
  {
    id: 2,
    name: "Vanilla Bean Crème Brûlée",
    price: 7.0,
    image: "image-creme-brulee-desktop.jpg",
    short_name: "Creme Brulee",
  },
  {
    id: 3,
    name: "Macaron Mix of Five",
    price: 8.0,
    image: "image-macaron-desktop.jpg",
    short_name: "Macaron",
  },
  {
    id: 4,
    name: "Classic Tiramisu",
    price: 5.5,
    image: "image-tiramisu-desktop.jpg",
    short_name: "Tiramisu",
  },
  {
    id: 5,
    name: "Pistachio Baklava",
    price: 4.0,
    image: "image-baklava-desktop.jpg",
    short_name: "Baklava",
  },
  {
    id: 6,
    name: "Lemon Meringue Pie",
    price: 5.0,
    image: "image-meringue-desktop.jpg",
    short_name: "Pie",
  },
  {
    id: 7,
    name: "Red Velvet Cake",
    price: 4.5,
    image: "image-cake-desktop.jpg",
    short_name: "Red Velvet",
  },
  {
    id: 8,
    name: "Salted Caramel Brownie",
    price: 5.5,
    image: "image-brownie-desktop.jpg",
    short_name: "Brownies",
  },
  {
    id: 9,
    name: "Vanilla Panna Cotta",
    price: 6.5,
    image: "image-panna-cotta-desktop.jpg",
    short_name: "Panna Cotta",
  },
];
```

## Author

- Frontend Mentor - [@phophobee](https://www.frontendmentor.io/profile/phophobe)
