const metroApi = " http://www.omdbapi.com/?i=tt3896198&apikey=44308c6f&s=all";
const metroApiSearch = " http://www.omdbapi.com/?i=tt3896198&apikey=44308c6f&s=";

export const fetchMetroPOP = async() => {
    try {
        const endpoint = metroApi;
        const response = await fetch(endpoint);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
        return { count: 0 };
    }
}

export default fetchMetroPOP;