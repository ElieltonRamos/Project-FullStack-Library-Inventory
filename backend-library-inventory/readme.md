# Welcome to the FullStack library Inventory Project Repository

## <p align="center">Repository Backend</p>


<p align="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLt9b-b0LhVwsy6-f7OL87o6L6xNnopatAg&s" alt="logo postregresql" width="300px">
  <img src="https://logowik.com/content/uploads/images/nodejs.jpg" alt="logo node" width="300px">
  <img src="https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png" alt="logo express" width="300px">
  <img src="https://www.luiztools.com.br/wp-content/uploads/2021/01/sequelize.png" alt="logo sequelize" width="300px">
  <img src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0mrmucemyb2p06hcxa5c.png" width="300px">
</p>

I present the FullStack Library Inventory project, a project that has a frontend and backend written in typescript that offers a complete book management system developed in Node.js, with the help of the Express framework and ORM Sequelize to interact with the PostgreSQL database. This is backend-specific documentation, an API that provides users with essential functionality, including account creation, secure login with JWT (JSON Web Token) authentication, book creation and deletion, management of loan and book returns.

## Technologies Used

[Node JS](https://nodejs.org/en/docs)

[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

[Typescript](https://www.typescriptlang.org/)

[PostgreeSQL](https://www.postgresql.org/)

[Express JS](https://expressjs.com/pt-br/)

[Jest](https://jestjs.io/pt-BR/docs/getting-started)

## Index

- [Development Environment](#requirements)
- [Project standards](#project-standards)
- [Installation](#installation)
- [Use](#use)
- [Contact](#contact)
- [License](#license)

## Development Environment

To develop and run this application, you need to set up an environment with the following tools:

<!-- Docker: We use Docker to package and isolate the application in containers, ensuring consistent deployment and easy dependency management.

- [How to install docker](https://docs.docker.com/engine/install/ubuntu/)

**Docker Compose**: Docker Compose is a tool that simplifies the definition and management of multi-container services in a single file, ideal for orchestrating containers related to the application.

- [How to install Docker Compose](https://docs.docker.com/compose/install/) -->

<!-- ### If you do not want to install Docker, you need to install Node JS on your machine -->
### You need to install Node JS on your machine

**Node.js**:
- The application is developed in Node.js, a JavaScript/TypeScript runtime platform, and is required to run the code.

- [How to install Node.js](https://nodejs.org/en/download/package-manager)

Ensure you install and configure these tools in your development environment before starting the project.

## Project standards

  <img src="https://micreiros.com/wp-content/uploads/designpatterns-720x340.png" alt="Project standards" width="150px">

The backend is based on the Model/Service/Controller (MSC) architecture, I chose this architecture because it separates the app differently, separating the responsibilities of your application into three distinct layers, promoting better organization and maintenance of the code:

**Model:** Manages the logic and representation of data, interacting directly with the database or other data sources.

**Service:** Contains the application's business logic. It is responsible for processing data between the Controller and the Model.

**Controller:** Handles HTTP requests, delegating tasks to the Service and Model layers, and returning appropriate responses to the client.

## Choice of language and framework

  <img src="https://www.devmedia.com.br/arquivos/Artigos/42224/image004.png" alt="languages" width="150px">

I chose node along with its express framework and the javascript/typescript language because they are easy-to-understand tools with a large community. TypeScript adds a static typing system to JavaScript, detecting errors at compile time and offering an additional layer of security to the code. It also improves code readability and maintainability by providing features like IntelliSense and autocompletion in code editors. Express is a minimalist framework that allows for greater proximity between the language and the node and the ideal javascript execution environment.

## Use of ORM (Object-Relational Mapping)

 <img src="https://miro.medium.com/v2/da:true/resize:fit:1200/0*UkOqM_a_agYwUOoV" alt="logo docker" width="150px">

I chose to use an ORM because it allows the decoupling of database rules, facilitating a possible change in the future, in addition to allowing the abstraction of data modeling, greater security, protection against sql injection.

I used sequelize because it is a javascript ORM, compatible with typescript, very robust, already known by the community and which provides complete database manipulation through javascript/typescript code.

## Using PostGreSQL

  <img src="https://st4.depositphotos.com/14846838/22198/v/450/depositphotos_221986140-stock-illustration-database-server-data-protection-storage.jpg" alt="database logo" width=" 150px">

I chose to use PostgreSQL because it is a powerful, open-source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads. PostgreSQL is ACID-compliant, transactional, and supports a wide range of data types, making it a versatile choice for a variety of applications. Its extensibility and support for JSON, XML, and other data formats make it a flexible choice for modern applications. PostgreSQL's advanced security features, including SSL support, data encryption, and role-based access control, ensure that data is protected from unauthorized access. Its support for indexing, partitioning, and replication ensures that data is stored efficiently and can be scaled to meet the needs of large applications.

## Use of Json Web Token (JWT)

  <img src="https://pradeepl.com/blog/jwt/JWT-Cover.png" alt="logo jwt" width="150px">

As it is an application in which the user needs authentication, I opted for JWT, which offers an efficient and secure solution for authentication in web applications and APIs. It simplifies authentication by allowing user verification without the need to consult the database. each request. With its simple and standardized structure, JWT is easily implemented and interoperable across different platforms. Your ability to include custom information in the token offers control and flexibility in managing permissions and authorizations. Additionally, the digital signature ensures the integrity of the token's data, while optional encryption protects the token's contents from unauthorized access.

## Using Bcript JS

  <img src="https://codeforgeek.com/wp-content/uploads/2023/02/Bcrypt-vs-BcryptJS.jpg" alt="bcript logo" width="150px">

To avoid major problems in relation to data leaks, I used Bcript JS, a secure and well-known encryption library in the community, which allows hash comparison without the explicit need to decrypt the password. Furthermore, its flexibility allows it to adjust the computational cost of hashing to keep up with technology advancements. By using bcrypt.js, the protection of users' confidential information is ensured, promoting trust and application integrity.

<!-- ## Using jest

  <img src="https://miro.medium.com/v2/resize:fit:617/0*Kbpj6uYEDOzd0kbH.png" alt="jest logo" width="150px">

Like any good backend, this one has automated tests, I used jest as a testing library, as it is very complete and does not need many dependencies to be used, it simplifies the testing process with a clear and easy-to-use syntax, in addition to offer advanced features. With its parallel execution, Jest is fast and efficient, making it ideal for large test suites. It offers built-in support for creating mocks, function spying, and snapshot testing, making it easier to create isolated tests and detect regressions. Furthermore, Jest integrates perfectly with TypeScript, allowing you to write statically typed tests. Its ability to integrate with transpiling tools like Babel and packaging tools like Webpack makes it a versatile choice for backend projects. -->

## Installation

Clone this repository:

   ```bash
   git clone git@github.com:ElieltonRamos/Project-FullStack-Library-Inventory.git
   ```

Navigate to the project directory:

   ```bash
cd Project-FullStack-Library-Inventory/backend-library-inventory
   ```

Install the dependencies (if you are not using Docker):

   ``` bash
npm install
   ```

It is necessary to provide a postGreSQL database for this backend

- you can install and start postgre locally
[PostgreSQL](https://www.postgresql.org/download/)

- or you can use docker to create a container with postgreSQL

- how to install docker:
[Docker](https://www.docker.com/get-started)

```bash
docker run --name db_inventory -e POSTGRES_USER=root -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
```

Start the application:

   ``` bash
npm run dev
   ```


## Usage

Explore the essential routes of this API, including authentication, CRUD operations, and borrowing and returning books capabilities

1. **GET /**
    - This is the application's initial route
    - Its only function is to indicate that the backend is online
    - Returns status 200 and message { "message": "backend is running!" }

2. **POST /user/login**
   - Receives a json in the body of the type:

   { "userName": string, "password": string }

   - Returns a JWT token and an http status of 200 if the user is valid.
   - If the userName does not exist, the password is incorrect or the user is not registered, an error message will be returned.

3. **POST /user**
   - Receives a json in the body in the format:

   {"userName": string, "password": string, "image": string}

   - It is possible to send the user's profile image in a base64 format
   - The image field is optional
   - Validates whether the fields are valid and returns an error if any field is missing.
   - Registers a new user in the database, returns an http status 201 and a JWT token.

   { "token": string}

4. **POST /book**
   - To access this route it is necessary to enter a JWT token in the header, in the format:

      { "authorization": baerer (tokenJWT) }
   
   - Validates whether the token was sent and returns a message if it was not sent
   - Validates the token and returns a message if the token is invalid
   - Creates a new book in the database.
   - Receives a json in the body in the format:

      { "title": string, "description": string, image: string }

   - It is possible to send the post image in a base64 format or a url link
   - Title, description and image cannot be empty
   - Validates whether the fields are valid and returns an error if any field is missing


   - Returns a 201 http status and the created book.

5. **GET /book**
    - To access this route it is necessary to enter a JWT token in the header, in the format:
  
        { "authorization": baerer (tokenJWT) }
    
    - Validates whether the token was sent and returns a message if it was not sent
    - Validates the token and returns a message if the token is invalid
    - Returns all books in the database whith http status 200.

6. **GET /book/:id**
    - To access this route it is necessary to enter a JWT token in the header, in the format:
  
        { "authorization": baeer (tokenJWT) }

    - Validates whether the token was sent and returns a message if it was not sent
    - Validates the token and returns a message if the token is invalid
    - If the book does not exist, it returns an not found error
    - if the id is invalid, it returns an error
    - Returns the book with the id passed in the parameter whith http status 200.

7. **PUT /book/:id**
    - To access this route it is necessary to enter a JWT token in the header, in the format:
  
        { "authorization": baerer (tokenJWT) }

    - Validates whether the token was sent and returns a message if it was not sent
    - Validates the token and returns a message if the token is invalid
    - If the book does not exist, it returns an not found error
    - if the id is invalid, it returns an error
    - Receives a json in the body in the format:

      { "title": string, "description": string, image: string }

    - It is possible to send the post image in a base64 format or a url link
    - Returns the book with the id passed in the parameter updated whith http status 200.

8. **DELETE /book/:id**
    - To access this route it is necessary to enter a JWT token in the header, in the format:
  
        { "authorization": baerer (tokenJWT) }

    - Validates whether the token was sent and returns a message if it was not sent
    - Validates the token and returns a message if the token is invalid
    - If the book does not exist, it returns an not found error
    - if the id is invalid, it returns an error
    - Returns { message: 'Book deleted' } with the id passed in the parameter deleted whith http status 200.

9. **PATCH /book/:id/borrow**/
    - To access this route it is necessary to enter a JWT token in the header, in the format:
  
        { "authorization": baerer (tokenJWT) }

    - Validates whether the token was sent and returns a message if it was not sent
    - Validates the token and returns a message if the token is invalid
    - If the book does not exist, it returns an not found error
    - if the id is invalid, it returns an error
    - Returns { message: 'Book borrowed' } with the id passed in the parameter borrowed whith http status 200.

10. **PATCH /book/:id/giveback**/
    - To access this route it is necessary to enter a JWT token in the header, in the format:
  
        { "authorization": baerer (tokenJWT) }

    - Validates whether the token was sent and returns a message if it was not sent
    - Validates the token and returns a message if the token is invalid
    - If the book does not exist, it returns an not found error
    - if the id is invalid, it returns an error
    - Returns { message: 'Book given back' } with the id passed in the parameter given back whith http status 200.

11. **Error Handling**
      - All routes have error handling.
      - All controllers have a try/catch block to avoid exposing internal server data.
      - If an error occurs, it is expected and a message is returned informing what happened.
      - If an unexpected error occurs, the application returns an http 500 status and an error message.

## Contact

Elielton Ramos

[![E-mail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:elieltonramos14@gmail.com)
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/elielton-ramos/)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](elielton6554)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/elieltonramos08/)

## License

Open Source

This project is open source and available to the community. Feel free to explore, clone, and contribute to the project.

## Acknowledgements

Thank you for all the hours dedicated, challenges overcome, and lessons learned during the development of this project. Every line of code written was a step towards my growth as a developer and the success of this endeavor.

I would also like to extend my gratitude to all educational resources, documentation, and online communities that provided guidance, inspiration, and support throughout this process.
