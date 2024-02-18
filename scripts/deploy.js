const { ethers } = require("hardhat");

async function main() {
    const HelloWorld = await ethers.getContractFactory('HelloWorld');
    const contract = await HelloWorld.deploy("Hello World! Hello ETH!");
    console.log(`contract deployed at ${contract.address}`)
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.log(`err: ${err}`)
        process.exit(1)
    })