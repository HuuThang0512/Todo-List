// window.addEventListener('load', function() {
    const todoInput = document.querySelector('.todo-input')
    const todoForm = document.querySelector('.form-todo')
    const missionBlock = document.querySelector('.mission-block')
    let todo = JSON.parse(localStorage.getItem('todo')) || []

    todo.forEach((e) => {
        renderTodo(e)
    })
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault()
        renderTodo(todoInput.value)
        todo.push(todoInput.value)
        // console.log(todo);
        localStorage.setItem('todo', JSON.stringify(todo))
        todoInput.value = ''
    })

    document.body.addEventListener('click', (e) => {
        if(e.target.matches('.delete-icon') || e.target.closest('.delete-icon')) {
            const thisItem = e.target.closest('.mission-item');
            thisItem.parentNode.removeChild(thisItem);
            const thisItemText = thisItem.querySelector('.mission-text').textContent
            todo = todo.filter((e) => e != thisItemText)
            localStorage.setItem('todo', JSON.stringify(todo))
        }

        if(e.target.closest('.mission-item') && !(e.target.matches('.delete-icon') || e.target.closest('.delete-icon'))) {
            const checkIcon = e.target.closest('.mission-item').querySelector('.check-icon')
            checkIcon.classList.toggle('done')
        }
    })

    function renderTodo(text) {
        const template = `<div class="mission-item">
        <i class="fa-solid fa-check check-icon"></i>
        <div class="mission-text">${text}</div>
        <div class="delete-icon">
            <i class="fa-solid fa-trash-can"></i>
        </div>
        </div>`
        missionBlock.insertAdjacentHTML('afterbegin', template)
    }



// })