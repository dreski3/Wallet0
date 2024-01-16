// ERC20TokenBalance.tsx
import React, { useState, useEffect } from 'react';
import { useBalance, useAddress, useContractRead, useNFTBalance, useContract } from "@thirdweb-dev/react";
import { BigNumber } from 'ethers';

export const NFTBalance = () => {
    const wallet0 = useAddress();
    const [balance, setBalance] = useState("");

    // const [tokenAddress, setTokenAddress] = useState<string>("");
    const nftAddress = "0x98E63c01CB9cB28349d860AF1f408FDa44a5a66B";

    const { contract } = useContract(nftAddress);

    const { data, isLoading, error } = useNFTBalance(
        contract,
        wallet0,
        8,
    )


    useEffect(() => {
        // setTokenAddress("0x2791bca1f2de4661ed88a30c99a7a9449aa84174");
        if (data) {
            setBalance(data.toString());
        } else if (error) {
            console.error(error);
        }
    }, [data]);

    return (
        <div>
            <h3>NFT Balance</h3>
            <p>NFT count: {balance}</p>
        </div>
    );
};
