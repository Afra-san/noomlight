import Header from "../comps/header";
import { neons } from "../api/data";
import Neons from "../Neons";

export default function Products() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-12 bg-[#161616] text-gray-50">
            <Header />

            <h1 className="min-[480px]:text-5xl text-[42px] font-['Capsule'] my-20 mt-40">نئون ها</h1>

            <div className="flex flex-wrap min-[480px]:px-8 p-0 justify-center ">

              {neons.map((neon) => (
              <Neons
                key={neon.id}
                id={neon.id}
                title={neon.title}
                image_path={neon.image_path}

              />
              ))}

            </div>
            
            {/* {neons?.map((item, index) => (
              <div key={index}>
                <Link href={`/Products/${encodeURIComponent(neon.slug)}`}>
                </Link>
                <p>{item.title}</p>

              </div>
            ))} */}


        </main>
    )
}