// check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// click on trash can to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// creating new todo

// add a listener that fires when we press the enter key
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

//toggling the input
$(".fa-pencil-square-o").click(function() {
	$("input[type='text']").fadeToggle();
})
