import LoginPage from "../PO/LoginPage";
import MainPage from "../PO/MainPage";
import SubtaskDialog from "../PO/SubtaskDialog";

describe ("tasks", () => {
    beforeEach(() => {
        loginPage.loggedIn()
    })

  const mainPage = new MainPage()
  const loginPage = new LoginPage()
  const subtaskDialog = new SubtaskDialog()

  it ("manage subtask btn is visible", function() {

    mainPage.menageSubtaskBtn()
    .should('be.visible')
 
  })


  it ("create new sub task", function() {

    mainPage.menageSubtaskBtn()
    .click({multiple: true})
    subtaskDialog.taskId()
    .should('be.visible')



    subtaskDialog.subtaskField()
    .should('be.visible')
    .click({force: true})
    .type('new subtask')

    subtaskDialog.addSubtaskBtn()
    .click()
    cy.contains('new subtask').should('be.visible')
 
  })

//bug id 1271
  it (" subtask with 252 chars not created", function() {

    mainPage.menageSubtaskBtn()
    .click({force: true})
    subtaskDialog.taskId()
    .should('be.visible')

    subtaskDialog.subtaskField()
    .should('be.visible')
    .click({force: true})
    .type('Efnkneknfkjeknqefleknfefelnfoeifrj3qlfj3lkfrjnwelkrngflweknglw'+
   'Efnkneknfkjeknqefleknfefelnfoeifrj3qlfj3lkfrjnwelkrngflweknglw'+
   'Efnkneknfkjeknqefleknfefelnfoeifrj3qlfj3lkfrjnwelkrngflweknglw'+
   'Efnkneknfkjeknqefleknfefelnfoeifrj3qlfj3lkfrjnwelkrngflweknglw123')
  
   subtaskDialog.addSubtaskBtn()
   .click()
   cy.wait(5000)
    cy.contains('Efnkneknfkjeknqefleknfefelnfoeifrj3qlfj3lkfrjnwelkrngflweknglw'+
    'Efnkneknfkjeknqefleknfefelnfoeifrj3qlfj3lkfrjnwelkrngflweknglw'+
    'Efnkneknfkjeknqefleknfefelnfoeifrj3qlfj3lkfrjnwelkrngflweknglw'+
    'Efnkneknfkjeknqefleknfefelnfoeifrj3qlfj3lkfrjnwelkrngflweknglw123').should('not.exist')


 
  })



});


