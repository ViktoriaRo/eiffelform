class
	DATABASE

create
	init, open, run

feature {NONE} -- Frozen features

	frozen db_file_address: STRING = "main.sqlite"

	frozen db_creation_file_address: STRING = "create.sql"

feature {NONE} -- Initialization

	report_id: INTEGER

	db: SQLITE_DATABASE
			-- Main database

	init
			-- Initializes DB for the first time.
		local
			db_creation_file: PLAIN_TEXT_FILE
			db_creation_query: STRING
		do
			create db_creation_file.make_open_read (db_creation_file_address)
			db_creation_file.read_stream (db_creation_file.count)
			db_creation_query := db_creation_file.last_string
			create db.make_create_read_write (db_file_address)
			execute_insertion (db_creation_query)
		end

	open
			-- Opens existent DB.
		do
			create db.make_open_read_write (db_file_address)
		end

	run
		do
			if (create {RAW_FILE}.make_with_name (db_file_address)).exists then
				open
			else
				init
			end
		end

feature -- Access

	execute_selection (a_query: STRING): ARRAY2 [STRING]
			-- Execute selection query.
		local
			statement: SQLITE_QUERY_STATEMENT
			cursor: SQLITE_STATEMENT_ITERATION_CURSOR
			res: ARRAY2 [STRING]
			r: INTEGER
			i: NATURAL
		do
			io.put_string ("DB: " + a_query + "%N")
			create statement.make (a_query, db)
			cursor := statement.execute_new
			from
				create res.make_filled ("", 1, 1)
				cursor.start
				r := 1
			until
				cursor.after
			loop
				from
					i := 1
				until
					i > cursor.item.count
				loop
					res.resize_with_default ("", r, i.as_integer_32)
					res.put (cursor.item.string_value (i), r, i.as_integer_32)
					i := i + 1
				end
				cursor.forth
				r := r + 1
			end
			Result := res
		end

	fill_query_file_with_arguments (a_query_file_name: STRING; arguments: ARRAY2 [STRING]): STRING
		local
			query: STRING
			sql_file: PLAIN_TEXT_FILE
			i, j: INTEGER
		do
			create sql_file.make_open_read (a_query_file_name)
			sql_file.read_stream (sql_file.count)
			query := sql_file.last_string
			from
				i := 1
			until
				i > arguments.width
			loop
				from
					j := 1
				until
					j > query.count
				loop
					if query.at (j).out ~ arguments.item (1, i) then
						query.remove (j)
						query.insert_string (arguments.item (2, i), j)
					end
					j := j + 1
				end
				i := i + 1
			end
			Result := query
		end

	execute_insertion_with_arguments (a_query_file_name: STRING; arguments: ARRAY2 [STRING])
		do
			execute_insertion (fill_query_file_with_arguments (a_query_file_name, arguments))
		end

	execute_selection_with_arguments (a_query_file_name: STRING; arguments: ARRAY2 [STRING]): ARRAY2 [STRING]
		do
			Result := execute_selection (fill_query_file_with_arguments (a_query_file_name, arguments))
		end

	execute_insertion (a_query: STRING)
			-- Execute insertion query.
		local
			statement: SQLITE_INSERT_STATEMENT
		do
			io.put_string ("DB: " + a_query + "%N")
			create statement.make (a_query, db)
			statement.execute
		end

	add_student (first_name, second_name, degree, lab: STRING)
		do
			execute_insertion ("INSERT INTO Students (first_name, second_name, degree, laboratoryid) VALUES (%"" + first_name + "%", %"" + second_name + "%", %"" + degree + "%", %"" + lab + "%");")
		end

	add_section_1 (s: SECTION_1)
		local
			args: ARRAY2 [STRING]
		do
			create args.make_filled ("", 2, 3)
			args.put (s.name_of_head, 2, 1)
			args.put (s.email, 2, 2)
			args.put (s.phone, 2, 3)
			args.put ("!", 1, 1)
			args.put ("#", 1, 2)
			args.put ("$", 1, 3)
			execute_insertion_with_arguments ("sql/add_supervisors.sql", args)
			create args.make_filled ("", 2, 3)
			args.put (s.name_of_head, 2, 1)
			args.put (s.start_date, 2, 2)
			args.put (s.end_date, 2, 3)
			args.put ("@", 1, 1)
			args.put ("#", 1, 2)
			args.put ("$", 1, 3)
			execute_insertion_with_arguments ("sql/create_report.sql", args)
			create args.make_filled ("", 2, 3)
			args.put (s.name_of_unit, 2, 1)
			args.put (s.name_of_head, 2, 2)
			args.put (s.email, 2, 3)
			args.put ("|", 1, 1)
			args.put ("!", 1, 2)
			args.put ("$", 1, 3)
			execute_insertion_with_arguments ("sql/add_laborator.sql", args)
		end

	add_section_2 (s: SECTION_2)
		local
			args: ARRAY2 [STRING]
		do
			create args.make_filled ("", 2, 5)
			across
				s.courses_taught as ct
			loop
				args.put (ct.item.course_name, 2, 1)
				args.put (ct.item.semester, 2, 2)
				args.put (ct.item.level, 2, 3)
				args.put (ct.item.number_of_students, 2, 4)
				args.put ("$", 1, 1)
				args.put ("%%", 1, 2)
				args.put ("^", 1, 3)
				args.put ("&", 1, 4)
				args.put ("@", 1, 5)
				execute_insertion_with_arguments ("sql/add_course.sql", args)
			end
			create args.make_filled ("", 2, 4)
			across
				s.examination as ex
			loop
				args.put (ex.item.course_name, 2, 1)
				args.put (ex.item.semester, 2, 2)
				args.put (ex.item.kind_of_exam, 2, 3)
				args.put (ex.item.number_of_students, 2, 4)
				args.put ("§", 1, 1)
				args.put ("^", 1, 2)
				args.put ("!", 1, 3)
				args.put ("@", 1, 4)
				execute_insertion_with_arguments ("sql/add_examination.sql", args)
			end
			create args.make_filled ("", 2, 4)
			across
				s.completed_phd_thesis as phd
			loop
				args.put (phd.item.student_name, 2, 1)
				args.put (phd.item.name_comitee_members, 2, 2)
				args.put (phd.item.name_degree_granting_institution, 2, 3)
				args.put (phd.item.title_of_dissertation, 2, 4)
				args.put ("§", 1, 1)
				args.put ("!", 1, 2)
				args.put ("&", 1, 3)
				args.put ("*", 1, 4)
				execute_insertion_with_arguments ("sql/add_phd_these.sql", args)
			end
		end

	add_section_3 (s: SECTION_3)
		local
			args: ARRAY2 [STRING]
		do
			create args.make_filled ("", 2, 5)
			across
				s.grants as g
			loop
				args.put (g.item.title_of_project, 2, 1)
				args.put (g.item.granting_agency, 2, 2)
				args.put (g.item.period_grant, 2, 3)
				args.put (g.item.continuation_other_grant, 2, 4)
				args.put (g.item.amount, 2, 5)
				args.put ("§", 1, 1)
				args.put ("%%", 1, 2)
				args.put ("^", 1, 3)
				args.put ("*", 1, 4)
				args.put ("&", 1, 5)
				execute_insertion_with_arguments ("sql/add_grant.sql", args)
			end
			create args.make_filled ("", 2, 5)
			across
				s.research_projects as rp
			loop
				args.put (rp.item.title_of_project, 2, 1)
				args.put (rp.item.ui_personnel_involved, 2, 2)
				args.put (rp.item.start_date, 2, 3)
				args.put (rp.item.end_date, 2, 4)
				args.put (rp.item.sources_of_financing, 2, 5)
				args.put ("&", 1, 1)
				args.put ("§", 1, 2)
				args.put ("!", 1, 3)
				args.put ("@", 1, 4)
				args.put ("#", 1, 5)
				execute_insertion_with_arguments ("sql/add_research_project.sql", args)
			end
			create args.make_filled ("", 2, 2)
			across
				s.research_collaborations as rs
			loop
				args.put (rs.item.name_of_institution, 2, 1)
				args.put (rs.item.nature_of_collaboration, 2, 2)
				args.put ("§", 1, 1)
				args.put ("!", 1, 2)
				execute_insertion_with_arguments ("sql/add_research_collaboration.sql", args)
			end
		end

end
