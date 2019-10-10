import { combineReducers } from 'redux'
import { CHANGE_SWITCH_STATUS } from './action-types'
const switchStatus = (state = false, action = {}) => {
    switch (action.type) {
        case CHANGE_SWITCH_STATUS:
            return !state;
        default:
            return state;
    }
}
export default combineReducers({
    switchStatus
})