function dialogEvent(pck){
    let m = pck.getAttribute("data").split(',');
    document.getElementById('resultMessage').innerText = "";
    document.getElementById('modal').innerHTML = `<div id="dropShadow" class="displayNone dropShadow"></div><div id="dialog" class="displayNone dialog"><div id="dialogMessage">` + m[0] + `</div><div class="dialogButton"><div class="buttonC" onclick="dialogReceipt(0);">` + m[1] + `</div><div class="buttonC" onclick="dialogReceipt(1);">` + m[2] +`</div></div></div>`
    toggleDialog();
}

function toggleDialog(){
    document.getElementById('dropShadow').classList.toggle('displayNone');
    document.getElementById('dialog').classList.toggle('displayNone');
}
function clearModal(){ document.getElementById('modal').innerHTML = ""; }