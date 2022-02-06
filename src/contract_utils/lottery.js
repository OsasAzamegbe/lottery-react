import web3 from './web3';


const CONTRACT_ADDRESS = "0xD060380D67DdaC8467F9Cd0404343Cfc42774237";
const CONTRACT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"inputs":[],"name":"enterLottery","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0xc1af5785"},{"inputs":[],"name":"getPlayers","outputs":[{"internalType":"address payable[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8b5b9ccc"},{"inputs":[],"name":"m_manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x901cd70f"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"m_players","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0009e924"},{"inputs":[],"name":"pickWinner","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5d495aea"}];

export default new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);