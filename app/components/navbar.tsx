import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-7xl mx-auto px-4 py-5">
      <Link href={"/"} className="font-bold text-3xl">
        Trial<span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
