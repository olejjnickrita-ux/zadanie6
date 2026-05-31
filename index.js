const tasks = [
  { type: "phrase", text: "Ведущий лидер", answers: ["ведущий"] },
  { type: "phrase", text: "Ведущий лейтмотив", answers: ["ведущий"] },
  { type: "phrase", text: "Весёлый мажор", answers: ["весёлый", "веселый"] },
  { type: "phrase", text: "Ветхая рухлядь", answers: ["ветхая"] },
  { type: "phrase", text: "Взаимное сотрудничество", answers: ["взаимное"] },
  { type: "phrase", text: "Взаимный диалог", answers: ["взаимный"] },
  { type: "phrase", text: "Внутренний интерьер", answers: ["внутренний"] },
  { type: "phrase", text: "Главная суть", answers: ["главная"] },
  { type: "phrase", text: "Глубокая бездна", answers: ["глубокая"] },
  { type: "phrase", text: "Глухое захолустье", answers: ["глухое"] },
  { type: "phrase", text: "Городской градоначальник", answers: ["городской"] },
  { type: "phrase", text: "Грустный минор", answers: ["грустный"] },
  { type: "phrase", text: "Действительные реалии", answers: ["действительные"] },
  { type: "phrase", text: "Колючие тернии", answers: ["колючие"] },
  { type: "phrase", text: "Коренной абориген", answers: ["коренной"] },
  { type: "phrase", text: "Народный фольклор", answers: ["народный"] },
  { type: "phrase", text: "Первая премьера", answers: ["первая"] },
  { type: "phrase", text: "Надменное высокомерие", answers: ["надменное"] },
  { type: "phrase", text: "Необычный феномен", answers: ["необычный"] },
  { type: "phrase", text: "Неожиданный сюрприз", answers: ["неожиданный"] },
  { type: "phrase", text: "Медицинские медсёстры", answers: ["медицинские"] },
  { type: "phrase", text: "Мемориальный памятник", answers: ["мемориальный"] },
  { type: "phrase", text: "Отвлечённые абстракции", answers: ["отвлечённые", "отвлеченные"] },
  { type: "phrase", text: "Памятный сувенир", answers: ["памятный"] },
  { type: "phrase", text: "Первый дебют", answers: ["первый"] },
  { type: "phrase", text: "Передняя авансцена", answers: ["передняя"] },
  { type: "phrase", text: "Правильное правописание", answers: ["правильное"] },
  { type: "phrase", text: "Самостоятельная автономия", answers: ["самостоятельная"] },
  { type: "phrase", text: "Свободная вакансия", answers: ["свободная"] },
  { type: "phrase", text: "Ответная контратака", answers: ["ответная"] },
  { type: "phrase", text: "Народная демократия", answers: ["народная"] },
  { type: "phrase", text: "Итоги результатов", answers: ["результатов"] },
  { type: "phrase", text: "Династия рода Романовых", answers: ["династия", "рода"] },
  { type: "phrase", text: "Передовой авангард", answers: ["передовой"] },
  { type: "phrase", text: "Подарить бесплатно", answers: ["бесплатно"] },
  { type: "phrase", text: "Истинная правда", answers: ["истинная"] },
  { type: "phrase", text: "Жаркий зной", answers: ["жаркий"] },
  { type: "phrase", text: "Богатая роскошь", answers: ["богатая"] },
  { type: "phrase", text: "Проливной ливень", answers: ["проливной"] },
  { type: "phrase", text: "Подниматься вверх", answers: ["вверх"] },
  { type: "phrase", text: "Спускаться вниз", answers: ["вниз"] },
  { type: "phrase", text: "Тонкие нюансы", answers: ["тонкие"] },
  { type: "phrase", text: "Маршрут движения автобуса", answers: ["движения"] },
  { type: "phrase", text: "Промышленная фабрично-заводская индустрия", answers: ["промышленная", "фабрично-заводская"] },
  { type: "phrase", text: "Рассказывать вслух", answers: ["вслух"] },

  {
    type: "sentence",
    text: "Посев семян хвойных пород необходимо проводить в очень оптимальные сроки, когда почва влажная и температура её верхних слоёв достигает 6–8 °С для кедра и 8–10 °С для ели и пихты.",
    answers: ["очень"]
  },
  {
    type: "sentence",
    text: "Учебный год в этот раз выдался тяжёлым: пришлось читать много научных монографий, чтобы справиться с большим количеством домашних заданий.",
    answers: ["научных"]
  },
  {
    type: "sentence",
    text: "Перед путешественниками разверзлась глубокая бездна, преодолеть которую было невозможно.",
    answers: ["глубокая"]
  },
  {
    type: "sentence",
    text: "Путь писателя к признанию и любви читающей публики зачастую усеян колючими терниями и полон соблазнов.",
    answers: ["колючими"]
  },
  {
    type: "sentence",
    text: "Посещение первой премьеры спектакля по пьесе современного французского драматурга доставило нам большое удовольствие.",
    answers: ["первой"]
  },
  {
    type: "sentence",
    text: "Длительное время находившаяся у власти в Великобритании королевская династия рода Стюартов завершила своё существование в 1714 году.",
    answers: ["рода"]
  },
  {
    type: "sentence",
    text: "Надменное высокомерие и презрение к людям своего племени сделали героя рассказа Горького изгоем.",
    answers: ["надменное"]
  },
  {
    type: "sentence",
    text: "Не всегда легко усвоить правильное правописание того или иного слова, поэтому приходится использовать различные ассоциативные приёмы запоминания.",
    answers: ["правильное"]
  },
  {
    type: "sentence",
    text: "В спектакле Орловского драматического театра «Воительница» роль Домны Платоновны исполняла известная столичная московская актриса Вера Васильева.",
    answers: ["столичная", "московская"]
  },
  {
    type: "sentence",
    text: "Свою музыкальную пьесу композитор решил закончить в весёлом мажоре, чтобы у публики сохранилось приподнятое настроение.",
    answers: ["весёлом", "веселом"]
  },
  {
    type: "sentence",
    text: "Модель экономического роста страны, учитывающая современные действительные реалии, должна обеспечить решение важнейших социальных задач.",
    answers: ["действительные"]
  },
  {
    type: "sentence",
    text: "Особые слова благодарности за тяжёлый труд хочется адресовать медицинским медсёстрам, спасшим во время Великой Отечественной войны миллионы раненых солдат.",
    answers: ["медицинским"]
  },
  {
    type: "sentence",
    text: "Обитатели посёлка были убеждены в том, что в их глухое захолустье не поедут работать выпускники вузов и молодые специалисты, и поэтому приезд молодого агронома стал неожиданным для всех.",
    answers: ["глухое"]
  },
  {
    type: "sentence",
    text: "Чиновник был уверен: подобным отвлечённым абстракциям не место на выставке современного социалистического искусства.",
    answers: ["отвлечённым", "отвлеченным"]
  },
  {
    type: "sentence",
    text: "Английский писатель, историк и философ XIX века Томас Карлейль считал, что всемирная история — это биографии жизней великих людей.",
    answers: ["жизней"]
  },
  {
    type: "sentence",
    text: "Эту ветхую рухлядь давно уже пора было отправить на чердак, но как-то рука не подымалась на бабушкино наследство.",
    answers: ["ветхую"]
  },
  {
    type: "sentence",
    text: "Первого апреля исполняется 200 лет со дня рождения классика мировой классической литературы Николая Васильевича Гоголя.",
    answers: ["классической"]
  },
  {
    type: "sentence",
    text: "«Поделись праздником со всеми!» — таков ведущий лейтмотив фотовыставки «Россия — Родина моя».",
    answers: ["ведущий"]
  },
  {
    type: "sentence",
    text: "Солист всемирно известной музыкальной группы планирует издать свою автобиографию.",
    answers: ["свою"]
  },
  {
    type: "sentence",
    text: "В Петербурге в доме Теплова собрались любители музыки на первую премьеру концерта молодого композитора.",
    answers: ["первую"]
  },
  {
    type: "sentence",
    text: "Проект реформы правильного правописания был представлен учёными Российской академии наук в 1912 году, но не был утверждён, хотя продолжал широко обсуждаться.",
    answers: ["правильного"]
  },
  {
    type: "sentence",
    text: "О реальных событиях: о счастливом детстве, любимых наставниках, об учёбе в Тенишевском училище, о революции, трудных годах эмиграции — В. В. Набоков рассказал в своём автобиографическом романе «Другие берега».",
    answers: ["своём", "своем"]
  },
  {
    type: "sentence",
    text: "Одним из странных парадоксов внутренней политики Российской империи первой четверти XIX века стало то обстоятельство, что попытки обновления Российского государства сопровождались ограничением свобод населения и силовым характером государственного управления.",
    answers: ["странных"]
  },
  {
    type: "sentence",
    text: "Журнал «Наука и жизнь» опубликовал материалы, в которых шла речь об особенностях ситуации, сложившейся в России, начиная с реформ Александра II и до свержения династии рода Романовых.",
    answers: ["династии", "рода"]
  },
  {
    type: "sentence",
    text: "Певец, с которым мы познакомились во время поездки, пришёл на собрание писателей и подарил нам бесплатно несколько своих пластинок.",
    answers: ["бесплатно"]
  },
  {
    type: "sentence",
    text: "Мировое человечество вошло в третье тысячелетие с громадными знаниями и колоссальным потенциалом их использования.",
    answers: ["мировое"]
  }
];

const taskBox = document.getElementById("taskBox");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const finishScreen = document.getElementById("finishScreen");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

let mixedTasks = [];
let currentTaskIndex = 0;
let isAnswered = false;

function normalizeWord(word) {
  return word
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[.,!?;:()«»"„“”—–]/g, "")
    .trim();
}

function shuffleArray(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
  }

  return result;
}

function startTrainer() {
  mixedTasks = shuffleArray(tasks);
  currentTaskIndex = 0;
  renderTask();
}

function renderTask() {
  const task = mixedTasks[currentTaskIndex];

  isAnswered = false;
  taskBox.innerHTML = "";
  finishScreen.classList.add("hidden");
  taskBox.classList.remove("hidden");
  nextBtn.classList.add("hidden");

  taskBox.classList.toggle("sentenceMode", task.type === "sentence");
  taskBox.classList.toggle("phraseMode", task.type === "phrase");

  progressText.textContent = `${currentTaskIndex + 1} / ${mixedTasks.length}`;
  progressBar.style.width = `${((currentTaskIndex + 1) / mixedTasks.length) * 100}%`;

  const parts = task.text.split(/(\s+)/);

  parts.forEach((part) => {
    if (/^\s+$/.test(part)) {
      taskBox.appendChild(document.createTextNode(part));
      return;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "wordBtn";
    button.textContent = part;

    button.addEventListener("click", () => checkAnswer(button, task));

    taskBox.appendChild(button);
  });
}

function checkAnswer(button, task) {
  if (isAnswered) return;

  const clickedWord = normalizeWord(button.textContent);
  const correctAnswers = task.answers.map((answer) => normalizeWord(answer));

  if (correctAnswers.includes(clickedWord)) {
    button.classList.add("correct");
    nextBtn.classList.remove("hidden");
    isAnswered = true;
  } else {
    button.classList.add("wrong");
  }
}

function showFinishScreen() {
  taskBox.classList.add("hidden");
  nextBtn.classList.add("hidden");
  finishScreen.classList.remove("hidden");

  progressText.textContent = `${mixedTasks.length} / ${mixedTasks.length}`;
  progressBar.style.width = "100%";
}

nextBtn.addEventListener("click", () => {
  currentTaskIndex++;

  if (currentTaskIndex >= mixedTasks.length) {
    showFinishScreen();
  } else {
    renderTask();
  }
});

restartBtn.addEventListener("click", () => {
  startTrainer();
});

startTrainer();