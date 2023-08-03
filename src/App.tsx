import FooterSection from "./landing-section/footer"
import FutureSection from "./landing-section/future"
import HeroSection from "./landing-section/hero"
import LatestSection from "./landing-section/latest"
import NavSection from "./landing-section/navbar"
import ProjectionsSection from "./landing-section/projections"
import StatementSection from "./landing-section/statement"

const App = () => {
    return (
        <div className="overflow-x-hidden">
            <NavSection />
            <HeroSection />
            <FutureSection />
            <StatementSection />
            <ProjectionsSection />
            <LatestSection />
            <FooterSection />
        </div>
    )
}

export default App