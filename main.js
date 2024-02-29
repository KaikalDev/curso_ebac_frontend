$(document).ready(function() {
    $('#form').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#tarefa').val();
        const novoItem = $('<li></li>');
        $(`<h4>${tarefa}</h4>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');

        $('#tarefa').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });
});

