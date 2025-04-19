"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "@/data/Products/products";

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "alphaAsc" | "alphaDesc">("asc");

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOrder) {
      case "asc":
        return a.preco - b.preco;
      case "desc":
        return b.preco - a.preco;
      case "alphaAsc":
        return a.nome.localeCompare(b.nome);
      case "alphaDesc":
        return b.nome.localeCompare(a.nome);
      default:
        return 0;
    }
  });

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Catálogo de Produtos</h1>

      <div className="flex justify-end mb-6">
        <label htmlFor="priceFilter" className="mr-4 text-lg">Ordenar por:</label>
        <select
          id="priceFilter"
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc" | "alphaAsc" | "alphaDesc")}
          value={sortOrder}
          className="p-2 border rounded bg-gray-200 text-gray-800 cursor-pointer"
        > 
          <option value="asc" >Menor Preço </option >
          <option value="desc">Maior Preço</option>
          <option value="alphaAsc">Ordem Alfabética (A-Z)</option>
          <option value="alphaDesc">Ordem Alfabética (Z-A)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.slice(0, visibleCount).map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      {visibleCount < sortedProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 border border-[#6A0DAD] cursor-pointer"
          >
            Ver Mais
          </button>
        </div>
      )}
    </div>
  );
}
