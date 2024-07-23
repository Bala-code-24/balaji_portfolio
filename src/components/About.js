import AboutImg from '../assests/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, my name is Balaji. I am a Front-End Developer specializing in React.js. I create beautiful and efficient websites using technologies like React.js, Tailwind CSS, and Bootstrap.',
        line2: 'With expertise in front-end technologies such as Redux, Redux Toolkit, Axios, SaSS, and CSS3, I deliver high-quality web solutions.',
        line3: 'In addition to my front-end development skills, I have experience as an IoT specialist, integrating hardware and software to craft innovative projects. Outside the tech world, I am also a professional cricketer.'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
<<<<<<< HEAD
            <img alt="hi"src={AboutImg} />
=======
            <img alt="" src={AboutImg} />
>>>>>>> 1dfd800b6819d4577b0f7cf2adc70b758503ed9a
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-black'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}
