import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-navbar">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-4 md:items-center">
        <Link href="/" className="font-semibold text-xl">
          My-Anime
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
