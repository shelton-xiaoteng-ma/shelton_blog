interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  videoSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Unleash AI',
    description: `This project is a SaaS AI Platform with Next.js 15, React, Shadcn, Hono.js, Prisma, Stripe, Clerk`,
    imgSrc: '/static/images/unleash-ai.png',
    href: 'https://unleashai.sheltonma.top',
    videoSrc: 'https://www.youtube.com/embed/LXRpLb70-9o?si=cphiUP9NdoAHwDXA',
  },
  {
    title: 'Slack',
    description: `This project is a Slack-like real-time communication platform built using Next.js 14 and deployed on Vercel. The platform aims to provide a seamless and efficient collaboration experience, similar to Slack, with modern web technologies at its core.`,
    imgSrc: '/static/images/slack_demo.png',
    href: 'https://slack.sheltonma.top',
  },
  // {
  //   title: 'Canvas',
  //   description: `Bring your ideas to life with Canvas—powered by AI and creativity`,
  //   imgSrc: '/static/images/canvas_demo.png',
  //   href: 'https://canvas.sheltonma.top',
  // },
]

export default projectsData
