CREATE DATABASE to_do_db;

CREATE TABLE todo(
    tod_id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL
);