"use client";

import * as React from "react";
import Image from "next/image";
import { motion, HTMLMotionProps, Variants } from "motion/react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ArticleCardProps extends HTMLMotionProps<"div"> {
  tag: string;
  date: {
    month: string;
    day: number;
  };
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  location: {
    city: string;
    country: string;
  };
  children?: React.ReactNode;
}

const ArticleCard = React.forwardRef<HTMLDivElement, ArticleCardProps>(
  (
    {
      className,
      tag,
      date,
      title,
      description,
      imageUrl,
      imageAlt,
      location,
      children,
      ...props
    },
    ref
  ) => {
    const cardVariants: Variants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      hover: { y: -5, scale: 1.02, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)" },
    };

    const imageVariants: Variants = {
      hover: { scale: 1.1 },
    };
    
    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-2xl border bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-sm flex flex-col h-full",
          className
        )}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        transition={{ duration: 0.3, ease: "easeInOut" }}
        {...props}
      >
        <div className="p-6 flex-1 flex flex-col">
          <header className="mb-4 flex items-center justify-between">
            <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300">
              {tag}
            </span>
            <div className="flex items-center text-xs font-semibold">
              <span className="rounded-l-md bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1.5 text-neutral-600 dark:text-neutral-300">
                {date.month.toUpperCase()}
              </span>
              <span className="rounded-r-md bg-[#00e1ab] px-2.5 py-1.5 text-[#004a36]">
                {date.day}
              </span>
            </div>
          </header>

          <main className="space-y-4 flex-1 flex flex-col">
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">{title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
            </div>
            <div className="mt-auto pt-4">
              {children}
            </div>
          </main>
        </div>

        <div className="relative mt-auto aspect-[16/10] overflow-hidden rounded-b-2xl rounded-t-lg shrink-0">
          <motion.div
            className="h-full w-full"
            variants={imageVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 flex items-center gap-2 p-4 text-white">
            <MapPin className="h-4 w-4" />
            <div>
              <p className="text-sm font-semibold">{location.city}</p>
              <p className="text-xs">{location.country}</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);
ArticleCard.displayName = "ArticleCard";

export { ArticleCard };
