const initialState = {
    response: ''
  };
  
  const dataSliceReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'data/setResponse':
        return {
          ...state,
          response: action.payload
        };
      default:
        return state;
    }
  };
  
  export default dataSliceReducer;
  