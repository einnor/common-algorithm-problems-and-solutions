process.stdin.resume();
process.stdin.setEncoding('utf-8');

var https = require('https');
var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});

/*
 * Complete the function below.
 * Instead of returning the answer, log the answer to the console.
 * https://jsonmock.hackerrank.com/api/countries/search?name=
 */

function getCountries(s, p) {
	let numberOfCountries = 0;
    const baseUrl = 'https://jsonmock.hackerrank.com/api/countries/search';

    getTotalNumberOfPages(baseUrl, s)
        .then((totalPages) => {
            let currentPage = 1;
            const countries = [];

            while (currentPage <= totalPages) {
                countries.push(fetchCountries(baseUrl, s, currentPage));
                currentPage += 1;
            }

            Promise.all(countries)
                .then((pagedCountriesArray) => {
                    const countriesArray = pagedCountriesArray.reduce((acc, cur) => {
                        return [...acc, ...cur];
                    }, []);

                    const countriesWhichMeetPopulationCriteria = countriesArray.filter((country) => country.population > p);

                    console.log(countriesWhichMeetPopulationCriteria.length);
                });
        });
}

function getTotalNumberOfPages(baseUrl, s) {
    const url = `${baseUrl}?name=${s}`;
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                const parsedData = JSON.parse(data);
                resolve(parsedData.total_pages);
            })
        });
    });
}

function fetchCountries(baseUrl, s, page) {
     const url = `${baseUrl}?name=${s}&page=${page}`;
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                const parsedData = JSON.parse(data);
                resolve(parsedData.data);
            })
        });
    });
}

process.stdin.on('end', function () {