import Reat from "react";
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./utils/web3React";

const Web3ProviderNetwork = createWeb3ReactRoot("NETWORK");

const Provider: React.FC<any> = ({ children }) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Web3ProviderNetwork getLibrary={getLibrary}>
      {children}
    </Web3ProviderNetwork>
  </Web3ReactProvider>
);

export default Provider;
