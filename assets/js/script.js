// Check off todos by clicking
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});

// Click on X to delete todos
$('ul').on('click', 'span', function (e) {
    $(this).parent().fadeOut(250, function() {
        $(this).remove();
    });
    e.stopPropagation();
});
// Add new todo
$('input[type="text"]').keypress(function(e) {
    if(e.which === 13) {
        let newTodo = $(this).val();
        $(this).val('');
        $('ul').append(`<li><span><i class="fa fa-trash"></i></span>${newTodo}</li>`);
    }
});
