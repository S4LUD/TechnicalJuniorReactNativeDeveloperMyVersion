// Temporary images, using fs breaks the system
import Slide_01 from "../assets/images/Slides/Slide_01.jpg";
import Slide_02 from "../assets/images/Slides/Slide_02.jpg";
import Slide_03 from "../assets/images/Slides/Slide_03.jpg";
import Shoes from "../assets/images/Categories/Shoes.png";
import Tops from "../assets/images/Categories/Tops.png";
import Bottoms from "../assets/images/Categories/Bottoms.png";
import Hoodies from "../assets/images/Categories/Hoodies.png";
import FS1 from "../assets/images/FlashSale/FS1.jpg";
import FS2 from "../assets/images/FlashSale/FS2.jpg";
import FS3 from "../assets/images/FlashSale/FS3.jpg";
import FS4 from "../assets/images/FlashSale/FS4.jpg";
import FS5 from "../assets/images/FlashSale/FS5.jpg";
import R1 from "../assets/images/Recommened/R1.jpg";
import R2 from "../assets/images/Recommened/R2.jpg";
import R3 from "../assets/images/Recommened/R3.jpg";
import R4 from "../assets/images/Recommened/R4.jpg";
import R5 from "../assets/images/Recommened/R5.jpg";
import R6 from "../assets/images/Recommened/R6.jpg";
import R7 from "../assets/images/Recommened/R7.jpg";
import R8 from "../assets/images/Recommened/R8.jpg";
import R9 from "../assets/images/Recommened/R9.jpg";
import R10 from "../assets/images/Recommened/R10.jpg";
import R11 from "../assets/images/Recommened/R11.jpg";

export const TopImageData = [
  { _id: 1, image: Slide_01 },
  { _id: 2, image: Slide_02 },
  { _id: 3, image: Slide_03 },
];

export const Category = [
  "Men",
  "Women",
  "New Arrival",
  "LAST Collection",
  "Home",
  "SHOP",
];

export const ShopCategory = [
  { _id: 1, name: "Shoes", image: Shoes },
  { _id: 4, name: "Hoodies", image: Hoodies },
  { _id: 3, name: "Tops", image: Tops },
  { _id: 4, name: "Bottoms", image: Bottoms },
];

export const FlashSale = [
  { _id: 1, price: 381, discount: 26, image: FS1 },
  { _id: 4, price: 845, discount: 23, image: FS2 },
  { _id: 3, price: 944, discount: 28, image: FS3 },
  { _id: 4, price: 376, discount: 27, image: FS4 },
  { _id: 4, price: 403, discount: 25, image: FS5 },
];

export const Recommend = [
  { _id: 1, price: 381, discount: 26, image: R1, category: "Denim" },
  { _id: 2, price: 845, discount: 23, image: R2, category: "Sweater" },
  { _id: 3, price: 944, discount: 28, image: R3, category: "T-Shirt" },
  { _id: 4, price: 583, discount: 27, image: R4, category: "Long Sleeves" },
  { _id: 5, price: 403, discount: 25, image: R5, category: "T-Shirt" },
  { _id: 6, price: 832, discount: 27, image: R6, category: "Clothes" },
  { _id: 7, price: 903, discount: 26, image: R7, category: "T-Shirt" },
  { _id: 9, price: 442, discount: 28, image: R9, category: "Shoes" },
  { _id: 10, price: 568, discount: 25, image: R10, category: "Jacket" },
];

export const Recommendv2 = [
  { _id: 2, price: 845, discount: 23, image: R2, category: "Sweater" },
  { _id: 5, price: 403, discount: 25, image: R5, category: "T-Shirt" },
  { _id: 10, price: 568, discount: 25, image: R10, category: "Jacket" },
];

export const Recommendv3 = [
  { _id: 1, price: 381, discount: 26, image: R1, category: "Denim" },
  { _id: 2, price: 845, discount: 23, image: R2, category: "Sweater" },
  { _id: 3, price: 944, discount: 28, image: R3, category: "T-Shirt" },
  { _id: 4, price: 583, discount: 27, image: R4, category: "Long Sleeves" },
  { _id: 5, price: 403, discount: 25, image: R5, category: "T-Shirt" },
  { _id: 6, price: 832, discount: 27, image: R6, category: "Clothes" },
  { _id: 7, price: 903, discount: 26, image: R7, category: "T-Shirt" },
  { _id: 9, price: 442, discount: 28, image: R9, category: "Shoes" },
  { _id: 10, price: 568, discount: 25, image: R10, category: "Jacket" },
];
