note
	description: "Summary description for {BEST_PAPER_AWARDS}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	BEST_PAPER_AWARDS

create
	make

feature {NONE}
	make(aaa,ta,acoj,ewa,d:STRING)
		do
			create author_awarded_article.make_from_string(aaa)
			create title_article.make_from_string(ta)
			create awarding_conference_or_journal.make_from_string(acoj)
			create exact_wording_award.make_from_string(ewa)
			create date.make_from_string(d);
		end
feature
	author_awarded_article:STRING
	title_article:STRING
	awarding_conference_or_journal:STRING
	exact_wording_award:STRING
	date:STRING
end
