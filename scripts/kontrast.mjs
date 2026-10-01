// Rechnet jede Paarung der Palette gegen WCAG. Keine Pakete, kein Browser.
// Stand Palette Blau/Navy/Creme/Orange (30.09.2026). Werte aus css/tokens.css.
// leinen ist heute Kalk, leinenTief ist Sand (Tokennamen aus der ersten Fassung).
const P = {
  leinen:'#FAF5EC', leinenTief:'#F1E8D8', weiss:'#FFFFFF',
  tinte:'#1E3450', tinteWeich:'#4E5D70',
  eiche:'#1E3450', logoblau:'#305071',
  orange:'#F28C38', orangeHover:'#FFA050', orangeDunkel:'#C2542A',
  aufEiche:'#FAF5EC', aufEicheWeich:'#C3D3E4', aufBlauWeich:'#C3D3E4',
  treffer:'#F8D2AE', feldrand:'#7A8494',
};
const lin = c => (c/=255) <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4);
const rgb = h => { const n=parseInt(h.slice(1),16); return [n>>16&255, n>>8&255, n&255]; };
const lum = h => { const [r,g,b]=rgb(h); return 0.2126*lin(r)+0.7152*lin(g)+0.0722*lin(b); };
const k = (a,b) => { const [x,y]=[lum(a),lum(b)].sort((m,n)=>n-m); return (x+0.05)/(y+0.05); };
// Das Milchglas liegt ueber Fotos. Gerechnet wird der schlechteste Fall:
// 70 % #F5EDE3 ueber reinem Schwarz, was nach 20px Weichzeichnung im
// Foto nicht vorkommt.
const mische = (vorn, a, hinten) => '#' + rgb(vorn).map((v,i) =>
  Math.round(a*v + (1-a)*rgb(hinten)[i]).toString(16).padStart(2,'0')).join('');
P.glasSchwarz = mische('#FAF5EC', 0.88, '#000000');

const paare = [
  ['tinte','leinen',4.5],['tinte','leinenTief',4.5],['tinte','treffer',4.5],
  ['tinteWeich','leinen',4.5],['tinteWeich','leinenTief',4.5],['tinteWeich','weiss',4.5],
  ['eiche','leinen',4.5],['eiche','leinenTief',4.5],
  ['logoblau','leinen',4.5],['logoblau','leinenTief',4.5],['logoblau','treffer',4.5],
  ['aufEiche','eiche',4.5],['aufEicheWeich','eiche',4.5],
  ['eiche','orange',4.5],['eiche','orangeHover',4.5],
  ['orangeDunkel','leinen',3.0],['orangeDunkel','leinenTief',3.0],['orangeDunkel','glasSchwarz',3.0],
  ['aufEiche','logoblau',4.5],['aufBlauWeich','logoblau',4.5],
  ['eiche','treffer',4.5],
  ['tinte','glasSchwarz',4.5],['eiche','glasSchwarz',4.5],
  ['feldrand','weiss',3.0],['feldrand','leinen',3.0],
];
let schlecht=0;
for (const [a,b,soll] of paare) {
  const w = k(P[a],P[b]);
  const ok = w >= soll;
  if (!ok) schlecht++;
  console.log(`${ok?'ok  ':'FAIL'} ${a.padEnd(13)} auf ${b.padEnd(10)} ${w.toFixed(2)}:1  (soll ${soll})`);
}
console.log('\nAuf dem Glas ueber Fotos stehen nur tinte und eiche, nie tinteWeich.');
console.log(schlecht ? `\n${schlecht} Paarung(en) fallen durch.` : '\nAlle Paarungen bestehen.');
process.exit(schlecht ? 1 : 0);
