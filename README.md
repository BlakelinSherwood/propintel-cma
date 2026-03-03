# PropIntel CMA - Massachusetts

MA real estate CMA tool for licensed brokers.

## Quick Start

    npm install
    npm start

## Project Structure

    src/App.jsx              Root component
    src/styles.js            Global CSS + design tokens
    src/engine/avm.js        Hedonic AVM engine
    src/data/towns.js        Town market data
    src/data/comps.js        Comparable sales
    src/components/          UI panels

## Connecting Real Data

- towns.js: replace with live MLS aggregate API
- comps.js: replace with live KNN query against MLS closed sales
- avm.js compute(): POST to trained LightGBM FastAPI endpoint
- Address search: connect Google Places API (MA-filtered)

## Roadmap

- Connect Google Places autocomplete
- LightGBM model API endpoint
- Live MLSPIN comp feed
- PDF CMA report export
- Saved CMA history per agent
- MCAS school ratings + MBTA proximity scoring
