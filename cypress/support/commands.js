//enables to check an element if visible
Cypress.Commands.add('isVisible', selector =>{
    cy.get(selector).should('be.visible')
})
//enables to check text if contains
Cypress.Commands.add('isContain', (selector, text) =>{
    cy.get(selector).should('contain', text)
})
//enables to click
Cypress.Commands.add('clickButton', selector =>{
    cy.get(selector).click()
})
//enables to type
Cypress.Commands.add('typeCommand', (selector, text)=>{
    cy.get(selector).type(text)
})
//enables to make intercept
Cypress.Commands.add('interceptAs', (pathname,method, text)=>{
    cy.intercept({
        method: method,
        pathname:pathname
      }).as(text)
})
//creates random correct formatted asset name
Cypress.Commands.add('setAsset', (Textpattern,selector)=>{
    let randomText = ''
    let randomNumber = ''
    let assetText =''
    var Textpattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var NumberPattern ='0123456789'
    for(var i=0; i<4; i++)
    randomText+=Textpattern.charAt(Math.floor(Math.random() * Textpattern.length)) 
    for(var i=0; i<10; i++)
    randomNumber+=NumberPattern.charAt(Math.floor(Math.random() * NumberPattern.length))
    assetText = randomText + randomNumber
    cy.typeCommand(selector,String(assetText))
})

