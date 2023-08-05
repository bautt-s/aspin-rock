import AdvisorSection from "./advisor-section"
import FooterSection from "./footer"
import FutureSection from "./future"
import HelpSection from "./help"
import HeroSection from "./hero"
import HeroInstitutional from "./hero-inst"
import LatestSection from "./latest"
import NavSection from "./navbar"
import ProjectionsSection from "./projections"
import StatementSection from "./statement"

export type ViewProps = {
    view: 'individual' | 'advisor' | 'institutional'
}

const Landing: React.FC<ViewProps> = (props) => {
    const { view } = props

    return (
        <div className="overflow-hidden">
            <NavSection view={view} />
            
            {view === 'institutional' && <HeroInstitutional />}
            {view !== 'institutional' && <HeroSection view={view} />}
            {view === 'advisor' && <HelpSection />}
            {view !== 'advisor' && <FutureSection />}
            {view !== 'institutional' && <StatementSection />}
            {view === 'advisor' && <AdvisorSection />}
            {view === 'individual' && <ProjectionsSection />}
            {view === 'individual' && <LatestSection />}

            <FooterSection />
        </div>
    )
}

export default Landing