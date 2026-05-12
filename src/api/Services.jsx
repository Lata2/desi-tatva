import { message } from 'antd'
import API from './API'

const publicTenant = "yashvibilling"


/**
 * send and save otp of the client detail
 */
export const sendOtpAPI = async (formData) => {
    const response = await API.post(`adminApp/api/send-otp/`, formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }).catch(
            err => message.error('otp failed.')
        )
    return response ? response.data : {}
}
/**
 * End of sending otp
 */


/**
 * varify the otp of the client
 */
export const varifyOtpAPI = async (formData) => {
    const response = await API.post(`adminApp/api/verify-otp/`, formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }).catch(
            err => message.error('otp failed.')
        )
    return response ? response.data : {}
}
/**
 * End of varifying otp
 */


/**
 * save the client detail
 */
export const saveClientAPI = async (formData) => {
    const response = await API.post(`adminApp/api/register/`, formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }).catch(
            err => message.error('client registration failed.')
        )
    return response ? response.data : {}
}
/**
 * End of saving client detail
 */


/**
 * To authencate the client or login api
 */
export const loginAPI = async (formData) => {
    const response = await API.post(`adminApp/api/login/`, formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }).catch(
            err => message.error('login failed.')
        )
    return response ? response.data : {}
}
/**
 * End of login client
 */


/**
 * To save the party detail
 */
export const savePartyAPI = async (formData) => {
    const tenantName = localStorage.getItem("tenant")
    const token = localStorage.getItem("token")
    const response = await API.post(`api/v1/${tenantName}/clientApp/parties/`, formData,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('party registration failed.')
        )
    return response ? response.data : {}
}
/**
 * End of saving party
 */


/**
 * To get the parties detail
 */
export const getPartiesAPI = async () => {
    const tenantName = localStorage.getItem("tenant")
    const token = localStorage.getItem("token")
    const response = await API.get(`api/v1/${tenantName}/clientApp/parties/`,
        {
            headers: { 'Content-Type': 'application/json' },
            params: {}
        }).catch(
            err => message.error('party failed.')
        )
    return response ? response.data : {}
}
/**
 * End of getting parties
 */


/**
 * To get the paties
 */
export const getPartyAPI = async (formData) => {
    const tenantName = localStorage.getItem("tenantName")
    const token = localStorage.getItem("token")
    const response = await API.get(`api/v1/${tenantName}/parties/`,
        { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }).catch(
            err => message.error('login failed.')
        )
    return response ? response.data : {}
}
/**
 * End of getting parties
 */


/**
 * To save the purchase detail
 */
export const savePurchaseAPI = async (formData) => {
    const tenantName = localStorage.getItem("tenant")
    const token = localStorage.getItem("token")
    const response = await API.post(`api/v1/${tenantName}/purchaseApp/purchases/`, formData,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('purchase detail failed.')
        )
    return response ? response.data : {}
}
/**
 * End of saving purchase
 */


/**
 * To get purchase list
 */
export const getPurchasesAPI = async () => {
    const tenantName = localStorage.getItem("tenant")
    const token = localStorage.getItem("token")
    const response = await API.post(`api/v1/${tenantName}/purchaseApp/purchases/`,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('purchase detail failed.')
        )
    return response ? response.data : {}
}
/**
 * End of getting purchase list
 */


/**
 * To sale the purchase detail
 */
export const saveSaleAPI = async (formData) => {
    const tenantName = localStorage.getItem("tenant")
    const token = localStorage.getItem("token")
    const response = await API.post(`api/v1/${tenantName}/saleApp/sales/`, formData,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('sale detail failed.')
        )
    return response ? response.data : {}
}
/**
 * End of saving sale
 */


/**
 * To get sale list
 */
export const getSalesAPI = async () => {
    const tenantName = localStorage.getItem("tenant")
    const token = localStorage.getItem("token")
    const response = await API.post(`api/v1/${tenantName}/saleApp/sales/`,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('sales detail failed.')
        )
    return response ? response.data : {}
}
/**
 * End of getting sales list
 */



/**
 * To sale the category detail
 */
export const saveCategoryAPI = async (formData) => {
    const tenantName = localStorage.getItem("tenant")
    const token = localStorage.getItem("token")
    const response = await API.post(`api/v1/${tenantName}/clientApp/categories/`, formData,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('category detail failed.')
        )
    return response ? response.data : {}
}
/**
 * End of saving category
 */


/**
 * To get category list
 */
export const getCategoriesAPI = async () => {
    const tenantName = localStorage.getItem("tenant")
    const token = localStorage.getItem("token")
    const response = await API.get(`api/v1/${tenantName}/clientApp/categories/`,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('category detail failed.')
        )
    return response ? response.data : {}
}
/**
 * End of getting category list
 */



/**
 * To save the item detail
 */
export const saveItemAPI = async (formData) => {
    const tenantName = localStorage.getItem("tenant")
    const token = localStorage.getItem("token")
    const response = await API.post(`api/v1/${tenantName}/clientApp/items/`, formData,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('items detail failed.')
        )
    return response ? response.data : {}
}
/**
 * End of saving items
 */


/**
 * To get item list
 */
export const getItemsAPI = async () => {
    const tenantName = localStorage.getItem("tenant")
    const token = localStorage.getItem("token")
    const response = await API.get(`api/v1/${tenantName}/clientApp/items/`,
        {
            headers: { 'Content-Type': 'application/json' },
            params: {}
        }).catch(
            err => message.error('item detail failed.')
        )
    return response ? response.data : {}
}
/**
 * End of getting item list
 */


/**
 * To get sales filter by their status
 */
export const getSalesWithStatusApi = async (data) => {
    const tenantName = localStorage.getItem("tenant")
    const token = localStorage.getItem("token")
    const response = await API.get(`api/v1/${tenantName}/clientApp/items/`, { data },
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('item detail failed.')
        )
    return response ? response.data : {}
}
/**
 * End of getting item list
 */


/**
 * To save the quotation detail
 */
export const saveQuotationAPI = async (formData) => {
    const tenantName = localStorage.getItem("tenant")
    const token = localStorage.getItem("token")
    const response = await API.post(`api/v1/${tenantName}/saleApp/quotations/`, formData,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('quotation detail failed.')
        )
    return response ? response.data : {}
}
/**
 * End of saving quotation
 */


/**
 * To get quotation 
 */
export const getQuotationsAPI = async (data) => {
    const tenantName = localStorage.getItem("tenant")
    const token = localStorage.getItem("token")
    const response = await API.get(`api/v1/${tenantName}/saleApp/quotations/`,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('item detail failed.')
        )
    return response ? response.data : {}
}
/**
 * End of getting item list
 */



/**
 * To save the delivery challan detail
 */
export const saveDeliveryChallanAPI = async (formData) => {
    const tenantName = localStorage.getItem("tenant")
    const token = localStorage.getItem("token")
    const response = await API.post(`api/v1/${tenantName}/saleApp/delivery-challans/`, formData,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('delivery-challan detail failed.')
        )
    return response ? response.data : {}
}
/**
 * End of saving delivery challan
 */


/**
 * To get delivery challan 
 */
export const getDeliveryChallansAPI = async (data) => {
    const tenantName = localStorage.getItem("tenant")
    const token = localStorage.getItem("token")
    const response = await API.get(`api/v1/${tenantName}/saleApp/delivery-challans/`,
        {
            headers: { 'Content-Type': 'application/json' },
            params: { data }
        }).catch(
            err => message.error('item detail failed.')
        )
    return response ? response.data : {}
}
/**
 * End of getting delivery challan
 */