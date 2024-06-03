# Welcome to the FullStack Library Inventory Project Repository

## <p align="center">Repository FullStack</p>


<p align="center">
  <img src="https://giovanidacruz.com.br/wp-content/uploads/2022/11/postgres-logo.png" alt="logo postgresql" width="300px">
  <img src="https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png" alt="logo express" width="300px">
  <img src="https://www.luiztools.com.br/wp-content/uploads/2021/01/sequelize.png" alt="logo sequelize" width="300px">
  <img src="https://pt.vitejs.dev/og-image-announcing-vite4-3.png" alt="logo vite" width="300px">
  <img src="https://logowik.com/content/uploads/images/nodejs.jpg" alt="logo node" width="300px">
  <img src="https://cdn.thexcodes.com/imgs/reactJS.png" alt="logo react" width="300px">
  <img src="https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg" alt="logo tailwind" width="300px">
  <img src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0mrmucemyb2p06hcxa5c.png" width="300px">
</p>

## 📚 About

I present the FullStack Library Inventory project, a project that has a frontend and a backend written in typescript that offers a complete book management system developed in Node.js. The frontend was built with React JS, Vite and Tailwind CSS. The backend was built with Express, Sequelize, node, TypeScript. The database used was PostgreSQL.

## 🚀 Technologies Used

[Node JS](https://nodejs.org/en/docs)

[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

[Typescript](https://www.typescriptlang.org/)

[Tailwind](https://tailwindcss.com/)

[React JS](https://react.dev/)

[Vite](https://vitejs.dev/guide/)

[PostGreSQL](https://www.postgresql.org/)

[Express JS](https://expressjs.com/pt-br/)

[Jest](https://jestjs.io/pt-BR/docs/getting-started)

## index

- [Development Environment](#requirements)
- [Project standards](#project-standards)
- [Installation](#installation)
- [Use](#use)
- [Contact](#contact)
- [License](#license)

## Development Environment

To develop and run this application, it is necessary to configure an environment with the following tools:

**Node.js**: The application is developed in Node.js, a JavaScript/Typescript runtime platform, and is required to execute the code.

- [How to install Node.js](https://nodejs.org/en/download/package-manager)

Be sure to install and configure these tools in your development environment before starting the project.

## Installation

Clone this repository:
   ```bash
   git clone git@github.com:ElieltonRamos/Project-FullStack-Library-Inventory.git
   ```

Navigate to the project directory:

   ```bash
    cd Project-FullStack-Library-Inventory
   ```

Install the dependencies the frontend application by running the following command in the terminal:

   ``` bash
    cd frontend-library-inventory && npm install
   ```

Install the dependencies the backend application by running the following command in the terminal:

   ``` bash
    cd .. && cd backend-library-inventory && npm install
   ```


It is necessary to provide a PostgreSQL database for this backend

- you can install and start postgre locally
- [PostgreSQL](https://www.postgresql.org/download/)

- or you can use docker to create a container with postgreSQL

- [How to install docker](https://docs.docker.com/engine/install/ubuntu/)


```bash
docker run --name db_inventory -e POSTGRES_USER=root -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
```

Start the backend application by running the following command in the terminal:

   ``` bash
    npm run dev
   ```

Start the frontend application by running the following command in the terminal:

   ``` bash
    cd .. && cd frontend-library-inventory && npm run dev
   ```

## Usage

<p align="center">
  <img src="./public/page-login.png" alt="page login" width="300px">
  <img src="./public/page-register.png" alt="page register" width="300px">
  <img src="./public/page-all-books.png" alt="page all books" width="260px">
  <img src="./public//page-book-id.png" alt="page book id" width="300px">
</p>

The front end application will be available at http://localhost:5173, where you can access the user interface and interact with the backend RESTful API.

The backend application will be available at http://localhost:3001, where you can access the RESTful API and interact with the database.

In the frontend-library-inventory and backend-library-inventory folders, you will find the appropriate README.md with detailed instructions on how to use and configure each part of the application. in addition to explanations about the routes, application functionalities and project patterns.

## Contact

Elielton Ramos

[![e-mail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:elieltonramos14@gmail.com)
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/elielton-ramos/)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](elielton6554)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/elieltonramos08/)

## License

Open Source

This project is open source and available to the community. Feel free to explore, clone, and contribute to the project.

## Acknowledgements

Thank you for all the hours dedicated, challenges overcome, and lessons learned during the development of this project. Every line of code written was a step towards my growth as a developer and the success of this endeavor.

I would also like to extend my gratitude to all educational resources, documentation, and online communities that provided guidance, inspiration, and support throughout this process.

