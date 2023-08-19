// import { useState, useEffect, useRef } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

function ConnectWalletButton() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  return (
    <div>
      {connectors.map((connector) => (
        <button
          className="btn p-3 my-9 text-white hover:bg-[#0DAAAA] hover:shadow-xl transition duration-200 ease-in-out flex justify-center items-center"
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          Connect
          {!connector.ready && " (unsupported)"}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            " (connecting)"}
        </button>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  );
}

export default ConnectWalletButton;
