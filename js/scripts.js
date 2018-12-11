function loadCourses(element){
	var courseType = element.getAttribute('data-courseType');
	var courses = document.getElementsByClassName("courseSection");
	for(var i = 0; i < courses.length; i++)
	{
		var thisCourse = courses[i];
	  	if(thisCourse.getAttribute('data-courseType') == courseType){
	  		thisCourse.style.display = "block";
	   	}
	   	else{
	   		thisCourse.style.display = "none";
	   	}
	}
}

function loadProject(element){
	var projectTitle = element.getAttribute('data-projectTitle');
	var projects = document.getElementsByClassName("projectSection");
	for(var i = 0; i < projects.length; i++)
	{
		var thisProject = projects[i];
	  	if(thisProject.getAttribute('data-projectTitle') == projectTitle){
	  		thisProject.style.display = "block";
	   	}
	   	else{
	   		thisProject.style.display = "none";
	   	}
	}
	document.getElementById("projectImage").src = element.getAttribute('data-imageURL');
}

function loadOfficer(element){
	var officer = element.getAttribute('data-officer');
	var officers = document.getElementsByClassName("projectSection");
	for(var i = 0; i < officers.length; i++)
	{
		var thisOfficer = officers[i];
	  	if(thisOfficer.getAttribute('data-officer') == officer){
	  		thisOfficer.style.display = "block";
	   	}
	   	else{
	   		thisOfficer.style.display = "none";
	   	}
	}
	document.getElementById("officerImage").src = element.getAttribute('data-imageURL');
}