"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { transitionTypes } from "@/lib/routes";

/**
 * next/link with the right view-transition types for this navigation
 * (direction in nav order, destination theme, morph or zoom). Next 16.4
 * passes them to React.addTransitionType inside the navigation transition.
 * Without JavaScript it is a plain <a>.
 */
export function TransitionLink({ href, ...rest }: ComponentProps<typeof Link> & { href: string }) {
  const pathname = usePathname();
  return <Link href={href} transitionTypes={transitionTypes(pathname, href)} {...rest} />;
}
