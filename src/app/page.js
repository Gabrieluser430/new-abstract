import Image from 'next/image'
import firstPNG from "../../public/firstPNG.png"
import secondPNG from "../../public/secondPNG.png"
import thirdPNG from "../../public/thirdPNG.png"
import fourthPNG from "../../public/fourthPNG.png"
import fifthPNG from "../../public/fifthPNG.png"
import sixthPNG from "../../public/sixthPNG.png"

export default function Home() {
  return (
    <div>
      <nav className="flex justify-between items-center py-7 px-12 bg-black text-white">
        <div className="flex flex-col ">
          <a className="pb-12 text-xl">Abstract</a>
          <a className="text-xl">Help Center</a>  
        </div>
        <div className="flex flex-col ">
          <button className="mb-6 text-xl bg-black border-2 border-white py-2 px-4 rounded-lg">Submit a request</button>
          <button className="text-xl bg-purple-600 rounded-lg py-2">Sign In</button>
        </div>
      </nav>
      <main>
        <section className="px-6 py-24 flex flex-col items-center justify-center gap-12 bg-purple-200">
          <h1 className="text-center text-4xl font-medium">
            How can we help you?
          </h1>
          <input className="placeholder:italic placeholder:text-slate-500 block bg-white  w-full max-w-3xl  border border-slate-500 rounded-md py-4 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="search" name="search"/>
        </section>
        <section>
          <div className="flex flex-col">
            <div className="flex flex-row px-6 pt-12 gap-x-4">
              <div className=" flex items-center">
                <Image src={firstPNG} className="w-full h-32 object-contain"/>
              </div>
              <div className="flex flex-col gap-y-4">
                <h2 className="font-bold text-xl">
                  Using Abstract
                </h2>
                <p className="text-lg">
                  Abstract lets you manage, version, and document your designs in one place.
                </p>
                <a className=" text-base text-blue-400 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="flex flex-row px-6 pt-12 gap-x-4">
              <div className=" flex items-center">
                <Image src={secondPNG} className="w-full h-32 object-contain"/>
              </div>
              <div className="flex flex-col gap-y-4">
                <h2 className="font-bold text-xl">
                  Manage organizations, teams, and projects                </h2>
                <p className="text-lg">
                Use Abstract organizations, teams, and projects to organize your people and your work.
                </p>
                <a className=" text-base text-blue-400 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="flex flex-row px-6 pt-12 gap-x-4">
              <div className="flex items-center">
                <Image src={thirdPNG} className="w-full h-32 object-contain"/>
              </div>
              <div className="flex flex-col gap-y-4">
                <h2 className="font-bold text-xl">
                  Using Abstract
                </h2>
                <p className="text-lg">
                  Abstract lets you manage, version, and document your designs in one place.
                </p>
                <a className=" text-base text-blue-400 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="flex flex-row px-6 pt-12 gap-x-4">
              <div className=" flex items-center">
                <Image src={fourthPNG} className="w-full h-32 object-contain"/>
              </div>
              <div className="flex flex-col gap-y-4">
                <h2 className="font-bold text-xl">
                  Using Abstract
                </h2>
                <p className="text-lg">
                  Abstract lets you manage, version, and document your designs in one place.
                </p>
                <a className=" text-base text-blue-400 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="flex flex-row px-6 pt-12 gap-x-4">
              <div className="flex items-center">
                <Image src={fifthPNG} className="w-full h-32 object-contain"/>
              </div>
              <div className="flex flex-col gap-y-4">
                <h2 className="font-bold text-xl">
                  Using Abstract
                </h2>
                <p className="text-lg">
                  Abstract lets you manage, version, and document your designs in one place.
                </p>
                <a className=" text-base text-blue-400 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="flex flex-row px-6 pt-12 gap-x-4">
              <div className=" flex items-center">
                <Image src={sixthPNG} className="w-full h-32 object-contain"/>
              </div>
              <div className="flex flex-col gap-y-4">
                <h2 className="font-bold text-xl">
                  Using Abstract
                </h2>
                <p className="text-lg">
                  Abstract lets you manage, version, and document your designs in one place.
                </p>
                <a className=" text-base text-blue-400 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        
      </footer>
    </div>
  )
}
