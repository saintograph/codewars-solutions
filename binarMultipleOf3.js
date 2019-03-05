const multipleOf3Regex = {
  test: function(a) {
    console.log(a)
    if(typeof a !== 'string') {
      return false
    }
    if(a.indexOf(' ') !== -1) {
      return false;
    }
    a = a.split('');
    a = a.filter(x => parseInt(x) === 0 || parseInt(x) === 1 || parseInt(x) < 0);
    if(a.length < 3) {
      return false;
    }
    if(parseInt(a.join(''), 2) % 3 === 0) {
      return true
    }
    return false;
  }
};

multipleOf3Regex.test(000)


// solution

const multipleOf3Regex = /^((((0+)?1)(10*1)*0)(0(10*1)*0|1)*(0(10*1)*(1(0+)?))|(((0+)?1)(10*1)*(1(0+)?)|(0(0+)?)))$/