import React, { createContext, useReducer } from 'react';
import * as actionType from "../store/actions";
import { CONFIG } from "../config/constant";

const initialState = {
    ...CONFIG,
    isOpen: [], //for active default menu
    isTrigger: [], //for active default menu, set blank for horizontal
};
const ConfigContext = createContext(initialState);
const { Provider } = ConfigContext;

const ConfigProvider = ({ children }) => {
    let trigger = [];
    let open = [];

    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case actionType.BOX_LAYOUT:
                return {
                    ...state,
                    boxLayout: !state.boxLayout
                };
            case actionType.CHANGE_LAYOUT:
                return {
                    ...state,
                    layout: action.layout
                };
            case actionType.CHANGE_SUB_LAYOUT:
                return {
                    ...state,
                    subLayout: action.subLayout
                };
            case actionType.COLLAPSE_MENU:
                return {
                    ...state,
                    collapseMenu: !state.collapseMenu
                };
            case actionType.COLLAPSE_TOGGLE:
                if (action.menu.type === 'sub') {
                    open = state.isOpen;
                    trigger = state.isTrigger;

                    const triggerIndex = trigger.indexOf(action.menu.id);
                    if (triggerIndex > -1) {
                        open = open.filter(item => item !== action.menu.id);
                        trigger = trigger.filter(item => item !== action.menu.id);
                    }

                    if (triggerIndex === -1) {
                        open = [...open, action.menu.id];
                        trigger = [...trigger, action.menu.id];
                    }
                } else {
                    open = state.isOpen;
                    const triggerIndex = (state.isTrigger).indexOf(action.menu.id);
                    trigger = (triggerIndex === -1) ? [action.menu.id] : [];
                    open = (triggerIndex === -1) ? [action.menu.id] : [];
                }

                return {
                    ...state,
                    isOpen: open,
                    isTrigger: trigger
                };
            case actionType.HEADER_BACK_COLOR:
                return {
                    ...state,
                    headerBackColor: action.headerBackColor
                };
            case actionType.HEADER_FIXED_LAYOUT:
                return {
                    ...state,
                    headerFixedLayout: !state.headerFixedLayout,
                    headerBackColor: (!state.headerFixedLayout && initialState.headerBackColor === '') ? 'header-blue' : state.headerBackColor
                };
            case actionType.LAYOUT_TYPE:
                return {
                    ...state,
                    layoutType: action.layoutType,
                    headerBackColor: initialState.headerBackColor
                };
            case actionType.NAV_COLLAPSE_LEAVE:
                if (action.menu.type === 'sub') {
                    open = state.isOpen;
                    trigger = state.isTrigger;

                    const triggerIndex = trigger.indexOf(action.menu.id);
                    if (triggerIndex > -1) {
                        open = open.filter(item => item !== action.menu.id);
                        trigger = trigger.filter(item => item !== action.menu.id);
                    }
                    return {
                        ...state,
                        isOpen: open,
                        isTrigger: trigger,
                    };
                }
                return {...state};
            case actionType.NAV_CONTENT_LEAVE:
                return {
                    ...state,
                    isOpen: open,
                    isTrigger: trigger,
                };
            case actionType.NAV_FIXED_LAYOUT:
                return {
                    ...state,
                    navFixedLayout: !state.navFixedLayout
                };
            case actionType.RTL_LAYOUT:
                return {
                    ...state,
                    rtlLayout: !state.rtlLayout
                };
            case actionType.RESET:
                return {
                    ...state,
                    layout: initialState.layout,
                    subLayout: initialState.subLayout,
                    collapseMenu: initialState.collapseMenu,
                    layoutType: initialState.layoutType,
                    headerBackColor: initialState.headerBackColor,
                    rtlLayout: initialState.rtlLayout,
                    navFixedLayout: initialState.navFixedLayout,
                    headerFixedLayout: initialState.headerFixedLayout,
                    boxLayout: initialState.boxLayout
                };
            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { ConfigContext, ConfigProvider }
