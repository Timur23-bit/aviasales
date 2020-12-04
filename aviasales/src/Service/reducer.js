const reducer = (
  state = {
    filter: [
      {
        fil: {
          mess: 'Все',
          bool: true,
        },
      },
      {
        fil: {
          mess: 'Без пересадок',
          bool: true,
        },
      },
      {
        fil: {
          mess: '1 пересадка',
          bool: true,
        },
      },
      {
        fil: {
          mess: '2 пересадки',
          bool: true,
        },
      },
      {
        fil: {
          mess: '3 пересадки',
          bool: true,
        },
      },
    ],
    sort: {
      quick: false,
      cheaper: false,
    },
    tickets: [],
    loading: true,
    error: false,
    stop: false,
    id: 'xxx',
  },
  action,
) => {
  if (action.type === 'ALL') {
    if (!state.filter[0].bool) {
      // eslint-disable-next-line no-console
      console.log('all');
      return {
        ...state,
        filter: state.filter.map((it) => ({
          fil: {
            bool: action.checked,
            mess: it.fil.mess,
          },
        })),
      };
    }
    return {
      ...state,
      filter: state.filter.map((it) => ({
        fil: {
          bool: action.checked,
          mess: it.fil.mess,
        },
      })),
    };
  }
  if (action.type === 'NO_ALL') {
    // eslint-disable-next-line no-console
    console.log('all');
    const ar = state.filter.filter((it) => it.fil.mess !== 'Все');
    const arr = ar.filter((it) => it.fil.bool);
    if (arr.length === 4) {
      return {
        ...state,
        filter: state.filter.map((it) => {
          if (it.fil.mess === 'Все') {
            return {
              fil: {
                mess: it.fil.mess,
                bool: true,
              },
            };
          }
          return it;
        }),
      };
    }
    return {
      ...state,
      filter: state.filter.map((it) => {
        if (it.fil.mess === 'Все') {
          return {
            fil: {
              mess: it.fil.mess,
              bool: false,
            },
          };
        }
        return it;
      }),
    };
  }
  if (action.type === 'NO_STOPS') {
    // eslint-disable-next-line no-console
    console.log('no stop');
    return {
      ...state,
      filter: state.filter.map((it) => {
        if (it.fil.mess === 'Без пересадок') {
          return {
            fil: {
              mess: it.fil.mess,
              bool: action.checked,
            },
          };
        }
        return it;
      }),
      sort: {
        quick: false,
        cheaper: false,
      },
    };
  }
  if (action.type === 'ONE') {
    // eslint-disable-next-line no-console
    console.log('one');
    return {
      ...state,
      filter: state.filter.map((it) => {
        if (it.fil.mess === '1 пересадка') {
          return {
            fil: {
              mess: it.fil.mess,
              bool: action.checked,
            },
          };
        }
        return it;
      }),
    };
  }
  if (action.type === 'TWO') {
    // eslint-disable-next-line no-console
    console.log('two');
    return {
      ...state,
      filter: state.filter.map((it) => {
        if (it.fil.mess === '2 пересадки') {
          return {
            fil: {
              mess: it.fil.mess,
              bool: action.checked,
            },
          };
        }
        return it;
      }),
    };
  }
  if (action.type === 'THREE') {
    // eslint-disable-next-line no-console
    console.log('three');
    return {
      ...state,
      filter: state.filter.map((it) => {
        if (it.fil.mess === '3 пересадки') {
          return {
            fil: {
              mess: it.fil.mess,
              bool: action.checked,
            },
          };
        }
        return it;
      }),
    };
  }
  if (action.type === 'LESS') {
    // eslint-disable-next-line no-console
    console.log('less');
    return {
      ...state,
      sort: {
        quick: false,
        cheaper: true,
      },
    };
  }
  if (action.type === 'QUICK') {
    // eslint-disable-next-line no-console
    console.log('quick');
    return {
      ...state,
      sort: {
        quick: true,
        cheaper: false,
      },
    };
  }
  if (action.type === 'GET_TICKETS') {
    // eslint-disable-next-line no-console
    console.log(state);
    return {
      ...state,
      tickets: [...state.tickets, ...action.payload.ticket.tickets],
      loading: action.payload.loading,
      stop: action.payload.ticket.stop,
    };
  }
  if (action.type === 'GET_ID') {
    // eslint-disable-next-line no-console
    console.log(state);
    return { ...state, id: action.id };
  }
  return state;
};

export default reducer;
