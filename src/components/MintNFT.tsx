import { useEffect, useState } from "react";
import { usePrepareContractWrite, useContractWrite, useAccount } from "wagmi";
import abi from "./web3/abi.json";
import Button from "@mui/material/Button";

function MintNFT() {
  const [walletAddress, setWalletAddress] = useState("");
  const metadataURL =
    "https://ipfs.io/ipfs/bafybeia6eardnrmgilqduj4j5m24phvbbmaqqdae43x65ghhnzab7j7imu/1.json";
  const account = useAccount();

  useEffect(() => {
    async function fetchAccount() {
      if (account && account.address) {
        console.log(account.address, "account address metamask");
        localStorage.setItem("account", account.address);
        setWalletAddress(account.address); // Assuming setWalletAddress is the setter for the account state
      }
    }

    fetchAccount();
  }, []);
  // address: "0x2b0cb13623824dec1cbfac5926229b161c947b36",
  const { config } = usePrepareContractWrite({
    address: "0x0BF5f3C80C2fE5575c1c2c787B352868fdf76858",
    abi: abi,
    functionName: "mintNFT",
    args: [walletAddress, metadataURL],
  });

  const { write } = useContractWrite(config);

  return (
    // <div className="">
    <Button
      className=""
      variant="contained"
      color="success"
      onClick={() => write?.()}
    >
      Mint NFT
    </Button>
    // </div>
  );
}

export default MintNFT;
