document.addEventListener("DOMContentLoaded", function () {
    // Button Format
    //  ["Message to Display", "Proceed Text", "Cancel Text"]
    let buttons = [
        ['Are you sure you want to continue?', 'Yes', 'Cancel'],
        ['This is a custom Dialog prompt!', 'Okay', 'Cool'],
        ['Dynamically Load buttons with JS', 'Vanilla', 'JQuery']
    ];
    buildButtons(buttons);
});

function buildButtons(btns) {
    if(btns.length > 0){
        document.body.innerHTML = "<div id='modal'></div>" + document.body.innerHTML;
        let buttonString = "";
        for (let i = 0; i < btns.length; i++) {
            buttonString += '<div class="buttonC" data="' + btns[i].toString() + '" onclick="dialogEvent(this);">Click Me</div>';
        }
        document.getElementById("mainComponent").innerHTML = buttonString + document.getElementById("mainComponent").innerHTML + "<div id='resultMessage'></div>";
    } else {
        document.getElementById("mainComponent").innerHTML = "There was an error loading the buttons...";
    }
}
function dialogReceipt(res) {
    let resp = document.getElementsByClassName('dialogButton')[0].children[res].innerText;
    toggleDialog(); clearModal();
    document.getElementById('resultMessage').innerText = `You selected '` + resp + `'`;
}