function tipCalculate(){
	var totalBill = document.getElementById('bill').value;

	var percBTns = document.getElementsByClassName('tip-btn');
	
	for (var i=0; i<percBTns.length; i++){
		if (percBTns[i].checked){
			var tipPerc = percBTns[i].value;
		}
	}
	
	var tipTotal = totalBill * tipPerc;

	var tipBox = document.getElementById('tipamount');
	tipBox.innerHTML = '$'+ tipTotal;

	}

	//copy submit button and create a function to reset the calculator
	// check to false
	// leave the value to zero
	