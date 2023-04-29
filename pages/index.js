import Image from "next/image";

const Home = () => {
  return (
		<>
			<div className="flex items-center w-fit flex-col container w-full mx-auto">
				<div className="">
					<h1 className="abrilFF text-6xl font-bold text-center mt-14 mb-4">
						Remembering Dad
					</h1>
				</div>
				<div className="flex items-center">
					<p className="petrona text-3xl md:my-6 px-4 md:px-8 text-sky-900">
						I wrote this a tribute to my father, a man who meant so much to so
						many. I stand here before you with a heavy heart, but also with a
						sense of gratitude for having had the privilege of calling him my
						dad.
					</p>

					<Image
						src="/images/IMG_0043.jpg"
						width={250}
						height={250}
						alt="dad1"
						className="mr-4 w=[250px] h-[170px]"
					/>
				</div>

				<div className="flex items-center">
					<Image
						src="/images/IMG_0041.jpg"
						width={200}
						height={300}
						alt="dad2"
						className="-rotate-90 w-full md:w-[200px] md:h-[200px]"
					/>

					<p className="petrona text-3xl my-12 px-4 md:px-8 text-sky-900">
						My father was more than just a parent to me. He was a mentor, a
						confidant, and a friend. Throughout my life, he was always there,
						providing guidance and support whenever I needed it. Whether it was
						helping me with school projects or just lending an ear when I needed
						to talk, he never failed to be there for me.
					</p>
				</div>

				<div className="flex items-center">
					<p className="petrona text-3xl md:my-6 px-4 md:px-8 text-sky-900">
						As I stand here today, I&apos;m reminded of all the wonderful
						memories I have with him. From fishing trips to family vacations, we
						shared so many happy times together. And even during the difficult
						moments in life, my father was a source of strength and comfort,
						always willing to lend a helping hand or a kind word. I will cherish
						these memories forever and hold them close to my heart.
					</p>
					<Image
						src="/images/IMG_0039.jpg"
						width={300}
						height={300}
						alt="dad2"
						className="-rotate-90 w-full ml-4 md:w-[300px] md:h-[300px]"
					/>
				</div>
				<div className="mt-20">
					<Image
						src="/images/IMG_0030.jpg"
						width={400}
						height={500}
						alt="dad2"
						className="-rotate-90 rounded-lg shadow-lg shadow-blue-500 w-full ml-4 md:w-[400px] md:h-[400px]"
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
