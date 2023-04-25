import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any

    const sortName = ( a: UserType, b: UserType ) => {
        if ( a.name < b.name ){
            return -1;
        }
        if ( a.name > b.name ){
            return 1;
        }
        return 0;
    }
    const sortAge = ( a: UserType, b: UserType ) => {
        if ( a.age > b.age ){
            return -1;
        }
        if ( a.age < b.age ){
            return 1;
        }
        return 0;
    }


    switch (action.type) {
        case 'sort': { // by name

            if(action.payload === 'up') {
                return [...state].sort(sortName); // need to fix
            }

            return [...state].sort(sortAge); // need to fix

        }
        case 'check': {
            return state.filter(item => item.age >= 18); // need to fix
        }
        default:
            return state
    }
}
