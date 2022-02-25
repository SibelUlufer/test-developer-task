class listComponents{
    //enables to set "Show entries" 
    static showEntries(option){
        cy.get('.custom-select').select(option) 
        cy.wrap(option).as('listOption')
        cy.isContain('[data-test="datatable-select"]', option)  
    }
    //counts the asset list on the page
    static lengthOfPageItems(){
        cy.get('[data-test="table-body"] tr').then( listItems=>{
            cy.wrap(listItems).its('length').then( lenghtList =>{
                cy.wrap(lenghtList).as('lengthOfPageItems')
                cy.isContain('[data-test="datatable-info"]',lenghtList)
            })
        })
    }
    //makes pagination
    static pagination(){
        cy.get('li [data-test="page-link"]:not(.active):not([aria-label="Next"]):not([aria-label="Previous"]').as("pages")
            cy.get('@pages').its('length').then( len =>{
                cy.wrap(len).as('clickableNext')
               for(var i=1; i< len; i++)
                    cy.get('[data-test="page-link"][aria-label="Next"]').then( next=>{
                        cy.wrap(next).click()
                        cy.wrap(next).invoke('hasClass', 'disabled').then( classDisable =>{
                            if(classDisable==false){
                                cy.wrap(next).should('not.have.class', 'disabled')
                            }                          
                        })
                    })    
            })
        }
    //clicks sort icon   
    static clickSort(){
        cy.get('[data-test="datatable-head"]').click()
    }
}
export default listComponents