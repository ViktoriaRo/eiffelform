note
	description: "Summary description for {STUDENTS_SUPERVISED}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	STUDENTS_SUPERVISED

create
	make

feature
	make(sn,now:STRING)
		do
			student_name:=sn
			nature_of_work:=now
		end
	student_name:STRING
	nature_of_work:STRING
end
