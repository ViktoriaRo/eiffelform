-- !: studentID, §: project_title, %: granting_agency, ^: period, &: amount, *: other_grant

INSERT INTO grants(studentID, project_title, granting_agency, period, amount, other_grant)

VALUES((SELECT id FROM students WHERE name = "!", degree = "$"),
"§", "%", "^", "&", "*");