$(document).tooltip();
$("ul li").draggable();
$("#list ul").sortable({
    items:"li:not('.day, .addItem')",
    connectWith:"ul",
    dropOnEmpty: true,
    placeholder:"emptySpace"
});


$(".addItem input").keydown(function(e){
    if (e.keyCode == 13){
        var item = $(this).val();
        $(this).parent().parent().append('<li>'+item+'</li>');
        $(this).val("");
    }
});
$('#deleter').droppable({
    drop: function(event, ui){
        ui.draggable.remove();
    }
});