const { browser } = require("protractor");

let accessNewComputer = require ("./TestCases/addNewComputer.js");
let accessSearchPC = require ("./TestCases/searchExistingPC.js");

let accessUpdatePC = require ("./TestCases/updatingComputer.js");

let accessdeletecomputer = require ("./TestCases/deleteComputer.js");


describe ("Computer Database", function(){
  beforeEach(function(){
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 300000;
});
  afterEach(function(){

    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;

  });

  it ("Computer Database CD", function(){

    browser.waitForAngularEnabled(false);
    //browser.ignoreSynchronization = true;

    browser.get("https://computer-database.gatling.io/");
    browser.sleep(1000);
    browser.manage().window().maximize();
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual("Computers database");


  });
  


accessNewComputer.addNewComputer();
accessSearchPC.userSearch();
accessUpdatePC.userupdatecomputer();
accessdeletecomputer.userdeletecomputer();
  
});
