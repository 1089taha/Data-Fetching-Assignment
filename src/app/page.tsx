import Link from "next/link";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col  items-center justify-center px-10">
      <main className="flex flex-col items-center py-12">
        <h1 className="text-3xl lg:text-6xl font-bold mb-4 text-center">Welcome To My Data Fetching <span className="text-red-800">Assignment</span></h1>
        <p className="text-lg text-center mb-8">
        Dive into the comprehensive exploration of data fetching strategies, focusing on Client-Side Rendering (CSR) and Server-Side Rendering (SSR) using the powerful capabilities of Next.js. This project provides an in-depth understanding of how to effectively manage data retrieval and rendering for optimized web performance and user experience.
        </p>

        <div className="flex space-x-4">
          <Link href="/client">
          <button className="px-6 py-3 bg-red-800 text-white font-medium rounded hover:bg-blue-500">
            Client-Side Rendering
          </button>
          </Link>
          <Link href="/server">
          <button className="px-6 py-3 bg-red-800 text-white font-medium rounded hover:bg-blue-500">
            Server-Side Rendering
          </button>
          </Link>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default Home;

