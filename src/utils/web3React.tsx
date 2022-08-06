import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { Web3Provider } from "@ethersproject/providers";
import { BscConnector } from "@binance-chain/bsc-connector";

const POLLING_INTERVAL = 12000;

const rpcUrl = "https://rinkeby.infura.io/v3/";
const chainId = parseInt("4" as string, 10);
const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 97, 32520, 80001],
});

const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: rpcUrl } as string,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

const bscConnector = new BscConnector({ supportedChainIds: [chainId] });

// TODO move this enum to the uikit
enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
}

export const connectorsByName: any = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.BSC]: bscConnector,
};

export const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};
