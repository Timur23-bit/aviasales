import ticket from './get-tikets';
import * as names from './actionsName';

const {
  alls, noAlls, noStopes, ones, twos, threes, quicks, lesses, tickets, ids, errors,
} = names;

export const all = (checked) => ({ type: alls, checked });
export const noAll = () => ({ type: noAlls });
export const noStops = (checked) => ({ type: noStopes, checked });
export const one = (checked) => ({ type: ones, checked });
export const two = (checked) => ({ type: twos, checked });
export const three = (checked) => ({ type: threes, checked });
export const quickly = () => ({ type: quicks });
export const less = () => ({ type: lesses });
export const getTickets = (id) => (dispatch) => {
  ticket.getResource(`tickets?searchId=${id}`)
    .then(async (result) => {
      if (!result.ok) {
        throw new Error(`Error number ${result.status}`);
      }
      const rest = await result.json();
      if (!rest.stop) {
        dispatch({
          type: tickets,
          payload: {
            tickets: rest,
          },
          count: 1,
        });
      } else {
        dispatch({
          type: tickets,
          payload: {
            tickets: rest,
          },
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: errors,
        payload: {
          error: err,
          loading: false,
        },
        count: 1,
      });
    });
};
export const getId = () => (dispatch) => {
  ticket.getSearchId().then((res) => {
    dispatch({ type: ids, id: res.searchId });
  });
};
