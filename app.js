<<<<<<< HEAD
window.onload = function () {
  var btn = document.querySelector('#button')
  var httpRequest

  btn.addEventListener('click', function (element) {
    element.preventDefault()

    httpRequest = new XMLHttpRequest()
    var search = document.querySelector('#searchArea').value;

    // GET Request
    var url = 'superheroes.php'
    httpRequest.onreadystatechange = searchFor
    httpRequest.open('POST', url)
    // setting the Content-Type
    httpRequest.setRequestHeader(
      'Content-Type',
      'application/x-www-form-urlencoded'
    )
    httpRequest.send('search=' + encodeURIComponent(search))
  })

  function searchFor () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var input = httpRequest.responseText
        var result = document.querySelector('#resultArea')
        result.innerHTML = input
      } else {
        alert('There was a problem with the request.')
      }
    }
  }
}
=======
$(document).ready(function () {
  $('#btn').click(function () {
    $.ajax({
        url: 'superheroes.php',
      success: function (result) {
        alert(result);
      }
    })
  })
})
>>>>>>> 98f47d5071ef4d351795f664ba54e48a8b90d332
