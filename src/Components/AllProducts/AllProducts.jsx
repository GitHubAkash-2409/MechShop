import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import productImg from "../../assets/productImg.jpg";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectProducts, setSelectProducts] = useState([]);
  const [showProduct, setShowProduct] = useState(false);

  // All Products
  useEffect(() => {
    const AllProducts = async () => {
      try {
        const res = await axios("https://dummyjson.com/products");
        setAllProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    AllProducts();
  }, []);

  // Products Categories
  useEffect(() => {
    const getAllproductsCategories = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");
        console.log(res.data);

        setAllCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllproductsCategories();
  }, []);

  const filterproducts = (allProducts) => {
    setSelectProducts(allProducts);
    setShowProduct(true);
  };

  // Single Products
  useEffect(() => {
    const singleProducts = async () => {
      try {
        if (selectProducts) {
          const res = await axios(
            `https://dummyjson.com/products/category/${selectProducts}`
          );
          setProducts(res.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };

    singleProducts();
  }, [selectProducts]);

  return (
    <>
      <Layout>
        <div>
          {/* Product Banner Section */}
          <div className="relative">
            <img
              src={productImg}
              className="w-full object-cover object-center h-[250px]"
            />
            <div className="bg-black w-full h-[250px] absolute top-0 left-0 opacity-[0.2]"></div>
          </div>

          {/* Product Categories Section */}
          <div className="flex gap-3 flex-wrap">
            <select onChange={(e) => filterproducts(e.target.value)}>
              <option>Filter Products by Categories</option>
              {allCategories
                .filter(
                  (filterItem) =>
                    ![
                      "lighting",
                      "automotive",
                      "automotive",
                      "furniture",
                      "groceries",
                      "motorcycle",
                    ].includes(filterItem)
                )
                .map((allProducts, index) => (
                  <option value={allProducts}>{allProducts}</option>
                ))}
            </select>
          </div>

          {showProduct ? (
            <div className="flex flex-wrap justify-center">
              {products.map((item, id) => (
                <div className="m-4 w-64 h-96" key={id}>
                  <div className="max-w-full h-full rounded overflow-hidden shadow-lg bg-white">
                    <img
                      className="w-full h-48 object-cover"
                      src={item.thumbnail}
                      alt={item.title}
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-lg mb-2 text-gray-800">
                        {item.title}
                      </div>
                      <p className="text-gray-700 text-base">
                        Price:{" "}
                        <span className="font-semibold">${item.price}</span>
                      </p>
                      <p className="text-gray-700 text-base">
                        Rating:{" "}
                        <span className="font-semibold">{item.rating}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-3
            ">
              {allProducts.map((AllItems, index) => (
                <div className="m-4 w-64 h-96" key={index}>
                  <div className="max-w-full h-full rounded overflow-hidden shadow-lg bg-white">
                    <img
                      className="w-full h-48 object-cover"
                      src={AllItems.thumbnail}
                      alt={AllItems.title}
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-lg mb-2 text-gray-800">
                        {AllItems.title}
                      </div>
                      <p className="text-gray-700 text-base">
                        Price:{" "}
                        <span className="font-semibold">${AllItems.price}</span>
                      </p>
                      <p className="text-gray-700 text-base">
                        Rating:{" "}
                        <span className="font-semibold">{AllItems.rating}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default AllProducts;
