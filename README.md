# Sam Challenge

This challenge was to create an app with React and Nestjs on a subject of my choice. App should include a database with normally distributed data. The Ui should show the normally distributed on a chart.

Wanted to dust off this project since its the stack I've been working in since I created it. I have updated this project with a seed file and commands. Added some new UI elements and comments.

## Running the Project

```
git clone git@github.com:mmacdonald1/sam-challenge.git
cd sam-challenge
npm i
```

Create Postgres database with table name plant

Create env file with database information

```
npm start
```

Should connect to database and run migrations

```
npm run seed
```

To seed the database

```
npm start
```

To run server

## Technologies

Nestjs
TypeOrm
PostgreSQL

## Front-end Repo

https://github.com/mmacdonald1/sam-challenge-web

## Controller

I got a little excited and made CRUD routes for plants. There is a custom route '/plants/:n/getByNumRows' that grabs the number of rows passed in using a SQL query.

![](https://media.giphy.com/media/wCMrcyfZtK0z6/giphy.gif)
