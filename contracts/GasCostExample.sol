// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract GasCostExample {
    uint public uninitializedVar;
    uint public initializedVar;

    constructor() {
        // No gas cost for declaring without initializing
    }

    function setInitializedVar(uint _value) external {
        initializedVar = _value;
        // Gas cost incurred for assigning a value
    }
}
