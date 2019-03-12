const meeting = s => {
  const result = [];
  let final = "";
  s = s.split(';');
  s.forEach(x => {
    result.push(x.split(':').reverse().join(',').toLowerCase())
  })
  result.sort();
  for(let i = 0; i < result.length; i++) {
    result[i] = result[i].split(',').join(', ');
  }
  while(result.length !== 0) {
    final = final + `(${result.shift().toUpperCase()})`
  }
  return final;
}

// const string = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

const string = "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn";

meeting(string);