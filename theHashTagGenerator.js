String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const generateHashtag = (str) => {
if(str.trim().length === 0) {
  return false;
}
str = str.split(' ');
if(str[str.length - 1] > 139) {
  return false;
}
for(let s in str) {
  str[s] = str[s].capitalize();
};
return str.join('').length > 139 ? false : `#${str.join('')}`;
}