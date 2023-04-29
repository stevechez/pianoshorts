import Image from "next/image";

export default function Home() {
  return (
		<main className="container md:w-11/12 mx-auto">
			<h1 className="abrilFF text-6xl font-bold text-center mt-14 mb-4">
				Thinking of my dad
			</h1>

			<p className="petrona w-full text-3xl text-center md:my-12 px-4 md:px-8 text-sky-900">
				To my dear father, strong and true,
				<br />A man whose love shines through and through, <br />
				You&apos;ve always been my guiding light, <br />
				Through every trial and every fight.
			</p>

			<p className="sourcesans text-xl m-4">
				From one of dad&apos;s favorite tapes of the 80&apos;s. Christopher
				Cross.
			</p>

			{/* <p className="petrona text-3xl text-center mb-8 px-4 md:px-20 text-sky-900">
        I will remember dad vividly from the earliest days of my childhood. He
        the patriarch, a father who worked hard, took care of the family, kept
        roof over our head, food on the table, made it possible to live in a
        great town growing up.
      </p>
      <p className="petrona text-2xl text-center mb-4">
        This song is from the one tape I think dad ever owned, Christopher
        Cross.
      </p> */}
			<div className="video-responsive">
				<iframe
					width="853"
					height="480"
					src={`https://www.youtube.com/embed/KR71fkBhBSc`}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="Embedded youtube"
          className="px-8"
				/>
			</div>
			{/* <p className="petrona text-2xl text-center my-12">
        He was there for me, many times over the years. Picked me up I&apos;ve
        fallen, lent a shoulder when I needed someone, and gave encouragement.
        This, as a child was one of the first songs I heard my dad play:
      </p> */}

			<p className="petrona text-3xl text-center my-12 px-4 md:px-20 text-sky-900">
				Your wisdom and your steady hand, <br />
				Have helped me grow and understand, <br />
				The world around me, big and bright, <br />
				And how to navigate life&apos;s endless night.
			</p>

			<p className="sourcesans text-xl m-4">
				One of his favorite singers of the 70&apos; as I recall as a young kid.
			</p>

			<div className="video-responsive">
				<iframe
					width="853"
					height="480"
					src={`https://www.youtube.com/embed/DKgdT7f7RQ8`}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="Embedded youtube"
				/>
				<p className="petrona text-3xl text-center my-12 px-4 md:px-20 text-sky-900">
					So on this day, I honor you, <br />
					And all the things that you do, <br />
					My father, my friend, my rock, <br />I thank you for each precious
					clock.
				</p>
				<p className="sourcesans text-xl m-4">
					A song that we listened together on multiple solo trips together.
				</p>
				<iframe
					width="853"
					height="480"
					src={`https://www.youtube.com/embed/hr9mlCagEcA`}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="Embedded youtube"
				/>
				<p className="petrona text-3xl text-center my-12 px-4 md:px-20 text-sky-900">
					A mentor, friend, and hero too, <br />
					Your heart and soul a shining light, <br />I feel so blessed to be
					with you, <br />
					My father, my guiding knight.
				</p>
				<iframe
					width="853"
					height="480"
					src={`https://www.youtube.com/embed/KxCwfKyHqeo`}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="Embedded youtube"
				/>
				<p className="petrona text-3xl text-center my-12 px-4 md:px-20 text-sky-900">
					Your sacrifices I can never repay, <br />
					Your guidance I&apos;ll forever cherish, <br />
					My love for you will never sway, <br />
					My father, my hero, you&apos;ll never perish.
				</p>
				<iframe
					width="853"
					height="480"
					src={`https://www.youtube.com/embed/p5HRR0eUOEY`}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="Embedded youtube"
				/>
			</div>
		</main>
	);
}
