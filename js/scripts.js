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