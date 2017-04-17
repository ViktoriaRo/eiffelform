note
	description: "Summary description for {EXAMINATION}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	EXAMINATION
create
	make
feature
	make(cn,s,koe,nof:STRING)
	do
		course_name:=cn
		semester:=s
		kind_of_exam:=koe
		number_of_students:=nof
	end
feature
	course_name:STRING
	semester:STRING
	kind_of_exam:STRING
	number_of_students:STRING
end
