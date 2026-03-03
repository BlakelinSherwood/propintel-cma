// src/engine/avm.js — PropIntel AVM Engine v0.1
// Hedonic regression model — replace compute() with API call to trained LightGBM endpoint.

import { TOWNS } from "../data/towns";

const CONDITION_MULT = { Poor: 0.82, Fair: 0.90, Average: 1.00, Good: 1.08, Excellent: 1.15 };

export function compute(prop, town) {
  const td = TOWNS[town] || TOWNS.Newton;
  let base = prop.sqft * td.ppsf;
  const drivers = {};

  const bedAdj  = (prop.beds  - 4)   * 18000; base += bedAdj;  drivers["Bedrooms"]  = bedAdj;
  const bathAdj = (prop.baths - 2.5) * 22000; base += bathAdj; drivers["Bathrooms"] = bathAdj;
  const ageAdj  = ((prop.yr   - 1972) / 10) * 28000; base += ageAdj; drivers["Year Built"] = ageAdj;
  const lotAdj  = ((prop.lot  - 8500) / 1000) * 9000; base += lotAdj; drivers["Lot Size"]  = lotAdj;

  if (prop.garage) { base += 28000; drivers["Garage"] = 28000; }
  if (prop.bsmt)   { base += 32000; drivers["Fin. Basement"] = 32000; }
  if (prop.pool)   { base += 18000; drivers["Pool"] = 18000; }

  const cm      = CONDITION_MULT[prop.cond] || 1.0;
  const condAdj = base * (cm - 1.0);
  if (Math.abs(condAdj) > 5000) drivers["Condition"] = condAdj;
  base *= cm;

  const confidence = 0.87;
  const spread     = base * 0.065;

  return {
    val:  Math.round(base / 1000) * 1000,
    lo:   Math.round((base - spread) / 1000) * 1000,
    hi:   Math.round((base + spread) / 1000) * 1000,
    ppsf: Math.round(base / prop.sqft),
    confidence,
    drivers,
  };
}

export function compAdj(comp, subject, ppsf) {
  let adj = 0;
  adj += (subject.sqft  - comp.sqft)  * (ppsf * 0.85);
  adj += (subject.beds  - comp.beds)  * 16000;
  adj += (subject.baths - comp.baths) * 18000;
  adj += ((subject.yr   - comp.yr) / 10) * 22000;
  return Math.round(adj / 500) * 500;
}

export const fmtShort = (n) => n >= 1000000 ? `$${(n/1e6).toFixed(3).replace(/\.?0+$/,"")}M` : `$${(n/1000).toFixed(0)}K`;
export const fmtFull  = (n) => "$" + n.toLocaleString();
export const fmtAdj   = (n) => n === 0 ? "—" : (n > 0 ? "+" : "") + "$" + Math.abs(n).toLocaleString();
