// ERC20TokenBalance.tsx
import React, { useState, useEffect } from 'react';
import { useBalance, useAddress } from "@thirdweb-dev/react";

export const NativeBalance = () => {
    const wallet0 = useAddress();
    const [balance, setBalance] = useState<string>("Loading...");

    // const [tokenAddress, setTokenAddress] = useState<string>("");
    const tokenAddress = "0x2791bca1f2de4661ed88a30c99a7a9449aa84174";

    const { data, isLoading } = useBalance();

    useEffect(() => {
        // setTokenAddress("0x2791bca1f2de4661ed88a30c99a7a9449aa84174");
        if (data) {
            setBalance(data.value.toString());
        }
    }, [data]);

    return (
        <div>
            <h3>Native Token Balance</h3>
            <p>{balance}</p>
        </div>
    );
};
