# Open-Source Community Learning Platform

![Uploading Screenshot 2023-08-20 at 12.58.01 PM.png…]()

Welcome to the Open-Source Community Learning Platform project! This platform aims to provide a space for communities to collaborate, learn, and share educational resources. The platform leverages Web3 technologies and MetaMask for authentication, and it utilizes NFTs to reward users upon achieving course milestones.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## About

The Open-Source Community Learning Platform is designed to foster community-based learning by offering a space where users can engage in courses, share valuable resources, and collaborate through group chats. The platform utilizes NFTs as incentives for both learners and quality resource creators, creating a dynamic learning environment.

## Features

- User authentication using MetaMask wallet
- Community-based learning through courses and resources
- NFT rewards for achieving course milestones
- Group chats for community engagement
- Customizable channels for specific courses
- Exclusive features for milestone holders

## Technologies Used

- TypeScript
- React (Frontend)
- Solidity (Smart Contracts)
- Web3.js (Integration with Ethereum)
- MetaMask (Authentication and Wallet)
- (Add any other technologies your project relies on)

## Getting Started

Follow these steps to set up and run the project locally:

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/community-learning-platform.git
   cd community-learning-platform
   ```

```bash
      cd Hack_GTA
```

```bash
   yarn
```

```bash
      yarn dev
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
