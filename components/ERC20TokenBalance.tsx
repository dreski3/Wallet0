// ERC20TokenBalance.tsx
import React, { useState, useEffect } from 'react';
import { useBalance, useAddress, useContractRead, useTokenBalance, useContract } from "@thirdweb-dev/react";

export const ERC20TokenBalance = () => {
    const wallet0 = useAddress();
    const [balance, setBalance] = useState("");

    // const [tokenAddress, setTokenAddress] = useState<string>("");
    const tokenAddress = "0x9999f7Fea5938fD3b1E26A12c3f2fb024e194f97";

    const { contract } = useContract(tokenAddress);

    const { data, isLoading, error } = useContractRead(contract, "balanceOf", [wallet0]);


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
            <h3>Token Balance</h3>
            <p>{wallet0}</p>
            <p>USDC: {balance}</p>
        </div>
    );
};
