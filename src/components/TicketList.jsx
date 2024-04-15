import { useSelector } from "react-redux";
import Ticket from "./Ticket";
import { selectTickets } from "../store/loto.slice";

function TicketList() {
  const tickets = useSelector(selectTickets);
  return (
    <div className=" grow w-full flex flex-wrap justify-center  px-10 gap-5  overflow-hidden  ">
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
      {!tickets.length && "Нет билетов"}
    </div>
  );
}

export default TicketList;
