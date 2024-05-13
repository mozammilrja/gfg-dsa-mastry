// function patSearchinng(txt, pat){
//     let m = pat.length;
//     let n = txt.length;
//     for(let i=0;i<=(n-m);i++){
//         let j;
//         for(j=0;j<m;j++)
//         if(pat[j]!==txt[i+j])
//         break;

//         if(j===m)
//         console.log(i);
//     }
// }

// let txt = "ABCABCD";let pat="ABCD";
// console.log("All index numbers where pattern found: ");
// patSearchinng(txt,pat);
function patSearchinng(txt, pat) {
  let m = pat.length;
  let n = txt.length;
  for (let i = 0; i <= n - m; i++) {
    let j;
    for (j = 0; j < m; j++) if (pat[j] !== txt[i + j]) break;

    if (j === m) {
      return true;
    }
  }
  return false;
}

let txt = "ABCABCD";
let pat = "ABCD";
console.log(patSearchinng(txt, pat));
