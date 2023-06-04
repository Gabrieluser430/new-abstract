import Image from 'next/image'
import firstPNG from "../../public/firstPNG.png"
import secondPNG from "../../public/secondPNG.png"
import thirdPNG from "../../public/thirdPNG.png"
import fourthPNG from "../../public/fourthPNG.png"
import fifthPNG from "../../public/fifthPNG.png"
import sixthPNG from "../../public/sixthPNG.png"
import logo from "../../public/logo.svg"
import outraSeta from "../../public/outraSeta.svg"

export default function Home() {
  return (
    <div>
      <nav className="flex justify-between items-center py-7 px-8 sm:px-10 md:px-12 bg-black text-white">
        <div className="flex flex-col gap-y-11 md:flex-row md:gap-x-10">
          <div className="flex flex-row gap-x-4 cursor-pointer transition-opacity duration-300 hover:opacity-80">
            <div className="bg-white text-white rounded-full  w-1/5 h-full flex items-center justify-center">
            <Image src={logo} className="lg:w-10"/>
            </div>
            <a className=" text-base lg:text-2xl sm:text-xl">Abstract</a>
          </div>
          <a className="text-base cursor-pointer hover:underline lg:text-2xl sm:text-xl">Help Center</a>  
        </div>
        <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-10">
          <button className=" text-base bg-black border-2 border-white py-2 px-4 rounded-lg lg:text-2xl sm:text-xl">Submit a request</button>
          <button className="text-base bg-indigo-500 rounded-lg py-2 px-4 transition-bg duration-300 hover:bg-white hover:text-black lg:text-2xl sm:text-xl ">Sign In</button>
        </div>
      </nav>
      <main>
        <section className="px-6 py-24 flex flex-col items-center justify-center gap-12 bg-custom-background">
          <h1 className="text-center text-4xl font-medium md:text-5xl lg:text-6xl">
            How can we help you?
          </h1>
          <div className="w-full max-w-3xl relative">
            <Image src={outraSeta} className="absolute cursor-pointer right-4 top-5"/>
           <input className="placeholder:italic placeholder:text-slate-500 block bg-white  w-full max-w-3xl  border border-slate-500 rounded-md py-4 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-lg" placeholder="Search for anything..." type="search" name="search"/>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
                <a className="text-base text-blue-400 cursor-pointer hover:underline">
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
                <a className="text-base text-blue-400 cursor-pointer hover:underline">
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
                <a className="text-base text-blue-400 cursor-pointer hover:underline">
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
                <a className="text-base text-blue-400 cursor-pointer hover:underline">
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
                <a className="text-base text-blue-400 cursor-pointer hover:underline">
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
                <a className="text-base text-blue-400 cursor-pointer hover:underline">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
       </section>
      </main>
      <footer className="bg-black">
        <div className="grid grid-cols-2 p-4 md:grid-cols-3">
          <div className="flex flex-col items-center gap-y-2 text-white">
            <h3 className="p-4 text-xl font-bold">Abstract</h3>
            <a className="cursor-pointer hover:underline">Start Trial</a>
            <a className="cursor-pointer hover:underline">Pricing</a>
            <a className="cursor-pointer hover:underline">Download</a>
          </div>

          <div className="flex flex-col items-center gap-y-2 text-white">
            <h3 className="p-4 text-xl font-bold">Resources</h3>
            <a className="cursor-pointer hover:underline">Blog</a>
            <a className="cursor-pointer hover:underline">Help Center</a>
            <a className="cursor-pointer hover:underline">Release Notes</a>
            <a className="cursor-pointer hover:underline">Status</a>
          </div>

          <div className="flex flex-col items-center gap-y-2 text-white">
            <h3 className="p-4 text-xl font-bold">Community</h3>
            <a className="cursor-pointer hover:underline">Twitter</a>
            <a className="cursor-pointer hover:underline">LinkedIn</a>
            <a className="cursor-pointer hover:underline">Dribbble</a>
            <a className="cursor-pointer hover:underline">Podcast</a>
          </div>

          <div className="flex flex-col items-center gap-y-2 text-white">
            <h3 className="p-4 text-xl font-bold">Company</h3>
            <a className="cursor-pointer hover:underline">About Us</a>
            <a className="cursor-pointer hover:underline">Careers</a>
            <a className="cursor-pointer hover:underline">Legal</a>
            <h4 className="font-bold">Contact Us</h4>
            <p>info@abstract.com</p>
          </div>

          <div className="flex flex-col items-center gap-y-2 text-white pt-4 md:mt-10">
            <h3 className="font-medium">© Copyright 2022</h3>
            <p className="font-medium">Abstract Studio Design, Inc.</p>
            <p className="font-medium">All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
