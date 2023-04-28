const { element, by, browser } = require("protractor");

let deleteComputer = function () {
  this.userdeletecomputer = function () {
    it ("delete existing computer", function(){
      //going to the homepage
      element(by.xpath("//a[contains(text(),'Computer database')]")).click();
      browser.sleep(2000);
      //going to the next page
      element(by.xpath("//a[contains(text(),'Next →')]")).click();
      browser.sleep(1000);
      //going again to the next page
      element(by.xpath("//a[contains(text(),'Next →')]")).click();
      browser.sleep(1000);
      //selecting a computer
      element(by.xpath("//a[contains(text(),'Amiga 1500')]")).click();
      browser.sleep(3000);
      //click on the delete button
      element(by.xpath("/html[1]/body[1]/section[1]/form[2]/input[1]")).click(); 
      browser.sleep(3000);
      //verification
      let del = element(by.xpath("//body/section[@id='main']/div[1]"));
      expect (del.getText()).toEqual("Done ! Computer Amiga 1500 has been deleted");

    });
  };
};

module.exports = new deleteComputer();