import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^Google page is opened$/,async function(){
    console.log("Before opening browser...")
    await browser.url("https://www.google.com")
    await browser.pause(4000)
    console.log("After opening browser...")
})
When(/^Search with (.*)/,async function(searchItem){
    console.log(`>> searchItem: ${searchItem}`)
    let ele = await $(`[name=q]`) 
    await ele.setValue(searchItem)
    await browser.keys("\uE007") //this code represents "Enter"
})

Then(/Click on the first search result$/,async function(){
    let ele2 = await $(`<h3>`)
    await ele2.click()
})

Then(/URL should match "(.*)"/,async function(expectedURL){
    console.log(`>> expectedURL: ${expectedURL}`);
    let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedURL)

})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                NEW TEST



/*
Web Interactions
*/

Given(/^A web page is opened$/,async function(){
    await browser.url("/inputs")//just by adding the endpoint this will navigate directely 
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    // await browser.maximizeWindow()


})

When(/^Perform web Interactions$/,async function(){
    /**
     * 1. Input Box
     * Actions:
     * 1. Type into input box 
     * 2. Clear the field and type or just add value
     * 3. Click and type
     * 4. Slow typing 
     */

    let ele = await $(`[type=number]`)
    await ele.setValue("12345")
    await browser.pause(3000)
    
})
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