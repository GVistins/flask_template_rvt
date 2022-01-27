
function Add_A(){
  a = document.getElementById("input_Nosaukums_A");
  b = document.getElementById("input_Adrese");

  const aData = []
  aData.push(a.value);
  aData.push(b.value);
  console.log(aData)

  a.value="";
  b.value="";

  var x = aData;
  x.style.display = "block";
}

function Add_V(){
  a = document.getElementById("input_Nosaukums_V");
  b = document.getElementById("input_Saisinajums");

  const vData = []
  vData.push(a.value);
  vData.push(b.value);
  console.log(vData)

  a.value = "";
  b.value = "";

  var x = vData;
  x.style.display = "block";
}

function Add_C() {
  a = document.getElementById("input_S_Datums");
  b = document.getElementById("input_B_Datums");
  c = document.getElementById("input_Valsts_No");
  d = document.getElementById("input_Valsts_Uz");
  e = document.getElementById("input_Cena");
  f = document.getElementById("input_Vietas_Pieejamas");

  const cData = []
  cData.push(a.value);
  cData.push(b.value);
  cData.push(c.value);
  cData.push(d.value);
  cData.push(e.value);
  cData.push(f.value);
  console.log(cData)
  
  a.value = "";
  b.value = "";
  c.value = "";
  d.value = "";
  e.value = "";
  f.value = "";

  var x = cData;
  x.style.display = "block";
}


function Celot_prieks(){
  if(document.getElementById("ag").className == "active"){
    Add_A();
  }
  else if(document.getElementById("val").className == "active"){
    Add_V();
  }
  else if(document.getElementById("cel").className == "active"){
    Add_C();
  }
}