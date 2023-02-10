import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from '@/constants'

export const authActions = {
    loginRequest: createAction(actionTypes.authTypes.LOGIN_REQUEST),
    loginSuccess: createAction(actionTypes.authTypes.LOGIN_SUCCESS),
    loginFailure: createAction(actionTypes.authTypes.LOGIN_FAILURE),
    logoutRequest: createAction(actionTypes.authTypes.LOGOUT_REQUEST),
    logoutSuccess: createAction(actionTypes.authTypes.LOGOUT_SUCCESS),
    logoutFailure: createAction(actionTypes.authTypes.LOGOUT_FAILURE)
}

export const itemActions = {
    fetchListRequest: createAction(actionTypes.itemTypes.FETCH_ITEMS_REQUEST),
    fetchListSuccess: createAction(actionTypes.itemTypes.FETCH_ITEMS_SUCCESS),
    fetchListFailure: createAction(actionTypes.itemTypes.FETCH_ITEMS_FAILURE),
  
    getRequest: createAction(actionTypes.itemTypes.GET_ITEM_REQUEST),
    getSuccess: createAction(actionTypes.itemTypes.GET_ITEM_SUCCESS),
    getFailure: createAction(actionTypes.itemTypes.GET_ITEM_FAILURE),

    createRequest: createAction(actionTypes.itemTypes.CREATE_ITEM_REQUEST),
    createSuccess: createAction(actionTypes.itemTypes.CREATE_ITEM_SUCCESS),
    createFailure: createAction(actionTypes.itemTypes.CREATE_ITEM_FAILURE),
   
    deleteRequest: createAction(actionTypes.itemTypes.DELETE_ITEM_REQUEST),
    deleteSuccess: createAction(actionTypes.itemTypes.DELETE_ITEM_SUCCESS),
    deleteFailure: createAction(actionTypes.itemTypes.DELETE_ITEM_FAILURE),
    
    updateRequest: createAction(actionTypes.itemTypes.UPDATE_ITEM_REQUEST),
    updateSuccess: createAction(actionTypes.itemTypes.UPDATE_ITEM_SUCCESS),
    updateFailure: createAction(actionTypes.itemTypes.UPDATE_ITEM_FAILURE),
}