note
	description: "Summary description for {REPORT}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	REPORT
create
	make
feature
	make(s1:SECTION_1;s2:SECTION_2;s3:SECTION_3;s4:SECTION_4;s5:SECTION_5;s6:SECTION_6;s7:SECTION_7)
	do
		section_1:=s1
		section_2:=s2
		section_3:=s3
		section_4:=s4
		section_5:=s5
		section_6:=s6
		section_7:=s7
	end
feature
	section_1:SECTION_1
	section_2:SECTION_2
	section_3:SECTION_3
	section_4:SECTION_4
	section_5:SECTION_5
	section_6:SECTION_6
	section_7:SECTION_7
end
