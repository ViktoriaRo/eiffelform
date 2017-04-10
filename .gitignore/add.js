/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/

var PhDtheses_i = 1;

function PhDthesesFunction(){
	var obj = document.getElementById('myForm');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"p_s_name_\"" + PhDtheses_i +" class=\"uname\">Student name:</label><input class=\"form-control\" id=\"p_s_name_\"" + PhDtheses_i +" type=\"text\" />";
	e.setAttribute("class","inst" + PhDtheses_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"degree_\"" + PhDtheses_i +" class=\"uname\">Degree</label><input class=\"form-control\" id=\"degree_\"" + PhDtheses_i +" type=\"text\"" + PhDtheses_i +" placeholder=\"e.g. PhD, Dr. Sc\" />";
	e.setAttribute("class","inst" + PhDtheses_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"supervisor_\"" + PhDtheses_i +" class=\"uname\">Name of supervisor:</label><input class=\"form-control\" id=\"supervisor_\"" + PhDtheses_i +" type=\"text\" />";
	e.setAttribute("class","inst" + PhDtheses_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"others_\"" + PhDtheses_i +" class=\"uname\">Names of other committee members</label><textarea class=\"form-control\" rows = 3 cols = 63 id=\"others_\"" + PhDtheses_i +" type=\"textarea\" ></textarea>";
	e.setAttribute("class","inst" + PhDtheses_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"degree_granting_\"" + PhDtheses_i +" class=\"uname\">Name of degree-granting institution:</label><input class=\"form-control\" id=\"degree_granting_\"" + PhDtheses_i +" type=\"text\" placeholder=\"Innopolis or other\" />";
	e.setAttribute("class","inst" + PhDtheses_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"dissertation_\"" + PhDtheses_i +" class=\"uname\">Title of dissertation:</label><input class=\"form-control\" id=\"dissertation_\"" + PhDtheses_i +" type=\"text\" />";
	e.setAttribute("class","inst" + PhDtheses_i);
	obj.appendChild(e);
	
	PhDtheses_i+=1;
}

function resetPHD(){
	if(PhDtheses_i>1){
		PhDtheses_i-=1;
		var obj = document.getElementById('myForm');
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
	}
}

/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/
var stReport_i = 1;
function studentReportsFunction(){
	var obj = document.getElementById('stReport');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"r_s_name_\"" + stReport_i +" class=\"uname\">Student name:</label><input class=\"form-control\" id=\"r_s_name_\"" + stReport_i +" type=\"text\" />";
	e.setAttribute("class","inst" + stReport_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"report_\"" + stReport_i +" class=\"uname\">Title of report</label><input class=\"form-control\" id=\"report_\"" + stReport_i +" type=\"text\" />";
	e.setAttribute("class","inst" + stReport_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"plans_\"" + stReport_i +" class=\"uname\">Publication plans if any</label><textarea class=\"form-control\" rows = 3 cols = 63 id=\"plans_\"" + stReport_i +" ></textarea>";
	e.setAttribute("class","inst" + stReport_i);
	obj.appendChild(e);
	
	stReport_i+=1;
}
function resetStReport(){
	if(stReport_i>1){
		stReport_i-=1;
		var obj = document.getElementById('stReport');
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
	}
}

/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/
var stSupervised_i = 1;
function stSupervisedFunction(){
	var obj = document.getElementById('stSupervised');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"s_s_name_\"" + stSupervised_i +" class=\"uname\">Student name:</label><input class=\"form-control\" id=\"s_s_name_\"" + stSupervised_i +" type=\"text\" />";
	e.setAttribute("class","inst" + stSupervised_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"work_\"" + stSupervised_i +" class=\"uname\">Nature of work:</label><input class=\"form-control\" id=\"work_\"" + stSupervised_i +" type=\"text\" placeholder=\"e.g. bachelor thesis, master thesis, summer internship\" />";
	e.setAttribute("class","inst" + stSupervised_i);
	obj.appendChild(e);
	
	stSupervised_i+=1;
}
function resetStSupervised(){
	if(stSupervised_i>1){
		stSupervised_i-=1;
		var obj = document.getElementById('stSupervised');
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
	}
}
/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/
var grants_i = 0;
function grantsFunction(){
	var obj = document.getElementById('grants');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"project_\"" + grants_i +" class=\"uname\">Title of project:</label><input class=\"form-control\" id=\"project_\"" + grants_i +" type=\"text\" />";
	e.setAttribute("class","inst" + grants_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"agency_\"" + grants_i +" class=\"uname\">Granting agency:</label><input class=\"form-control\" id=\"agency_\"" + grants_i +" type=\"text\" />";
	e.setAttribute("class","inst" + grants_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"period_\"" + grants_i +" class=\"uname\">Period covered by grant:</label><input class=\"form-control\" id=\"period_\"" + grants_i +" type=\"text\" />";
	e.setAttribute("class","inst" + grants_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"cont_\"" + grants_i +" class=\"uname\">Whether continuation of other grant</label><input class=\"form-control\" id=\"cont_\"" + grants_i +" type=\"text\" />";
	e.setAttribute("class","inst" + grants_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"amount_\"" + grants_i +" class=\"uname\">Amount:</label><input class=\"form-control\" id=\"amount_\"" + grants_i +" type=\"text\" />";
	e.setAttribute("class","inst" + grants_i);
	obj.appendChild(e);
	
	
	grants_i+=1;
}
function resetGrants(){
	if(grants_i>1){
		grants_i-=1;
		var obj = document.getElementById('grants');
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
	}
}

/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/
var rsColab_i = 1;
function rsColabFunction(){
	var obj = document.getElementById('rsColab');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"country_\"" + rsColab_i +" class=\"uname\">Country of institution:</label><input class=\"form-control\" id=\"country_\"" + rsColab_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsColab_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"institution_\"" + rsColab_i +" class=\"uname\">Name of institution (and department or unit if relevant)</label><input class=\"form-control\" id=\"institution_\"" + rsColab_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsColab_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"principal_contact_\"" + rsColab_i +" class=\"uname\">Name of principal contact:</label><input class=\"form-control\" id=\"principal_contact_\"" + rsColab_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsColab_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"other_contacts_\"" + rsColab_i +" class=\"uname\">Other important contacts:</label><input class=\"form-control\" id=\"other_contacts_\"" + rsColab_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsColab_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"collaboration_\"" + rsColab_i +" class=\"uname\">Nature of collaboration</label><input class=\"form-control\" id=\"collaboration_\"" + rsColab_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsColab_i);
	obj.appendChild(e);
	
	rsColab_i+=1;
}
function resetRsColab(){
	if(rsColab_i>1){
		rsColab_i-=1;
		var obj = document.getElementById('rsColab');
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
	}
}

/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/
var patents_i = 1;
function patentsFunction(){
	var obj = document.getElementById('pat');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"patents_\"" + patents_i +" class=\"uname\">Patents filed or otherwise submitted during the reported period</label><input class=\"form-control\" id=\"patents_\"" + patents_i +" type=\"text\" />";
	e.setAttribute("class","inst" + patents_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"country_\"" + patents_i +" class=\"uname\">Country of patent office</label><input class=\"form-control\" id=\"country_\"" + patents_i +" type=\"text\" />";
	e.setAttribute("class","inst" + patents_i);
	obj.appendChild(e);
	
	patents_i+=1;
}
function resetPatents(){
	if(patents_i>1){
		patents_i-=1;
		var obj = document.getElementById('pat');
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
	}
}
/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/
var licFunction_i = 1;
function licFunction(){
	var obj = document.getElementById('lic');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"license_\"" + licFunction_i +" class=\"uname\">License granted</label><input class=\"form-control\" id=\"license_\"" + licFunction_i +" type=\"text\" />";
	e.setAttribute("class","inst" + licFunction_i);
	obj.appendChild(e);
	licFunction_i+=1;
}
function resetLicense(){
	if(licFunction_i>1){
		licFunction_i-=1;
		var obj = document.getElementById('lic');
		obj.removeChild(obj.lastChild);
	}
}
/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/
var course_i = 1;

function courseFunction(){
	var obj = document.getElementById('course');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"c_name_"+course_i+"\" class=\"uname\">Course name:</label><input class=\"form-control\" id=\"c_name_"+course_i+"\" type=\"text\" />";
	e.setAttribute("class","inst" + course_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"semester_"+course_i+"\" class=\"uname\">Semester</label><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"semester+"+course_i+"\" value=\"Fall\" type=\"radio\" /><i>Fall&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"semester_"+course_i+"\" value=\"Spring\" type=\"radio\" />Spring</i>";
	e.setAttribute("class","inst" + course_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"level_"+course_i+"\" class=\"uname\">Level </label><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"level_"+course_i+"\" value=\"bach\" type=\"radio\" /><i>Bachelor&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"level_"+course_i+"\" value=\"master\" type=\"radio\" />Master&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"level_"+course_i+"\" value=\"phd\" type=\"radio\" />PhD</i>";
	e.setAttribute("class","inst" + course_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"students_"+course_i+"\" class=\"uname\">Approximate number of students</label><input class=\"form-control\" id=\"students_"+course_i+"\" type=\"text\" />";
	e.setAttribute("class","inst" + course_i);
	obj.appendChild(e);
	
	course_i+=1;
}
function resetCourse(){
	if(course_i>1){
		course_i-=1;
		var obj = document.getElementById('course');
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);	
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
	}
}

/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/
var exam_i = 1;
function examFunction(){
	var obj = document.getElementById('exam');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"e_c_name_\"" + exam_i +" class=\"uname\">Course name:</label><input class=\"form-control\" id=\"e_c_name_\"" + exam_i +" type=\"text\" />";
	e.setAttribute("class","inst" + exam_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"e_semester_\""+exam_i+" class=\"uname\">Semester</label><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"e_semester_\""+exam_i+" value=\"Fall\" type=\"radio\" /><i>Fall&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"e_semester_\""+exam_i+" value=\"Spring\" type=\"radio\" />Spring</i>";
	e.setAttribute("class","inst" + exam_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"exam\" class=\"uname\">Kind of exam</label><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"e_level_\""+exam_i+" value=\"final\" type=\"radio\" /><i>Final exam of the course <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"e_level_\""+exam_i+" value=\"repetition\" type=\"radio\" />Repetition exam</i>";
	e.setAttribute("class","inst" + exam_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"e_students_exam_\"" + exam_i +" class=\"uname\">Approximate number of students taking the exam</label><input class=\"form-control\" id=\"e_students_exam_\"" + exam_i +" type=\"text\" />";
	e.setAttribute("class","inst" + exam_i);
	obj.appendChild(e);
	
	exam_i+=1;
}
function resetExam(){
	if(exam_i>1){
		exam_i-=1;
		var obj = document.getElementById('exam');
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);	
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
	}
}

/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the E-mail text field.

------------------------------------------------------------------------------
*/
var rsProject_i = 1;
function rsProjectFunction(){
	var obj = document.getElementById('rsProject');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"project_\"" + rsProject_i +" class=\"uname\">Title of project:</label><input class=\"form-control\" id=\"project_\"" + rsProject_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsProject_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"personnel_\"" + rsProject_i +" class=\"uname\">Innopolis University personnel involved:</label><input class=\"form-control\" id=\"personnel_\"" + rsProject_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsProject_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"ext_personnel_\"" + rsProject_i +" class=\"uname\">External personnel involved if any:</label><input class=\"form-control\" id=\"ext_personnel_\"" + rsProject_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsProject_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"start_of_project_\"" + rsProject_i +" class=\"uname\">Start date of project</label><input class=\"form-control\" id=\"start_of_project_\"" + rsProject_i +" type=\"date\" />";
	e.setAttribute("class","inst" + rsProject_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"end_of_project_\"" + rsProject_i +" class=\"uname\">Expected end date</label><input class=\"form-control\" id=\"end_of_project_\"" + rsProject_i +" type=\"date\" />";
	e.setAttribute("class","inst" + rsProject_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"financing_\"" + rsProject_i +" class=\"uname\">Sources of financing:</label><input class=\"form-control\" id=\"financing_\"" + rsProject_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsProject_i);
	obj.appendChild(e);
	
	rsProject_i+=1;
}
function resetRsProject(){
	if(rsProject_i>1){
		rsProject_i-=1;
		var obj = document.getElementById('rsProject');
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);	
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
	}
}

function getSec2Incs(){
	document.getElementById("course_i").value = course_i;
	document.getElementById("exam_i").value = exam_i;
	document.getElementById("stSupervised_i").value = stSupervised_i;
	document.getElementById("stReport_i").value = stReport_i;
	document.getElementById("PhDtheses_i").value = PhDtheses_i;
}

function getSec3Incs(){
	document.getElementById("grants_i").value = grants_i;
	document.getElementById("rsProject_i").value = rsProject_i;
	document.getElementById("rsColab_i").value = rsColab_i;
}

function getSec4Incs(){
	document.getElementById("patents_i").value = patents_i;
	document.getElementById("licFunction_i").value = licFunction_i;
	location.href = "section5.html";
}

function getSec5Incs(){
	document.getElementById('paperAward_i').value = paperAward_i;
	document.getElementById('membership_i').value = membership_i;
	document.getElementById('prize_i').value = prize_i;
	location.href = "section6.html";
}

function getSec6Incs(){
	document.getElementById('industry_i').value = industry_i;
	location.href = "section7.html";
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Contact text field.

------------------------------------------------------------------------------
*/
var paperAward_i = 1;
function paperAwardFunction(){
	var obj = document.getElementById('paperAward');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"author_\"" + paperAward_i +" class=\"uname\">Author of the awarded article</label><input class=\"form-control\" id=\"author_\"" + paperAward_i +" type=\"text\" />";
	e.setAttribute("class","inst" + paperAward_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"article_\"" + paperAward_i +" class=\"uname\">Title of the article</label><input class=\"form-control\" id=\"article_\"" + paperAward_i +" type=\"text\" />";
	e.setAttribute("class","inst" + paperAward_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"conf_\"" + paperAward_i +" class=\"uname\">Awarding conference or journal</label><input class=\"form-control\" id=\"conf_\"" + paperAward_i +" type=\"text\" />";
	e.setAttribute("class","inst" + paperAward_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"ording_\"" + paperAward_i +" class=\"uname\">Exact wording of award</label><input class=\"form-control\" id=\"ording_\"" + paperAward_i +" type=\"text\" />";
	e.setAttribute("class","inst" + paperAward_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"b_date_\"" + paperAward_i +" class=\"uname\">Date</label><input class=\"form-control\" id=\"b_date_\"" + paperAward_i +" type=\"date\" />";
	e.setAttribute("class","inst" + paperAward_i);
	obj.appendChild(e);
	
	paperAward_i+=1;
}
function resetPaperAward(){
	if(paperAward_i>1){
		paperAward_i-=1;
		var obj = document.getElementById('paperAward');
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);	
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
	}
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Contact text field.

------------------------------------------------------------------------------
*/
var membership_i = 1;
function membershipFunction(){
	var obj = document.getElementById('membership');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"member_\"" + membership_i +" class=\"uname\">Name of member</label><input class=\"form-control\" id=\"member_\"" + membership_i +" type=\"text\" />";
	e.setAttribute("class","inst" + membership_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"m_date_\"" + membership_i +" class=\"uname\">Date of membership</label><input class=\"form-control\" id=\"m_date_\"" + membership_i +" type=\"date\" />";
	e.setAttribute("class","inst" + membership_i);
	obj.appendChild(e);
	membership_i+=1;
}
function resetMembership(){
	if(membership_i>1){
		membership_i-=1;
		var obj = document.getElementById('membership');
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
	}
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Contact text field.

------------------------------------------------------------------------------
*/
var prize_i = 1;
function prizeFunction(){
	var obj = document.getElementById('prizes');
	var d = document.createElement("p");
	d.setAttribute("class","recip" + prize_i);
	d.innerHTML ="<label for=\"recip_\"" + prize_i + "class=\"uname\">Recipient</label><input class=\"form-control\" id=\"recip_\"" + prize_i + "type=\"text\" />";
	obj.appendChild(d);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"prize_\"" + prize_i +" class=\"uname\">Nature of collaboration</label><input class=\"form-control\" id=\"prize_\"" + prize_i +" type=\"text\" />";
	e.setAttribute("class","prize" + prize_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"inst_\"" + prize_i +" class=\"uname\">Granting institution</label><input class=\"form-control\" id=\"inst_\"" + prize_i +" type=\"text\" />";
	e.setAttribute("class","inst" + prize_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"date_\"" + prize_i +" class=\"uname\">Date</label><input class=\"form-control\" id=\"date_\"" + prize_i +" type=\"date\" />";
	e.setAttribute("class","inst" + prize_i);
	obj.appendChild(e);
	prize_i+=1;
}
function resetPrize(){
	if(prize_i>1){
		prize_i-=1;
		var obj = document.getElementById('prizes');
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
	}
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Contact text field.

------------------------------------------------------------------------------
*/

var industry_i = 1;
function industryFunction(){
	var obj = document.getElementById('industry');
	var d = document.createElement("p");
	d.setAttribute("class","company" + industry_i);
	d.innerHTML ="<label for=\"company_\"" + industry_i + " class=\"uname\">Company</label><input class=\"form-control\" id=\"company_\""+ industry_i+" type=\"text\">";
	obj.appendChild(d);
	var e = document.createElement("p");
	e.setAttribute("class","coll_" + industry_i);
	e.innerHTML = "<label for=\"coll_\"" + industry_i +" class=\"uname\">Nature of collaboration</label><input class=\"form-control\" id=\"coll_\"" + industry_i +" type=\"text\" />";
	obj.appendChild(e);
	industry_i+=1;
}
function resetIndustry() {
	if(industry_i>1){
		industry_i-=1;
		var obj = document.getElementById('industry');
		obj.removeChild(obj.lastChild);
		obj.removeChild(obj.lastChild);
	}
}


/*
	Form validation will be in this part.
*/

function checkFormSection1(){
	var x = document.getElementById("name_of_unit").value;
	var y = document.getElementById("name_of_head").value;
	var z = document.getElementById("email").value;
	var t = document.getElementById("phone").value;
	if(x == ""){
		document.getElementById("name_of_unit_error").innerHTML = "*Fill in the field.";
		location.href="#name_of_unit";
		return false;
	}
	if(y == ""){
		document.getElementById("name_of_head_error").innerHTML = "*Fill in the field.";
		location.href="#name_of_head";
		return false;
	}
	if(z == ""){
		document.getElementById("email_error").innerHTML = "*Fill in the field.";
		location.href="#email";
		return false;
	}
	if(t == ""){
		document.getElementById("phone_error").innerHTML = "*Fill in the field.";
		location.href="#phone";
		return false;
	}
	location.href="section2.html";
	return true;
}
					   
function checkFormSection2(){
	var x = document.getElementById("c_name_0").value;
	var y = document.getElementById("students_0").value;
	var z = document.getElementById("e_c_name_0").value;
	var t = document.getElementById("e_students_0").value;
	var a = document.getElementById("s_s_name_0").value;
	var b = document.getElementById("work_0").value;	
	var c = document.getElementById("r_s_name_0").value;
	var d = document.getElementById("report_0").value;
	if(x == ""){
		document.getElementById("c1_name_error").innerHTML = "*Fill in the field.";
		location.href="#c_name_0";
		return false;
	}
	if(y == ""){
		document.getElementById("students_error").innerHTML = "*Fill in the field.";
		location.href="#students_0";
		return false;
	}
	if(z == ""){
		document.getElementById("c2_name_error").innerHTML = "*Fill in the field.";
		location.href="#e_c_name_0";
		return false;
	}
	if(t == ""){
		document.getElementById("students_exam_error").innerHTML = "*Fill in the field.";
		location.href="#e_students_0";
		return false;
   }
	if(a == ""){
		document.getElementById("s_name_error").innerHTML = "*Fill in the field.";
		location.href="#s_s_name_0";
		return false;
	}
	if(b == ""){
		document.getElementById("work_error").innerHTML = "*Fill in the field.";
		location.href="#work_0";
		return false;
	}
	if(c == ""){
		document.getElementById("s1_name_error").innerHTML = "*Fill in the field.";
		location.href="#r_s_name_0";
		return false;
	}
	if(d == ""){
		document.getElementById("report_error").innerHTML = "*Fill in the field.";
		location.href="#report_0";
		return false;
	}
	getSec2Incs();
	location.href="section3.html";
	return true;
}		
			   
function checkFormSection3(){
var x = document.getElementById("project_0").value;
var y = document.getElementById("agency_0").value;
var z = document.getElementById("period_0").value;
var t = document.getElementById("cont_0").value;
var a = document.getElementById("amount_0").value;
var e = document.getElementById("t_of_project_0").value;
var b = document.getElementById("personnel_0").value;
var c = document.getElementById("ext_personnel_0").value;
var d = document.getElementById("financing_0").value;

	if(x == ""){
		document.getElementById("project_0_error").innerHTML = "*Fill in the field.";
		location.href="#project_0";
		return false;
	}
	if(y == ""){
		document.getElementById("agency_0_error").innerHTML = "*Fill in the field.";
		location.href="#agency_0";
		return false;
	}
	if(z == ""){
		document.getElementById("period_0_error").innerHTML = "*Fill in the field.";
		location.href="#period_0";
		return false;
	}
	if(t == ""){
		document.getElementById("cont_0_error").innerHTML = "*Fill in the field.";
		location.href="#cont_0";
		return false;
   }
	if(a == ""){
		document.getElementById("amount_0_error").innerHTML = "*Fill in the field.";
		location.href="#amount_0";
		return false;
	}
	if(e == ""){
		document.getElementById("t_of_project_0_error").innerHTML = "*Fill in the field.";
		location.href="#t_of_project_0";
		return false;
   }
	if(b == ""){
		document.getElementById("personnel_0_error").innerHTML = "*Fill in the field.";
		location.href="#personnel_0";
		return false;
	}
	if(c == ""){
		document.getElementById("ext_personnel_0_error").innerHTML = "*Fill in the field.";
		location.href="#ext_personnel_0";
		return false;
	}
	if(d == ""){
		document.getElementById("financing_0_error").innerHTML = "*Fill in the field.";
		location.href="#financing_0";
		return false;
	}
	getSec3Incs();
	location.href="section4.html";
	return true;
}
