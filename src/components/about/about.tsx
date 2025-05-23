import { useState } from "react";
import { InView } from "react-intersection-observer";
const about = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experience = [
    { text: "C", exp: "80%", button: "78%" },
    { text: "Python", exp: "60%", button: "58%" },
    { text: "JavaScript", exp: "70%", button: "68%" },
    { text: "React/Flask", exp: "75%", button: "73%" },
  ];
  return (
    <div className="grid grid-cols-2 row-start-2 row-span-4" id="About">
      <div className="col-start-1 col-end-1 row-end-4 self-start justify-self-center -mt-40">
        <img src="src/assets/about.png" alt="Hi pic" className="w-62.5 " />
      </div>
      <div className=" col-start-2 row-start-1 md:self-end lg:self-end text-start self-end  p-0 sm:pt-20 text-white">
        <p className="text-4xl font-bold font-poppins">About Me</p>
      </div>
      <div className="col-start-2 row-start-2  sm:text-start self-start p-0 wrap-break-word text-white">
        <p className="font-medium font-poppins max-w-150">
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
                    <p className="text-white">{items.text}</p>
                    <p className="w-[var(--max)] ml-0 bg-wheat h-4 rounded-xl ring-2 ring-white"></p>
                    <div // bar
                      className={`-m-4 ml-0 mb-2 w-0 bg-[#d8c5a3] h-4 rounded-xl ring-2 transation duration-2000 ease-in-out`}
                      style={{
                        width: isVisible ? items.exp : "0",
                      }}
                    ></div>
                    <div //button
                      className={`-m-6 ml-0 mb-2 w-4 bg-[#FD6F00] h-4 rounded-xl ring-4 transation duration-2000 ease-in-out`}
                      style={{
                        marginLeft: isVisible ? items.button : "0",
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
