import { useDispatch, useSelector } from "react-redux";
import {
  firstFieldMaxSize,
  firstFieldValues,
  secondFieldMaxSize,
  secondFieldValues,
} from "../config";
import GameButton from "./GameButton";
import {
  changeTicket,
  registerTicket,
  selectResult,
} from "../store/loto.slice";
import { determineWinner } from "../utils/determineWinner";
import MagicIcon from "../assets/icons/MagicIcon";
import { generateResult } from "../utils/generateResult";
import _ from "lodash";

function Ticket({ ticket }) {
  const dispatch = useDispatch();
  const result = useSelector(selectResult);
  const isWinner = determineWinner(
    ticket.firstField,
    ticket.secondField,
    result
  );
  const onChangeTicket = (field, value, maxSize) => {
    const isMaxSize = ticket[field].length >= maxSize;
    const isInclude = ticket[field].includes(value);
    const newTicket = {
      ...ticket,
      [field]: isInclude
        ? ticket[field].filter((item) => value !== item)
        : !isMaxSize
        ? [...ticket[field], value]
        : ticket[field],
    };
    dispatch(changeTicket(newTicket));
  };

  const addRandomTicket = () => {
    const newTicket = {
      ...ticket,
      firstField: generateResult(),
      secondField: [_.random(1, 2)],
    };
    dispatch(changeTicket(newTicket));
  };

  const onRegister = (id) => {
    if (
      ticket.firstField.length === firstFieldMaxSize &&
      ticket.secondField.length === secondFieldMaxSize
    )
      dispatch(registerTicket(id));
  };
  return (
    <div className="w-[300px] bg-white rounded-md shadow-md p-[10px] flex flex-col gap-3 ">
      <div className="flex justify-between items-center">
        <h2>Билет {ticket.id}</h2>{" "}
        <div className=" hover:scale-105" onClick={addRandomTicket}>
          <MagicIcon />
        </div>
      </div>

      <div className=" ">
        Поле 1
        <div className="flex flex-wrap mt-3">
          {firstFieldValues.map((value) => (
            <GameButton
              key={value}
              field={"firstField"}
              value={value}
              disabled={ticket.register}
              maxSize={firstFieldMaxSize}
              onChangeTicket={onChangeTicket}
              isSelected={ticket.firstField.includes(value)}
            />
          ))}
        </div>
      </div>
      <div className="">
        Поле 2
        <div className="flex flex-wrap mt-3">
          {secondFieldValues.map((value) => (
            <GameButton
              key={value}
              field={"secondField"}
              value={value}
              disabled={ticket.register}
              maxSize={secondFieldMaxSize}
              onChangeTicket={onChangeTicket}
              isSelected={ticket.secondField.includes(value)}
            />
          ))}
        </div>
      </div>
      <div className=" flex justify-center min-h-[50px] items-center ">
        {
          <>
            {result ? (
              isWinner ? (
                "Выйграл"
              ) : (
                "Не выйграл"
              )
            ) : (
              <>
                {!ticket.register ? (
                  <button
                    className=" border rounded-full py-2 text-center px-4 "
                    onClick={() => onRegister(ticket.id)}
                  >
                    Принять участие
                  </button>
                ) : (
                  <span className="  py-2 text-center px-4 ">
                    Билет зарегестрирован
                  </span>
                )}
              </>
            )}
          </>
        }
      </div>
    </div>
  );
}

export default Ticket;
