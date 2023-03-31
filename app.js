function calc(){
  let value = document.getElementById("option").value;
  let num = document.getElementById("num").value;
  if(value == "fitrahW"){
    document.getElementById("answer").value ="Rs. " + num * 300;
  }
  else if(value == "fitrahB"){
    document.getElementById("answer").value ="Rs. " +  num * 800;
  }
  else if(value == "fitrahD"){
    document.getElementById("answer").value ="Rs. " + num * 2800;
  }
  else if(value == "fitrahR"){
    document.getElementById("answer").value ="Rs. " + num * 6400;
  }
  else if(value == "zakatOnRs"){
    document.getElementById("answer").value ="Rs. " + num / 40;
  }
  else if(value == "zakatOnGold"){
    document.getElementById("answer").value ="Rs. " + (num*207700) / 40;
  }
  else if(value == "zakatOnSilver"){
    document.getElementById("answer").value ="Rs. " + (num*2471) / 40;
  }
}