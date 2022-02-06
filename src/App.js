import './App.css';

import Lottery from './contract_utils/lottery';
import React, {useState, useEffect} from 'react';


function App() {
  const [manager, setManager] = useState("");
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState(0.0);

  const lottery = new Lottery();

  useEffect(() => {
    const loadLotteryState = async () => {
      setManager(await lottery.getManager());
      setPlayers(await lottery.getPlayers());
      setBalance(await lottery.getBalance());
    }
    
    loadLotteryState();
  });

  return (
    <div className="App">
      <h1>Lottery DApp</h1>
      <p>The Manager of this Lottery contract is <strong>{manager}</strong></p>
      <p>There are currently <strong>{players.length}</strong> players, with a total lottery pot of <strong>{balance}</strong> ether.</p>
    </div>
  );
}

export default App;
