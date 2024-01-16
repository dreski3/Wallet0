import { ConnectWallet, Transaction, Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { NFTClaimButton } from "../components/NFTClaimButton";
import { TransactionForm } from "../components/TransactionForm";
import { ERC20TokenBalance } from "../components/ERC20TokenBalance";
import { NativeBalance } from "../components/NativeBalance";
import { NFTBalance } from "../components/NFTBalance";
import { ExecuteContractWrite } from "../components/ExecuteContractWrite";


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
            <NFTClaimButton />
            <TransactionForm />
            <ERC20TokenBalance />
            <NativeBalance />
            <NFTBalance />
            <ExecuteContractWrite />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
