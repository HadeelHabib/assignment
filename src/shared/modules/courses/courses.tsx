import CourseCard from "@/shared/components/cards/course.card";

const Courses = () => {
  return (
    <div className="w-[90%] m-auto">
      <h1 className="title text-center text-3xl md:!text-4xl">
        Popular<span className="text-gradient"> Courses</span>
      </h1>
      <p className="text-center text-medium md:!text-[18px] py-2">
        <span className="dot" />
        Our comprehensive project based courses
      </p>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-3 xl:gap-[35px] mb-12 border-0 md:pl-5">
        <CourseCard />
      </div>
    </div>
  );
};

export default Courses;
