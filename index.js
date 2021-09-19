function addRow(tableID) {
	var x = document.getElementById(tableID);
	
	var new_row = x.rows[1].cloneNode(true); // deep clone the targeted row
	
	var len = x.rows.length; // get the total number of rows
	
	// set the innerHTML of the first row 
	new_row.cells[0].innerHTML = len;

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
	var grade_arr = document.getElementsByName("g");
	var credit_arr = document.getElementsByName("c");

	var grade_num = new Array(grade_arr.length);
	var credit_num = new Array(credit_arr.length);
	var total = 0;
	var total_credits = 0;

	for(var t = 0; t < credit_arr.length; t++) {
		if(credit_arr[t].value == "" || credit_arr[t].value == null) {
			credit_num[t] = 0;
		}
		else {
			credit_num[t] = parseFloat(credit_arr[t].value);
		}
	}

	for(var i = 0; i < grade_arr.length; i++) {
		if(grade_arr[i].value == "S" || grade_arr[i].value == "s")
			grade_num[i] = 10;
		else if(grade_arr[i].value == "A" || grade_arr[i].value == "a")
			grade_num[i] = 9;
		else if(grade_arr[i].value == "B" || grade_arr[i].value == "b")
			grade_num[i] = 8;
		else if(grade_arr[i].value == "C" || grade_arr[i].value == "c")
			grade_num[i] = 7;
		else if(grade_arr[i].value == "D" || grade_arr[i].value == "d")
			grade_num[i] = 6;
		else if(grade_arr[i].value == "E" || grade_arr[i].value == "e")
			grade_num[i] = 5;
		else if(grade_arr[i].value == "U" || grade_arr[i].value == "u")
			grade_num[i] = 0;
		else if(grade_arr[i].value.length == 0)
			grade_num[i] = 0;
	}

	for(var j = 0; j < credit_arr.length; j++) {
		total += credit_num[j] * grade_num[j];
		total_credits += credit_num[j];
	}

	var gpa = total / total_credits;

	document.getElementById("output1").innerHTML = gpa.toFixed(2);
}

function calculateCGPA() {
	var gpa_arr = document.getElementsByName("gpa");
	var totcredit_arr = document.getElementsByName("totcred");

	var gpa_num = new Array(gpa_arr.length);
	var totcredit_num = new Array(totcredit_arr.length);
	var total = 0;
	var total_credits = 0;

	for(var i = 0; i < gpa_arr.length; i++) {
		if(gpa_arr[i].value.length == 0) {
			gpa_num[i] = 0;
		}
		else {
			gpa_num[i] = parseFloat(gpa_arr[i].value);
		}
	}

	for(var t = 0; t < totcredit_arr.length; t++) {
		if(totcredit_arr[t].value.length == 0) {
			totcredit_num[t] = 0;
		}
		else {
			totcredit_num[t] = parseInt(totcredit_arr[t].value);
		}
	}

	for(var j = 0; j < totcredit_arr.length; j++) {
		total += gpa_num[j] * totcredit_num[j];
		total_credits += totcredit_num[j];
	}

	var cgpa = total / total_credits;

	document.getElementById("output2").innerHTML = cgpa.toFixed(2);
}