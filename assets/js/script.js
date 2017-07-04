// Check off todos by clicking
$('li').click(function () {
    $(this).toggleClass('completed');
});

// Click on X to delete todos
$('span').click(function (e) {
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
    e.stopPropagation();
});
