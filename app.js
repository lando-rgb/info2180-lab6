$(document).ready(function () {
  $('#btn').click(function () {
    $.ajax({
        url: 'superheroes.php',
      success: function (result) {
        $('#container').html(result)
        alert(result);
      }
    })
  })
})
