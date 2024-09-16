// import puppeteer from 'puppeteer';

// NOT WORKING ANYMORE, JUST USING AI TO GET THE DATA

// const tbody_cities_container =
//   '#mw-content-text > div.mw-content-ltr.mw-parser-output > table.static-row-numbers.plainrowheaders.vertical-align-top.sticky-header.sortable.wikitable.jquery-tablesorter > tbody';

// export const scrape = async () => {
//   try {
//     const browser = await puppeteer.launch();

//     const page = await browser.newPage();
//     await page.goto('https://en.wikipedia.org/wiki/List_of_largest_cities');

//     await page.waitForSelector(tbody_cities_container);

//     // this container has all the columns and rows with all the infomation we need
//     const tbody = await page.$(
//       '#mw-content-text > div.mw-content-ltr.mw-parser-output > table.static-row-numbers.plainrowheaders.vertical-align-top.sticky-header.sortable.wikitable.jquery-tablesorter > tbody',
//     );

//     // these are the city rows we need
//     const rows = await tbody?.$$('tr');

//     let result = [];

//     // map through each row and extract only the city, country, pop and area
//     if (rows) {
//       let result2 = await Promise.all(
//         rows.map(
//           async (t: any) =>
//             await t.evaluate((x: any) => {
//               const city = x.querySelector('th').innerText;
//               const country = x.querySelectorAll('td')[0].innerText;
//               const population = x
//                 .querySelectorAll('td')[6]
//                 .innerText.replace(/,/g, '');
//               const area = x
//                 .querySelectorAll('td')[7]
//                 .innerText.replace(/,/g, '');
//               return [city, country, Number(population), Number(area)];
//             }),
//         ),
//       );

//       // getting rid of foshan due to null figures
//       result2.splice(50, 1);
//       result.push(result2);
//     }
//     console.log(result);
//     return result;
//     //
//   } catch (err) {
//     console.error(err);
//   }
//   return;
// };
