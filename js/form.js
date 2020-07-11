function submitForm()
{
  var data = document.getElementById('contact');
  var text = "Dear  "+ data.elements[0].value + " .My phone number is 660 614 918. In a few minutes I confirm the meeting for the day " + data.elements[3].value + " at " + data.elements[4].value + " .Thanks for contacting me!"
  alert(text);
}