import Header from "../comps/header";
import phone from '/public/phone.png';
import Image from "next/image";
import redlogo from '/public/redlogo-04.png'


export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-12 bg-[#161616] text-gray-50 -translate-y">
            <Header />
            <div className="flex w-full items-center justify-around min-[480px]:flex-row flex-col">
              <div>
                  <Image src={phone} alt='phone'  />
              </div>
              <div>
                <div className="bg-[#1D1D1D] rounded-3xl flex flex-col justify-center items-center pb-12">
                    <Image src={redlogo} alt="redlogo" width={120} className="rounded-full -translate-y-14" /> 
                    <p className="font-semibold font-['Yekan_Bakh'] text-center -translate-y-12 text-[#bbbbbb]">نوم لایت</p>               
                    <h2 className="font-semibold font-['Yekan_Bakh'] text-xl text-center leading-10 text-[#ececec]">
                           جهت سفارش و مشاوره یا طراحی نئون 
                      <br/>شخصی از راه های زیر با ما در ارتباط باشید 
                    </h2>
                </div>

                <div className="flex items-center justify-center flex-col min-[480px]:mt-6 mt-12">
                  <div className="flex min-[480px]:block">
                      <button className="px-12 py-4 bg-[#43C354] rounded-xl min-[480px]:m-6 m-4 font-bold font-['Yekan_Bakh'] text-xl border-0 hover:bg-transparent hover:border hover:border-[#b7b7b7] transition">واتس اپ</button>
                      <button className="px-12 py-4 bg-[#0088CC] rounded-xl min-[480px]:m-6 m-4 font-bold font-['Yekan_Bakh'] text-xl border-0 hover:bg-transparent hover:border hover:border-[#b7b7b7] transition">تلگرام</button>
                  </div>
                  <button className="py-4 px-32 bg-[#8D13D9] rounded-xl font-bold font-['Yekan_Bakh'] text-xl border-0 hover:bg-transparent hover:border hover:border-[#b7b7b7] transition">0913 158 1683</button> 
                </div>
              </div>

            </div>

            
            



        </main>
    )
}