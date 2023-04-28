const { element, browser, ExpectedConditions } = require("protractor");

let updateComputer = function () {
  this.userupdatecomputer = function () {
    it ("updating existing computer", function(){

      //clearing the inputfield
      let cl = element (by.xpath("//input[@id='name']"));
      cl.clear();
      browser.sleep(1000);

      //updating computer name
      let cn = element (by.xpath("//input[@id='name']"));
      cn.click();
      cn.sendKeys("Lenovo 350");
      browser.sleep(1000);

      //updating introduced

      let intro = element (by.xpath("//input[@id='introduced']"));
      intro.click();
      intro.sendKeys("2010-01-01");
      browser.sleep(1000);

      //updating discontinued

      let ds = element (by.xpath("//input[@id='discontinued']"));
      ds.click();
      ds.sendKeys("2011-01-01");
      browser.sleep(1000);
    
      //choosing company; //selecting the dropdown

      element (by.xpath("//select[@id='company']")).click();
      browser.sleep(1000);

      
      //choosing company; //selecting company

      element (by.xpath("//option[contains(text(),'Sony')]")).click();
      browser.sleep(1000);

      //clicking on the save button

      element (by.xpath("//body/section[@id='main']/form[1]/div[1]/input[1]")).click();
      browser.sleep(3000);

      //verification

      let verif = element (by.xpath("//body/section[@id='main']/div[1]"));
      expect (verif.getText()).toEqual("Done ! Computer Lenovo 350 has been updated");




    });
  };
};

module.exports = new updateComputer();