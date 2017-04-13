//By: InventorTechie
//Simple JavaScript Function to multiply a base qty * a predefined value.

function Calculate()
{
  var money = 25
  var monthdays = 31
  var num = document.getElementById('Qty').value;
  var dailyresult = num * money;
  var monthlyresult = num * money * monthdays
  document.getElementById('daily').value = ("$") + dailyresult;
  document.getElementById('monthly').value = ("$") + monthlyresult;
}
