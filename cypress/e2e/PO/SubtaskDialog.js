class SubtaskDialog{

    taskId(){
        return cy.get('h3[class="modal-title ng-binding"]')
    }

    subtaskField(){
        return cy.get('input[id="new_sub_task"]')
    }

    dateField(){
        return cy.get('input[id="due_date"]')
    }

    addSubtaskBtn(){
        return cy.get('button[id="add-subtask"]')
    }

    closeBtn(){
        return cy.get('button[class="btn btn-primary"]')
    }

    removeSubtaskBtn(){
        return cy.get('button[class="btn btn-xs btn-danger"]')
    }


}

export default SubtaskDialog