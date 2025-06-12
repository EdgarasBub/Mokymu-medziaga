import './App.css'
import type { Vartotojas } from './types';

function App() {

  let skaicius = 45;
  const useris: Vartotojas = {
    name: 'petras',
    age: 12
  }
  let betkoks: any = 'SuperMario';

  
let skaiciai: number = 5
  console.log(skaiciai, typeof skaiciai)

  let stringas: string = skaiciai.toString();
  console.log(stringas, typeof stringas)

  let skaiciukas: number = parseInt(stringas)
  console.log(skaiciukas)

  let masyvas: number[] = [5, 3]
  console.log(masyvas)

  masyvas.push(2)
  console.log(masyvas)

  masyvas.unshift(1)
  console.log(masyvas)

  masyvas.pop()
  console.log(masyvas)
  
  masyvas.shift()
  console.log(masyvas)
  return (
    <>
      {skaicius}
      <br />
      1 uzd
      <br />
      {useris.name}
      {useris.age}
      <br />
      2 uzd
      <br />
      {betkoks}
      3 uzd
      <br />
      
    </>
  )
}

export default App
