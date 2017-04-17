-- @: supervisorid, #: start_date, $:end_date
SELECT id FROM reports
WHERE 
supervisorid = "@" AND 
start_date = "#" AND 
end_date = "$"
ORDER BY id  DESC
LIMIT 1;