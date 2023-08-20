import ConnectWalletButton from "../components/ConnectWalletButton";
import HeroImg from "../assets/hero.png";
// import MintNFT from "../components/MintNFT";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <img src={HeroImg} alt="Hero" className="h-80 ml-24" />
      <div className="flex w-64 justify-around mt-8 ml-32">
        <ConnectWalletButton />
        {/* <MintNFT /> */}
      </div>
    </div>
  );
}

export default Home;
