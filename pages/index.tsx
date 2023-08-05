import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header';
import About from '@/components/About';
import Course from '@/components/Course';
import Pages from '@/components/Pages';
import Enroll from '@/components/Enroll';
import GlobalPartner from '@/components/GlobalPartner';
import Services from '@/components/Services';
import ClientReview from '@/components/ClientReview';
import StudentReview from '@/components/Studentreview';
import JoinUs from '@/components/JoinUs';
import Contact from '@/components/Contact';
import Footer  from '@/components/Footer';




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
<Head>
  <title>Create Next Appp</title>
</Head>
<Header />
<About />
<Course />
<Pages />
<Enroll />
<GlobalPartner />
<Services />
<ClientReview />
<StudentReview />
<JoinUs />
<Contact />
<Footer />
</>
  
  )
}
