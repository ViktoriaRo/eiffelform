note
	description: "Summary description for {MEMBERSHIP}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	MEMBERSHIP

create
	make

feature {NONE}
	make(nm,dm:STRING)
		do
			create name_of_member.make_from_string(nm)
			create date_of_membership.make_from_string(dm)
		end
feature
	name_of_member:STRING
	date_of_membership:STRING
end
