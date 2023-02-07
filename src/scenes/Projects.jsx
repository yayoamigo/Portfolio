import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const projectTitle = title;

  return (
    <motion.div variants={projectVariant} className="relative sm:col-span-1 fr-1">
      <img className="w-full h-full" src={`assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" className="pt-40 pb-48">
    {/* HEADINGS */}
    <motion.div
      className="md:w-2/5 mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div>
        <p className="font-playfair font-semibold text-4xl">
          <span className="text-red">PRO</span>
          JECTS
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient width="w-2/3" />
        </div>
      </div>
      <p className="mt-10 mb-10">
        I've completed more than 40 projects, including front-end, full-stack, back-end, games...
      </p>
    </motion.div>

    {/* PROJECTS */}
    <div className="flex justify-center">
      <motion.div
        className="sm:grid sm:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ROW 1 */}
        <div
          className="flex justify-center text-center items-center p-10 bg-red
           sm:col-span-1  fr-1 text-2xl font-playfair font-semibold"
        >
          BEAUTIFUL USER INTERFACES
        </div>
        <Project title="Space-Travelrs" />
        <Project title="Air-Polution" />

        {/* ROW 2 */}
        <Project title="Bookstore-CMS" />
        <Project title="Math-Magicians" />
        <Project title="Pokedex-app" />

        {/* ROW 3 */}
        <Project title="Nassa-Missions" />
        <Project title="toma" />
        <div
          className="flex justify-center text-center items-center p-10 bg-blue
            sm:col-span-1  fr-1  text-2xl font-playfair font-semibold"
        >
          SMOOTH USER EXPERIENCE
        </div>
      </motion.div>
    </div>
  </section>
);

export default Projects;
