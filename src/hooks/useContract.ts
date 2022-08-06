import { useMemo } from "react";
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";
import { useWeb3React as useWeb3ReactCore } from "@web3-react/core";
import { ROUTERS } from "contracts/config";

declare let window: any;

declare enum ChainId {
  RINKEBY = 4,
}

export const useActiveWeb3React =
  (): Web3ReactContextInterface<Web3Provider> & { chainId?: ChainId } => {
    const context = useWeb3ReactCore<Web3Provider>();
    const contextNetwork = useWeb3ReactCore<Web3Provider>("NETWORK");
    return context.active ? context : contextNetwork;
  };

export const useContract = (
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true
): Contract | null => {
  const { library, account } = useActiveWeb3React();
  return useMemo(() => {
    if (!address || !ABI || !library) {
      return null;
    }
    try {
      return new Contract(
        address,
        ABI,
        withSignerIfPossible && account
          ? library.getSigner(account).connectUnchecked()
          : library
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, library]);
};

export const useTokenContract = (): Contract | null => {
  return useContract(ROUTERS.TOKEN.address, ROUTERS.TOKEN.abi);
};
