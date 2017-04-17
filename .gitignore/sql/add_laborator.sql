-- |: laborator_name, !: supervisor_name, #: email

INSERT INTO laboratories(supervisorID, laborator_name)

VALUES((SELECT id FROM supervisors WHERE name ="!"), "|");