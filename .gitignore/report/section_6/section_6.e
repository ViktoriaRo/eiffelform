note
	description: "Summary description for {SECTION_6}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	SECTION_6

create
	make_section6

feature {NONE} -- Initialization

	make_section6(ic:ARRAY[INDUSTRY_COLLABORATIONS])
			-- Initialization for `Current'.
		do
			create industry_collaborations.make_from_array(ic)
		end
feature
	industry_collaborations:ARRAY[INDUSTRY_COLLABORATIONS]
end
