/// <reference types="cypress" />

import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import tabs from "../page-objects/components/tabs";
import addAsset from "../page-objects/pages/addAsset";
import basePage from "../page-objects/pages/basePage";
import existingAssets from "../page-objects/pages/existingAssets";

Given('Land on description page', ()=>{
    cy.visit('/')
})
When('Click on Add Asset tab',()=>{
    tabs.clickTab('[testid="add-asset"]')
})
Then('See the Add page',()=>{
    addAsset.isButtonVisible()
    basePage.isUrlChanged('add')
    tabs.isTabActive('[testid="add-asset"]')
})
When('Enter the asset context',()=>{
    addAsset.createAsset()
})
And('See the valid format validation message',()=>{
   addAsset.validationMessage()
})
Then('Click on the button', ()=>{
    addAsset.clickButton()
})
And('See the success pop-up', ()=>{
    addAsset.isMessageVisible()
})
And('Close pop-up',()=>{
    addAsset.closePopup()
})
Then('See the error pop-up',()=>{
    addAsset.isMessageVisible()
})
When('Enter the asset context invalid',()=>{
    addAsset.clearField()
    addAsset.createWrongAsset()
})
Then('See the invalid format validation message',()=>{
    addAsset.validationMessage()
    
})
And('Close the pop-up', ()=>{
    addAsset.closePopup()
})
And('Click on Existing Assets tab', ()=>{
    existingAssets.getAssetsAs('getAssets')
    tabs.clickTab('[testid="existing-assets"]')
    basePage.wait('@getAssets')
})
When('Enter the same name of asset', ()=>{
    addAsset.typeSameAsset()
})
Then('The asset should be listed', ()=>{
    cy.get('[data-test="datatable-input"] input').invoke('attr','value').then(AssetName=> {
        cy.wrap(AssetName).should('contain', Cypress.env('assetName'))
    })
})

