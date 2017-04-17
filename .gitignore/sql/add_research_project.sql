-- §: institutionID, &: title, !: start_date, @: end_date, #: financing

INSERT INTO research_projects(institutionID, title, start_date, end_date, financing)

VALUES((SELECT id FROM institutions WHERE name = "§"), "&", "!", "@", "#");