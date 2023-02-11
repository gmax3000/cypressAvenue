class MainPage{

    inputField(){
        return cy.get('input[id="new_task"]')
    }

    addBtn(){
        return cy.get('span[class="input-group-addon glyphicon glyphicon-plus"]')
    }

    removeBtn(){
        return cy.get('button[class="btn btn-xs btn-danger"]')
    }

    menageSubtaskBtn(){
        return cy.get('button[class="btn btn-xs btn-primary ng-binding"]')
    }

}

export default MainPage