// import { useState, useEffect, useRef } from "react";
import { useConnect } from "wagmi";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function ConnectWalletButton() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
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
          {isLoading &&
            connector.id === pendingConnector?.id &&
            " (connecting testing)"}
        </Button>
      ))}

      {error && (
        <div className="relative mt-40 left-96">
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
