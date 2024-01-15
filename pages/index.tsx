import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { NFT_CONTRACT_ADDRESS } from "../constants/addresses";
import { NFTClaimButton } from "../components/NFTClaimButton";


const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.connect}>
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
            <NFTClaimButton /> {/* New component */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
