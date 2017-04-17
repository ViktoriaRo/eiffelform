note
	description: "Summary description for {SECTION_4}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	SECTION_4

create
	make_section4

feature 
	make_section4(p,copo,il:ARRAY[STRING])
		do
			create patents.make_from_array(p)
			create country_of_patent_office.make_from_array(copo)
			create ip_licensing.make_from_array (il);
		end
feature
	patents:ARRAY[STRING]
	country_of_patent_office:ARRAY[STRING]
	ip_licensing:ARRAY[STRING]
end
