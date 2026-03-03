// src/data/towns.js
// ─────────────────────────────────────────────────────────────────────
// TOWN MARKET DATA — Massachusetts (2024 Q4 snapshot)
// TODO: Replace with live MLS API feed when available.
// ─────────────────────────────────────────────────────────────────────

export const TOWNS = {
  Newton:    { ppsf: 598, med: 1285000, dom: 11, lsr: 107.4, inv: "Low",      trend: "+8.2%" },
  Brookline: { ppsf: 641, med: 1420000, dom: 14, lsr: 104.1, inv: "Very Low", trend: "+6.8%" },
  Lexington: { ppsf: 521, med: 1095000, dom: 13, lsr: 105.8, inv: "Low",      trend: "+9.1%" },
  Needham:   { ppsf: 483, med:  975000, dom: 16, lsr: 102.3, inv: "Low",      trend: "+5.4%" },
  Wellesley: { ppsf: 574, med: 1380000, dom: 18, lsr: 101.7, inv: "Normal",   trend: "+4.2%" },
};

export const SAMPLE_ADDRESSES = [
  { addr: "47 Chestnut St",  city: "Newton, MA 02458",    town: "Newton"    },
  { addr: "112 Cypress St",  city: "Brookline, MA 02445", town: "Brookline" },
  { addr: "88 Pleasant St",  city: "Lexington, MA 02420", town: "Lexington" },
  { addr: "23 Oak Ave",      city: "Needham, MA 02492",   town: "Needham"   },
  { addr: "315 Main St",     city: "Wellesley, MA 02481", town: "Wellesley" },
];
