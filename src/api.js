import axios from "axios";


const api = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
});

export const getTrendingMovies = async()=>{
    try {

      const data =  await api.get(`/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
      return data.data.results.slice(0,4)

    } catch (error) {
        console.log(error)
    }
}

export const popular = async()=>{
    try {

      const data =  await api.get(`/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
      return data.data.results

    } catch (error) {
        console.log(error)
    }
}

export const subBanner1 = async()=>{
    try {

      const data =  await api.get(`/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
      return data.data.results[4]

    } catch (error) {
        console.log(error)
    }
}

export const subBanner2 = async()=>{
    try {

      const data =  await api.get(`/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
      return data.data.results[5]

    } catch (error) {
        console.log(error)
    }
}


export const streamEveryDay = async()=>{
    try {

      const data =  await api.get(`/tv/on_the_air?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
      return data.data.results

    } catch (error) {
        console.log(error)
    }
}

export const mostPopular = async()=>{
    try {

      const data =  await api.get(`/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
      return data.data.results

    } catch (error) {
        console.log(error)
    }
}

export const upcoming = async()=>{
    try {

      const data =  await api.get(`/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
      return data.data.results

    } catch (error) {
        console.log(error)
    }
}

export const drama = async()=>{
    try {

      const data =  await api.get(`/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=18&language=en-US&sort_by=popularity.desc&page=1`)
      return data.data.results

    } catch (error) {
        console.log(error)
    }
}

export const comedy = async()=>{
    try {

      const data =  await api.get(`/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=35&language=en-US&sort_by=popularity.desc&page=1`)
      return data.data.results

    } catch (error) {
        console.log(error)
    }
}

export const animation = async()=>{
    try {

      const data =  await api.get(`/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=16&language=en-US&sort_by=popularity.desc&page=1`)
      return data.data.results

    } catch (error) {
        console.log(error)
    }
}

export const documentary = async()=>{
    try {

      const data =  await api.get(`/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=99&language=en-US&sort_by=popularity.desc&page=1`)
      return data.data.results

    } catch (error) {
        console.log(error)
    }
}

export const TVMovies = async()=>{
    try {

      const data =  await api.get(`/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=10770&language=en-US&sort_by=popularity.desc&page=1`)
      return data.data.results

    } catch (error) {
        console.log(error)
    }
}