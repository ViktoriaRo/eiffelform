INSERT INTO memberships (name, date, membership_kindID, reportID)
VALUES(
	"@",
	"#",
	(SELECT id FROM membership_kind WHERE kind == "$"),
	"%"
);