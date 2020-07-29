// readline module helps us read one line at a time
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// survey questions to generate profile description in console
rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {

  rl.question("What\'s an activity you like doing? ", (activity) => {

    rl.question("What do you listen to while doing that? ", (music) => {

      rl.question("Which meal is your favorite (eg: dinner, brunch, etc.) ", (meal) => {

        rl.question("What\'s your favorite thing to eat for that meal? ", (food) => {

          rl.question("Which sport is your absolute favorite? ", (sport) => {

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            })
          })
        })
      })
    })
  })
});
