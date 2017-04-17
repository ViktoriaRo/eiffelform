note
	description: "Summary description for {SECTION_1}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	SECTION_1

create
	make_section1

feature {NONE} -- Initialization

	make_section1(nou,noh,e,p,sd,ed:STRING)
	do
		create name_of_unit.make_from_string (nou)
		create name_of_head.make_from_string (noh)
		create email.make_from_string(e)
		create phone.make_from_string(p)
		create start_date.make_from_string(sd)
		create end_date.make_from_string(ed)
	end

feature
	-- Section 1.
	name_of_unit:STRING
	name_of_head:STRING
	email:STRING
	phone:STRING
	start_date:STRING
	end_date:STRING
end
