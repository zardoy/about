import React from 'react'
import Projects from './Projects'

const Content: React.FC = () => {
    return (
        <div tw="p-7">
            <div id="description" tw="pb-5">
                Hey! I'm Vitaly, enthusiastic full-stack developer, that loves web, be efficient and really really enjoys working with the most modern stack.
                <br />
                Eagerly writes extensions and plugins for a long time.
                <br />
                Excited to see me in action? Contact now! (contacts are on <a href="https://zardoy.com">zardoy.com</a> and GitHub profile)
                {/* <span tw="text-gray-500">
        P.S. while still being full-time dev, I still have a lot of activities outside of programming
    </span> */}
            </div>
            <Projects />
        </div>
    )
}

export default Content
