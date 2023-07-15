import { Navbar } from './components/Navbar'
import './App.scss'
import { PanelProducts } from './components/PanelProducts'
import { PanelAbout } from './components/PanelAbout'
import { useRef } from 'react'

const App = () => {

  const panelProductRef = useRef<HTMLDivElement | null>(null);
  const panelAboutRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Navbar panelAboutRef={panelAboutRef} panelProductRef={panelProductRef} />
      <PanelProducts panelProductRef={panelProductRef} />
      <PanelAbout panelAboutRef={panelAboutRef} />
    </>
  )
}

export default App
