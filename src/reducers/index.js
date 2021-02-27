const reducer = (state, action) => {
   switch (action.type) {
      case 'SET_FAVORITE':
         return {
            ...state,
            myList: [...state.myList, action.payload],
         } // No hace falta el breack porque estamos retornando.
      default:
         return state;
   }
}

export default reducer;