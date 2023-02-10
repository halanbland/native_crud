import { takeLatest, put } from 'redux-saga/effects'
import { itemActions } from '@/actions'
import { actionTypes } from '@/constants'
import { itemApi } from '@/api'

function* handleFetchListItems({ payload }) {
    try {
        const res = yield itemApi.fetchList()
        yield put(itemActions.fetchListSuccess({
            list: res
        }))
    } catch (error) {
        yield put(itemActions.fetchListFailure({
            message: error.message
        }))
    }
}

function* handleGetItem() {
    try {
        const res = yield itemApi.getItem()
        console.log(res, "day la respond");
        yield put(itemActions.getSuccess({
            list: res
        }))
    } catch (error) {
        yield put(itemActions.getFailure({
            mess: "error"
        }))
    }
}

function* handleCreateItem({payload}) {
    try{
        yield itemApi.createItem(null,null, payload)
        yield put(itemActions.createSuccess({
            message: "sucess"
        }))
        yield handleGetItem()
    }catch{
        yield put(itemActions.createFailure({
            message: "error"
        }))
    }
}
function* handleDeleteItem({payload}) {
    console.log(payload, 'index');
    const paths = payload
    try{
        yield itemApi.deleteItem(paths,null, null)
        yield put(itemActions.deleteSuccess({
            message: "sucess"
        }))
        yield handleGetItem()
    }catch{
        yield put(itemActions.deleteFailure({
            message: "error"
        }))
    }
}
function* handleUpdateItem({payload}) {
    console.log(payload, 'props');
    const queries = payload
    try{
        yield itemApi.updateItem(null,queries, null)
        yield put(itemActions.updateSuccess({
            message: "sucess"
        }))
        yield handleGetItem()
    }catch{
        yield put(itemActions.deleteFailure({
            message: "error"
        }))
    }
}

const itemSaga = [
    takeLatest(actionTypes.itemTypes.FETCH_ITEMS_REQUEST, handleFetchListItems),
    takeLatest(actionTypes.itemTypes.GET_ITEM_REQUEST, handleGetItem),
    takeLatest(actionTypes.itemTypes.CREATE_ITEM_REQUEST, handleCreateItem),
    takeLatest(actionTypes.itemTypes.DELETE_ITEM_REQUEST, handleDeleteItem),
    takeLatest(actionTypes.itemTypes.UPDATE_ITEM_REQUEST, handleUpdateItem),
]

export default itemSaga;