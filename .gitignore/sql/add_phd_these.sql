-- §: studentID, !: commiteeID, &: institutionID, *: title

INSERT INTO phd_theses(studentID, commiteeID, institutionID, title)

VALUES((SELECT id FROM students WHERE name = "!", degree = "$"),
(SELECT id FROM commitee WHERE name = "&"),
(SELECT id FROM institutions WHERE name = "§"), "*");