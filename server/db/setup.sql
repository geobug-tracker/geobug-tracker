CREATE TABLE bug (
    id integer NOT NULL PRIMARY KEY,
    title varchar(100),
    userId integer REFERENCES users(id),
    description text,
    priority varchar(100),
    status varchar(100),
    linkRepo text,
    product varchar(100)
);

CREATE TABLE user (
    id integer NOT NULL PRIMARY KEY,
    username varchar(100),
    firstName varchar(100),
    lastName varchar(100),
    password varchar(100),
    email varchar(100),
    teamId integer REFERENCES team(id),
);

CREATE TABLE team (
    id integer NOT NULL PRIMARY KEY,
    name varchar(100),
    company varchar(100)
);

-- Give me all the bugs associated with a particular user id
-- select *
-- from user 
--     inner join bug
--         on user.id = bug.userID 
-- where user.id = ${}