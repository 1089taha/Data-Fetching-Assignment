import { FC } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

interface Books {
  id: number;
  name: string;
  type: string;
  available: boolean;
}


const fetchProducts = async (): Promise<Books[]> => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  if (!response.ok) {
    throw new Error("Failed to fetch Books");
  }
  return response.json();
};






const ServerPage: FC = async () => {
  const products = await fetchProducts();

  return (
    <>
    <div>
      <Navbar heading="Server Side Data Fetching" />
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-5 mt-16 md:mt-8 px-5 lg:px-20">
        <h2 className="font-semibold text-2xl lg:text-4xl text-red-700">
          New Year Sale 70% Off :
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {products.map((product) => (
          <div key={product.id} className="w-full max-w-[300px] mx-auto h-auto flex flex-col border p-4 rounded shadow-lg">
            <h3 className="font-medium text-lg">{product.name}</h3>
            <p className="text-sm text-gray-700">{product.type}</p>
            <p
              className={`font-semibold text-xl ${
                product.available ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.available ? "Available" : "Out of Stock"}
            </p>
            <div className="mt-4 flex gap-2">
              <button
                className={`px-4 py-2 rounded ${
                  product.available
                    ? "bg-red-800 text-white hover:bg-blue-600 ease-in duration-300"
                    : "bg-red-800 text-black cursor-not-allowed ease-in duration-300"
                }`}
                disabled={!product.available}
              >
                Add to Cart
              </button>
              <button className="bg-red-800 px-4 py-2 rounded text-white hover:bg-blue-600 ease-in duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
    </>
  );
};

export default ServerPage;
