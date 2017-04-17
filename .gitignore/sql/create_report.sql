-- @: supervisor_name, #: start_date, $:end_date

INSERT INTO reports (supervisorid, start_date, end_date)

VALUES ((SELECT id FROM supervisors WHERE name = "@"), "#", "$");