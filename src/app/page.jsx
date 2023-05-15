import Image from 'next/image'
import Herosection from './components/Herosection'
// import Header from "@/app/components/Header";
export default function Home() {
  return (
    <>
   <Herosection title={"LET`S WATCH MOVIE TOGETHER"} imageUrl={"/home.svg"}/>
    </>
  )
}
