import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  result: null
}

const lotoSlice = createSlice({
  name: "loto",
  initialState,

  reducers: {
    createTicket: (state, action) => {
      state.tickets.unshift(action.payload)
    },
    changeTicket: (state, action) => {
      const ticketIndex = state.tickets.findIndex((ticket) => ticket.id == action.payload.id)
      state.tickets.splice(ticketIndex, 1, action.payload)

    },
    registerTicket: (state, action) => {
      const ticket = state.tickets.find(ticket => ticket.id === action.payload);
      if (ticket) {
        ticket.register = true;
      }
    },
    addResult: (state, action) => {
      state.result = action.payload;
      state.tickets = state.tickets.filter(ticket => ticket.register);
    },
    resetResult: (state) => { state.result = null, state.tickets = [] }
  },
  selectors: {
    selectTickets: (state) => state.tickets,
    selectResult: (state) => state.result
  },
});

const { actions, selectors, reducer: lotoReducer } = lotoSlice;

export const {
  createTicket,
  changeTicket,
  registerTicket,
  addResult,
  resetResult
} = actions;

export const {
  selectTickets,
  selectResult

} = selectors;

export default lotoReducer;
