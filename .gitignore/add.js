var i = 0; /* Set Global Variable i */
function increment(){
i += 1; /* Function for automatic increment of field's "Name" attribute. */
}

/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/

var PhDtheses_i = 0;
function PhDthesesFunction(){
	var obj = document.getElementById('myForm');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"s_name\"" + PhDtheses_i +" class=\"uname\">Student name:</label><input class=\"form-control\" id=\"s_name\"" + PhDtheses_i +" type=\"text\" />";
	e.setAttribute("class","inst" + PhDtheses_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"degree\"" + PhDtheses_i +" class=\"uname\">Degree</label><input class=\"form-control\" id=\"degree\"" + PhDtheses_i +" type=\"text\"" + PhDtheses_i +" placeholder=\"e.g. PhD, Dr. Sc\" />";
	e.setAttribute("class","inst" + PhDtheses_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"supervisor\"" + PhDtheses_i +" class=\"uname\">Name of supervisor:</label><input class=\"form-control\" id=\"supervisor\"" + PhDtheses_i +" type=\"text\" />";
	e.setAttribute("class","inst" + PhDtheses_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"others\"" + PhDtheses_i +" class=\"uname\">Names of other committee members</label><input class=\"form-control\" id=\"others\"" + PhDtheses_i +" type=\"textarea\" />";
	e.setAttribute("class","inst" + PhDtheses_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"degree_granting\"" + PhDtheses_i +" class=\"uname\">Name of degree-granting institution:</label><input class=\"form-control\" id=\"degree_granting\"" + PhDtheses_i +" type=\"text\"" + PhDtheses_i +" placeholder=\"Innopolis or other\" />";
	e.setAttribute("class","inst" + PhDtheses_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"dissertation\"" + PhDtheses_i +" class=\"uname\">Title of dissertation:</label><input class=\"form-control\" id=\"dissertation\"" + PhDtheses_i +" type=\"text\" />";
	e.setAttribute("class","inst" + PhDtheses_i);
	obj.appendChild(e);
	
	PhDtheses_i+=1;
}
function resetPHD(){
	PhDtheses_i-=1;
	var obj = document.getElementById('myForm');
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
}

function getPHDincrementAndRedirect(){
	document.getElementById("PHDthesis_i").value = PhDthesis_i+" ";
	location.href = "section3.html";
}

/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/
var stReport_i = 0;
function studentReportsFunction(){
	var obj = document.getElementById('stReport');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"s_name\"" + stReport_i +" class=\"uname\">Student name:</label><input class=\"form-control\" id=\"s_name\"" + stReport_i +" type=\"text\" />";
	e.setAttribute("class","inst" + stReport_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"report\"" + stReport_i +" class=\"uname\">Title of report</label><input class=\"form-control\" id=\"report\"" + stReport_i +" type=\"text\" />";
	e.setAttribute("class","inst" + stReport_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"plans\"" + stReport_i +" class=\"uname\">Publication plans if any</label><input class=\"form-control\" id=\"plans\"" + stReport_i +" type=\"text\" />";
	e.setAttribute("class","inst" + stReport_i);
	obj.appendChild(e);
	
	stReport_i+=1;
}
function resetStReport(){
	stReport_i-=1;
	var obj = document.getElementById('stReport');
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
}
/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/
var stSupervised_i = 0;
function stSupervisedFunction(){
	var obj = document.getElementById('stSupervised');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"s_name\"" + stSupervised_i +" class=\"uname\">Student name:</label><input class=\"form-control\" id=\"s_name\"" + stSupervised_i +" type=\"text\" />";
	e.setAttribute("class","inst" + stSupervised_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"work\"" + stSupervised_i +" class=\"uname\">Nature of work:</label><input class=\"form-control\" id=\"work\"" + stSupervised_i +" type=\"text\" " + stSupervised_i +" placeholder=\"e.g. bachelor thesis, master thesis, summer internship\" />";
	e.setAttribute("class","inst" + stSupervised_i);
	obj.appendChild(e);
	
	stSupervised_i+=1;
}
function resetStSupervised(){
	stSupervised_i-=1;
	var obj = document.getElementById('stSupervised');
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
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
	e.innerHTML = "<label for=\"project\"" + grants_i +" class=\"uname\">Title of project:</label><input class=\"form-control\" id=\"project\"" + grants_i +" type=\"text\" />";
	e.setAttribute("class","inst" + grants_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"agency\"" + grants_i +" class=\"uname\">Granting agency:</label><input class=\"form-control\" id=\"agency\"" + grants_i +" type=\"text\" />";
	e.setAttribute("class","inst" + grants_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"period\"" + grants_i +" class=\"uname\">Period covered by grant:</label><input class=\"form-control\" id=\"period\"" + grants_i +" type=\"text\" />";
	e.setAttribute("class","inst" + grants_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"cont\"" + grants_i +" class=\"uname\">Whether continuation of other grant</label><input class=\"form-control\" id=\"cont\"" + grants_i +" type=\"text\" />";
	e.setAttribute("class","inst" + grants_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"amount\"" + grants_i +" class=\"uname\">Amount:</label><input class=\"form-control\" id=\"amount\"" + grants_i +" type=\"text\" />";
	e.setAttribute("class","inst" + grants_i);
	obj.appendChild(e);
	
	
	grants_i+=1;
}
function resetGrants(){
	grants_i-=1;
	var obj = document.getElementById('grants');
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
}
/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/
var rsColab_i = 0;
function rsColabFunction(){
	var obj = document.getElementById('rsColab');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"country\"" + rsColab_i +" class=\"uname\">Country of institution:</label><input class=\"form-control\" id=\"country\"" + rsColab_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsColab_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"institution\"" + rsColab_i +" class=\"uname\">Name of institution (and department or unit if relevant)</label><input class=\"form-control\" id=\"institution\"" + rsColab_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsColab_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"principal_contact\"" + rsColab_i +" class=\"uname\">Name of principal contact:</label><input class=\"form-control\" id=\"principal_contact\"" + rsColab_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsColab_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"other_contacts\"" + rsColab_i +" class=\"uname\">Other important contacts:</label><input class=\"form-control\" id=\"other_contacts\"" + rsColab_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsColab_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"collaboration\"" + rsColab_i +" class=\"uname\">Nature of collaboration</label><input class=\"form-control\" id=\"collaboration\"" + rsColab_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsColab_i);
	obj.appendChild(e);
	
	rsColab_i+=1;
}
function resetRsColab(){
	rsColab_i-=1;
	var obj = document.getElementById('rsColab');
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
}
/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/
var patents_i = 0;
function patentsFunction(){
	var obj = document.getElementById('pat');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"patents\"" + patents_i +" class=\"uname\">Patents filed or otherwise submitted during the reported period</label><input class=\"form-control\" id=\"patents\"" + patents_i +" type=\"text\" />";
	e.setAttribute("class","inst" + patents_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"country\"" + patents_i +" class=\"uname\">Country of patent office</label><input class=\"form-control\" id=\"country\"" + patents_i +" type=\"text\" />";
	e.setAttribute("class","inst" + patents_i);
	obj.appendChild(e);
	
	patents_i+=1;
}
function resetPatents(){
	patents_i-=1;
	var obj = document.getElementById('pat');
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
}
/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/
var licFunction_i = 0;
function licFunction(){
	var obj = document.getElementById('lic');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"license\"" + licFunction_i +" class=\"uname\">License granted</label><input class=\"form-control\" id=\"license\"" + licFunction_i +" type=\"text\" />";
	e.setAttribute("class","inst" + licFunction_i);
	obj.appendChild(e);
	licFunction_i+=1;
}
function resetLicense(){
	licFunction_i-=1;
	var obj = document.getElementById('lic');
	obj.removeChild(obj.lastChild);
}
/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/
var course_i = 0;
function courseFunction(){
	var obj = document.getElementById('course');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"c_name\"class=\"uname\">Course name:</label><input class=\"form-control\" id=\"c_name\" type=\"text\" />";
	e.setAttribute("class","inst" + course_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"semester\" class=\"uname\">Semester</label><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"semester\" value=\"Fall\" type=\"radio\" /><i>Fall&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"semester\" value=\"Spring\" type=\"radio\" />Spring</i>";
	e.setAttribute("class","inst" + course_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"level\" class=\"uname\">Level </label><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"level\" value=\"bach\" type=\"radio\" /><i>Bachelor&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"level\" value=\"master\" type=\"radio\" />Master&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"level\" value=\"phd\" type=\"radio\" />PhD</i>";
	e.setAttribute("class","inst" + course_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"students\" class=\"uname\">Approximate number of students</label><input class=\"form-control\" id=\"students\" type=\"text\" />";
	e.setAttribute("class","inst" + course_i);
	obj.appendChild(e);
	
	course_i+=1;
}
function resetCourse(){
	course_i-=1;
	var obj = document.getElementById('course');
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);	
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
}
/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the +.

----------------------------------------------------------------------------
*/
var exam_i = 0;
function examFunction(){
	var obj = document.getElementById('exam');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"c_name\"" + exam_i +" class=\"uname\">Course name:</label><input class=\"form-control\" id=\"c_name\"" + exam_i +" type=\"text\" />";
	e.setAttribute("class","inst" + exam_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"semester\" class=\"uname\">Semester</label><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"semester\" value=\"Fall\" type=\"radio\" /><i>Fall&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"semester\" value=\"Spring\" type=\"radio\" />Spring</i>";
	e.setAttribute("class","inst" + exam_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"exam\" class=\"uname\">Kind of exam</label><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"level\" value=\"final\" type=\"radio\" /><i>Final exam of the course <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input name=\"level\" value=\"repetition\" type=\"radio\" />Repetition exam</i>";
	e.setAttribute("class","inst" + exam_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"students_exam\"" + exam_i +" class=\"uname\">Approximate number of students taking the exam</label><input class=\"form-control\" id=\"students_exam\"" + exam_i +" type=\"text\" />";
	e.setAttribute("class","inst" + exam_i);
	obj.appendChild(e);
	
	exam_i+=1;
}
function resetExam(){
	exam_i-=1;
	var obj = document.getElementById('exam');
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);	
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the E-mail text field.

------------------------------------------------------------------------------
*/
var rsProject_i = 0;
function rsProjectFunction(){
	var obj = document.getElementById('rsProject');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"project\"" + rsProject_i +" class=\"uname\">Title of project:</label><input class=\"form-control\" id=\"project\"" + rsProject_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsProject_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"personnel\"" + rsProject_i +" class=\"uname\">Innopolis University personnel involved:</label><input class=\"form-control\" id=\"personnel\"" + rsProject_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsProject_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"ext_personnel\"" + rsProject_i +" class=\"uname\">External personnel involved if any:</label><input class=\"form-control\" id=\"ext_personnel\"" + rsProject_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsProject_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"start_of_project\"" + rsProject_i +" class=\"uname\">Start date of project</label><input class=\"form-control\" id=\"e\"" + rsProject_i +" type=\"date\" />";
	e.setAttribute("class","inst" + rsProject_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"end_of_project\"" + rsProject_i +" class=\"uname\">Expected end date</label><input class=\"form-control\" id=\"i\"" + rsProject_i +" type=\"date\" />";
	e.setAttribute("class","inst" + rsProject_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"financing\"" + rsProject_i +" class=\"uname\">Sources of financing:</label><input class=\"form-control\" id=\"financing\"" + rsProject_i +" type=\"text\" />";
	e.setAttribute("class","inst" + rsProject_i);
	obj.appendChild(e);
	
	rsProject_i+=1;
}
function resetRsProject(){
	rsProject_i-=1;
	var obj = document.getElementById('rsProject');
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);	
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Contact text field.

------------------------------------------------------------------------------
*/
var paperAward_i = 0;
function paperAwardFunction(){
	var obj = document.getElementById('paperAward');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"author\"" + paperAward_i +" class=\"uname\">Author of the awarded article</label><input class=\"form-control\" id=\"author\"" + paperAward_i +" type=\"text\" />";
	e.setAttribute("class","inst" + paperAward_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"article\"" + paperAward_i +" class=\"uname\">Title of the article</label><input class=\"form-control\" id=\"article\"" + paperAward_i +" type=\"text\" />";
	e.setAttribute("class","inst" + paperAward_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"conf\"" + paperAward_i +" class=\"uname\">Awarding conference or journal</label><input class=\"form-control\" id=\"conf\"" + paperAward_i +" type=\"text\" />";
	e.setAttribute("class","inst" + paperAward_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"ording\"" + paperAward_i +" class=\"uname\">Exact wording of award</label><input class=\"form-control\" id=\"ording\"" + paperAward_i +" type=\"text\" />";
	e.setAttribute("class","inst" + paperAward_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"date\"" + paperAward_i +" class=\"uname\">Date</label><input class=\"form-control\" id=\"e\"" + paperAward_i +" type=\"date\" />";
	e.setAttribute("class","inst" + paperAward_i);
	obj.appendChild(e);
	
	paperAward_i+=1;
}
function resetPaperAward(){
	paperAward_i-=1;
	var obj = document.getElementById('paperAward');
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);	
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Contact text field.

------------------------------------------------------------------------------
*/
var membership_i = 0;
function membershipFunction(){
	var obj = document.getElementById('membership');
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"member\"" + membership_i +" class=\"uname\">Name of member</label><input class=\"form-control\" id=\"member\"" + membership_i +" type=\"text\" />";
	e.setAttribute("class","inst" + membership_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"date\"" + membership_i +" class=\"uname\">Date of membership</label><input class=\"form-control\" id=\"n\"" + membership_i +" type=\"date\" />";
	e.setAttribute("class","inst" + membership_i);
	obj.appendChild(e);
	membership_i+=1;
}
function resetMembership(){
	membership_i-=1;
	var obj = document.getElementById('membership');
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Contact text field.

------------------------------------------------------------------------------
*/
var prize_i = 0;
function prizeFunction(){
	var obj = document.getElementById('prizes');
	var d = document.createElement("p");
	d.setAttribute("class","recip" + prize_i);
	d.innerHTML ="<label for=\"recip\"" + prize_i + "class=\"uname\">Recipient</label><input class=\"form-control\" id=\"recip\"" + prize_i + "type=\"text\" />";
	obj.appendChild(d);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"prize\"" + prize_i +" class=\"uname\">Nature of collaboration</label><input class=\"form-control\" id=\"prize\"" + prize_i +" type=\"text\" />";
	e.setAttribute("class","prize" + prize_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"inst\"" + prize_i +" class=\"uname\">Granting institution</label><input class=\"form-control\" id=\"inst\"" + prize_i +" type=\"text\" />";
	e.setAttribute("class","inst" + prize_i);
	obj.appendChild(e);
	
	var e = document.createElement("p");
	e.innerHTML = "<label for=\"date\"" + prize_i +" class=\"uname\">Date</label><input class=\"form-control\" id=\"m\"" + prize_i +" type=\"date\" />";
	e.setAttribute("class","inst" + prize_i);
	obj.appendChild(e);
	prize_i+=1;
}
function resetPrize(){
	prize_i-=1;
	var obj = document.getElementById('prizes');
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Contact text field.

------------------------------------------------------------------------------
*/

var industry_i = 0;
function industryFunction(){
	var obj = document.getElementById('industry');
	var d = document.createElement("p");
	d.setAttribute("class","company" + industry_i);
	d.innerHTML ="<label for=\"company\"" + industry_i + " class=\"uname\">Company</label><input class=\"form-control\" id=\"company\""+ industry_i+" type=\"text\">";
	obj.appendChild(d);
	var e = document.createElement("p");
	e.setAttribute("class","coll_" + industry_i);
	e.innerHTML = "<label for=\"coll\"" + industry_i +" class=\"uname\">Nature of collaboration</label><input class=\"form-control\" id=\"coll\"" + industry_i +" type=\"text\" />";
	obj.appendChild(e);
	industry_i+=1;
}
function resetIndustry() {
	industry_i-=1;
	var obj = document.getElementById('industry');
	obj.removeChild(obj.lastChild);
	obj.removeChild(obj.lastChild);
}
