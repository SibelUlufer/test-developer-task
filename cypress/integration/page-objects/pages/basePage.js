class basePage{
    //manages waiting time
    static wait(ms){
        cy.wait(ms,{timeout: 20000})
    }
    //enables url assertion
    static isUrlChanged(text){
        cy.url().should('include', text)
    }
  
}
export default basePage