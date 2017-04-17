-- @: reportID, ^: title, *: publication_kindID

INSERT INTO publications(reportID, title, publication_kindID)

VALUES ("@", "^", (SELECT id FROM publication_kind WHERE kind = "*"));