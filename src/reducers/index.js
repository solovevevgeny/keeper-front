import {combineReducers} from "redux"
import accounts from "./accounts"
import operations from "./operations"
import balance from "./balance"
import accountsBalance from "./accountsBalance"

const rootReducer = combineReducers({
    accounts: accounts,
    operations: operations,
    balance: balance,
    accountsBalance: accountsBalance
})

export default rootReducer