document.addEventListener('DOMContentLoaded', () => {
    const glossaryData = [
        { term: "Картер", description: "Глвынй герой  ." },
        { term: "Кен ", description: "Имя главного героя" },
        { term: "Ойлерз»", description: "Школьная команда" },
        { term: "Жанр фильма", description: "Биография, драма." },
        { term: "Локация", description: "Америка" },
        { term: "Автор ", description: "Томас Картер" },
        { term: "Штат", description: "Калифорния" },
        { term: "Мораль ", description: "Развиваться несмотря ни на что, бороться до конца ." },
        { term: "Блок-шот", description: " касание или смена направления полёта мяча" },
        { term: "Бэкдор кат", description: "элемент игры в нападении, когда игрок без мяча двигается за спину своего защитника" }
    ];

    const searchInput = document.getElementById('search-input');
    const glossaryList = document.getElementById('glossary-list');
    const descriptionText = document.getElementById('description-text');

    function displayGlossary(terms) {
        glossaryList.innerHTML = '';
        terms.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.term;
            listItem.addEventListener('click', () => {
                descriptionText.textContent = item.description;
            });
            glossaryList.appendChild(listItem);
        });
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredTerms = glossaryData.filter(item =>
            item.term.toLowerCase().includes(query)
        );
        displayGlossary(filteredTerms);
    });

    displayGlossary(glossaryData);
});
