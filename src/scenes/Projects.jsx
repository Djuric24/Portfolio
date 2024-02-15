import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

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

const Project = ( {title, subtitle, imageUrl} ) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  //  const projectTitle = title.split(" ").join("-").toLowerCase();
  const projectTitle = typeof title === "string" ? title : "Default Title";



   return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{subtitle}</p>
          <img src={imageUrl} alt={projectTitle} className="max-h-[200px] mt-4" />
        <p className="mt-7">
          Click to see app
        </p>
      </div>
      {/* <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} /> */}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
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
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-6 mb-6">
          Hire you can see my React, Angular and Javascript projects.
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
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          {/* <Project
            id="project-1"
            title="Job Tracking App"
            projectLink="https://applicationtracking.netlify.app/"
            imageUrl="https://www.ec2i.biz/hubfs/Job%20Tracking.png"
          /> */}
           {/* <a href="https://applicationtracking.netlify.app/" target="_blank" title="Job Tracking App" >
            <img src="https://www.ec2i.biz/hubfs/Job%20Tracking.png" alt="title" id="project" />
          </a> */}
          <Project
            title="Job tracking"
            subtitle="React app"
            imageUrl="https://www.ec2i.biz/hubfs/Job%20Tracking.png"
          />
          <Project
           title="Jim"
           subtitle="React app"
           imageUrl="..\assets\project-1.jpeg"
           />

          {/* ROW 2 */}
          <Project title="Project 3" />
          <Project title="Project 4" />
          <Project title="Project 5" />

          {/* ROW 3 */}
          <Project title="Project 6" />
          <Project title="Project 7" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;