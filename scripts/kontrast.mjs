// Rechnet jede Paarung der Palette gegen WCAG. Keine Pakete, kein Browser.
const P = {
  eiche:'#1B1411', eicheTief:'#110C0A',
  sandstein:'#E3D7C0', sandsteinHell:'#F0E7D6',
  tinte:'#231A13', tinteWeich:'#4C3D30',
  leinen:'#F0E6D4', leinenWeich:'#BCAE97',
  kognak:'#8C3A1C', kognakHell:'#D08A4E',
  terrakotta:'#A8583A', kerbe:'#6B5540', kerbeHell:'#7E6650',
};
const lin = c => (c/=255) <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4);
const lum = h => { const n=parseInt(h.slice(1),16);
  return 0.2126*lin(n>>16&255)+0.7152*lin(n>>8&255)+0.0722*lin(n&255); };
const k = (a,b) => { const [x,y]=[lum(a),lum(b)].sort((m,n)=>n-m); return (x+0.05)/(y+0.05); };
const paare = [
  ['tinte','sandstein',4.5],['tinte','sandsteinHell',4.5],
  ['tinteWeich','sandstein',4.5],['tinteWeich','sandsteinHell',4.5],
  ['leinen','eiche',4.5],['leinen','eicheTief',4.5],
  ['leinenWeich','eiche',4.5],['leinenWeich','eicheTief',4.5],
  ['kognak','sandstein',4.5],['kognak','sandsteinHell',4.5],
  ['kognakHell','eiche',4.5],['kognakHell','eicheTief',4.5],
  ['kerbe','sandstein',3.0],['kerbeHell','eiche',3.0],['kerbeHell','eicheTief',3.0],
  ['terrakotta','eiche',3.0],['terrakotta','sandstein',3.0],
];
let schlecht=0;
for (const [a,b,soll] of paare) {
  const w = k(P[a],P[b]);
  const ok = w >= soll;
  if (!ok) schlecht++;
  console.log(`${ok?'ok  ':'FAIL'} ${a.padEnd(14)} auf ${b.padEnd(14)} ${w.toFixed(2)}:1  (soll ${soll})`);
}
console.log(schlecht ? `\n${schlecht} Paarungen fallen durch.` : '\nAlle Paarungen bestehen.');
