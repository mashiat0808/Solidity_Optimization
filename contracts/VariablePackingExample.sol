// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract PackedVariablesExample {
    uint128 public a;
    uint128 public c;
    uint256 public b;

    constructor(uint128 _a, uint128 _c, uint256 _b) {
        a = _a;
        c = _c;
        b = _b;
    }
}
