note
	description: "Summary description for {RESEARCH_COLLABORATIONS}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	RESEARCH_COLLABORATIONS
create
	make
feature
	make(ci,ni,npc,oc,noc:STRING)
	do
		create country_of_institution.make_from_string(ci)
		create name_of_institution.make_from_string(ni)
		create name_principal_contact.make_from_string(npc)
		create other_contacts.make_from_string(oc)
		create nature_of_collaboration.make_from_string(noc)
	end
feature
	country_of_institution:STRING
	name_of_institution:STRING
	name_principal_contact:STRING
	other_contacts:STRING
	nature_of_collaboration:STRING
end
