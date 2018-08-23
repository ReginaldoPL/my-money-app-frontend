import axios from 'axios'
const BASE_URL = 'http://loclahost:3003/api'

export function getsummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: ' BILLING_SUMMARY_FETCHED',
        payLoad: request
    }
}