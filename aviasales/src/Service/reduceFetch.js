export default function reduceFetch(state = {
  tickets: [],
  loading: false,
  error: {},
  id: '',
  count: 0,
}, action) {
  if (action.type === 'GET_TICKETS') {
    return {
      ...state,
      tickets: [...state.tickets, ...action.payload.tickets.tickets],
      loading: action.payload.tickets.stop,
      count: state.count + action.count,
    };
  }
  if (action.type === 'GET_ID') {
    return { ...state, id: action.id };
  }
  return state;
}
