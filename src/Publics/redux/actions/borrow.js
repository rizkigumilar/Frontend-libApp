import axios from 'axios';

export const postBorrow = (data) => {
    return {
        type: 'POST_BORROW',
        payload: axios.post(`http://localhost:3001/borrow`, data)
    }
}

export const getBorrow = () => {
    return {
        type: 'GET_BORROW',
        payload: axios.get(`http://localhost:3001/borrow`)
    }
}

export const updateBorrow = (idBook, data) => {
    console.log(idBook+'aku')
    return {
        type: 'PATCH_BORROW',
        payload: axios.patch(`http://localhost:3001/borrow/${idBook}`, {penalty: data})
    }
}