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
    loading: false,
    error: {},
    id: '',
  },
  action,
) => {
  if (action.type === 'ALL') {
    if (!state.filter[0].bool) {
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
    return {
      ...state,
      sort: {
        quick: false,
        cheaper: true,
      },
    };
  }
  if (action.type === 'QUICK') {
    return {
      ...state,
      sort: {
        quick: true,
        cheaper: false,
      },
    };
  }
  if (action.type === 'GET_TICKETS') {
    return {
      ...state,
      tickets: [...state.tickets, ...action.payload.tickets.tickets],
      loading: action.payload.tickets.stop,
    };
  }
  if (action.type === 'GET_ID') {
    return { ...state, id: action.id };
  }
  return state;
};

export default reducer;
