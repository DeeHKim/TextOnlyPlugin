var p = $('p');
var body = $('body');
var items = $("*");
$('body').find('*').remove();



for(var i = 0; i < items.length; i++){
  if(items[i].nodeName === "IMG"){
    $('body').append(items[i]);
  }
}
