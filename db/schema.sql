
DROP DATABASE IF EXISTS imlwraaoo30b0sv7;

-- Create the database burgers_db and specified it for use.
CREATE DATABASE imlwraaoo30b0sv7;

USE imlwraaoo30b0sv7;

-- Create the table burgers.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured boolean DEFAULT false,
  PRIMARY KEY (id)
);