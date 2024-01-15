import { NFT_CONTRACT_ADDRESS } from "../constants/addresses";
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";

// New component for making the call with Web3Button
export const NFTClaimButton: React.FC = () => {
    const handleClaimNFT = async (contract: any) => {
      await contract.erc1155.claim(0, 1);
    };
  
    return (
      <Web3Button
        contractAddress={NFT_CONTRACT_ADDRESS}
        action={handleClaimNFT}
      >
        Claim NFT
      </Web3Button>
    );
  };