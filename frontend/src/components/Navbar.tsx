import taskifyLogo from '../assets/logo/TaskifyLogo.png';
import GradientText from "./ReactBits/GradientText";


const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 border-b">
      <div className="flex items-center">
        <div className="w-24">
          <img src={taskifyLogo} alt="Taskify Logo" className="w-full" />
        </div>
        <nav className="flex space-x-20 ml-10">
          <a href="#" className="text-black font-semibold">Home</a>
          <a href="#" className="text-black font-semibold">Home</a>
          <a href="#" className="text-black font-semibold">Home</a>
        </nav>
      </div>
      <button className="bg-white text-[#4A1762E3] border-4 border-[#4A1762E3] rounded-full px-6 py-1 font-semibold ">
        SIGN IN
      </button>
    </header>
  );
};

export default Navbar; 