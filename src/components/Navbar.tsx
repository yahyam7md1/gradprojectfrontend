import taskifyLogo from '../assets/logo/TaskifyLogo.png';
import GradientText from "./ReactBits/GradientText";


const Navbar = () => {
  return (
    <header className="sticky top-0 flex z-50 bg-white justify-between items-center px-4 py-3 border-b shadow-md">
      <div className="flex items-center">
        <div className="w-20 mr-10">
          <img src={taskifyLogo} alt="Taskify Logo" className="w-full" />
        </div>
        <nav className="flex space-x-10 ">
          <a href="#" className="text-black font-semibold hover:text-[#5E3073] transition-all duration-300 ease-in-out">Home</a>
          <a href="#features" className="text-black font-semibold hover:text-[#5E3073] transition-all duration-300 ease-in-out">Features</a>
          <a href="#contacts" className="text-black font-semibold hover:text-[#5E3073] transition-all duration-300 ease-in-out">Contacts</a>
        </nav>
      </div>
      <button className="bg-white text-[#4A1762E3] border-4 border-[#4A1762E3] rounded-full px-6 py-1 font-bold hover:bg-[#4A1762E3] hover:text-white transition-all duration-300 ease-in-out ">
        SIGN IN
      </button>
    </header>
  );
};

export default Navbar; 