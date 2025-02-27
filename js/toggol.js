document.getElementById("Add-money").style.display = "block";
document.getElementById("Cash-out").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {
    document.getElementById("Add-money").style.display = "block";
    document.getElementById("Cash-out").style.display = "none";
})

document.getElementById("cash-out-box").addEventListener("click", function () {
    document.getElementById("Add-money").style.display = "none";
    document.getElementById("Cash-out").style.display = "block";
})