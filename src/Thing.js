import React, { useReducer } from 'react'
// const initialState = { 
//     thing: 'one string',
//     thingTwo: 'two string'
//  }
const initialState = { 
    divStyle: {
        backgroundColor: 'green',
        fontSize: '1em',
        padding: '1em',
        transition: 'all 1s ease'
    }
}
// const thingStyle = { background: 'green', padding: '1em', margin: '1em 0' }
function reducer(state, action){
    switch(action.type){
        case 'change':
            return{
                divStyle:{
                    backgroundColor: 'blue',
                    fontSize: '2em',
                    padding: '2em',
                    color: '#fff',
                    transition: 'all 1s ease'
                }
            }
        case 'change_again':
                return{
                    divStyle:{
                        backgroundColor: 'orangered',
                        fontSize: '1em',
                        padding: '4em',
                        color: '#000',
                        transition: 'all 1s ease'
                    }
                } 
        case 'one_more_time':
                    return{
                        divStyle:{
                            textAlign: 'center',
                            backgroundColor: 'orangered',
                            fontSize: '3em',
                            padding: '5em',
                            color: '#fff',
                            transition: 'all 1s ease'
                        }
                    }            
        default:
            return 'default'
    }
}
export default function Thing(){
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <div style={state.divStyle}>
           <p> thing: </p>
            <p>thing Two: </p>
            <button onClick={() => dispatch({ type: 'change'})}>Change Styles</button>
            <button onClick={() => dispatch({ type: 'change_again'})}>Change Styles Again</button>
            <button onClick={() => dispatch({ type: 'one_more_time'})}>One More Time!</button>
        </div>
    )
}