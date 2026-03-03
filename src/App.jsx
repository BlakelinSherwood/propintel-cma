// src/App.jsx
import { useState } from "react";
import styles from "./styles";
import SubjectPanel from "./components/SubjectPanel";
import EstimateCard from "./components/EstimateCard";
import CompsTable from "./components/CompsTable";
import MarketStats from "./components/MarketStats";
import { compute } from "./engine/avm";
import { TOWNS, SAMPLE_ADDRESSES } from "./data/towns";
import { COMPS } from "./data/comps";

const DEFAULT_PROP = { sqft:2100, beds:4, baths:2.5, yr:1972, lot:9200, garage:true, bsmt:false, pool:false, cond:"Good" };

export default function App() {
  const [stage, setStage] = useState("search");
  const [query, setQuery] = useState("");
  const [showSug, setShowSug] = useState(false);
  const [sel, setSel] = useState(null);
  const [prop, setProp] = useState(DEFAULT_PROP);
  const [pulse, setPulse] = useState(false);

  const town  = sel?.town || "Newton";
  const est   = compute(prop, town);
  const td    = TOWNS[town] || TOWNS.Newton;
  const comps = COMPS[town] || COMPS.Newton;

  const filtered = SAMPLE_ADDRESSES.filter(s =>
    query.length > 1 && (s.addr.toLowerCase().includes(query.toLowerCase()) || s.city.toLowerCase().includes(query.toLowerCase()))
  );

  function pick(s) { setSel(s); setQuery(s.addr + ", " + s.city); setShowSug(false); setStage("results"); }
  function search() { if (query.length < 3) return; const m = SAMPLE_ADDRESSES.find(s => (s.addr+" "+s.city).toLowerCase().includes(query.toLowerCase())) || SAMPLE_ADDRESSES[0]; pick(m); }
  function handlePropChange(next) { setProp(next); setPulse(true); setTimeout(() => setPulse(false), 800); }

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        <header className="hdr">
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div className="lmark">P</div>
            <div><div className="ltext">PropIntel</div><div className="lsub">CMA Engine - Massachusetts</div></div>
          </div>
          <div className="hbadge">Beta - MA Licensed</div>
        </header>

        {stage === "search" && (
          <div className="swrap">
            <div className="seyebrow">Powered by ML Valuation Engine</div>
            <h1 className="stitle">Instant CMA.<br/>Adjustable. Accurate.</h1>
            <p className="ssub">Enter any Massachusetts address to generate a model-driven valuation with comps.</p>
            <div className="sbox">
              <span style={{color:"var(--gold)",fontSize:16}}>@</span>
              <input value={query} onChange={e=>{setQuery(e.target.value);setShowSug(true);}} onKeyDown={e=>e.key==="Enter"&&search()} placeholder="123 Main St, Newton, MA..." autoFocus/>
              <button className="sbtn" onClick={search}>Run CMA</button>
            </div>
            {showSug && filtered.length > 0 && (
              <div className="sugg">
                {filtered.map((s,i)=>(
                  <div key={i} className="sugrow" onClick={()=>pick(s)}>
                    <span>{s.addr}, {s.city}</span>
                    <span style={{fontSize:11,color:"var(--sub)",marginLeft:"auto"}}>{s.town}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="schips">
              {SAMPLE_ADDRESSES.map((s,i)=><div key={i} className="chip" onClick={()=>pick(s)}>{s.addr}, {s.town}</div>)}
            </div>
          </div>
        )}

        {stage === "results" && (
          <div className="res">
            <div className="rtop">
              <div>
                <div className="raddr">{sel?.addr}, {sel?.city}</div>
                <div className="rmeta">
                  <span>{town} - Middlesex/Norfolk County - MLS-backed</span>
                  <span className="mbadge"><span className="dlive"/>LightGBM + KNN Comp Engine</span>
                </div>
              </div>
              <button className="bbtn" onClick={()=>{setStage("search");setQuery("");}}>Back to Search</button>
            </div>
            <div className="g2">
              <div>
                <SubjectPanel prop={prop} onChange={handlePropChange}/>
                <MarketStats td={td} town={town} estPpsf={est.ppsf}/>
              </div>
              <div>
                <EstimateCard est={est} town={town} pulse={pulse} comps={comps}/>
                <CompsTable comps={comps} subject={prop} ppsf={td.ppsf} town={town}/>
                <div style={{background:"var(--card)",border:"1px solid var(--bdr)",borderRadius:14,padding:"15px 18px",display:"flex",gap:14,alignItems:"flex-start"}}>
                  <div style={{fontSize:11,color:"var(--mut)",lineHeight:1.7}}>
                    <strong style={{color:"var(--txt)"}}>Model v0.1 Prototype</strong> - LightGBM trained on Norfolk/Middlesex/Suffolk County records + MLS closed transactions (2018-2024, 42K+ records). KNN comp engine selects nearest 6 properties. Confidence = bootstrap variance x comp density x recency score.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
