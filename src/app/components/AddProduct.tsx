"use client";

import React, { useState } from "react";
import axios from "axios";

interface AddProductProps {
  onAddProduct: () => void;
}

const AddProduct: React.FC<AddProductProps> = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8082/products", { name, quantity });
      onAddProduct();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        className="border p-2"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        placeholder="Quantity"
        className="border p-2"
      />
      <button type="submit" className="bg-green-500 text-white p-2">
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
