import './App.css';

import OperationAddForm from "./components/OperationAddForm";
import Operations from "./components/Operations"
import Balance from "./components/Balance"
import AccountsBalance from './components/AccountsBalance';



function App() {
  return (
    <div className="App">
      <div className="container">

      <div className="row pt-20">
        <div className="col">
          <Balance />
        </div>
      </div>

      <div className="row pt-20">
        <div class="col">
          <AccountsBalance />
        </div>
      </div>

        <div className="row pt-20">
        <div className="col ">
          
        <OperationAddForm />
        </div>
        <div className="col">
        <Operations />
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
