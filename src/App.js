import './App.css';

import Lottery from './contract_utils/lottery';
import React, {useState, useEffect} from 'react';


function App() {
  const [manager, setManager] = useState("");

  const lottery = new Lottery();

  useEffect(() => {
    const loadLotteryState = async () => {
      const contractManager = await lottery.getManager();
      setManager(contractManager);
    }
    
    loadLotteryState();
  });

  return (
    <div className="App">
      <h1>Lottery DApp</h1>
      <p>The Manager of this Lottery contract is <strong>{manager}</strong></p>
    </div>
  );
}

export default App;
