-- Up
CREATE TABLE Post (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT,
    createdAt TEXT
);


-- Down
DROP TABLE Post;