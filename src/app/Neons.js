import Link from "next/link"
import Image from "next/image"

export default function Neons({ title, id, image_path, }) {

    return(
        <div className="card flex justify-center transition">
            
            <Link 
            //   href={`/${id}`}
            href={'/'}
            
            >
                <Image
                  className="rounded-xl mx-10 my-10 cardimg transition" 
                  src={image_path} 
                  alt={title} 
                  width={300} 
                  height={300} 
                ></Image>

                

                {/* <h1 className="text-xl text-center my-3">{title}</h1> */}
            </Link>
            <div className="cardbtn transition mt-52 text-2xl font-bold"><Link className="px-6 py-3 rounded bg-[]" href={'/contact'}>سفارش</Link></div>


        </div>
    )
}