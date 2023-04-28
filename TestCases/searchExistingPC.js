const { element, browser, by } = require("protractor");
const { BrowserStack } = require("protractor/built/driverProviders");

let searchPC = function() {

  this.userSearch = function () {

    it ("going to the homepage and search existing pc", function(){
      element (by.xpath("//a[contains(text(),'Computer database')]")).click();
    
      browser.sleep(3000);
  
      // go the next page
  
      element (by.xpath("//a[contains(text(),'Next →')]")).click();
    

      //searching a computer

      let inputfileld = element (by.xpath("//input[@id='searchbox']"));
      inputfileld.click();
      inputfileld.sendKeys("Acer Iconia");
      browser.sleep(2000);
      element (by.xpath("//input[@id='searchsubmit']")).click();
      browser.sleep(2000);

      //clicking on the searched computer

      element (by.xpath("//a[contains(text(),'Acer Iconia')]")).click();
      browser.sleep(3000);

  
    });

  };
};

module.exports = new searchPC();

  
