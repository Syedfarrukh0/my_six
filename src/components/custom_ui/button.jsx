'use client'

import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Button</Button>
}

export function ButtonSecondary(prop) {
  return <Button variant="secondary" onClick={prop.onclick} type={prop.type} className={`bg-secondary/70 text-secondary-foreground px-11 py-6 hover:bg-secondary max-[768px]:px-7 max-[768px]:py-4 ${prop.class}`}> {prop.name} </Button>
}