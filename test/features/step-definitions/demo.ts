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








