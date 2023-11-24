// import { useState, useEffect, useRef } from "react";
import { useConnect, useAccount } from "wagmi";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function ConnectWalletButton() {
  const { connect, connectors, error, isLoading } = useConnect();
  const { isConnected } = useAccount();

  return (
    <div>
      {connectors.map((connector) => (
        <Button
          className="mt-10 "
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
          variant="contained"
        >
          Connect {connector.name}
          {!connector.ready && " (unsupported)"}
        </Button>
      ))}

      {isConnected && (
        <div className=" mt-40 ">
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="success">
              Wallet Connected Success
            </Alert>
          </Stack>
        </div>
      )}

      {isLoading && (
        <div className=" mt-40 ">
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="info">
              Connecting Wallet
            </Alert>
          </Stack>
        </div>
      )}

      {error && (
        <div className=" mt-40 ">
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="error">
              {error.message}
            </Alert>
          </Stack>
        </div>
      )}
    </div>
  );
}

export default ConnectWalletButton;
