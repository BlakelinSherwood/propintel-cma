// src/data/comps.js — Comparable sales by town
// TODO: Replace with live MLS API calls

export const COMPS = {
  Newton: [
    { addr: "31 Chestnut St",    dist: "0.2 mi", date: "Nov 2024", sqft: 2180, beds: 4, baths: 2.5, yr: 1965, price: 1298000, st: "sold" },
    { addr: "89 Walnut St",      dist: "0.4 mi", date: "Oct 2024", sqft: 1950, beds: 3, baths: 2,   yr: 1958, price: 1140000, st: "sold" },
    { addr: "14 Pine Rd",        dist: "0.5 mi", date: "Nov 2024", sqft: 2320, beds: 4, baths: 3,   yr: 1978, price: 1445000, st: "sold" },
    { addr: "202 Center St",     dist: "0.7 mi", date: "Dec 2024", sqft: 2050, beds: 4, baths: 2,   yr: 1962, price: 1215000, st: "sold" },
    { addr: "57 Maple Ave",      dist: "0.9 mi", date: "Oct 2024", sqft: 2400, beds: 5, baths: 3,   yr: 1985, price: 1525000, st: "sold" },
    { addr: "8 Highland Rd",     dist: "0.6 mi", date: "Pending",  sqft: 2150, beds: 4, baths: 2.5, yr: 1970, price: 1349000, st: "pend" },
  ],
  Brookline: [
    { addr: "88 Cypress St",     dist: "0.2 mi", date: "Nov 2024", sqft: 1820, beds: 3, baths: 2,   yr: 1930, price: 1198000, st: "sold" },
    { addr: "34 Harvard Ave",    dist: "0.3 mi", date: "Oct 2024", sqft: 2100, beds: 4, baths: 2.5, yr: 1955, price: 1410000, st: "sold" },
    { addr: "210 Beacon St",     dist: "0.6 mi", date: "Nov 2024", sqft: 1950, beds: 3, baths: 2,   yr: 1942, price: 1280000, st: "sold" },
    { addr: "67 Winchester St",  dist: "0.5 mi", date: "Dec 2024", sqft: 2250, beds: 4, baths: 3,   yr: 1968, price: 1495000, st: "sold" },
    { addr: "145 Dean Rd",       dist: "0.8 mi", date: "Oct 2024", sqft: 1780, beds: 3, baths: 1.5, yr: 1928, price: 1125000, st: "sold" },
    { addr: "22 Aspinwall Ave",  dist: "0.7 mi", date: "Pending",  sqft: 2050, beds: 4, baths: 2,   yr: 1960, price: 1359000, st: "pend" },
  ],
  Lexington: [
    { addr: "76 Pleasant St",    dist: "0.3 mi", date: "Nov 2024", sqft: 2050, beds: 4, baths: 2,   yr: 1972, price: 1065000, st: "sold" },
    { addr: "12 Vine Brook Rd",  dist: "0.4 mi", date: "Oct 2024", sqft: 1880, beds: 3, baths: 2,   yr: 1964, price:  968000, st: "sold" },
    { addr: "290 Marrett Rd",    dist: "0.6 mi", date: "Nov 2024", sqft: 2310, beds: 4, baths: 2.5, yr: 1980, price: 1195000, st: "sold" },
    { addr: "54 Farmcrest Ave",  dist: "0.8 mi", date: "Dec 2024", sqft: 1960, beds: 4, baths: 2,   yr: 1968, price: 1020000, st: "sold" },
    { addr: "101 Wood St",       dist: "0.9 mi", date: "Oct 2024", sqft: 2500, beds: 5, baths: 3,   yr: 1990, price: 1290000, st: "sold" },
    { addr: "33 Bloomfield St",  dist: "0.7 mi", date: "Pending",  sqft: 2100, beds: 4, baths: 2.5, yr: 1975, price: 1115000, st: "pend" },
  ],
  Needham: [
    { addr: "18 Oak Ave",        dist: "0.2 mi", date: "Nov 2024", sqft: 1950, beds: 3, baths: 2,   yr: 1965, price:  945000, st: "sold" },
    { addr: "55 Central Ave",    dist: "0.4 mi", date: "Oct 2024", sqft: 2150, beds: 4, baths: 2.5, yr: 1978, price: 1058000, st: "sold" },
    { addr: "120 Chestnut St",   dist: "0.6 mi", date: "Nov 2024", sqft: 1820, beds: 3, baths: 2,   yr: 1958, price:  889000, st: "sold" },
    { addr: "8 Edgehill Rd",     dist: "0.5 mi", date: "Dec 2024", sqft: 2300, beds: 4, baths: 3,   yr: 1982, price: 1120000, st: "sold" },
    { addr: "77 Highland Ave",   dist: "0.8 mi", date: "Oct 2024", sqft: 2000, beds: 4, baths: 2,   yr: 1970, price:  975000, st: "sold" },
    { addr: "41 Rosemary St",    dist: "0.7 mi", date: "Pending",  sqft: 2080, beds: 4, baths: 2,   yr: 1974, price: 1010000, st: "pend" },
  ],
  Wellesley: [
    { addr: "280 Main St",       dist: "0.3 mi", date: "Nov 2024", sqft: 2400, beds: 4, baths: 3,   yr: 1988, price: 1420000, st: "sold" },
    { addr: "14 Cedar St",       dist: "0.4 mi", date: "Oct 2024", sqft: 2100, beds: 4, baths: 2.5, yr: 1975, price: 1248000, st: "sold" },
    { addr: "56 Brook St",       dist: "0.6 mi", date: "Nov 2024", sqft: 1980, beds: 3, baths: 2,   yr: 1962, price: 1155000, st: "sold" },
    { addr: "103 Forest St",     dist: "0.5 mi", date: "Dec 2024", sqft: 2650, beds: 5, baths: 3.5, yr: 1995, price: 1595000, st: "sold" },
    { addr: "29 Elm St",         dist: "0.7 mi", date: "Oct 2024", sqft: 2200, beds: 4, baths: 2,   yr: 1970, price: 1320000, st: "sold" },
    { addr: "67 Winding River",  dist: "0.9 mi", date: "Pending",  sqft: 2350, beds: 4, baths: 3,   yr: 1984, price: 1399000, st: "pend" },
  ],
};
