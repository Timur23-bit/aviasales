export default function reduceFilters(state = {
  filters: [
    {
      filter: {
        message: 'Все',
        boolean: true,
      },
    },
    {
      filter: {
        message: 'Без пересадок',
        boolean: true,
      },
    },
    {
      filter: {
        message: '1 пересадка',
        boolean: true,
      },
    },
    {
      filter: {
        message: '2 пересадки',
        boolean: true,
      },
    },
    {
      filter: {
        message: '3 пересадки',
        boolean: true,
      },
    },
  ],
}, action) {
  if (action.type === 'ALL') {
    if (!state.filters[0].filter.boolean) {
      return {
        filters: state.filters.map((item) => ({
          filter: {
            boolean: action.checked,
            message: item.filter.message,
          },
        })),
      };
    }
    return {
      filters: state.filters.map((item) => ({
        filter: {
          boolean: action.checked,
          message: item.filter.message,
        },
      })),
    };
  }
  if (action.type === 'NO_ALL') {
    const ar = state.filters.filter((item) => item.filter.message !== 'Все');
    const arr = ar.filter((item) => item.filter.boolean);
    if (arr.length === 4) {
      return {
        filters: state.filters.map((item) => {
          if (item.filter.message === 'Все') {
            return {
              filter: {
                message: item.filter.message,
                boolean: true,
              },
            };
          }
          return item;
        }),
      };
    }
    return {
      filters: state.filters.map((item) => {
        if (item.filter.message === 'Все') {
          return {
            filter: {
              message: item.filter.message,
              boolean: false,
            },
          };
        }
        return item;
      }),
    };
  }
  if (action.type === 'NO_STOPS') {
    return {
      filters: state.filters.map((item) => {
        if (item.filter.message === 'Без пересадок') {
          return {
            filter: {
              message: item.filter.message,
              boolean: action.checked,
            },
          };
        }
        return item;
      }),
    };
  }
  if (action.type === 'ONE') {
    return {
      filters: state.filters.map((item) => {
        if (item.filter.message === '1 пересадка') {
          return {
            filter: {
              message: item.filter.message,
              boolean: action.checked,
            },
          };
        }
        return item;
      }),
    };
  }
  if (action.type === 'TWO') {
    return {
      filters: state.filters.map((item) => {
        if (item.filter.message === '2 пересадки') {
          return {
            filter: {
              message: item.filter.message,
              boolean: action.checked,
            },
          };
        }
        return item;
      }),
    };
  }
  if (action.type === 'THREE') {
    return {
      filters: state.filters.map((item) => {
        if (item.filter.message === '3 пересадки') {
          return {
            filter: {
              message: item.filter.message,
              boolean: action.checked,
            },
          };
        }
        return item;
      }),
    };
  }
  return state;
}
