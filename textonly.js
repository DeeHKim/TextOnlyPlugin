var p = $('p');
var body = $('body');
var items = $("*");
$('body').find('*').remove();



for(var i = 0; i < items.length; i++){
  if(items[i].nodeName === "P" || items[i].nodeName === "H1" || items[i].nodeName === "H2" || items[i].nodeName === "H3" || items[i].nodeName === "H4" || items[i].nodeName === "H5"){
    $('body').append(items[i]);
  }
}
