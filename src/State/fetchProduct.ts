import axios from "axios";

// const api ="http://localhost:5454/products";/
const api ="http://solona-ecommerce.onrender.com/products";

export const fetchProducts = async()=>{
  try {
    const response = await axios.get(api);
    console.log("response", response);
  } catch (error) {
    console.log(error);
  }
}