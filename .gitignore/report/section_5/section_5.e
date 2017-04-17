note
	description: "Summary description for {SECTION_5}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	SECTION_5

create
	make_section5

feature
	make_section5(bpa:ARRAY[BEST_PAPER_AWARDS];m:ARRAY[MEMBERSHIP];p:ARRAY[PRIZE])
		do
			create best_paper_awards.make_from_array (bpa)
			create membreships.make_from_array (m)
			create prizes.make_from_array (p)
		end
feature
	best_paper_awards:ARRAY[BEST_PAPER_AWARDS]
	membreships:ARRAY[MEMBERSHIP]
	prizes:ARRAY[PRIZE]

end
