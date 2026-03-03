// src/components/SubjectPanel.jsx
// Left panel — property fact inputs. Each change triggers AVM re-run.

export default function SubjectPanel({ prop, onChange }) {
  const upd = (k, v) => onChange({ ...prop, [k]: v });

  return (
    <div className="card">
      <div className="chdr">
        <span className="ctit">Subject Property Facts</span>
        <span style={{ fontSize: 11, color: "var(--mut)" }}>Adjust → updates estimate</span>
      </div>
      <div className="cbody">

        {/* Living area */}
        <div className="frow">
          <span className="flab">Living Area</span>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:4 }}>
            <span className="fval">{prop.sqft.toLocaleString()} sqft</span>
            <input type="range" min={800} max={4500} step={50} value={prop.sqft} className="rinput"
              style={{ width:160, "--pct":`${((prop.sqft-800)/3700)*100}%` }}
              onChange={e => upd("sqft", +e.target.value)} />
          </div>
        </div>

        {/* Bedrooms */}
        <div className="frow">
          <span className="flab">Bedrooms</span>
          <div className="stpr">
            <button className="stpbtn" onClick={() => upd("beds", Math.max(1, prop.beds - 1))}>−</button>
            <span className="stpval">{prop.beds}</span>
            <button className="stpbtn" onClick={() => upd("beds", Math.min(8, prop.beds + 1))}>+</button>
          </div>
        </div>

        {/* Bathrooms */}
        <div className="frow">
          <span className="flab">Bathrooms</span>
          <div className="stpr" style={{ gap:0 }}>
            {[1, 1.5, 2, 2.5, 3, 3.5, 4].map(v => (
              <button key={v} className="stpbtn"
                style={{ fontSize:10, width: v % 1 === 0 ? 30 : 26, color: prop.baths === v ? "var(--gold)" : "var(--mut)" }}
                onClick={() => upd("baths", v)}>{v}</button>
            ))}
          </div>
        </div>

        {/* Year built */}
        <div className="frow">
          <span className="flab">Year Built</span>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:4 }}>
            <span className="fval">{prop.yr}</span>
            <input type="range" min={1900} max={2024} step={1} value={prop.yr} className="rinput"
              style={{ width:160, "--pct":`${((prop.yr-1900)/124)*100}%` }}
              onChange={e => upd("yr", +e.target.value)} />
          </div>
        </div>

        {/* Lot size */}
        <div className="frow">
          <span className="flab">Lot Size</span>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:4 }}>
            <span className="fval">{prop.lot.toLocaleString()} sf</span>
            <input type="range" min={1000} max={40000} step={500} value={prop.lot} className="rinput"
              style={{ width:160, "--pct":`${((prop.lot-1000)/39000)*100}%` }}
              onChange={e => upd("lot", +e.target.value)} />
          </div>
        </div>

        <hr style={{ border:"none", borderTop:"1px solid var(--bdr)", margin:"14px 0" }} />

        {/* Condition */}
        <div style={{ marginBottom:14 }}>
          <div className="frow" style={{ marginBottom:8 }}>
            <span className="flab">Condition</span>
            <span style={{ fontFamily:"JetBrains Mono", fontSize:12, color:"var(--glt)" }}>{prop.cond}</span>
          </div>
          <div style={{ display:"flex", gap:5 }}>
            {["Poor","Fair","Average","Good","Excellent"].map(c => (
              <button key={c} className={`cbtn${prop.cond === c ? " active" : ""}`} onClick={() => upd("cond", c)}>
                {c === "Average" ? "Avg" : c === "Excellent" ? "Exc" : c}
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <span style={{ display:"block", fontSize:13, color:"var(--mut)", marginBottom:8 }}>Features</span>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {[["garage","Garage"],["bsmt","Fin. Basement"],["pool","Pool"]].map(([k, label]) => (
              <div key={k} className={`tchip${prop[k] ? " on" : ""}`} onClick={() => upd(k, !prop[k])}>
                {prop[k] ? "✓ " : ""}{label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
