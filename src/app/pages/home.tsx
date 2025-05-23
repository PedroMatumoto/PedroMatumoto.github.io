import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/use-theme'
import { InfoCard } from '../components/info-card'
import Threads from '../components/Threads'

import { SocialsCard } from '../components/socials-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../../components/ui/carousel'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  SiCanva,
  SiCisco,
  SiFigma,
  SiGooglecloud,
  SiPandas,
  SiPython,
  SiTryhackme,
  SiWordpress
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import { IoBarChart, IoCalendarClearOutline } from 'react-icons/io5'
import { FaAws } from 'react-icons/fa'
import BlurText from '../components/BlurText'

export function Home() {
  const { theme } = useTheme()
  const [fade, setFade] = useState(false)

  const infosRepos = [
    {
      title: 'MauaGrid',
      description: 'Scheduler generator for IMT',
      link: 'https://github.com/20242-Maua-ECM-Fontys/front',
      languages: ['typescript', 'react']
    },
    {
      title: 'Kirby',
      description: 'Robot waiter to deliver food',
      link: 'https://github.com/PedroMatumoto/kirby',
      languages: ['c']
    },
    {
      title: 'BoraMarcar',
      description: 'Simplified appointment scheduling system',
      link: 'https://github.com/4-ANO-COMP-IMT/ac2',
      languages: ['typescript', 'react']
    },
    {
      title: 'TwoDrive',
      description: 'Simple file transfer system',
      link: 'https://github.com/PedroMatumoto/two_drive',
      languages: ['java']
    }
  ]

  const demoItems = [
    {
      link: 'https://github.com/20242-Maua-ECM-Fontys/front',
      text: 'MauaGrid',
      image: 'https://picsum.photos/600/400?random=1'
    },
    {
      link: 'https://github.com/PedroMatumoto/kirby',
      text: 'Kirby',
      image: 'https://picsum.photos/600/400?random=2'
    },
    {
      link: 'https://github.com/4-ANO-COMP-IMT/ac2',
      text: 'BoraMarcar',
      image: 'https://picsum.photos/600/400?random=3'
    },
    {
      link: 'https://github.com/PedroMatumoto/two_drive',
      text: 'TwoDrive',
      image: 'https://picsum.photos/600/400?random=4'
    }
  ]

  const socials = [
    {
      title: '@pedromatumoto',
      type: 'github',
      link: 'https://github.com/PedroMatumoto'
    },
    {
      title: 'Pedro Matumoto',
      type: 'linkedin',
      link: 'https://www.linkedin.com/in/pedro-matumoto/'
    },
    {
      title: '@pedromatumoto',
      type: 'instagram',
      link: 'https://www.instagram.com/pedromatumoto/'
    }
  ]

  useEffect(() => {
    setTimeout(() => {
      setFade(true)
    }, 100)
  }, [])

  return (
    <main
      style={{
        backgroundColor:
          theme === 'light' ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 10, 10, 1)',
        color: theme === 'light' ? 'black' : 'white'
      }}
    >
      <div className="relative flex min-h-screen w-full items-center justify-center">
        <div className="relative w-full" style={{ height: '600px' }}>
          <Threads amplitude={2} distance={0} enableMouseInteraction={true} />

          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ zIndex: 10 }}
          >
            <BlurText
              text="Pedro Matumoto 松本 優吾"
              delay={150}
              animateBy="words"
              direction="top"
              className="font font-mont text-6xl"
            />
          </div>
        </div>

        <div
          className="absolute flex w-full items-center justify-center"
          style={{ bottom: '25%' }}
        >
          <button
            className={`rounded-lg p-3 ${fade ? 'opacity-100' : 'opacity-0'} ${
              theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'
            } font-mont transition-all duration-1000 hover:bg-black hover:text-white`}
            onClick={() =>
              document
                .getElementById('repos')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Repos
          </button>
        </div>
      </div>

      <div
        className="flex min-h-screen w-full flex-col items-center justify-center"
        id="repos"
      >
        <h1 className="mb-6 text-center font-mont text-2xl font-bold transition-all duration-1000 sm:text-4xl">
          Repos
        </h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2">
          {infosRepos.map((info, index) => (
            <InfoCard key={info.title} info={info} delay={index} />
          ))}
        </div>
      </div>

      <div
        className="flex min-h-screen w-full flex-col items-center justify-center"
        id="about"
      >
        <h1 className="mb-6 text-center font-mont text-2xl font-bold transition-all duration-1000 sm:text-4xl">
          About me
        </h1>
        <p className="w-1/2 text-center transition-all duration-1000">
          Hi, I’m @PedroMatumoto, a computer engineering student based in Sao
          Paulo, Brazil. I currently work in Alvarez & Marsal as a Tax Tech
          intern, developing systems to make repetitive tasks easier to deal
          with. I also work as a freelancer, developing websites and systems for
          small businesses. I'm very passionate about learning new things and
          I'm always looking for new challenges even if is not in my safe area,
          like robotics and electronics.
        </p>
        <button
          className={`mt-6 rounded-lg p-3 ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-1000 hover:bg-black hover:text-white`}
          onClick={() =>
            document
              .getElementById('info')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          What I'm learning
        </button>
      </div>
      <div
        className="flex min-h-screen w-full flex-col items-center justify-center"
        id="info"
      >
        <h3 className="text-md mt-6 text-center font-mont font-bold transition-all duration-1000 sm:text-2xl">
          Certifications
        </h3>
        <Carousel
          opts={{
            align: 'start'
          }}
          className="w-1/2 pt-10"
        >
          <CarouselContent>
            <CarouselItem className="sm:basis-1/3">
              <div>
                <Card
                  onClick={() =>
                    window.open(
                      'https://learn.microsoft.com/api/credentials/share/pt-br/PedroMatumoto-9901/8DB5E10E5D4597FA?sharingId=18D2DEB419144A0A'
                    )
                  }
                  className={`cursor-pointer ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-1000`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center">
                      AZ-900 Azure Fundamentals
                    </CardTitle>
                    <CardDescription className="text-center">
                      Microsoft
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center">
                    <VscAzure className="text-4xl" />
                  </CardContent>
                  <CardFooter className="flex items-center justify-center">
                    <IoCalendarClearOutline />
                    <p>10/2024</p>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3">
              <div>
                <Card
                  onClick={() =>
                    window.open(
                      'https://www.credly.com/badges/cfcf2aa4-982b-426b-8f7d-63a2388ebc6d/public_url'
                    )
                  }
                  className={`cursor-pointer ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-1000`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center">
                      Associate Cloud Engineer
                    </CardTitle>
                    <CardDescription className="text-center">
                      GCP
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center">
                    <SiGooglecloud className="text-4xl" />
                  </CardContent>
                  <CardFooter className="flex items-center justify-center">
                    <IoCalendarClearOutline />
                    <p>03/2024</p>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3">
              <div>
                <Card
                  onClick={() =>
                    window.open('https://tryhackme.com/r/p/Matumoto')
                  }
                  className={`cursor-pointer ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-1000`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center">
                      Introduction to Cyber Security
                    </CardTitle>
                    <CardDescription className="text-center">
                      TryHackMe
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center">
                    <SiTryhackme className="text-4xl" />
                  </CardContent>
                  <CardFooter className="flex items-center justify-center">
                    <IoCalendarClearOutline />
                    <p>10/2023</p>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3">
              <div>
                <Card
                  onClick={() =>
                    window.open(
                      'https://www.credly.com/badges/9ca0b5f9-6f4d-46c1-889f-7b7d94d5a87e/public_url'
                    )
                  }
                  className={`cursor-pointer ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-1000`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center">
                      AWS Certified Cloud Practitioner
                    </CardTitle>
                    <CardDescription className="text-center">
                      Amazon Web Services
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center">
                    <FaAws className="text-4xl" />
                  </CardContent>
                  <CardFooter className="flex items-center justify-center">
                    <IoCalendarClearOutline />
                    <p>08/2023</p>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3">
              <div>
                <Card
                  onClick={() =>
                    window.open(
                      'https://www.credly.com/badges/1b3b3b3d-0b3b-4b3b-8b3b-3b3b3b3b3b3b'
                    )
                  }
                  className={`cursor-pointer ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-1000`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center">
                      Foundational - Linux Essentials
                    </CardTitle>
                    <CardDescription className="text-center">
                      Cisco
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center">
                    <SiCisco className="text-4xl" />
                  </CardContent>
                  <CardFooter className="flex items-center justify-center">
                    <IoCalendarClearOutline />
                    <p>12/2022</p>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious
            className={`cursor-pointer ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-1000`}
          />
          <CarouselNext
            className={`cursor-pointer ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-1000`}
          />
        </Carousel>

        <h3 className="text-md mt-6 text-center font-mont font-bold transition-all duration-1000 sm:text-2xl">
          Experience
        </h3>
        <Carousel
          opts={{
            align: 'start'
          }}
          className="w-1/2 pt-10"
        >
          <CarouselContent>
            <CarouselItem className="sm:basis-1/2">
              <div>
                <Card
                  className={`cursor-pointer ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-1000`}
                >
                  <CardHeader>
                    <CardTitle className="flex flex-wrap items-center justify-center gap-2">
                      Tax Tech Intern
                      <div className="flex flex-wrap gap-2 p-2">
                        <SiPython className="text-2xl" />
                        <VscAzure className="text-2xl" />
                        <IoBarChart className="text-2xl" />
                      </div>
                    </CardTitle>
                    <CardDescription>Alvarez & Marsal</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center gap-2">
                    <IoCalendarClearOutline />
                    <p>11/2023 - Current</p>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/2">
              <div>
                <Card
                  className={`cursor-pointer ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-1000`}
                >
                  <CardHeader>
                    <CardTitle className="flex flex-wrap items-center justify-center gap-2">
                      Project Monitor
                      <div className="flex flex-wrap gap-2 p-2">
                        <SiPandas className="text-2xl" />
                        <SiPython className="text-2xl" />
                        <IoBarChart className="text-2xl" />
                      </div>
                    </CardTitle>
                    <CardDescription>IMT</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center gap-2">
                    <IoCalendarClearOutline />
                    <p>08/2022 - 10/2023</p>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/2">
              <div>
                <Card
                  className={`cursor-pointer ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-1000`}
                >
                  <CardHeader>
                    <CardTitle className="flex flex-wrap items-center justify-center gap-2">
                      WebDesigner
                      <div className="flex flex-wrap gap-2 p-2">
                        <SiFigma className="text-2xl" />
                        <SiCanva className="text-2xl" />
                        <SiWordpress className="text-2xl" />
                      </div>
                    </CardTitle>
                    <CardDescription>Maua Jr.</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center gap-2">
                    <IoCalendarClearOutline />
                    <p>08/2022 - 10/2023</p>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious
            className={`cursor-pointer ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-1000`}
          />
          <CarouselNext
            className={`cursor-pointer ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-1000`}
          />
        </Carousel>
      </div>

      <div
        className="flex min-h-screen w-full flex-col items-center justify-center"
        id="contact"
      >
        <h1 className="mb-6 text-center font-mont text-2xl font-bold transition-all duration-1000 sm:text-4xl">
          Get in touch
        </h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-3">
          {socials.map((info, index) => (
            <SocialsCard key={info.title} info={info} delay={index} />
          ))}
        </div>
      </div>
    </main>
  )
}
