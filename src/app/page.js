import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <nav className="flex justify-between items-center py-7 px-12 bg-black text-gray-200">
        <div className="flex flex-col ">
          <a className="mb-6 text-xl">Abstract</a>
          <a className="text-xl">Help Center</a>  
        </div>
        <div className="flex flex-col ">
          <button className="mb-6 text-xl bg-black border-2 border-white py-2 px-4 rounded-lg">Submit a request</button>
          <button className="text-xl bg-purple-800 rounded-lg py-2">Sign In</button>
        </div>
      </nav>
    </div>
  )
}
