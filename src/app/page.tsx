import Image from 'next/image'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex item-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          <nav className='space-y-5 mt-5'>
            <a href="#" className="flex items-center gap-2 text-sn font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="#" className="flex items-center gap-2 text-sn font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="#" className="flex items-center gap-2 text-sn font-semibold text-zinc-200">
              <Library />
              Your library
            </a>
          </nav>
          <nav className='flex flex-col mt-6 pt-6 border-t border-zinc-800 gap-2'>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">House</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Dance Music</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Rap & Soul</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Techno</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Disco</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My Playlist</a>
          </nav>
        </aside>
        <main className='flex-1 p-6'>
          <div className="flex items-center gap-4">
            <button className="rounded-full bg=black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg=black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10 mb-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href='#' className="bg-white/5 flex items-center rounded overflow-hidden hover:bg-white/20 gap-4 trasitions=colors group">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do Album da banda" />
            <strong>Men at Work</strong>
            <button className="w-12 h-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
            </a>
            <a href='#' className="bg-white/10 flex items-center rounded overflow-hidden hover:bg-white/20 gap-4 trasitions=colors group">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do Album da banda" />
            <strong>Men at Work</strong>
            <button className="w-12 h-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
            </a>
            <a href='#' className="bg-white/10 flex items-center rounded overflow-hidden hover:bg-white/20 gap-4 trasitions=colors group">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do Album da banda" />
            <strong>Men at Work</strong>
            <button className="w-12 h-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
            </a>
            <a href='#' className="bg-white/10 flex items-center rounded overflow-hidden hover:bg-white/20 gap-4 trasitions=colors group">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do Album da banda" />
            <strong>Men at Work</strong>
            <button className="w-12 h-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
            </a>
            <a href='#' className="bg-white/10 flex items-center rounded overflow-hidden hover:bg-white/20 gap-4 trasitions=colors group">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do Album da banda" />
            <strong>Wasting Light</strong>
            <button className="w-12 h-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
            </a>
            <a href='#' className="bg-white/10 flex items-center rounded overflow-hidden hover:bg-white/20 gap-4 trasitions=colors group">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do Album da banda" />
            <strong>Men at Work</strong>
            <button className="w-12 h-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
            </a>
          </div>
          <h2 className="font-semibold text-3xl mt-10 mb-10">Made for Diego Shell Fernandez</h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
              <a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                <Image src="/album.jpg" width={240} height={240} alt="Capa do Album da banda" />
                <strong className="font-semibold">Nome do Album</strong>
                <span className="text-sm text-zinc-500">One, two, three and more</span>
              </a>
              <a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                <Image src="/album.jpg" width={240} height={240} alt="Capa do Album da banda" />
                <strong className="font-semibold">Nome do Album</strong>
                <span className="text-sm text-zinc-500">One, two, three and more</span>
              </a>
              <a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                <Image src="/album.jpg" width={240} height={240} alt="Capa do Album da banda" />
                <strong className="font-semibold">Nome do Album</strong>
                <span className="text-sm text-zinc-500">One, two, three and more</span>
              </a>
              <a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                <Image src="/album.jpg" width={240} height={240} alt="Capa do Album da banda" />
                <strong className="font-semibold">Nome do Album</strong>
                <span className="text-sm text-zinc-500">One, two, three and more</span>
              </a>
              <a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                <Image src="/album.jpg" width={240} height={240} alt="Capa do Album da banda" />
                <strong className="font-semibold">Nome do Album</strong>
                <span className="text-sm text-zinc-500">One, two, three and more</span>
              </a>
            </div>
        </main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 p-6'>
        <div></div>
        <div></div>
        <div></div>
      </footer>
    </div>
  )
}
