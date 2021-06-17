//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.6;


contract Logic {
    uint num;
    address sender;
    uint value;

    event ProxyEvent(uint, address, uint);

    function setVars(uint256 _num) public payable {
        num = _num;
        sender = msg.sender;
        value = msg.value;

        emit ProxyEvent(num, sender, value);
    }
}