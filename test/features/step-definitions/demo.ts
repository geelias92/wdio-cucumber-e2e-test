import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

// Given(/^Google page is opened$/, async function () {
//   console.log("Before opening browser...");
//   await browser.url("https://www.google.com");
//   await browser.pause(4000);
//   console.log("After opening browser...");
// });
// When(/^Search with (.*)/, async function (searchItem) {
//   console.log(`>> searchItem: ${searchItem}`);
//   let ele = await $(`[name=q]`);
//   await ele.setValue(searchItem);
//   await browser.keys("\uE007"); //this code represents "Enter"
// });

// Then(/Click on the first search result$/, async function () {
//   let ele2 = await $(`<h3>`);
//   await ele2.click();
// });

// Then(/URL should match "(.*)"/, async function (expectedURL) {
//   console.log(`>> expectedURL: ${expectedURL}`);
//   let url = await browser.getUrl();
//   chai.expect(url).to.equal(expectedURL);
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                          NEW TEST (INPUT)

/*
Web Interactions
*/

Given(/^A web page is opened$/, async function () {
  await browser.url("/upload"); //just by adding the endpoint this will navigate directely
  await browser.setTimeout({ implicit: 80000, pageLoad: 80000 });
  await browser.pause(3000)
  // await browser.maximizeWindow()
});

When(/^Perform web Interactions$/, async function () {
  /**
   * 1. Input Box
   * Actions:
   * 1. Type into input box
   * 2. Clear the field and type or just add value
   * 3. Click and type
   * 4. Slow typing
   */

//   let ele = await $(`[type=number]`);
//   await ele.setValue("12345");
//   await browser.pause(3000);
/**Another Example:
 * let num = 12345
 * let strNum = num.toString()
 * let ele = await $(`[type=number]`)
 * await ele.click()
 * await ele.setValue(strNum)
 * await browser.debug
 *
 */

/**
 * one more EXAMPLE TO WRITE THE NUMBER SLOWLY
 *
 *  let num = 12345
 * let strNum = num.toString()
 * let ele = await $(`[type=number]`)
 * await ele.click()
 * for(let i =0; i < strNum.length; i++){
 * let charStr = strNum.charAt(i)
 * await browser.pause(1000)
 * await browser.keys(charStr)
 *
 * }
 *
 * by doing this it will allow the numbers to be entered slowly
 */
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                 NEW (DROPDOWN TEST)
    /**
     * 2. Dropdown
     * Actions:
     * 1 Assert deffault option is selected
     * 2 Select by attribute, text , index
     * 3. Get a list of options
     */

    /**
     * Assert Default option is selected
     */
  // let ele2 = await $('//select /option[@selected="selected"]');
  // let val = ele2.getText();
  // chai.expect(val).to.equal("Please select an option");



// select by attribute, text , index

    // let drpDoele = await $('#dropdown')
    // await drpDoele.selectByVisibleText("Option 2")
    // await drpDoele.selectByIndex(2)
    // await drpDoele.selectByAttribute('value', 'option1')

    /**
     * 3. Get a list of options:
     */
    // let eleArr = await $$(`select > option`)
    // let arr = []
    // for(let i = 0; i< eleArr.length; i++){
    //     let ele = eleArr[i]
    //     let val = await ele.getText()
    //     arr.push(val)
    //     console.log(val);

    // }
    // console.log(`>> Options Array: ${arr}`);
    

/**VERY IMPORTANT NOTE: FOR THE ABOVE CODE:
 * This code retrieves all the <option> elements that are direct children of <select> elements
 *  using the selector select > option. The $$ function is used to find multiple elements
 *  that match the selector.

The code then initializes an empty array arr to store the option values. 
It uses a for loop to iterate over each element in the eleArr array, which 
contains the selected <option> elements.

Within the loop, it assigns each element to the variable ele. 
The getText() method is then called on ele to retrieve the text content of the option.
 This value is stored in the variable val.

The val is then pushed into the arr array using the push() method. Additionally,
 val is logged to the console using console.log(val).

After the loop finishes, the code logs the entire arr array to the console using
 console.log(>> Options Array: ${arr}).

Overall, this code snippet iterates over all the selected <option> elements, 
retrieves their text values, and stores them in an array. Finally, it logs each
 value individually and the entire array to the console.
 * 
 */





//////////////////////////////////////////////////////////////////////////////////////////////////
                                      //NEW TEST (CHECKBOX)



  

  /**
   * 4. CheckBox
   * Actions:
   * 1. Select ana option
   * 2. Unselect an option (if selected)
   * 3. Assert if option is selected
   * 4. Select all options
   */

  // Unselect an option (if selected)
  // // let ele4 = $(`//form[@id="checkboxes"]/input[1]`)
  // if(!await ele4.isSelected()){
  //   ele4.click()
    
  // }
  //Assert if option is selected
  // let ele = $(`//form[@id="checkboxes"]/input[1]`)
  // let isChecked = await ele.isSelected()
  // chai.expect(isChecked).to.be.false


  // Select all options
  // let eleArr2 = await $$(`//form[@id="checkboxes"]/input`)
  // for(let i = 0; i < eleArr2.length; i++){
  //      let ele = eleArr2[i]
  //      if(!await ele.isSelected()){
  //       ele.click()
  //       await browser.pause(3000)
  // }





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////NEW TEST WINDOW-HANDLE


/**
 * 5. Window handling
 * Steps:
 * Launch the browser
 * 2. open another windos 
 * 3. Switch to the window based on title 
 * 4. Switch back to the main window 
 * 
 * 
 * Methods used:
 * 1. getTitle()
 *2. getWindowHandle()
 * 3. getWindowHandles()
 * 4. switchToWindow()
 * 
 * 
 */

  //open new windows
  // await $(`Click Here`).click()
  // await $(`Elemental Selenium`).click()
  // let currentWinTitle = await browser.getTitle()
  // let parentWindowHandle = await browser.getWindowHandle()
  // console.log(`>> currentWinTitle: ${currentWinTitle}`);

// switch to specific window

  // let winHandles = await browser.getWindowHandles()
  // for(let i = 0; i < winHandles.length; i++){
  //   console.log(`>> Win Handles: ${winHandles[i]}`);
  //   await browser.switchToWindow(winHandles[i])
  //   currentWinTitle = await browser.getTitle()
  //   if (currentWinTitle === "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"){
  //     await browser.switchToWindow(winHandles[i])
  //     let headerTxtEleSel = await $(`<h1>`).getText()
  //     console.log(`>> headerTxtEleSel: ${headerTxtEleSel}`);

      // Rest of the actions go here
  //     break
  //   }
  // }

  // switch back to parent window

  // await browser.switchToWindow(parentWindowHandle)
  // let parentWinHeaderTxt = await $(`<h3>`).getText()
  // console.log(`>> parentWinHeaderTxt: ${parentWinHeaderTxt}`);
  // await browser.pause(4000)




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// NEW TEST (ALERT.POP UP WINDOWS)


  /**
   * 6. Handling Alerts
   * 
   * Methods Used:
   * 
   * 1. isAlertOpen()
   * 2. acceptAlert()
   * 3. dismissAlert()
   * 4. getAlertText()
   * 5. sendAlertText()
   * 
   */


  // this is to handle basic_auth alert
  //by adding the username and password //EX:  baseUrl: 'https://admin:admin@the-internet.herokuapp.com/'
  //

    // await $(`button=Click for JS Prompt`).click()
    // if(await browser.isAlertOpen()){
    //   let alertText = await browser.getAlertText()
    //   console.log(`>> alertText: ${alertText}`);
    //   await browser.sendAlertText("Hello JS Prompt...")

    //   await browser.dismissAlert()
    //   await browser.pause(8000)
    // }


  /////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////NEW TEST (FILE UPLOAD)

  // await $(`#file-upload`).addValue("../../../data/fileupload/dummy,txt")
  // await $(`#file-upload`).addValue(`${process.cwd}/data/fileupload/dummy,txt`)
  // await $(`#file-submit`).click()
  // await browser.pause(3000)











/////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////NEW TEST (Frames)




// await $(`=Frame`).click()
// let ele = await $(`#mce_0_ifr`)
// await browser.switchToFrame(ele)
// //Interaction with frame
// await $(`#tinymce`).setValue(`Typing into a frame...`)
// await browser.switchToParentFrame()











/////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////NEW TEST (Key press)


  // await $(`=Frame`).click()
  // let ele = await $(`#mce_0_ifr`)
  // await browser.switchToFrame(ele)
  // //Interaction with frame
  // await $(`#tinymce`).click()
  // await browser.keys(["Meta", "A"])
  // await browser.pause(2000)
  // await browser.keys("Delete")
  // await $(`#tinymce`).addValue(`Typing into a frame...`)
  // await browser.switchToParentFrame()






/////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////NEW TEST (Basic Scrolling)



/**
 * 7. Basic Scrolling
 * 
 * Methods: (Element Methods)
 * 1. scrollIntoView
 */

await $(`span=Best Sellers in Books`).scrollIntoView()




































});














