import TicketList from "./components/TicketList";
import MenuButtons from "./components/MenuButtons";

function App() {
  return (
    <div className=" w-full gap-10 flex flex-col pb-10  ">
      <h1 className="text-3xl font-bold  text-white text-center ">
        Добро пожаловать в мир игры (не проиграй последнее)
      </h1>
      <MenuButtons />
      <TicketList />
    </div>
  );
}

export default App;
