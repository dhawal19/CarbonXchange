const main = async () => {
    const creditFactory = await hre.ethers.getContractFactory("carbonCredit");
    const creditContract = await creditFactory.deploy();
  
    await creditContract.waitForDeployment();
  
    console.log("Transactions address: ", creditContract.target);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  runMain();