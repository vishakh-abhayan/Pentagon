import Navbar from "../components/Navbar";
import ConnectWalletButton from "../components/ConnectWalletButton";
import MintNFT from "../components/MintNFT";
function Home() {
  return (
    <div>
      <Navbar />
      <ConnectWalletButton />
      <MintNFT />
    </div>
  );
}

export default Home;
