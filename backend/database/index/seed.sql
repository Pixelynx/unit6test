DROP DATABASE IF EXISTS unit6
CREATE DATABASE unit6

CREATE TABLE genres(
  id PRIMARY KEY,
  name VARCHAR NOT NULL
)

CREATE TABLE movies(
  id PRIMARY KEY,
  title VARCHAR NOT NULL,
  genre_id INT REFERENCES genres NOT NULL,
  img_url VARCHAR
);

CREATE TABLE ratings(
  id PRIMARY KEY,
  stars INTEGER,
  movie_id INT REFERENCES movies
);

CREATE TABLE comments(
  id PRIMARY KEY,
  comment TEXT,
  movie_id INT REFERENCES movies
);
