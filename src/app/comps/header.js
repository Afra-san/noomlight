import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/N-logo.svg'
import cart from '/public/cart.svg'
import phone from '/public/phone.svg'


export default function Header() {
    return (
        <header className="min-[480px]:w-3/4 min-[480px]:m-0 w-full min-[480px]:h-24 h-20 brdr rounded-3xl flex justify-between items-center font-['Yekan_Bakh'] min-[480px]:px-12 px-4">

           <div className="min-[480px]:w-36 w-20 flex  ">
              {/* <Link href={'/'}><Image src={cart} alt="Cart" className="w-8" /></Link> */}
              <Link href={'/contact'}><Image src={phone} alt="phone" className="min-[480px]:w-8 w-6" /></Link>
           </div>

            <Link href={'/'}><Image src={logo} alt="Logo" className="min-[480px]:w-20 w-12" /></Link>

            <div className="min-[480px]:w-36 w-20 flex">
              <ul className='flex justify-around w-36 min-[480px]:font-bold min-[480px]:text-base text-sm font-semibold'>
              <li className="transition hover:opacity-80 up">
                  <Link href="/products" className='min-[480px]:m-0 m-0'>محصولات</Link>
                </li>
              
                <li className="transition hover:opacity-80 up">
                  <Link href="/" className='min-[480px]:m-0 mx-2'>خانه</Link>
                </li>
              </ul>
            </div>

        </header>
    )
}