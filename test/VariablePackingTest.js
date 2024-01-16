const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PackedVariablesExample", function () {
    let packedVariablesExample;

    beforeEach(async function () {
        const PackedVariablesExample = await ethers.getContractFactory("PackedVariablesExample");
        packedVariablesExample = await PackedVariablesExample.deploy(42, 24, 1000, 56);
    });

    it("should demonstrate variable packing", async function () {
        // Measure gas consumption for getting values individually
        const gasGetA = await packedVariablesExample.a.estimateGas();
        const gasGetC = await packedVariablesExample.c.estimateGas();
        const gasGetB = await packedVariablesExample.b.estimateGas();

        // Measure gas consumption for getting all values at once
        const gasGetAll = await packedVariablesExample.a.c.b.estimateGas();

        console.log("Gas used (getA):", gasGetA);
        console.log("Gas used (getC):", gasGetC);
        console.log("Gas used (getB):", gasGetB);
        console.log("Gas used (getAll):", gasGetAll);

        // Assert that gas consumption for getting all values is less than the sum of individual gas consumptions
        expect(gasGetAll).to.be.lt(gasGetA + gasGetC + gasGetB);
    });
});
