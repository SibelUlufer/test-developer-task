import basePage from "./basePage"

class existingAssets extends basePage{
    //intercepts getAssets request
    static getAssetsAs(text){
        cy.interceptAs('/getAssets','GET', text)
    }
    //checks table visibility for my test assertion
    static isTableVisible(){
        cy.isVisible('[data-test="datatable-table"]')
    }
    //enables to type
    static typeAssetName(){
        cy.get('[data-test="table-body"]').find('td').then( tableRow =>{
            cy.wrap(tableRow).eq(2).invoke('text').then(value =>{
            cy.typeCommand('[data-test="datatable-input"]', value)
             }) 
        })
    }
    //enables to assert listing item
    static listAsset(){
        cy.get('[data-test="table-body"]').find('td')
            .first().invoke('text').then(filterResult =>{
                cy.get('[data-test="datatable-input"] input').invoke('attr','value').then(searhAssetName=> {
                    cy.wrap(searhAssetName).should('contain', filterResult)
                })
             })      
    }
    //creates random correct formatted asset name
    static createAsset(){
        cy.setAsset('ABCDEFGHIJKLMNOPQRSTUVWXYZ','[data-test="datatable-input"]')
    }
    //enables to assert no listing item
    static listNoAsset(){
        cy.get('[data-test="table-body"]').find('td')
            .first().invoke('text').then(filterResult =>{
                cy.get('[data-test="datatable-input"] input').invoke('attr','value').then(searhAssetName=> {
                    cy.wrap(filterResult).should('not.contain', searhAssetName)
                    cy.wrap(filterResult).should('contain','No matching records found')
                })
             })  
    }
    //enables to type existing part of an asset name
    static typeExistPattern(){
        cy.get('[data-test="table-body"]').then( tableRow =>{
            cy.wrap(tableRow).find('td').eq(0).invoke('text').then( pattern =>{
                var existPartialText = ''
                existPartialText+=pattern.slice(0,3) 
                cy.typeCommand('[data-test="datatable-input"]',existPartialText)

            })    
        })   
    }
    //enables to search and assert it
    static searchList(){
        cy.get('[data-test="table-body"] tr').each( tableRow =>{
            cy.get('[data-test="datatable-input"] input').invoke('attr','value').then( searchText =>{
                cy.wrap(tableRow).find('td').should('contain', searchText)       
            })
        })
    }
    //enables to sort ASC and its assertion
    static sortASC(){
        cy.get('[data-test="datatable-head"] tr th').should('have.class','sorting_asc') 
    }
    //enables to sort DESC and its assertion
    static sortDESC(){
        cy.get('[data-test="datatable-head"] tr th').should('have.class','sorting_desc')
    }
}
export default existingAssets