$(document).ready(function () {
    $('#btn-buscar').click(function (e) { 
        e.preventDefault();
        const user = $('#user').val();
        const endpoint = `https://api.github.com/users/${user}`
        const botao = $(this)

        $(this).find('i').addClass('d-none');
        $(this).find('span').removeClass('d-none');

        $.ajax(endpoint).done(function(resposta) {
            console.log(resposta)
            const avatar = resposta.avatar_url
            const nome = resposta.name
            const username = resposta.login
            const seguindo = resposta.following
            const seguidores = resposta.followers
            const repositorios = resposta.public_repos
            const link = resposta.html_url

            $('#profile-avatar').attr('src', avatar);
            $('#Nome').text(nome);
            $('#user').val(username);
            $('#repositorios').text(repositorios);
            $('#seguidores').text(seguidores);
            $('#seguindo').text(seguindo);
            $('#link').attr('href', link);

            setTimeout(function() {
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            },2000)
        })
    });
});
