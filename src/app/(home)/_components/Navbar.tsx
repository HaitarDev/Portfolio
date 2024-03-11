import Logo from "./Logo";
import NavItems from "./NavItems";

function Navbar() {
  return (
    <nav className="p-1 md:p-4 top-0 left-0 right-0 z-50 max-w-screen-xl mx-auto bg-transparent">
      <div className="py6 px-3 bg-white h-16 rounded-xl shadow">
        <div className=" h-full w-full flex justify-between items-center">
          <Logo />
          <NavItems />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
