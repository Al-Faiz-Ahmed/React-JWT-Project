import bcrypt from 'bcryptjs'
const productsDetails = [
  {
    _id: "1",
    name: "Adidas Shirt and Pant",
    category: "Shirts",
    image: "product 1.png",
    price: 120,
    brand: "Adidas",
    rating: 3.5,
    countInStock:3,
    numReviews: 10,
    description: "high quality product",
  },
  {
    _id: "2",
    name: "Reliance Bagpack",
    category: "Bags",
    image: "product 2.png",
    price: 100,
    brand: "Reliance",
    rating: 4.0,
    countInStock:0,
    numReviews: 10,
    description: "high quality product",
  },
  {
    _id: "3",
    name: "lacoste Shorts",
    category: "Pants",
    image: "product 3.png",
    price: 220,
    brand: "lacoste",
    rating: 4.8,
    countInStock:5,
    numReviews: 17,
    description: "high quality product",
  },
  {
    _id: "4",
    name: "Nike summer T-shirt",
    category: "Shirts",
    image: "product 4.png",
    price: 220,
    brand: "Nike",
    rating: 4.4,
    countInStock:18,
    numReviews: 14,
    description: "high quality product",
  },
  {
    _id: "5",
    name: "Nike Denim shirt",
    category: "Shirts",
    image: "product 5.png",
    price: 180,
    brand: "Nike",
    rating: 4.8,
    countInStock:0,
    numReviews: 22,
    description: "high quality product",
  },
  {
    _id: "6",
    name: "Armour Denim Shorts",
    category: "Pants",
    image: "product 6.png",
    price: 150,
    brand: "Armour",
    rating: 4.5,
    countInStock:15,
    numReviews: 20,
    description: "high quality product",
  },
];
const users = [
  {
    name:"Faiz Ahmed",
    email:"faizan@example.com",
    password:bcrypt.hashSync("1234",8),
    isAdmin:true
    
    
  },
  {
    name:"Sammak Khan",
    email:"sammak@example.com",
    password:bcrypt.hashSync("1234",8),
    isAdmin:false

  },
]
export default productsDetails