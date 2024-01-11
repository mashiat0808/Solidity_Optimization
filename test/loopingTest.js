const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LoopCheckContract", function () {
    let loopCheckContract;

    beforeEach(async function () {
        const LoopCheckContract = await ethers.getContractFactory("LoopCheckContract");
        loopCheckContract = await LoopCheckContract.deploy();
    });

    it("should test gas cost for loopCheck1 function", async function () {
        const arr = [1, 2, 3];
        const transaction = await loopCheckContract.loopCheck1(arr);
        const receipt = await transaction.wait();
        const gasUsed = receipt.gasUsed;

        expect(gasUsed).to.be.gt(0);
        console.log("Gas used (loopCheck1):", gasUsed);
    });

    it("should test gas cost for loopCheck2 function", async function () {
        const arr = [1, 2, 3];
        const transaction = await loopCheckContract.loopCheck2(arr);
        const receipt = await transaction.wait();
        const gasUsed = receipt.gasUsed;

        expect(gasUsed).to.be.gt(0);
        console.log("Gas used (loopCheck2):", gasUsed);
    });

    it("should test gas cost for loopCheck3 function", async function () {
        const arr = [1, 2, 3];
        const transaction = await loopCheckContract.loopCheck3(arr);
        const receipt = await transaction.wait();
        const gasUsed = receipt.gasUsed;

        expect(gasUsed).to.be.gt(0);
        console.log("Gas used (loopCheck3):", gasUsed);
    });
});
