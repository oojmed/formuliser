import { expandFormula, flattenFormula } from '/js/utils/process';
import { subscriptise, unsubscriptise } from '/js/utils/subscriptise';

function constructMatrix(eqn) {
  var reactants=eqn[0];
  var products=eqn[1];

  var terms=reactants.length+products.length;
  var mat=new Array(terms);
  for(var i=0;i<terms;++i) {
      mat[i]=new Array(terms).fill(0)
  }
  var vec=new Array(terms).fill(0)

  
  var elements=[];
  var all=[...reactants,...products].reduce((a,b)=>a.concat(b),[])
  all=all.map(o=>o.replace(/[0-9]/g,''))
  all=[...new Set(all)].sort();


  for(var i=0;i<all.length;++i) {
      var el=all[i];
      var r=new RegExp('^'+el+'([0-9]*)$');
      for(var j=0;j<reactants.length;++j) {
          var hasEl=reactants[j].filter(o=>o.match(r));
          if(!hasEl.length)continue;
          var n=hasEl.map(o=>(o.match(r)[1]||"1")/1).reduce((a,b)=>a+b,0);
          mat[i][j]=n;
      }
      for(var j=0;j<products.length;++j) {
          var hasEl=products[j].filter(o=>o.match(r));
          if(!hasEl.length)continue;
          var n=hasEl.map(o=>(o.match(r)[1]||"1")/1).reduce((a,b)=>a+b,0);
          mat[i][j+reactants.length]=-n;
      }
  }
  for(var i=all.length;i<terms;++i) {
      mat[i][i]=1;
      vec[i]=1;
  }
  return {matrix:mat,vector:vec}
}

function inv(ar) {
  var l=ar.length;
  ar=JSON.parse(JSON.stringify(ar));
  for(var i=0;i<ar.length;++i) {
      for(var j=0;j<ar.length;++j)
          ar[i].push(+(i==j))
  }
  for(var i=0;i<ar.length;++i) {
      // pivot is at i,i, we want everything below pivot to be o
      while(ar[i][i]==0) {
          ar.push(...ar.splice(i,1))
      }
      for(var j=0;j<ar.length;++j) {
          if(ar[j][i]==0)continue;
          if(j==i)continue;
          var n=ar[j][i]/ar[i][i];
          for(var k=0;k<ar[0].length;++k)
              ar[j][k]-=n*ar[i][k];
      }
  }
  for(var i=0;i<ar.length;++i) {
      var n=ar[i][i];
      for(var j=0;j<ar[0].length;++j) {
          ar[i][j]/=n
      }
  }
  return ar.map(o=>o.slice(-ar.length));
}
function mul(mat,vec) {
  var res=new Array(vec.length).fill(0)
  for(var i=0;i<mat.length;++i) {
      for(var j=0;j<mat.length;++j) {
          res[i]+=mat[i][j]*vec[j]
      }
  }
  return res;
}


export function balanceEquation(eq) {
  let input = unsubscriptise(eq).split('→').map((x) => x.replace(/ /g, '').split('+')).map((x) => x.map((y) => {
    console.log(x, y, flattenFormula(expandFormula(y)));
    return flattenFormula(expandFormula(y));
  }));

  var {matrix,vector}=constructMatrix(input)
  var i=inv(matrix);
  var m=mul(i,vector);
  var min=Math.min(...m)
  var coefficients=m.map(o=>Math.round(o/min))
  var coef=coefficients.slice()

  var reactants=input[0];
  var products=input[1];
  for(var i=0;i<reactants.length;++i) {
      let cCoef = coefficients.shift();
      reactants[i] = (cCoef === 1 ? '' : cCoef.toString()) + reactants[i].join('')
  }
  for(var i=0;i<products.length;++i) {
      let cCoef = coefficients.shift();
      products[i] = (cCoef === 1 ? '' : cCoef.toString()) + products[i].join('')
  }

  //return {coefficients:coef,result:[reactants,products]}

  return subscriptise(`${reactants.join(' + ')} → ${products.join(' + ')}`);
}