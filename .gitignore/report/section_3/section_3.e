note
	description: "Summary description for {SECTION_3}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	SECTION_3

create
	make_section3

feature {NONE} -- Initialization

	make_section3(g:ARRAY[GRANTS];rp:ARRAY[RESEARCH_PROJECTS];rc:ARRAY[RESEARCH_COLLABORATIONS];cp,jp:STRING)
		do
			create grants.make_from_array (g)
			create research_projects.make_from_array(rp)
			create research_collaborations.make_from_array(rc)
			create conference_publications.make_from_string(cp)
			create journal_publications.make_from_string(jp)
		end
feature
	grants:ARRAY[GRANTS]
	research_projects:ARRAY[RESEARCH_PROJECTS]
	research_collaborations:ARRAY[RESEARCH_COLLABORATIONS]
	conference_publications:STRING
	journal_publications:STRING
end
