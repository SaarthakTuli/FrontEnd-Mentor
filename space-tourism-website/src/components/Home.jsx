import Earth from "../assets/home/background-home-desktop.jpg";
import Explore from "./Explore";

const Home = () => {
  return (
    <div className="w-full">
      <img src={Earth} alt="earth" className="z-[-1] absolute top-0 left-0" />

      <div className="absolute bottom-20 w-full">
        <div className="flex justify-evenly items-center">
          <div>
            <p className="text-white">SPACE</p>
          </div>
          <div className="w-[275px] h-[275px] rounded-full bg-white flex justify-center items-center hover:shadow-explore transition-shadow">
            <p className="text-black text-h4 tracking-[2px]">Explore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
