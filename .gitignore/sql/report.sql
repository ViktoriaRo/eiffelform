create report
------
-----

get report id
----
----
--------------------------------------------------------------------------------------
add granted license
----

-----

add industry collaboration
----

----

add memberships
----
-- @: name, #: date, $: membership_kind, %: reportID
INSERT INTO membership_kind (kind)
VALUES ("$");

INSERT INTO memberships (name, date, membership_kindID, reportID)
VALUES(
	"@",
	"#",
	(SELECT id FROM membership_kind WHERE kind == "$"),
	"%"
);
----


add patents
----
-- !: country, @: title, #: period_report, $: reportID
INSERT INTO patents (country, title, period_report, reportID)
VALUES("!","@","#","$");
----

add supervisors
----
-- !: name, #: email, $: phone
INSERT INTO supervisors(name, email, phone)
VALUES ("!","#","$");
----

add laboratories
----
-- |: laborator_name, supervisor: !: name, #: email, $: phone
INSERT INTO laboratories(supervisorID, laborator_name)
VALUES((SELECT id FROM supervisors WHERE name ="!", email = "#", phone = "$"), "|");
----

add students
----
-- |: laboratory_name, !: name, $: degree
INSERT INTO students(laboratoryID, name, degree)
VALUES((SELECT id FROM laboratories WHERE laborator_name = "|"), "!", "$");
----

add grants 
----
-- !: studentID, §: project_title, %: granting_agency, ^: period, &: amount, *: other_grant
INSERT INTO grants(studentID, project_title, granting_agency, period, amount, other_grant)
VALUES((SELECT id FROM students WHERE name = "!", degree = "$"),
"§", "%", "^", "&", "*");
----

add institutions
----
-- §: name, !: country, @: contacts
INSERT INTO institutions(name, country, contacts)
VALUES("§","!","@");
----

add prizes
---
-- !: studentID, §: institutionID, %: prize_name, ^: date
INSERT INTO prizes(studentID, institutionID, prize_name, date)
VALUES((SELECT id FROM students WHERE name = "!", degree = "$"), 
(SELECT id FROM institutions WHERE name = "§"), "%","^");
----

add research collaboration
----
-- §: instituteID, !: collaboration_nature
INSERT INTO research_collaboration(instituteID, collaboration_nature)
VALUES((SELECT id FROM institutions WHERE name = "§"), "!");
----

add commitee
----
-- &: name
INSERT INTO commitee(name)
VALUES("&");
----

add phd theses
----
-- §: studentID, !: commiteeID, &: institutionID, *: title
INSERT INTO phd_theses(studentID, commiteeID, institutionID, title)
VALUES((SELECT id FROM students WHERE name = "!", degree = "$"),
(SELECT id FROM commitee WHERE name = "&"),
(SELECT id FROM institutions WHERE name = "§"), "*");
----

add research projects
----
-- §: institutionID, &: title, !: start_date, @: end_date, #: financing
INSERT INTO research_projects(institutionID, title, start_date, end_date, financing)
VALUES((SELECT id FROM institutions WHERE name = "§"), "&", "!", "@", "#");
----

add publications
----
-- @: reportID, ^: title, *: publication_kindID
INSERT INTO publications(reportID, title, publication_kindID)
VALUES ("@", "^", (SELECT id FROM publication_kind WHERE kind = "*"));
----

add publication_kind
----
-- *: kind
INSERT INTO publication_kind(kind)
VALUES("*");
----

add student_reports
----
-- §: studentID, !: publicationID
INSERT INTO student_reports(studentID, publicationID)
VALUES((SELECT id FROM students WHERE name = "!", degree = "$"),
(SELECT id FROM publications WHERE title = "^"));
----

add best awards
----
-- ^: publicationID, !: award, #: date
INSERT INTO best_awards(publicationID, award, date)
VALUES((SELECT id FROM publications WHERE title = "^"), "!", "#");
----

add publication authors
----
-- ^: publicationID, !: author_name, @: coauthor_name
INSERT INTO publication_authors(author_name, coauthor_name, publicationID)
VALUES("!", "@", (SELECT if FROM publications WHERE title = "^"));
----

add examinations
----
-- §: courseID, !: exam_kind, @: students_number
INSERT INTO examinations(courseID, exam_kind, students_number)
VALUES("§", "!", "@");
----

add courses
----
-- $: name, %: semester, ^: level, &: students_number, @: reportID
INSERT INTO courses(name, semester, level, students_number, reportID)
VALUES("$", "%", "^", "&", "@");














