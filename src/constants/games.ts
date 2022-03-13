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
  {
    name: "Mirror the Pose",
    requiresFacilitator: false,
    description: "Copy the poses in the photo",
    instructions: [
      "The facilitator will show the team a photo which they will then have to recreate. The team has 3 minutes to strategize and 30 seconds to memorize the poses",
      "After which, they must recreate the photo as accurately as possible and the facilitator will decide if they receive a maximum of 5 points.",
      "The team will be shown a total of 4 pictures",
    ],
    pointSystem: {
      lowerPrimary: [
        "10 points: 0-6 points",
        "20 points: 7-13 points",
        "30 points: 14-20 points",
      ],
      upperPrimary:
        "points accumulated from all the poses with a maximum of 5 per pose",
    },
  },
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
  },
  {
    name: "Riddle Objective",
    requiresFacilitator: false,
    description: "The group has to guess as many riddles as possible.",
    instructions: [
      "The gamemaster tells the group a riddle describing a pre-selected object in the room.",
      "The group gets some time to guess it right.",
      "If the time limit is up and they can’t figure it out, move on to the next riddle.",
      "At the end of the game, see how many riddles they have guessed right.",
    ],
    pointSystem: { upperPrimary: "10 points for every correct item" },
  },
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
  {
    name: "Fingertip Hula Hoop",
    requiresFacilitator: false,
    description: "Raise the Hula Hoop with just their fingertips as a group.",
    instructions: [
      "All members must have only their fingertip touching the hula hoop and to raise it to 1m high.",
      "Once any member’s finger loses contact with the hula hoop, they have to restart from the bottom",
    ],
    pointSystem: {
      lowerPrimary: [
        "10 points: able to do it",
        "20 points: able to do it with only 3-4 resets",
        "30 points: able to do it with 0-2 resets",
      ],
      upperPrimary: "Starts with 100 points. -10 points for every reset",
    },
  },
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
    pointSystem: { upperPrimary: "2 points for every pin knocked down" },
  },
  {
    name: "Blinded jigsaw",
    requiresFacilitator: false,
    description: "To complete the jigsaw blindfolded with the help of friends.",
    instructions: [
      "One member is blindfolded and required to complete the jigsaw puzzle with his team members giving him verbal instruction",
      "The team members are not allowed to touch the blindfolded member or any of the jigsaw.",
      "Time limit of 5 minutes",
    ],
    pointSystem: {
      upperPrimary: "Starts with 200 points. -2 points for every second used",
    },
  },
  {
    name: "Line up",
    requiresFacilitator: false,
    description: "To line up according to various parameters without talking",
    instructions: [
      "Line up according to the criteria the game master sets out",
      "The faster you complete each task, the more points you will receive",
    ],
    pointSystem: { upperPrimary: "20 points for every task cleared" },
  },
  {
    name: "Charades",
    requiresFacilitator: false,
    description:
      "Children are supposed to guess the word/phrase based on everyone's action.",
    instructions: [
      "Guesser goes and sits on a chair opposite the rest of the group.",
      "Another member of the group (displayer) will hold up the word above the guesser’s head.",
      "Group acts out the word/phrase.",
      "Once guessed/skipped, guesser becomes the new displayer and a new child becomes the guesser.",
      "Time limit of 5 minutes",
    ],
    pointSystem: { upperPrimary: "5 points for every correct guess" },
  },
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
    pointSystem: { upperPrimary: "50 points for every bottle cap on the line" },
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
  {
    name: "Word Jigsaw",
    requiresFacilitator: false,
    description: "Arrange the words/letters in order in the fastest time",
    instructions: [
      "Strips of paper with words/letters on them are given to the children. Children are supposed to arrange it in accordance to the memory verse",
      "Memory verse reference is only given 1 minute into the game",
      "Reference to the bible is only allowed 3 minutes into the game",
      [
        "P3/P4: cut and jumble according to individual words",
        "P5/P6: cut and jumble according to every 3 characters. E.g. Jesus is broken up into Jes & us[space]",
      ],
    ],
    pointSystem: {
      upperPrimary:
        "Starts with 200 points. Minus 5 points for every 10 seconds",
    },
  },
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
      "Children will each be given an identity",
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
    requiresFacilitator: true,
    description:
      "Children must spin their erasers. The eraser that last the longest wins",
    instructions: [
      "Children are given 2 minutes to modify their erasers to make sure they can spin.",
      "When ready, everyone spins their eraser at the same time",
    ],
    pointSystem: {
      upperPrimary: "20, 15, 10 points are given to the top 3 respectively",
    },
  },
];