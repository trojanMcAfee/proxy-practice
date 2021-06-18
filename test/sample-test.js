const logicABI = require('../artifacts/contracts/Logic.sol/Logic.json').abi;

describe("MyProxy", function() {
  const value = ethers.utils.parseEther('0.01');
  let proxy;
  let logic;
  let iLogic;
  let proxyLogic
  // const proxyAdd = '0xf71aB1E241b6E4fCBFf82a3f1568846A426e9822';
  before(async () => {
    const Proxy = await ethers.getContractFactory("Proxy");
    proxy = await Proxy.deploy();
    await proxy.deployed();

    const Logic = await ethers.getContractFactory("Logic");
    logic = await Logic.deploy();
    await logic.deployed();

    iLogic = new ethers.utils.Interface(logicABI);
    proxyLogic = await ethers.getContractAt("Logic", proxy.address);
  });

  xit("should run delegatecall", async function() {
    
    const tx = await proxy.setVars(logic.address, 15, { value, gasLimit: 100000 });
    const receipt = await tx.wait();

    const { topics, data } = receipt.events[0];
    const [ num, sender, value2 ] = iLogic.decodeEventLog("ProxyEvent", data, topics);
    console.log('This is the num: ', num.toString());
    console.log('This is the sender: ', sender);
    console.log('This is the value: ', ethers.utils.formatEther(value2.toString()));    
  });

  it("should emit an event with on", async function() {

    // const proxyLogic = await ethers.getContractAt("Logic", proxyAdd);
    // console.log(proxyLogic);

    await proxyLogic.on("ProxyEvent", () => {
        console.log('hi');
        // console.log('This is the num: ', num);
        // console.log('This is the sender: ', sender);
        // console.log('This is the value: ', value);
    });
    
    const tx = await proxy.setVars(logic.address, 15, { value, gasLimit: 100000 });
    await tx.wait();
   
  });

  
});
