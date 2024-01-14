export type RequestInitWithBaseUrl = {
  baseUrl: string;
} & RequestInit;

export const apiFetch = (url: string, init?: RequestInitWithBaseUrl) =>
  fetch(`${init?.baseUrl || import.meta.env.VITE_BASE_URL}${url}`, init);
