import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    console.log(request)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}

//normalmente o request está vazio pq é assíncrono,
//*então add Middleware promisse em index.jsx