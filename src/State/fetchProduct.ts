import axios from "axios";

// const api ="http://localhost:5454/products";/
const api = process.env.REACT_APP_API_BASE_URL + "/products";

export const fetchProducts = async()=>{
  try {
    const response = await axios.get(api);
    console.log("response", response);
  } catch (error) {
    console.log(error);
  }
}