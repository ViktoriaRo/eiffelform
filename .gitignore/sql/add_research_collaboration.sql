-- §: instituteID, !: collaboration_nature

INSERT INTO research_collaboration(instituteID, collaboration_nature)

VALUES((SELECT id FROM institutions WHERE name = "§"), "!");