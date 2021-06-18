const logicABI = require('../artifacts/contracts/Logic.sol/Logic.json').abi;

const logicAdd = '0x51e7881c7EcBd89b6dA0EF4C11499fF79d64b1F4';
const proxyAdd = '0xf71aB1E241b6E4fCBFf82a3f1568846A426e9822';


async function delegate() {

    const proxyContract = await hre.ethers.getContractAt('Proxy', proxyAdd);
    const proxyLogic = await ethers.getContractAt('Logic', proxyAdd);
   
    const value = hre.ethers.utils.parseEther('0.0001');

    proxyLogic.on("ProxyEvent", () => {
        console.log('hi');
        // console.log('This is the num: ', num);
        // console.log('This is the sender: ', sender);
        // console.log('This is the value: ', value);
    });
    
    const tx = await proxyContract.setVars(logicAdd, 15, { value });
    await tx.wait();

};

delegate()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

  