"use client";

import React, { useState, useEffect } from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  quantity: number;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://3.17.178.105:8083/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">Minimarket Product Management</h1>
      <AddProduct onAddProduct={fetchProducts} />
      <button className="bg-blue-500 text-white p-2 mt-2" onClick={fetchProducts}>
        List Products
      </button>
      <ProductList products={products} onUpdateProduct={fetchProducts} />
    </div>
  );
};

export default Home;
