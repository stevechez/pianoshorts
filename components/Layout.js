import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <main className="container md:w-9/12 lg:w-9/12 mx-auto">
        <Navbar />
        {children}
        <Footer />{" "}
      </main>
    </>
  );
}
