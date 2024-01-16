// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
// Specify the packing alignment for the entire contract

contract PackedVariablesExample {
    struct PackedStruct {
        uint128 a;
        uint128 c;
        uint256 b;
        uint128 d;
    }

    PackedStruct public packedData;

    constructor(uint128 _a, uint128 _c, uint256 _b, uint128 _d) {
        packedData = PackedStruct(_a, _c, _b, _d);
    }
}
