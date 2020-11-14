// add code snippets from README
let state

const reducer = (state  = {count: 0}, action) => {
    switch (action.type){
        case 'INCREASE_COUNT':
            return {count: state.count + 1}
        default :
            return state;
    }
}

let button = document.querySelector('#button');

button.addEventListener('click', ()=> {
    dispatch({type: "INCREASE_COUNT"})
})

const render = () => {
    let container = document.querySelector("#container");
    container.textContent = state.count;
}

const dispatch = (action) => {
    state = reducer(state, action)
    render()
}

dispatch({type: '@@INIT'})