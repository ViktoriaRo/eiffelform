-- !: studentID, §: institutionID, %: prize_name, ^: date
INSERT INTO prizes(studentID, institutionID, prize_name, date)
VALUES((SELECT id FROM students WHERE name = "!", degree = "$"), 
(SELECT id FROM institutions WHERE name = "§"), "%","^");