function calculate(){
    var quality = document.getElementById("quality").value;
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("people").value;
    
    if (bill === "" || quality === 0 ){
        return alert("Please enter the required value");
    }

    if (people === "" || people <= 1){
        people = 1;
        document.getElementById("each").style.display = "none";
    } else{
        document.getElementById("each").style.display = "block";
    }

    var total = (quality * bill) / people;
    total = total.toFixed(2);
    document.getElementById("actual").innerHTML = total;
}
var click = document.getElementById("click");
click.addEventListener("click", function(){calculate();
});