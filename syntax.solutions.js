
/**
 * Refactoring number 1
 *
 * @param {Number} price
 * @param {String} unit
 * @returns {String}
 */
function createPriceLabel(price=0, unit='gallon') {
  return `$${price.toFixed(2)} per ${unit}`;
}

/**
 * Refactoring number 2
 *
 * @param {Array} array
 * @param {Any} valueToCheck
 * @returns {Boolean}
 */
function all(array=[], valueToCheck) {
  return array.every(item => item === valueToCheck);
}

/**
 * Refactoring number 3
 *
 * @param {Array} array
 * @returns {Boolean}
 */
function areAllItemsUnique(array=[]) {
  function isUniqueItem(item) {
    const itemRemovedFromArray = array.filter(j => j !== item);
    return itemRemovedFromArray.length === (array.length - 1);
  }
  return array.every(isUniqueItem);
}

/**
 * Refactoring number 4
 *
 * @param {Array} scores
 * @returns {Number}
 */
function calculateAverage(scores=[]) {
  if (!scores.length) return 0;
  let total = 0;
  scores.forEach(score => total += score);
  return total / scores.length;
}

/**
 * Refactoring number 5
 *
 * @param {Number} n
 * @returns {String}
 */
function isPalindromeNumber(number=10000) {
  if (number > 99999 || number < 10000) {
    return 'Incorrect input';
  }
  const firstDigit = Math.trunc(number / 10000);
  const lastDigit = number % 10;
  const firstAndLastMatch = firstDigit === lastDigit;

  // remove first and last digit from number
  number = number % 10000;
  number = Math.trunc(number / 10);

  const secondDigit = Math.trunc(number / 100);
  const secondToLastDigit = number % 10;
  const secondDigitsMatch = secondDigit === secondToLastDigit;

  return (firstAndLastMatch && secondDigitsMatch)
    ? 'Yes, it is a palindrome'
    : 'No, not a palindrome';
}

/**
 * Refactoring number 6
 *
 * @param {String} content
 * @param {Boolean} active
 * @returns {String}
 */
function getActiveDiv(content='', active=false) {
  return `
    <div class="${active ? 'is-active' : 'is-hidden'}">
      ${content}
    </div>
  `;
}

/**
 * Refactoring number 7
 *
 * @param {String} firstName
 * @param {String} familyName
 * @param {Number} age
 * @param {String} eyeColor
 * @returns {Object}
 */
function makePerson(firstName='', familyName='', age=0, eyeColor='') {
  const removeSpacesRegex = /(?=\w?)(\s)$|^\s/g;

  return {
    firstName,
    familyName,
    age,
    eyeColor,
    fullName: `${firstName} ${familyName}`.replace(removeSpacesRegex, ''),
  };
}


/* * * * * * * * * * * * * * * * * * * * * * * *
  generateDietaryHtmlPage refactoring solution
* * * * * * * * * * * * * * * * * * * * * * * */

function compact(array) {
  return array.filter(Boolean);
}

function sumPropertyInArray(array, property) {
  return array.reduce(
    (total, item) => total += item[property],
    0,
  );
}

function calculateDietarySummary(victuals) {
  return {
    energy: sumPropertyInArray(victuals, 'energy'),
    protein: sumPropertyInArray(victuals, 'protein'),
    carbs: sumPropertyInArray(victuals, 'carbs'),
    fibre: sumPropertyInArray(victuals, 'fibre'),
    fat: sumPropertyInArray(victuals, 'fat'),
    vitamins: sumPropertyInArray(victuals, 'vitamins'),
    minerals: sumPropertyInArray(victuals, 'minerals'),
  }
}

function calculateVictuals(thingsConsumed) {
  return thingsConsumed.filter(thing => thing.isEdible);
}

function generateVictualsTableHtml(victuals) {
  return `
    <table>
      <thead class="header-row">
        <tr>
          <th>Food</th>
          <th>Amount</th>
          <th>Calories</th>
        </tr>
      </thead>
      <tbody class="servings-body">
        ${victuals.map(victual => `
          <tr>
            <td>${victual.name}</td>
            <td>${victual.amount}</td>
            <td>${victual.calories}</td>
          </tr>
        `).join('')}
      <tbody>
    </table>
  `;
}

function generateDietarySummaryHtml(summary) {
  return `
    <div class="summary">
      <h3>Summary</h3>
      <span>Energy - ${summary.energy} kcal</span>
      <span>Protein - ${summary.protein} % target</span>
      <span>Carbs - ${summary.carbs} % target</span>
      <span>Fibre - ${summary.fibre} % target</span>
      <span>Lipids - ${summary.fat} % target</span>
      <span>Vitamins - ${summary.vitamins} % target</span>
      <span>Minerals - ${summary.minerals} % target</span>
    </div>
  `;
}

function generateDietaryTableAndSummary(victuals, summary) {
  return `
    <section>
      <h2>Servings list</h2>
      ${generateVictualsTableHtml(victuals)}
      ${generateDietarySummaryHtml(summary)}
    </section>
  `;
}

/**
 * Refactoring number 8
 *
 * @param {Array} thingsEaten
 * @param {Array} thingsDrank
 * @returns {String}
 */
function generateDietaryHtmlPage(thingsEaten=[], thingsDrank=[]) {
  const thingsConsumed = compact(thingsEaten)
    .concat(compact(thingsDrank))

  const victuals = calculateVictuals(thingsConsumed);
  const summary = calculateDietarySummary(victuals);

  return generateDietaryTableAndSummary(victuals, summary);
}
