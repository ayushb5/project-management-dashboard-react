import Header from "../components/Header"
import ProjectList from "../Project/ProjectList"

function Home({ onSetPage, projects, onSetSelectedProject }) {
    return (
        <>
            {/* Heading */}
            <Header />
            <ProjectList onSetPage={onSetPage} projects={projects} onSetSelectedProject={onSetSelectedProject} />
        </>
    )
}

export default Home