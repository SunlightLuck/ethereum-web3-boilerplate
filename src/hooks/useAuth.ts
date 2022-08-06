import { useWeb3React } from "@web3-react/core";
import { connectorsByName } from "../utils/web3React";

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

  return { login, logout: deactivate };
};

export default useAuth;
