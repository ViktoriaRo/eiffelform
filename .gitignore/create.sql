CREATE TABLE "Best_Awards" (
"ID" INTEGER NOT NULL,
"PublicationID" INTEGER NOT NULL,
"Award" TEXT NOT NULL,
"Date" datetime NOT NULL,
PRIMARY KEY ("ID") ,
CONSTRAINT "fk_best_awards_Publications_1" FOREIGN KEY ("PublicationID") REFERENCES "Publications" ("ID")
);

CREATE TABLE "Commitee" (
"ID" INTEGER NOT NULL,
"Name" TEXT NOT NULL,
PRIMARY KEY ("ID") 
);

CREATE TABLE "Courses" (
"ID" INTEGER NOT NULL,
"Name" TEXT NOT NULL,
"Semester" TEXT NOT NULL,
"Level" TEXT NOT NULL,
"Students_Number" INTEGER NOT NULL,
"ReportID" INTEGER NOT NULL,
PRIMARY KEY ("ID") ,
CONSTRAINT "fk_Courses_Reports_1" FOREIGN KEY ("ReportID") REFERENCES "Reports" ("ID")
);

CREATE TABLE "Examinations" (
"ID" INTEGER NOT NULL,
"CourseID" INTEGER NOT NULL,
"Exam_Kind" TEXT NOT NULL,
"Students_Number" INTEGER NOT NULL,
PRIMARY KEY ("ID") ,
CONSTRAINT "fk_Examinations_Courses_1" FOREIGN KEY ("CourseID") REFERENCES "Courses" ("ID")
);

CREATE TABLE "Grants" (
"ID" INTEGER NOT NULL,
"StudentID" INTEGER NOT NULL,
"Project_Title" TEXT NOT NULL,
"Granting_Agency" TEXT NOT NULL,
"Period" datetime NOT NULL,
"Amount" REAL NOT NULL,
"Other_Grant" TEXT NOT NULL,
PRIMARY KEY ("ID") ,
CONSTRAINT "fk_Grants_Students_1" FOREIGN KEY ("StudentID") REFERENCES "Students" ("ID")
);

CREATE TABLE "IP_Licencings" (
"LincenceID" INTEGER NOT NULL,
"Granted_licence" TEXT NOT NULL,
"ReportID" INTEGER NOT NULL,
PRIMARY KEY ("LincenceID") ,
CONSTRAINT "fk_IP_Licencings_Reports_1" FOREIGN KEY ("ReportID") REFERENCES "Reports" ("ID")
);

CREATE TABLE "Industry_collaboration" (
"ID" INTEGER NOT NULL,
"Company_Name" TEXT NOT NULL,
"Collaboration_Nature" TEXT NOT NULL,
"ReportID" INTEGER NOT NULL,
PRIMARY KEY ("ID") ,
CONSTRAINT "fk_Industry_collaboration_Reports_1" FOREIGN KEY ("ReportID") REFERENCES "Reports" ("ID")
);

CREATE TABLE "Institutions" (
"ID" INTEGER NOT NULL,
"Name" TEXT NOT NULL,
"Country" TEXT NOT NULL,
"Contacts" TEXT NOT NULL,
PRIMARY KEY ("ID") 
);

CREATE TABLE "Laboratories" (
"ID" INTEGER NOT NULL,
"SupervisorID" INTEGER NOT NULL,
"Laborator_Name" TEXT NOT NULL,
PRIMARY KEY ("ID") ,
CONSTRAINT "fk_Laboratories_Supervisors_1" FOREIGN KEY ("SupervisorID") REFERENCES "Supervisors" ("ID")
);

CREATE TABLE "Membership_Kind" (
"ID" INTEGER NOT NULL,
"kind" TEXT NOT NULL,
PRIMARY KEY ("ID") 
);

CREATE TABLE "Memberships" (
"ID" INTEGER NOT NULL,
"Name" TEXT NOT NULL,
"Date" datetime NOT NULL,
"Membership_KindID" INTEGER NOT NULL,
"ReportID" INTEGER NOT NULL,
PRIMARY KEY ("ID") ,
CONSTRAINT "fk_Memberships_Membership_Kind_1" FOREIGN KEY ("Membership_KindID") REFERENCES "Membership_Kind" ("ID"),
CONSTRAINT "fk_Memberships_Reports_1" FOREIGN KEY ("ReportID") REFERENCES "Reports" ("ID")
);

CREATE TABLE "PHD_Theses" (
"ID" INTEGER NOT NULL,
"StudentID" INTEGER NOT NULL,
"CommitteeID" INTEGER NOT NULL,
"InstitutionID" INTEGER NOT NULL,
"Title" TEXT,
PRIMARY KEY ("ID") ,
CONSTRAINT "fk_PHD_Theses_Institutions_1" FOREIGN KEY ("InstitutionID") REFERENCES "Institutions" ("ID"),
CONSTRAINT "fk_PHD_Theses_Students_1" FOREIGN KEY ("StudentID") REFERENCES "Students" ("ID"),
CONSTRAINT "fk_PHD_Theses_Commitee_1" FOREIGN KEY ("CommitteeID") REFERENCES "Commitee" ("ID")
);

CREATE TABLE "Patents" (
"ID" INTEGER NOT NULL,
"Country" TEXT NOT NULL,
"Title" TEXT NOT NULL,
"Period_Report" datetime NOT NULL,
"ReportID" INTEGER NOT NULL,
PRIMARY KEY ("ID") ,
CONSTRAINT "fk_Patents_Reports_1" FOREIGN KEY ("ReportID") REFERENCES "Reports" ("ID")
);

CREATE TABLE "Prizes" (
"ID" INTEGER NOT NULL,
"StudentID" INTEGER NOT NULL,
"InstitutionID" INTEGER NOT NULL,
"Prize_Name" TEXT NOT NULL,
"Date" datetime NOT NULL,
PRIMARY KEY ("ID") ,
CONSTRAINT "fk_Prizes_Students_1" FOREIGN KEY ("StudentID") REFERENCES "Students" ("ID"),
CONSTRAINT "fk_Prizes_Institutions_1" FOREIGN KEY ("InstitutionID") REFERENCES "Institutions" ("ID")
);

CREATE TABLE "Publication_Authors" (
"Author_Name" TEXT NOT NULL,
"Coauthor_Name" TEXT NOT NULL,
"PublicationID" INTEGER NOT NULL,
CONSTRAINT "fkey0" FOREIGN KEY ("PublicationID") REFERENCES "Publications" ("ID")
);

CREATE TABLE "Publications" (
"ID" INTEGER NOT NULL,
"ReportID" INTEGER NOT NULL,
"Title" TEXT NOT NULL,
"Publication_KindID" INTEGER NOT NULL,
PRIMARY KEY ("ID") ,
CONSTRAINT "fk_Publications_Student_Reports_1" FOREIGN KEY ("ID") REFERENCES "Student_Reports" ("PublicationID"),
CONSTRAINT "fk_Publications_Reports_1" FOREIGN KEY ("ReportID") REFERENCES "Reports" ("ID"),
CONSTRAINT "fk_Publications_Publications_Kind_1" FOREIGN KEY ("Publication_KindID") REFERENCES "Publications_Kind" ("ID")
);

CREATE TABLE "Publications_Kind" (
"ID" INTEGER NOT NULL,
"Kind" TEXT NOT NULL,
PRIMARY KEY ("ID") 
);

CREATE TABLE "Reports" (
"ID" INTEGER NOT NULL,
"SupervisorID" INTEGER NOT NULL,
"Start_Date" datetime NOT NULL,
"End_Date" INTEGER,
PRIMARY KEY ("ID") 
);

CREATE TABLE "Research_Collaborations" (
"ID" INTEGER NOT NULL,
"InstituteID" INTEGER NOT NULL,
"Collaboration_Nature" TEXT NOT NULL,
PRIMARY KEY ("ID") ,
CONSTRAINT "fk_Research_Collaboration_Institutions_1" FOREIGN KEY ("InstituteID") REFERENCES "Institutions" ("ID")
);

CREATE TABLE "Research_Projects" (
"ID" INTEGER NOT NULL,
"InstitutionID" INTEGER NOT NULL,
"Title" TEXT NOT NULL,
"Start_Date" datetime NOT NULL,
"End_Date" datetime NOT NULL,
"Financing" REAL NOT NULL,
PRIMARY KEY ("ID") ,
CONSTRAINT "fk_Research_Projects_Institutions_1" FOREIGN KEY ("InstitutionID") REFERENCES "Institutions" ("ID")
);

CREATE TABLE "Student_Reports" (
"ID" INTEGER NOT NULL,
"StudentID" INTEGER NOT NULL,
"PublicationID" INTEGER NOT NULL,
PRIMARY KEY ("ID") ,
CONSTRAINT "fk_Student_Reports_Students_1" FOREIGN KEY ("StudentID") REFERENCES "Students" ("ID")
);

CREATE TABLE "Students" (
"ID" INTEGER NOT NULL,
"LaboratoryID" INTEGER NOT NULL,
"Name" TEXT NOT NULL,
"Degree" TEXT NOT NULL,
PRIMARY KEY ("ID") ,
CONSTRAINT "fkey0" FOREIGN KEY ("LaboratoryID") REFERENCES "Laboratories" ("ID")
);

CREATE TABLE "Supervisors" (
"ID" INTEGER NOT NULL,
"Name" TEXT NOT NULL,
"Email" TEXT NOT NULL,
"Phone" INTEGER NOT NULL,
PRIMARY KEY ("ID") ,
CONSTRAINT "fkey0" FOREIGN KEY ("ID") REFERENCES "Reports" ("SupervisorID")
);

