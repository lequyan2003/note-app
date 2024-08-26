# Notify

_A modern note-taking app built with React.js, Node.js, Material UI, GraphQL, MongoDB, Firebase, and WebSocket_

## Overview

Notify is a sophisticated note-taking application designed to help users efficiently manage their notes. Built with a robust tech stack, Notify offers a responsive and user-friendly interface using React.js and Material UI, secure user authentication with Firebase, and real-time data interaction through GraphQL and WebSocket. The back-end is powered by Node.js and MongoDB, ensuring a scalable and efficient system.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- **GraphQL Server:** Configured a GraphQL server with schemas and resolvers to manage data interactions with MongoDB, enabling efficient data querying and manipulation.
- **Google Login:** Implemented Google login functionality using Firebase Authentication, securely managing user sessions with access tokens on both front-end and back-end.
- **Real-time Updates:** Developed real-time note updates using WebSocket, ensuring that users can see changes instantly across different devices.
- **Responsive UI:** Integrated React.js with Material UI to create a responsive and visually appealing user interface for an enhanced user experience.

## Installation

1. **Clone the repo**

```bash
git clone https://github.com/lequyan2003/note-app.git
```

2. **Navigate to the project's server directory**

```bash
cd note-app/server
```

3. **Install server dependencies**

```bash
npm install
```

4. **Run the backend server**

```bash
nodemon server.mjs
```

5. **Navigate to the project's client directory:**

```bash
cd ../client
```

6. **Install client dependencies**

```bash
npm install
```

7. **Run the client**

```bash
npm run dev
```

## Usage

To access the application, open your browser and navigate to the local server URL provided by the npm run dev command.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repo.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -m 'Add feature').
5. Push to the branch (git push origin feature-branch).
6. Create a pull request.
