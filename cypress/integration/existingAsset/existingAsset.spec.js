/// <reference types="cypress" />
import {Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import listComponents from "../page-objects/components/listComponent";
import tabs from "../page-objects/components/tabs";
import basePage from "../page-objects/pages/basePage";
import existingAssets from "../page-objects/pages/existingAssets";

Given('Land on description page', ()=>{
    cy.visit('/')
})
When('Click on Existing Assets tab', ()=>{
    existingAssets.getAssetsAs('getAssets')
    tabs.clickTab('[testid="existing-assets"]')
    basePage.wait('@getAssets')
})
Then('See the Existing Assets page', ()=>{
    basePage.isUrlChanged('assets')
    tabs.isTabActive('[testid="existing-assets"]')
    existingAssets.isTableVisible()
    listComponents.showEntries('10') 
    listComponents.lengthOfPageItems()   
})
When('Enter an existing name of asset', ()=>{
    existingAssets.typeAssetName()
})
Then('The asset should be listed',()=>{
    existingAssets.listAsset()
    listComponents.lengthOfPageItems()
})
When('Enter non-existing name of asset', ()=>{
    existingAssets.createAsset()
})
Then('The asset should not be listed', ()=>{
    existingAssets.listNoAsset()
})
When('Enter some text on searchbox',()=>{
    existingAssets.typeExistPattern()
})
Then('The list items includes the text',()=>{
    existingAssets.searchList()
    listComponents.lengthOfPageItems()
})
When('Click on sort icon', ()=>{
    listComponents.clickSort()
})
Then('The list should be sorted ASC', ()=>{
    existingAssets.sortASC()
})
Then('The list should be sorted DESC', ()=>{
    listComponents.clickSort()
    existingAssets.sortDESC()
})
When('See pages through pagination', ()=>{
   listComponents.pagination()
})
