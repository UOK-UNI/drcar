"use client";
import { PlayIcon } from "@/components/Icons";
import { useScroll, motion } from "framer-motion";

const Video = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  return (
    <section className="container">
      <motion.div
        className="bg-video-cover text-center flex items-center justify-center bg-cover w-full h-[30rem] md:h-[55rem] bg-fixed bg-neutral-6 bg-blend-overlay"
        style={{ backgroundPosition: `center ${scrollYProgress}` }}
      >
        <a className="video-btn" href="#">
          <PlayIcon className="w-8 h-8" />
        </a>
      </motion.div>
    </section>
  );
};

export default Video;
