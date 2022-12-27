import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I visit the TODO homepage', () => {
    cy.visit('/todo');
});
 
When('I submit(ted) a new TODO {string}', text => {
    cy.get('.new-todo').type(text + '{enter}');
});

Then('the count of pending items is {int}', pendingItems => {
    cy.get('.todo-count > strong').invoke('text').then(parseInt)
        .should('eq', pendingItems);
});

When('I check the item #{int}', item => {
    cy.get(':nth-child(' + item + ') > .view > .toggle').click();
  });

  Given('I add below products to cart', (dataTable) => {
    cy.log('raw : ' + dataTable.raw());
    cy.log('rows : ' + dataTable.rows());
    cy.log('HASHES : ' );
    var propValue;
    dataTable.hashes().forEach(elem =>{
      for(var propName in elem) {
        propValue = elem[propName]
        cy.log(propName,propValue);
        cy.get('.new-todo').type(propValue + '{enter}');
    }
    });
  })
