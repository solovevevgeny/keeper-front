import './App.css';

import OperationAddForm from "./components/OperationAddForm";
import Operations from "./components/Operations"
import Balance from "./components/Balance"
import AccountsBalance from './components/AccountsBalance';



function App() {
  return (
    <div className="App">

      <div className="row">
        <div className="col">
          <Balance />
        </div>
      </div>

      <div className="row">
          <AccountsBalance />
      </div>



      <div className="row">
        <div className="col">
          <h1>Добавить операцию</h1>
        <OperationAddForm />
        </div>
        <div className="col">
        <Operations />
        </div>
      </div>
    </div>
  );
}

export default App;
