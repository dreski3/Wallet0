import { useContractWrite, useContract, Web3Button, useAddress, useSDK } from "@thirdweb-dev/react";
import { ethers, utils } from "ethers";
import React, { useState } from 'react';


export const ExecuteContractWrite = () => {
    const sdk = useSDK();

    const SmartWalletAddress = useAddress();

    const { contract } = useContract( SmartWalletAddress);

    const { mutateAsync: execute } = useContractWrite(contract, "execute");

    const [recipientAddress, setRecipientAddress] = useState('');
    const [amount, setAmount] = useState('');

    const transactionRequest = {
        to: '0x2b3f549dB85beDf29f8157C2c9a40E3209DE34cE',
        value: ethers.utils.parseEther('0.01'),
        gasPrice: ethers.utils.parseUnits('1.0', 'gwei'),
      };

    const handleTransaction = async () => {
        try { 
            await sdk?.wallet.executeRawTransaction(
                transactionRequest,
            );
            alert("Funds sent");
        } catch (e) {
            console.error(e);
            alert("Error sending funds");
        }

        console.log(`Sending ${amount} to ${recipientAddress}`);
    };

    return (
        <div>
        <h3>Perform Transaction</h3>
        <input
            type="text"
            placeholder="Recipient Address"
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
        />
        <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleTransaction}>Send</button>
        </div>
    );
};



/// @notice Executes a transaction (called directly from an admin, or by entryPoint)
// function execute(
//     address _target,
//     uint256 _value,
//     bytes calldata _calldata
// ) external virtual onlyAdminOrEntrypoint {
//     _registerOnFactory();
//     _call(_target, _value, _calldata);
// }

// /// @notice Executes a sequence transaction (called directly from an admin, or by entryPoint)
// function executeBatch(
//     address[] calldata _target,
//     uint256[] calldata _value,
//     bytes[] calldata _calldata
// ) external virtual onlyAdminOrEntrypoint {
//     _registerOnFactory();

//     require(_target.length == _calldata.length && _target.length == _value.length, "Account: wrong array lengths.");
//     for (uint256 i = 0; i < _target.length; i++) {
//         _call(_target[i], _value[i], _calldata[i]);
//     }
// }