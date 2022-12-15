import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Stack, Container } from 'react-bootstrap'
import './App.css';

function App() {
const [name,setName]=useState('TEST')
const [count,setCount]=useState(0)
const [title,setTitle]=useState([])
// agar hum fetch of useEffect ki jgh use krege toh vha jo data aayega toh vo baar baar resender hoga aur baar baar data set functioon me dalega
//useEffect ek baar chlta hai and agr humne blank array bheja hai tph vo fir kbhi ni chlta h
//yha 2 set function hai jab bhi in dono me se kkoi bhi change hoga toh useEffect fir se chal jayga agar hum blannk array nhi bhejte hain toh

useEffect(()=>{
  console.log("hi")
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res=>res.json())
  // .then(data => console.log(data))  //this returns an array 
   .then(data=> setTitle(data.map(d=>d.title)))  //when we want to display only title then we place data.map(d=> d.title) and usko hum setTtitle me likh denge jisse ye cheez setTitle ko allot ho jyegi
 },[name,count])    //ab if we want this operation xto run again but only on the change of the name then hum name ko iss blank array me dal dete hain , jab bhi naam change hoga tab ye chlega same thing applies to count 

  return (
    <Container>
      <h1>{name}</h1>    {/*name will be displayed*/}
      <button onClick={()=>setName("john doe")}>TEST</button>   {/*iss setName se name me change hoga button ke click par, ab name me chane hoga toh blannk array yh btara h ki useEffect ne name pda hai ab usme koi chanege hota h toh  vo run ho jayega */}
    {/* {console.log("bye")}      phle yha bye run hoga fir last me useEffect hoga*/}

    <h2>{count}</h2>
    {/* <button onClick={()=>setCount(count+1)}>Count</button>  isse ye hoga ki jitni baar bhi count pr click hoga utni baar vha updata hota jayega ui me */}
    {/* iska 2nd method me hum ye bhi kar skte hain ki hum count like aur ek call back function bheje setCount ke andr toh usse ye hoga ki (-count-=>count+1) toh -- wala count jo hai vo jo bhi uski purani value hogi vo apne aap utha layega aur kyunki ye callback function hai toh set count hhi isko value dera hai */}
    <button onClick={()=>setCount(count=>count+1)}>COUNT</button>

     {title.map(title=><li>{title}</li>)}  {/*iska meaning hai ki title me map kro aur jo bhi yha pda h usko li me show kra do */}

      <Stack gap={3}>
       {/*API calling ke liye hmesha useeffect hoga and fetch api calling hi hoti hai but in react hum usko handle useEffect se krte h and */}
      </Stack>
      </Container>
  )
}
//these are the 2 hooks - useEffect and useState

export default App