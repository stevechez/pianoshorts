import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="w-screen mx-auto flex justify-center">
          <Link href="/" className="mt-6 ml-12">
            <Image
              src="/images/logo.png"
              width={250}
              height={90}
              alt="Memories With Dad"
            />
          </Link>
          <nav className="mt-8 w-1/2 mx-auto grid grid-cols-3 divide-x text-center font-bold text-2xl">
            <div className="align-middle">
              <Link
                href="/poemsfordad"
                className=" hover:text-blue-900 hover:underline inline-block align-middle pt-4"
              >
                Poem For Dad
              </Link>
            </div>
            <div className="">
              <Link
                href="/memories"
                className="hover:text-blue-900 hover:underline inline-block align-middle pt-4"
              >
                Memories
              </Link>
            </div>

            <div className="">
              <Link
                href="/stevesings"
                className=" hover:text-blue-900 hover:underline inline-block align-middle pt-4"
              >
                Steve Sings
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
