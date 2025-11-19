// Espera o documento carregar para rodar o script
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Seleciona todos os links dentro do menu de navegação
    const navLinks = document.querySelectorAll('.nav-menu li a');

    // 2. Adiciona um "ouvinte" de clique para cada link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            
            // 3. Remove a classe 'active-link' de TODOS os links
            navLinks.forEach(nav => nav.classList.remove('active-link'));
            
            // 4. Adiciona a classe 'active-link' APENAS ao link que foi clicado
            this.classList.add('active-link');
        });
    });

});