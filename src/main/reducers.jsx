import {combineReducers} from 'redux'
//o uso de as é para diferenciar e não gerar conflito
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/TabReducer'
import BillingCycleReducer from '../billingCycle/billingCyleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer    
})

export default rootReducer