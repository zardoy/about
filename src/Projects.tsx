import React from 'react'
import Project from './components/Project'

const Projects: React.FC = () => {
    // TODO dot timeline
    return (
        <div>
            <h2 tw="text-center text-4xl">Projects Timeline</h2>
            <h3 tw="text-3xl">2019</h3>
            <Project />
            <h3 tw="text-3xl">Recent Demos</h3>
            {/* APP 1 */}
            <h3 tw="text-3xl">Other Hobbie Projects</h3>
        </div>
    )
}

export default Projects
