import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
	const [navbar, setNavbar] = useState(false);

	return (
		<nav className="w-full bg-blue-50 shadow-xl relative sticky top-0 z-40">
			<div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
				<div>
					<div className="flex items-center justify-between py-3 md:py-5 md:block">
						<Link href="/" className="mb-4 md:mt-0">
							<Image
								src="/images/logo.png"
								width={200}
								height={82}
								alt="Dads Site"
							/>
						</Link>

						<div className="md:hidden">
							<button
								className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
								onClick={() => setNavbar(!navbar)}
							>
								{navbar ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				<nav className="flex flex-wrap items-center justify-center text-lg font-bold tracking-tight md:ml-auto relative">
					<div
						className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
							navbar ? 'block' : 'hidden'
						}`}
					>
						<ul className="space-y-2 md:flex md:space-x-6 md:space-y-0 mt-0 md:mt-14">
							<li className="text-gray-600 hover:text-blue-600">
								<Link
									href="/poemsfordad"
									className="hover:text-blue-500 hover:underline tracking-wider"
								>
									Poem For Dad
								</Link>
							</li>
							<li className="hover:text-blue-500 hover:underline tracking-wider">
								<Link
									href="/memories"
									className="text-gray-600 hover:text-blue-600"
								>
									Memories
								</Link>
							</li>
							<li className="text-gray-600 hover:text-blue-600">
								<Link
									href="/stevesings"
									className="hover:text-blue-500 hover:underline tracking-wider"
								>
									Steve Sings
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</nav>
	);
}
