import React from 'react'

function Project() {
  
  const ProjectData = [
    {
      id: 1,
      imageSrc: "/Img/project1.png",
      title: "Title",
      description:'description',
      links:'demo.com',
      sourcecode:'#',
    },
    {
      id: 2,
      imageSrc: "/Img/project2.png",
      title: "Title",
      description:'description',
      links:'demo.com',
      sourcecode:'#',
    },
    {
      id: 3,
      imageSrc:"/Img/project2.png",
      title: "Title",
      description:'description',
      links:'demo.com',
      sourcecode:'#',
    },
  ];

  return (
    <div>
      <h1 className='text-white text-center text-4xl font-extrabold py-7'>My Project</h1>

      {
          ProjectData.map((pro)=>(
      <div className='grid grid-cols-1 sm:grid-cols-12 text-center py-7' key={pro.id}>        
            <div className='col-span-6'>
            <h1 className='text-white'>{pro.title}</h1>
          </div>
          <div className='col-span-6'>
            <img src={pro.imageSrc} />
          </div>
      </div>
          ))
        }

    </div>
  )
}

export default Project