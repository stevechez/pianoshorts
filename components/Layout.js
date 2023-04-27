import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
		<>
			<main className="container w-full md:w-9/12 lg:w-9/12 mx-auto my-14 vh">
				<Navbar />
				{children}
				<Footer />{' '}
			</main>
		</>
	);
}
