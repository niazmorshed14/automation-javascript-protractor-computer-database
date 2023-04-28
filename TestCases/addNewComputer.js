const { Browser } = require("selenium-webdriver")

let addCom = function() {

  this.addNewComputer = function() {


  it ("Add New Computer with all credentials", function(){
    element (by.xpath("//a[@id='add']")).click(); //clicking on the add new computer
    browser.sleep(1500);

    //filling up the data

    let ComputerName = element (by.xpath("//input[@id='name']"));
    ComputerName.click();
    ComputerName.sendKeys("Niaz PC")
    browser.sleep(1000);

    let introDuced = element (by.xpath("//input[@id='introduced']"));
    introDuced.click();
    introDuced.sendKeys("2022-04-20");
    browser.sleep(1000);

    let disContinued = element (by.xpath("//input[@id='discontinued']"));
    disContinued.click();
    browser.sleep(1000);
    

    //clicking on the dropdown

    element (by.xpath("//select[@id='company']")).click();
    browser.sleep(1000);

    //scroling down the page. though, it's not needed here

    browser.manage().timeouts().implicitlyWait(4000);
    
    browser.executeScript("window.scrollTo(0, 8000);").then (function(){
      browser.sleep(1000);
    });
    
    //selecting a company

    element (by.xpath("//option[contains(text(),'Sun Microsystems')]")).click();
    browser.sleep(1000);

    //click on create this computer button

    element (by.xpath("//body/section[@id='main']/form[1]/div[1]/input[1]")).click();
    browser.sleep (3000);
    
    //verification

    let verification = element (by.xpath("//body/section[@id='main']/div[1]"));
    expect (verification.getText()).toEqual("Done ! Computer Niaz PC has been created");


  });


};

};

module.exports = new addCom();