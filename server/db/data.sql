INSERT INTO team (name, company) VALUES ('Geodude', 'Geodude');

INSERT INTO
users (teamid, username, firstname, lastname, password, email) VALUES
(1, 'kingofcramers', 'Harry', 'Cramer', 'password', 'test@dumb.com');

INSERT INTO
bug (title, userID, description, priority, status, linkRepo, product) VALUES
('First Bug', 1, 'I am the first bug', 1, 'new', 'github.com/asdf', 'GeoBug');

INSERT INTO
bug (title, userID, description, priority, status, linkRepo, product) VALUES
('Second Bug', 1, 'I am the second bug', 1, 'in-progress', 'github.com/asdf', 'GeoBug');

INSERT INTO
bug (title, userID, description, priority, status, linkRepo, product) VALUES
('Third Bug', 1, 'I am the third bug', 1, 'review', 'github.com/asdf', 'GeoBug');

INSERT INTO
bug (title, userID, description, priority, status, linkRepo, product) VALUES
('Fourth Bug', 1, 'I am the fourth bug', 1, 'done', 'github.com/asdf', 'GeoBug');


INSERT INTO
bug (title, userID, description, priority, status, linkRepo, product) VALUES
('Fifth Bug', 1, 'I am the fifth bug', 1, 'todo', 'github.com/asdf', 'GeoBug');
