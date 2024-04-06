// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CarbonCreditContract {
    address public owner;
    uint256 public carbonCreditPrice;  // Fixed price in wei (smallest unit of Ether)

    struct CarbonCreditPurchase {
        address buyer;
        uint256 creditsBought;
        uint256 amountPaid;
        uint256 timestamp;
    }

    CarbonCreditPurchase[] public purchases;  // Array to store purchase records
    uint256 public purchaseIndex;

    mapping(address => uint256) public creditBalances;  // Mapping to store credit balances of each account

    event CarbonCreditPurchased(address indexed buyer, uint256 creditsBought, uint256 amountPaid, uint256 timestamp);

    constructor(uint256 _carbonCreditPrice) {
        owner = msg.sender;
        carbonCreditPrice = _carbonCreditPrice;
        purchaseIndex = 0;
    }

    // Function to allow users to buy a specific number of carbon credits
    function buyCarbonCredits(uint256 _creditsToBuy) external payable {
        require(_creditsToBuy > 0, "Number of credits to buy must be greater than zero");
        require(msg.value >= _creditsToBuy * carbonCreditPrice, "Insufficient funds sent");

        // Calculate total amount to pay
        uint256 totalAmount = _creditsToBuy * carbonCreditPrice;

        // Record the purchase
        purchases.push(CarbonCreditPurchase({
            buyer: msg.sender,
            creditsBought: _creditsToBuy,
            amountPaid: totalAmount,
            timestamp: block.timestamp
        }));
        purchaseIndex++;

        // Update buyer's credit balance
        creditBalances[msg.sender] += _creditsToBuy;

        emit CarbonCreditPurchased(msg.sender, _creditsToBuy, totalAmount, block.timestamp);

        // Optionally, you can transfer the payment to another wallet (e.g., the seller's wallet)
        // address payable sellerWallet = payable(owner);
        // sellerWallet.transfer(totalAmount - (msg.value - totalAmount));
    }

    // Function to withdraw Ether from the contract (for the owner)
    function withdrawEther() external {
        require(msg.sender == owner, "Only contract owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }

    // Function to change the carbon credit price (for the owner)
    function setCarbonCreditPrice(uint256 _newPrice) external {
        require(msg.sender == owner, "Only contract owner can set price");
        carbonCreditPrice = _newPrice;
    }

    // Function to check the carbon credit balance of the caller
    function checkCreditBalance() external view returns (uint256) {
        return creditBalances[msg.sender];
    }

    // Function to get the total number of purchases
    function getTotalPurchases() external view returns (uint256) {
        return purchases.length;
    }

    // Function to get purchase details by index
    function getPurchase(uint256 index) external view returns (address, uint256, uint256, uint256) {
        require(index < purchases.length, "Invalid purchase index");
        CarbonCreditPurchase memory purchase = purchases[index];
        return (purchase.buyer, purchase.creditsBought, purchase.amountPaid, purchase.timestamp);
    }
}
