import useSWR from "swr";

export function useFetch(url){
  const { data, error } = useSWR(url, async (url) => {
    const res = await fetch(url);
    const resData = await res.json();
    return resData;
  })

  return { data, error };
}