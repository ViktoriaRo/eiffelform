note
	description: "Summary description for {PRIZE}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	PRIZE

create
	make

feature {NONE}
	make(r,np,gi,d:STRING)
		do
			create recipient.make_from_string(r)
			create name_of_prize.make_from_string(np)
			create granting_institution.make_from_string (gi)
			create date.make_from_string(d)
		end
feature
	recipient:STRING
	name_of_prize:STRING
	granting_institution:STRING
	date:STRING
end
