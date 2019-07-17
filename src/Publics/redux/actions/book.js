import axios from 'axios';


export const getBook = () => {
    return {
        type: 'GET_BOOK',
        payload: axios.get(`http://localhost:3001/book`)
    }
}

export const getBookid = (idBook) => {
    return {
        type: 'GET_BOOKID', idBook,
        payload: axios.get(`http://localhost:3001/book/${idBook}`)
    }
}

export const postBook = (data) => {
    console.log(data.description)
    return {
        type: 'POST_BOOK',
        payload: axios.post(`http://localhost:3001/book`, data)
    }
}

export const deleteBook = (idBook) => {
    return {
      type: 'DELETE_BOOK',
      payload: axios.delete(`http://localhost:3001/${idBook}`),
    };
}