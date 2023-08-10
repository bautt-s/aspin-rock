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
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { useLocation, useNavigate } from "react-router-dom"

const Landing: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const view = useSelector((state: RootState) => state.app.view)

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
        if (location.pathname !== `/${view}`) navigate(`/${view}`)
    }, [])

    return (
        <div className="overflow-hidden">
            <NavSection />
            
            {view === 'institutional' && <HeroInstitutional />}
            {view !== 'institutional' && <HeroSection />}
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