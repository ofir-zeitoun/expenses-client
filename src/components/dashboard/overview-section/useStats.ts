import { useAuth0 } from "@auth0/auth0-react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { apiFetch } from "../../../api";

interface Stats {
  totalUsers: number;
  totalLists: number;
  totalExpenses: number;
  totalPrice: number;
}

async function fetchStats(token: string): Promise<Stats> {
  const init = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return apiFetch(`/api/stats`, init).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });
}

export const useStats = (): UseQueryResult<Stats, Error> => {
  const [token, setToken] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    (async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        setToken(accessToken);
      } catch (error) {
        console.error("Error fetching the access token", error);
      }
    })();
  }, [getAccessTokenSilently]);

  return useQuery<Stats, Error>({
    enabled: !!token,
    queryKey: ["stats", token],
    queryFn: () => fetchStats(token),
  });
};
