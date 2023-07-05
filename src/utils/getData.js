
async function getData() {
   try{
     const res = await fetch('Products.json')
     const data = await res.json()
     return data
   }catch(err) {
    console.log(err)
    return null
    }   
}

export default getData
