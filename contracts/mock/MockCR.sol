// SPDX-License-Identifier: MIT

pragma solidity =0.7.6;
pragma abicoder v2;

import "../nodes/NodeRegistry.sol";

contract MockCR is NodeRegistry {
    event VersionUpdated(uint256 newVersion);
    
    uint256 private _proxyVersion;

    /**
     * @notice Creates a node registry contract with platform address info.
     */

    function getVersion() external view returns (uint256) {
        return _proxyVersion;
    }

    function setVersion(uint256 version) external {
        _proxyVersion = version;
        
        emit VersionUpdated(version);
    }
}
