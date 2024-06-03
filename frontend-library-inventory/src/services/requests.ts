import Book, { CreateBook } from "../types/book";
import { CreateUser, Token } from "../types/user";

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3001';
const ERROR_NETWORK = 'Oops, looks like we had a little server problem. Please try again later!';
type MsgBackend = { message: string };
type Response<t> =  t | MsgBackend;

const configFetch = (method: string, body?: CreateUser | CreateBook) => {
  return {
    method,
    body: JSON.stringify(body),
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };
};

export async function requestLogin(user: CreateUser): Promise<Response<Token>> {
  try {
    const config = configFetch('POST', user);
    const patch = `${BASE_URL}/user/login`;

    const response = await fetch(patch, config);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.log('Error in requestLogin:', error);
    return { message: ERROR_NETWORK };
  }
}

export async function requestRegisterUser(newUser: CreateUser): Promise<Response<Token>> {
  try {
    const config = configFetch('POST', newUser);
    const patch = `${BASE_URL}/user`;

    const response = await fetch(patch, config);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.log('Error in requestRegisterUser:', error);
    return { message: ERROR_NETWORK };
  }
}

export async function requestBooks(): Promise<Response<Book[]>> {
  try {
    const config = configFetch('GET');
    const patch = `${BASE_URL}/book`;

    const response = await fetch(patch, config);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.log('Error in requestBooks:', error);
    return { message: ERROR_NETWORK };
  }
}

export async function requestBook(id: string): Promise<Response<Book>> {
  try {
    const config = configFetch('GET');
    const patch = `${BASE_URL}/book/${id}`;

    const response = await fetch(patch, config);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.log('Error in requestBook:', error);
    return { message: ERROR_NETWORK };
  }
}

export async function requestCreateBook(newBook: CreateBook): Promise<Response<Book>> {
  try {
    const config = configFetch('POST', newBook);
    const patch = `${BASE_URL}/book`;

    const response = await fetch(patch, config);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.log('Error in requestCreateBook:', error);
    return { message: ERROR_NETWORK };
  }
}

export async function requestDeleteBook(id: number): Promise<Response<MsgBackend>> {
  try {
    const config = configFetch('DELETE');
    const patch = `${BASE_URL}/book/${id}`;

    const response = await fetch(patch, config);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.log('Error in requestDeleteBook:', error);
    return { message: ERROR_NETWORK };
  }
}

export async function requestUpdateStatusBook(id: number): Promise<Response<MsgBackend>> {
  try {
    const config = configFetch('PATCH');
    const patch = `${BASE_URL}/book/${id}/status`;

    const response = await fetch(patch, config);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.log('Error in requestBorrowBook:', error);
    return { message: ERROR_NETWORK };
  }
}