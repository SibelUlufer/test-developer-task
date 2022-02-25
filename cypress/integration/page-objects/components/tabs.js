class tabs{
    //manages to click tabs by setting its selector
    static clickTab(selector){
        cy.clickButton(selector)
    }
    //checks the tab if actives
    static isTabActive(selector){
        cy.get(selector).invoke('attr', 'class').then( classActive =>{
            cy.wrap(classActive).should('contain', 'active')
        })
    }
}
export default tabs