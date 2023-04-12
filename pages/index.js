export default function Home() {
  return (
    <main className="container w-[900px] mx-auto">
      <h1 className="abrilFF text-6xl font-bold text-center my-14">
        In Loving Memory of my dad
      </h1>
      <p className="petrona text-3xl text-center my-8 px-20 text-sky-900">
        To my dear father, strong and true, A man whose love shines through and
        through, You&apos;ve always been my guiding light, Through every trial
        and every fight.
      </p>

      <p className="sourcesans text-xl m-4">
        From one of dad&apos;s favorite tapes of the 80&apos;s. Christopher
        Cross.
      </p>

      {/* <p className="petrona text-3xl text-center mb-8 px-20 text-sky-900">
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
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      {/* <p className="petrona text-2xl text-center my-8">
        He was there for me, many times over the years. Picked me up I&apos;ve
        fallen, lent a shoulder when I needed someone, and gave encouragement.
        This, as a child was one of the first songs I heard my dad play:
      </p> */}

      <p className="petrona text-3xl text-center my-8 px-20 text-sky-900">
        Your wisdom and your steady hand, Have helped me grow and understand,
        The world around me, big and bright, And how to navigate life&apos;s
        endless night.
      </p>

      <p className="sourcesans text-xl m-4">
        One of dad&apos; favorite singers of the 70&apos;
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
        <p className="petrona text-3xl text-center my-8 px-20 text-sky-900">
          So on this day, I honor you, And all the things that you do, My
          father, my friend, my rock, I thank you for each precious clock.
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
        <p className="petrona text-3xl text-center my-8 px-20 text-sky-900">
          A mentor, friend, and hero too, Your heart and soul a shining light, I
          feel so blessed to be with you, My father, my guiding knight.
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
        <p className="petrona text-3xl text-center my-8 px-20 text-sky-900">
          Your sacrifices I can never repay, Your guidance I&apos;ll forever
          cherish, My love for you will never sway, My father, my hero,
          you&apos;ll never perish.
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

// export async function getStaticProps() {
//   const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
//   const API_KEY = process.env.YOUTUBE_API_KEY;
//   const REQUEST_URL = ``;

//   return {
//     props: { results: "test" },
//     revalidate: 10,
//   };
// }
