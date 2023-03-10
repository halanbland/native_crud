import { Helpers } from '@/utils'
import ApiScheme from './@scheme'

// export const authApi = {
//     login: Helpers.createApi(ApiScheme.AUTHEN.LOGIN),
//     logout: Helpers.createApi(ApiScheme.AUTHEN.LOGOUT),
//     validateToken: Helpers.createApi(ApiScheme.AUTHEN.VALIDATE_TOKEN)
// }

export const itemApi = {
    fetchList: Helpers.createApi(ApiScheme.ITEMS.FETCH_LIST),
    getItem: Helpers.createApi(ApiScheme.ITEMS.GET),
    createItem: Helpers.createApi(ApiScheme.ITEMS.CREATE),
    deleteItem: Helpers.createApi(ApiScheme.ITEMS.DELETE),
    updateItem: Helpers.createApi(ApiScheme.ITEMS.UPDATE),

}