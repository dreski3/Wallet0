import type { AppProps } from "next/app";
import { ThirdwebProvider, smartWallet, metamaskWallet, coinbaseWallet, embeddedWallet, magicLink } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ACCOUNT_FACTORY_ADDRESS, NFT_CONTRACT_ADDRESS, LIGHT_ACCOUNT_FACTORY } from "../constants/addresses";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

const smartWalletConfig = {
  factoryAddress: ACCOUNT_FACTORY_ADDRESS,
  gasless: true,
}

function MyApp({ Component, pageProps }: AppProps) {
  const magicApiKey = process.env.MAGIC_PUBLISHABLE_KEY || ""; // Provide a default value if undefined

  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        smartWallet(embeddedWallet(), smartWalletConfig),
        smartWallet(metamaskWallet(), smartWalletConfig),
        smartWallet(magicLink({ apiKey: magicApiKey }), smartWalletConfig),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
