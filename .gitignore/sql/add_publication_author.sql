-- ^: publicationID, !: author_name, @: coauthor_name
INSERT INTO publication_authors(author_name, coauthor_name, publicationID)
VALUES("!", "@", (SELECT if FROM publications WHERE title = "^"));