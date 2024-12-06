interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Canvas',
    description: `Bring your ideas to life with Canvas—powered by AI and creativity`,
    imgSrc: '/static/images/canvas_demo.png',
    href: 'https://canvas.sheltonma.top',
  },
  {
    title: 'Slack',
    description: `This project is a Slack-like real-time communication platform built using Next.js 14 and deployed on Vercel. The platform aims to provide a seamless and efficient collaboration experience, similar to Slack, with modern web technologies at its core.`,
    imgSrc: '/static/images/slack_demo.png',
    href: 'https://slack.sheltonma.top',
  },
]

export default projectsData
