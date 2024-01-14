# DappCrowdfunding Smart Contract

## Website Access
To view the live version of the lottery smart contract application, visit [Crowdfunding Website](https://crowdfunding.andreidev.site/). 

**Login Credentials**:
- Username: `andrei`
- Password: `andrei`

## Overview

The **DappCrowdfunding smart contract**, developed in **Solidity**, is designed to facilitate decentralized crowdfunding on the Ethereum blockchain. This repository contains the code and documentation for setting up and interacting with a blockchain-based crowdfunding system.

## Key Features

- **Decentralized Crowdfunding**: Built on Ethereum, providing a transparent and secure crowdfunding experience.
- **Project Creation**: Allows project creators to initiate crowdfunding campaigns with customizable parameters.
- **Automated Payouts**: Automatically distributes funds to project creators upon successful completion.
- **Refund Mechanism**: Supports automatic refunds if a project does not reach its funding goal within the specified timeframe.
- **Ownership Control**: Ensures that only the owner can perform critical administrative actions.

## Contract Structure

- **Project Creation**: Creators can initiate crowdfunding projects with details such as title, description, funding goal, and expiration date.
- **Backing a Project**: Participants can contribute funds to projects they believe in.
- **Automatic Payouts**: If a project reaches its funding goal, funds are automatically transferred to the project owner.
- **Refunds**: In case a project fails to reach its goal within the specified timeframe, backers can claim automatic refunds.

## Getting Started

### Prerequisites

- An Ethereum wallet (e.g., MetaMask) for interactions.
- Solidity for smart contract development.
- Truffle or Hardhat for deployment.

### Installation and Deployment

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Deploy the contract to an Ethereum testnet (e.g., Rinkeby or Goerli) using Truffle or Hardhat.

## Interacting with the Contract

- **Project Creators**: Can create crowdfunding projects with details like title, description, funding goal, and expiration date.
- **Backers**: Can contribute funds to projects they wish to support.
- **Admins**: Can perform administrative actions such as updating project details, deleting projects, and changing the project tax.

## Smart Contract Functions

- `createProject`: Initiates a new crowdfunding project.
- `backProject`: Allows backers to contribute funds to a project.
- `updateProject`: Permits project creators to update project details.
- `deleteProject`: Allows project creators to delete a project.
- `requestRefund`: Enables project creators or admins to request refunds for a project.
- `payOutProject`: Allows project creators or admins to initiate payouts for successful projects.

## Security Features

- **Ownership Control**: Only the owner can perform critical administrative actions.
- **Refund Mechanism**: Automatic refunds for backers if a project does not reach its funding goal.
- **Validations**: Checks for correct input values and project timings.

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change or add.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- Ethereum community for support and guidance.
- OpenZeppelin for secure contract libraries.

---

This project is a demonstration of decentralized crowdfunding application development, focusing on smart contract design and security in a blockchain environment.

