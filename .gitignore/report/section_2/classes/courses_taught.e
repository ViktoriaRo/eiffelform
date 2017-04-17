note
	description: "Summary description for {COURSES_TAUGHT}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	COURSES_TAUGHT
create
	make
feature
	make(cn,s,l,nof:STRING)
	do
		course_name:=cn
		semester:=s;
		level:=l
		number_of_students:=nof
	end
feature
	course_name:STRING
	semester:STRING
	level:STRING
	number_of_students:STRING
end
