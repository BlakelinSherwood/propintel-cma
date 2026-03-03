// src/components/MarketStats.jsx
export default function MarketStats({ td, town, estPpsf }) {
  const stats = [
    ["Median", "Price",   td.med >= 1000000 ? `$${(td.med/1e6).toFixed(2)}M` : `$${(td.med/1000).toFixed(0)}K`, td.trend, td.trend.startsWith("+") ? "up" : "dn"],
    ["Avg",    "DOM",     td.dom + "", "days on mkt", "fl"],
    ["List /", "Sale",    td.lsr + "%", "over ask", "up"],
    ["$/",     "sqft",    "$" + td.ppsf, "median", "fl"],
    ["Inv.",   "Level",   td.inv, "supply", "fl"],
    ["Subj",   "$/sf",    "$" + estPpsf, estPpsf > td.ppsf ? "above median" : "below median", estPpsf > td.ppsf ? "up" : "dn"],
  ];

  return (
    <div className="card">
      <div className="chdr">
        <span className="ctit">{town} Market - Dec 2024</span>
        <span style={{ fontSize:11, color: td.trend.startsWith("+") ? "var(--grn)" : "var(--red)" }}>{td.trend} YoY</span>
      </div>
      <div className="sgrid">
        {stats.map(([l1, l2, val, dlt, cls], i) => (
          <div key={i} className="sbox2">
            <div className="slab">{l1} {l2}</div>
            <div className="sval">{val}</div>
            <div className={`sdlt ${cls}`}>{dlt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
