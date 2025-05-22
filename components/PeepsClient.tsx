"use client";

import type { Peep } from "@/@types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export function PeepsClient({ peep }: { peep: Peep }) {
  return (
    <motion.div
      key={peep.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hover: {
          scale: 1.05,
          transition: {
            duration: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      custom={peep.id}
      className="h-full"
    >
      <Card className="overflow-hidden h-full border-2 hover:border-purple-300 transition-colors">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={peep.image}
            alt={peep.title}
            fill
            className="object-contain"
            priority
          />
        </div>
        <CardContent className="px-4">
          <h3 className="text-xl text-center font-bold mb-2 font-japanese">
            {peep.title}
          </h3>
        </CardContent>
      </Card>
    </motion.div>
  );
}
