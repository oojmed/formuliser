async function getCIDFromName(name) {
  return await (await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${name}/cids/TXT`)).json();
}

async function getCIDSFromFormula(formula) {
  return (await (await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/fastformula/${formula}/cids/JSON`)).json()).IdentifierList.CID;
}

async function getCIDRecord(cid) {
  return (await (await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/record/JSON`)).json()).PC_Compounds[0];
}

async function getImageURLFromCID(cid) {
  return `https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=${cid}&t=l`;
}

async function getImageURLFromName(name) {
  return `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${name}/PNG`;
}

async function compoundNameFromCID(cid) {
  return (await getCIDRecord(cid)).props.filter((x) => x.urn.label === 'IUPAC Name')[0].value.sval
}

async function getCompoundsFromFormula(formula) { // DO NOT USE
  let cids = (await getCIDSFromFormula(formula));

  let names = [];

  for (let cid of cids) {
    // names.push((await getCIDRecord(cid)).props.filter((x) => x.urn.label === 'IUPAC Name')[0].value.sval);
  }

  return names;
}

async function getImageURLFromFormula(formula) { // DO NOT USE
  let cid = (await getCIDSFromFormula(formula))[0];

  return [(await getImageURLFromCID(cid)), (await getCIDRecord(cid)).props.filter((x) => x.urn.label === 'IUPAC Name')[0].value.sval];
}

export async function setImageFromName(name) {
  let r = await getImageURLFromName(name);

  document.getElementById('model-image').src = r;

  document.getElementById('model-label').innerText = name;
}

export async function setImageFromFormula(formula) {
  let r = await getImageURLFromFormula(formula);

  document.getElementById('model-image').src = r[0];
  document.getElementById('model-label').innerText = titleCase(r[1].replace(';', ' '));
}

export async function setImage(formula, name) {
  if (name !== '') {
    setImageFromName(name);

    setTimeout(function() {
      if (document.getElementById('model-image').naturalWidth === 0) {
        setImageFromFormula(formula);
      }
    }, 500);
  } else {
    setImageFromFormula(formula);
  }
}