// SPDX-License-Identifier: MIT

pragma solidity =0.7.6;

import "./OwnableUpgradeable.sol";

abstract contract Agentable is OwnableUpgradeable {
    mapping (address => bool) private _isAgent;

    function isAgent(address _addr) public view virtual returns (bool) {
        return _isAgent[_addr]; 
    }

    function _setAgent(address _addr, bool _state) virtual internal {
        _isAgent[_addr] = _state;
    }

    function addAgent(address agent) external virtual onlyOwner {
        _setAgent(agent, true);
    } 

    function removeAgent(address agent) external virtual onlyOwner {
        _setAgent(agent, false);
    } 

    modifier onlyAgent() {
        require(isAgent(msg.sender), "Agentable: caller is not agent");
        _;
    }

    modifier onlyAgentOrOwner() {
        require(isAgent(msg.sender) || owner() == msg.sender, "Agentable: caller is not agent nor owner");
        _;
    }

    function renounceAgentship() external virtual onlyAgent {
        _setAgent(msg.sender, false);
    }
}