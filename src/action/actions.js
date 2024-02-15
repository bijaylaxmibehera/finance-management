export const fetchIncome = () => async ( dispatch) => {
  try {
    dispatch({ type: 'FETCH_DATA_LOADING' });
    const response = await fetch(
      'https://b6c411d5-006b-4ab0-af73-ebbf6d321d2c-00-21004bmf5n05q.pike.replit.dev/income'
    );
    const data = await response.json();
    dispatch({ type: 'FETCH_INCOME_SUCCESS', payload: data });
  } catch (error) {
    console.error('Error fetching income data:', error);
    dispatch({ type: 'FETCH_INCOME_FAILURE' });
  }
}


export const fetchExpenses=()=> async (dispatch)=>{
    try{
        dispatch({ type: 'FETCH_DATA_LOADING' })
        const response = await fetch(
          'https://b6c411d5-006b-4ab0-af73-ebbf6d321d2c-00-21004bmf5n05q.pike.replit.dev/expenses'
        );
        const data = await response.json();
        dispatch({ type:'FETCH_EXPENSE_SUCCESS', payload: data });
    }catch(error){
        console.error('Error fetching expense data: ', error);
        dispatch({type:'FETCH_EXPENSE_FAILURE'});
    }
}

export const fetchSavings=()=>async (dispatch)=>{
    try {
        dispatch({ type: 'FETCH_DATA_LOADING' })
        const response = await fetch(
          'https://b6c411d5-006b-4ab0-af73-ebbf6d321d2c-00-21004bmf5n05q.pike.replit.dev/savings'
        );
        const data = await response.json();
        dispatch({ type:'FETCH_SAVINGS_SUCCESS', payload: data });
    } catch (error) {
        console.error('Error fetching savings data: ', error);
        dispatch({type:'FETCH_SAVINGS_FAILURE'});
    }
}

export const addEntry=(entry)=> async(dispatch)=>{
    try{
        const response=await fetch(`https://b6c411d5-006b-4ab0-af73-ebbf6d321d2c-00-21004bmf5n05q.pike.replit.dev/add/${entry.entryType}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(entry)
        });
        const data=await response.json();
        if(data.success===true){
            if(entry.entryType==='income'){
                dispatch({type:'ADD_INCOME_SUCCESS',payload:data.data})
            }else if(entry.entryType==='expense'){
                dispatch({type:'ADD_EXPENSE_SUCCESS',payload:data.data})
            }else{
                dispatch({type:'ADD_SAVING_SUCCESS',payload:data.data})
            }
        }
    }catch(error){
        console.error('Error adding entry:', error);
        dispatch({type:'ADD_ENTRY_FAILURE'})
    }
}
