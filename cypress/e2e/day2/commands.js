<reference types="cypress"/>

/* Examples of parent commands:
    cy.visit()
    cy.get()
    cy.request()
    cy.exec()
    cy.intercept()
 */

/* Child Commands
    Child commands are always chained off of a parent command, or another child command.
    The previous subject will automatically be yielded to the callback function.

* Examples of child commands:
    .click()
    .trigger()
    .find()
    .should()
    .as()
 */

    /**
     * Examples of dual commands:
      cy.contains()
      cy.screenshot()
      cy.scrollTo()
      cy.wait()
     */

      cy.visit('open url')
      cy.visit('url',{timeout:10000})

      //finding the element
//loc is the reference
cy.get(loc).click()
cy.get(loc).should('be.visible')
cy.get(loc).should('be.exist')
//negative senario
cy.get(loc).should('not.be.visible')
cy.get(loc).should('not.be.exist')

//https://docs.cypress.io/api/table-of-contents
cy.get('h1').should('have.text',"Table of Contents")
cy.get('input').should('have.value',"James")

//traversing

//parent to child or child to parent
//https://docs.cypress.io/api/table-of-contents
cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(3).click()

cy.get(loc).next().click()
//if you dont use the multiple true it will throw an exception
cy.go('back') // come to previus page come after test
cy.get('tbody tr').nextAll.click({multiple : true})// web table like "t-body" click each of one by one


cy.get(loc).prev().click() //previus one
cy.get(loc).prevAll().click()

//position handling
//https://the-internet.herokuapp.com/login
cy.get(loc).click('top')
cy.get(loc).click('buttom')
cy.get(loc).click('topLeft')

//hover handling
//https://docs.cypress.io/api/commands/hover
cy.get(loc).trigger('mouseover').click()
//http://links.giveawayoftheday.com/demo.guru99.com/#
cy.get(loc).trigger('mouseup').click()
cy.get(loc).trigger('mousedown').click()



//login
cy.get('#username').clear().type('username');
