// icons
import burger from "../../assets/menu/burger.svg";
import chakna from "../../assets/menu/chakna.svg";
import combos from "../../assets/menu/combos.svg";
import drinks from "../../assets/menu/drinks.svg";
import hoddog from "../../assets/menu/hoddog.svg";
import ramen from "../../assets/menu/noodles.svg";
import pizza from "../../assets/menu/pizza.svg";
import sandwiches from "../../assets/menu/sandwiches.svg";

//imagesburger
import burger1 from "../../assets/menu/burger/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon.jpg";
import burger2 from "../../assets/menu/burger/front-view-burger-stand.jpg";
import burger3 from "../../assets/menu/burger/front-view-tasty-meat-burger-with-cheese-salad-dark-background.jpg";
import burger4 from "../../assets/menu/burger/beef-cotlet-burger-with-sauce-wooden-board.jpg";

//imagespizza
import pizza1 from "../../assets/menu/pizza/crispy-mixed-pizza-with-olives-sausage.jpg";
import pizza2 from "../../assets/menu/pizza/mixed-pizza-with-various-ingridients.jpg";
import pizza3 from "../../assets/menu/pizza/side-view-pizza-with-slices-bell-pepper-pizza-slices-flour-board-cookware.jpg";
import pizza4 from "../../assets/menu/pizza/top-view-pepperoni-pizza-sliced-into-six-slices.jpg";

//imagessandwiches
import sand1 from "../../assets/menu/sandwiches/club-sandwiches-with-tomato-ketchup-mayonnaise-potatoes.jpg";
import sand2 from "../../assets/menu/sandwiches/club-sandwich-panini-with-ham-cheese-tomato-herbs.jpg";
import sand3 from "../../assets/menu/sandwiches/front-view-delicious-ham-sandwiches-wooden-board-dark-surface.jpg";
import sand4 from "../../assets/menu/sandwiches/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board.jpg";

//imgaeschakna
import chak1 from "../../assets/menu/chakna/0e6247448805e6cab8b9a3e2d2755168.jpg";
import chak2 from "../../assets/menu/chakna/BeFunky.jpg";
import chak3 from "../../assets/menu/chakna/Chakna.jpg";

//combos

import combo1 from "../../assets/menu/combos/f0eba657c28142f5bcaf706a2e54ea77.jpg";
import combo2 from "../../assets/menu/combos/kfc-favorites.jpg";
import combo3 from "../../assets/menu/combos/wednesday-special-deal.png";

//drink
import drink1 from "../../assets/menu/drinks/bar-tender-pours-syrup-into-red-cocktail-glass.jpg";
import drink2 from "../../assets/menu/drinks/drinks-to-avoid-1621959532.jpg";
import drink3 from "../../assets/menu/drinks/vodka-red-bull.jpg";

//hoddog

import dog1 from "../../assets/menu/hoddog/hot-dog-combinations-with-crazy-toppings.jpg";
import dog2 from "../../assets/menu/hoddog/hotdogs-te-main-200702.jpg";

//ramen

import ramen1 from "../../assets/menu/noodles/chinese-fried-noodles-basic-recipe-2.jpg";

import ramen2 from "../../assets/menu/noodles/hakka-chow-1920x1080.jpg";

import ramen3 from "../../assets/menu/noodles/hakka-noodles-recipe.jpg";

const menu = [
  {
    id: "0",
    name: "burger",
    icon: burger,
    type: [
      {
        id: "0a",
        name: "Goan Burger",
        img: burger1,
        price: 7.49,
        qty: 0,
      },
      {
        id: "0b",
        name: "Desi Burger",
        img: burger2,
        price: 9.49,
        qty: 0,
      },
      {
        id: "0c",
        name: "Hamburger",
        img: burger3,
        price: 5.0,
        qty: 0,
      },
      {
        id: "0d",
        name: "Chicken burger",
        img: burger4,
        price: 10.0,
        qty: 0,
      },
    ],
  },
  {
    id: "1",
    name: "pizza",
    icon: pizza,
    type: [
      {
        id: "1a",
        name: "Italian Pizza",
        img: pizza1,
        price: 17.49,
        qty: 0,
      },
      {
        id: "1b",
        name: "Spicy desi Pizza",
        img: pizza2,
        price: 29.49,
        qty: 0,
      },
      {
        id: "1c",
        name: "Crispy wafered",
        img: pizza3,
        price: 15.0,
        qty: 0,
      },
      {
        id: "1d",
        name: "Chickenpizza",
        img: pizza4,
        price: 80.0,
        qty: 0,
      },
    ],
  },
  {
    id: "2",
    name: "Sandwiches",
    icon: sandwiches,
    type: [
      {
        id: "2a",
        name: "Goan Sandwich",
        img: sand1,
        price: 14.49,
        qty: 0,
      },
      {
        id: "2b",
        name: "Makhan sandwich",
        img: sand2,
        price: 9.49,
        qty: 0,
      },
      {
        id: "2c",
        name: "Ham Sandwich",
        img: sand3,
        price: 5.0,
        qty: 0,
      },
      {
        id: "2d",
        name: "Anda sandwich",
        img: sand4,
        price: 10.0,
        qty: 0,
      },
    ],
  },
  {
    id: "3",
    name: "Chakna",
    icon: chakna,
    type: [
      {
        id: "3a",
        name: "Spicy Chakna",
        img: chak1,
        price: 7.49,
        qty: 0,
      },
      {
        id: "3b",
        name: "Peanut chakna",
        img: chak2,
        price: 2.49,
        qty: 0,
      },
      {
        id: "3c",
        name: "Rajma Chakna",
        img: chak3,
        price: 5.0,
        qty: 0,
      },
    ],
  },
  {
    id: "4",
    name: "combos",
    icon: combos,
    type: [
      {
        id: "4a",
        name: "Goan Combo",
        img: combo1,
        price: 50.1,

        qty: 0,
      },
      {
        id: "4b",
        name: "kfc combo",
        img: combo2,
        price: 9.49,
        qty: 0,
      },
      {
        id: "4c",
        name: "Couples Combo",
        img: combo3,
        price: 5.0,
        qty: 0,
      },
    ],
  },
  {
    id: "5",
    name: "drinks",
    icon: drinks,
    type: [
      {
        id: "5a",
        name: "Goan Vodka",
        img: drink1,
        price: 40.49,
        qty: 0,
      },
      {
        id: "5b",
        name: "Tequila",
        img: drink2,
        price: 21.49,
        qty: 0,
      },
      {
        id: "5c",
        name: "Redbul",
        img: drink3,
        price: 35.0,
        qty: 0,
      },
    ],
  },
  {
    id: "6",
    name: "hoddog",
    icon: hoddog,
    type: [
      {
        id: "6a",
        name: "Goan hoddog",
        img: dog1,
        price: 17.49,
        qty: 0,
      },
      {
        id: "6b",
        name: "Veg hod dog",
        img: dog2,
        price: 9.49,
        qty: 0,
      },
    ],
  },
  {
    id: "7",
    name: "ramen",
    icon: ramen,
    type: [
      {
        id: "7a",
        name: "Goan Noodles",
        img: ramen1,
        price: 47.49,
        qty: 0,
      },
      {
        id: "7b",
        name: "Xi jin ping noodles",
        img: ramen2,
        price: 9.49,
        qty: 0,
      },
      {
        id: "7c",
        name: "Chinese spicy noodles",
        img: ramen3,
        price: 25.0,
        qty: 0,
      },
    ],
  },
];
export default menu;
