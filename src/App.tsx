import FutureSection from "./landing-section/future"
import HeroSection from "./landing-section/hero"
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
        </div>
    )
}

export default App