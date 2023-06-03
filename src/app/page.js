import Image from 'next/image'
import firstPNG from "../../public/firstPNG.png"
import secondPNG from "../../public/secondPNG.png"
import thirdPNG from "../../public/thirdPNG.png"
import fourthPNG from "../../public/fourthPNG.png"
import fifthPNG from "../../public/fifthPNG.png"
import sixthPNG from "../../public/sixthPNG.png"
import logo from "../../public/logo.svg"

export default function Home() {
  return (
    <div>
      <nav className="flex justify-between items-center py-7 px-12 bg-black text-white">
        <div className="flex flex-col gap-y-11 md:flex-row md gap-x-10">
          <div className="flex flex-row gap-x-4 cursor-pointer transition-opacity duration-300 hover:opacity-80">
            <div className="bg-white text-white rounded-full  w-1/5 h-full flex items-center justify-center md:">
            <Image src={logo} className="lg:w-10"/>
            </div>
            <a className=" text-xl lg:text-2xl">Abstract</a>
          </div>
          <a className="text-xl cursor-pointer hover:underline lg:text-2xl">Help Center</a>  
        </div>
        <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-10">
          <button className=" text-xl bg-black border-2 border-white py-2 px-4 rounded-lg lg:text-2xl">Submit a request</button>
          <button className="text-xl bg-purple-600 rounded-lg py-2 px-4 transition-bg duration-300 hover:bg-white hover:text-black lg:text-2xl">Sign In</button>
        </div>
      </nav>
      <main>
        <section className="px-6 py-24 flex flex-col items-center justify-center gap-12 bg-purple-200">
          <h1 className="text-center text-4xl font-medium md:text-5xl lg:text-6xl">
            How can we help you?
          </h1>
          <input className="placeholder:italic placeholder:text-slate-500 block bg-white  w-full max-w-3xl  border border-slate-500 rounded-md py-4 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="search" name="search"/>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-40">
                <div className="w-32 h-32">
                  <Image src={firstPNG} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4 items-center justify-center text-center">
                <h2 className="font-bold text-xl">
                  Using Abstract
                </h2>
                <p className="text-lg">
                  Abstract lets you manage, version, and document your designs in one place.
                </p>
                <a className="text-base text-blue-400 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-40">
                <div className="w-32 h-32">
                  <Image src={secondPNG} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4 items-center justify-center text-center">
                <h2 className="font-bold text-xl">
                  Manage organizations, teams, and projects
                </h2>
                <p className="text-lg">
                  Use Abstract organizations, teams, and projects to organize your people and your work.
                </p>
                <a className="text-base text-blue-400 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-40">
                <div className="w-32 h-32">
                  <Image src={thirdPNG} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4 items-center justify-center text-center">
                <h2 className="font-bold text-xl">
                  Authenticate to Abstract
                </h2>
                <p className="text-lg">
                  Set up and configure your SSO, SCIM and Just-In-Time provisioning.
                </p>
                <a className="text-base text-blue-400 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-40">
                <div className="w-32 h-32">
                  <Image src={fourthPNG} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4 items-center justify-center text-center">
                <h2 className="font-bold text-xl">
                  Manage your account
                </h2>
                <p className="text-lg">
                  Configure your account settings, such as your email, profile details, and password.
                </p>
                <a className="text-base text-blue-400 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-40">
                <div className="w-32 h-32">
                  <Image src={fifthPNG} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4 items-center justify-center text-center">
                <h2 className="font-bold text-xl">
                  Manage billing
                </h2>
                <p className="text-lg">
                  Change subscription and payment details.
                </p>
                <a className="text-base text-blue-400 cursor-pointer">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-40">
                <div className="w-32 h-32">
                  <Image src={sixthPNG} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4 items-center justify-center text-center">
                <h2 className="font-bold text-xl">
                  Abstract support
                </h2>
                <p className="text-lg">
                  Get in touch with a human.
                </p>
                <a className="text-base text-blue-400 cursor-pointer">
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
