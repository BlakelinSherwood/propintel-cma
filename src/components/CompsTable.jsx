// src/components/CompsTable.jsx
import { compAdj, fmtFull, fmtAdj } from "../engine/avm";

export default function CompsTable({ comps, subject, ppsf, town }) {
  const avgAdj = Math.round(
    comps.reduce((s, c) => s + c.price + compAdj(c, subject, ppsf), 0) / comps.length / 1000
  ) * 1000;

  return (
    <div className="card">
      <div className="chdr">
        <span className="ctit">Comparable Sales - {town}</span>
        <span style={{ fontSize:11, color:"var(--mut)" }}>KNN - last 90 days</span>
      </div>
      <div style={{ overflowX:"auto" }}>
        <table className="ctable">
          <thead>
            <tr>
              <th>Address</th>
              <th>Date</th>
              <th>Sale Price</th>
              <th>SqFt</th>
              <th>Bd/Ba</th>
              <th>Yr</th>
              <th>Adjustment</th>
              <th>Adj. Value</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {comps.map((c, i) => {
              const adj = compAdj(c, subject, ppsf);
              return (
                <tr key={i}>
                  <td>
                    <div className="cadr">{c.addr}</div>
                    <div className="cdst">{c.dist}</div>
                  </td>
                  <td style={{ color:"var(--mut)", fontSize:11 }}>{c.date}</td>
                  <td className="cprice">{fmtFull(c.price)}</td>
                  <td style={{ fontFamily:"JetBrains Mono", fontSize:11, color:"var(--mut)" }}>{c.sqft.toLocaleString()}</td>
                  <td style={{ fontFamily:"JetBrains Mono", fontSize:11, color:"var(--mut)" }}>{c.beds}/{c.baths}</td>
                  <td style={{ fontFamily:"JetBrains Mono", fontSize:11, color:"var(--mut)" }}>{c.yr}</td>
                  <td><span className={`cadj ${adj > 0 ? "pos" : adj < 0 ? "neg" : "z"}`}>{fmtAdj(adj)}</span></td>
                  <td className="cfinal">{fmtFull(c.price + adj)}</td>
                  <td><span className={`ctag ${c.st}`}>{c.st === "sold" ? "SOLD" : "PEND"}</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div style={{ padding:"13px 18px", background:"var(--card2)", borderTop:"1px solid var(--bdr)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span style={{ fontSize:12, color:"var(--mut)" }}>Adjusted comp average</span>
        <span style={{ fontFamily:"JetBrains Mono", fontSize:15, fontWeight:600, color:"var(--glt)" }}>{fmtFull(avgAdj)}</span>
      </div>
    </div>
  );
}
