import { useDispatch, useSelector } from "react-redux"
import { itemActions, authActions } from '@/actions'

export const useItem = () => {
    const dispatch = useDispatch()
    const list = useSelector(state => state.itemInstance.item)
    console.log(list);
    const isFetching = useSelector(state => state.itemCollection.isFetching)
    const isError = useSelector(state => state.itemCollection.isError)
    const message = useSelector(state => state.itemCollection.message)

    const handleFetchList = () => dispatch(itemActions.fetchListRequest())
    const handleGetItems = () => dispatch(itemActions.getRequest())
    const handleCreateItems = (payload) => dispatch(itemActions.createRequest(payload))
    const handleDeleteItems = (payload) => dispatch(itemActions.deleteRequest(payload))
    const handleUpdateItems = (payload) => dispatch(itemActions.updateRequest(payload))


    return {
        list,
        isFetching,
        isError,
        message,
        handleFetchList,
        handleCreateItems,
        handleGetItems,
        handleDeleteItems,
        handleUpdateItems
    }
}

/**
* @param {string} title - The title of the book.
* @param {number} author - The author of the book.
* */
// const demoFunc = (title, author) => {
//     return;
// }
//
// demoFunc('string', 6)