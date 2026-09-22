import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      
      <nav className="sticky top-0 z-50 flex items-center justify-between w-full px-8 bg-white shadow-sm h-16 border-b border-gray-100">
        <span className="font-bold leading-tight">
          sudip <br /> Tamang
        </span>

        <div className="flex bg-white gap-10 items-center text-red-500">
          <Link className="hover:scale-110 transition-transform duration-300 hover:bg-gray-100 p-2 rounded-lg" to="/intro">Intro</Link>

          <Link className="hover:scale-110 transition-transform duration-300 hover:bg-gray-100 p-2 rounded-lg" to="/projects" >Projects</Link>

         

          


        </div>
      </nav>

     
      <header className="flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-16 my-16 gap-10">
        
       
        <div className="flex flex-col items-start text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Hello, I'm Sudip.
          </h1>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
            I'm a Web Developer
          </h1>

          <p className="text-red-600 max-w-md my-6 text-lg">
            I create websites using technologies like HTML-5, Tailwind CSS, JavaScript, and React.jsx.
          </p>

          <Link
            to="/Contact"
            className=" flex justify-center text-red-600 rounded-xl bg-black px-6 py-3 font-medium transition-transform hover:scale-105"
          >
            Let's Connect
          </Link>
        </div>

        
        <div className="ml-auto shrink-0">
          <img
            src="https://cdn.phototourl.com/free/2026-09-21-c85effa4-b19f-450e-9e2a-56e7f5ed24f4.jpg"
            alt="my-img"
            className="w-72 h-72 mr-40 object-cover rounded-full  shadow-lg"
          />
        </div>

      </header>
      <br />
    </>
  )
}

export default Nav