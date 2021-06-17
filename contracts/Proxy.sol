//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.6;

contract Proxy {
    uint num;
    address sender;
    uint value;

    function setVars(address _contract, uint _num) public payable returns(uint, string memory) {
        (bool success, ) = _contract.delegatecall(
            abi.encodeWithSignature("setVars(uint256)", _num)
        );
        require(success, "Delegate call failed");
        return (0, "");
    }
}
