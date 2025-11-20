import {useState, useEffect} from 'react'
const useFetch = (url) => {
const [data,setData]=useState(null);
const [isPending, setIsPending]=useState(true);
const [error,setError]=useState(null);
useEffect(() => {
setTimeout( () => {
fetch(url)
.then(res => {
if (!res.ok){
throw Error("Could not fetch");
}
return res.json();
})
.then(val => {
setData(val);
setIsPending(false);
})
.catch(err => {
setIsPending(false)
setError(err.message)
})
}, 5000);
},[url]);
return {data, isPending, error}
}
export default useFetch