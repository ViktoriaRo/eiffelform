note
	description: "Summary description for {COMPLETED_STUDENT_REPORT}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	COMPLETED_STUDENT_REPORT
create
	make
feature
	make(sn,tor,pp:STRING)
	do
		student_name:=sn
		title_of_report:=tor
		publication_plans:=pp
	end
	student_name:STRING
	title_of_report:STRING
	publication_plans:STRING
end
