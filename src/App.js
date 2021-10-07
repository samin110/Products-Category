import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectComponent from './Components/SelectComponent';

function App() {
  return (
    <div className="App">
      <h1>طبقه بندی محصولات فروشگاه</h1>
      <SelectComponent />
      <ToastContainer position="top-left" rtl={true} />
    </div>
  );
}

export default App;
