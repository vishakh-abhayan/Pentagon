import ConnectWalletButton from "../components/ConnectWalletButton";
import HeroImg from "../assets/hero.png";

import Navbar from "../components/Navbar";
function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <div className="flex">
        <img src={HeroImg} alt="Hero" className="h-96 ml-24" />
        <div className=" w-64 justify-center items-center mt-48 ml-80">
          <ConnectWalletButton />
        </div>
      </div>
    </div>
  );
}

export default Home;
