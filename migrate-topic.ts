import { createClient } from '@sanity/client'
import { createReadStream } from 'fs'
import path from 'path'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'
const token = process.env.SANITY_API_TOKEN

if (!projectId || !dataset || !token) {
  console.error('Error: Missing env variables. Ensure SANITY_API_TOKEN is set.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

// --- THE CONTENT DATA ---
// I have mapped your React content to this array structure
const articleData = [
  { type: 'h2', text: '1. Introduction: The Dance of Electricity and Chemistry' },
  { type: 'p', text: 'Think of electrochemical cells as translators between two different languages: the language of chemistry (atoms and molecules) and the language of electricity (electrons flowing through wires). Just as a good translator lets two people who speak different languages have a conversation, electrochemical cells let chemical energy and electrical energy talk to each other.' },
  { 
    type: 'image', 
    src: '/electrochemical-cells/intro_characters.png', 
    title: 'Illustration Prompt 1', 
    prompt: 'A whimsical scene showing two characters - one labeled "Chemical Energy" (represented as colorful atoms and molecules bubbling and reacting) and one labeled "Electrical Energy" (represented as glowing electrons flowing along copper wires). Between them stands a friendly "translator" character wearing a badge that says "Electrochemical Cell," helping them shake hands and communicate.' 
  },

  { type: 'h2', text: '2. Voltaic Cells: When Chemistry Makes Electricity' },
  { type: 'h3', text: 'The Basic Concept' },
  { type: 'p', text: 'Imagine a water slide at a park. Kids climb up (using energy), then slide down (releasing energy). The climb requires effort, but the slide happens naturally because of gravity. In chemistry, some reactions are like that slide - they happen spontaneously, releasing energy as they go.' },
  { type: 'p', text: 'A voltaic cell (also called a galvanic cell) captures that "slide down" energy and converts it into electricity we can use.' },
  
  { type: 'h3', text: 'The Real Magic: Redox Reactions' },
  { type: 'p', text: 'At the heart of every voltaic cell is something called a redox reaction - but let\'s think about what that really means. Imagine you have two friends: one who really wants to give away money (let\'s call them the Generous Giver), and another who desperately wants to receive money (the Eager Receiver). When they meet, money changes hands naturally.' },
  { type: 'p', text: 'In chemistry, instead of money, we\'re talking about electrons. Some atoms or molecules are generous givers (they lose electrons easily) - we call this oxidation. Others are eager receivers (they gain electrons easily) - we call this reduction. Put them together, and you get a REDuction-OXidation (redox) reaction.' },
  { 
    type: 'image', 
    src: '/electrochemical-cells/oxidation_reduction.png', 
    title: 'Illustration Prompt 2', 
    prompt: 'A split-screen illustration. Left side: "Oxidation Station" shows zinc atoms cheerfully tossing electrons (depicted as tiny glowing orbs) into a basket. Right side: "Reduction Resort" shows copper ions eagerly catching electrons. Between them, a wire connects both sides with electrons flowing like a river from left to right. Below the wire, a small light bulb glows to show the electricity being generated.' 
  },

  { type: 'h3', text: 'The Anatomy of a Voltaic Cell' },
  { type: 'p', text: 'Let\'s use the classic zinc-copper cell as our example. Picture two beakers:' },
  { type: 'blockquote', text: 'Beaker 1: The Anode (Negative Terminal)\n• Contains a zinc metal strip sitting in zinc sulfate solution\n• The zinc atoms are generous - they give up electrons: Zn → Zn²⁺ + 2e⁻\n• This is oxidation happening\n• Electrons pile up on the zinc strip, making it negatively charged' },
  { type: 'blockquote', text: 'Beaker 2: The Cathode (Positive Terminal)\n• Contains a copper strip sitting in copper sulfate solution\n• The copper ions in solution are eager - they want electrons: Cu²⁺ + 2e⁻ → Cu\n• This is reduction happening\n• This strip becomes positively charged as it "pulls" electrons' },
  { type: 'p', text: 'The Wire: Connect them with a wire, and electrons rush from the zinc (where they\'re piling up) to the copper (where they\'re needed). This flow of electrons IS electricity!' },
  { type: 'p', text: 'The Salt Bridge: Here\'s where it gets interesting. Without something else, the system would quickly stop working. Why? Because as zinc loses positive ions to the solution and copper removes positive ions from its solution, the solutions would become electrically imbalanced.' },
  { type: 'p', text: 'Think of it like a checkout line at a store. If customers keep leaving one line (zinc side) and joining another (copper side), eventually one line has nobody and the other is packed - and the system breaks down.' },
  { type: 'p', text: 'The salt bridge is like a manager who moves people between lines to keep things balanced. It allows ions to flow between the two solutions, maintaining electrical neutrality so the reaction can continue.' },
  { 
    type: 'image', 
    src: '/electrochemical-cells/voltaic_cell_diagram.png', 
    title: 'Illustration Prompt 3', 
    prompt: 'A detailed diagram of a voltaic cell with both beakers shown as transparent containers. In the left beaker (labeled "Anode - Oxidation Zone"), show zinc strip partially dissolved with Zn²⁺ ions in solution (blue). In the right beaker (labeled "Cathode - Reduction Zone"), show copper strip with Cu metal plating onto it and Cu²⁺ ions (orange) in solution. The salt bridge connecting them should be shown as a U-shaped tube with small ions (both positive and negative) flowing through it. Arrows show electron flow in the wire above, and ion movement in the solutions and salt bridge. Use different colors and clear labels.' 
  },

  { type: 'h3', text: 'Real-World Applications of Voltaic Cells' },
  { type: 'ul', items: ['1. Batteries in Everything: From your phone to your laptop to electric cars, these all use voltaic cells. A AA battery is just a voltaic cell packaged conveniently. Car batteries use lead-acid voltaic cells.', '2. Pacemakers: These life-saving devices use tiny lithium voltaic cells that can run for years.', '3. Emergency Backup Power: Data centers and hospitals use massive banks of voltaic cells to keep running during power outages.'] },

  { type: 'h2', text: '3. Electrolytic Cells: When Electricity Forces Chemistry' },
  { type: 'h3', text: 'The Reverse Direction' },
  { type: 'p', text: 'Remember our water slide analogy? What if we wanted to push kids UP the slide instead of letting them slide down? We\'d need to use energy (maybe a mechanical lift). That\'s what electrolytic cells do - they use electrical energy to force chemical reactions that wouldn\'t happen on their own.' },
  { 
    type: 'image', 
    src: '/electrochemical-cells/voltaic_vs_electrolytic.png', 
    title: 'Illustration Prompt 4', 
    prompt: 'A side-by-side comparison image. Left side labeled "Voltaic Cell - Natural Downhill" shows a ball rolling down a hill generating electricity (represented by lightning bolts). Right side labeled "Electrolytic Cell - Forced Uphill" shows the same ball being pushed up the hill by a battery-powered motor. Both sides clearly labeled to show the energy flow direction.' 
  },

  { type: 'h3', text: 'How Electrolytic Cells Work' },
  { type: 'p', text: 'In an electrolytic cell, we connect an external power source (like a battery) to force electrons to flow in a direction they wouldn\'t naturally go. This drives chemical reactions that require energy input.' },
  { type: 'blockquote', text: 'The Setup:\n• Two electrodes (usually inert like platinum or carbon) placed in a solution or molten compound\n• An external battery or power supply\n• The battery\'s negative terminal connects to one electrode (forcing electrons onto it)\n• The battery\'s positive terminal connects to the other (pulling electrons away)' },
  { type: 'p', text: 'Example: Splitting Water. Pure water doesn\'t conduct electricity well, so we add a small amount of salt or acid. Then:' },
  { type: 'ul', items: ['At the cathode (connected to battery\'s negative terminal): Electrons are forced in. Water molecules break apart: 2H₂O + 2e⁻ → H₂ + 2OH⁻. Hydrogen gas bubbles up!', 'At the anode (connected to battery\'s positive terminal): Electrons are pulled away. Water oxidizes: 2H₂O → O₂ + 4H⁺ + 4e⁻. Oxygen gas bubbles up!'] },
  { 
    type: 'image', 
    src: '/electrochemical-cells/electrolytic_cell_diagram.png', 
    title: 'Illustration Prompt 5', 
    prompt: 'An electrolytic cell diagram showing a clear container with two platinum electrodes submerged in water (with a hint of blue to show it contains dissolved salt). Show the battery connected with clear + and - terminals. At the cathode (left), show tiny hydrogen bubbles (H₂) rising with a 2:1 ratio compared to oxygen bubbles (O₂) rising at the anode (right). Use arrows to show electron flow from battery through the circuit. Include molecular representations of the reactions occurring at each electrode.' 
  },

  { type: 'h3', text: 'Real-World Applications of Electrolytic Cells' },
  { type: 'ul', items: ['1. Electroplating: Want to coat cheap metal with gold or chrome? Electrolytic cells! The object to be plated becomes the cathode, and metal ions in solution get reduced and deposited as a shiny coating.', '2. Aluminum Production: Aluminum is so reactive that we can\'t find it pure in nature - it\'s always combined with oxygen. Electrolytic cells force aluminum oxide apart to give us pure aluminum for cans, foil, and airplane bodies.', '3. Chlorine and Sodium Hydroxide Production: When we run electricity through salt water in industrial electrolytic cells, we get chlorine gas (for disinfecting water) and sodium hydroxide (for making soap and paper).', '4. Refining Copper: Even though we can mine copper, it\'s often impure. Electrolytic cells purify it to 99.99% pure copper for electrical wiring.'] },
  { 
    type: 'image', 
    src: '/electrochemical-cells/electrolytic_applications.png', 
    title: 'Illustration Prompt 6', 
    prompt: 'A four-panel comic-style illustration showing real applications: Panel 1 - A car bumper being electroplated with shiny chrome; Panel 2 - Molten aluminum oxide being electrolyzed in a large industrial cell with pure aluminum collecting at the bottom; Panel 3 - A swimming pool with chlorine being produced by electrolysis; Panel 4 - Industrial copper refining with impure copper becoming pure copper.' 
  },

  { type: 'h2', text: '4. Hydrogen Fuel Cells: The Clean Energy Promise' },
  { type: 'h3', text: 'A Special Type of Voltaic Cell' },
  { type: 'p', text: 'A hydrogen fuel cell is like a voltaic cell that never runs out - as long as you keep feeding it hydrogen and oxygen. Instead of the electrodes dissolving away like in a battery, the fuel cell uses catalysts to help hydrogen and oxygen react, producing electricity, heat, and pure water.' },
  { type: 'p', text: 'Think of it like a fireplace versus a log: A log burns once and is gone (regular battery). A fireplace can keep burning as long as you add wood (fuel cell).' },
  { type: 'h3', text: 'How It Works:' },
  { type: 'blockquote', text: 'At the Anode:\n• Hydrogen gas (H₂) enters\n• A platinum catalyst helps split it: 2H₂ → 4H⁺ + 4e⁻\n• Electrons flow through the external circuit (creating electricity)\n• Hydrogen protons pass through a special membrane' },
  { type: 'blockquote', text: 'At the Cathode:\n• Oxygen gas (O₂) enters\n• Electrons arriving from the circuit combine with oxygen and hydrogen protons\n• 4H⁺ + O₂ + 4e⁻ → 2H₂O\n• Pure water comes out!' },
  { 
    type: 'image', 
    src: '/electrochemical-cells/fuel_cell_diagram.png', 
    title: 'Illustration Prompt 7', 
    prompt: 'A cutaway diagram of a hydrogen fuel cell. Show three distinct layers: left side where H₂ enters and splits at the anode (with a platinum catalyst shown as sparkles), center showing the proton exchange membrane (depicted as a selective filter letting only H⁺ through, with electrons flowing around it through an external wire powering a small electric motor), and right side where O₂ enters and combines with H⁺ at the cathode to form H₂O droplets. Use arrows to show the movement of H₂, O₂, H⁺, e⁻, and H₂O. Make it colorful and clear.' 
  },
  { type: 'h3', text: 'Why Hydrogen Fuel Cells Matter' },
  { type: 'ul', items: ['For Transportation: Fuel cell cars can drive 300+ miles on a tank of hydrogen. Refueling takes about 5 minutes.', 'For Backup Power: Fuel cells can provide electricity during grid outages.', 'For Remote Locations: Places without grid access can generate their own clean power.'] },

  { type: 'h2', text: '5. The Hydrogen Challenge: It\'s Not All Sunshine' },
  { type: 'p', text: 'Here\'s the problem: hydrogen fuel cells are clean, but where does the hydrogen come from?' },
  { type: 'h3', text: 'Current Hydrogen Production - The Dirty Secret' },
  { type: 'ul', items: ['Grey Hydrogen (95% of today\'s hydrogen): Made by heating natural gas with steam. Produces CO2.', 'Brown/Black Hydrogen: Made from coal. Even worse.', 'Blue Hydrogen: Like grey, but CO2 is captured. Better, but not perfect.', 'Green Hydrogen: Made by using renewable electricity to split water. Truly clean, but expensive ($6/kg vs $2/kg for grey).'] },
  { 
    type: 'image', 
    src: '/electrochemical-cells/hydrogen_types.png', 
    title: 'Illustration Prompt 8', 
    prompt: 'An infographic showing five types of hydrogen as color-coded factory buildings. Grey factory (largest) emits CO₂ clouds from natural gas. Brown factory (coal-black smoke) is even dirtier. Blue factory has CO₂ capture pipes going underground. Green factory has solar panels and wind turbines on the roof with only H₂O going in and H₂ coming out. Include a bar chart showing relative costs and environmental impact of each.' 
  },
  { type: 'h3', text: 'The Infrastructure Problem' },
  { type: 'p', text: 'Even if we had cheap green hydrogen: Hydrogen molecules are tiny and leak easily. We need new pipelines and storage solutions. Plus, it\'s highly flammable.' },

  { type: 'h2', text: '6. The Game Changer: Natural Underground Hydrogen' },
  { type: 'h3', text: 'Nature\'s Hidden Hydrogen Factory' },
  { type: 'p', text: 'Scientists have discovered that Earth continuously produces hydrogen deep underground through natural geochemical processes. This is revolutionary! Instead of using energy to make hydrogen, we might just... dig it up.' },
  { type: 'h3', text: 'How Nature Makes Hydrogen' },
  { type: 'p', text: 'The process involves water reacting with iron-rich minerals in rocks like olivine under high temperature and pressure. Imagine rusty iron nails: rust forms when iron reacts with water/oxygen. Underground, instead of rust, this reaction releases hydrogen gas.' },
  { 
    type: 'image', 
    src: '/electrochemical-cells/natural_hydrogen_formation.png', 
    title: 'Illustration Prompt 9', 
    prompt: 'A cross-section view of underground layers. Top layer shows trees and houses. Below that, show layers of different colored rock strata. In the deep layer (labeled "High Temperature & Pressure Zone"), show iron-rich olivine rocks (greenish) interacting with groundwater (blue). Chemical symbols H₂O going in, and H₂ bubbles rising up. Some H₂ gets trapped under an impermeable cap rock layer (shown as a dome). Include temperature (200-350°C) and depth markers. Show a drilling rig on the surface tapping into the trapped hydrogen reservoir.' 
  },
  { type: 'h3', text: 'The Mali Discovery - Proof It Works' },
  { type: 'p', text: 'In 1987, workers in Mali accidentally discovered natural hydrogen while drilling for water. A worker\'s cigarette ignited it! Today, that hydrogen powers a generator for the village, providing electricity for lights and freezers. It\'s some of the cleanest energy on Earth.' },
  { type: 'h3', text: 'Where to Find It' },
  { type: 'p', text: 'Researchers identify promising locations from the Appalachians to the Rockies. Keys are: Source rocks (iron-rich), Water, Cap rocks (to trap it), and Faults.' },
  { 
    type: 'image', 
    src: '/electrochemical-cells/us_hydrogen_map.png', 
    title: 'Illustration Prompt 10', 
    prompt: 'A map of the United States with highlighted regions showing potential hydrogen zones. Use color-coding: green for Appalachian region, yellow for Midwest rift zones, orange for Rocky Mountains, and blue for West Coast. Include small icons showing the geological features needed: iron-rich rocks, underground water, cap rock formations. Add inset diagrams showing successful discoveries in Mali (Africa) and current exploration in France and Spain.' 
  },
  { type: 'h3', text: 'The Incredible Numbers' },
  { type: 'p', text: 'USGS estimates ~5.6 trillion tons of hydrogen might be trapped underground. Even if we recover 1%, that\'s enough to supply the world for 560 years.' },
  { type: 'h3', text: 'The Cost Advantage' },
  { type: 'p', text: 'Natural hydrogen could cost ~$1/kg (competitive with natural gas) vs $6/kg for green hydrogen.' },
  { type: 'h3', text: 'Recent Discoveries and Exploration' },
  { type: 'ul', items: ['France: High hydrogen concentrations in Bavaria.', 'USA: Midcontinent Rift is being investigated.', 'Albania: A chromite mine outgassing massive amounts of hydrogen.'] },
  { 
    type: 'image', 
    src: '/electrochemical-cells/global_hydrogen_map.png', 
    title: 'Illustration Prompt 11', 
    prompt: 'A world map with glowing points marking hydrogen discoveries and exploration sites: Mali (bright, showing active production), France (pulsing yellow), United States Midcontinent Rift (blue line), Albania (red dot), Spain Pyrenees (orange), Australia (green). Include small fact boxes for each major site with production rates or discovery details. Show drilling rigs at active sites and research icons at exploration sites.' 
  },
  { type: 'h3', text: 'Stimulated Production - The Next Frontier' },
  { type: 'p', text: 'MIT researchers are studying how to "farm" hydrogen by pumping water into iron-rich rocks, essentially accelerating the natural process.' },

  { type: 'h2', text: '7. The Challenges Ahead' },
  { type: 'p', text: 'Despite the promise, there are hurdles: Exploration (finding it), Technical (preventing leaks), Regulatory (no laws yet), and Economic (upfront costs).' },
  { 
    type: 'image', 
    src: '/electrochemical-cells/hydrogen_challenges.png', 
    title: 'Illustration Prompt 12', 
    prompt: 'A circular obstacle course diagram showing a hydrogen molecule character trying to reach "Widespread Adoption" at the center. Four barriers block the path: "Exploration Uncertainty" (fog clouds), "Technical Barriers" (leaky pipeline), "Regulatory Hurdles" (red tape), and "Economic Questions" (dollar signs). Show some barriers being overcome with solution icons: new sensors, advanced materials, policy documents, and investment graphs.' 
  },

  { type: 'h2', text: '8. The Future: A Hydrogen Economy?' },
  { type: 'h3', text: 'Scenarios' },
  { type: 'p', text: 'Best Case: By 2030, commercial wells exist. By 2040, heavy industry switches to hydrogen. By 2050, global pipeline networks.' },
  { type: 'p', text: 'Realistic Case: Natural hydrogen complements renewables, used mostly for heavy transport (ships, planes) and industry.' },
  { 
    type: 'image', 
    src: '/electrochemical-cells/hydrogen_future_city.png', 
    title: 'Illustration Prompt 13', 
    prompt: 'A futuristic cityscape split into three time periods (2030, 2040, 2050). Show progressive adoption: 2030 - a few hydrogen fuel cell buses and one hydrogen production facility; 2040 - hydrogen refueling stations, hydrogen-powered ships in harbor, industrial plants using hydrogen; 2050 - hydrogen pipelines visible, commercial aircraft with hydrogen tanks, widespread fuel cell vehicles, solar/wind farms connected to hydrogen production for energy storage. Keep it optimistic but realistic.' 
  },

  { type: 'h2', text: '9. Conclusion: From Two Simple Cells to Earth\'s Hidden Treasure' },
  { type: 'p', text: 'We started with voltaic and electrolytic cells. These principles led to fuel cells. Now, we find Nature has been running electrolytic cells underground for billions of years. If we can tap this, we unlock a zero-pollution, limitless fuel source.' },
  { 
    type: 'image', 
    src: '/electrochemical-cells/electrochemical_evolution.png', 
    title: 'Final Illustration Prompt 14', 
    prompt: 'A beautiful summarizing illustration showing the evolution/connection: Bottom level shows a simple voltaic cell (zinc-copper in beakers) with arrows pointing up to middle level showing a modern hydrogen fuel cell (sleek, technological), with arrows pointing to the top level showing a cutaway of Earth with natural hydrogen formation underground. Connect all three with glowing energy flows. On one side, show historical scientists (like Alessandro Volta) with thought bubbles, and on the other side, show modern researchers with drilling equipment. Above everything, show a clean, green Earth with the sun shining. Title it "From Discovery to Future: The Electrochemical Revolution."' 
  }
]

const quizData = {
  title: "Test Your Knowledge: Electrochemical Cells",
  questions: [
    {
      question: "What is the main function of a salt bridge in a voltaic cell?",
      options: ["To conduct electrons directly between electrodes", "To maintain electrical neutrality in the solutions", "To generate heat for the reaction", "To speed up the reaction rate"],
      correctAnswer: 1,
      explanation: "The salt bridge allows ions to flow between the two solutions, maintaining electrical neutrality so the reaction can continue."
    },
    {
      question: "In an electrolytic cell, the anode is connected to which terminal of the battery?",
      options: ["Negative", "Positive", "Neutral", "Ground"],
      correctAnswer: 1,
      explanation: "In an electrolytic cell, the anode is connected to the positive terminal of the battery, which pulls electrons away from it, causing oxidation."
    },
    {
      question: "Which type of hydrogen is produced using renewable electricity to split water?",
      options: ["Grey Hydrogen", "Blue Hydrogen", "Green Hydrogen", "Brown Hydrogen"],
      correctAnswer: 2,
      explanation: "Green Hydrogen is made by using renewable electricity to split water through electrolysis. It is the cleanest form."
    },
    {
      question: "Where was natural hydrogen accidentally discovered in 1987?",
      options: ["France", "USA", "Mali", "Albania"],
      correctAnswer: 2,
      explanation: "In 1987, workers in Bourakébougou, Mali, accidentally discovered natural hydrogen while drilling for water."
    },
    {
      question: "What are the only byproducts of a hydrogen fuel cell?",
      options: ["Carbon Dioxide and Water", "Water and Heat", "Methane and Ozone", "Oxygen and Nitrogen"],
      correctAnswer: 1,
      explanation: "A hydrogen fuel cell combines hydrogen and oxygen to produce electricity, with the only byproducts being pure water and heat."
    }
  ]
}

// --- HELPER FUNCTIONS ---

async function uploadImage(src: string) {
  const filePath = path.join(process.cwd(), 'public', src)
  console.log(`Uploading: ${filePath}`)
  try {
    const stream = createReadStream(filePath)
    const asset = await client.assets.upload('image', stream, {
      filename: path.basename(src)
    })
    return asset._id
  } catch (err) {
    console.error(`Failed to upload ${src}:`, err)
    return null
  }
}

// --- MAIN MIGRATION FUNCTION ---

async function migrateTopic() {
  console.log('🚀 Starting "Electrochemical Cells" migration...')
  
  const blockContent = []

  // 1. Process Article Content
  for (const item of articleData) {
    if (item.type === 'h2') {
      blockContent.push({ _type: 'block', style: 'h2', children: [{ _type: 'span', text: item.text }] })
    } else if (item.type === 'h3') {
      blockContent.push({ _type: 'block', style: 'h3', children: [{ _type: 'span', text: item.text }] })
    } else if (item.type === 'p') {
      blockContent.push({ _type: 'block', style: 'normal', children: [{ _type: 'span', text: item.text }] })
    } else if (item.type === 'blockquote') {
      // Split blockquotes by newlines for better formatting
      blockContent.push({ _type: 'block', style: 'blockquote', children: [{ _type: 'span', text: item.text }] })
    } else if (item.type === 'ul') {
      item.items.forEach(li => {
        blockContent.push({ _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: li }] })
      })
    } else if (item.type === 'image') {
      const assetId = await uploadImage(item.src)
      if (assetId) {
        blockContent.push({
          _type: 'illustration',
          _key: crypto.randomUUID(),
          title: item.title,
          prompt: item.prompt,
          image: {
            _type: 'image',
            asset: { _type: 'reference', _ref: assetId }
          }
        })
      }
    }
  }

  // 2. Add Quiz at the end
  blockContent.push({
    _type: 'embeddedQuiz',
    _key: crypto.randomUUID(),
    title: quizData.title,
    questions: quizData.questions.map(q => ({
      _key: crypto.randomUUID(),
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation
    }))
  })

  // 3. Create Document
  const doc = {
    _type: 'topic',
    title: 'The Electrochemical Revolution: From Simple Cells to Earth\'s Hidden Energy Treasure',
    slug: { _type: 'slug', current: 'electrochemical-cells' },
    body: blockContent
  }

  try {
    const result = await client.createOrReplace({ ...doc, _id: 'topic-electrochemical-cells' }) // Setting explicit ID for ease
    console.log(`✅ Topic Created Successfully! ID: ${result._id}`)
  } catch (err) {
    console.error('❌ Failed to create topic:', err)
  }
}

migrateTopic()