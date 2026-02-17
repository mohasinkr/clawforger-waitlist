import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Footer() {
  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-auto w-full border-t border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <motion.div variants={itemVariants} className="flex items-center gap-6">
          <Link
            href="#"
            rel="noopener noreferrer"
            className="flex items-center gap-2">
            <Image
              src="/openclaw-logo.svg"
              alt="OpenClaw Logo"
              width={24}
              height={20}
              className="h-5 w-auto opacity-70"
            />
            <span className="text-sm font-medium text-zinc-400">
              ClawForger
            </span>
          </Link>
          <span className="text-xs text-zinc-600">© 2026</span>
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="hidden text-xs text-zinc-500 sm:block">
          Secure infrastructure for autonomous AI agents
        </motion.p>
      </div>
    </motion.footer>
  );
}
