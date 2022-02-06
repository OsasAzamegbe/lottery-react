import web3 from './web3';


class Lottery {
  #CONTRACT_ADDRESS;
  #CONTRACT_ABI;
  #lottery;

  constructor() {
    this.#CONTRACT_ADDRESS = "0xD060380D67DdaC8467F9Cd0404343Cfc42774237";
    this.#CONTRACT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"inputs":[],"name":"enterLottery","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0xc1af5785"},{"inputs":[],"name":"getPlayers","outputs":[{"internalType":"address payable[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8b5b9ccc"},{"inputs":[],"name":"m_manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x901cd70f"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"m_players","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0009e924"},{"inputs":[],"name":"pickWinner","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5d495aea"}];
    this.#lottery = new web3.eth.Contract(this.#CONTRACT_ABI, this.#CONTRACT_ADDRESS);
  }

  async getAccounts() {
    return await web3.eth.getAccounts();
  }

  async getManager() {
    return await this.#lottery.methods.m_manager().call();
  }

  async getBalance() {
    const balanceInWei = await web3.eth.getBalance(this.#lottery.options.address);
    return web3.utils.fromWei(balanceInWei, 'ether');
  }

  async getPlayers() {
    return await this.#lottery.methods.getPlayers().call();
  }

  async enterLottery(account, etherValue) {
    await this.#lottery.methods.enterLottery().send({ from: account,value: web3.utils.toWei(etherValue, 'ether') });
  }

  async pickWinner(account) {
    await this.#lottery.methods.pickWinner().send({ from: account });
  }
}

export default Lottery;