const fs = require('fs');
let words_gallow = [];
//let hp = 5;
let randomWord;
//let charsMap = new Map();
const hp5 = `
        ( )
        /|\\
         |
        / \\
        T--T
        |  |
`;
const menu = `
 ______________________________________________
|      Введите:         |        Введите:      |
|       "cont"          |         "exit"       |
| для продолжения игры  |   для выхода из игры |
[==============================================]
`;
const victoryPic = `
__      __  _____   _____   _____    ___    _____    __
\\ \\    / / |_   _| |  ___\\ |_   _|  / _ \\  |  __ \\  / /
 \\ \\  / /    | |   | |       | |   | | | | | |__) |/ /_ 
  \\ \\/ /     | |   | |   _   | |   | | | | |  _  /| '_ \\ 
   \\  /     _| |_  | |__| |  | |   | |_| | | | \\ \\| (_) |
    \\/     |_____| |_____/   |_|    \\___/  |_|  \\_\\\\___/ 
`;
/*
*! Функция для чтения файла */
function readerTextSync(filename) {
   try {
      const rubeString = fs.readFileSync(filename, 'utf8');

      const wordsPure = rubeString.split(/\s+/).filter(word => word.length > 0).map(word => word.trim());
      return wordsPure;
   } catch (error) {
      console.log("Ошибка чтения файла")
      return []
   }
};

/*
*! Создаю функцию для игры против ИИ и игрока*/
function gameV1(randomWord) {
   const lengthStrGame = randomWord.length;
   let strGame = [];
   let hp = 5;
   let charsMap = new Map();
   for (let i = 0; i < lengthStrGame; i++) {
      strGame.push('_');
   }
   console.log('Загаданное слово из ' + lengthStrGame + ' букв:');
   /*
   *! Бесконечный цикл для ввода букв в терминал */
   return new Promise((resolve) => {
      function askLetter(hp) {
         if (hp <= 0) {
            console.log('Вы проиграли!');
            console.log('Загаданное слово: ' + randomWord);
            resolve();
            return;
         }
         if (!strGame.includes('_')) {
            console.log('Вы победили!');
            console.log(victoryPic);
            console.log('Загаданное слово: ' + randomWord);
            resolve();
            return;
         }
         console.log('\n' + strGame.join(' ') + '\n');
         console.log(`Осталось жизней: ${hp}`);

         rl.question('Введите букву: ', (charInput) => {
            let found = false;
            /* 
            *! Проверка каждой буквы из строки на соответствие с введенной буквой */
            for (let i = 0; i < lengthStrGame; i++) {
               /* 
              *! Если введенная буква равна хоть какой то букве из слова(строки), то в массив с
              *! с пустотами(черточками) заменяется соответствующая буква (по индексу) */
               if (randomWord[i] === charInput) {
                  strGame[i] = charInput;
                  found = true;
               }
            }
            /*
               *! Если флаг все еще false(буква была не найдена в слове)
               *! , то hp - 1 и запускается соотв. изображение при помощи функции  
               *! , но если неверная буква уже вводилась, то жизни не будут уменьшаться*/
            if (!found) {
               if (charsMap.get(charInput)) {
                  console.log('Буква уже была');
               } else {
                  charsMap.set(charInput, true);
                  console.log('Неверная буква!');
                  hp--;
                  gallowPrint(hp);
               }
            }
            askLetter(hp);
         });
      }
      askLetter(hp);
   });
}

/*
*! Рисунки виселицы */
function gallowPrint(hp) {
   const hp4 = `
   |
   |
   |     ( )
   |     /|\\
   |      |
   |     / \\
   |     T--T
   |     |  |
   `;
   const hp3 = `
   ___________
   |
   |
   |     ( )
   |     /|\\
   |      |
   |     / \\
   |     T--T
   |     |  |
   `;
   const hp2 = `
   ___________
   |      |
   |       
   |     ( )
   |     /|\\
   |      |
   |     / \\
   |     T--T
   |     |  |
   `;
   const hp1 = `
   ________
   |      |
   |      |
   |     (_)
   |     /|\\
   |      |
   |     / \\
   |     T--T
   |     /  /
   `;
   const hp0 = `
   ________
   |      |
   |      |
   |     (_)
   |     /|\\
   |      |
   |     / \\
   |  
   |  GAME OVER   
   `;
   switch (hp) {
      case 4:
         console.log(hp4);
         break;
      case 3:
         console.log(hp3);
         break;
      case 2:
         console.log(hp2);
         break;
      case 1:
         console.log(hp1);
         break;
      case 0:
         console.log(hp0);
         break;
   }
}


/*
*! Читалка с терминала  */
const readline = require('readline')
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
/*
*! Основное тело игры */
function mainBodygame() {
   rl.question(menu, (input) => {
      let command = input.trim();
      switch (command) {
         case 'cont':
            rl.question('Выберите режим игры: \n1. Игра против ИИ\n2. PvP\n\n', (input) => {
               const number = parseInt(input, 10);
               console.log(hp5);
               //return; // Проверка рисунка
               if (number == 1) {
                  words_gallow = readerTextSync("words_gallow.txt");
                  randomWord = words_gallow[Math.floor(Math.random() * words_gallow.length)];
                  gameV1(randomWord).then(() => {
                     setTimeout(() => mainBodygame(), 1500);
                  });
               } else if (number == 2) {
                  rl.question('Введите слово для игры в виселицу:', (input) => {
                     let personWord = input.trim();
                     gameV1(personWord).then(() => {
                        setTimeout(() => mainBodygame(), 1500);
                     });
                  })
               } else {
                  console.log('Неверный номер режима, поробуйте еще раз!');
                  setTimeout(() => mainBodygame(), 1500);
               }
            });
            break;
         case 'exit':
            rl.close();
            return;
         default:
            console.log('Неверная команда');
            setTimeout(() => mainBodygame(), 1500);
            break;
      }
   });
}

/*
*! Вход в программу */
mainBodygame();
