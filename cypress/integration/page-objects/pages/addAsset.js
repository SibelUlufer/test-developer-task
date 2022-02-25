import BasePage from "./basePage"

class addAsset extends BasePage{
    //checks the button's visibility for asserting redirection on my step
    static isButtonVisible(){
        cy.isVisible('[data-test="button"]')
    }
    //creates random wrong formatted asset name
    static createWrongAsset(){
        let randomText = ''
        let randomNumber = ''
        let assetText =''
        var Textpattern = 'abcdefghijklmnopqrstuvwxyz'
        var NumberPattern ='0123456789'
        for(var i=0; i<4; i++)
        randomText+=Textpattern.charAt(Math.floor(Math.random() * Textpattern.length)) 
        for(var i=0; i<10; i++)
        randomNumber+=NumberPattern.charAt(Math.floor(Math.random() * NumberPattern.length))
        assetText = randomText + randomNumber
        cy.typeCommand('[testid="asset-name"]',String(assetText))
    }
    //creates random correct formatted asset name
    static createAsset(){
        cy.setAsset('', '[testid="asset-name"]')
    }
    //enables to click button
    static clickButton(){
        cy.clickButton('[data-test="button"][type="submit"]')
    }
    //enables to clear the textarea
    static clearField(){
        cy.get('[testid="asset-name"]').clear()
    }
    //manages to validation messages' assertions
    static validationMessage(){   
        cy.get('[testid="valid-feedback"]').then( ($vld) =>{
           if($vld.is(':visible')){
            cy.isVisible('[testid="valid-feedback"]')
            cy.isContain('[testid="valid-feedback"]','Correct format')
           }else{
            cy.get('[testid="invalid-feedback"]').then( ($invl) =>{
                if($invl.is(':visible')){
                    cy.isVisible('[testid="invalid-feedback"]')
                    cy.isContain('[testid="invalid-feedback"]','Incorrect format')
                   }
                }) 
            }     
        })
    }
    //manages pop-up messages' assertions
    static isMessageVisible(){  
            cy.get('[data-test="modal-header"] .modal-title').then( ($title)=>{
                if($title.text().includes('exist')){
                    cy.isContain('[data-test="modal-header"]', 'Asset already exist')
                }else{
                    cy.isContain('[data-test="modal-header"]','Success')
                }
            })  
    }
    //enables to close pop-up
    static closePopup(){
        cy.clickButton('[data-test="button"][type="button"]')
    }
}
export default addAsset
