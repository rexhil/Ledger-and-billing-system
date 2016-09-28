function refreshEventListener(){
  $('input').off();
  console.log('refresh');
  $('input').keyup(function() {
    sh_submit_input();
  });
}

$(document).ready(function(){
  refreshEventListener();
  var i=1;
	$("#add_row").click(function(){
	  if(i<8)
	  {
	 $('#addr'+i).html("<td class='sn'>"+ (i+1) +"<td id='part'><input name='p[]' type='text' placeholder='Particular' class='part' required /> </td><td><input  name='pi[]' type='text' placeholder='pics'  class='form-control input-md' required /></td><td><input name='w[]' type='text' placeholder='Weight' class='form-control input-md' required /> </td><td><input  name='r[]' type='text' placeholder='Rate'  class='form-control input-md' required /></td>");
	 i++;
	 }
   else {
     alert('Maximum rows created !!!');
   }
   sh_submit_input();
   refreshEventListener();
	});
	$("#delete_row").click(function(){
	  if(i>1){
	$("#addr"+(i-1)).html('');
	i--;
	}
  else {
    alert('Cannot delete any more rows');
  }
  sh_submit_input();
  refreshEventListener();
	});
});
