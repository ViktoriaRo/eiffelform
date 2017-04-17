-- |: laboratory_name, !: name, $: degree

INSERT INTO students(laboratoryID, name, degree)

VALUES((SELECT id FROM laboratories WHERE laborator_name = "|"), "!", "$");