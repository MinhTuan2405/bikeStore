const url = 'http://127.0.0.1:3000/api/product/stats/catgoryrevenue'

import api from "./api.js"

const data = await api.get (url)
  
const res = data.data.data

res.forEach(element => {
    console.log (element.category_name)
});

