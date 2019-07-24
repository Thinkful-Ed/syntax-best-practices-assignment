
describe(`createPriceLabel(price: Number, unit: String): String`, () => {
  it(`returns 0 per gallon by default`, () => {
    const actual = createPriceLabel();
    expect(actual).to.equal('$0.00 per gallon')
  })

  it(`returns the 2 decimal place price when supplied`, () => {
    const actual = createPriceLabel(123.456);
    expect(actual).to.equal('$123.46 per gallon')
  })

  it(`returns the units when supplied`, () => {
    const actual = createPriceLabel(undefined, 'tonne');
    expect(actual).to.equal('$0.00 per tonne')
  })

  it(`returns a combination of price and units when both supplied`, () => {
    const actual = createPriceLabel(99.9999, 'kcal');
    expect(actual).to.equal('$100.00 per kcal')
  })
})

describe(`all(array: Array, valueToCheck: Any): Boolean`, () => {
  it(`returns true by default`, () => {
    const actual = all();
    expect(actual).to.equal(true)
  })

  it(`returns true when the array only contains the valueToCheck`, () => {
    const actual = all([ 'foo' ], 'foo');
    expect(actual).to.equal(true)
  })

  it(`returns false when the array contains none of the valueToCheck`, () => {
    const actual = all([true, true, true, true, true], false);
    expect(actual).to.equal(false)
  })

  it(`returns false when the array contains other values`, () => {
    const actual = all(['foo', 'bar' ], 'foo');
    expect(actual).to.equal(false)
  })

  it(`returns true when the array contains lots of the valueToCheck`, () => {
    const actual = all([ 55, 55, 55, 55, 55 ], 55);
    expect(actual).to.equal(true)
  })
})

describe(`areAllItemsUnique(array: Array): Boolean`, () => {
  it(`returns true by default`, () => {
    const actual = areAllItemsUnique();
    expect(actual).to.equal(true)
  })

  it(`returns true when the array only contains one item`, () => {
    const actual = areAllItemsUnique(['foo']);
    expect(actual).to.equal(true)
  })

  it(`returns false when the array contains duplicate items`, () => {
    const actual = areAllItemsUnique(['foo', 'bar', 'foo']);
    expect(actual).to.equal(false)
  })

  it(`returns false when the array contains mixed items`, () => {
    const actual = areAllItemsUnique(['foo', 'bar', 1, 2, false]);
    expect(actual).to.equal(true)
  })
})

describe(`calculateAverage(scores: Array): Number`, () => {
  it(`returns 0 by default`, () => {
    const actual = calculateAverage()
    expect(actual).to.equal(0)
  })

  it(`returns number inside only element of array`, () => {
    const actual = calculateAverage([ 123 ])
    expect(actual).to.equal(123)
  })

  it(`returns repeated number inside array`, () => {
    const actual = calculateAverage([ 321, 321, 321, 321 ])
    expect(actual).to.equal(321)
  })

  it(`returns average of 2 elements in array`, () => {
    const actual = calculateAverage([ 2, 6 ])
    expect(actual).to.equal(4)
  })

  it(`returns average of all elements in array`, () => {
    const actual = calculateAverage([ 0.5, 2, 4, 6, 8, 10, 12 ])
    expect(actual).to.equal(6.071428571428571)
  })
})

describe(`isPalindromeNumber(n: Number): String`, () => {
  it(`returns 'Incorrect input' if number has 4 digits`, () => {
    const actual = isPalindromeNumber(9999);
    expect(actual).to.equal('Incorrect input');
  })

  it(`returns 'Incorrect input' if number has 6 digits`, () => {
    const actual = isPalindromeNumber(100000);
    expect(actual).to.equal('Incorrect input');
  })

  it(`returns not a palindrome if all numbers are different`, () => {
    const actual = isPalindromeNumber(12345);
    expect(actual).to.equal('No, not a palindrome');
  })

  it(`returns not a palindrome if first and last digits don't match`, () => {
    const actual = isPalindromeNumber(90002);
    expect(actual).to.equal('No, not a palindrome');
  })

  it(`returns not a palindrome if second and second to last digits don't match`, () => {
    const actual = isPalindromeNumber(19021);
    expect(actual).to.equal('No, not a palindrome');
  })

  it(`returns a palindrome if all numbers are the same`, () => {
    const actual = isPalindromeNumber(11111);
    expect(actual).to.equal('Yes, it is a palindrome');
  })

  it(`returns a palindrome for palindrome`, () => {
    const actual = isPalindromeNumber(12321);
    expect(actual).to.equal('Yes, it is a palindrome');
  })
})

describe(`getActiveDiv(content: String, active: Boolean): String`, () => {
  it(`returns empty div.is-hidden by default`, () => {
    const actual = getActiveDiv();
    expect(normalizeHtmlString(actual))
      .to.equal('<div class="is-hidden"></div>');
  })

  it(`returns content inside div.is-hidden when supplied`, () => {
    const someContent = 'test content for div';
    const actual = getActiveDiv(someContent);
    expect(normalizeHtmlString(actual))
      .to.equal(`<div class="is-hidden">${someContent}</div>`);
  })

  it(`returns content inside div.is-active when set active`, () => {
    const someContent = 'test content for div';
    const actual = getActiveDiv(someContent, true);
    expect(normalizeHtmlString(actual))
      .to.equal(`<div class="is-active">${someContent}</div>`);
  })
})

describe(`makePerson(firstName: String, familyName: String, age: Number, eyeColor: String): Object`, () => {

  it(`returns object with empty strings by default`, () => {
    const actual = makePerson();
    expect(actual).to.eql({
      firstName: '',
      familyName: '',
      age: 0,
      eyeColor: '',
      fullName: '',
    });
  })

  it(`returns object with properties filled in`, () => {
    const firstName = 'test-first-name';
    const familyName = 'test-family-name';
    const age = 123;
    const eyeColor = 'test-eye-color';
    const actual = makePerson(firstName, familyName, age, eyeColor);

    expect(actual).to.eql({
      firstName,
      familyName,
      age,
      eyeColor,
      fullName: `${firstName} ${familyName}`,
    });
  })

  it(`removes spaces from fullName if only firstName`, () => {
    const firstName = 'test-first-name';
    const familyName = undefined;
    const age = 123;
    const eyeColor = 'test-eye-color';
    const actual = makePerson(firstName, familyName, age, eyeColor);

    expect(actual).to.eql({
      firstName,
      familyName: '',
      age,
      eyeColor,
      fullName: firstName,
    });
  })

  it(`removes spaces from fullName if only familyName`, () => {
    const firstName = undefined;
    const familyName = 'test-family-name';
    const age = 123;
    const eyeColor = 'test-eye-color';
    const actual = makePerson(firstName, familyName, age, eyeColor);

    expect(actual).to.eql({
      firstName: '',
      familyName,
      age,
      eyeColor,
      fullName: familyName,
    });
  })
})

describe(`generateDietaryHtmlPage(thingsEaten, thingsDrank)`, () => {
  it(`returns a section with an empty table and summary`, () => {
    const actual = generateDietaryHtmlPage()
    expect(
      normalizeHtmlString(actual)
    ).to.equal(normalizeHtmlString(`
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
          <tbody>
        </table>
        <div class="summary">
          <h3>Summary</h3>
          <span>Energy - 0 kcal</span>
          <span>Protein - 0 % target</span>
          <span>Carbs - 0 % target</span>
          <span>Fibre - 0 % target</span>
          <span>Lipids - 0 % target</span>
          <span>Vitamins - 0 % target</span>
          <span>Minerals - 0 % target</span>
        </div>
      </section>
    `))
  })

  it(`returns the same when thingsEaten or thingsDrank contain falsey vals`, () => {
    const testThingsDrank = [0, false, '', null];
    const testThingsEaten = [0, false, '', null];

    const actual = generateDietaryHtmlPage(testThingsDrank, testThingsEaten)

    expect(
      normalizeHtmlString(actual)
    ).to.contain(normalizeHtmlString(`<tbody class="servings-body"><tbody>`));

    expect(
      normalizeHtmlString(actual)
    ).to.contain(normalizeHtmlString(`
        <div class="summary">
          <h3>Summary</h3>
          <span>Energy - 0 kcal</span>
          <span>Protein - 0 % target</span>
          <span>Carbs - 0 % target</span>
          <span>Fibre - 0 % target</span>
          <span>Lipids - 0 % target</span>
          <span>Vitamins - 0 % target</span>
          <span>Minerals - 0 % target</span>
        </div>
    `))
  })

  it(`ignores non edible things consumed`, () => {
    const testThingsDrank = [
      { name: 'test 1', isEdible: false },
      { name: 'test 2', isEdible: false }
    ];
    const testThingsEaten = [
      { name: 'test 3', isEdible: false },
      { name: 'test 4', isEdible: false }
    ];

    const actual = generateDietaryHtmlPage(testThingsDrank, testThingsEaten)

    expect(
      normalizeHtmlString(actual)
    ).to.contain(normalizeHtmlString(`
      <tbody class="servings-body">
      <tbody>
    `));

    expect(
      normalizeHtmlString(actual)
    ).to.contain(normalizeHtmlString(`
        <div class="summary">
          <h3>Summary</h3>
          <span>Energy - 0 kcal</span>
          <span>Protein - 0 % target</span>
          <span>Carbs - 0 % target</span>
          <span>Fibre - 0 % target</span>
          <span>Lipids - 0 % target</span>
          <span>Vitamins - 0 % target</span>
          <span>Minerals - 0 % target</span>
        </div>
    `))
  })

  it(`adds thingsEaten and thingsDrank to the servings table`, () => {
    const testThingsDrank = [
      { name: 'test 1', isEdible: true, amount: 1, calories: 2 },
      { name: 'test 2', isEdible: true, amount: 3, calories: 4 }
    ];
    const testThingsEaten = [
      { name: 'test 3', isEdible: true, amount: 5, calories: 6 },
      { name: 'test 4', isEdible: true, amount: 7, calories: 8 }
    ];

    const actual = generateDietaryHtmlPage(testThingsDrank, testThingsEaten)

    expect(
      normalizeHtmlString(actual)
    ).to.contain(normalizeHtmlString(`
      <tbody class="servings-body">
        <tr>
          <td>test 1</td>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td>test 2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>test 3</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>test 4</td>
          <td>7</td>
          <td>8</td>
        </tr>
      <tbody>
    `));
  })

  it(`adds thingsEaten and thingsDrank summary`, () => {
    const testThingsDrank = [
      { name: 'test 1', isEdible: true, energy: 1, protein: 1, carbs: 3, fibre: 4, fat: 5, vitamins: 6, minerals: 7 },
      { name: 'test 2', isEdible: true, energy: 8, protein: 9, carbs: 0, fibre: 1, fat: 2, vitamins: 3, minerals: 4 }
    ];
    const testThingsEaten = [
      { name: 'test 3', isEdible: true, energy: 5, protein: 6, carbs: 7, fibre: 8, fat: 9, vitamins: 0, minerals: 1 },
      { name: 'test 4', isEdible: true, energy: 2, protein: 3, carbs: 4, fibre: 5, fat: 6, vitamins: 7, minerals: 8 }
    ];

    const actual = generateDietaryHtmlPage(testThingsDrank, testThingsEaten)

    expect(
      normalizeHtmlString(actual)
    ).to.contain(normalizeHtmlString(`
        <div class="summary">
          <h3>Summary</h3>
          <span>Energy - 16 kcal</span>
          <span>Protein - 19 % target</span>
          <span>Carbs - 14 % target</span>
          <span>Fibre - 18 % target</span>
          <span>Lipids - 22 % target</span>
          <span>Vitamins - 16 % target</span>
          <span>Minerals - 20 % target</span>
        </div>
    `))
  })
})

/* test helper */

const normalizeHtmlString = str => str.replace(/\n\s+|\t/g, '')
