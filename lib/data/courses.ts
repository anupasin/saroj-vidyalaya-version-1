import type { Course } from "@/lib/types/course";

export const courses: Course[] = [
  {
    subject: "mathematics",
    title: "Mathematics",
    description: "Discover the magic of numbers through fun analogies and interactive lessons",
    lessons: [
      {
        title: "Numbers Are Like Building Blocks",
        content:
          "Just like you build a tower with blocks, numbers help us build and understand the world around us. Each number is like a special block that has its own place and purpose.",
        analogy:
          "Think of the number 1 as a single block. When you add another block (1 + 1), you get 2 blocks. Keep adding, and you can build amazing structures!",
        example:
          "If you have 3 apples and your friend gives you 2 more, you now have 5 apples. That's 3 + 2 = 5!",
        order: 1,
      },
      {
        title: "Addition: Putting Things Together",
        content:
          "Addition is like gathering your toys together. When you combine two groups, you're adding them up to see how many you have in total.",
        analogy:
          "Imagine you have 4 red marbles and 3 blue marbles. When you put them all in one bag, you're adding them together: 4 + 3 = 7 marbles!",
        example:
          "If you read 2 books on Monday and 3 books on Tuesday, you've read 2 + 3 = 5 books in total.",
        order: 2,
      },
      {
        title: "Subtraction: Taking Things Away",
        content:
          "Subtraction is like sharing or giving away. When you have something and take some away, you're subtracting to see what's left.",
        analogy:
          "If you have 10 cookies and you eat 3 of them, you're subtracting. You started with 10, took away 3, and now have 7 left: 10 - 3 = 7!",
        example:
          "You have 8 stickers. You give 2 to your friend. How many do you have left? 8 - 2 = 6 stickers!",
        order: 3,
      },
      {
        title: "Multiplication: Groups of Things",
        content:
          "Multiplication is like having groups of the same thing. Instead of counting one by one, you can count groups to find the total faster!",
        analogy:
          "Imagine you have 3 boxes, and each box has 4 candies. Instead of counting 4 + 4 + 4, you can say 3 groups of 4, which is 3 × 4 = 12 candies!",
        example:
          "If you have 5 rows of flowers and each row has 3 flowers, you have 5 × 3 = 15 flowers in total!",
        order: 4,
      },
      {
        title: "Division: Sharing Fairly",
        content:
          "Division is like sharing things equally among friends. You take a big group and split it into smaller equal groups.",
        analogy:
          "If you have 12 cookies and want to share them equally with 3 friends, you divide: 12 ÷ 3 = 4. Each friend gets 4 cookies!",
        example:
          "You have 20 stickers and want to put them in 4 equal groups. How many stickers in each group? 20 ÷ 4 = 5 stickers per group!",
        order: 5,
      },
    ],
    quiz: {
      title: "Math Quiz: Test Your Number Skills!",
      questions: [
        {
          question:
            "If you have 5 apples and your friend gives you 3 more, how many apples do you have in total?",
          options: ["6 apples", "7 apples", "8 apples", "9 apples"],
          correctAnswer: 2,
          explanation:
            "Great job! When you add 5 + 3, you get 8. Addition is like putting things together!",
        },
        {
          question:
            "You have 10 cookies and you eat 4 of them. How many cookies are left?",
          options: ["4 cookies", "5 cookies", "6 cookies", "7 cookies"],
          correctAnswer: 2,
          explanation:
            "Excellent! 10 - 4 = 6. Subtraction is like taking things away!",
        },
        {
          question: "What is 2 + 2?",
          options: ["3", "4", "5", "6"],
          correctAnswer: 1,
          explanation: "Perfect! 2 + 2 = 4. You're becoming a math whiz!",
        },
        {
          question:
            "If you have 7 marbles and you give away 2, how many do you have left?",
          options: ["4 marbles", "5 marbles", "6 marbles", "7 marbles"],
          correctAnswer: 1,
          explanation: "Wonderful! 7 - 2 = 5. You're mastering subtraction!",
        },
        {
          question: "What is 3 × 4?",
          options: ["10", "11", "12", "13"],
          correctAnswer: 2,
          explanation:
            "Fantastic! 3 × 4 = 12. That's 3 groups of 4 things each!",
        },
        {
          question: "If you have 15 candies and share them equally among 3 friends, how many does each friend get?",
          options: ["3 candies", "4 candies", "5 candies", "6 candies"],
          correctAnswer: 2,
          explanation: "Amazing! 15 ÷ 3 = 5. Division is like sharing fairly!",
        },
      ],
    },
  },
  {
    subject: "english",
    title: "English",
    description: "Explore language and storytelling with engaging activities",
    lessons: [
      {
        title: "Words Are Like Magic Keys",
        content:
          "Every word you learn is like a magic key that opens new doors to understanding and expressing yourself. The more words you know, the more doors you can open!",
        analogy:
          "Think of your vocabulary as a treasure chest. Each new word you learn is a precious gem that makes your treasure chest more valuable and beautiful.",
        example:
          "Instead of saying 'big,' you could say 'enormous,' 'huge,' or 'gigantic' - each word paints a slightly different picture!",
        order: 1,
      },
      {
        title: "Sentences: Building Stories",
        content:
          "Words are like individual bricks, but sentences are like the walls of a house. When you put words together in the right order, you build something meaningful and complete.",
        analogy:
          "Just like a recipe needs ingredients in the right order to make a delicious cake, a sentence needs words in the right order to make sense and tell a story.",
        example:
          "'The cat sat on the mat' tells a complete story. But 'cat the mat on sat the' doesn't make sense - the order matters!",
        order: 2,
      },
      {
        title: "Nouns: Naming Everything",
        content:
          "Nouns are words that name people, places, things, or ideas. They're like labels that help us identify what we're talking about!",
        analogy:
          "Think of nouns as name tags. Just like you wear a name tag so people know who you are, nouns help us know what we're talking about - whether it's a person, a place, or a thing.",
        example:
          "Words like 'dog,' 'school,' 'friend,' and 'happiness' are all nouns. They name things we can see, places we can go, or feelings we can have!",
        order: 3,
      },
      {
        title: "Verbs: Action Words",
        content:
          "Verbs are action words that tell us what someone or something is doing. They're the engines that make sentences move!",
        analogy:
          "If nouns are the characters in a story, verbs are the actions they perform. Just like a car needs an engine to move, a sentence needs a verb to show action!",
        example:
          "Words like 'run,' 'jump,' 'think,' and 'laugh' are verbs. They show what's happening: 'The cat runs,' 'I jump high,' 'We think carefully.'",
        order: 4,
      },
      {
        title: "Reading: Discovering New Worlds",
        content:
          "Reading is like having a magic window to anywhere in the world, any time in history, or even to imaginary places that don't exist!",
        analogy:
          "Books are like time machines and teleportation devices combined. When you read, you can visit ancient Egypt, fly to outer space, or meet talking animals - all without leaving your chair!",
        example:
          "When you read 'The cat sat on the mat,' your mind creates a picture. You can see the cat, the mat, and imagine what they look like - that's the magic of reading!",
        order: 5,
      },
    ],
    quiz: {
      title: "English Quiz: Test Your Language Skills!",
      questions: [
        {
          question: "What is a noun?",
          options: [
            "An action word",
            "A word that names a person, place, or thing",
            "A describing word",
            "A connecting word",
          ],
          correctAnswer: 1,
          explanation:
            "Great! Nouns are words that name people, places, things, or ideas. They're like labels!",
        },
        {
          question: "Which word is a verb?",
          options: ["cat", "happy", "run", "beautiful"],
          correctAnswer: 2,
          explanation:
            "Excellent! 'Run' is a verb because it shows action. Verbs are action words!",
        },
        {
          question: "What makes a complete sentence?",
          options: [
            "Just a noun",
            "Just a verb",
            "A noun and a verb together",
            "Any group of words",
          ],
          correctAnswer: 2,
          explanation:
            "Perfect! A complete sentence needs at least a noun (who or what) and a verb (what they do)!",
        },
        {
          question: "Why is reading important?",
          options: [
            "It helps you learn new words",
            "It takes you to new places and times",
            "It helps you understand stories",
            "All of the above",
          ],
          correctAnswer: 3,
          explanation:
            "Wonderful! Reading does all of these things - it's like having a superpower!",
        },
      ],
    },
  },
  {
    subject: "coding",
    title: "Coding",
    description: "Learn to think like a programmer with simple, fun exercises",
    lessons: [
      {
        title: "What is Coding?",
        content:
          "Coding is like giving instructions to a computer, just like you give instructions to a friend. But computers need very clear, step-by-step instructions!",
        analogy:
          "Imagine you're teaching a robot how to make a sandwich. You can't just say 'make a sandwich' - you need to say 'take two slices of bread, spread butter on one slice, add cheese, put the other slice on top.' Coding works the same way!",
        example:
          "When you tell a computer to draw a circle, you need to say: 'Start at the center, move in a circle shape, and connect back to the start.' Every step must be clear!",
        order: 1,
      },
      {
        title: "Sequences: Following Steps in Order",
        content:
          "In coding, the order of instructions matters a lot! Just like following a recipe, you need to do things in the right sequence.",
        analogy:
          "Think of making a cake. You can't put it in the oven before you mix the ingredients! In coding, you also need to do things in the right order: first get the ingredients (data), then mix them (process), then bake (display the result).",
        example:
          "To draw a house, you must: 1) Draw the base (rectangle), 2) Draw the roof (triangle), 3) Draw the door, 4) Draw windows. If you draw the roof first, it won't sit on top of the base!",
        order: 2,
      },
      {
        title: "Loops: Doing Things Again",
        content:
          "Loops let you repeat actions without writing the same instruction over and over. It's like having a magic button that repeats something for you!",
        analogy:
          "Imagine you need to sing 'Happy Birthday' 10 times. Instead of writing it 10 times, you can say 'repeat this song 10 times' - that's a loop! It saves time and makes things easier.",
        example:
          "If you want to draw 5 stars, instead of writing 'draw star' five times, you can use a loop: 'repeat 5 times: draw a star.' The computer will draw 5 stars automatically!",
        order: 3,
      },
      {
        title: "Variables: Remembering Things",
        content:
          "Variables are like labeled boxes where you can store information. The computer remembers what you put in the box and can use it later!",
        analogy:
          "Think of variables like labeled boxes in your room. You might have a box labeled 'favorite color' with 'blue' inside, or a box labeled 'age' with '8' inside. The computer can look inside these boxes whenever it needs that information.",
        example:
          "You can create a variable called 'name' and put 'Alex' in it. Later, when the computer needs to say hello, it can use the name from the box: 'Hello, Alex!'",
        order: 4,
      },
    ],
    quiz: {
      title: "Coding Quiz: Test Your Programming Knowledge!",
      questions: [
        {
          question: "What is coding?",
          options: [
            "Playing games on a computer",
            "Giving clear, step-by-step instructions to a computer",
            "Typing really fast",
            "Drawing pictures",
          ],
          correctAnswer: 1,
          explanation:
            "Great! Coding is all about giving clear instructions to computers, just like teaching a robot!",
        },
        {
          question: "Why is the order of instructions important in coding?",
          options: [
            "It doesn't matter",
            "Computers need steps in the right sequence to work correctly",
            "It makes the code look prettier",
            "It's just a rule with no reason",
          ],
          correctAnswer: 1,
          explanation:
            "Excellent! Just like following a recipe, computers need steps in the right order to work correctly!",
        },
        {
          question: "What is a loop used for?",
          options: [
            "To skip instructions",
            "To repeat actions without writing them multiple times",
            "To make the code faster",
            "To delete code",
          ],
          correctAnswer: 1,
          explanation:
            "Perfect! Loops help you repeat actions - like having a magic repeat button!",
        },
        {
          question: "What is a variable?",
          options: [
            "Something that changes all the time",
            "A labeled box where you store information",
            "A type of loop",
            "A coding mistake",
          ],
          correctAnswer: 1,
          explanation:
            "Wonderful! Variables are like labeled boxes where the computer remembers information for you!",
        },
      ],
    },
  },
  {
    subject: "geography",
    title: "Geography",
    description: "Travel the world from your screen and learn about our planet",
    lessons: [
      {
        title: "Our Planet Earth",
        content:
          "Earth is our home - a beautiful blue and green planet floating in space! It's made up of continents (big land masses) and oceans (huge bodies of water).",
        analogy:
          "Think of Earth like a giant puzzle. The continents are the big puzzle pieces (land), and the oceans are the spaces between them (water). Together, they make up our whole planet!",
        example:
          "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia. And 5 major oceans: Pacific, Atlantic, Indian, Southern, and Arctic!",
        order: 1,
      },
      {
        title: "Countries and Cities",
        content:
          "Countries are like big neighborhoods, and cities are like smaller communities within them. Each country has its own name, flag, and special characteristics!",
        analogy:
          "Imagine your house is a city. Your street is like a state or region. Your country is like your whole neighborhood. And the world is like the entire city with many neighborhoods!",
        example:
          "India is a country with many cities like Mumbai, Delhi, and Bangalore. The United States is another country with cities like New York, Los Angeles, and Chicago!",
        order: 2,
      },
      {
        title: "Weather and Climate",
        content:
          "Weather is what's happening outside right now (sunny, rainy, snowy), while climate is the usual weather pattern of a place over a long time.",
        analogy:
          "Weather is like what you're wearing today (maybe a jacket because it's cold). Climate is like your whole wardrobe - if you live in a cold place, you have lots of warm clothes!",
        example:
          "Today might be sunny (that's weather), but if you live in a desert, the climate is usually hot and dry. If you live near the North Pole, the climate is usually very cold!",
        order: 3,
      },
      {
        title: "Maps: Reading the World",
        content:
          "Maps are like pictures that show us where places are. They help us understand the world and find our way around, just like a treasure map shows where treasure is hidden!",
        analogy:
          "A map is like a bird's-eye view of the world. Imagine a bird flying high above and drawing a picture of what it sees - that's what a map is! It shows us where mountains, rivers, cities, and countries are located.",
        example:
          "On a map, you might see that the Amazon River flows through South America, or that Mount Everest is in Asia. Maps use colors, symbols, and labels to help us understand geography!",
        order: 4,
      },
    ],
    quiz: {
      title: "Geography Quiz: Test Your World Knowledge!",
      questions: [
        {
          question: "How many continents are there on Earth?",
          options: ["5", "6", "7", "8"],
          correctAnswer: 2,
          explanation:
            "Great! There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia!",
        },
        {
          question: "What is the difference between weather and climate?",
          options: [
            "They're the same thing",
            "Weather is right now, climate is long-term patterns",
            "Weather is hot, climate is cold",
            "There's no difference",
          ],
          correctAnswer: 1,
          explanation:
            "Excellent! Weather is what's happening today, while climate is the usual pattern over many years!",
        },
        {
          question: "What is a map?",
          options: [
            "A picture of the sky",
            "A drawing that shows where places are located",
            "A type of weather",
            "A country name",
          ],
          correctAnswer: 1,
          explanation:
            "Perfect! Maps are like bird's-eye view pictures that help us understand where places are!",
        },
        {
          question: "Which is bigger: a country or a city?",
          options: [
            "A city",
            "A country",
            "They're the same size",
            "It depends",
          ],
          correctAnswer: 1,
          explanation:
            "Wonderful! A country is like a big neighborhood, and cities are smaller communities within it!",
        },
      ],
    },
  },
  {
    subject: "general-knowledge",
    title: "General Knowledge",
    description: "Expand your mind with fascinating facts and interesting topics",
    lessons: [
      {
        title: "Amazing Animals",
        content:
          "Animals are incredible! Each animal has special abilities and characteristics that help them survive and thrive in their homes. Learning about animals helps us understand the amazing diversity of life on Earth.",
        analogy:
          "Think of animals like different superheroes, each with their own special powers. A cheetah has super speed, an eagle has super vision, and a dolphin has super hearing!",
        example:
          "Did you know that elephants can remember things for many years? Or that hummingbirds can fly backwards? Or that octopuses have three hearts? Animals are full of surprises!",
        order: 1,
      },
      {
        title: "Inventions That Changed the World",
        content:
          "Throughout history, people have created amazing inventions that changed how we live. These inventions started as ideas and became tools that make our lives easier and more interesting!",
        analogy:
          "Inventions are like solving puzzles. Someone sees a problem (like 'how do we talk to people far away?') and creates a solution (like the telephone). Each invention builds on previous ideas!",
        example:
          "The wheel helped us move things easily. The printing press helped us share knowledge. The internet helps us connect with people all over the world. Each invention opened new possibilities!",
        order: 2,
      },
      {
        title: "Famous Places Around the World",
        content:
          "Our world is full of amazing places - from ancient wonders to modern marvels. These special places tell stories about history, culture, and human creativity!",
        analogy:
          "Famous places are like storybooks made of stone, metal, or nature. When you visit them (or learn about them), you're reading a chapter of human history!",
        example:
          "The Great Wall of China was built to protect an empire. The Eiffel Tower in Paris shows human engineering. The Grand Canyon shows the power of nature over millions of years!",
        order: 3,
      },
      {
        title: "How Things Work",
        content:
          "Everything around us works in interesting ways! Understanding how everyday things work helps us appreciate the world and sparks curiosity about science and technology.",
        analogy:
          "Learning how things work is like being a detective. You look at something (like a light bulb) and ask 'how does this work?' Then you discover the amazing science behind it!",
        example:
          "A light bulb works because electricity flows through a special wire that gets so hot it glows. A bicycle works because when you pedal, you turn wheels that move you forward. Everything has a reason!",
        order: 4,
      },
    ],
    quiz: {
      title: "General Knowledge Quiz: Test What You Know!",
      questions: [
        {
          question: "What special ability do elephants have?",
          options: [
            "They can fly",
            "They can remember things for many years",
            "They can change colors",
            "They can breathe underwater",
          ],
          correctAnswer: 1,
          explanation:
            "Great! Elephants have amazing memories and can remember things for many, many years!",
        },
        {
          question: "What did the invention of the wheel help us do?",
          options: [
            "Talk to people far away",
            "Move things more easily",
            "See in the dark",
            "Fly in the air",
          ],
          correctAnswer: 1,
          explanation:
            "Excellent! The wheel was one of the most important inventions because it made moving things much easier!",
        },
        {
          question: "What is the Great Wall of China?",
          options: [
            "A modern building",
            "An ancient wall built to protect an empire",
            "A type of food",
            "A river",
          ],
          correctAnswer: 1,
          explanation:
            "Perfect! The Great Wall is an ancient wonder that was built to protect China from invaders!",
        },
        {
          question: "Why does a light bulb glow?",
          options: [
            "Because it's magic",
            "Because electricity flows through a wire that gets hot",
            "Because it's painted bright",
            "Because it reflects light",
          ],
          correctAnswer: 1,
          explanation:
            "Wonderful! When electricity flows through the special wire in a light bulb, it gets so hot that it glows with light!",
        },
      ],
    },
  },
  {
    subject: "science",
    title: "Science",
    description: "Physics, Chemistry, and Biology made simple and exciting",
    lessons: [
      {
        title: "Forces and Motion",
        content:
          "Forces are pushes and pulls that make things move, stop, or change direction. Everything around us is affected by forces, especially gravity - the invisible force that pulls things toward Earth!",
        analogy:
          "Think of forces like invisible hands. When you push a swing, your hands are the force. Gravity is like an invisible hand that always pulls things down toward the ground. That's why when you jump, you come back down!",
        example:
          "When you kick a ball, your foot applies a force that makes it move. When the ball hits the ground, the ground pushes back (another force) and the ball bounces. Forces are everywhere!",
        order: 1,
      },
      {
        title: "States of Matter",
        content:
          "Everything around us is made of matter, and matter can exist in three main states: solid (like ice), liquid (like water), and gas (like steam). The same thing can change between these states!",
        analogy:
          "Think of water as a shape-shifter. When it's frozen (ice), it's solid and keeps its shape. When it's liquid (water), it flows and takes the shape of its container. When it's steam (gas), it floats away and spreads out!",
        example:
          "Ice (solid) melts into water (liquid) when it gets warm. Water (liquid) turns into steam (gas) when it gets very hot. Steam (gas) turns back into water (liquid) when it cools down. It's the same water, just in different forms!",
        order: 2,
      },
      {
        title: "Living Things",
        content:
          "Living things are all around us - plants, animals, and people! All living things need certain things to survive: food, water, air, and a place to live. They also grow, reproduce, and respond to their environment.",
        analogy:
          "Think of living things like a checklist. To be alive, something needs to: eat (get energy), breathe (get air), grow (get bigger), and make more of itself (reproduce). If it does all these things, it's alive!",
        example:
          "A tree is alive because it grows, makes seeds (reproduces), needs water and sunlight, and responds to the seasons. A rock is not alive because it doesn't grow, eat, or reproduce - it just sits there!",
        order: 3,
      },
      {
        title: "Simple Experiments",
        content:
          "Science is all about asking questions and trying things out! Simple experiments help us understand how the world works. The best experiments are safe, fun, and teach us something new!",
        analogy:
          "Doing an experiment is like being a detective. You have a question (like 'what happens if I mix these?'), you try it out (the experiment), and you see what happens (the result). That's how scientists learn!",
        example:
          "Try this safe experiment: Mix baking soda and vinegar in a bowl. Watch what happens - it fizzes and bubbles! This happens because they create a gas called carbon dioxide. That's chemistry in action!",
        order: 4,
      },
    ],
    quiz: {
      title: "Science Quiz: Test Your Scientific Knowledge!",
      questions: [
        {
          question: "What is gravity?",
          options: [
            "A type of food",
            "An invisible force that pulls things toward Earth",
            "A color",
            "A sound",
          ],
          correctAnswer: 1,
          explanation:
            "Great! Gravity is the invisible force that pulls everything toward Earth - that's why things fall down!",
        },
        {
          question: "What are the three main states of matter?",
          options: [
            "Hot, warm, cold",
            "Big, medium, small",
            "Solid, liquid, gas",
            "Red, blue, green",
          ],
          correctAnswer: 2,
          explanation:
            "Excellent! Matter can be solid (like ice), liquid (like water), or gas (like steam)!",
        },
        {
          question: "What do all living things need?",
          options: [
            "Just water",
            "Food, water, air, and a place to live",
            "Just air",
            "Nothing special",
          ],
          correctAnswer: 1,
          explanation:
            "Perfect! All living things need food for energy, water to survive, air to breathe, and a place to call home!",
        },
        {
          question: "What happens when you mix baking soda and vinegar?",
          options: [
            "Nothing",
            "It turns into gold",
            "It fizzes and creates bubbles (carbon dioxide gas)",
            "It becomes solid",
          ],
          correctAnswer: 2,
          explanation:
            "Wonderful! When baking soda and vinegar mix, they create a chemical reaction that makes bubbles of carbon dioxide gas - that's chemistry!",
        },
      ],
    },
  },
];

