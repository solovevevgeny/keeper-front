const { combineReducers } = require("redux");

import accounts from "./accounts"
import operations from "./operations"

const rootReducer = combineReducers({
    accounts: accounts,
    operations: operations
})

export default rootReducer