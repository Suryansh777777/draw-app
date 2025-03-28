"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarSrc: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  avatarSrc,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      className={cn("rounded-lg border bg-background p-6 shadow-sm", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mb-4 text-lg italic text-muted-foreground">{quote}</div>
      <div className="flex items-center">
        <Image
          src={avatarSrc || "/placeholder.svg"}
          alt={author}
          width={40}
          height={40}
          className="mr-3 rounded-full"
        />
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}
