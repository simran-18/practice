
export const initialState={count:0};

export function reducer(state,action)
{
    const type=action.type;
    switch(type)
    {
        case 'increment':
            return {count:state.count + 1};
        case 'decrement':
            return {count:state.count - 1};
        case 'reset':
            return initialState;
        default:
            throw new Error("None of the conditions match");
    }
}
