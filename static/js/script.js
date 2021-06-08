
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

  v_nosaukums = a;
  v_saisinajums = b;

  console.log("Valsts: "+a.value)
  console.log("Valsts saīsinājums: "+b.value)

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

  c_sakuma_datums = a;
  c_beigu_datums = b;
  c_no_valsts = c;
  c_uz_valsts = d;
  c_cena = e;
  c_pieejamas_vietas = f;

  console.log("Sākuma datums: "+a.value);
  console.log("Beigu datums: "+b.value);
  console.log("Valsts (No): "+c.value);
  console.log("Valsts (Uz): "+d.value);
  console.log("Cena: "+e.value);
  console.log("Pieejamās vietas: "+f.value);

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