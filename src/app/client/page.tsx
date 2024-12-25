"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ClientPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar heading="Client Side Data Fetching" />
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-700"></div>
          <p className="ml-3 font-semibold">Loading...</p>
        </div>
      ) : (
        <div className="relative w-full mt-5 px-5 lg:px-10 h-auto">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-5 mt-16 md:mt-8">
            <h2 className="font-semibold text-2xl lg:text-4xl text-red-700">
              New Year Sale
            </h2>
            <div className="flex gap-5 items-center">
              <div className="flex flex-col ml-5 md:ml-10">
                <p className="text-xs">Days</p>
                <h3 className="font-bold text-2xl md:text-3xl">
                  {timeLeft.days}
                </h3>
              </div>
              <span className="text-red-700 text-3xl">:</span>
              <div className="flex flex-col">
                <p className="text-xs">Hours</p>
                <h3 className="font-bold text-2xl md:text-3xl">
                  {timeLeft.hours}
                </h3>
              </div>
              <span className="text-red-700 text-3xl">:</span>
              <div className="flex flex-col">
                <p className="text-xs">Minutes</p>
                <h3 className="font-bold text-2xl md:text-3xl">
                  {timeLeft.minutes}
                </h3>
              </div>
              <span className="text-red-700  text-3xl">:</span>
              <div className="flex flex-col">
                <p className="text-xs">Seconds</p>
                <h3 className="font-bold text-2xl md:text-3xl">
                  {timeLeft.seconds}
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full max-w-[270px] mx-auto h-auto flex flex-col"
              >
                <div className="h-[70%] shadow-md flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-auto h-full object-contain"
                    />
                  </div>
                </div>
                <div className="mt-6 flex-1">
                  <h3 className="font-bold">{product.title}</h3>
                  <p className="text-[15px] text-gray-500 font-semibold">
                    {product.description.length > 50
                      ? `${product.description.slice(0, 50)}...`
                      : product.description}
                  </p>
                  <p className="text-sm text-gray-500">${product.price}</p>
                  <p className="text-yellow-400 text-sm">
                    {"★".repeat(Math.round(product.rating.rate))} (
                    {product.rating.count})
                  </p>
                  <div className="flex flex-col gap-3 mt-3">
                    <button className="bg-red-700 rounded-[5px] text-white h-[50px] w-full hover:bg-blue-500 ease-in duration-300">
                      Add To Cart
                    </button>
                    <button className="bg-red-700 rounded-[5px] text-white h-[50px] w-full hover:bg-blue-500 ease-in duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ClientPage;
