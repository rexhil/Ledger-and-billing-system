function sh_submit_input(){
  var empty = input_test();
  if (empty) {
      $('#submit').attr('disabled', 'disabled');
    }
    else {
      $('#submit').removeAttr('disabled');
  }
}
function sh_submit_input_select(){
  var input_empty = input_test();
  var select_empty = select_test();
  console.log(input_empty);
  console.log(select_empty);
  if (input_empty || select_empty) {
      $('#submit').attr('disabled', 'disabled');
    }
    else {
      $('#submit').removeAttr('disabled');
  }
}

function input_test() {
  var empty = false;
  $('input').each(function() {
      if ($(this).val() == '' ) {
          empty = true;
      }
  });
  return empty;
}
function select_test(){
  var empty = false;
  $('select').each(function() {
      if ($(this).val() == '' ) {
          empty = true;
      }
  });
  return empty;
}
