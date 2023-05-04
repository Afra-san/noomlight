import Image from 'next/image'
import Link from 'next/link'
import Header from './comps/header'
import neon1 from '/public/neon1.svg'
import neon2 from '/public/neon2.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 bg-[#161616] text-gray-50">
      <Image src={neon1} alt='neon' className="absolute neon"/>
      <Image src={neon2} alt='neon' className="absolute neon2"/>

    
      <Header />
      <main className='flex items-center justify-center flex-col'>
        <h1 className='txt min-[480px]:text-[150px]'>نـــوم <span className='light min-[480px]:text-[150px]'>لایـــت</span></h1>
        <p className="text-xs font-['Yekan_Bakh'] text-center min-[480px]:text-sm" >
          نوم لایت یک فروشگاه متفاوت برای خرید تابلو نئون 
          <br/>و دکور های نئونی
        </p>
      </main>
      <div className='flex min-[480px]:flex-row flex-col justify-center items-center'>
        <Link href="/contact"><button className="brdr2 min-[480px]:px-16 px-12 rounded-full min-[480px]:py-5 py-4 font-['Yekan_Bakh'] min-[480px]:mr-6 m-2 btnhover transition font-semibold">تماس</button></Link>
        <Link href="/products"><button className="brdr2 min-[480px]:px-14 px-10 rounded-full min-[480px]:py-5 py-4 font-['Yekan_Bakh'] min-[480px]:ml-6 m-2 btnhover transition font-semibold">محصولات</button></Link>
      </div>
    </main>
  )
}
