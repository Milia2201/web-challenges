export default function App() {

  return <Greeting name ="Kira"/>
}

function Greeting({name}) {
  console.log('name: ', name);
  
  return (
    <h1>
    Hello, {name==="Kira" ? "Coach" : name}!
    </h1>
  )
}
