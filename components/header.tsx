import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-0 right-0 top-0 z-[50] px-4 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <motion.div variants={itemVariants}>
          <Link
            href="#"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5">
            <Image
              src="/openclaw-logo.svg"
              alt="OpenClaw Logo"
              width={32}
              height={27}
              className="h-8 w-auto"
            />
            <span className="text-lg font-semibold text-white">ClawForger</span>
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}
