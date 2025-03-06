import axios from 'axios'

export const createTodo = async (todo: {title: string, description: string})=>{
    try {
        const response = await axios.post('http://localhost:3000/create-todo', todo)
        return response.data
    } catch (error) {
        console.log(error);
        
    }
}


export const getOneTodo =async  (id:number)=>{
    try {
        const response = await axios.get(`http://localhost:3000/get-one-todo/${id}`)
        return response.data
    } catch (error) {
        console.log(error);
        
    }
}


export const getAllTodo =async ()=>{
    try {
        const response =await axios.get('http://localhost:3000/get-all-todos')
        return response.data
    } catch (error) {
        console.log(error);
        
    }
}




export const updateTodo =async (id:number, updatedtTodo: {title: string, description: string})=>{
    try {
        const response =await axios.put(`http://localhost:3000/update-todo/${id}`, updatedtTodo)
        console.log(response.data);
        return response.data
        
    } catch (error) {
        console.log(error);
        
    }
}


export const deleteTodo =async (id:number)=>{
    try {
      await axios.delete(`http://localhost:3000/delete-todo/${id}`)
     
    } catch (error) {
        console.log(error);
        
    }
}

