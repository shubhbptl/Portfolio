import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Intro = () => {
  return (
    <div
      id="Home"
      className="font-poppins bg-[#1E1E1E] text-white px-4 py-10 mb-12"
    >
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center">
        {/* Left section: Text */}
        <div className="text-left space-y-1">
          <p className="xl:text-3xl md:text-2xl">Hi I am</p>
          <p className="xl:text-4xl md:text-3xl text-[#FD6F00]">Shubh Patel</p>
          <p className="xl:text-6xl md:text-5xl font-bold">Computer</p>
          <p className="xl:text-6xl md:text-5xl font-bold indent-6">Science</p>
          <p className="xl:text-2xl md:text-xl font-light max-w-md">
            Sophomore at UMass Lowell | Medford High School Vocational Grad |
            Eager to Launch My Tech Career.
          </p>
        </div>

        {/* Right section: Image + Icons */}
        <div className="flex flex-col items-center space-y-4 mb-6 md:mb-0">
          <img
            src="src/assets/intro.png"
            alt="profile pic"
            className="w-80 rounded-full object-cover [clip-path:circle(60%_at_50%_40%)]"
          />
          <div className="flex justify-center gap-6 text-6xl text-white">
            <a
              className=" hover:text-[#FD6F00]"
              href="https://linkedin.com/in/shubhbptl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin />
            </a>
            <a
              className=" hover:text-[#FD6F00]"
              href="https://github.com/shubhbptl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className=" hover:text-[#FD6F00]"
              href="mailto:shubhpatl2006@gmail.com"
            >
              <CiMail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
