note
	description: "Summary description for {SECTION_7}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	SECTION_7

create
	make_section7

feature 
	make_section7(some_comments:STRING)
		do
			create comments.make_from_string(some_comments)
		end
feature
	comments:STRING
end
