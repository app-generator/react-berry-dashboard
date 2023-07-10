// project imports
import config from '../config';

// action - state management
import * as actionTypes from './actions';

export const initialState = {
    isOpen: [], //for active default menu
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true,
    direction: config.direction
};

//-----------------------|| CUSTOMIZATION REDUCER ||-----------------------//

const customizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MENU_OPEN:
            const id = action.id;
            return {
                ...state,
                isOpen: [id]
            };
        case actionTypes.SET_MENU:
            return {
                ...state,
                opened: action.opened
            };
        case actionTypes.SET_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.fontFamily
            };
        case actionTypes.SET_BORDER_RADIUS:
            return {
                ...state,
                borderRadius: action.borderRadius
            };
        case actionTypes.RTL_DESIGN:
            return {
                ...state,
                direction: action.direction
            };
        default:
            return state;
    }
};

export default customizationReducer;
