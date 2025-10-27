-- gameDB.sql
-- Creates tables for storing character and game data

select * FROM Characters;
select * FROM Battles;

CREATE DATABASE IF NOT EXISTS gameDB;
USE gameDB;

CREATE TABLE IF NOT EXISTS Characters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    health INT DEFAULT 100,
    power INT DEFAULT 50,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Battles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    character_id INT NOT NULL,
    opponent VARCHAR(100),
    result VARCHAR(50),
    battle_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (character_id) REFERENCES Characters(id)
);
