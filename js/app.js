function $ (value) {
  return document.getElementById(value);
}

function calculate()
{
  //grab values from form
  var total = $('billTotal').value;
  var percent = $('tipPercent').value;
  var people = $('people').value;

  //caluculate cost per person and set text to total only if greater than 0. otherwise, set to 0
  perPerson = ((Number(total) + Number(total*percent))/people).toFixed(2);
  if (perPerson > 0)
  {
    $('output').innerText = perPerson;
  }
  else
  {
    $('output').innerText = 0;
  }

}
