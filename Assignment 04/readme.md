## Installation

Clone the repository to your local machine:

```
git clone https://github.com/your-username/your-repository.git
```

Navigate to the project directory and install dependencies:
install ejs
install 
```
cd your-project-directory
npm install
```

## Usage

Start the server:

```
node srver.js
```

Access the application in your web browser at
 http://localhost:3000. 


## Changes
Transition from Static Files to Database:

Last time, the program relied on reading data from static files.
Today's update involves migrating the data source from static files to a database system, either PostgreSQL (relational).

CRUD Operations Integration:
Previously, CRUD operations were performed on Users and Products using static file data.
Today, CRUD operations expand to include a new class, Orders, while connecting these operations to the selected database (PostgreSQL).

Endpoint Modifications:
In the earlier version, endpoints were handling static file-based CRUD operations for Users and Products.
Today's changes introduce CRUD endpoints for Orders, including GET all orders, GET order by ID, DELETE order by ID, and POST new order, all now interacting with the chosen database.

Dependency Installation and Database Connection:
In the previous version, no database connection or dependencies for database interaction were present.
Today's update involves installing necessary dependencies (Sequelize for PostgreSQL) and establishing connections to the selected database in the server.js file.
Model Creation and Service Classes:

Earlier, service classes were handling static file data.
Today's changes include creating Sequelize objects (for relational databases) to interact with Users, Products, and Orders in the database.



## Credits
```This project was part of the web322 class by Maryam Mohamed.```

