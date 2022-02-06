import './App.css';

import Lottery from './contract_utils/lottery';
import React, {useState, useEffect} from 'react';


function App() {
  const [manager, setManager] = useState("");
  const [players, setPlayers] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [balance, setBalance] = useState(0.0);
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const lottery = new Lottery();

  useEffect(() => {
    const loadLotteryState = async () => {
      setManager(await lottery.getManager());
      setPlayers(await lottery.getPlayers());
      setBalance(await lottery.getBalance());
      setAccounts(await lottery.getAccounts());
    }
    
    loadLotteryState();
  });

  //Event Handlers
  const valueOnChangeHandler = (event) => {
    setValue(event.target.value);
  }

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if(!accounts.length) {
      alert("Metamask account not connected. Please refresh Browser.");
      return;
    }

    setMessage("Your transaction is being processed...");
    await lottery.enterLottery(accounts[0], value);
    setMessage("You are in the Lottery!");

    setTimeout(() => {
      setMessage("");
    }, 2000);
    setValue("")
  }

  return (
    <div className="App">
      <h1>Lottery DApp</h1>
      <p>The Manager of this Lottery contract is <strong>{manager}</strong></p>
      <p>There are currently <strong>{players.length}</strong> players, with a total lottery pot of <strong>{balance}</strong> ether.</p>
      <hr/>
      <div>
        <h2>May the Force be with you 🖖🏾</h2>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label>Amount of Ether </label>
            <input value={value} onChange={valueOnChangeHandler} type='number' step='0.000000001' min='0.01' required />
          </div>
          <button> Enter Lottery </button>
        </form>
      </div>
      <hr/>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
