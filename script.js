//enable tooltip
$(document).tooltip();
//make items draggable
$("li.listItems").draggable({
    containment:"#container",
    scroll:false
});

$("#list ul").sortable({
    items:"li:not('.day, .addItem')",
    connectWith:"ul",
    dropOnEmpty: true,
    placeholder:"emptySpace",
    containment:"#container"
});


$(".addItem input").keydown(function(e){
    if (e.keyCode == 13){
        var item = $(this).val();
        $(this).parent().parent().append('<li class="listItems">'+item+'</li>');
        $(this).val("");
    }
});
$('#deleter').droppable({
    drop: function(event, ui){
        ui.draggable.remove();
    }
});