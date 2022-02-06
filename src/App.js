import './App.css';

import lottery from './contract_utils/lottery';
import React, {useState, useEffect} from 'react';


function App() {
  const [manager, setManager] = useState("");



  useEffect(() => {
    const loadLotteryState = async () => {
      const contractManager = await lottery.methods.m_manager().call();
      setManager(contractManager);
    }
    
    loadLotteryState();
  }, []);

  return (
    <div className="App">
      <h1>Lottery DApp</h1>
      <p>The Manager of this Lottery contract is <strong>{manager}</strong></p>
    </div>
  );
}

export default App;
