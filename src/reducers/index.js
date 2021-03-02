const reducer = (state, action) => {
   switch (action.type) {
      case 'SET_FAVORITE':
         return state.myList.find(item => item.id === action.payload.id)
            ? state
            : {
               ...state,
               myList: [...state.myList, action.payload]
            }// No hace falta el breack porque estamos retornando.
      case 'DELETE_FAVORITE':
         return {
            ...state,
            myList: state.myList.filter(item => item.id !== action.payload),
         }
      default:
         return state;
   }
}

export default reducer;