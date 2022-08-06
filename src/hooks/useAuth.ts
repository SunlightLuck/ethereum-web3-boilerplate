import { useWeb3React } from "@web3-react/core";
import { connectorsByName } from "../utils/web3React";

declare let window: any;

const useAuth = () => {
  const { activate, deactivate } = useWeb3React();

  const login = (conectorID: any) => {
    const connector = connectorsByName[conectorID];
    console.log(connector);
    if (connector) {
      activate(connector, (error: Error) =>
        alert(error.name + " " + error.message)
      );
    } else {
      alert("The connector config is wriong");
    }
  };
  const switchChain = async (chainId: string) => {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{chainId}]
    })
  }
  const addChain = async (params: any) => {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params
    })
  }

  return { login, logout: deactivate, switchChain, addChain };
};

export default useAuth;
