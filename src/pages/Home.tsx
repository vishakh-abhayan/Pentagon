import ConnectWalletButton from "../components/ConnectWalletButton";
import HeroImg from "../assets/hero.png";
import MintNFT from "../components/MintNFT";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <div className=" h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <div className="flex justify-around">
        <div>
          <img src={HeroImg} alt="Hero" className="h-80 ml-24" />
          <div className="flex-col w-64 justify-around mt-8 ml-32">
            <div className="m-2">
              <ConnectWalletButton />
            </div>
            <div className="m-2">
              <MintNFT />
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold ml-10 mt-[150px] text-3xl">
            Learn Connect Grow
            <br />
            The Community Way
          </div>
          <div className="font-italics m-10 font-xl">
            <p>
              Join a learning revolution at Pentagon. Discover, share, and learn
              <br />
              with a community that believes in the strength of collaborative
              <br /> knowledge. Together, we're redefining education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
