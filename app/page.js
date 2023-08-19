import Image from 'next/image'
import imgOne from "../public/img1.png"

export default function Home() {
  return (
  <main  className='px-32 bg-slate-100 text-lg'>
    <section className='sectionOne bg-no-repeat bg-right-bottom bg-contain' >
     
     <Image src={imgOne} width={700} height={150} className='center relative me-5'  />
     <div className='absolute top-1/3'>
        <h1 className='text-5xl font-extrabold mb-8'>Imported Single <br /> Vision Lenses</h1>
        <div className='shop flex items-center justify-center'>
        <p >SHOP NOW</p>
        </div>
     
      </div>
    </section>
  </main>
  )
}
