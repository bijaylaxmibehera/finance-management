export const initialState = {
  income: [],
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
        income: action.payload,
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
    default:
      return state
  }
}
