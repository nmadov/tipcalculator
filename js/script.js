function tipCalculate(){
	var totalBill = document.getElementById('bill').value;

	//console.log(isNaN(totalBill));



	var percBTns = document.getElementsByClassName('tip-btn');
	
	for (var i=0; i<percBTns.length; i++){
		if (percBTns[i].checked){
			var tipPerc = percBTns[i].value;
		}
	}
	

	if (!isNaN(totalBill)){
		 var tipTotal = Math.floor(totalBill * tipPerc * 100)/100;
		 var tipBox = document.getElementById('tipamount');
		 tipBox.innerHTML = '$'+ tipTotal;
	} else { 
		alert('Please enter numbers only'); resetCalc();
	}

}

	function resetCalc(){
  document.getElementById('bill').value = '';

  var percBtns = document.getElementsByClassName('tip-btn');
  for(var i=0; i < percBtns.length; i++){
    percBtns[i].checked = false;
  }

  var tipBox = document.getElementById('tipamount');
  tipBox.innerHTML = '$0.00';
}

	// function resetCalculator(){
	// 	var resetPage = document.getElementById('reset').onClick;

	// 	for (var i=0; )


	// }

	//copy submit button and create a function to reset the calculator
	// check to false
	// leave the value to zero
	