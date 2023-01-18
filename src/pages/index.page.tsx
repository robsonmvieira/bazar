import { useState } from 'react'
import { MainPage } from '../components/Home'
import { Topbar } from '../components/TopBar'


export default function Home() {
  const [slides, setSlides] = useState([
    {id: 1, imageUrl: 'images/slider/pexels-alex-andrews-821651.jpg', title: 'Compre uma bolsa' },
    {id: 2, imageUrl: 'images/slider/pexels-gabriel-freytez-341523.jpg', title: 'Compre Alexey'},
    {id: 3, imageUrl: 'images/slider/pexels-suzy-hazelwood-2536965.jpg', title: 'Compre uma bolsa'},
    {id: 4, imageUrl: 'images/slider/pexels-karolina-grabowska-4465121.jpg', title: 'Compre uma bolsa'},
    {id: 5, imageUrl: 'images/slider/pexels-math-90946.jpg', title: 'Compre uma Math'},
  ])

  const containerStyle = {
    height: '70vh',
    width: '1400px',
    margin: '0 auto',

  }
  return (
    <div>
      <Topbar />
      <MainPage slides={slides} />
      
    </div>
  )
}
