![logo](https://github.com/kumarprem66/FoodCorner/blob/main/foodporject.jpg)

# FoodCorner Website

Welcome to FoodCorner, a web application for food enthusiasts to explore and share their favorite recipes. This project is built using Angular for the frontend and JSON Server as a mock backend to manage recipes with Admin Panel.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- View a list of recipes with details like name, ingredients, and preparation steps.
- Add new recipes to the collection.
- Edit existing recipes.
- Delete recipes.
- Search for recipes by name or ingredients.
- Responsive design for mobile and desktop.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your system.
- Angular CLI installed globally. If not, you can install it using `npm install -g @angular/cli`.
- JSON Server for mock API. You can install it using `npm install -g json-server`.

## Getting Started
To get a local copy of this project up and running, follow these steps:

1. Clone this repository:
```bash
git clone https://github.com/kumarprem66/FoodCorner.git
```


2. Install project dependencies:
```bash
npm install
```
3. Start the JSON Server (mock API):
```bash
json-server --watch db.json
```

4. Start the Angular development server:
```bash
ng serve
```

5. Open your browser and navigate to `http://localhost:4200/` to view the FoodCorner website.

## Project Structure
The project structure is organized as follows:

- `/src`: Contains the Angular application source code.
- `/src/app`: Angular components, services, and modules.
- `/src/assets`: Static assets such as images and styles.
- `/db.json`: JSON Server database file containing recipe data.

## Deployment
This project can be deployed to various hosting platforms, including but not limited to GitHub Pages, Netlify, or Vercel. You can follow the hosting provider's documentation for deployment instructions.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:
- Fork the repository and create a new branch for your feature/bugfix.
- Make your changes, commit, and push to your fork.
- Submit a pull request with a clear description of your changes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy cooking and coding! 🍽️💻

