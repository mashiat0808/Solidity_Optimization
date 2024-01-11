/*const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PackedVariablesExample Contract", function () {
    let packedVariablesExample;

    beforeEach(async function () {
        const PackedVariablesExample = await ethers.getContractFactory("PackedVariablesExample");
        packedVariablesExample = await PackedVariablesExample.deploy(1, 1, 2);
    });

    it("should pack small variables into the same storage slot", async function () {
        // Retrieve the storage slot values
        const aStorageSlot = await packedVariablesExample.a();
        const cStorageSlot = await packedVariablesExample.c();
        const bStorageSlot = await packedVariablesExample.b();

        console.log("Storage Slot Values - a:", aStorageSlot.toString());
        console.log("Storage Slot Values - c:", cStorageSlot.toString());
        console.log("Storage Slot Values - b:", bStorageSlot.toString());

        // Check if a and c are in the same storage slot
        expect(aStorageSlot).to.equal(cStorageSlot);
    });

    it("should have sequential storage positions for small variables", async function () {
        // Retrieve the storage position values
        const aStoragePosition = await ethers.provider.getStorageAt(packedVariablesExample.address, 0);
        const cStoragePosition = await ethers.provider.getStorageAt(packedVariablesExample.address, 1);
        const bStoragePosition = await ethers.provider.getStorageAt(packedVariablesExample.address, 2);

        console.log("Storage Position Values - a:", ethers.BigNumber.from(aStoragePosition).toString());
        console.log("Storage Position Values - c:", ethers.BigNumber.from(cStoragePosition).toString());
        console.log("Storage Position Values - b:", ethers.BigNumber.from(bStoragePosition).toString());

        // Check if a and c have sequential storage positions
        expect(ethers.BigNumber.from(cStoragePosition)).to.equal(ethers.BigNumber.from(aStoragePosition).add(1));
    });
});
*/