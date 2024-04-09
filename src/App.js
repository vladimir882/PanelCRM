import SideBar from "./components/SideBar/SideBar";
import Product from "./components/Main/Product";
// eslint-disable-next-line no-unused-vars
import style from "./style/_base.scss"



function App() {
  return (
      <div className="appWrapper">
          <div>
              <SideBar/>
          </div>
          <div>
              <Product/>
          </div>


      </div>
  );
}

export default App;
