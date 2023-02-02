const form = document.querySelector('#search-form');
const searchBar = document.querySelector('#search-bar');
const resultsContainer = document.querySelector('#results-container');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchBar.value;

  fetch('dictionary.json')
    .then(response => response.json())
    .then(data => {
      const wordList = data.words;
      const results = wordList.filter(word => word.english === searchTerm || word.spanish === searchTerm);

      if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
      }

      const english = results[0].english;
      const spanish = results[0].spanish;
      const additionalInfo = results[0].additionalInfo;

      resultsContainer.innerHTML = `
        <p>English: ${english}</p>
        <p>Spanish: ${spanish}</p>
        <p>Additional Information: ${additionalInfo}</p>
      `;
    });
});
