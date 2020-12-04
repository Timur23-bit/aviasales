import ticket from './get-tikets';

export const all = (checked) => ({ type: 'ALL', checked });
export const noAll = (checked) => ({ type: 'NO_ALL', checked });
export const noStops = (checked) => ({ type: 'NO_STOPS', checked });
export const one = (checked) => ({ type: 'ONE', checked });
export const two = (checked) => ({ type: 'TWO', checked });
export const three = (checked) => ({ type: 'THREE', checked });
export const quickly = () => ({ type: 'QUICK' });
export const less = () => ({ type: 'LESS' });
export const getId = () => (dispatch) => {
  ticket.getSearchId().then((res) => {
    // eslint-disable-next-line no-console
    console.log(res);
    dispatch({ type: 'GET_ID', id: res.searchId });
  });
};
export const getTickets = (id) => (dispatch) => {
  ticket.getResource(`tickets?searchId=${id}`)
    .then(async (rt) => {
      if (!rt.ok) {
        throw new Error(`Error number ${rt.status}`);
      }
      const rest = await rt.json();
      // eslint-disable-next-line no-console
      console.log(rest);
      dispatch({
        type: 'GET_TICKETS',
        payload: {
          ticket: rest,
          loading: false,
        },
      });
    })
    // eslint-disable-next-line no-undef
    .catch((err) => (dispatch({
      type: 'GET_ERROR',
      payload: {
        error: err,
        loading: false,
      },
    })));
};
