let trativa = [];
let txt = "";

document.getElementById("btn").addEventListener("click", function () {
  listaTxt = document.getElementById("lista").textContent;
  txtTrativa = document.getElementById("trativa").value;
  if (!trativa.includes(txtTrativa)) {
    trativa.push(txtTrativa);
    txt = trativa.join(" ");
    document.getElementById("lista").textContent = txt;
  } else {
    console.log("trativa já foi adicionada");
  }

  console.log(trativa);
});
