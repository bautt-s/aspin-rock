import AdvisorSection from "./advisor-section"
import FooterSection from "./footer"
import FutureSection from "./future"
import HelpSection from "./help"
import HeroSection from "./hero"
import HeroInstitutional from "./hero-inst"
import InstLinks from "./inst-links"
import InstVision from "./inst-vision"
import LatestSection from "./latest"
import NavSection from "./navbar"
import ProjectionsSection from "./projections"
import StatementSection from "./statement"
import { useState, useEffect } from 'react'

export type ViewProps = {
    view: 'individual' | 'advisor' | 'institutional'
}

const Landing: React.FC<ViewProps> = (props) => {
    const { view } = props

    const [mode, setMode] = useState<'individual' | 'advisor' | 'institutional'>(view)

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, [])

    return (
        <div className="overflow-hidden">
            <NavSection view={mode} setView={setMode} />
            
            {view === 'institutional' && <HeroInstitutional />}
            {view !== 'institutional' && <HeroSection view={view} />}
            {view === 'institutional' && <InstLinks />}
            {view === 'advisor' && <HelpSection />}
            {view !== 'advisor' && <FutureSection />}
            {view !== 'institutional' && <StatementSection />}
            {view === 'advisor' && <AdvisorSection />}
            {view === 'individual' && <ProjectionsSection />}
            {view === 'individual' && <LatestSection />}
            {view === 'institutional' && <InstVision />}

            <FooterSection />
        </div>
    )
}

export default Landing