import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const intro = () => {
  return (
    <>
      <div className="" id="Home">
        <div className="font-poppins grid grid-row-4 grid-cols-2">
          <div className="col-start-1 row-start-1 text-xl pt-20 pl-4 min-w-fit text-white">
            <p>Hi I am</p>
          </div>
          <div className=" col-start-1 row-start-2 text-[#FD6F00] text-xl pl-4 min-w-fit">
            <p>Shubh Patel</p>
          </div>
          <div className="col-start-1 row-start-3 text-3xl font-bold space-x-2 pl-4 min-w-fit text-white">
            <p>Computer</p>
          </div>
          <div className="col-start-1 row-start-4 text-3xl font-bold space-x-2 pl-4 indent-16.5 -mt-6 max-w-fit text-white">
            <p>Science</p>
          </div>
          <div className="col-start-1 row-start-5 text-xl font-light font-poppins pl-4 wrap-break-normal max-w-90 text-white ">
            <p>
              Sophomore at UMass Lowell | Medford High School Vocational Grad |
              Eager to Launch My Tech Career.
            </p>
          </div>
          <div className="  col-start-2 col-end-2  row-span-5 text-center self-center justify-self-center">
            <img
              width={250}
              src="src/assets/intro.png"
              alt="profile pic"
              className="[clip-path:circle(60.0%_at_50%_40%)] object-center self-center justify-items-center "
            />
            <div className="text-white flex max-w-fit justify-center text-center gap-4 text-6xl ml-3">
              <a href="" className="hover:text-[]">
                <CiLinkedin />
              </a>
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <CiMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default intro;
