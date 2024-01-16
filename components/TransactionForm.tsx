import React, { useState } from 'react';
import { useSDK } from "@thirdweb-dev/react";


export const TransactionForm = () => {
    const sdk = useSDK();

    const [recipientAddress, setRecipientAddress] = useState('');
    const [amount, setAmount] = useState('');

    const handleTransaction = async () => {
        try { 
            await sdk?.wallet.transfer(
                recipientAddress!,
                amount,
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

export default TransactionForm;
