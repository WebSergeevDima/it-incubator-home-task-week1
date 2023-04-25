import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any

    const sortNameUp = ( a: UserType, b: UserType ) => {
        if ( a.name < b.name ){
            return -1;
        }
        if ( a.name > b.name ){
            return 1;
        }
        return 0;
    }
    const sortAgeDown = ( a: UserType, b: UserType ) => {
        if ( a.name > b.name ){
            return -1;
        }
        if ( a.name < b.name ){
            return 1;
        }
        return 0;
    }


    switch (action.type) {
        case 'sort': { // by name

            if(action.payload === 'up') {
                return [...state].sort(sortNameUp); // need to fix
            }

            return [...state].sort(sortAgeDown); // need to fix

        }
        case 'check': {
            return state.filter(item => item.age >= 18); // need to fix
        }
        default:
            return state
    }
}
