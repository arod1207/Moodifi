DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE moods(
id INT AUTO_INCREMENT,
   happy VARCHAR(100),
   sad VARCHAR(100),
   angry VARCHAR(100),
   PRIMARY KEY(id)
);

CREATE TABLE activities (
id INT AUTO_INCREMENT,
	workout VARCHAR(100),
    studying VARCHAR(100),
    cooking VARCHAR(100),
    commute VARCHAR(100),
    PRIMARY KEY(id)
)