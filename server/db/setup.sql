CREATE TABLE team (
  id integer NOT NULL PRIMARY KEY,
  name varchar(100),
  company varchar(100)
);
CREATE TABLE users (
  id integer NOT NULL PRIMARY KEY,
  teamId integer,
  username varchar(100),
  firstName varchar(100),
  lastName varchar(100),
  password varchar(100),
  email varchar(100),
  FOREIGN KEY (teamId) REFERENCES team(id)
);
CREATE TABLE bug (
  id integer NOT NULL PRIMARY KEY,
  title varchar(100),
  userId integer,
  description text,
  priority varchar(100),
  status varchar(100),
  linkRepo text,
  product varchar(100),
  FOREIGN KEY (userId) REFERENCES users(id)
);
-- Give me all the bugs associated with a particular user id
-- select *
-- from user
--     inner join bug
--         on user.id = bug.userID
-- where user.id = ${}
