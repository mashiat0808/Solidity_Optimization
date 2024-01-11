// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LoopCheckContract {
    function loopCheck1(uint256[] memory arr) external pure returns (uint256[] memory) {
        
        uint length = arr.length;
        for (uint i; i < length;) {
            unchecked { ++i; }
        }
        
        return arr;
    }

    function loopCheck2(uint256[] memory arr) external pure returns (uint256[] memory) {

        uint i;
        uint length = arr.length;
        for (; i < length;) { // 29912 gas
            unchecked { ++i; }
        }

        return arr;
    }

    function loopCheck3(uint256[] memory arr) external pure returns (uint256[] memory) {

        uint length = arr.length;
        for (uint i = 0; i < length; i++) { // Regular loop structure
            unchecked { ++i; }
        }

        return arr;
    }
}
