import { cn } from "@/lib/utils";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  isActive: boolean;
}

export const NavBtn = ({ children, onClick, isActive }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-2xl px-6 py-3 font-semibold text-base text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px] hover:shadow-amber-500 active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ",
        {
          "shadow-[4px_4px_0px_black] shadow-amber-500": isActive,
        }
      )}
    >
      {children}
    </button>
  );
};

export default NavBtn;
