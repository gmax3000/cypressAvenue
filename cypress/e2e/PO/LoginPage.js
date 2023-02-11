class LoginPage{

    loggedIn(){

        const VALID_EMAIL = 'Maxmaslanko@gmail.com'
        const VALID_PASS = 'assessmentqa'

        cy.visit('https://qa-test.avenuecode.io/users/sign_in')
        cy.get("input[id='user_email']")
        .should('be.visible')
        .type(VALID_EMAIL)
        
        cy.get("input[id='user_password']")
        .should('be.visible')
        .type(VALID_PASS)
        
        cy.get("input[class='btn btn-primary']")
        .should('be.visible')
        .click()

        cy.get("a[id='my_task']")
        .should('be.visible')
        .click()

    }

}

export default LoginPage