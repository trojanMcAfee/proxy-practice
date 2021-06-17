

async function main() {

  const Proxy = await hre.ethers.getContractFactory("Proxy");
  const proxy = await Proxy.deploy();
  await proxy.deployed();

  const Logic = await hre.ethers.getContractFactory("Logic");
  const logic = await Logic.deploy();
  await logic.deployed();

  console.log("Logic deployed to:", logic.address);
  console.log("Proxy deployed to:", proxy.address);
  
}







main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
