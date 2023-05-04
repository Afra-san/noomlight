import Image from "next/image"
import Header from "../comps/header";
import { neons } from "../api/data";

export default async function NeonPeoduct(params) {
    const { neon } = params



    return(
        <main className="flex min-h-screen flex-col items-center justify-between py-12 bg-[#161616] text-gray-50">
          <Header />

          {/* <h1>{neon.title}</h1> */}
          {neons.forEach((neon) => (
              <h1>{neon.id}</h1>

              ))}
          {/* {neon.id}         */}
          {/* <h1>{res.title}</h1> */}


        </main>

    )
} 