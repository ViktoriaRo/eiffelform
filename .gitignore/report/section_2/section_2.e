note
	description: "Summary description for {SECTION_2}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	SECTION_2
create
	make_section2
feature {NONE}
	make_section2(ct:ARRAY[COURSES_TAUGHT];e:ARRAY[EXAMINATION];ss:ARRAY[STUDENTS_SUPERVISED];csr:ARRAY[COMPLETED_STUDENT_REPORT];cpt:ARRAY[COMPLETED_PHD_THEMES])
	do
		create courses_taught.make_from_array (ct)
		create examination.make_from_array(e)
		create students_supervised.make_from_array (ss)
		create completed_student_report.make_from_array(csr)
		create completed_phd_thesis.make_from_array (cpt)
	end
feature
	-- Section 2.
	courses_taught:ARRAY[COURSES_TAUGHT]
	examination:ARRAY[EXAMINATION]
	students_supervised:ARRAY[STUDENTS_SUPERVISED]
	completed_student_report:ARRAY[COMPLETED_STUDENT_REPORT]
	completed_phd_thesis:ARRAY[COMPLETED_PHD_THEMES]
end
