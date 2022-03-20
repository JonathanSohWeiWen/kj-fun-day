import GameDescription from "../interface/gameDescription";

export const GAME_LIST: GameDescription[] = [
  {
    name: "Reversi",
    requiresFacilitator: true,
    description:
      "Flip as many pieces in the time limit such that the pieces in the team’s colour is facing upwards",
    instructions: [
      "The team will line up behind the start point. The first player will run up to the table and play scissors-paper-stone with the gamemaster.",
      [
        "P3/P4: If the gamemaster wins, he/she will have 5 seconds to flip the pieces to their colour. If the child wins, they will have 10 seconds to flip the pieces to their teams colour.",
        "P5/P6: If the gamemaster wins, he/she will have 10 seconds to flip the pieces to their colour. If the child wins, they will have 10 seconds to flip the pieces to their teams colour.",
      ],
      "After which, they will have to play another round of scissors-paper-stone with the gamemaster.",
      "Once the child loses, they will have to run back to their team and tag in the next player who then runs to the table to play with the gamemaster.",
    ],
    pointSystem: {
      upperPrimary: "10 points for every reversi piece in the groups color",
    },
  },
  {
    name: "Defying Gravity",
    requiresFacilitator: false,
    description: "Keep the balloons in the air",
    instructions: [
      "Using part of their body, keep the balloons from touching the floor",
      [
        "P3/P4: Intertwined fingers (volleyball dig pose) or legs/feet",
        "P5/P6: Legs and feet only",
      ],
      "Start off with 2 balloons & gradually add an additional balloon every 20s. Game stops when 1 balloon touches the floor",
      "When group size = n",
      "Maximum amount of balloons = n - 2",
    ],
    pointSystem: {
      lowerPrimary: [
        "10 points: 0 - 30 seconds",
        "20 points: 31s-1 minute",
        "30 points: >1 minute",
      ],
      upperPrimary: "Time based: 5 points for every 10 seconds",
    },
  },
  // {
  //   name: "Mirror the Pose",
  //   requiresFacilitator: false,
  //   description: "Copy the poses in the photo",
  //   instructions: [
  //     "The facilitator will show the team a photo which they will then have to recreate. The team has 3 minutes to strategize and 30 seconds to memorize the poses",
  //     "After which, they must recreate the photo as accurately as possible and the facilitator will decide if they receive a maximum of 5 points.",
  //     "The team will be shown a total of 4 pictures",
  //   ],
  //   pointSystem: {
  //     lowerPrimary: [
  //       "10 points: 0-6 points",
  //       "20 points: 7-13 points",
  //       "30 points: 14-20 points",
  //     ],
  //     // upperPrimary:
  //     //   "points accumulated from all the poses with a maximum of 5 per pose",
  //   },
  // },
  {
    name: "Broken Telephone",
    requiresFacilitator: false,
    description:
      "The last person in the line has to correctly guess the drawing that was relayed from the first person without verbal communication. The aim is to score as many correctly in the time allocated.",
    instructions: [
      "All players will stand in 1 line facing the same direction.",
      "The first person in the line will receive the word from the facilitator (hints can be given to younger ones if needed).",
      "The first player then has 10 seconds to draw.",
      "After the 10 seconds, the first player has to stop drawing and has to show the drawing to the second player, who will in turn draw on their own paper.",
      "Upon seeing the drawing, the second player has to turn back around and draw based on their memory and what they think the drawing is.",
      "This carries on until it reaches the last player who has to correctly guess the given word based on the drawing/ acting.",
      "Regardless of whether the answer is correct/incorrect, the game continues until the time is up.",
    ],
    pointSystem: {
      upperPrimary: "10 points for every correct word",
    },
    examples:
      "paper clip, elephant, pencil, farm, present, cookie, chicken, donkey, pig, windmill, cannon, soldier, swimming pool, beach, cleaner, roller coaster",
  },
  // {
  //   name: "Riddle Objective",
  //   requiresFacilitator: false,
  //   description: "The group has to guess as many riddles as possible.",
  //   instructions: [
  //     "The gamemaster tells the group a riddle describing a pre-selected object in the room.",
  //     "The group gets some time to guess it right.",
  //     "If the time limit is up and they can’t figure it out, move on to the next riddle.",
  //     "At the end of the game, see how many riddles they have guessed right.",
  //   ],
  //   pointSystem: { upperPrimary: "10 points for every correct item" },
  // },
  {
    name: "No Hand Cup Stacker",
    requiresFacilitator: false,
    description:
      "To build a pyramid with paper cups. Group members are not allowed to touch the cups with any part of their bodies, even if a cup falls.",
    instructions: [
      "Each member holds onto one of the strings that are attached to the rubber band.",
      "Use the stringd (tension) to pick the cups and place them on top of each other (by pulling the rubber band apart and then bringing it back together over the cups).",
      "P3/P4: 5 minutes to complete the objective.",
      "P5/P6: 3 minutes to complete the objective.",
    ],
    pointSystem: { upperPrimary: "15 points for each level" },
  },
  // {
  //   name: "Fingertip Hula Hoop",
  //   requiresFacilitator: false,
  //   description: "Raise the Hula Hoop with just their fingertips as a group.",
  //   instructions: [
  //     "All members must have only their fingertip touching the hula hoop and to raise it to 1m high.",
  //     "Once any member’s finger loses contact with the hula hoop, they have to restart from the bottom",
  //   ],
  //   pointSystem: {
  //     lowerPrimary: [
  //       "10 points: able to do it",
  //       "20 points: able to do it with only 3-4 resets",
  //       "30 points: able to do it with 0-2 resets",
  //     ],
  //     upperPrimary: "Starts with 100 points. -10 points for every reset",
  //   },
  // },
  {
    name: "Mini Basketball",
    requiresFacilitator: false,
    description:
      "Score as many points as possible by shooting a ball into a basketball hoop.",
    instructions: [
      "Line up and take turns to shoot the balls",
      "Time limit of 3 minutes",
    ],
    pointSystem: { upperPrimary: "2 points for every goal made" },
  },
  {
    name: "Backward Bowling",
    requiresFacilitator: false,
    description: "Hit as many pins as possible",
    instructions: [
      "Line up and take turns to bowl the ball",
      "Bowling must be done backwards, where player faces away from the pins at all times",
      "Time limit of 6 minutes",
    ],
    pointSystem: {
      lowerPrimary: [
        "Average of 1-3 pins knocked down for the group: 10 points",
        "Average of 4-7 pins knocked down for the group: 20 points",
        "Average of 8-10 pins knocked down for the group: 30 points",
      ],
      upperPrimary: "2 points for every pin knocked down",
    },
  },
  // {
  //   name: "Blinded jigsaw",
  //   requiresFacilitator: false,
  //   description: "To complete the jigsaw blindfolded with the help of friends.",
  //   instructions: [
  //     "One member is blindfolded and required to complete the jigsaw puzzle with his team members giving him verbal instruction",
  //     "The team members are not allowed to touch the blindfolded member or any of the jigsaw.",
  //     "Time limit of 5 minutes",
  //   ],
  //   pointSystem: {
  //     upperPrimary: "Starts with 200 points. -2 points for every second used",
  //   },
  // },
  {
    name: "Line up",
    requiresFacilitator: false,
    description: "To line up according to various parameters without talking",
    instructions: [
      "Line up according to the criteria the game master sets out",
      "The faster you complete each task, the more points you will receive",
      "Time limit of 5 minutes",
    ],
    pointSystem: { upperPrimary: "20 points for every task cleared" },
    examples:
      "Name alphabetically, height, number of siblings - can play around with age gap, birth position, etc, School name alphabetically, Birthday",
  },
  // {
  //   name: "Charades",
  //   requiresFacilitator: false,
  //   description:
  //     "Children are supposed to guess the word/phrase based on everyone's action.",
  //   instructions: [
  //     "Guesser goes and sits on a chair opposite the rest of the group.",
  //     "Another member of the group (displayer) will hold up the word above the guesser’s head.",
  //     "Group acts out the word/phrase.",
  //     "Once guessed/skipped, guesser becomes the new displayer and a new child becomes the guesser.",
  //     "Time limit of 5 minutes",
  //   ],
  //   pointSystem: { upperPrimary: "5 points for every correct guess" },
  // },
  {
    name: "Matching Pairs",
    requiresFacilitator: false,
    description: "Flip over matching pair of cards without any mistakes.",
    instructions: [
      "Children opens two cards",
      "If pair of cards displayed are matching, next child opens another pair.",
      "Repeat the process until all cards are opened with every pair matching.",
      "Lower Primary: if a pair of cards fail to match, turn over the mismatching cards and continue.",
      "Upper Primary: if a pair of cards fail to match, turn over all cards and start again from the beginning.",
      "Time limit of 5 minutes",
    ],
    pointSystem: {
      lowerPrimary: [
        "0-1 times completed: 10 points",
        "2-3 times completed: 20 points",
        "4+ times completed: 30 points",
      ],
      upperPrimary: "Starts with 200 points. -2 points for every second used",
    },
  },
  {
    name: "Tongue Twister",
    requiresFacilitator: false,
    description:
      "Say a tongue twister as fast as possible without any mistakes.",
    instructions: [
      "The first child needs to say a randomly assigned tongue twister perfectly.",
      "Once successfully completed, process repeats with the next child until all children successfully complete it",
    ],
    pointSystem: {
      upperPrimary:
        "10 points for each tongue twister that the whole group completes",
    },
    examples:
      "Peter Piper picked a peck of pickled pepper. A peck of pickled peppers Peter Piper picked. If Peter Piper picked a peck of pickled peppers, where’s the peck of pickled pepper Peter Piper picked?\nHow much wood would a woodchuck chuck if a woodchuck could chuck wood? He would chuck, he would, as much as he could, and chuck as much wood as a woodchuck would if a woodchuck could chuck wood.\nI thought a thought. But the thought I thought wasn’t the thought I thought I thought. If the thought I thought I thought had been the thought I thought, I wouldn’t have thought so much.\nAmidst the mists and coldest frosts, with stoutest wrists and loudest boasts, he thrusts his fits against the posts, and still insists he sees the ghosts.\nBetty Botter bought some butter but she said the butter’s bitter. If i put it in my batter, it will make my batter bitter but a bit of better butter will make my batter better. So ‘twas better Betty Botter bought a bit of better butter.\nSilly Sally swiftly shooed seven silly sheep. The seven silly sheep Silly Sally shooed Shilly-Shallied South. These sheep shouldn’t sleep in a shack, sheep should sleep in a shed.\nShe sells seashells by the seashore. The shells she sells are surely seashells. So if she sells shells on the seashore, I’m sure she sells seashore shells.",
  },
  {
    name: "Pick up Bean Relay",
    requiresFacilitator: false,
    description:
      "Pass the bean along from start to end without dropping in the fastest amount of time possible without dropping",
    instructions: [
      "Children need to pick up a bean from a plate and pass it to the next child’s plate/chopstick without dropping.",
      "If the bean is dropped, the previous player picks up and carries on, with 10 seconds added to the timer",
    ],
    pointSystem: {
      upperPrimary:
        "Starts with 200 points. Minus 5 points for every 10 seconds",
    },
  },
  {
    name: "Bottle Cap Flick",
    requiresFacilitator: false,
    description:
      "Flick the bottle cap as close to the line as possible without crossing it.",
    instructions: [
      "Children will take turns flicking bottle caps as close to the finish line as possible.",
      "Any bottle caps that cross the line will be considered invalid.",
      "A total of 10 tries (children can repeat)",
      "Points are for each bottle cap touching the finish line",
    ],
    pointSystem: {
      lowerPrimary: ["Zone 1: 2 points", "Zone 2: 5 points, Zone 3: 10 points"],
      upperPrimary: "50 points for every bottle cap on the line",
    },
  },
  {
    name: "Jenga Bomb",
    requiresFacilitator: false,
    description:
      "Continue to stack the jenga pieces without the jenga tower coming. THIS IS A CONTINUOUS GAME - ONCE THE TASK IS COMPLETED, THE JENGA TOWER IS LEFT IN ITS CURRENT STATE FOR THE NEXT GROUP THAT LANDS ON IT UNTIL IT COLLAPSES",
    instructions: [
      "Pull the jenga tower piece out from the tower and stack it on top without it falling",
      ["P3/P4: can use 2 hands", "P5/P6: can use only 1 hand"],
      "If the tower collapses, group pays $50 missionary funds to the heavenly gatekeeper",
      "Number of jenga pieces to pull out depends on the dice roll",
    ],
    pointSystem: {
      upperPrimary: "If the tower collapses, group minus 50 points",
    },
  },
  // {
  //   name: "Word Jigsaw",
  //   requiresFacilitator: false,
  //   description: "Arrange the words/letters in order in the fastest time",
  //   instructions: [
  //     "Strips of paper with words/letters on them are given to the children. Children are supposed to arrange it in accordance to the memory verse",
  //     "Memory verse reference is only given 1 minute into the game",
  //     "Reference to the bible is only allowed 3 minutes into the game",
  //     [
  //       "P3/P4: cut and jumble according to individual words",
  //       "P5/P6: cut and jumble according to every 3 characters. E.g. Jesus is broken up into Jes & us[space]",
  //     ],
  //   ],
  //   pointSystem: {
  //     upperPrimary:
  //       "Starts with 200 points. Minus 5 points for every 10 seconds",
  //   },
  // },
  {
    name: "Boggle",
    requiresFacilitator: false,
    description:
      "To form as many words as possible by joining connecting letters",
    instructions: [
      "Boggle board is messed up and hidden from view",
      "When the boggle board is revealed, children has 1 minute to form as many words as they can",
      "When the time ends, count the total number of unique words the children can find",
      "Words can only be formed by connecting letters",
      [
        "Diagonal joins are allowed",
        "Cannot reuse same letter tile (a different tile of the same letter can be used)",
      ],
    ],
    pointSystem: {
      upperPrimary: "2 points for every valid word",
    },
  },
  {
    name: "Who am I",
    requiresFacilitator: false,
    description: "Children have to guess their given identity",
    instructions: [
      "Children will each be given an identity (real or fictional character)",
      "They will go in a round, to ask a yes/no question to find out their identity",
      "When confident, the player can declare and guess their identity during their turn",
      [
        "Successfully guesses will be awarded points",
        "Failed guesses will waste a turn and move on to the next player",
      ],
    ],
    pointSystem: {
      upperPrimary:
        "Starts with 200 points. Minus 10 points for each round used",
    },
    examples:
      "Iron man, Noah, Captain America, Jesus, Batman, Superman, Lee Hsien Loong, Teacher Tong Wah/Andrea (depending on level), Donald Trump, Adam, Eve",
  },
  {
    name: "Eraser flip",
    requiresFacilitator: true,
    description:
      "Children must flip their eraser on top of the other teacher’s/facilitator’s eraser",
    instructions: [
      "Players take turns to push/flip the eraser on top of each other.",
      "You lose if your eraser falls off or is completely below another eraser",
    ],
    pointSystem: {
      upperPrimary: "20 points is awarded to the winning player",
    },
  },
  {
    name: "Spinning erasers",
    requiresFacilitator: false,
    description:
      "Children must spin their erasers. The eraser that last the longest wins",
    instructions: [
      "Children are given 2 minutes to modify their erasers to make sure they can spin.",
      "When ready, everyone spins their eraser at the same time",
    ],
    pointSystem: {
      upperPrimary:
        "Calculate the average of all the eraser spinning durations: Points = average number of seconds x 3",
    },
  },
  {
    name: "Bible flipping",
    requiresFacilitator: false,
    description: "Flip to a specific book of the bible as fast as possible",
    instructions: [
      "Bible is placed in front of the children - make sure the Bible is closed",
      "The first child puts the hand on the Bible cover",
      "A random book is given, and the child needs to flip to that specific book in the bible at",
      [
        "Lower primary: any part of that specific book",
        "Upper primary: must be at chapter 1",
      ],
      "Once completed and verified, the Bible is closed and the next child comes up and places their hand on the Bible cover before a new book is given",
      "Time limit: 2 minutes",
      "Please remind the children that even though it is a game, it is still the bible and to be gentle with it",
    ],
    pointSystem: {
      lowerPrimary: [
        "10 points: 1-3 correct flips",
        "20 points:4-6 correct flips",
        "30 points: 6+ correct flips",
      ],
      upperPrimary: "5 points for every correct flip",
    },
  },
  {
    name: "Ninja",
    requiresFacilitator: true,
    description: "Eliminate opponent by hitting their batons",
    instructions: [
      "Both players start of back against each other",
      "They will both count down from 3 to 1 and shout “ninja” and the game will start",
      "Players take turns to go on the offense to attempt to hit the opponents paper baton",
      "Players on the defense can move away to dodge",
      "If your baton gets hit, you will lose that baton and can only attack with the remaining baton",
      "If both baton gets hit out you lose the game",
      "Game master has 3 lives",
    ],
    pointSystem: {
      upperPrimary: "20 points is awarded to each remaining player",
    },
  },
  {
    name: "Human knot",
    requiresFacilitator: false,
    description: "Untangle the human knot",
    instructions: [
      "Group will form a circle reach out and grab one hand of the person in front of you",
      "Ensure all hands are connected (both left and right hands)",
      "They will then now have to either go under each others arms or step over to untangle themselves to form a large circle",
      "There may be certain knots where it may be too difficult to entangle. Group can reset the knot up to 2 times, each time adding 2 minutes to the clock",
      "Time limit of 10 minutes",
    ],
    pointSystem: {
      upperPrimary: "Starts with 100 points, -10 points for every minute",
    },
  },
  {
    name: "Blind message",
    requiresFacilitator: false,
    description:
      "Send a text message without looking with as few mistakes as possible",
    instructions: [
      "Open up a messaging/note taking app and cover up the phone screen above the keyboard (either teacher’s/helper’s phone)",
      "Children take turns texting the message given to them without looking. Each child has 10 seconds to type as much as possible",
      "Once the time is up, the phone is then passed onto the next child",
      "Once the message is completed, reveal the message and see how many mistakes occurred",
    ],
    pointSystem: {
      upperPrimary:
        "Starts with 100 points, -2 points for every wrong character. For every correct symbol at the end +5 points",
    },
    examples:
      "Why this teacher make us do such weird things. I very good at texting blindly. xp ^@*%$&*\nWah teacher ask us to do this very difficult. I think very hard to get everything correct! :O @^&*#",
  },
  {
    name: "Five stones",
    requiresFacilitator: false,
    description:
      "To complete as many levels of the traditional 5 stones game as possible",
    instructions: [
      "Children take turns playing 5 stones. Turn changes when a child fails any part of the level",
      "Children must complete the whole level before being able to move on to the next one",
      "The basic steps are:",
      [
        "Throw all 5 stones in the air",
        "Choose and pick up 1 of the stones",
        "Throw that 1 stone, and while it’s in the air pick up n number of stones (number of stones depends on the level)",
        "Make sure to catch the stone in the air",
        "Continue until all the stones have been collected",
      ],
      "Levels:",
      [
        "Level 1: 1 stone at a time",
        "Level 2: 2 stones at a time",
        "Level 3: 3 stones, then 1 stone",
        "Level 4: all stones",
        "Level 5: IYKYK",
      ],
      "Time limit: 6 minutes",
    ],
    pointSystem: {
      upperPrimary: "+10 points for each level achieved as a group",
    },
  },
  {
    name: "Chaptek",
    requiresFacilitator: false,
    description: "Kick the chaptek in the air as long as possible",
    instructions: [
      "Hold the chaptek in the air with one hand at shoulder height",
      "Drop the chaptek and keep it in the air by kicking it",
      "Turn ends when the chaptek hits the floor",
    ],
    pointSystem: {
      upperPrimary: "Points: total kicks per group x2",
    },
  },
  {
    name: "Pick up sticks",
    requiresFacilitator: false,
    description: "Pick up individual sticks without moving the other sticks",
    instructions: [
      "Spread the sticks on the table by dropping it vertically on the table",
      "Pick up the stick without any visible movement of the other sticks",
      "If movement is detected, discard the intended stick, the turn ends and the next child tries",
      "Everyone gets 1 try",
    ],
    pointSystem: {
      upperPrimary:
        "Points: number of sticks picked up x number of points based on color",
    },
  },
  {
    name: "Ball pin",
    requiresFacilitator: false,
    description:
      "Pin the ball as close to the center as possible while being blindfolded",
    instructions: [
      "Members will take turns being blindfolded. The first person and will walk to the board from the starting line.",
      "While blindfolded, they have to try to stick the ball as close to the middle as possible.",
    ],
    pointSystem: {
      lowerPrimary: [
        "10 points: 1-9 points total for groups of 5, 1-10 for groups of 6, 1-12 for groups of 7",
        "20 points:10-17 total for groups of 5, 11-20 for groups of 6, 13-24 for groups of 7",
        "30 points: 18-25 total for groups of 5, 21-30 for groups of 6, 25-35 for groups of 7",
      ],
    },
  },
  {
    name: "Word Search",
    requiresFacilitator: false,
    description: "To spell as many words in the time limit",
    instructions: [
      "There will be a box containing the letters of the alphabet. The facilitator will give them a word that they have to spell.",
      "The first player will search through the box of letters and find the first letter of the word.",
      "The player runs with this piece of paper to the opposite end where they have to put the letter down.",
      "The first player runs back and the next player has to find the next letter of the word and run to the table to continue the word.",
      "This continues until 3 minutes is up (can increase time for bigger groups)",
    ],
    pointSystem: {
      lowerPrimary: [
        "10 points: managed to get 1-2 words",
        "20 points: managed to get 3-4 words",
        "30 points: managed to get 5-6 words",
      ],
    },
    examples:
      "after, child, every, half, move, plant, whole, again, children, everybody, hold, poor, floor. beautiful, frightened, skeleton, wonderful, delicious, swimmers",
  },
];
