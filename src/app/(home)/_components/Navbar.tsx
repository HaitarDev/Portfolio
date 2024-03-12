import Logo from "./Logo";
import NavItems from "./NavItems";

function Navbar() {
  return (
    <nav className="p-1 md:p-4 top-0 left-0 right-0 z-50 max-w-screen-lg mx-auto bg-transparent ">
      <div
        className="bg-gray-100
       py-9 px-6 h-16 rounded-xl shadow"
      >
        <div className="h-full w-full flex justify-between items-center">
          <Logo />
          <NavItems />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

//  backdrop-filter backdrop-blur-sm bg-white/50
