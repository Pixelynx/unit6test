DROP DATABASE IF EXISTS unit6;
CREATE DATABASE unit6;

\c unit6;

CREATE TABLE genres(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE movies(
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  genre_id INT REFERENCES genres NOT NULL,
  img_url VARCHAR
);

CREATE TABLE ratings(
  id SERIAL PRIMARY KEY,
  stars INTEGER,
  movie_id INT REFERENCES movies
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  comment TEXT,
  movie_id INT REFERENCES movies
);

-- INSERT INTO genres (name) VALUES
--   ('Comedy'), ('Action'), ('Adventure'), ('Fantasy'), ('Romance');
--
-- INSERT INTO movies (title, genre_id, img_url) VALUES
--   ('Black Panther', 2, 'https://bit.ly/2AssAmQ'),
--   ('Fifty Shades Freed', 5, 'https://bit.ly/2RtdPtK'),
--   ('Spider-Man: Into the Spider-Verse', 2, 'https://bit.ly/2X7ELPH'),
--   ('Jurassic World: Fallen Kingdom', 3, 'https://bit.ly/2TTXgEP'),
--   ('Dragon Ball Super: Broly', 2, 'https://bit.ly/2GjPxx7'),
--   ('The Grinch', 1, 'https://bit.ly/2HunfkO'),
--   ('Ralph Breaks the Internet', 3, 'https://bit.ly/2BxCgNo'),
--   ('Pacific Rim: Uprising', 2, 'https://bit.ly/2utm6kD'),
--   ('Tomb Raider', 4, 'https://bit.ly/2LE5iOw'),
--   ('Deadpool 2', 1, 'https://bit.ly/2GRVGRZ');
--
-- INSERT INTO ratings (stars, movie_id) VALUES
--   (3, 1), (2, 2), (4, 3), (3, 4), (4, 5),
--   (3, 6), (3, 7), (2, 8), (3, 9), (4, 10),
--   (1, 2), (5, 5), (4, 6), (3, 8), (5, 3),
--   (5, 10), (4, 7), (4, 1), (3, 5), (4, 9);
--
-- INSERT INTO comments (comment, movie_id) VALUES
--   ("It's impressive that Toriyama's work continues to gain new fans... It's a shame he's not willing to take more risks.", 5),
--   ("[Deadpool 2] is foulmouthed and funny, unafraid to be genuine in its emotional engagement while also doling out the violence and viscera with unabashed joy.", 10),
--   ('This movie gave me so much LIFE. I saw it six times with a variety of folks.', 1),
--   ("It's not perfect but there is enough entertainment there to justify a matinee ticket price.", 9),
--   ("The glitchy, hyper-sugared brand of animation is stressful, and it appeals a bit too much to child-like sensibilities. However, that's not to say the sequel, RALPH BREAKS THE INTERNET, isn't without its creative triumphs", 7),
--   ("The film works its way to [become] a metempsychosic event, bearing the soul of the original Marvel vision and finally taking it to the greatest of heights.", 3),
--   ("While there are some flashy and engaging moments, those are counterbalanced by storytelling that is largely unoriginal and uninspired.", 8),
--   ('I am not a big fan of action films, but this film was awesome! It was very entertaining and held my full attention.', 1),
--   ("A sequel so awful it needs to be described in detail to be believed. Therefore, a spoilereview.", 2),
--   ("A paradox that only ends up filling with charisma an ideal Christmas adventure to start the holidays.", 6),
--   ("In the end Dragon Ball Super: Broly gave me something of a tiny headache.", 5),
--   ("Pacific Rim: Uprising challenges the notion of a leading black man who must appear culturally blank in order to seem 'safe' for non-black audiences.", 8),
--   ("These movies are derivative, often ridiculous, and, in the case of Fifty Shades Freed, unquestionably hilarious, but they're also the overheated comfort food I crave.", 2),
--   ("The Grinch is bright and colorful, but the narrative feels a bit off from the anti-consumerist message that Dr. Seuss may have originally intended.", 6),
--   ("The movie is surprisingly self-aware and has very strong moments of character that can be appreciated, even from a newcomer's perspective.", 5);
