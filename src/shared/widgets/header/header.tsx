import { logo } from "@/configs/constants";
import Link from "next/link";
import { ICONS } from "@/utils/icons";
import NavItems from "./nav.items";
import { Navbar } from "@nextui-org/navbar";

const Header = () => {
  return (
    <Navbar
      maxWidth="full"
      isBlurred
      className="w-full flex h-20 border-b bg-[#00000097] !z-[99999] shadow"
      style={{ borderBottomColor: "#ffffff30" }}
    >
      <div className="w-[90%] m-auto flex justify-between items-center ">
        <div>
          <Link href={"/"} className="text-2xl font-[600]">
            {logo}
          </Link>{" "}
        </div>
        <div>
          <NavItems />
        </div>
        <div className="flex items-center">
          <span className="text-3xl mr-4 cursor-pointer">{ICONS.message}</span>
          <span className="text-3xl cursor-pointer mr-4">
            {ICONS.notification}
          </span>
          <span className="text-3xl cursor-pointer">{ICONS.profile}</span>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
