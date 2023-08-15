import AdvisorSection from "../components/advisor-section"
import FooterSection from "../components/footer"
import FutureSection from "../components/future"
import HelpSection from "../components/help"
import HeroSection from "../components/hero"
import HeroInstitutional from "../components/hero-inst"
import InstLinks from "../components/inst-links"
import InstVision from "../components/inst-vision"
import LatestSection from "../components/latest"
import NavSection from "../components/navbar"
import ProjectionsSection from "../components/projections"
import StatementSection from "../components/statement"
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { useRouter } from "next/router"

const Landing: React.FC = () => {
    const router = useRouter()
    const view = useSelector((state: RootState) => state.app.view)

    useEffect(() => {
        if (router.pathname !== `/${view}`) router.push(`/${view}`)
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