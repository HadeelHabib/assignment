import { logo } from "@/configs/constants";
import Link from "next/link";
import { ICONS } from "@/utils/icons";
import Navbar from "./navbar";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between h-[80px] border-b border-b-[#ffffff40]">
      <div className="w-[90%] m-auto flex justify-between items-center ">
        <div>
          <Link href={"/"} className="text-2xl font-[600]">
            {logo}
          </Link>{" "}
        </div>
        <div>
            <Navbar/>
        </div>
        <div className="flex items-center">
          <span className="text-3xl mr-4 cursor-pointer">{ICONS.message}</span>
            <span className="text-3xl cursor-pointer mr-4">
              {ICONS.notification}
            </span>
          <span className="text-3xl cursor-pointer">{ICONS.profile}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
