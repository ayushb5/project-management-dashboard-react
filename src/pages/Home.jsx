import Header from "../components/Header"
import ProjectList from "../Project/ProjectList"

function Home({ onSetPage, projects, onSetProjects, onSetSelectedProject }) {
    return (
        <>
            <Header />
            <ProjectList onSetPage={onSetPage} projects={projects} onSetProjects={onSetProjects} onSetSelectedProject={onSetSelectedProject} />
        </>
    )
}

export default Home