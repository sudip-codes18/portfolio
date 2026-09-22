import { Link } from 'react-router-dom';
function Projects() {
  return (
    <>
      <h1 className="text-xl font-bold text-center m-4"> Some projects i can buid as a MERN stack Learner. </h1>

      <div className="flex justify-center items-center gap-20 ">
        <div className="flex flex-col items-center mt-20 rounded-xl shadow-xl border-xl hover:scale-110 duration-300 inline-block">
          <img src="https://cdn.phototourl.com/member/2026-09-22-45b4d223-0326-4c4f-bcdc-e223aa14b5af.png" className="w-130 h-60 " alt="portfolio" />
          <p className="max-w-xl text-blue-600"> A simple portfolio website using technologies like Html , Tailwind Css, JavaScript and Basic react js. </p>
        </div>

        <div>
          <div className="flex flex-col items-center mt-20 rounded-xl shadow-xl border-xl hover:scale-110 duration-300 inline-block">

            <img src="https://cdn.phototourl.com/member/2026-09-22-b635330b-282c-4ff8-9b44-df14aebb9dc4.jpg" className="w-130 h-60 " alt="portfolio" />
            <p className="max-w-xl text-blue-600"> An attractive Blog page with toggle system , advanced  react (usestate, effect), Over all interactive site. </p>

          </div>
        </div>

        <div className="flex flex-col items-center mt-20 rounded-xl shadow-xl border-xl hover:scale-110 duration-300 inline-block">
          <img src="https://cdn.phototourl.com/member/2026-09-22-719a7f28-bbaf-4625-bf34-dbbbfc908505.png" className="w-130 h-60 " alt="portfolio" />
          <p className="max-w-xl text-blue-600"> A simple Todo list App where users can write there missions , goals of the day and can also tick them after completly done. </p>
        </div>






      </div>

      <div className="flex justify-center mt-16 mb-10">
        <Link 
          to="/" 
          className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 shadow-md"
        >
          Back to Home
        </Link>
      </div>


    </>

  );
}
export default Projects; 