//personalize user experience across different geo location.
/* The Intl object is the namespace of ECMAScript Internationalization
API, which gives number formatting, date/time formatting, and
language-sensitive string comparison. It provides access to several
constructors and functionality familiar to the internationalization
constructors and other language-sensitive functions. */


/* const date = new Date();
const locale = "hi"
const engUsFormat = new Intl.DateTimeFormat(locale).format(date);
console.log(engUsFormat)

 */

const value = 26254.39;
const date = new Date("2022-01-03");

function dateNumber(locale) {
  console.log(
    `${new Intl.DateTimeFormat(locale).format(date)}`
  );
}

dateNumber("en-US");
dateNumber("en-IN");
dateNumber("en-MY")


const number = 123456.789;

console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number));
console.log(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number));
console.log(new Intl.NumberFormat('en-MY', { style: 'currency', currency: 'IND' },{ maximumSignificantDigits: 3 }).format(number));

