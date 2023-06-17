# My Monorepo

> A centralized repository containing multiple projects, utilizing a monorepo structure for efficient development and code sharing.

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Version](https://img.shields.io/badge/Version-v1.0.1-green.svg)

## Introduction

This monorepo contains multiple projects built using various technologies. It aims to provide a centralized development environment, enabling code sharing, efficient collaboration, and simplified maintenance. The `packages` folder contains reusable UI pages, components, services, and utilities that are commonly used in the `apps` projects, making them more efficient.

## Table of Contents

- [Projects](#projects)
  - [Next.js Apps](#nextjs-apps)
  - [React Apps](#react-apps)
  - [Mobile Apps](#mobile-apps)
- [Packages](#packages)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Version](#version)
- [License](#license)

## Projects

### Next.js Apps

The `next-apps` folder contains projects built with Next.js.

#### Next App One

Description: This project serves as an example Next.js application.

- Setup:
  - Clone the repository: `git clone https://github.com/exxonabhijit/master-nx-js-monorepo.git`
  - Navigate to the project directory: `cd apps/next-apps/next-app-one`
  - Install dependencies: `npm install`

- Development:
  - Run the development server: `npm run dev`
  - Access the app at: `http://localhost:3000`

#### Next App Two

Description: This project showcases the usage of Next.js with specific features.

- Setup:
  - Clone the repository: `git clone https://github.com/exxonabhijit/master-nx-js-monorepo.git`
  - Navigate to the project directory: `cd apps/next-apps/next-app-two`
  - Install dependencies: `npm install`

- Development:
  - Run the development server: `npm run dev`
  - Access the app at: `http://localhost:3000`

### React Apps

The `react-apps` folder contains projects built with React.

#### React App One

Description: This project demonstrates the usage of React for building scalable web applications.

- Setup:
  - Clone the repository: `git clone https://github.com/exxonabhijit/master-nx-js-monorepo.git`
  - Navigate to the project directory: `cd apps/react-apps/react-app-one`
  - Install dependencies: `npm install`

- Development:
  - Run the development server: `npm start`
  - Access the app at: `http://localhost:3000`

#### React App Two

Description: This project showcases advanced React techniques and patterns.

- Setup:
  - Clone the repository: `git clone https://github.com/exxonabhijit/master-nx-js-monorepo.git`
  - Navigate to the project directory: `cd apps/react-apps/react-app-two`
  - Install dependencies: `npm install`

- Development:
  - Run the development server: `npm start`
  - Access the app at: `http://localhost:3000`

### Mobile Apps

The `mobile-apps` folder contains projects built for mobile platforms.

#### Mobile App One

Description: This project focuses on developing cross-platform mobile applications using frameworks like React Native.

- Setup:
  - Clone the repository: `git clone https://github.com/exxonabhijit/master-nx-js-monorepo.git`
  - Navigate to the project directory: `cd apps/mobile-apps/mobile-app-one`
  - Install dependencies: `npm install`

- Development:
  - Run the development server: `npm start`
  - Access the app on your mobile device using Expo or other relevant tools.

#### Mobile App Two

Description: This project showcases the usage of specific mobile development frameworks or technologies.

- Setup:
  - Clone the repository: `git clone https://github.com/exxonabhijit/master-nx-js-monorepo.git`
  - Navigate to the project directory: `cd apps/mobile-apps/mobile-app-two`
  - Install dependencies: `npm install`

- Development:
  - Run the development server: `npm start`
  - Access the app on your mobile device using Expo or other relevant tools.

## Packages

The `packages` folder contains reusable UI pages, components, services, and utilities that are commonly used in the apps' projects. These packages provide shared functionality and promote code reuse across different projects.

#### Package One

Description: This package provides a set of UI components for creating beautiful user interfaces.

- Installation: `npm install @my-monorepo/package-one`

- Usage:
  ```javascript
  import { Button, Card } from '@my-monorepo/package-one';
  
  // Use the components in your code
  <Button onClick={handleClick}>Click me</Button>
  <Card title="Hello">This is a card component</Card>
