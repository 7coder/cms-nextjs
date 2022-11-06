--Up

CREATE TABLE Post (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT,
    createdAt TEXT
);


--Down
DROP TABLE Post;