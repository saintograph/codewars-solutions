const rgbToHex = (rgb) => {
  if(rgb >= 255) {
    return 'FF'
  }
  if(rgb <= 0) {
    return '00'
  }
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

function rgb(r, g, b){
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return `${red}${green}${blue}`.toUpperCase();
}