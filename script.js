
const languageDropdown = document.getElementById("language-dropdown");
const elements = document.querySelectorAll("[data-lang]");

languageDropdown.addEventListener("change", () => {
    const selectedLanguage = languageDropdown.value;
    changeLanguage(selectedLanguage);
});


function changeLanguage(lang) {
    // Oculte todos os elementos
    elements.forEach((element) => {
        element.style.display = "none";
    });

    // Mostre apenas os elementos no idioma selecionado
    const selectedElements = document.querySelectorAll(`[data-lang="${lang}"]`);
    selectedElements.forEach((element) => {
        element.style.display = "block";
    });
}

// Inicialmente, mostre apenas os elementos em inglês
changeLanguage("pt");

// Função para definir o idioma em um cookie
function setLanguageCookie(lang) {
    document.cookie = `selectedLanguage=${lang}; expires=Sun, 1 Jan 2024 00:00:00 UTC; path=/`;
}
