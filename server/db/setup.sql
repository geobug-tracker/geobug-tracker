CREATE TABLE team (
  id SERIAL PRIMARY KEY,
  name varchar(100),
  company varchar(100)
);
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  teamId integer,
  username varchar(100),
  firstName varchar(100),
  lastName varchar(100),
  password varchar(100),
  email varchar(100),
  FOREIGN KEY (teamId) REFERENCES team(id)
);
CREATE TABLE bug (
  id SERIAL PRIMARY KEY,
  title varchar(100),
  userId integer,
  description text,
  priority varchar(100),
  status varchar(100),
  linkRepo text,
  product varchar(100),
  FOREIGN KEY (userId) REFERENCES users(id)
);



