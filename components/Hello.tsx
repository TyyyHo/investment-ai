"use client";

type Props = { name?: string };

/** Unit test init */
export default function Hello({ name = "World" }: Props) {
  return <h1>Hello {name}</h1>;
}
