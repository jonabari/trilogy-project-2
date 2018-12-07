CREATE DATABASE trustApp_db;
USE trustApp_db;

CREATE TABLE users (
  user_id Int( 11 ) AUTO_INCREMENT NOT NULL,
  `email` VARCHAR( 255) NOT NULL,
  `password` VARCHAR( 255 ) NOT NULL,
  `names` VARCHAR( 255 ) NOT NULL,
  `lastnames` VARCHAR( 255 ) NOT NULL,
  `qr` TEXT( 65535 ) NOT NULL,
  PRIMARY KEY( `user_id` )
);

CREATE TABLE `orders`
(
  `order_id` Int
( 11 ) AUTO_INCREMENT NOT NULL,
  `delivering_user_id` VARCHAR
( 11 ) NOT NULL,
  `delivering_email` VARCHAR
( 255 ) NOT NULL,
  `receiving_user_id` VARCHAR
( 11 ) NOT NULL,
  `receiving_email` VARCHAR
( 255 ) NOT NULL,
  `signature` TEXT
( 65535 ) NOT NULL,
  PRIMARY KEY
( `order_id` )
);