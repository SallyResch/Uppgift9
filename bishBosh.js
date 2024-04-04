function generateBishBosh() {
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