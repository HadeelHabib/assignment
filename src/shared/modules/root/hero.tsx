import { commonFaq, comunicate } from "@/configs/constants";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Banner from "@/assets/banner.svg";
import Image from "next/image";
import CourseCard from "@/shared/components/course.card";

const HERO = () => {
  return (
    <div>
      <div className="w-[90%] m-auto h-screen md:flex items-center justify-end flex-row-reverse">
        <div className="md:w-[50%] w-full">
          <Image
            src={Banner}
            width={650}
            height={650}
            alt=""
            className="mr-8"
          />
        </div>
        <div className="md:w-[50%] w-full">
          <h1 className="title font-Poppins !text-[25px] md:!text-5xl !text-left md:!leading-[60px]">
            Start your <span className="text-gradient">programming</span> <br />
            <span className="text-gradient">Journey</span> with our <br />
            Dedicated community!
          </h1>
          <p className="block font-Poppins md:text-[22px] md:leading-[32px] text-[16px] leading-[25px] font-normal text-[#A3B3BC] mb-5 text-center md:text-left">
            Begin your coding adventure in our community, where learning is
            always appreciated and valued.
          </p>
          <br />
          <Button className="button w-[200px] text-white">
            Expore Resources
          </Button>
        </div>
      </div>
  
      <div className="w-[90%] m-auto">
        <h1 className="title text-center text-3xl md:!text-4xl">
          Popular<span className="text-gradient"> Courses</span>
        </h1>
        <p className=" text-center text-medium md:!text-[18px] py-2">
          <span className="dot" />
          Our comprehensive project based courses
        </p>
      
      <div className="grid md:grid-cols-3 py-5 gap-2 my-4">
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      </div>
      </div>
      <div id="FAQ" className="py-5">
        <h1 className="title text-center text-3xl md:!text-4xl">
          Common<span className="text-gradient"> FAQ </span>
        </h1>
        <p className=" text-center text-medium md:!text-[18px] py-2">
          <span className="dot" />
          Frequently asked quistions
        </p>
        <div className="w-[80%] m-auto py-5 ">
          {commonFaq.map((i: CommonFaq, index: number) => {
            return (
              <div key={index} className="border-t-[2px] border-t-[#ffffff40]">
                <button className="flex justify-between py-4 w-full ">
                  <h5>{i.question}</h5>
                  <span>+</span>
                </button>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <div className="py-5 border-t border-t-[#ffffff40] ">
          <div className="w-[70%] m-auto md:flex justify-between grid grid-cols-2 gap-3 ">
            {comunicate.map((i: Communication, index: number) => (
              <div key={index}>
                <h2 className="text-[20px] py-4">{i.title}</h2>
                <Link className="py-2 text-small" href={i.url1}>
                  {i.subtitle1}
                </Link>
                <br />
                <Link className="py-2 text-small" href={i.url2}>
                  {i.subtitle2}
                </Link>
                <br />
                <Link className="py-2 text-small" href={i.url3}>
                  {i.subtitle3}
                </Link>
                <br />
              </div>
            ))}
            <div>
              <h2 className="text-[20px] py-4">Newsletters</h2>
              <p className="text-small">
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
                  className="bg-black border border-[#ffffff40] p-2 w-[150px] md:w-[200px] text-sm"
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
      </div>
    </div>
  );
};

export default HERO;
