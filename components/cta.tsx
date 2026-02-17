import { motion } from "framer-motion";
import Image from "next/image";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col gap-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-[#d33b3a] px-4 py-1.5 shadow-lg shadow-[#d33b3a]/20">
            <AnimatedShinyText className="text-sm font-medium text-white">
              <span>Early Access Opening Soon</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-6 flex justify-center">
        <Image
          src="/openclaw-logo.svg"
          alt="OpenClaw Logo"
          width={64}
          height={54}
          className="h-16 w-auto"
          priority
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Deploy secure{" "}
          <span className="bg-gradient-to-r from-[#d33b3a] to-[#ff6b6b] bg-clip-text text-transparent">
            OpenClaw
          </span>{" "}
          instances in seconds
        </h1>
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[32rem] pt-3 text-center text-base leading-relaxed text-zinc-400 sm:text-lg"
          text="Dedicated VPS environments, preconfigured and managed — so you can run OpenClaw without fighting infrastructure."
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
