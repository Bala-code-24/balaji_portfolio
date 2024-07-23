import websiteImg1 from '../assests/best-innovation-award.jpeg';
import websiteImg2 from '../assests/water-level.jpeg';
import websiteImg3 from '../assests/multiple-sensors.jpeg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: '"Triumphing at Ethirathon, Balaji clinched the Best Innovation Award, securing a cash prize of ₹10,000!"',
                link: 'https://github.com/jvlcode/jvlcart'
            },
            {
                image: websiteImg2,
                description: 'The Water Body Monitor System keeps a vigilant eye on water levels, quality, and flow speed. It ensures public safety by sending timely notifications about water levels, keeping everyone informed and prepared.',
                link: 'https://github.com/jvlcode/food'
            },
            {
                image: websiteImg3,
                description: 'This project showcases various sensors utilized in environmental monitoring, all seamlessly integrated with a website I developed using React.js and MongoDB.',
                link: 'https://github.com/jvlcode/blog'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects, including an innovative IoT project. I have built them using React and vanilla CSS. Check them out!</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img alt="" className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            {/* <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div> */}
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}
