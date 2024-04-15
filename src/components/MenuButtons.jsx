import { useDispatch, useSelector } from "react-redux";
import {
  addResult,
  createTicket,
  resetResult,
  selectResult,
} from "../store/loto.slice";
import { nanoid } from "nanoid";
import { generateResult } from "../utils/generateResult";

function MenuButtons() {
  const dispatch = useDispatch();
  const result = useSelector(selectResult);

  const addTicket = () => {
    dispatch(
      createTicket({
        id: nanoid(5),
        firstField: [],
        secondField: [],
        isWinner: false,
        register: false,
      })
    );
  };

  const onResult = () => {
    dispatch(addResult(generateResult()));
  };

  const onReset = () => {
    dispatch(resetResult());
  };
  return (
    <div className=" w-full flex flex-col md:flex-row justify-center items-center gap-2 ">
      <button
        className=" h-10 border rounded-md bg-white px-10 shadow-md hover:ring-2 disabled:opacity-50"
        onClick={() => addTicket()}
        disabled={result}
      >
        Добавить билет
      </button>
      <button
        className=" h-10 border rounded-md bg-white px-10 shadow-md hover:ring-2 disabled:opacity-50"
        onClick={onResult}
        disabled={result}
      >
        Произвести розыгрыш
      </button>
      <button
        className=" h-10 border rounded-md bg-white px-10 shadow-md hover:ring-2 disabled:opacity-50"
        onClick={onReset}
      >
        Играть заново
      </button>
    </div>
  );
}

export default MenuButtons;
