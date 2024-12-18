import { motion } from 'framer-motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const experiences = [
  {
    title: 'Back-End Developer Intern',
    company: 'RSDigital',
    date: 'May 2024 - July 2024',
    description:
      'Developed a web application for an online pharmacy using the MERN stack. My role focused on building the RESTful API with Node.js and Express.js, enabling functionalities like order placement, delivery tracking, and more.',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dMKE_kZWpMbSJ-QBDCAcvc3fBkPq36emIw&s',
  },
  {
    title: 'Web Developer Intern',
    company: 'SNZCOM',
    date: 'June 2023 - July 2023',
    description:
      'build an online manga store using Laravel, a PHP web framework. My responsibilities included building functionalities for browsing, searching, and purchasing manga titles, while also ensuring a smooth user experience.',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYSpzTvrr2mTPW3kIS2FIncuqwZpbVfz6ayw&s',
  },
]

export default function Experience() {
  return (
    <section id='experience' className='py-20 bg-gray-50 dark:bg-gray-800'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-4xl mx-auto'
        >
          <h2 className='text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white'>
            Experience
          </h2>

          <VerticalTimeline lineColor='rgb(99 102 241)'>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className='vertical-timeline-element'
                contentStyle={{
                  background: 'rgb(255, 255, 255)',
                  color: '#1f2937',
                  boxShadow: '0 3px 0 rgb(99 102 241)',
                  padding: '2rem',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid rgb(255, 255, 255)',
                }}
                date={experience.date}
                iconStyle={{ background: 'rgb(99 102 241)', color: '#fff' }}
                icon={<img src={experience.logo} className='rounded-full' />}
              >
                <h3 className='vertical-timeline-element-title font-bold text-xl'>
                  {experience.title}
                </h3>
                <h4 className='vertical-timeline-element-subtitle text-indigo-600 mt-2'>
                  {experience.company}
                </h4>
                <p className='text-gray-600 mt-4 capitalize'>{experience.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  )
}
