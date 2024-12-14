import axios from 'axios';

export async function apiGetter(url: string) {
  try {
    const response = await axios.get(url);
    return response.data; 
  } catch (error: any) {
    return error.message;
  }
}
