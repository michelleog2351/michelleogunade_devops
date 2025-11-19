-- gameDB.sql
-- Creates tables for storing character and game data
select
    *
FROM
    User;

select
    *
FROM
    Characters;

select
    *
FROM
    Battle;

CREATE DATABASE IF NOT EXISTS gameDB;

USE gameDB;

CREATE TABLE
    IF NOT EXISTS User (
        `UserNo` INT AUTO_INCREMENT PRIMARY KEY,
        `first_name` VARCHAR(50) NOT NULL,
        `last_name` VARCHAR(50) NOT NULL,
        `email` VARCHAR(100) NOT NULL UNIQUE,
        `username` VARCHAR(50) NOT NULL UNIQUE,
        `password_hash` VARCHAR(255) NOT NULL,
        `salt` VARCHAR(255) NOT NULL,
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

CREATE TABLE
    IF NOT EXISTS Characters (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        health INT DEFAULT 100,
        power INT DEFAULT 50,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    IF NOT EXISTS Battle (
        id INT AUTO_INCREMENT PRIMARY KEY,
        character_id INT NOT NULL,
        opponent VARCHAR(100),
        result VARCHAR(50),
        battle_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (character_id) REFERENCES Characters (id)
    );