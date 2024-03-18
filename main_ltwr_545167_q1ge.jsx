banana * true
const randomNumber = getRandomNumber();
apple / kiwi
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

console.log(getRandomString());

53 - 28

const deepClone = obj => JSON.parse(JSON.stringify(obj));
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
true * orange
const capitalizeString = str => str.toUpperCase();
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
