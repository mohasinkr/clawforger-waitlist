import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import TextBlur from "./ui/text-blur";
import { FaShieldHalved, FaServer, FaLock, FaCloud, FaRobot, FaCodeBranch } from "react-icons/fa6";

const features = [
  { 
    icon: FaShieldHalved, 
    title: "Isolated Containers", 
    description: "Each agent runs in its own secure sandbox" 
  },
  { 
    icon: FaServer, 
    title: "Managed Infrastructure", 
    description: "Zero DevOps overhead for your team" 
  },
  { 
    icon: FaLock, 
    title: "Enterprise Security", 
    description: "SOC 2 compliant with end-to-end encryption" 
  },
  { 
    icon: FaCloud, 
    title: "Cloud Native", 
    description: "Deployed on scalable, reliable cloud infrastructure" 
  },
  { 
    icon: FaRobot, 
    title: "OpenClaw Ready", 
    description: "Purpose-built for autonomous AI agents" 
  },
  { 
    icon: FaCodeBranch, 
    title: "API-First Design", 
    description: "Integrate seamlessly with your existing workflow" 
  },
];

export default function Logos() {
  return (
    <motion.div
      className="flex h-full w-full flex-col gap-2 pb-12 pt-12 md:pb-24 md:pt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl"
          text="Why ClawForger?"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-base text-zinc-300 sm:text-lg"
          text="Enterprise-grade infrastructure for autonomous AI agents"
          duration={0.8}
        />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-4 grid w-full grid-cols-2 items-center justify-center gap-4 md:mt-6 md:grid-cols-3 md:gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex h-24 flex-col items-center justify-center rounded-lg border bg-zinc-900/50 p-4 text-center transition-all duration-150 ease-in-out md:hover:border-zinc-700 md:hover:bg-accent">
            <feature.icon className="mb-2 h-6 w-6 text-yellow-200" />
            <span className="text-sm font-medium text-zinc-200">{feature.title}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
