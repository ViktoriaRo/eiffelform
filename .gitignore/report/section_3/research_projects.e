note
	description: "Summary description for {RESEARCH_PROJECTS}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	RESEARCH_PROJECTS

create
	make

feature
	make(top,upi,epi,sd,ed,sof:STRING)
		do
			create title_of_project.make_from_string(top)
			create ui_personnel_involved.make_from_string(upi)
			create external_personnel_involved.make_from_string(epi)
			create start_date.make_from_string(sd)
			create end_date.make_from_string(ed)
			create sources_of_financing.make_from_string(sof)
		end
feature
	title_of_project:STRING
	ui_personnel_involved:STRING
	external_personnel_involved:STRING
	start_date:STRING
	end_date:STRING
	sources_of_financing:STRING
end
