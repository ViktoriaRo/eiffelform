note
	description: "Summary description for {INDUSTRY_COLLABORATIONS}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	INDUSTRY_COLLABORATIONS

create
	make

feature 
	make(c,nc:STRING)
		do
			create company.make_from_string (c)
			create nature_of_collaboration.make_from_string(nc)
		end
feature
	company:STRING
	nature_of_collaboration:STRING
end
