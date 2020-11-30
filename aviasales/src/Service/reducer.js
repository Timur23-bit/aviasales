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
  },
  action,
) => {
  if (action.type === 'ALL') {
    if (state.filter[0].bool) {
      return {
        filter: state.filter.map((it) => ({
          fil: {
            bool: action.checked,
            mess: it.fil.mess,
          },
        })),
        sort: {
          quick: false,
          cheaper: false,
        },
      };
    }
    return {
      filter: state.filter.map((it) => ({
        fil: {
          bool: action.checked,
          mess: it.fil.mess,
        },
      })),
      sort: {
        quick: false,
        cheaper: false,
      },
    };
  } if (action.type === 'NO_ALL') {
    const ar = state.filter.filter((it) => it.fil.mess !== 'Все');
    const arr = ar.filter((it) => it.fil.bool);
    if (arr.length === 4) {
      return {
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
        sort: {
          quick: false,
          cheaper: false,
        },
      };
    }
    return {
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
      sort: {
        quick: false,
        cheaper: false,
      },
    };
  } if (action.type === 'NO_STOPS') {
    return {
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
  } if (action.type === 'ONE') {
    return {
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
      sort: {
        quick: false,
        cheaper: false,
      },
    };
  } if (action.type === 'TWO') {
    return {
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
      sort: {
        quick: false,
        cheaper: false,
      },
    };
  } if (action.type === 'THREE') {
    return {
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
      sort: {
        quick: false,
        cheaper: false,
      },
    };
  } if (action.type === 'LESS') {
    return {
      filter: state.filter.map((it) => it),
      sort: {
        quick: false,
        cheaper: true,
      },
    };
  } if (action.type === 'QUICK') {
    return {
      filter: state.filter.map((it) => it),
      sort: {
        quick: true,
        cheaper: false,
      },
    };
  }
  return state;
};

export default reducer;
