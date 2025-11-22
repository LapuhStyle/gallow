const hp5 = `
        (_)
        /|\\
         |
        / \\
        T--T
        |  |
`;
const victoryPic = `
__      __  _____   _____   _____    ___    _____    __
\\ \\    / / |_   _| |  ___\\ |_   _|  / _ \\  |  __ \\  / /
 \\ \\  / /    | |   | |       | |   | | | | | |__) |/ /_ 
  \\ \\/ /     | |   | |   _   | |   | | | | |  _  /| '_ \\ 
   \\  /     _| |_  | |__| |  | |   | |_| | | | \\ \\| (_) |
    \\/     |_____| |_____/   |_|    \\___/  |_|  \\_\\\\___/ 
`;
console.log(hp5);

const mapData = {
   center: [55.7558, 37.6173],
   zoom: 10,
   markers: [
      { lat: 55.7558, lon: 37.6173, text: 'Москва' }
   ]
};

console.log(mapData);
const word = "Жопа";
console.log(word[0]);
console.log(victoryPic);


// if (charInput === randomWord[i]) {
//    /*
//    *! Если введенная буква иммет в карте значение false => !false, то значит , что буква не вводилась,
//    *! и меняем черту на соотв. букву и присваимваем значение true соотв. ключу(букве)
//    *! Иначе буква вводилась раннее*/
//    if (!charsMap.get(charInput)) {
//       strGame[i] = charInput;
//       charsMap.set(charInput, true);
//       flag = true;
//    } else {
//       console.log('Буква уже была');
//    }
// if (!flag) {
//    console.log('Неверная буква!');
//    currentHp--;
//    gallowPrint(currentHp);
// }
// askLetter(currentHp);
// }

// ___________________________________________________
// function gameV1(randomWord) {
//    const lengthStrGame = randomWord.length;
//    let strGame = [];
//    let hp = 5;

//    for (let i = 0; i < lengthStrGame; i++) {
//       strGame.push('_');
//    }

//    randomWord.split('').forEach(char => {
//       charsMap.set(char, false);
//    });

//    console.log('🎯 Загадано слово из ' + lengthStrGame + ' букв');

//    return new Promise((resolve) => {
//       function askLetter() {
//          if (hp <= 0) {
//             console.log('\n💀 Вы проиграли! Слово: ' + randomWord);
//             resolve('lose');
//             return;
//          }

//          if (!strGame.includes('_')) {
//             console.log('\n🎉 Поздравляю! Вы победили! Слово: ' + randomWord);
//             resolve('win');
//             return;
//          }

//          console.log('\n' + strGame.join(' ') + '\n');
//          console.log(`❤️  Жизни: ${hp}`);

//          rl.question('Введите букву: ', (charInput) => {
//             let found = false;

//             for (let i = 0; i < lengthStrGame; i++) {
//                if (randomWord[i] === charInput) {
//                   if (!charsMap.get(charInput)) {
//                      strGame[i] = randomWord[i];
//                      charsMap.set(charInput, true);
//                      found = true;
//                   } else {
//                      console.log('Буква уже была');
//                   }
//                }
//             }

//             if (!found) {
//                console.log('Неверная буква!');
//                hp--;
//                gallowPrint(hp);
//             }

//             askLetter();
//          });
//       }

//       askLetter();
//    });
// }

// function mainBodygame() {
//    rl.question(menu, (input) => {
//       let command = input.trim();

//       switch (command) {
//          case 'cont':
//             rl.question('Выберите режим игры: \n1. Игра против ИИ\n2. PvP\n\n', (input) => {
//                const modeChoice = parseInt(input, 10);
//                console.log(hp5);

//                if (modeChoice == 1) {
//                   words_gallow = readerTextSync("words_gallow.txt");
//                   randomWord = words_gallow[Math.floor(Math.random() * words_gallow.length)];

//                   gameV1(randomWord).then((result) => {
//                      console.log('\n🎮 Игра окончена!');
//                      setTimeout(() => mainBodygame(), 1500);
//                   });
//                } else if (modeChoice == 2) {
//                   rl.question('Введите слово для игры в виселицу:', (input) => {
//                      let personWord = input.trim();
//                      gameV1(personWord).then(() => {
//                         setTimeout(() => mainBodygame(), 1500);
//                      });
//                   });
//                } else {
//                   console.log('Неверный номер режима, попробуйте еще раз!');
//                   setTimeout(() => mainBodygame(), 1500);
//                }
//             });
//             break;

//          case 'exit':
//             rl.close();
//             return;

//          default:
//             console.log('Неверная команда. Доступные: cont, exit');
//             setTimeout(() => mainBodygame(), 1500);
//             break;
//       }
//    });
// }
