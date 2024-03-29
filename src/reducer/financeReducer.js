export const initialState = {
  incomes: [],
  expenses: [],
  savings: [],
  loading: false,
  error: null
}

export const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_INCOME_SUCCESS':
      return {
        ...state,
        incomes: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_INCOME_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error fetching income data'
      }
    case 'FETCH_EXPENSE_SUCCESS':
      return {
        ...state,
        expenses: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_EXPENSE_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error fetching expense data'
      }
    case 'FETCH_SAVINGS_SUCCESS':
      return {
        ...state,
        savings: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_SAVINGS_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error fetching savings data'
      }
    case 'FETCH_DATA_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'ADD_ENTRY_FAILURE':
        return {
            ...state,
            loading:false,
            error:'Error adding entry data'
        }
    case 'ADD_INCOME_SUCCESS':
        return {
            ...state,
            incomes:[...state.incomes, action.payload],
            loading:false,
            error:null
        }
    case 'ADD_EXPENSE_SUCCESS':
        return {
            ...state,
            expenses:[...state.expenses, action.payload],
            loading:false,
            error:null
        }
    case 'ADD_SAVING_SUCCESS':
        return {
            ...state,
            savings:[...state.savings, action.payload],
            loading:false,
            error:null
        }
    default:
      return state
  }
}
