-- Drop old tables
DROP TABLE bug;
DROP TABLE users;
DROP TABLE team;
-- Setup new tables
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
-- Populate data
INSERT INTO
  team (name, company)
VALUES
  ('Geodude', 'Geodude');
INSERT INTO
  users (
    teamid,
    username,
    firstname,
    lastname,
    password,
    email
  )
VALUES
  (
    1,
    'kingofcramers',
    'Harry',
    'Cramer',
    'password',
    'test@dumb.com'
  );
INSERT INTO
  bug (
    title,
    userID,
    description,
    priority,
    status,
    linkRepo,
    product
  )
VALUES
  (
    'First Bug',
    1,
    'I am the first bug',
    1,
    'new',
    'github.com/asdf',
    'GeoBug'
  );
INSERT INTO
  bug (
    title,
    userID,
    description,
    priority,
    status,
    linkRepo,
    product
  )
VALUES
  (
    'Second Bug',
    1,
    'I am the second bug',
    1,
    'in-progress',
    'github.com/asdf',
    'GeoBug'
  );
INSERT INTO
  bug (
    title,
    userID,
    description,
    priority,
    status,
    linkRepo,
    product
  )
VALUES
  (
    'Third Bug',
    1,
    'I am the third bug',
    1,
    'review',
    'github.com/asdf',
    'GeoBug'
  );
INSERT INTO
  bug (
    title,
    userID,
    description,
    priority,
    status,
    linkRepo,
    product
  )
VALUES
  (
    'Fourth Bug',
    1,
    'I am the fourth bug',
    1,
    'done',
    'github.com/asdf',
    'GeoBug'
  );
INSERT INTO
  bug (
    title,
    userID,
    description,
    priority,
    status,
    linkRepo,
    product
  )
VALUES
  (
    'Fifth Bug',
    1,
    'I am the fifth bug',
    1,
    'todo',
    'github.com/asdf',
    'GeoBug'
  );
