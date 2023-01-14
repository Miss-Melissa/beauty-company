import { createContext, useReducer, useEffect, useContext } from "react";


const CartStateContext = createContext();

export const Cartcontext = createContext();

export const useCart = () => useContext(CartStateContext);

export const Context = (props) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const addToCartState = state.filter((item) => action.payload.id === item.id);
                if (addToCartState.length > 0) {
                    return state;
                } else {
                    return [...state, action.payload];
                }
            case 'INCREASE':
                const increaceState = state.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                })
                return increaceState;
            case 'DECREASE':
                const decreaseState = state.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
                return decreaseState;
            case 'REMOVE':
                const removeState = state.filter(
                    (item) => item.id !== action.payload.id
                );
                return removeState;
            default:
                return state;
        }
    };



    const [state, dispatch] = useReducer(reducer, [], () => {

        const dataFromLocal = localStorage.getItem("state");

        return dataFromLocal ? JSON.parse(dataFromLocal) : [];

    });

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state));

    }, [state]);

    const info = { state, dispatch };
    return (
        <Cartcontext.Provider value={info}>
            <CartStateContext.Provider value={state}>
                {props.children}
            </CartStateContext.Provider>
        </Cartcontext.Provider>
    );

}




