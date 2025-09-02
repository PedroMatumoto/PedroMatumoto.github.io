import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import CardNav from './components/NavCard'

export function App() {
  const items = [
    {
      label: 'About',
      bgColor: '#0D0716',
      textColor: '#fff',
      links: [
        {
          label: 'Me',
          href: '#about',
          ariaLabel: 'About Me'
        },
        {
          label: 'Experience',
          href: '#experience',
          ariaLabel: 'About Experience'
        }
      ]
    },
    {
      label: 'Projects',
      bgColor: '#170D27',
      textColor: '#fff',
      links: [
        {
          label: 'All Projects',
          href: '#repos',
          ariaLabel: 'All Projects'
        }
      ]
    },
    {
      label: 'Contact',
      bgColor: '#271E37',
      textColor: '#fff',
      links: [
        {
          label: 'Email',
          href: 'mailto:pedromatumoto@gmail.com',
          ariaLabel: 'Email us'
        },
        {
          label: 'Github',
          href: 'https://github.com/PedroMatumoto',
          ariaLabel: 'Github'
        },
        {
          label: 'LinkedIn',
          href: 'https://linkedin.com/in/pedro-matumoto/',
          ariaLabel: 'LinkedIn'
        }
      ]
    }
  ]
  return (
    <>
      <Router>
        <CardNav
          logo="/lotus.svg"
          logoAlt="Company Logo"
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}
