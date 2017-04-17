-- ^: publicationID, !: award, #: date
INSERT INTO best_awards(publicationID, award, date)
VALUES((SELECT id FROM publications WHERE title = "^"), "!", "#");