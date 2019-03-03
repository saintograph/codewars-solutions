const getMiddle = s => {
  if(s.length <= 1) {
    return s[0];
  }
  const middle = Math.floor(s.length / 2);
  if(s.length % 2 === 0) {
    return `${s[middle - 1]}${s[middle]}`;
  };
  return s[middle]
}

Test.describe("GetMiddle", function() {
  Test.it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});