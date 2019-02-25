function list(n){
  let names = [];
  if(n.length === 0) {
    return '';
  }
  if(n.length === 1) {
    return n[0].name;
  }
  if(n.length === 2) {
    return `${n[0].name} & ${n[1].name}`
  }
  for(let i = 0; i < n.length - 1; i++) {
    names.push(n[i].name);
  }
  names = names.join(', ');
  return `${names} & ${n[n.length - 1].name}`;
}

list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])