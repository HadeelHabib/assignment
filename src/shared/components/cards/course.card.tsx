import { Card } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import { ICONS } from "@/utils/icons";
import Ratings from "@/utils/ratings";

const CourseCard = () => {
  return (
    <div>
      <Link href={`/course/12345`}>
        <Card className="w-full text-lg h-min min-h-[50vh] rounded-lg p-3 bg-opacity-[.2] text-white bg-slate-500">
          <Image
            src={
              "https://raw.githubusercontent.com/shahriarsajeeb/Food-Delivery-WebApp/master/cover.png"
            }
            alt=""
            width={400}
            height={400}
            className="rounded w-full"
          />
          <h1 className="font-Poppins text-[16px] pt-3 text-white">
            All Functional MERN Stack LMS / Learning Management system series
            with next 13, TypeScript | Full Course
          </h1>
          <div className="w-full flex items-center justify-between pt-2">
            <Ratings rating={5} />
            <h5 className="text-white">20 Students</h5>
          </div>
          <div className="w-full flex items-center justify-between pt-3">
            <div className="flex">
              <h3>20$</h3>
              <h5 className="pl-3 text-sm mt-[-5px] line-through opacity-80">
                80$
              </h5>
            </div>
            <div className="flex items-center pb-3">
              <span className="text-[20px]">{ICONS.list}</span>
              <h5 className="pl-2">20 Lectures</h5>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default CourseCard;
