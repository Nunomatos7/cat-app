import axios from 'axios';
import { setLoading, setData, setError } from '../redux/catSlice';

const API_KEY = 'process.env.REACT_APP_API_KEY';
const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

export const fetchCats = (page = 1, limit = 10, order = 'asc') => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        limit,
        page,
        order,
        api_key: API_KEY,
      },
    });
    dispatch(setData(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

