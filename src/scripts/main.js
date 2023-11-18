document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('[data-faq-question]'); 

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta, false);
    };

    function abreOuFechaResposta(elemento) {
        const classe = 'faqs__questions__items--is-open';
        const elementoPai = elemento.target.parentNode;
        const itemClass = elementoPai.className;

        for (i = 0; i < questions.length; i++) {
            questions[i].classList.remove(classe);
        };

        if (itemClass.search(classe) < 0) {
            elementoPai.classList.toggle(classe);
        }
    }
})