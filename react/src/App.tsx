import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import programmer from "../src/images/programmer.webp"

function App() {

  const [icon, setIcon] = useState(false)

  function setDarkLight() {
    setIcon(prev => !prev)
  }

  return (
    <header className={`w-[1366px] mx-auto h-[633px] transition-[1s] ${icon ? "bg-slate-300" : "bg-slate-800"} `}>
      <nav className='w-[100%] h-[50px flex items-center justify-between '>
        <h1 className=' text-orange-600 text-[40px] mx-[70px] font-extrabold '>Logo</h1>
        <span className=' flex items-center w-[350px] justify-between text-orange-700 font-bold transition-[0.2s] '>
          <a className='hover:text-white' href="">Home</a>
          <a className=' hover:text-amber-300 ' href="">About</a>
          <a className=" hover:text-rose-600 " href="">Contact</a>
          <a className=' hover:text-fuchsia-700 ' href="">Menu</a>
        </span>
        <button onClick={setDarkLight} className={` w-[50px] h-[50px] rounded-[50%] bg-pink-700 fas ${icon ? "fa-moon" : "fa-sun"} text-[25px] text-white shadow-[0_5px_2px_1px_red] transition-[0.2s] active:translate-y-[5%] active:shadow-none `}>
        </button>
        <button className=' w-[130px] transition-[0.2s] h-[40px] bg-fuchsia-800 rounded-[10px] text-white font-bold cursor-pointer shadow-[0_5px_2px_1px_blue] active:translate-y-[5%] active:shadow-none mx-[70px] '>Enter Site</button>
      </nav>
      <section className=' flex '>
        <aside className=' w-[550px] mx-[70px] my-[100px] '>
          <h1 className=' text-[45px] font-bold text-red-500 '>Welcome to my site</h1>
          <p className=' text-white font-serif my-[20px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur ex unde voluptatibus architecto rem. Quaerat et porro assumenda obcaecati optio dicta nam accusamus, est debitis numquam. Veniam, corporis dicta.</p>
          <button className=' w-[150px] h-[50px] bg-fuchsia-700 transition-[0.2s] rounded-[20px] text-[18px] font-bold text-white my-[20px] shadow-[0_5px_2px_1px_purple] hover:bg-fuchsia-600 active:translate-y-[5%] active:shadow-none '>Let's talk</button>
        </aside>
        <figure>
          <img className=' w-[600px] my-[40px] ' src={programmer} alt="Programmer" />
        </figure>
      </section>
    </header>
  )
}

export default App
