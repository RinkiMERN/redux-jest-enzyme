import React from 'react'
import "./counterStyle.css"
import { incrementCount, decrementCount, resetCount } from '../redux/Action/CountAction'
import { useDispatch , useSelector } from 'react-redux'
const Counter = () => {
    const dispatch = useDispatch()
    const countState = useSelector((state)=> state.count.count)
    console.log(countState);
    return (
        <div>
            <div className="container">
                <div>
                    <h1>counter</h1>
                    <p className="counter">{countState}</p>
                    <div className="buttons">
                        <button
                            variant="contained"
                            color="primary"
                            type="button"
                            className="btn"
                            onClick={() => dispatch(decrementCount())}
                        >
                            decrease
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => dispatch(resetCount())}
                        >
                            reset
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => dispatch(incrementCount())}
                        >
                            increase
                        </button>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Counter
