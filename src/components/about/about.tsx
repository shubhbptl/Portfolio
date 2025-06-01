import { useState } from "react";
import { InView } from "react-intersection-observer";
const about = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experience = [
    { text: "C", exp: "80%", button: "79%", value: "90%" },
    { text: "Python", exp: "75%", button: "74%", value: "85%" },
    { text: "JavaScript", exp: "70%", button: "69%", value: "80%" },
    { text: "React/Flask", exp: "70%", button: "69%", value: "80%" },
  ];
  return (
    <div className="grid grid-cols-2 row-start-2 row-span-4 mb-21" id="About">
      <div className="col-start-1 col-end-1 row-end-4 self-start justify-self-center -mt-40">
        <img src="/about.png" alt="Hi pic" className="w-80" />
      </div>
      <div className=" col-start-2 row-start-1 md:self-end lg:self-end text-start self-end  p-0 sm:pt-20 text-white">
        <p className="xl:text-4xl md:text-3xl font-bold font-poppins">
          About Me
        </p>
      </div>
      <div className="col-start-2 row-start-2  sm:text-start self-start p-0 wrap-break-word text-white">
        <p className="xl:text-2xl md:text-xl font-poppins max-w-150">
          Computer Science major at UMass Lowell and Medford Vocational
          graduate, combining practical skills with academic knowledge to
          contribute to innovative teams and develop impactful tech solutions.
        </p>
      </div>
      <div className="col-start-2 ">
        <InView
          threshold={1}
          rootMargin="0px"
          onChange={(inView) => {
            if (inView) {
              setIsVisible(true);
            }
          }}
        >
          {({ ref }) => (
            <div ref={ref}>
              {experience.map((items) => {
                return (
                  <>
                    <div className="flex justify-between max-w-[90%]">
                      <p className="text-white">{items.text}</p>
                      <p className="text-white ">{items.value}</p>
                    </div>
                    <p className="w-[var(--max)] ml-0 bg-wheat h-4 rounded-xl ring-2 ring-white"></p>
                    <div // bar
                      className={`-m-4 ml-0 mb-2 w-0 bg-[#d8c5a3] h-4 rounded-xl ring-2 transation duration-2000 ease-in-out`}
                      style={{
                        width: isVisible ? items.exp : "0",
                      }}
                    ></div>
                  </>
                );
              })}
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default about;
