const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL não configurada');
}

export const apiConfig = {
  baseUrl: API_URL,
};