
import HeroImg from '../assests/hero.png';
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer,IOT specialist and 3d Model Designer',
        social: {
            twitter: 'https://twitter.com/jvlcode',
            Instagram: 'https://facebook.com/jvlcode',
            linkedin: 'https://in.linkedin.com/company/jvl-code'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-blue-600'>Balaji</span> here
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
                <a href={config.social.Instagram} className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img alt=" " className='md:w-1/3' src={HeroImg} />
    </section>
}
