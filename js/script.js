function tipCalculate(slider, bill){
  var totalBill = document.getElementById('bill').value;
  var tipPerc = getPercChecked();
  var tipAmount = totalBill * tipPerc;

  var tipBox = document.getElementById('tipamount');
  tipBox.innerHTML = "$" + tipAmount;
}

function getPercChecked(){
  var percBtns = document.getElementsByClassName('tip-btn');
  for(var i=0; i < percBtns.length; i++){
    if(percBtns[i].checked){
      return percBtns[i].value;
    }
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