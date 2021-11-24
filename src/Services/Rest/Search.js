import { http } from '../http';

const Search = {
  Search_Repo: async (details) => {
    try {
      details.search = details.search.split(' ').join('')
      details._sort = details._sort.split(' ').join('')
      const response = await http.get(`/api/search?_query=${details.search}&_sort=${details._sort}`)
      if(response.status !== 200){
        return await Promise.reject(new Error('Non 200 response'))
      }
      return await Promise.resolve(response.data)
    } catch(error){
      return Promise.reject(error);
    }
  },
  Search_Author: async(details) => {
    try {
      const response = await http.get(`/api/repodetails/?owner=${details.owner}&repo=${details.repo}`)
      if(response.status !== 200){
        return await Promise.reject(new Error('Non 200 response'))
      }
      return await Promise.resolve(response.data)
    } catch(error){
      return Promise.reject(error);
    }
  }
}

export { Search };