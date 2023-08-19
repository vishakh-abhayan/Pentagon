// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    uint256 public tokenId;
    constructor() ERC721("MyNFT", "NFT") {
       tokenId = 0;
    }

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner {
        _mint(recipient, tokenId);
        _setTokenURI(tokenId, tokenURI);
        tokenId ++;
    }
}

