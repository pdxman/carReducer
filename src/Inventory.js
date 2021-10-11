import {useReducer} from 'react'

const initialState = {
    weapons: {
        sword: true,
        helmet: '100',
        chainmail: '1000',
        arrows: '50',
        magic: []
    },
    cave: [
        { id: 1, name: "spells", cost: 10 },
        { id: 2, name: "potions", cost: 20 } 
    ]
}

const reducer = (state, action) => {
    switch(action.type){
        case "REMOVE_WEAPON":
            return{
                ...state,
                weapons: {...state.weapons, magic: state.weapons.magic.filter((x) => x.id !== action.item.id) },
                cave: [ ...state.cave, action.item]
            }
        case "ADD_WEAPON":
            // console.log('hello world')
            return{
                ...state,
                weapons: {...state.weapons, magic: [...state.weapons.magic, action.item] },
                cave: state.cave.filter((x) => x.id !== action.item.id)
            }
        default:
            return state
    }
}

const Inventory = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            <h2>Inventory and cave items</h2>
            <div className="box-flex">
                <div className="box">
                    <p>Sword: {state.weapons.sword ? 'Yes' : 'No'}</p>
                    <p>Helmet: {state.weapons.helmet}</p>
                    <p>Chainmail: {state.weapons.chainmail}</p>
                    <p>Arrows: {state.weapons.arrows}</p>
                    {
                        state.weapons.magic.length ? 
                        (
                            <ol>
                                {state.weapons.magic.map((item) => (
                                    <li key={item.id}>
                                        <button onClick={() => dispatch({ type: "REMOVE_WEAPON", item })}>X</button>   
                                        {item.name} 
                                    </li>
                                ))}
                            </ol>
                        )
                        : <p>Get items from The Cave!</p>
                    }
                </div>
                <div className="box">
                    { state.cave.length ? 
                        (
                            <ol type="1">
                                {state.cave.map((item) => (
                                    <li key={item.id}>
                                        <button className="buy" onClick={() => dispatch({ type: "ADD_WEAPON", item })}>GRAB</button>   
                                        <span> {item.name}</span>
                                    </li>
                                ))}
                            </ol>
                        ) : <p>Nothing in The Cave!</p>
                        
                    }
                </div>
            </div>
        </div>
    )
}


export default Inventory