export default function reduceSort(state = {
  sort: {
    quick: false,
    cheaper: false,
  },
}, action) {
  if (action.type === 'LESS') {
    return {
      sort: {
        quick: false,
        cheaper: true,
      },
    };
  }
  if (action.type === 'QUICK') {
    return {
      sort: {
        quick: true,
        cheaper: false,
      },
    };
  }
  return state;
}
