import { Link } from 'react-router-dom'

function Contact() {
  const socials = [
    {
      name: 'Facebook',
      icon: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
      url: 'https://www.facebook.com/share/1EihcCgZmK/',
      handle: '@Facebook'
    },
    {
      name: 'GitHub',
      icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      url: 'https://github.com/sudip-codes18',
      handle: 'sudip-codes18'
    },
    {
      name: 'LinkedIn',
      icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
      url: 'https://www.linkedin.com/in/sudip-tamang-55581b393/',
      handle: 'Sudip Tamang'
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      
     
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Connect With Me
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          Find me on your favorite platform
        </p>
      </div>

      
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 px-2">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <img 
                src={s.icon} 
                alt={`${s.name} icon`} 
                className="w-full h-full object-contain" 
              />
            </div>
            <span className="font-semibold text-gray-800 text-lg group-hover:text-red-600 transition-colors">
              {s.name}
            </span>
            <span className="text-xs text-gray-400 mt-1">
              {s.handle}
            </span>
          </a>
        ))}
      </div>

      
      <div className="mt-10 sm:mt-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors duration-200"
        >
          <span>←</span> Back to Home
        </Link>
      </div>

    </div>
  )
}

export default Contact