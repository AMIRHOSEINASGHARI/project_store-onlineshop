"use client";

import { useQuery } from "@tanstack/react-query";
import { getSession } from "@/services/queries";
import { QUERY_KEY } from "@/services/queryKeys";

const useSession = () => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: [QUERY_KEY.user_session],
    queryFn: getSession,
    cacheTime: 0,
    staleTime: 0,
  });

  return {
    data,
    error,
    isError,
    isLoading,
  };
};

export default useSession;
