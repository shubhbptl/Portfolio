import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const footer = () => {
  return (
    <footer id="Contact">
      <p className=" text-center justify-self-center text-white pt-50 pb-5 text-4xl font-poppins ">
        Let's Connect
      </p>
      <p className="text-center justify-self-center bg-gradient-to-br text-4xl from-stone-500 via-[#FD6F00] to-yellow-600 bg-clip-text text-transparent">
        SHUBH PATEL
      </p>
      <p className="justify-self-center max-w-200 min-w-80 text-center text-white font-poppins text-2xl p-5 flex-wrap">
        Whether you're interested in collaborating, have an opportunity to
        discuss, or just want to talk tech, feel free to reach out — I'm always
        open to meaningful conversations and new challenges.
      </p>
      <div className="flex justify-center">
        <a
          className=" flex pl-15 pr-15 pt-5 pb-5 text-3xl mb-10 mt-5 rounded-4xl items-center text-center bg-amber-400 text-white"
          href="mailto:shubhpatl2006@gmail.com"
          target="_blank"
        >
          Contact Me
          <CiMail className=" pl-2 text-5xl" />
        </a>
      </div>
      <div className="flex justify-center gap-6 text-7xl mb-30 text-white">
        <a
          href="https://linkedin.com/in/shubhbptl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin />
        </a>
        <a
          href="https://github.com/shubhbptl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default footer;

// UNDER CONSTRUCTION
