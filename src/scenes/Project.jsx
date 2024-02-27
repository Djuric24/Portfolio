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

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const getApplicationLink = () => {
    switch (title) {
      case "Job tracking" : return "https://applicationtracking.netlify.app/"
      case "Fitness App":return "https://fitness-app-djuric.netlify.app/"
      case "Ai article summarizer App":return "https://ai-article-summarizer-djuric.netlify.app/"
      case "Movie app" : return "https://movie-app-djuric.netlify.app/"
      // case "Drums app" : return "https://djuric-drums.netlify.app/"
      default :return
    }
  }
  const getImgUrl = () => {
     switch (title) {
      case "Job tracking":
        return "https://lmi.mt.gov/_images/Graphics/dashboardgraphics/Dashboard_ButtonsNT_JobTracking.png"
      case "Fitness App": 
        return "https://www.intersport.rs/media/catalog/product/cache/382907d7f48ae2519bf16cd5f39b77f9/h/e/hex-dumbbells_282765_050_f1.jpeg"
      case "Ai article summarizer App":
        return "https://www.klippa.com/wp-content/uploads/2023/03/GPT4-_header-1024x486.jpg"
      case "Movie app" : 
        return "https://is4-ssl.mzstatic.com/image/thumb/Purple/v4/8c/14/79/8c147971-733e-77b4-747a-0bf1ccf3b22c/source/320x480bb.jpg"
      // case "Drums app" :
      //   return "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/3d/bf/75/3dbf75c8-79a6-df91-8445-39ea64d51fe1/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg" 
        default : return
    }
  }
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          <a href={getApplicationLink()}>Click to see the app</a>
        </p>
      </div>
      <img src={getImgUrl()} alt={projectTitle} className="w-[400px] h-[400px]" />
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
        <p className="mt-10 mb-10">
          Here you can see my React, Angular and Javascript projects.
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
          <Project title="Job tracking" />
          <Project title="Fitness App" />

          {/* ROW 2 */}
          <Project title="Ai article summarizer App" />
          <Project title="Movie app" />
          {/* <Project title="Drums app" /> */}

          {/* ROW 3 */}
          {/* <Project title="Polovni automobili" /> */}
          {/* <Project title="Project 7" /> */}
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