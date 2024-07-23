// L'acide désoxyribonucléique (ADN) est la principale molécule de stockage d'informations dans les systèmes biologiques. Il est composé de quatre bases d'acide nucléique : la guanine (« G »), la cytosine (« C »), l'adénine (« A ») et la thymine (« T »).

// L'acide ribonucléique, ARN, est la principale molécule messagère des cellules. L'ARN diffère légèrement de l'ADN par sa structure chimique et ne contient pas de thymine. Dans l'ARN, la thymine est remplacée par un autre acide nucléique, l'uracile (« U »).

// Créez une fonction qui traduit une chaîne d’ADN donnée en ARN.

// Par exemple:

// "GCAT"  =>  "GCAU"
// La chaîne d'entrée peut être de longueur arbitraire, en particulier elle peut être vide. Toutes les entrées sont garanties valides, c'est-à-dire que chaque chaîne d'entrée ne sera composée que de 'G', 'C'et 'A'/ou 'T'.

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence?
  //   Comprendre le Problème :

  // Vous avez une chaîne d'ADN composée de caractères 'G', 'C', 'A', et 'T'.
  // Vous devez traduire cette chaîne en une chaîne d'ARN où 'T' est remplacé par 'U'.
  let arn = '';
  for ( let ele of dna){   
    if(ele === 'T'){
      arn += 'U';
    }else{
      arn += ele;
    }
  }
  return arn;
}

console.log(DNAtoRNA("TTTT")); // "UUUU"
console.log(DNAtoRNA("GCAT")); //"GCAU")
console.log(DNAtoRNA("GACCGCCGCC")); // "GACCGCCGCC"
