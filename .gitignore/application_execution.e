note
	description: "[]"
	date: "$Date$"
	revision: "$Revision$"

class
	APPLICATION_EXECUTION

inherit

	WSF_EXECUTION

create
	make

feature --
	db: DATABASE
		once ("OBJECT")
			create Result.run
		end
feature -- Basic operations

	execute
		local
			s1: SECTION_1
			s2: SECTION_2
			s3: SECTION_3
			s4: SECTION_4
			s5: SECTION_5
			s6: SECTION_6
			s7: SECTION_7
			-- Introduce data in database using these variables.
		do
			if request.is_get_request_method then
				if request.path_info.same_string ("/") or request.path_info.same_string ("/index.html") then
					response.send (create {WSF_FILE_RESPONSE}.make_html ("index.html"))
				end
				if request.path_info.same_string ("/pages/admin.html") then
					response.send (create {WSF_FILE_RESPONSE}.make_html_with_path (create {PATH}.make_from_string ("pages/admin.html")))
				end
				if request.path_info.same_string ("/pages/section1.html") then
					response.send (create {WSF_FILE_RESPONSE}.make_html_with_path (create {PATH}.make_from_string ("pages/section1.html")))
				end
			elseif request.is_post_request_method then
				if request.path_info.same_string ("/pages/section2.html") then
					s1 := read_section1
					db.add_section_1 (s1)
					response.send (create {WSF_FILE_RESPONSE}.make_html_with_path (create {PATH}.make_from_string ("pages/section2.html")))
				end
				if request.path_info.same_string ("/pages/section3.html") then
					s2 := read_section2
					db.add_section_2 (s2)
					response.send (create {WSF_FILE_RESPONSE}.make_html_with_path (create {PATH}.make_from_string ("pages/section3.html")))
				end
				if request.path_info.same_string ("/pages/section4.html") then
					s3 := read_section3
					db.add_section_3 (s3)
					response.send (create {WSF_FILE_RESPONSE}.make_html_with_path (create {PATH}.make_from_string ("pages/section8.html")))
				end
				if request.path_info.same_string ("/pages/section5.html") then
					s4 := read_section4
					response.send (create {WSF_FILE_RESPONSE}.make_html_with_path (create {PATH}.make_from_string ("pages/section5.html")))
				end
				if request.path_info.same_string ("/pages/section6.html") then
					s5 := read_section5
					response.send (create {WSF_FILE_RESPONSE}.make_html_with_path (create {PATH}.make_from_string ("pages/section6.html")))
				end
				if request.path_info.same_string ("/pages/section7.html") then
					s6 := read_section6
					response.send (create {WSF_FILE_RESPONSE}.make_html_with_path (create {PATH}.make_from_string ("pages/section7.html")))
				end
				if request.path_info.same_string ("/pages/section8.html") then
					s7 := read_section7
					response.send (create {WSF_FILE_RESPONSE}.make_html_with_path (create {PATH}.make_from_string ("pages/section8.html")))
				end
				if request.path_info.same_string ("/pages/query.html") then
--											if attached{WSF_VALUE}request.form_parameter ("name") as login and attached{WSF_VALUE}request.form_parameter ("pass")as password then
--												if(login.same_string () and password.same_string ()then
													response.send (create {WSF_FILE_RESPONSE}.make_html_with_path (create {PATH}.make_from_string ("pages/query.html")))
--												end
--											end
				end
			end
		end

feature

	read_section1: SECTION_1
		do
			create result.make_section1 ("", "", "", "", "", "")
			if attached {WSF_VALUE} request.form_parameter ("name_of_unit") as name_of_unit and not request.has_error then
				result.name_of_unit.append_string_general (name_of_unit.string_representation)
			end
			if attached {WSF_VALUE} request.form_parameter ("name_of_head") as name_of_head then
				result.name_of_head.append_string_general (name_of_head.string_representation)
			end
			if attached {WSF_VALUE} request.form_parameter ("email") as email then
				result.email.append_string_general (email.string_representation)
			end
			if attached {WSF_VALUE} request.form_parameter ("phone") as phone then
				result.phone.append_string_general (phone.string_representation)
			end
			if attached {WSF_VALUE} request.form_parameter ("start_date") as start_date then
				result.start_date.append_string_general (start_date.string_representation)
			end
			if attached {WSF_VALUE} request.form_parameter ("end_date") as end_date then
				result.end_date.append_string_general (end_date.string_representation)
			end
		end

	read_section2: SECTION_2
		local
			ct: ARRAY [COURSES_TAUGHT]
			e: ARRAY [EXAMINATION]
			ss: ARRAY [STUDENTS_SUPERVISED]
			rs: ARRAY [COMPLETED_STUDENT_REPORT]
			pt: ARRAY [COMPLETED_PHD_THEMES]
			i, n: INTEGER
		do
			n := 0;
			if attached {WSF_VALUE} request.form_parameter ("course_i") as inc then
				n := inc.string_representation.to_integer
			end
			create ct.make_filled (create {COURSES_TAUGHT}.make ("", "", "", ""), 1, n)
			from
				i := 0
			until
				i >= n
			loop
				if attached {WSF_VALUE} request.form_parameter ("c_name_" + i.out) as c_name then
					ct [i + 1].course_name.append_string_general (c_name.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("semester_" + i.out) as semester then
					ct [i + 1].semester.append_string_general (semester.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("level_" + i.out) as level then
					ct [i + 1].level.append_string_general (level.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("students_" + i.out) as students then
					ct [i + 1].number_of_students.append_string_general (students.string_representation)
				end
			end
			n := 0
			if attached {WSF_VALUE} request.form_parameter ("exam_i") as inc then
				n := inc.string_representation.to_integer
			end
			create e.make_filled (create {EXAMINATION}.make ("", "", "", ""), 1, n)
			from
				i := 0
			until
				i >= n
			loop
				if attached {WSF_VALUE} request.form_parameter ("e_c_name_" + i.out) as e_c_name then
					e [i + 1].course_name.append (e_c_name.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("e_semester_" + i.out) as e_semester then
					e [i + 1].semester.append (e_semester.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("e_level_" + i.out) as e_level then
					e [i + 1].kind_of_exam.append_string_general (e_level.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("e_students_" + i.out) as e_students then
					e [i + 1].number_of_students.append_string_general (e_students.string_representation)
				end
			end
			n := 0
			if attached {WSF_VALUE} request.form_parameter ("stSupervised_i") as inc then
				n := inc.string_representation.to_integer
			end
			create ss.make_filled (create {STUDENTS_SUPERVISED}.make ("", ""), 1, n)
			from
				i := 0
			until
				i >= n
			loop
				if attached {WSF_VALUE} request.form_parameter ("s_s_name_" + i.out) as student then
					ss [i + 1].student_name.append_string_general (student.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("work_" + i.out) as work then
					ss [i + 1].nature_of_work.append_string_general (work.string_representation)
				end
			end
			n := 0
			if attached {WSF_VALUE} request.form_parameter ("stReport_i") as inc then
				n := inc.string_representation.to_integer
			end
			create rs.make_filled (create {COMPLETED_STUDENT_REPORT}.make ("", "", ""), 1, n)
			from
				i := 0
			until
				i >= n
			loop
				if attached {WSF_VALUE} request.form_parameter ("r_s_name_" + i.out) as student then
					rs [i + 1].student_name.append_string_general (student.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("report_" + i.out) as report1 then
					rs [i + 1].title_of_report.append_string_general (report1.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("plans_" + i.out) as plan then
					rs [i + 1].publication_plans.append_string_general (plan.string_representation)
				end
			end
			n := 0
			if attached {WSF_VALUE} request.form_parameter ("PhDtheses_i") as inc then
				n := inc.string_representation.to_integer
			end
			create pt.make_filled (create {COMPLETED_PHD_THEMES}.make ("", "", "", "", "", ""), 1, n)
			from
				i := 0
			until
				i >= n
			loop
				if attached {WSF_VALUE} request.form_parameter ("p_s_name_" + i.out) as student then
					pt [i + 1].student_name.append_string_general (student.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("degree_" + i.out) as degree then
					pt [i + 1].degree.append_string_general (degree.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("supervisor_" + i.out) as supervisor then
					pt [i + 1].name_supervisor.append_string_general (supervisor.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("others_" + i.out) as others then
					pt [i + 1].name_comitee_members.append_string_general (others.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("degree_granting_" + i.out) as granting then
					pt [i + 1].name_degree_granting_institution.append_string_general (granting.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("dissertation_" + i.out) as dissertation then
					pt [i + 1].title_of_dissertation.append_string_general (dissertation.string_representation)
				end
			end
			create result.make_section2 (ct, e, ss, rs, pt)
		end

	read_section3: SECTION_3
		local
			g: ARRAY [GRANTS]
			rp: ARRAY [RESEARCH_PROJECTS]
			rc: ARRAY [RESEARCH_COLLABORATIONS]
			cp, jp: STRING_8
			n, i: INTEGER
		do
			n := 0
			if attached {WSF_VALUE} request.form_parameter ("grants_i") as inc then
				n := inc.string_representation.to_integer
			end
			create g.make_filled (create {GRANTS}.make ("", "", "", "", ""), 1, n)
			from
				i := 0
			until
				i >= n
			loop
				if attached {WSF_VALUE} request.form_parameter ("project_" + i.out) as proj then
					g [i + 1].title_of_project.append_string_general (proj.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("agency_" + i.out) as agency then
					g [i + 1].granting_agency.append_string_general (agency.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("period_" + i.out) as period then
					g [i + 1].period_grant.append_string_general (period.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("cont_" + i.out) as cont then
					g [i + 1].continuation_other_grant.append_string_general (cont.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("amount_" + i.out) as amount then
					g [i + 1].amount.append_string_general (amount.string_representation)
				end
			end
			n := 0
			if attached {WSF_VALUE} request.form_parameter ("grants_i") as inc then
				n := inc.string_representation.to_integer
			end
			create rp.make_filled (create {RESEARCH_PROJECTS}.make ("", "", "", "", "", ""), 1, n)
			from
				i := 0
			until
				i >= n
			loop
				if attached {WSF_VALUE} request.form_parameter ("t_of_project_" + i.out) as proj then
					rp [i + 1].title_of_project.append_string_general (proj.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("personel_" + i.out) as agency then
					rp [i + 1].ui_personnel_involved.append_string_general (agency.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("ext_personnel_" + i.out) as period then
					rp [i + 1].external_personnel_involved.append_string_general (period.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("start_of_project_" + i.out) as cont then
					rp [i + 1].start_date.append_string_general (cont.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("end_of_project_" + i.out) as amount then
					rp [i + 1].end_date.append_string_general (amount.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("financing_" + i.out) as finance then
					rp [i + 1].sources_of_financing.append_string_general (finance.string_representation)
				end
			end
			n := 0
			if attached {WSF_VALUE} request.form_parameter ("rsColab_i") as inc then
				n := inc.string_representation.to_integer
			end
			create rc.make_filled (create {RESEARCH_COLLABORATIONS}.make ("", "", "", "", ""), 1, n)
			from
				i := 0
			until
				i >= n
			loop
				if attached {WSF_VALUE} request.form_parameter ("country_" + i.out) as country then
					rc [i + 1].country_of_institution.append_string_general (country.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("institution_" + i.out) as institution then
					rc [i + 1].name_of_institution.append_string_general (institution.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("principal_contract_" + i.out) as contract then
					rc [i + 1].name_principal_contact.append_string_general (contract.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("other_contracts_" + i.out) as cont then
					rc [i + 1].other_contacts.append_string_general (cont.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("collaboration_" + i.out) as amount then
					rc [i + 1].nature_of_collaboration.append_string_general (amount.string_representation)
				end
			end
			cp := ""
			if attached {WSF_VALUE} request.form_parameter ("conference") as conf then
				cp.append_string_general (conf.string_representation)
			end
			jp := ""
			if attached {WSF_VALUE} request.form_parameter ("journal") as journal then
				jp.append_string_general (journal.string_representation)
			end
			create result.make_section3 (g, rp, rc, cp.to_string_8, jp.to_string_8)
		end

	read_section4: SECTION_4
		local
			p, copo, il: ARRAY [STRING]
			i, n: INTEGER
		do
			n := 0
			if attached {WSF_VALUE} request.form_parameter ("patents_i") as inc then
				n := inc.string_representation.to_integer
			end
			create p.make_filled ("", 1, n)
			create copo.make_filled ("", 1, n)
			from
				i := 0
			until
				i >= n
			loop
				if attached {WSF_VALUE} request.form_parameter ("patents_" + i.out) as patent then
					p [i + 1].append_string (patent.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("country_" + i.out) as country then
					copo [i + 1].append_string (country.string_representation)
				end
			end
			n := 0
			if attached {WSF_VALUE} request.form_parameter ("licFunction_i") as inc then
				n := inc.string_representation.to_integer
			end
			create il.make_filled ("", 1, n)
			from
				i := 0
			until
				i >= n
			loop
				if attached {WSF_VALUE} request.form_parameter ("license_" + i.out) as patent then
					il [i + 1].append_string (patent.string_representation)
				end
			end
			create result.make_section4 (p, copo, il)
		end

	read_section5: SECTION_5
		local
			bpa: ARRAY [BEST_PAPER_AWARDS]
			m: ARRAY [MEMBERSHIP]
			p: ARRAY [PRIZE]
			i, n: INTEGER
		do
			n := 0
			if attached {WSF_VALUE} request.form_parameter ("paperAwards_i") as inc then
				n := inc.string_representation.to_integer
			end
			create bpa.make_filled (create {BEST_PAPER_AWARDS}.make ("", "", "", "", ""), 1, n)
			from
				i := 0
			until
				i >= n
			loop
				if attached {WSF_VALUE} request.form_parameter ("author_" + i.out) as author then
					bpa [i + 1].author_awarded_article.append_string_general (author.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("aarticle_" + i.out) as article then
					bpa [i + 1].title_article.append_string_general (article.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("conf_" + i.out) as conf then
					bpa [i + 1].awarding_conference_or_journal.append_string_general (conf.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("ording_" + i.out) as ording then
					bpa [i + 1].exact_wording_award.append_string_general (ording.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("b_date_" + i.out) as date then
					bpa [i + 1].date.append_string_general (date.string_representation)
				end
			end
			n := 0
			if attached {WSF_VALUE} request.form_parameter ("membership_i") as inc then
				n := inc.string_representation.to_integer
			end
			create m.make_filled (create {MEMBERSHIP}.make ("", ""), 1, n)
			from
				i := 0
			until
				i >= n
			loop
				if attached {WSF_VALUE} request.form_parameter ("member_" + i.out) as member then
					m [i + 1].name_of_member.append_string_general (member.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("m_date_" + i.out) as date then
					m [i + 1].date_of_membership.append_string_general (date.string_representation)
				end
			end
			n := 0
			if attached {WSF_VALUE} request.form_parameter ("prize_i") as inc then
				n := inc.string_representation.to_integer
			end
			create p.make_filled (create {PRIZE}.make ("", "", "", ""), 1, n)
			from
				i := 1
			until
				i >= n
			loop
				if attached {WSF_VALUE} request.form_parameter ("recip_" + i.out) as recipe then
					p [i + 1].recipient.append_string_general (recipe.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("prize_" + i.out) as prize then
					p [i + 1].name_of_prize.append_string_general (prize.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("inst_" + i.out) as institution then
					p [i + 1].granting_institution.append_string_general (institution.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("date_" + i.out) as date then
					p [i + 1].date.append_string_general (date.string_representation)
				end
			end
			create result.make_section5 (bpa, m, p)
		end

	read_section6: SECTION_6
		local
			ic: ARRAY [INDUSTRY_COLLABORATIONS]
			i, n: INTEGER
		do
			n := 0;
			if attached {WSF_VALUE} request.form_parameter ("industry_i") as inc then
				n := inc.string_representation.to_integer
			end
			create ic.make_filled (create {INDUSTRY_COLLABORATIONS}.make ("", ""), 1, n)
			from
				i := 0
			until
				i >= n
			loop
				if attached {WSF_VALUE} request.form_parameter ("company_" + i.out) as company then
					ic [i + 1].company.append_string_general (company.string_representation)
				end
				if attached {WSF_VALUE} request.form_parameter ("coll_" + i.out) as coll then
					ic [i + 1].nature_of_collaboration.append_string_general (coll.string_representation)
				end
			end
			create result.make_section6 (ic)
		end

	read_section7: SECTION_7
		local
			s: STRING
		do
			s := ""
			if attached {WSF_VALUE} request.form_parameter ("t") as t then
				s.append_string_general (t.string_representation)
			end
			create result.make_section7 (s)
		end

end
