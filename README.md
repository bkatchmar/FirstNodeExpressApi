# Introduction

I decided to go ahead and try to build an API strictly from nodejs using expressjs. I followed an article found [here](https://medium.com/@purposenigeria/build-a-restful-api-with-node-js-and-express-js-d7e59c7a3dfb).

Created the app.js file and ran

```
npm init
```

To create the package.json file.

Afterwards, ran these

```
npm install express
npm install babel-cli
npm install babel-preset-es2015
npm install body-parser
npm install mysql
```

Running this app requires this command

```
npm run start
```

After putting this into the package.json file

```
"scripts": {
    "start": "node_modules/.bin/nodemon app.js --exec babel-node --"
}
```

To ease development, I decided to also throw nodemon up here.

```
npm install nodemon --save-dev
```

Later on in development I went ahead and downloaded MySQL for Windows and the MySQL extension from npm, I also got a MySQL extension for VS Code to help me with some of the data available in the DB.

I established a new DB Schema and ran this in order to get a basic table up and running:

```
CREATE TABLE Currency (IdCurrency TINYINT NOT NULL AUTO_INCREMENT, Code VARCHAR(3) NOT NULL, Country VARCHAR(150) NOT NULL, Name VARCHAR(50) NOT NULL, PRIMARY KEY (IdCurrency));

INSERT INTO currency (Code,Country,Name) VALUES ('USD','United States','Dollar');
INSERT INTO currency (Code,Country,Name) VALUES ('JPY','Japan','Yen');
INSERT INTO currency (Code,Country,Name) VALUES ('EUR','Eurozone','Euro');
INSERT INTO currency (Code,Country,Name) VALUES ('GBP','Great Britain','Pound');
INSERT INTO currency (Country,Name,Code) VALUES ('Australia','Dollar','AUD');
INSERT INTO currency (Country,Name,Code) VALUES ('Canada','Dollar','CAD');
INSERT INTO currency (Country,Name,Code) VALUES ('Switzerland','Franc','CHF');
INSERT INTO currency (Country,Name,Code) VALUES ('Denmark','Krone','DKK');
INSERT INTO currency (Country,Name,Code) VALUES ('Hong Kong','Dollar','HKD');
INSERT INTO currency (Country,Name,Code) VALUES ('Norway','Krone','NOK');
INSERT INTO currency (Country,Name,Code) VALUES ('Sweden','Krona','SEK');
INSERT INTO currency (Country,Name,Code) VALUES ('New Zealand','Krona','NZD');
INSERT INTO currency (Country,Name,Code) VALUES ('Singapore','Dollar','SGD');
```