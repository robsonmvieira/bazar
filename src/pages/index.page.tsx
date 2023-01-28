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

  const [bestSellingCategories, setBestSellingCategories] = useState([
    {id: 1, imageUrl: 'images/bestSellingCategories/shoes.jpg', title: "Quick View" },
    {id: 2, imageUrl: 'images/bestSellingCategories/electronics.jpg', title: "Quick View" },
    {id: 3, imageUrl: 'images/bestSellingCategories/perfum.jpg', title: "Quick View" },
    {id: 4, imageUrl: 'images/bestSellingCategories/pincels.jpg', title: "Quick View" },
  ])


  return (
    <div>
      <Topbar />
      <MainPage slides={slides} bestSellingCategories={bestSellingCategories} />
      
    </div>
  )
}
