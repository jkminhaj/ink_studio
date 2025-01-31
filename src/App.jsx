import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav className="border-b-[1px] border-slate-100">
        <div className="w-11/12 md:w-10/12 mx-auto">
          "This is my be shared"
        </div>
      </nav>
      <section className="w-11/12 md:w-10/12 mx-auto">
        <Outlet />
      </section>
    </div>
  );
};

export default App;