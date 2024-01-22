import axios from "axios";

export async function getAllProducts() {
  const { data } = await axios.get(
    `${import.meta.env.VITE_SERVER_URL}/api/products`
  );
  return data;
}

export async function getProductById(id) {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/products/${id}`
    );
    return data;
  }

  
  export async function createNewProduct(payload) {
    const data = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/products` ,
      payload
    );
    return data;
  }


  export async function deleteProductById(id) {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_SERVER_URL}/api/products/${id}`
    );
    return data;
  }
  
