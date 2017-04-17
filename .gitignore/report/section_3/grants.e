note
	description: "Summary description for {GRANTS}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	GRANTS

create
	make

feature
	make(tp,ga,pg,cog,a:STRING)
		do
			create title_of_project.make_from_string(tp)
			create granting_agency.make_from_string(ga)
			create period_grant.make_from_string(pg)
			create continuation_other_grant.make_from_string(cog)
			create amount.make_from_string(a)
		end
feature
	title_of_project:STRING
	granting_agency:STRING
	period_grant:STRING
	continuation_other_grant:STRING
	amount:STRING
end
