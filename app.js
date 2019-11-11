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
