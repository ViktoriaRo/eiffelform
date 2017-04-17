note
	description: "Summary description for {COMPLETED_PHD_THEMES}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	COMPLETED_PHD_THEMES

create
	make

feature
	make(sn,d,ns,nocm,ndgi,tod:STRING)
		do
			student_name:=sn
			degree:=d
			name_supervisor:=ns
			name_comitee_members:=nocm
			name_degree_granting_institution:=ndgi
			title_of_dissertation:=tod
		end
	student_name:STRING
	degree:STRING
	name_supervisor:STRING
	name_comitee_members:STRING
	name_degree_granting_institution:STRING
	title_of_dissertation:STRING
end
