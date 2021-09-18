function addRow(tableID) {
	var x = document.getElementById(tableID);
	
	var new_row = x.rows[1].cloneNode(true); // deep clone the targeted row
	
	var len = x.rows.length; // get the total number of rows
	
	// set the innerHTML of the first row 
	// new_row.cells[0].innerHTML = len;

	// grab the input from the first cell and update its ID and value
	var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
	inp1.id += len;
	inp1.value = '';

	// grab the input from the first cell and update its ID and value
	var inp2 = new_row.cells[2].getElementsByTagName('input')[0];
	inp2.id += len;
	inp2.value = '';

	x.appendChild(new_row); // append the new row to the table
}

function calculateGPA() {
	var grade_arr = getElementsByName('grd');
	var credit_arr = getElementsByName('cred');

	var grade_num = new Array(grade_arr.length);
	var gpa = 0.0;
	var total = 0;
	var total_credits = 0;

	for(var i = 0; i < grade_arr.length; i++) {
		if(grade_arr[i].value == 'S')
			grade_num[i] = 10;
		else if(grade_arr[i].value == 'A')
			grade_num[i] = 9;
		else if(grade_arr[i].value == 'B')
			grade_num[i] = 8;
		else if(grade_arr[i].value == 'C')
			grade_num[i] = 7;
		else if(grade_arr[i].value == 'D')
			grade_num[i] = 6;
		else if(grade_arr[i].value == 'E')
			grade_num[i] = 5;
		else if(grade_arr[i].value == 'U')
			grade_num[i] = 0;
	}

	for(var j = 0; j < credit_arr.length; j++) {
		total += parseInt(credit_arr[j].value) * grade_num[j].value;
		total_credits += parseInt(credit_arr[j].value);
	}

	gpa = total / total_credits;

	document.getElementById("output").value = gpa;
}