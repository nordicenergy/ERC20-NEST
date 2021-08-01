import "./App.css";
import Web3 from "web3";
import Web3Info from "./Web3Info.js";
import React from "react";
import { useWeb3 } from "@openzeppelin/network/react";
import NESTToken from "./abi/NESTToken.json";
import UniSwap from "./UniSwap";

const infuraProjectId = "bdb81f91184c43dcb72fe2c5155cdd17";
const Contract = require("web3-eth-contract");

function App() {
    const web3Context = useWeb3(
        `https://ropsten.infura.io/v3/${infuraProjectId}`
    );
    // 0x1383b6EFe917e2BB5d80a55a8B1A81f360eD06bd
    const { networkId, networkName, account, providerName } = web3Context;

    const contract = new Contract(
        NESTToken.abi,
        "0x2202Ec7e2A1357887e67744dD6C49a66e75DA5e3"
    );

    console.log(contract);

    return ( <
        div className = "App" >
        <
        h1 > Nordic Energy Token - NEST ERC20 < /h1> <
        Web3Info title = "Web3 Info"
        web3Context = { web3Context }
        /> <
        UniSwap / >
        <
        /div>
    );
}

export default App;