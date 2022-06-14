## Setup
-   npm install 


#### In psql run the following:
-   CREATE USER MagicUSer WITH PASSWORD 'password123';
-   CREATE DATABASE StoreFront;
-   \c StoreFront

## Ports

-   The backend runing on: 3000 
-   The database runing on: 5432

### .env file
 
 Create a .env file based on the settings below:

 POSTGRES_HOST=127.0.0.1
 POSTGRES_DB=StoreFront
 POSTGRES_USER=MagicUSer
 POSTGRES_PASSWORD=password123
 BCRYPT_PASSWORD=my_password
 SALT_ROUNDS=10
 TOKEN_SECRET=alohomora123!
 ENV=dev