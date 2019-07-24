
/**
 * Refactoring number 1
 *
 * 1. Fix the indentation, add newlines and fix the line length
 * 2. Use default parameters
 * 3. Use a template string instead of concatenation
 * 4. Remove the unecessary variable by returning the value
 *
 * HINT:
 * - this can be refactored to 1 line of code
 *
 * @param {Number} price
 * @param {String} unit
 * @returns {String}
 */
function createPriceLabel(price, unit) {
  if (!price) { price = 0; } unit = unit || 'gallon'; let LABEL = "$" + price.toFixed(2) + " per " + unit; return LABEL;
}

/**
 * Refactoring number 2
 *
 * 1. Fix the indentation, add newlines and fix the line length
 * 2. Use default parameters
 * 3. Refactor from loop to an array method with an arrow function
 * 4. Use semi-colons
 *
 * HINT:
 * - do any array methods return booleans?
 * - Can you use an implicit return within the array method's callback?
 * - this can be refactored to 1 line of code
 *
 * @param {Array} array
 * @param {Any} valueToCheck
 * @returns {Boolean}
 */
function all(array, valueToCheck) {
  array = array || []
  let index = 0; while (index < array.length) {
    if (array[index] !== valueToCheck) { return false };
    index++;
  }; return true
}

/**
 * Refactoring number 3
 *
 * 1. Fix the indentation, add newlines and fix the line length
 * 2. Use default parameters
 * 3. prefer `const` over `let` when possible
 * 4. Variable names should be camelCase
 * 5. within filter, don't return true if you can return the condition
 * 6. use arrow function with implicit return inside filter
 * 7. extract callback function from `every` method and give it a meaningful name, such as `isUniqueItem`.
 * 8. use semi colons
 *
 * @param {Array} array
 * @returns {Boolean}
 */
function areAllItemsUnique(array) {
  if (!array) {
                array = [] }
  return array.every(function (Item) {
    let itemRemovedFromArray = array.filter(function (j) {
      if (j !== Item) {
        return true
      }
    })

    return itemRemovedFromArray.length === (array.length - 1)
  })
}

/**
 * Refactoring number 4
 *
 * 1. Fix the indentation, add newlines
 * 2. Use default parameters
 * 3. Prefer `const` over `let` when possible, never `var`
 * 4. Replace for loop with array method using arrow function, this can be a one-liner
 * 5. Remove the unecessary variable by returning the value
 * 6. Add missing semi colons
 *
 * @param {Array} scores
 * @returns {Number}
 */
function calculateAverage(scores) {
  scores = scores || []; if (!scores.length) return 0;
  var total = 0; for (var i = 0; i < scores.length; i++) {
    total += scores[i]
  }
  var avg = total / scores.length
  return avg
}

/**
 * Refactoring number 5
 *
 * 1. Fix the indentation, add newlines and line length
 * 2. Avoid single letter variable names that span multiple lines of code
 * 3. Use default parameters
 * 4. Prefer `const` over `let` when possible, never `var`
 * 5. Use camelCase variable names, not snake_case
 * 6. Add missing semi colons
 * 7. Return a ternary insted of an `if/else` with 2 return statements
 *
 * @param {Number} n
 * @returns {String}
 */
function isPalindromeNumber(n) {
  n = n || 10000;
    if (n > 99999 || n < 10000) { return 'Incorrect input'; }

  var first_digit = Math.trunc(n / 10000); var last_digit = n % 10; var first_and_last_match = first_digit === last_digit;

  // remove first and last digit from number
  n = n % 10000; n = Math.trunc(n / 10);

  var second_digit = Math.trunc(n / 100);
    var second_to_last_digit = n % 10;
    var second_digits_match = second_digit === second_to_last_digit;

  if (first_and_last_match && second_digits_match) { return 'Yes, it is a palindrome';
  } else { return 'No, not a palindrome'; }
}

/**
 * Refactoring number 6
 *
 * 1. Fix the indentation, add newlines and line length
 * 3. Use default parameters
 * 2. Use a template string instead of concatenation with newlines and indentation
 * 5. Use ternary instead of `if/else` to set variable
 * 6. Use the ternary inside tehmplate string instead of unecessary variable
 *
 * @param {String} content
 * @param {Boolean} active
 * @returns {String}
 */
function getActiveDiv(content, active) {
  content = content || '';
  active = active || false;
  var className = '';
  if (active) {
    className = 'is-active';
  } else {
    className = 'is-hidden';
  }
  return '' + '<div class="' + className + '">' + content + '</div>';
}

/**
 * Refactoring number 7
 *
 * 1. Use a template string instead of concatenation
 * 2. Use object shorthand instead of assignment and the dot property accessor
 * 3. Return the object instead of creating a temporary variable
 *
 * @param {String} firstName
 * @param {String} familyName
 * @param {Number} age
 * @param {String} eyeColor
 * @returns {Object}
 */
function makePerson(firstName='', familyName='', age=0, eyeColor='') {
  const obj = {
    firstName: firstName,
  }
  obj.familyName = familyName;
  obj.age = age;
  obj.eyeColor = eyeColor;
  obj.fullName = (firstName + ' ' + familyName).replace(/(?=\w?)(\s)$|^\s/g, '');
  return obj;
}

/**
 * Refactoring number 8
 *
 * This is a big one...
 *
 * 1. Fix the indentation and line lengths
 * 2. Move the nested function definition out of the "main" funcion, `generateDietaryHtmlPage`
 * 3. Reuse the `calcStuff` function for each of the summary properties
 * 4. Rename `calcStuff` to something more meaninful
 * 5. Set all of the summary object's properties on the literal without dot property access
 * 6. Make a function that creates the summary object and define it outside of the "main" function, then use it within the "main" function.
 * 7. Move the `energyAndStuffDiv` function defintion out of the "main" function. Also, rename the function to something more meaninful.
 *    i. Improve variable names
 * 8. Define a new function outise of the "main" function that's creates the table HTML.
 * 9. Use arrow functions with implicit returns where appropriate.
 * 10. Move the logic that filters edible things into a new function to calculate the victuals.
 * 11. Refactor the logic that performs `array.filter(Boolean)` into a small helper function that you reuse.
 * 12. Make a function that creates the section, h2, table and .summary, accepting the victuals and summary as arguments.
 *
 * HINTS:
 * - you should end with several functions that each have one concern
 * - some general concerns might be: calculate data or generate HTML
 * - the "main" function, `generateDietaryHtmlPage` will have the concern of coordinating the other functions.
 * - the "main" function should be less than 10 lines long
 * - be vigilant with your indentation!
 *
 * @param {Array} thingsEaten
 * @param {Array} thingsDrank
 * @returns {String}
 */
function generateDietaryHtmlPage(thingsEaten=[], thingsDrank=[]) {
  const thingsConsumed = thingsEaten.filter(Boolean)
    .concat(thingsDrank.filter(Boolean));

  const victuals = thingsConsumed.filter(function (thing) {
    return thing.isEdible;
  })

  function calcStuff(array, property) {
    return array.reduce(
      (total, item) => total += item[property],
      0,
    );
  }
            const summary = {}

  summary.energy = calcStuff(victuals, 'energy');

    summary.protein = victuals.reduce(function (total, food) {
      return total += food.protein;
    }, 0);

  summary.carbs = calcStuff(victuals, 'carbs');
      summary.fibre = calcStuff(victuals, 'fibre');
  summary.fat = victuals.reduce(function (total, food) {
    return total += food.fat;
  }, 0);

  summary.vitamins = victuals.reduce((total, food) => total += food['vitamins'], 0);
  summary.minerals = calcStuff(victuals, 'minerals');

  function energyAndStuffDiv(stuff) {
    return `
      <div class="summary">
        <h3>Summary</h3>
        <span>Energy - ${stuff.energy} kcal</span>
        <span>Protein - ${stuff.protein} % target</span>
        <span>Carbs - ${stuff.carbs} % target</span>
        <span>Fibre - ${stuff.fibre} % target</span>
        <span>Lipids - ${stuff.fat} % target</span>
        <span>Vitamins - ${stuff.vitamins} % target</span>
        <span>Minerals - ${stuff.minerals} % target</span>
      </div>
    `;
  }

  return `
    <section>
      <h2>Servings list</h2>
      <table>
        <thead class="header-row">
          <tr>
            <th>Food</th>
            <th>Amount</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody class="servings-body">
          ${victuals.map(function (victual) {
            return `
              <tr>
                <td>${victual.name}</td>
                <td>${victual.amount}</td>
                <td>${victual.calories}</td>
              </tr>
            `
          }).join('')}
        <tbody>
      </table>
      ${energyAndStuffDiv(summary)}
    </section>
  `;
}
