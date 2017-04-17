-- §: studentID, !: publicationID

INSERT INTO student_reports(studentID, publicationID)

VALUES((SELECT id FROM students WHERE name = "!", degree = "$"),
(SELECT id FROM publications WHERE title = "^"));