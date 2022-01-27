
function Add_A(){
  a = document.getElementById("input_Nosaukums_A");
  b = document.getElementById("input_Adrese");
  aNosaukums = a.value;
  aAdrese = b.value;

  const aData = []
  aData.push(aNosaukums);
  aData.push(aAdrese);
  console.log(aData)

  a.value="";
  b.value="";
}

function Add_V(){
  a = document.getElementById("input_Nosaukums_V");
  b = document.getElementById("input_Saisinajums");

  vNosaukums = a.value;
  vSaisinajums = b.value;


  const vData = []
  vData.push(vNosaukums);
  vData.push(vSaisinajums);
  console.log(vData)

  a.value = "";
  b.value = "";
}

function Add_C() {
  a = document.getElementById("input_S_Datums");
  b = document.getElementById("input_B_Datums");
  c = document.getElementById("input_Valsts_No");
  d = document.getElementById("input_Valsts_Uz");
  e = document.getElementById("input_Cena");
  f = document.getElementById("input_Vietas_Pieejamas");

  c_Sakuma_Datums = a.value;
  c_Beigu_Datums = b.value;
  c_No_Valsts = c.value;
  c_Uz_Valsts = d.value;
  c_Cena = e.value;
  c_Pieejamas_Vietas = f.value;

  const cData = []
  cData.push(c_Sakuma_Datums);
  cData.push(c_Beigu_Datums);
  cData.push(c_No_Valsts);
  cData.push(c_Uz_Valsts);
  cData.push(c_Cena);
  cData.push(c_Pieejamas_Vietas);
  console.log(cData)
  
  a.value = "";
  b.value = "";
  c.value = "";
  d.value = "";
  e.value = "";
  f.value = "";
}


function Appear(){
  var x = document.getElementById("aNosaukums");
  x.style.display = "block";
}

function Agentura(){
  Add_A();
  Appear();
}