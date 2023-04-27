import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex items-center justify-center my-8">
      <p>@Copyright 2023. Created with ❤️ from Steve with the help of</p>
      <Image
        src="/ChatGPT_logo.svg"
        alt="me"
        width="28"
        height="28"
        className="ml-2"
      />
    </div>
  );
};

export default Footer;
