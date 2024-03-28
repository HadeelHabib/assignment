import { commonFaq } from "@/configs/constants";

const FAQ = () => {
  return (
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
                <h5 className="text-lg">{i.question}</h5>
                <span className="text-lg">+</span>
              </button>
            </div>
          );
        })}
      </div>
      <br />
      <br />
    </div>
  );
};

export default FAQ;
