"use client";

import { navItems } from "@/configs/constants";
import useRouteChange from "@/hooks/useRouteChange";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
  const{active,setActive} = useRouteChange();
  const path = usePathname();

  useEffect(() => {
    setActive(path);
  }, [path, active, setActive]);

      return(
    <div className="hidden md:block">
      {navItems.map((i:NavItems,index:number)=> (
        <Link 
        key={index}
        className={`px-6 ${active === i.url ? "text-[#19C964]" : "text-white"}`}
        onClick={()=>setActive(i.url)}
        href={i.url}
        >
          {i.title}
        </Link>
      ))}
    </div>
      )

};

export default Navbar;

