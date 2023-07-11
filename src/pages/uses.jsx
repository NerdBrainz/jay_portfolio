import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Tools & Gear - Jay Womack</title>
        <meta
          name="description"
          content="Tools I build with and all the junk I collect along the way."
        />
      </Head>
      <SimpleLayout
        title="Tools I build with and all the junk I collect along the way."
        intro="If you ever wondered what it takes to build web apps while you travel... I have it mostly figured out. Here some things I have and some I would suggest."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro with Intel Chip and 64GB ram, Lenovo X1 Extreme GenIII, 64GB RAM (2021)">
              I run two different machines. My Intel Mac is my main workhorse. I
              use the Thinkpad at times, but mostly as a backup or if I play
              video games with my sons. The Mac is all you could ever want for
              web development or video editing. There is obviously better tools
              for the job, but with 64gb of ram and an I-9 this laptop puts in
              work!
            </Tool>
            <Tool title="Asus Portable monitor">
              I cannot develop on a laptop without a second screen. This
              portable screen has its own power sources and adds much needed
              screen real estate while I am mooving and grooving.
            </Tool>
            <Tool title="Logitech K-860 Ergonomic Bluetooth Keyboard">
              Cords suck, and so does wrist pain. I need an ergo keyboard, and
              this is hands down my favorite. I bring two everywhere I travel.
            </Tool>
            <Tool title="Logitech Mx Vertical Mouse">
              It is the weirdest thing in the world the first time you use a
              vertical mouse. With that said, the wrist pain is gone, and that
              is all I care about with this mouse choice. With that said, this
              mouse is perfect for what it does
            </Tool>
            <Tool title="Desk and Chair">
              Anyone who has ever built anything on the road knows this can be
              real hit or miss. I hope that the description and pictures of my
              booking are accurate or I am working wherever I have to. Sometimes
              you really luck out and have an amazing view and a great work
              station. Other times you really have to suffer through a few hours
              of really shitty ergonomics.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VSCode">
              There are definitely others out there, but when we are talking
              about an IDE I am 1000% reaching for VSCode if I can.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Canva">
              I do not like Photoshop and Canva does most everything I could
              ever want to do and with a million times less frustration.
            </Tool>
            <Tool title="Figma">
              If I am not just drawing wire frames on a napkin, then I am using
              Figma's amazing UI to build my wire frames. Honestly these days I
              can just code a site faster than I can create a wire frame.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Kanban">
              Kanban boards are the only way to keep track of this chaos that is
              happening daily in my brain.
            </Tool>
            <Tool title="AI">
              Ai is crazy powerful for writing copy and troubleshooting code
              that you just cannot find the bug in or understand a complex new
              thing. AI is insanely powerful these days and you can crank
              websites out at an unprecedented rate with its help.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
