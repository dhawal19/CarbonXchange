import React, {useEffect, useContext, useState} from "react";
import {ethers} from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const CarbonCreditContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () =>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const carbonCreditContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer
    })
    // return contract;
}

export const CarbonCreditProvider = ({children}) => {
    const [currentAccount, setcurrentAccount] = useState("");

    const checkIfWalletIsConnected = async() =>{
        if(!ethereum){
            return alert("No Metamask found. Please Install MetaMask to Proceed!");
        }
        const accounts = await ethereum.request({method : 'eth_accounts'})
        console.log(accounts);
        return accounts.length > 0
    }
    const connectWallet = async () =>{
        try{
            const accounts = await ethereum.request({method : 'eth_requestAccounts'});
            console.log(accounts);
            setcurrentAccount(accounts[0]);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <CarbonCreditContext.Provider value={{checkIfWalletIsConnected,getEthereumContract, connectWallet, currentAccount}}>
            {children}
        </CarbonCreditContext.Provider>
    )
}