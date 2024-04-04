function validateNumbers() {
    var endNumber = parseInt(document.getElementById("endNumber").value);
    var bishNumber = parseInt(document.getElementById("bish").value);
    var boshNumber = parseInt(document.getElementById("bosh").value);

    if (endNumber < 0 || bishNumber < 0 || boshNumber < 0) {
        alert("Input numbers cannot be negative. Please enter positive numbers.");
        return false;
    }
    
    return true;
}
function generateBishBosh() {
    if (!validateNumbers()) {
        return;
    }
    var endNumber = parseInt(document.getElementById("endNumber").value);
    var bishNumber = parseInt(document.getElementById("bish").value);
    var boshNumber = parseInt(document.getElementById("bosh").value);

    document.getElementById("results").innerHTML = "";

    for (var i = 1; i <= endNumber; i++) {
        var output = ""; 
        
       
        if (i % bishNumber === 0) {
            output += "Bish";
        }
        if (i % boshNumber === 0) {
            output += "Bosh";
        }
        
        
        if (output === "") {
            output = i;
        }
        
       
        document.getElementById("results").innerHTML += output + ", ";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('input[type="submit"]').addEventListener('click', generateBishBosh);
});