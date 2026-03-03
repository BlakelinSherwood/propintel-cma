// src/styles.js — Global CSS injected via <style> tag
// Edit tokens here to retheme the entire app.

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:    #080E18;
    --surf:  #0E1825;
    --card:  #111E2E;
    --card2: #162436;
    --bdr:   rgba(255,255,255,0.07);
    --bdr2:  rgba(255,255,255,0.12);
    --gold:  #C9973A;
    --glt:   #E8B95A;
    --grn:   #22C55E;
    --red:   #EF4444;
    --txt:   #E2EAF4;
    --mut:   #6B8096;
    --sub:   #3D5166;
  }

  body { background: var(--bg); color: var(--txt); font-family: 'DM Sans', sans-serif; }
  .app { min-height: 100vh; }

  /* Header */
  .hdr { background: var(--surf); border-bottom: 1px solid var(--bdr); padding: 0 28px; height: 56px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; }
  .lmark { width: 30px; height: 30px; border-radius: 8px; background: linear-gradient(135deg,#C9973A,#8B5E1A); display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; color: #fff; flex-shrink: 0; }
  .ltext { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 600; color: var(--txt); }
  .lsub  { font-size: 10px; color: var(--mut); letter-spacing: 1.5px; text-transform: uppercase; margin-top: 1px; }
  .hbadge { background: rgba(201,151,58,.12); border: 1px solid rgba(201,151,58,.3); color: var(--gold); font-size: 10px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; }

  /* Search */
  .swrap { min-height: calc(100vh - 56px); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 20px; background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,151,58,.06) 0%, transparent 70%); }
  .seyebrow { font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
  .stitle { font-family: 'Playfair Display', serif; font-size: 40px; font-weight: 700; color: var(--txt); text-align: center; margin-bottom: 8px; line-height: 1.1; }
  .ssub { font-size: 14px; color: var(--mut); margin-bottom: 36px; text-align: center; }
  .sbox { width: 100%; max-width: 560px; background: var(--card); border: 1px solid var(--bdr2); border-radius: 12px; padding: 6px 6px 6px 18px; display: flex; align-items: center; gap: 10px; transition: border-color .2s, box-shadow .2s; }
  .sbox:focus-within { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(201,151,58,.1); }
  .sbox input { flex: 1; background: none; border: none; outline: none; font-family: 'DM Sans', sans-serif; font-size: 15px; color: var(--txt); }
  .sbox input::placeholder { color: var(--sub); }
  .sbtn { background: linear-gradient(135deg,#C9973A,#A07320); border: none; border-radius: 8px; padding: 10px 18px; color: #fff; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; white-space: nowrap; transition: opacity .2s; }
  .sbtn:hover { opacity: .88; }
  .sugg { width: 100%; max-width: 560px; background: var(--card2); border: 1px solid var(--bdr2); border-radius: 10px; margin-top: 6px; overflow: hidden; }
  .sugrow { padding: 11px 18px; cursor: pointer; font-size: 13px; color: var(--txt); border-bottom: 1px solid var(--bdr); display: flex; align-items: center; gap: 10px; transition: background .15s; }
  .sugrow:last-child { border-bottom: none; }
  .sugrow:hover { background: rgba(201,151,58,.07); }
  .schips { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 24px; max-width: 560px; }
  .chip { background: var(--card); border: 1px solid var(--bdr); border-radius: 20px; padding: 5px 13px; font-size: 12px; color: var(--mut); cursor: pointer; transition: all .15s; }
  .chip:hover { border-color: var(--gold); color: var(--glt); }

  /* Results layout */
  .res { max-width: 1340px; margin: 0 auto; padding: 24px 22px 60px; }
  .rtop { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; flex-wrap: wrap; gap: 10px; }
  .raddr { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 600; color: var(--txt); }
  .rmeta { font-size: 12px; color: var(--mut); margin-top: 2px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .bbtn { background: var(--card); border: 1px solid var(--bdr); border-radius: 8px; padding: 7px 13px; font-size: 12px; color: var(--mut); cursor: pointer; transition: all .15s; }
  .bbtn:hover { border-color: var(--bdr2); color: var(--txt); }
  .g2 { display: grid; grid-template-columns: 370px 1fr; gap: 18px; align-items: start; }
  @media(max-width:900px) { .g2 { grid-template-columns: 1fr; } }

  /* Cards */
  .card { background: var(--card); border: 1px solid var(--bdr); border-radius: 14px; overflow: hidden; margin-bottom: 18px; }
  .chdr { padding: 14px 18px; border-bottom: 1px solid var(--bdr); display: flex; align-items: center; justify-content: space-between; }
  .ctit { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; color: var(--mut); }
  .cbody { padding: 18px; }

  /* Subject panel controls */
  .frow { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
  .frow:last-child { margin-bottom: 0; }
  .flab { font-size: 13px; color: var(--mut); }
  .fval { font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 500; color: var(--txt); min-width: 60px; text-align: right; }
  .stpr { background: var(--card2); border: 1px solid var(--bdr2); border-radius: 6px; display: flex; align-items: center; }
  .stpbtn { background: none; border: none; color: var(--mut); font-size: 16px; width: 28px; height: 28px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: color .15s; }
  .stpbtn:hover { color: var(--gold); }
  .stpval { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--txt); min-width: 28px; text-align: center; }
  .rinput { width: 100%; height: 4px; border-radius: 2px; outline: none; border: none; background: var(--card2); cursor: pointer; accent-color: var(--gold); appearance: none; }
  .rinput::-webkit-slider-runnable-track { background: linear-gradient(to right, var(--gold) 0%, var(--gold) var(--pct, 50%), var(--card2) var(--pct, 50%), var(--card2) 100%); height: 4px; border-radius: 2px; }
  .rinput::-webkit-slider-thumb { -webkit-appearance: none; width: 14px; height: 14px; border-radius: 50%; background: var(--gold); cursor: pointer; margin-top: -5px; }
  .tchip { border: 1px solid var(--bdr2); border-radius: 6px; padding: 5px 11px; font-size: 12px; color: var(--mut); cursor: pointer; transition: all .15s; }
  .tchip.on { background: rgba(201,151,58,.12); border-color: rgba(201,151,58,.4); color: var(--glt); }
  .cbtn { flex: 1; padding: 5px 4px; font-size: 10px; font-weight: 600; letter-spacing: .5px; text-align: center; border-radius: 6px; cursor: pointer; border: 1px solid var(--bdr2); color: var(--mut); transition: all .15s; text-transform: uppercase; }
  .cbtn.active { background: rgba(201,151,58,.15); border-color: rgba(201,151,58,.5); color: var(--glt); }

  /* Estimate card */
  .ecard { background: var(--card); border: 1px solid var(--bdr); border-radius: 14px; overflow: hidden; margin-bottom: 18px; }
  .etop { background: linear-gradient(135deg,#0E1A2C 0%,#0A1520 100%); border-bottom: 1px solid var(--bdr); padding: 26px 26px 22px; position: relative; overflow: hidden; }
  .etop::before { content: ''; position: absolute; top: -40px; right: -40px; width: 180px; height: 180px; border-radius: 50%; background: radial-gradient(circle, rgba(201,151,58,.08) 0%, transparent 70%); }
  .elab { font-size: 10px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--mut); margin-bottom: 6px; }
  .eval { font-family: 'Playfair Display', serif; font-size: 48px; font-weight: 700; color: var(--glt); line-height: 1; margin-bottom: 8px; transition: all .3s; }
  .ebar { width: 100%; height: 6px; background: var(--card2); border-radius: 3px; position: relative; overflow: visible; margin-top: 14px; }
  .efill { height: 100%; background: linear-gradient(90deg,#C9973A,#E8B95A); border-radius: 3px; transition: width .6s ease; }
  .edot { position: absolute; top: 50%; transform: translate(-50%,-50%); width: 14px; height: 14px; border-radius: 50%; background: var(--gold); box-shadow: 0 0 0 3px rgba(201,151,58,.25); transition: left .6s ease; }
  .rends { display: flex; justify-content: space-between; margin-top: 5px; }
  .rend { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--sub); }
  .cbadges { display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap; }
  .cbadge { display: flex; align-items: center; gap: 5px; font-size: 10px; padding: 3px 9px; border-radius: 4px; }
  .cbadge.hi { background: rgba(34,197,94,.1); color: #4ADE80; border: 1px solid rgba(34,197,94,.2); }
  .cbadge.md { background: rgba(234,179,8,.1); color: #FCD34D; border: 1px solid rgba(234,179,8,.2); }

  /* Drivers */
  .dbody { padding: 16px 18px; }
  .drow { display: flex; align-items: center; gap: 10px; margin-bottom: 11px; }
  .drow:last-child { margin-bottom: 0; }
  .dlab { font-size: 12px; color: var(--mut); width: 110px; flex-shrink: 0; }
  .dbwrap { flex: 1; height: 4px; background: var(--card2); border-radius: 2px; position: relative; }
  .dbar { position: absolute; height: 100%; border-radius: 2px; transition: width .5s ease; }
  .dbar.pos { background: var(--grn); right: 50%; transform-origin: right; }
  .dbar.neg { background: var(--red); left: 50%; }
  .dctr { position: absolute; left: 50%; top: -3px; width: 1px; height: 10px; background: var(--sub); }
  .dval { font-family: 'JetBrains Mono', monospace; font-size: 11px; width: 68px; text-align: right; flex-shrink: 0; }
  .dval.pos { color: var(--grn); } .dval.neg { color: var(--red); } .dval.neu { color: var(--mut); }

  /* Comps table */
  .ctable { width: 100%; border-collapse: collapse; font-size: 12px; }
  .ctable th { padding: 7px 11px; text-align: left; font-size: 9px; font-weight: 600; letter-spacing: 1.2px; text-transform: uppercase; color: var(--sub); border-bottom: 1px solid var(--bdr); white-space: nowrap; }
  .ctable td { padding: 11px 11px; border-bottom: 1px solid var(--bdr); vertical-align: middle; }
  .ctable tr:last-child td { border-bottom: none; }
  .ctable tr:hover td { background: rgba(255,255,255,.02); }
  .cadr { font-weight: 500; color: var(--txt); font-size: 13px; }
  .cdst { font-size: 10px; color: var(--sub); margin-top: 2px; }
  .cprice { font-family: 'JetBrains Mono', monospace; font-weight: 500; color: var(--txt); }
  .cadj { font-family: 'JetBrains Mono', monospace; font-size: 11px; }
  .cadj.pos { color: var(--grn); } .cadj.neg { color: var(--red); } .cadj.z { color: var(--sub); }
  .cfinal { font-family: 'JetBrains Mono', monospace; font-weight: 600; color: var(--glt); }
  .ctag { font-size: 9px; padding: 2px 6px; border-radius: 3px; font-weight: 600; letter-spacing: .5px; white-space: nowrap; }
  .ctag.sold { background: rgba(34,197,94,.1); color: #4ADE80; border: 1px solid rgba(34,197,94,.2); }
  .ctag.pend { background: rgba(234,179,8,.1); color: #FCD34D; }

  /* Market stats */
  .sgrid { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; padding: 16px 18px; }
  @media(max-width:600px) { .sgrid { grid-template-columns: 1fr 1fr; } }
  .sbox2 { background: var(--card2); border-radius: 10px; padding: 13px; }
  .slab { font-size: 9px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--sub); margin-bottom: 5px; }
  .sval { font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 500; color: var(--txt); }
  .sdlt { font-size: 10px; margin-top: 2px; }
  .sdlt.up { color: var(--grn); } .sdlt.dn { color: var(--red); } .sdlt.fl { color: var(--mut); }

  /* Misc */
  .mbadge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 8px; border-radius: 4px; background: rgba(59,130,246,.1); border: 1px solid rgba(59,130,246,.2); font-size: 10px; color: #60A5FA; font-weight: 500; }
  .dlive { width: 6px; height: 6px; border-radius: 50%; background: var(--grn); display: inline-block; box-shadow: 0 0 0 2px rgba(34,197,94,.3); animation: blink 2s ease infinite; }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.4} }
  .pulse { animation: pulse .8s ease; }
  @keyframes pulse { 0%,100%{opacity:1} 40%{opacity:.3} }
  ::-webkit-scrollbar { width: 5px; height: 5px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--sub); border-radius: 3px; }
`;

export default styles;
