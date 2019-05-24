const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    img: '',
    mortgage: '',
    rent:''
}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
export const UPDATE_CITY = 'UPDATE_CITY'
export const UPDATE_STATE = 'UPDATE_STATE'
export const UPDATE_ZIP = 'UPDATE_ZIP'



export default function reducer(state = initialState, action) {
    const{type, payload} = action
    switch(type) {
        case UPDATE_NAME:
            return{
                ...state,
                name:payload
            }
        case UPDATE_ADDRESS:
                return{
                    ...state,
                    address:payload
            }
        case UPDATE_CITY:
                return{
                    ...state,
                    city:payload
            }
        case UPDATE_STATE:
                return{
                    ...state,
                    state:payload
            }
        case UPDATE_STATE:
                return{
                    ...state,
                    state:payload
            }
        default:
            return state
    }
}