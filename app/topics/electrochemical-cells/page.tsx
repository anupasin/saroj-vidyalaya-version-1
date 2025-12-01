"use client";

import React from "react";
import { Quiz, QuizQuestion } from "@/components/Quiz";

import Image from "next/image";

const IllustrationPlaceholder = ({ prompt, title, imageSrc }: { prompt: string; title: string; imageSrc?: string }) => {
  if (imageSrc) {
    return (
      <div className="my-8 rounded-lg overflow-hidden shadow-lg">
        <Image 
          src={imageSrc} 
          alt={title} 
          width={800} 
          height={400} 
          className="w-full h-auto object-cover"
        />
      </div>
    );
  }
  return (
    <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
      <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
        Illustration Placeholder: {title}
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic">{prompt}</p>
    </div>
  );
};

const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the main function of a salt bridge in a voltaic cell?",
    options: [
      "To conduct electrons directly between electrodes",
      "To maintain electrical neutrality in the solutions",
      "To generate heat for the reaction",
      "To speed up the reaction rate",
    ],
    correctAnswer: 1,
    explanation: "The salt bridge allows ions to flow between the two solutions, maintaining electrical neutrality so the reaction can continue. Without it, charge buildup would stop the reaction.",
  },
  {
    question: "In an electrolytic cell, the anode is connected to which terminal of the battery?",
    options: ["Negative", "Positive", "Neutral", "Ground"],
    correctAnswer: 1,
    explanation: "In an electrolytic cell, the anode is connected to the positive terminal of the battery, which pulls electrons away from it, causing oxidation.",
  },
  {
    question: "Which type of hydrogen is produced using renewable electricity to split water?",
    options: ["Grey Hydrogen", "Blue Hydrogen", "Green Hydrogen", "Brown Hydrogen"],
    correctAnswer: 2,
    explanation: "Green Hydrogen is made by using renewable electricity (solar, wind) to split water through electrolysis. It is the cleanest form.",
  },
  {
    question: "Where was natural hydrogen accidentally discovered in 1987?",
    options: ["France", "USA", "Mali", "Albania"],
    correctAnswer: 2,
    explanation: "In 1987, workers in Bourakébougou, Mali, accidentally discovered natural hydrogen while drilling for water.",
  },
  {
    question: "What are the only byproducts of a hydrogen fuel cell?",
    options: ["Carbon Dioxide and Water", "Water and Heat", "Methane and Ozone", "Oxygen and Nitrogen"],
    correctAnswer: 1,
    explanation: "A hydrogen fuel cell combines hydrogen and oxygen to produce electricity, with the only byproducts being pure water and heat.",
  },
];





export default function ElectrochemicalCellsPage() {
  return (
    <div className="container mx-auto px-6 pt-24 pb-12 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl md:text-5xl font-nunito font-bold text-brand-gold mb-8">
          Comprehensive Content Outline for Electrochemical Cells
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-nunito font-bold text-primary mb-4">
            1. Introduction: The Dance of Electricity and Chemistry
          </h2>
          <p>
            Think of electrochemical cells as translators between two different languages: the language of chemistry (atoms and molecules) and the language of electricity (electrons flowing through wires). Just as a good translator lets two people who speak different languages have a conversation, electrochemical cells let chemical energy and electrical energy talk to each other.
          </p>
          <IllustrationPlaceholder
            title="Illustration Prompt 1"
            prompt="A whimsical scene showing two characters - one labeled 'Chemical Energy' (represented as colorful atoms and molecules bubbling and reacting) and one labeled 'Electrical Energy' (represented as glowing electrons flowing along copper wires). Between them stands a friendly 'translator' character wearing a badge that says 'Electrochemical Cell,' helping them shake hands and communicate."
            imageSrc="/electrochemical-cells/intro_characters.png"
          />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-nunito font-bold text-primary mb-4">
            2. Voltaic Cells: When Chemistry Makes Electricity
          </h2>
          
          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mb-3">
            The Basic Concept
          </h3>
          <p>
            Imagine a water slide at a park. Kids climb up (using energy), then slide down (releasing energy). The climb requires effort, but the slide happens naturally because of gravity. In chemistry, some reactions are like that slide - they happen spontaneously, releasing energy as they go.
          </p>
          <p>
            A voltaic cell (also called a galvanic cell) captures that "slide down" energy and converts it into electricity we can use.
          </p>

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            The Real Magic: Redox Reactions
          </h3>
          <p>
            At the heart of every voltaic cell is something called a redox reaction - but let's think about what that really means. Imagine you have two friends: one who really wants to give away money (let's call them the Generous Giver), and another who desperately wants to receive money (the Eager Receiver). When they meet, money changes hands naturally.
          </p>
          <p>
            In chemistry, instead of money, we're talking about electrons. Some atoms or molecules are generous givers (they lose electrons easily) - we call this <strong>oxidation</strong>. Others are eager receivers (they gain electrons easily) - we call this <strong>reduction</strong>. Put them together, and you get a REDuction-OXidation (redox) reaction.
          </p>
          <IllustrationPlaceholder
            title="Illustration Prompt 2"
            prompt="A split-screen illustration. Left side: 'Oxidation Station' shows zinc atoms cheerfully tossing electrons (depicted as tiny glowing orbs) into a basket. Right side: 'Reduction Resort' shows copper ions eagerly catching electrons. Between them, a wire connects both sides with electrons flowing like a river from left to right. Below the wire, a small light bulb glows to show the electricity being generated."
            imageSrc="/electrochemical-cells/oxidation_reduction.png"
          />

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            The Anatomy of a Voltaic Cell
          </h3>
          <p>Let's use the classic zinc-copper cell as our example. Picture two beakers:</p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-4">
            <p className="font-bold">Beaker 1: The Anode (Negative Terminal)</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Contains a zinc metal strip sitting in zinc sulfate solution</li>
              <li>The zinc atoms are generous - they give up electrons: Zn → Zn²⁺ + 2e⁻</li>
              <li>This is oxidation happening</li>
              <li>Electrons pile up on the zinc strip, making it negatively charged</li>
            </ul>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg my-4">
            <p className="font-bold">Beaker 2: The Cathode (Positive Terminal)</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Contains a copper strip sitting in copper sulfate solution</li>
              <li>The copper ions in solution are eager - they want electrons: Cu²⁺ + 2e⁻ → Cu</li>
              <li>This is reduction happening</li>
              <li>This strip becomes positively charged as it "pulls" electrons</li>
            </ul>
          </div>

          <p>
            <strong>The Wire:</strong> Connect them with a wire, and electrons rush from the zinc (where they're piling up) to the copper (where they're needed). This flow of electrons IS electricity!
          </p>
          <p>
            <strong>The Salt Bridge:</strong> Here's where it gets interesting. Without something else, the system would quickly stop working. Why? Because as zinc loses positive ions to the solution and copper removes positive ions from its solution, the solutions would become electrically imbalanced.
          </p>
          <p>
            Think of it like a checkout line at a store. If customers keep leaving one line (zinc side) and joining another (copper side), eventually one line has nobody and the other is packed - and the system breaks down.
          </p>
          <p>
            The salt bridge is like a manager who moves people between lines to keep things balanced. It allows ions to flow between the two solutions, maintaining electrical neutrality so the reaction can continue.
          </p>
          <IllustrationPlaceholder
            title="Illustration Prompt 3"
            prompt="A detailed diagram of a voltaic cell with both beakers shown as transparent containers. In the left beaker (labeled 'Anode - Oxidation Zone'), show zinc strip partially dissolved with Zn²⁺ ions in solution (blue). In the right beaker (labeled 'Cathode - Reduction Zone'), show copper strip with Cu metal plating onto it and Cu²⁺ ions (orange) in solution. The salt bridge connecting them should be shown as a U-shaped tube with small ions (both positive and negative) flowing through it. Arrows show electron flow in the wire above, and ion movement in the solutions and salt bridge. Use different colors and clear labels."
            imageSrc="/electrochemical-cells/voltaic_cell_diagram.png"
          />

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            Real-World Applications of Voltaic Cells
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>1. Batteries in Everything:</strong> From your phone to your laptop to electric cars, these all use voltaic cells. A AA battery is just a voltaic cell packaged conveniently. Car batteries use lead-acid voltaic cells.</li>
            <li><strong>2. Pacemakers:</strong> These life-saving devices use tiny lithium voltaic cells that can run for years.</li>
            <li><strong>3. Emergency Backup Power:</strong> Data centers and hospitals use massive banks of voltaic cells to keep running during power outages.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-nunito font-bold text-primary mb-4">
            3. Electrolytic Cells: When Electricity Forces Chemistry
          </h2>
          
          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mb-3">
            The Reverse Direction
          </h3>
          <p>
            Remember our water slide analogy? What if we wanted to push kids UP the slide instead of letting them slide down? We'd need to use energy (maybe a mechanical lift). That's what electrolytic cells do - they use electrical energy to force chemical reactions that wouldn't happen on their own.
          </p>
          <IllustrationPlaceholder
            title="Illustration Prompt 4"
            prompt="A side-by-side comparison image. Left side labeled 'Voltaic Cell - Natural Downhill' shows a ball rolling down a hill generating electricity (represented by lightning bolts). Right side labeled 'Electrolytic Cell - Forced Uphill' shows the same ball being pushed up the hill by a battery-powered motor. Both sides clearly labeled to show the energy flow direction."
            imageSrc="/electrochemical-cells/voltaic_vs_electrolytic.png"
          />

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            How Electrolytic Cells Work
          </h3>
          <p>
            In an electrolytic cell, we connect an external power source (like a battery) to force electrons to flow in a direction they wouldn't naturally go. This drives chemical reactions that require energy input.
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-4">
            <p className="font-bold mb-2">The Setup:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Two electrodes (usually inert like platinum or carbon) placed in a solution or molten compound</li>
              <li>An external battery or power supply</li>
              <li>The battery's negative terminal connects to one electrode (forcing electrons onto it)</li>
              <li>The battery's positive terminal connects to the other (pulling electrons away)</li>
            </ul>
          </div>

          <h4 className="text-xl font-nunito font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-2">Example: Splitting Water</h4>
          <p>Pure water doesn't conduct electricity well, so we add a small amount of salt or acid. Then:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              At the <strong>cathode</strong> (connected to battery's negative terminal):
              <br />Electrons are forced in
              <br />Water molecules break apart: 2H₂O + 2e⁻ → H₂ + 2OH⁻
              <br />Hydrogen gas bubbles up!
            </li>
            <li>
              At the <strong>anode</strong> (connected to battery's positive terminal):
              <br />Electrons are pulled away
              <br />Water oxidizes: 2H₂O → O₂ + 4H⁺ + 4e⁻
              <br />Oxygen gas bubbles up!
            </li>
          </ul>
          <p className="mt-2">Overall: We've used electricity to break water into hydrogen and oxygen.</p>
          <IllustrationPlaceholder
            title="Illustration Prompt 5"
            prompt="An electrolytic cell diagram showing a clear container with two platinum electrodes submerged in water (with a hint of blue to show it contains dissolved salt). Show the battery connected with clear + and - terminals. At the cathode (left), show tiny hydrogen bubbles (H₂) rising with a 2:1 ratio compared to oxygen bubbles (O₂) rising at the anode (right). Use arrows to show electron flow from battery through the circuit. Include molecular representations of the reactions occurring at each electrode."
            imageSrc="/electrochemical-cells/electrolytic_cell_diagram.png"
          />

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            Real-World Applications of Electrolytic Cells
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>1. Electroplating:</strong> Want to coat cheap metal with gold or chrome? Electrolytic cells! The object to be plated becomes the cathode, and metal ions in solution get reduced and deposited as a shiny coating.</li>
            <li><strong>2. Aluminum Production:</strong> Aluminum is so reactive that we can't find it pure in nature - it's always combined with oxygen. Electrolytic cells force aluminum oxide apart to give us pure aluminum for cans, foil, and airplane bodies.</li>
            <li><strong>3. Chlorine and Sodium Hydroxide Production:</strong> When we run electricity through salt water in industrial electrolytic cells, we get chlorine gas (for disinfecting water) and sodium hydroxide (for making soap and paper).</li>
            <li><strong>4. Refining Copper:</strong> Even though we can mine copper, it's often impure. Electrolytic cells purify it to 99.99% pure copper for electrical wiring.</li>
          </ul>
          <IllustrationPlaceholder
            title="Illustration Prompt 6"
            prompt="A four-panel comic-style illustration showing real applications: Panel 1 - A car bumper being electroplated with shiny chrome; Panel 2 - Molten aluminum oxide being electrolyzed in a large industrial cell with pure aluminum collecting at the bottom; Panel 3 - A swimming pool with chlorine being produced by electrolysis; Panel 4 - Industrial copper refining with impure copper becoming pure copper."
            imageSrc="/electrochemical-cells/electrolytic_applications.png"
          />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-nunito font-bold text-primary mb-4">
            4. Hydrogen Fuel Cells: The Clean Energy Promise
          </h2>
          
          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mb-3">
            A Special Type of Voltaic Cell
          </h3>
          <p>
            A hydrogen fuel cell is like a voltaic cell that never runs out - as long as you keep feeding it hydrogen and oxygen. Instead of the electrodes dissolving away like in a battery, the fuel cell uses catalysts to help hydrogen and oxygen react, producing electricity, heat, and pure water.
          </p>
          <p>
            Think of it like a fireplace versus a log:
            <br />- A log burns once and is gone (regular battery)
            <br />- A fireplace can keep burning as long as you add wood (fuel cell)
          </p>

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            How It Works:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold">At the Anode:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                <li>Hydrogen gas (H₂) enters</li>
                <li>A platinum catalyst helps split it: 2H₂ → 4H⁺ + 4e⁻</li>
                <li>Electrons flow through the external circuit (creating electricity)</li>
                <li>Hydrogen protons pass through a special membrane</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="font-bold">At the Cathode:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                <li>Oxygen gas (O₂) enters</li>
                <li>Electrons arriving from the circuit combine with oxygen and hydrogen protons</li>
                <li>4H⁺ + O₂ + 4e⁻ → 2H₂O</li>
                <li>Pure water comes out!</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 font-bold text-center">
            Overall Result: Hydrogen + Oxygen → Electricity + Water + Heat
          </p>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            The only "exhaust" is water vapor and heat. Zero pollution.
          </p>
          <IllustrationPlaceholder
            title="Illustration Prompt 7"
            prompt="A cutaway diagram of a hydrogen fuel cell. Show three distinct layers: left side where H₂ enters and splits at the anode (with a platinum catalyst shown as sparkles), center showing the proton exchange membrane (depicted as a selective filter letting only H⁺ through, with electrons flowing around it through an external wire powering a small electric motor), and right side where O₂ enters and combines with H⁺ at the cathode to form H₂O droplets. Use arrows to show the movement of H₂, O₂, H⁺, e⁻, and H₂O. Make it colorful and clear."
            imageSrc="/electrochemical-cells/fuel_cell_diagram.png"
          />

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            Why Hydrogen Fuel Cells Matter
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>For Transportation:</strong> Fuel cell cars can drive 300+ miles on a tank of hydrogen. Refueling takes about 5 minutes (unlike hours for battery charging). Perfect for buses, trucks, trains, and ships that need to go long distances.</li>
            <li><strong>For Backup Power:</strong> Fuel cells can provide electricity during grid outages. Hospitals and data centers use them for critical backup.</li>
            <li><strong>For Remote Locations:</strong> Places without grid access can generate their own clean power. Some submarines use fuel cells to stay underwater longer.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-nunito font-bold text-primary mb-4">
            5. The Hydrogen Challenge: It's Not All Sunshine
          </h2>
          <p>Here's the problem: hydrogen fuel cells are clean, but where does the hydrogen come from?</p>

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            Current Hydrogen Production - The Dirty Secret
          </h3>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Grey Hydrogen (95% of today's hydrogen):</strong>
              <br />Made by heating natural gas (methane) with steam
              <br />Chemical reaction: CH₄ + 2H₂O → CO₂ + 4H₂
              <br />Notice that CO₂? That's the greenhouse gas causing climate change!
              <br />It's like saying "I have a zero-emission car!" while ignoring that the fuel factory is polluting
            </li>
            <li>
              <strong>Brown/Black Hydrogen:</strong>
              <br />Made from coal
              <br />Even worse for the environment than grey hydrogen
            </li>
            <li>
              <strong>Blue Hydrogen:</strong>
              <br />Like grey hydrogen, but we capture and store the CO₂ underground
              <br />Better, but not perfect - capturing CO₂ requires energy and isn't 100% efficient
              <br />Plus, we're not sure how long CO₂ will stay underground
            </li>
            <li>
              <strong>Green Hydrogen:</strong>
              <br />Made by using renewable electricity (solar, wind) to split water through electrolysis
              <br />Truly clean! But expensive - about $6 per kilogram vs. $2 for grey hydrogen
              <br />Requires massive amounts of renewable electricity
            </li>
          </ul>
          <IllustrationPlaceholder
            title="Illustration Prompt 8"
            prompt="An infographic showing five types of hydrogen as color-coded factory buildings. Grey factory (largest) emits CO₂ clouds from natural gas. Brown factory (coal-black smoke) is even dirtier. Blue factory has CO₂ capture pipes going underground. Green factory has solar panels and wind turbines on the roof with only H₂O going in and H₂ coming out. Include a bar chart showing relative costs and environmental impact of each."
            imageSrc="/electrochemical-cells/hydrogen_types.png"
          />

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            The Infrastructure Problem
          </h3>
          <p>Even if we had cheap green hydrogen:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Storage Challenge:</strong> Hydrogen molecules are tiny - they leak through almost everything. To store enough for a car, you need to compress it to 700 times atmospheric pressure. Or cool it to -253°C to make it liquid (which takes energy).</li>
            <li><strong>Transportation Challenge:</strong> Can't use existing natural gas pipelines (hydrogen makes steel brittle). Need new dedicated hydrogen pipelines or truck transport. Very few hydrogen refueling stations exist (compare: gas stations are everywhere).</li>
            <li><strong>Safety Concerns:</strong> Hydrogen is highly flammable. Remember the Hindenburg? Need strict safety standards and training.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-nunito font-bold text-primary mb-4">
            6. The Game Changer: Natural Underground Hydrogen
          </h2>
          
          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Nature's Hidden Hydrogen Factory
          </h3>
          <p>
            Scientists have discovered that Earth continuously produces hydrogen deep underground through natural geochemical processes, with recent estimates suggesting trillions of tons may be trapped in geological formations worldwide.
          </p>
          <p>
            This is revolutionary! Instead of using energy to make hydrogen, we might just... dig it up.
          </p>

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            How Nature Makes Hydrogen
          </h3>
          <p>
            The process involves water reacting with iron-rich minerals in rocks like olivine under high temperature and pressure underground, causing the iron to oxidize and releasing hydrogen gas. Think of it like this:
          </p>
          <p>
            Imagine you have rusty iron nails in your toolbox (iron oxide). That rust formed when iron reacted with water and oxygen. When this happens deep underground with certain iron-rich rocks and water at high temperatures (200-350°C) and pressures, instead of making rust, the reaction splits water molecules and releases hydrogen gas.
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
            <p className="font-bold">The Chemical Process (simplified):</p>
            <p>Iron-rich rock + Water + Heat + Pressure → Oxidized rock + Hydrogen gas</p>
            <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">Example with olivine: Mg₁.₅Fe₀.₅SiO₄ + H₂O → Mg₃Si₂O₅(OH)₄ + Fe₃O₄ + H₂</p>
          </div>
          <p>
            <strong>What's Amazing:</strong> Unlike natural gas that takes millennia to form, hydrogen can be produced on human timescales, and the process might even be stimulated to accelerate production.
          </p>
          <IllustrationPlaceholder
            title="Illustration Prompt 9"
            prompt="A cross-section view of underground layers. Top layer shows trees and houses. Below that, show layers of different colored rock strata. In the deep layer (labeled 'High Temperature & Pressure Zone'), show iron-rich olivine rocks (greenish) interacting with groundwater (blue). Chemical symbols H₂O going in, and H₂ bubbles rising up. Some H₂ gets trapped under an impermeable cap rock layer (shown as a dome). Include temperature (200-350°C) and depth markers. Show a drilling rig on the surface tapping into the trapped hydrogen reservoir."
            imageSrc="/electrochemical-cells/natural_hydrogen_formation.png"
          />

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            The Mali Discovery - Proof It Works
          </h3>
          <p>
            In 1987, workers in Bourakébougou, Mali, accidentally discovered natural hydrogen while drilling for water. The well emitted so much hydrogen that a worker's cigarette ignited it, creating a massive plume of smokeless fire that burned for weeks.
          </p>
          <p>
            In 2012, a businessman started using this hydrogen to power a generator for the village. The hydrogen-fueled generator provided the village with freezers, lighting for the mosque, and improved children's test scores since they could study with electric lights.
          </p>
          <p>
            This tiny village in Mali is running on some of the cleanest energy on Earth - and they discovered it by accident!
          </p>

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            Where to Find It
          </h3>
          <p>
            Researchers at USGS have identified promising geological hydrogen locations stretching from the Appalachian Mountains to the Rockies and along the West Coast.
          </p>
          <p>The key is finding places with:</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li><strong>Source rocks:</strong> Iron-rich rocks that can produce hydrogen</li>
            <li><strong>Water:</strong> To react with the rocks</li>
            <li><strong>Cap rocks:</strong> Impermeable layers that trap the hydrogen like a lid</li>
            <li><strong>Faults or channels:</strong> To let hydrogen migrate to the trap</li>
          </ol>
          <IllustrationPlaceholder
            title="Illustration Prompt 10"
            prompt="A map of the United States with highlighted regions showing potential hydrogen zones. Use color-coding: green for Appalachian region, yellow for Midwest rift zones, orange for Rocky Mountains, and blue for West Coast. Include small icons showing the geological features needed: iron-rich rocks, underground water, cap rock formations. Add inset diagrams showing successful discoveries in Mali (Africa) and current exploration in France and Spain."
            imageSrc="/electrochemical-cells/us_hydrogen_map.png"
          />

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            The Incredible Numbers
          </h3>
          <p>
            The USGS calculates about 5.6 trillion tons of hydrogen may be trapped in geological formations globally, with the energy content of the recoverable amount roughly twice that of all proven natural gas reserves on Earth.
          </p>
          <p>Let's put that in perspective:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Current global hydrogen production: 100 million tons/year</li>
            <li>If even 1% of natural hydrogen is recoverable: 56 billion tons</li>
            <li>That's enough to supply the world for 560 years at current usage rates!</li>
          </ul>

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            The Cost Advantage
          </h3>
          <p>
            Initial estimates suggest natural hydrogen could be produced for as low as $1 per kilogram, compared to $6 per kilogram for green hydrogen made from renewable electricity.
          </p>
          <p>
            At $1 per kilogram, hydrogen becomes competitive with natural gas on an energy-price basis, making it economically viable for widespread use.
          </p>

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            Recent Discoveries and Exploration
          </h3>
          <p>The race is on worldwide:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>France:</strong> Researchers in northern Bavaria measured hydrogen concentrations exceeding 1000 ppm in soil samples, values unprecedented in scientific literature, suggesting significant deposits.</li>
            <li><strong>United States:</strong> The Midcontinent Rift, stretching 1,200 miles from Lake Superior to Kansas, is being investigated as it may hold vast quantities of natural hydrogen formed when volcanic rock interacts with water.</li>
            <li><strong>Albania:</strong> A chromite mine showed remarkably high hydrogen outgassing of at least 200 tonnes per year, sustained constantly for at least 6 years.</li>
          </ul>
          <IllustrationPlaceholder
            title="Illustration Prompt 11"
            prompt="A world map with glowing points marking hydrogen discoveries and exploration sites: Mali (bright, showing active production), France (pulsing yellow), United States Midcontinent Rift (blue line), Albania (red dot), Spain Pyrenees (orange), Australia (green). Include small fact boxes for each major site with production rates or discovery details. Show drilling rigs at active sites and research icons at exploration sites."
            imageSrc="/electrochemical-cells/global_hydrogen_map.png"
          />

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            Stimulated Production - The Next Frontier
          </h3>
          <p>
            MIT Professor Iwnetim Abate received a $1.3 million grant to determine ideal conditions for stimulating hydrogen production underground using factors like catalysts, temperature, pressure, and pH levels.
          </p>
          <p>The idea: Instead of just finding existing hydrogen deposits, we could turn underground rock formations into hydrogen factories by:</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Pumping water underground into iron-rich rock formations</li>
            <li>Potentially adding catalysts to speed up the reaction</li>
            <li>Controlling temperature and pressure to optimize production</li>
            <li>Harvesting the hydrogen as it's produced</li>
          </ol>
          <p className="mt-2">Think of it like farming versus hunting - instead of searching for wild hydrogen, we cultivate it.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-nunito font-bold text-primary mb-4">
            7. The Challenges Ahead
          </h2>
          <p>Despite the enormous promise, natural hydrogen faces hurdles:</p>
          
          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            Exploration Challenges
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Hydrogen accumulates in different rocks than oil and gas (iron-rich vs. organic-rich)</li>
            <li>Oil companies' existing expertise doesn't directly transfer</li>
            <li>Need new detection and mapping technologies</li>
            <li>Unknown: exactly how much hydrogen is economically accessible</li>
          </ul>

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            Technical Challenges
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Hydrogen molecules are tiny - they leak easily</li>
            <li>Need new materials for pipelines and storage</li>
            <li>Must prevent contamination with other gases</li>
            <li>Safety protocols for handling highly flammable gas</li>
          </ul>

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            Regulatory Challenges
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>No laws specifically governing hydrogen extraction in most countries</li>
            <li>Some regions have moratoriums on new drilling</li>
            <li>Need to establish environmental impact standards</li>
            <li>Questions about mineral rights ownership</li>
          </ul>

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            Economic Challenges
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>High upfront exploration and drilling costs</li>
            <li>Need to build infrastructure from scratch</li>
            <li>Competition with increasingly cheap renewable electricity</li>
            <li>Uncertain market demand until infrastructure exists</li>
          </ul>
          <IllustrationPlaceholder
            title="Illustration Prompt 12"
            prompt="A circular obstacle course diagram showing a hydrogen molecule character trying to reach 'Widespread Adoption' at the center. Four barriers block the path: 'Exploration Uncertainty' (fog clouds), 'Technical Barriers' (leaky pipeline), 'Regulatory Hurdles' (red tape), and 'Economic Questions' (dollar signs). Show some barriers being overcome with solution icons: new sensors, advanced materials, policy documents, and investment graphs."
            imageSrc="/electrochemical-cells/hydrogen_challenges.png"
          />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-nunito font-bold text-primary mb-4">
            8. The Future: A Hydrogen Economy?
          </h2>
          
          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Best Case Scenario
          </h3>
          <p>If natural hydrogen lives up to its promise:</p>
          <div className="space-y-4 mt-4">
            <div>
              <p className="font-bold">2025-2030:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Multiple successful commercial wells drilled</li>
                <li>Early production begins, potentially as soon as 2024 in regions like South Australia where drilling is already underway</li>
                <li>Costs confirmed at $1-2/kg</li>
                <li>Safety and regulatory frameworks established</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">2030-2040:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Hydrogen infrastructure builds out near major deposits</li>
                <li>Fuel cell vehicles become common in regions with hydrogen access</li>
                <li>Heavy industry (steel, chemicals) switches to hydrogen</li>
                <li>Grid-scale hydrogen storage balances renewable energy</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">2040-2050:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Global hydrogen pipeline networks established</li>
                <li>Aviation and shipping using hydrogen</li>
                <li>Fossil fuel use declining rapidly</li>
                <li>Combination of natural hydrogen and green hydrogen (made from excess renewable energy)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            Realistic Scenario
          </h3>
          <p>More likely, natural hydrogen becomes one tool among many:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Used where it's economically competitive (near deposits)</li>
            <li>Complements rather than replaces batteries and renewable electricity</li>
            <li>Primarily for applications where batteries don't work well (aviation, long-haul trucking, ships, industrial processes)</li>
            <li>Takes decades to build out infrastructure</li>
            <li>Coexists with other energy technologies</li>
          </ul>
          <IllustrationPlaceholder
            title="Illustration Prompt 13"
            prompt="A futuristic cityscape split into three time periods (2030, 2040, 2050). Show progressive adoption: 2030 - a few hydrogen fuel cell buses and one hydrogen production facility; 2040 - hydrogen refueling stations, hydrogen-powered ships in harbor, industrial plants using hydrogen; 2050 - hydrogen pipelines visible, commercial aircraft with hydrogen tanks, widespread fuel cell vehicles, solar/wind farms connected to hydrogen production for energy storage. Keep it optimistic but realistic."
            imageSrc="/electrochemical-cells/hydrogen_future_city.png"
          />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-nunito font-bold text-primary mb-4">
            9. Conclusion: From Two Simple Cells to Earth's Hidden Treasure
          </h2>
          <p>We started with two fundamental types of electrochemical cells:</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Voltaic cells</strong> - where spontaneous chemical reactions generate electricity, powering everything from your phone to your car</li>
            <li><strong>Electrolytic cells</strong> - where electricity forces chemical reactions, enabling electroplating, aluminum production, and splitting water into hydrogen and oxygen</li>
          </ul>
          <p>
            These simple principles led us to <strong>hydrogen fuel cells</strong> - elegant devices that combine hydrogen and oxygen to produce only electricity and water.
          </p>
          <p className="mt-4">But the challenge has always been: where do we get clean hydrogen?</p>
          <p>
            The discovery of vast natural hydrogen deposits underground represents a potential revolution. Nature has been running its own electrolytic cells deep within the Earth for billions of years, using geological heat and pressure instead of batteries, and iron-rich rocks instead of platinum electrodes.
          </p>
          <p>
            If we can successfully tap into these natural hydrogen reservoirs, we might have found one of the missing pieces in the clean energy puzzle - a fuel that:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Produces zero pollution when used</li>
            <li>Requires no energy to manufacture (nature already did that)</li>
            <li>Exists in potentially vast quantities</li>
            <li>Can be extracted at competitive prices</li>
            <li>Works for applications where batteries struggle</li>
          </ul>
          <p className="mt-4">
            The story of electrochemical cells thus comes full circle: from simple laboratory experiments with zinc and copper, to powering modern electronics, to potentially revolutionizing how humanity generates and uses energy.
          </p>
          <p className="mt-4">
            Your mother, through Saroj Vidyalaya, would be teaching students not just about chemical reactions and electricity, but about how understanding fundamental science can illuminate pathways to solving humanity's greatest challenges.
          </p>
          <IllustrationPlaceholder
            title="Final Illustration Prompt 14"
            prompt="A beautiful summarizing illustration showing the evolution/connection: Bottom level shows a simple voltaic cell (zinc-copper in beakers) with arrows pointing up to middle level showing a modern hydrogen fuel cell (sleek, technological), with arrows pointing to the top level showing a cutaway of Earth with natural hydrogen formation underground. Connect all three with glowing energy flows. On one side, show historical scientists (like Alessandro Volta) with thought bubbles, and on the other side, show modern researchers with drilling equipment. Above everything, show a clean, green Earth with the sun shining. Title it 'From Discovery to Future: The Electrochemical Revolution.'"
            imageSrc="/electrochemical-cells/electrochemical_evolution.png"
          />
        </section>

        <div className="mt-16">
          <Quiz questions={quizQuestions} title="Test Your Knowledge: Electrochemical Cells" />
        </div>
      </div>
    </div>
  );
}
