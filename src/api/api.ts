import axios from 'axios';
import { Expense } from '../expense';

const BASE_URL = "http://localhost:1337/";
const fetchExpenses = async () => {
  try {
    const response = await axios.get<Expense[]>(`${BASE_URL}api/expanses`); 
    return response.data;
  } catch (error) {
    console.error('Error fetching expenses:', error);
    throw error;
  }
};

export default fetchExpenses;