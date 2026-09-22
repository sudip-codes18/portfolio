import { Link } from 'react-router-dom';
function Intro(){
    return(

        <>

        <h1 className="font-bold text-xl text-green-600 text-center m-10 "> "MY INTRO PAGE"  </h1>

        <div className="flex flex-col justify-start">

             <img src="https://cdn.phototourl.com/free/2026-09-22-5bfefa66-22b8-4b1b-968d-bcd2f5757541.png" className="w-38 h-25 " alt="cloud" />
        

            
     <img src="https://cdn.phototourl.com/free/2026-09-22-9440c8d5-cdd9-46c3-9f4e-7e3bd855b2e5.png" className="w-38 h-25 ml-25" alt="cloud1" 
    />
    
    
            <img src="https://cdn.phototourl.com/member/2026-09-22-c0571163-3260-4372-bd36-bce60b5127eb.png" className="w-38 h-25 ml-50" alt="cloud2" />

            <div>

            </div>
        </div>


       

  
  
  <div className="max-w-xl min-h-40 bg-gray-500 flex justify-center items-center text-center p-4 rounded-xl shadow-lg m-15">
    <p className="text-white text-lg leading-relaxed">

      Hey guys my name is <span className="text-red-500 font-bold">Sudip Tamang</span>. I'm currently living in itahari-8 sunsari since 3 yrs , My actual home is in nata chok(tatariya) its a small village where i was born. I live here alone in a shared room with some brothers who are also studying bachelor here. 
            
            currently i am working as a designer in Saraswati arts there my work is to make logo , designs using photoshop , AI, and canva etc. 
            
            I am very happy that at the age of 18 i am living happy and independent life. 
    </p>
  </div>


  <div className="flex justify-center items-center gap-4 mt-8">
        
       
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sudipcreates3@gmail.com&su=Portfolio%20Inquiry" 
          target="_blank" 
          rel="noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
        >
          Email Me
        </a>

        
        <Link 
          to="/" 
          className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
        >
          Back to Home
        </Link>

      </div>
      
   
        </>
    )

}

export default Intro
        
        
            
       
            

        
           
        


        


