"use client";

import React, { useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  quantity: number;
}

interface ProductListProps {
  products: Product[];
  onUpdateProduct: () => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onUpdateProduct }) => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newQuantity, setNewQuantity] = useState(0);

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setNewQuantity(product.quantity);
  };

  const handleSave = async (product: Product) => {
    try {
      await axios.put(`http://3.19.188.137:8084/products/${product.name}`, { quantity: newQuantity });
      setEditingProduct(null);
      onUpdateProduct();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Name</th>
          <th className="py-2">Quantity</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="border px-4 py-2">{product.name}</td>
            <td className="border px-4 py-2">
              {editingProduct?.id === product.id ? (
                <input
                  type="number"
                  value={newQuantity}
                  onChange={(e) => setNewQuantity(Number(e.target.value))}
                  className="border p-2"
                />
              ) : (
                product.quantity
              )}
            </td>
            <td className="border px-4 py-2">
              {editingProduct?.id === product.id ? (
                <button
                  onClick={() => handleSave(product)}
                  className="bg-blue-500 text-white p-2"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-yellow-500 text-white p-2"
                >
                  Edit
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
