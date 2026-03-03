// src/components/EstimateCard.jsx
import { fmtFull, fmtShort } from "../engine/avm";

export default function EstimateCard({ est, town, pulse, comps }) {
  const confPct = Math.round(est.confidence * 100);
  const topDrivers = Object.entries(est.drivers)
    .filter(([, v]) => Math.abs(v) > 2000)
    .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
    .slice(0, 6);
  const maxD = Math.max(...topDrivers.map(([, v]) => Math.abs(v)), 1);
  const soldCount = comps.filter(c => c.st === "sold").length;

  return (
    <div className="ecard">
      <div className="etop">
        <div className="elab">Estimated Market Value</div>
        <div className={`eval${pulse ? " pulse" : ""}`}>{fmtFull(est.val)}</div>
        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
          <span style={{ fontSize:11, color:"var(--mut)" }}>80% range:</span>
          <span style={{ fontFamily:"JetBrains Mono", fontSize:11, color:"var(--txt)" }}>
            {fmtFull(est.lo)} to {fmtFull(est.hi)}
          </span>
        </div>
        <div className="ebar">
          <div className="efill" style={{ width:`${confPct}%` }} />
          <div className="edot" style={{ left:`${confPct}%` }} />
        </div>
        <div className="rends">
          <span className="rend">Low Confidence</span>
          <span className="rend">High Confidence</span>
        </div>
        <div className="cbadges">
          <span className="cbadge hi">checkmark {soldCount} Active Comps</span>
          <span className="cbadge hi">MLS Data</span>
          <span className="cbadge hi">{confPct}% Confidence</span>
          <span className="cbadge md">${est.ppsf}/sqft</span>
        </div>
      </div>
      <div className="chdr" style={{ background:"transparent" }}>
        <span className="ctit">Value Adjustment Drivers</span>
        <span style={{ fontSize:11, color:"var(--mut)" }}>vs. {town} median</span>
      </div>
      <div className="dbody">
        {topDrivers.map(([label, val]) => {
          const pct = (Math.abs(val) / maxD) * 44;
          return (
            <div key={label} className="drow">
              <span className="dlab">{label}</span>
              <div className="dbwrap">
                <div className="dctr" />
                <div className={`dbar ${val >= 0 ? "pos" : "neg"}`} style={{ width:`${pct}%` }} />
              </div>
              <span className={`dval ${val > 0 ? "pos" : val < 0 ? "neg" : "neu"}`}>
                {val > 0 ? "+" : ""}{val !== 0 ? fmtShort(Math.abs(val)) : "none"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
