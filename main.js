var soma = 0

$(document).ready(function () {
    $('.botao-carrinho button').click(function () {
        $('.carrinho').slideToggle();
    });

    $('.items button').click(function () {
        $('.carrinho').slideDown();

        var article = $(this).closest('article'); 
        var nome = article.find('.nome').text(); 
        var preco = article.find('.preco').text();

        const novoitem = $('<tr></tr>')
        const trnome = $(`<td>${nome}</td>`);
        const trpreco = $(`<td>${preco}</td>`);
        
        $(trnome).appendTo(novoitem);
        $(trpreco).appendTo(novoitem);

        $(novoitem).appendTo('tbody');

        var total = 0;
        $('tbody tr').each(function () {
            var valorItem = parseFloat($(this).find('td').eq(1).text());
            total += valorItem;
        });

        $('tfoot').remove();

        var total = 0;
        $('.tabela tbody tr').each(function () {
            var valorItem = parseFloat($(this).find('td').eq(1).text().replace('R$ ', '').replace(',', '.'));
            if (!isNaN(valorItem)) {
                total += valorItem;
            }
        });

        $('.tabela tfoot .soma').text('R$ ' + total.toFixed(2).replace('.', ','));

        const novofoot = $('<tfoot></tfoot>');
        const trtotal = $('<th>Total</th>');
        const trsoma = $(`<th>R$ ${total.toFixed(2)}</th>`);
    
        trtotal.appendTo(novofoot);
        trsoma.appendTo(novofoot);
    
        novofoot.appendTo('table');

    });

});