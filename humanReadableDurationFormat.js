const f = (a, b) => (a / b) >> 0;

function formatDuration(sec) {
  if (sec === 0) {
    return 'now';
  }
  let result = '';
  const year = 31536000;
  const day = 86400;
  const hour = 3600;
  const min = 60;
  const s = 1;
  const div = (sec / s) >> 0;
  const dict = {
    year: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  }
  while (sec > 0) {
    if (sec >= year) {
      dict.year = dict.year + f(sec, year);
      sec = sec % year;
    } else if (sec >= day) {
      dict.day = dict.day + f(sec, day);
      sec = sec % day;
    } else if (sec >= hour) {
      dict.hour = dict.hour + f(sec, hour);
      sec = sec % hour;
    } else if (sec >= min) {
      dict.minute = dict.minute + f(sec, min);
      sec = sec % min;
    } else {
      if (sec > 1) {
        dict.second = dict.second + sec;
        sec = 0;
      } else {
        dict.second = dict.second + 1;
        sec = 0;        
      }
    }
  }
  const ret = [];
  Object.keys(dict).map(x => {
    ret.push([x, dict[x]])
  })
  if(ret.filter(x => x[1] !== 0).length === 1) {
    return result.concat(ret.filter(x => x[1] !== 0)[0][1], ' ', ret.filter(x => x[1] !== 0)[0][0], ret.filter(x => x[1] !== 0)[0][1] > 1 ? 's' : '');
  }
  for(let i = 0; i <= ret.length - 1; i++) {
    if(ret[i][1] > 1) {
      result = result.concat(ret[i][1], ` ${ret[i][0]}s`, `${i === ret.length - 1 ? '' : i === ret.length - 2 && ret[i + 1]!== 0 ? ' and ' : ', '}`)
    } else if (ret[i][1] === 1) {
      result = result.concat(ret[i][1], ` ${ret[i][0]}`, `${i === ret.length - 1 ? '' : i === ret.length - 2 && ret[i + 1] !== 0 ? ' and ' : ', '}`)
    }
  }
  if(result[result.length - 1] === ' ') {
    const foo = result; 
    const bar = foo.split(', ');
    const baz = bar[bar.length - 1].split(' ');
    const quux = ` and ${baz[0]} ${baz[1]}`
    bar.pop()
    return bar.join(', ') + quux
  }
  return result;
}