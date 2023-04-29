const Memories = () => {
  return (
    <>
      <div className="container w-11/12 mx-auto mb-12">
        <h1 className="abrilFF text-6xl font-bold text-center my-14">
          Memories With Dad
        </h1>
        <p className="petrona text-3xl text-center my-8 px-4 md:px-8 text-sky-900">
          In the stillness of my heart, I remember my father&apos;s smile,{" "}
          <br />A beacon of hope and love, that could be seen for miles. <br />
          His gentle voice and warm embrace, would soothe my troubled soul,{" "}
          <br />
          And in his presence, I found a peace that made me whole.
        </p>
        <div className="video-responsive flex justify-center">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/ih9PvxXBG0Q`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>

        <p className="petrona text-3xl text-center my-8 px-4 md:px-20 text-sky-900">
          The memories we shared will always be dear, <br />
          From silly jokes to heartfelt talks, they are forever near. <br />
          And though he may be gone, his love remains, <br />A guiding force
          that forever sustains.
        </p>

        <div className="video-responsive flex justify-center">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/wVue1OG0MY4`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>

        <p className="petrona text-3xl text-center my-8 px-4 md:px-20 text-sky-900">
          My father taught me to be strong and true, <br />
          To never give up, and always see things through. <br />
          His wisdom and kindness were a beacon of hope, <br />
          And in his presence, I knew I could always cope.
        </p>

        <div className="video-responsive flex justify-center">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/b4h_eFQeaZ8`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>

        <p className="petrona text-3xl text-center my-8 px-4 md:px-20 text-sky-900">
          So as I say goodbye, I hold him close in my heart, <br />
          His spirit forever with me, never to be apart. <br />
          For though he may be gone, his love will always stay, <br />A precious
          gift that will never fade away.
        </p>

        <div className="video-responsive flex justify-center">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/f0FmK2Ao5rE`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </>
  );
};

export default Memories;
