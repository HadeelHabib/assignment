import { comunicate } from "@/configs/constants";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="py-5 border-t border-t-[#ffffff40] ">
        <div className="w-[85%] m-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {comunicate.map((i: Communication, index: number) => (
            <div key={index}>
              <h2 className="text-[20px] py-4">{i.title}</h2>
              {i.footerItems?.map((i: FooterItems, index: number) => (
                <Link href={i.href} key={index} className="py-2 text-lg block">
                  {i.title}
                </Link>
              ))}
            </div>
          ))}
          <div>
            <h2 className="text-[20px] py-4">Newsletters</h2>
            <p className="text-lg">
              Stay up-to-date with everything
              <br />
              related in our brand and goin
              <br />
              invaluable insights for your
              <br />
              programming journy by subscribing
              <br />
              to our newsletter
            </p>
            <form className="py-2" action="">
              <input
                className="bg-black border border-[#ffffff40] outline-none p-2 w-[150px] md:w-[200px] text-sm"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <br />
            </form>
            <Button className="button w-[120px] text-white text-sm">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full text-white text-center py-10 h-10 text-lg">
        Copyright © 2023 Becodemy. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
