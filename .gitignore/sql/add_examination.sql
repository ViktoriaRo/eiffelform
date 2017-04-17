-- §: course_name, !: exam_kind, @: students_number

-- ,^: semester
INSERT INTO examinations(course_name, exam_kind, students_number, semester)

VALUES((SELECT if FROM table courses where course_name = "$"), "^","!", "@");