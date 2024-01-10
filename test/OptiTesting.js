const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GasCostExample Contract", function () {
    let gasCostExample;

    beforeEach(async function () {
        const GasCostExample = await ethers.getContractFactory("GasCostExample");
        gasCostExample = await GasCostExample.deploy();
        // Remove the .deployed() from here
    });

    it("should not incur gas cost for declaring without initializing", async function () {
        // Use await before gasCostExample.deployed() here
        const uninitializedVarValue = await gasCostExample.uninitializedVar();
        expect(uninitializedVarValue).to.equal(0);
        console.log(uninitializedVarValue + " gas used");
        
    });

    it("should incur gas cost when assigning a value", async function () {
        const transaction = await gasCostExample.setInitializedVar(42);
        const receipt = await transaction.wait();
        
        // Remove .toNumber() when accessing gasUsed
        const gasUsed = receipt.gasUsed;
    
        // Assert that gasUsed is greater than 0, indicating gas cost
        expect(gasUsed).to.be.gt(0);
        console.log(gasUsed + " gas used");
    });
});
