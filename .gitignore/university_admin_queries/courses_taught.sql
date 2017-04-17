SELECT name FROM courses 
INNER JOIN reports ON courses.reportid = reports.reportid
ORDER BY reports.start_date AND reports.end_date 
UNION
SELECT laboratory_name FROM laboratories;
