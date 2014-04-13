$.indexwin.open();
var needclear = false;
var focused;

function focussearch(){
    $.search_mask.hide();
    $.search.focus();
}

$.indexwin.addEventListener('androidback', function(e) {
    if (focused == true) {
        $.search.blur();
    } else {
        $.homewin.close();
    }
});
$.indexwin.addEventListener('open', function(e) {
	$.search.value = "";
    $.search.blur();
});
$.search.addEventListener('return', function(e) {
    if (focused == true) {
        $.search.blur();
    }
});
$.search.addEventListener("blur",function(){
    //Ti.API.info("blurring");
    if (focused == true) {
        $.search.hide();
        setTimeout(function(){$.search.show();},500);
        focused = false;
        if ($.search.value == ""){
            $.search_mask.show();
        }
    }
});
$.search.addEventListener("focus",function(){
    focused = true;
    //Ti.API.info("focusing");
    if (needclear == true){
        $.search.value ="";
        needclear =  false;
    }
    $.search.show();
});

/* you can use this function if you need to trigger filter event e.g. pressing a button to trigger filtering a certain keyword */
function searchthis(e){
  $.search.value = "keyword to search";
  $.search.hide();
  $.search.show();
  focused = false;
  needclear = true;
}

/* remember, anytime you need to blur the searchbar, now you simply call $.search.blur(); */