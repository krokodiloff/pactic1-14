// Калькуляторы фигур
// (function () {
//     function perimeterBox(num, num2) {
//       if (num == num2) {
//         return (num + num2) * 2;
//       }
//     }
//     function squareBox(num, num2) {
//       if (num == num2) {
//         return num * num2;
//       }
//     }
  
//     function perimeterRec(num, num2) {
//       return (num + num2) * 2;
//     }
//     function squareRec(num, num2) {
//       return num * num2;
//     }
  
//     function squareCir(num) {
//       return Math.PI * num ** 2;
//     }
//     function cirCumgerence(num) {
//       return 2 * Math.PI * num;
//     }
  
//     function squareTriangle(num, num2, num3) {
//       let p = (num + num2 + num3) / 2;
//       return Math.sqrt(p * (p - num) * (p - num2) * (p - num3));
//     }
  
//     function equation(num, num2, num3) {
//       let discreminant = num2 ** 2 - 4 * num * num3;
//       if (discreminant > 0) {
//         let x1 = (-num2 + Math.sqrt(discreminant)) / (2 * num);
//         let x2 = (-num2 - Math.sqrt(discreminant)) / (2 * num);
//         return "Первый корень: " + x1 + " второй корень: " + x2;
//       }
//     }
  
//     function pithagTriples(num, num2, num3) {
//       if (num ** 2 + num2 ** 2 == num3 ** 2) {
//         return (
//           "Числа: " +
//           num +
//           ", " +
//           num2 +
//           ", " +
//           num3 +
//           ", являются Пифагорами тройками"
//         );
//       } else {
//         return (
//           "Числа: " +
//           num +
//           ", " +
//           num2 +
//           ", " +
//           num3 +
//           ", не являются Пифагорами тройками"
//         );
//       }
//     }
//     window.module = {
//       perimeterBox,
//       squareBox,
//       perimeterRec,
//       squareRec,
//       squareCir,
//       cirCumgerence,
//       squareTriangle,
//       equation,
//       pithagTriples,
//     };
//   })();
//   // №1
  
//   let inp = document.querySelector("#inp");
//   let inp2 = document.querySelector("#inp2");
//   let p = document.querySelector("#p");
//   let p2 = document.querySelector("#p2");
//   let button = document.querySelector("#button");
  
//   button.addEventListener("click", function func() {
//     p.textContent = p.textContent + module.perimeterBox(+inp.value, +inp2.value);
//     p2.textContent = p2.textContent + module.squareBox(+inp.value, +inp2.value);
//     button.removeEventListener("click", func);
//   });
  
//   // №2
//   let inp3 = document.querySelector("#inp3");
//   let inp4 = document.querySelector("#inp4");
//   let p3 = document.querySelector("#p3");
//   let p4 = document.querySelector("#p4");
//   let button2 = document.querySelector("#button2");
  
//   button2.addEventListener("click", function func() {
//     p3.textContent += module.perimeterRec(+inp3.value, +inp4.value);
//     p4.textContent += module.squareRec(+inp3.value, +inp4.value);
//     button2.removeEventListener("click", func);
//   });
  
//   // №3
//   let inp5 = document.querySelector("#inp5");
//   let p5 = document.querySelector("#p5");
//   let p6 = document.querySelector("#p6");
//   let button3 = document.querySelector("#button3");
  
//   button3.addEventListener("click", function func() {
//     p5.textContent += module.squareCir(+inp5.value);
//     p6.textContent += module.cirCumgerence(+inp5.value);
//     button3.removeEventListener("click", func);
//   });
  
//   // №4
//   let inp6 = document.querySelector("#inp6");
//   let inp7 = document.querySelector("#inp7");
//   let inp8 = document.querySelector("#inp8");
//   let p7 = document.querySelector("#p7");
//   let button4 = document.querySelector("#button4");
  
//   button4.addEventListener("click", function func() {
//     p7.textContent += module.squareTriangle(
//       +inp6.value,
//       +inp7.value,
//       +inp8.value
//     );
//     button4.removeEventListener("click", func);
//   });
  
//   // Математические калькуляторы
//   // №1
//   let inp9 = document.querySelector("#inp9");
//   let inp10 = document.querySelector("#inp10");
//   let inp11 = document.querySelector("#inp11");
//   let p8 = document.querySelector("#p8");
//   let button5 = document.querySelector("#button5");
//   button5.addEventListener("click", function func() {
//     p8.textContent += module.equation(+inp9.value, +inp10.value, +inp11.value);
//     button5.removeEventListener("click", func);
//   });
  
//   // №2
//   let inp12 = document.querySelector("#inp12");
//   let inp13 = document.querySelector("#inp13");
//   let inp14 = document.querySelector("#inp14");
//   let p9 = document.querySelector("#p9");
//   let button6 = document.querySelector("#button6");
//   button6.addEventListener("click", function func() {
//     p9.textContent += module.pithagTriples(
//       +inp12.value,
//       +inp13.value,
//       +inp14.value
//     );
//     button6.removeEventListener("click", func);
//   });
  
//   // №3
//   let inp15 = document.querySelector("#inp15");
//   let button7 = document.querySelector("#button7");
  
//   button7.addEventListener("click", function func() {
//     let ul = document.createElement("ul");
//     let li = document.createElement("li");
//     for (let i = 0; i <= inp15.value; i++) {
//       if (inp15.value % i == 0) {
//         let span = document.createElement("span");
//         span.append(i + ",");
//         li.appendChild(span);
//       }
//     }
//     ul.appendChild(li);
//     button7.insertAdjacentElement("afterend", ul);
//   });
  
//   // №4
//   let inp16 = document.querySelector("#inp16");
//   let inp17 = document.querySelector("#inp17");
//   let button8 = document.querySelector("#button8");
  
//   button8.addEventListener("click", function func() {
//     let ul = document.createElement("ul");
//     let li = document.createElement("li");
//     for (let i = 0; i < inp16.value || i < inp17.value; i++) {
//       if (inp16.value % i == 0 && inp17.value % i == 0) {
//         let span = document.createElement("span");
//         span.append(i + ",");
//         li.appendChild(span);
//       }
//     }
//     ul.appendChild(li);
//     inp17.insertAdjacentElement("afterend", ul);
//   });
  
//   // №5
//   let inp18 = document.querySelector("#inp18");
//   let inp19 = document.querySelector("#inp19");
//   let button9 = document.querySelector("#button9");
  
//   button9.addEventListener("click", function func() {
//     let ul = document.createElement("ul");
//     let li = document.createElement("li");
//     let arr = [];
//     for (let i = 0; i < inp18.value || i < inp19.value; i++) {
//       if (inp18.value % i == 0 && inp19.value % i == 0) {
//         arr.push(i);
//       }
//     }
//     let arr_max = Math.max.apply(null, arr);
//     li.textContent = arr_max;
//     ul.appendChild(li);
//     inp19.insertAdjacentElement("afterend", ul);
//   });
  
//   // №6
//   let inp20 = document.querySelector("#inp20");
//   let inp21 = document.querySelector("#inp21");
//   let button10 = document.querySelector("#button10");
  
//   button10.addEventListener("click", function func() {
//     let ul = document.createElement("ul");
//     let li = document.createElement("li");
//     let arr = [];
//     for (let i = 0; i < inp20.value || i < inp21.value; i++) {
//       if (inp20.value % i == 0 && inp21.value % i == 0) {
//         arr.push(i);
//       }
//     }
//     // console.log(arr)
//     let arr_max = Math.min.apply(null, arr);
//     li.textContent = arr_max;
//     ul.appendChild(li);
//     inp21.insertAdjacentElement("afterend", ul);
//   });
  
//   // Анализатор текста
//   let textarea = document.querySelector("#textarea");
//   let p10 = document.querySelector("#p10");
  
//   let checkbox = document.querySelector("#checkbox");
//   let checkbox2 = document.querySelector("#checkbox2");
//   let checkbox3 = document.querySelector("#checkbox3");
//   let checkbox4 = document.querySelector("#checkbox4");
  
//   textarea.addEventListener("blur", function () {
//     let arr = textarea.value.split(" ");
//     let arr2 = arr.join("");
//     arr2 = arr2.split("");
//     let arr3 = textarea.value.split("");
//     p10.textContent =
//       "В этом тексте столько слов: " +
//       arr.length +
//       " и столько символов: " +
//       arr3.length +
//       " и столько символов без пробела: " +
//       arr2.length;
  
//     let count = {};
//     for (let elem of arr2) {
//       if (count[elem] === undefined) {
//         count[elem] = 1;
//       } else {
//         count[elem]++;
//       }
//     }
//     // №5
//     let keys = Object.keys(count);
//     if ((checkbox.dataset.elem = keys.includes("a"))) {
//       checkbox.checked = true;
//     }
//     if ((checkbox2.dataset.elem = keys.includes("b"))) {
//       checkbox2.checked = true;
//     }
//     if ((checkbox3.dataset.elem = keys.includes("c"))) {
//       checkbox3.checked = true;
//     }
//     if ((checkbox4.dataset.elem = keys.includes("d"))) {
//       checkbox4.checked = true;
//     }
//   });
  
//   // Игра угадай число
//   function getRandomInt(min1, max1) {
//     return Math.floor(Math.random() * (max1 - min1) + min1);
//   }
//   let random = getRandomInt(1, 100);
//   console.log(random);
  
//   let inp22 = document.querySelector("#inp22");
//   inp22.addEventListener("focus", function () {
//     inp22.value = "";
//   });
//   inp22.addEventListener("blur", function () {
//     if (+inp22.value == random) {
//       inp22.value = "Вы угадали";
//     } else if (+inp22.value > random) {
//       inp22.value = "Введите число поменьше";
//     } else {
//       inp22.value = "Введите число побольше";
//     }
//   });
  
//   // Игра угадай ячейку
//   let table = document.querySelector("#table");
//   let td;
//   let k = 0;
//   let random2 = [];
//   let j = 0;
//   for (let i = 1; i <= 10; i++) {
//     let tr = document.createElement("tr");
//     for (let i = 1; i <= 10; i++) {
//       td = document.createElement("td");
//       td.innerHTML = k;
//       tr.append(td);
//       k++;
//       // console.log(k);
//     }
//     random2.push(getRandomInt(j, k));
//     j += 10;
//     table.append(tr);
//   }
//   console.log(random2);
//   let k2 = 0;
//   let tds = document.querySelectorAll("#table td");
//   for (let i of tds) {
//     i.addEventListener("click", function func(event) {
//       console.log(event.target.innerHTML);
//       if (random2.includes(+event.target.innerHTML) == true) {
//         k2++;
//         console.log(k2);
//         if (k2 == 10) {
//           table.textContent = "Вы победили";
//         }
//         i.setAttribute("class", "tbbgrdgreen");
//         i.removeEventListener("click", func);
//       }
//     });
//   }
  
//   // №2
//   let span = document.querySelector("#span");
//   let timerId = setInterval(function () {
//     span.textContent--;
//     if (+span.textContent <= 0) {
//       clearInterval(timerId);
//       table.textContent = "Вы проиграли!";
//     }
//   }, 1000);
  
//   // Экранная клавиатура
//   let but = document.querySelectorAll(".but");
//   let display = document.querySelector(".display");
//   let backspace = document.querySelector(".backspace");
//   let capslock = document.querySelector(".caps_lock");
//   let space = document.querySelector(".space");
  
//   for (let k of but) {
//     k.addEventListener("click", function () {
//       display.textContent += k.value;
//     });
//   }
  
//   let k3 = 1;
//   capslock.addEventListener("click", function () {
//     if (k3 == 1) {
//       for (let k of but) {
//         k.value = k.value.toUpperCase();
//       }
//       k3 += 1;
//     } else {
//       for (let k of but) {
//         k.value = k.value.toLowerCase();
//       }
//       k3 -= 1;
//     }
//   });
  
//   backspace.addEventListener("click", function () {
//     display.textContent = "";
//   });
  
//   space.addEventListener("click", function () {
//     display.textContent += " ";
//   });
  
//   // Линейный календарь
//   let previousMonth = document.querySelector(".previousMonth");
//   let monthText = document.querySelector(".monthText");
//   let yearText = document.querySelector(".yearText");
//   let nextMonth = document.querySelector(".nextMonth");
//   let days = document.querySelector("#days");
  
//   let nowDate = new Date();
//   let nowDay = nowDate.getDate();
//   let nowMonth = nowDate.getMonth();
//   let nowYear = nowDate.getFullYear();
//   let monthName = [
//     "Январь",
//     "Февраль",
//     "Март",
//     "Апрель",
//     "Май",
//     "Июнь",
//     "Июль",
//     "Август",
//     "Сентябрь",
//     "Октябрь",
//     "Ноябрь",
//     "Декабрь",
//   ];
  
//   let curDate = nowDate.setMonth(nowDate.getMonth() - 1);
//   console.log(nowDate.getFullYear());
  
//   function setMonthCalendar(year, month) {
//     let lastDayMonth = new Date(year, month + 1, 0).getDate();
//     let lastDayPreviousMonth = new Date(year, month, 0).getDay();
//     let monthDaysText = "";
  
//     monthText.textContent = monthName[month];
//     yearText.textContent = year;
//     days.innerHTML = "";
  
//     if (lastDayPreviousMonth > 0) {
//       for (let i = 1; i <= lastDayPreviousMonth; i++) {
//         monthDaysText += "<li></li>";
//       }
//     }
//     for (let i = 1; i <= lastDayMonth; i++) {
//       monthDaysText += "<li>" + i + "</li>";
//     }
  
//     days.innerHTML = monthDaysText;
  
//     if (month == nowMonth && year == nowYear) {
//       let li = days.getElementsByTagName("li");
//       li[lastDayPreviousMonth + nowDay - 1].classList.add("date-now");
//     }
//   }
  
//   setMonthCalendar(nowYear, nowMonth);
  
//   previousMonth.onclick = function () {
//     let curDate = new Date(
//       yearText.textContent,
//       monthName.indexOf(monthText.textContent)
//     );
  
//     curDate.setMonth(curDate.getMonth() - 1);
  
//     let curYear = curDate.getFullYear(),
//       curMonth = curDate.getMonth();
  
//     setMonthCalendar(curYear, curMonth);
//   };
  
//   nextMonth.onclick = function () {
//     let curDate = new Date(
//       yearText.textContent,
//       monthName.indexOf(monthText.textContent)
//     );
  
//     curDate.setMonth(curDate.getMonth() + 1);
  
//     let curYear = curDate.getFullYear(),
//       curMonth = curDate.getMonth();
  
//     setMonthCalendar(curYear, curMonth);
//   };
  
//   // Поиск тегов
//   let inp23 = document.querySelector("#inp23");
//   let error = document.querySelector("#error");
//   let search_tag = document.querySelector(".search_tag");
  
//   function init() {
//     let block_textTag = document.querySelectorAll(".block_textTag");
//     for (let i = 0; i < block_textTag.length; i++) {
//       block_textTag[i].style.display = "none";
//     }
//   }
//   init();
  
//   inp23.addEventListener("keypress", function (event) {
//     let data = inp23.value;
//     if (event.key == "Enter") {
//       let block_textTag = document.querySelectorAll(".block_textTag");
//       for (let i = 0; i < block_textTag.length; i++) {
//         block_textTag[i].style.display = "none";
//       }
//       let block = document.querySelector('.block_textTag[data="' + data + '"]');
//       block.style.display = "block";
//       console.log(block);
//     }
//   });
  
//   // Поиск исторических события
//   let inp24 = document.querySelector("#inp24");
//   let table2 = document.querySelector("#table2");
  
//   let events = {
//     2023: [
//       {
//         date: "01.01.2023",
//         name: "событие 1",
//         text: "Вступление Хорватии в Шенгенскую зону, переход Хорватии на евро.",
//       },
//       {
//         date: "01.01.2023",
//         name: "событие 2",
//         text: "Вступление Луиса Инасиу Лулы да Силвы в должность президента Бразилии.",
//       },
//       {
//         date: "01.01.2023",
//         name: "событие 3",
//         text: "В Казахстане вместо Конституционного совета был восстановлен Конституционный суд, упразднённый в 1995 году.",
//       },
//       {
//         date: "06.01.2023",
//         name: "событие 4",
//         text: "Кевин Маккарти избран спикером Палаты представителей США.",
//       },
//     ],
//     2022: [
//       {
//         date: "01.01.2022",
//         name: "событие 1",
//         text: "Вступление в России в силу федерального закона о приземлении иностранных IT-компаний.",
//       },
//       {
//         date: "01.01.2022",
//         name: "событие 2",
//         text: "Вступление в силу 11 версии Международной классификации болезней (МКБ-11).",
//       },
//       {
//         date: "01.01.2022",
//         name: "событие 3",
//         text: "Вступление в РФ в силу запрета на экспорт необработанного круглого леса и запущена цифровая информационная система отслеживания оборота сырья.",
//       },
//       {
//         date: "01.01.2022",
//         name: "событие 4",
//         text: "Полное снятие в КНР ограничений на инвестиции иностранного капитала в местный автопром.",
//       },
//     ],
//     2021: [
//       {
//         date: "01.01.2021",
//         name: "событие 1",
//         text: "Запрет использования пластиковых пакетов в магазинах в крупных городах КНР.",
//       },
//       {
//         date: "01.01.2021",
//         name: "событие 2",
//         text: "Остановка поддержки и обновления «Flash Player» компанией «Adobe».",
//       },
//       {
//         date: "01.01.2021",
//         name: "событие 3",
//         text: "Прекращение выдачи бумажных трудовых книжек в Российской Федерации.",
//       },
//       {
//         date: "01.01.2021",
//         name: "событие 4",
//         text: "Начало поставки компанией «Газпром» природного газа в Сербию и Боснию и Герцеговину по новому маршруту.",
//       },
//     ],
//   };
  
//   inp24.addEventListener("keydown", function (event) {
//     if (event.key == "Enter") {
//       let year = inp24.value;
  
//       if (events[year]) {
//         table2.textContent = "";
  
//         for (let event of events[year]) {
//           let tr = document.createElement("tr");
  
//           let td;
  
//           td = document.createElement("td");
//           td.textContent = event.date;
//           tr.appendChild(td);
  
//           td = document.createElement("td");
//           td.textContent = event.name;
//           tr.appendChild(td);
  
//           td = document.createElement("td");
//           td.textContent = event.text;
//           tr.appendChild(td);
  
//           table2.appendChild(tr);
//         }
//       }
//     }
//   });
  
//   // Гороскоп
//   let inp25 = document.querySelector("#inp25");
//   let goroskop = document.querySelector(".goroskop");
  
//   let date = {
//     "03.01.2005": [
//       {
//         textToday:
//           "У Тельцов могут возникнуть проблемы с разумом. Вероятны поломки логики, сложные галюцинации, . Наиболее серьезные трудности возникнут у тех, кто находится в далеких поездках. Финансовая картина не благоприятна, умение здраво оценивать свои возможности помогжет вам  Возможно получение приятных подарков от военкомата. Этот день стоит посвятить общению с собой; погоня за новыми вещами не приведет ни к чему хорошему, а попытки наладить отношения с теми, кто может быть полезен, увенчаются успехом.",
//         textTomorrow:
//           "Козероги преуспеют в делах, если  будут отказываться от проектов, не сулящих немедленного получения дохода. Усилия, приложенные сегодня, не будут напрасными, однако награды за труды придется много ждать. Способность к разумному не планированию и не умение оценить последствия каждого совершенного шага  позволит потерять свой авторитет в профессиональных кругах. Однако менее удачливым представителям знака следует быть готовыми к проявлению зависти со стороны менее успешных коллег.",
//           textForAweek:
//           "Весьма серьезные проблемы возникнут в деловых отношениях.",
//       },
//     ],
//     "15.04.2005": [
//       {
//         textToday: "Финансовая ситуация очень проста, гОвнам предстоит расстаться с весьма не значительными суммами, и не всегда по своей воле. ",
//         textTomorrow: "гОвны  слишком внимательно относятся к исполнению своих обычных обязанностей.",
//         textForAweek:
//           "Эта неделя – не благоприятное время для реализации планов, укрепления деловых и дружеских отношений, а также новых знакомств.",
//       },
//     ],
//   };
  
//   inp25.addEventListener("keydown", function (event) {
//     if (event.key == "Enter") {
//       let data = inp25.value;
//       goroskop.textContent = "";

  
//       if (date[data]) {
//         for (let elem of date[data]) {
//           let div = document.createElement("div");
//           div.className = "inpradio";
  
//           let input1 = document.createElement("input");
//           let input2 = document.createElement("input");
//           let input3 = document.createElement("input");
//           input1.type = "radio";
//           input1.checked = "checked";
//           input2.type = "radio";
//           input3.type = "radio";
//           input1.name = "data";
//           input2.name = "data";
//           input3.name = "data";
  
//           let div2 = document.createElement("div");
//           div2.className = "block";
  
//           let div3 = document.createElement("div");
//           div3.className = "block";
  
//           let div4 = document.createElement("div");
//           div4.className = "block";
  
//           let p2 = document.createElement("p");
//           p2.textContent = "Сегодня";
//           let p3 = document.createElement("p");
//           p3.textContent = "Завтра";
//           let p4 = document.createElement("p");
//           p4.textContent = "На неделю";
  
//           let p = document.createElement("p");
//           p.textContent = elem.textToday;
  
//           goroskop.append(div);
  
//           div2.appendChild(input1);
//           div2.appendChild(p2);
//           div.appendChild(div2);
  
//           div3.appendChild(input2);
//           div3.appendChild(p3);
//           div.appendChild(div3);
  
//           div4.appendChild(input3);
//           div4.appendChild(p4);
//           div.appendChild(div4);
//           goroskop.appendChild(p);
  
//           console.log(elem.textToday);
//           input1.addEventListener("change", function () {
//             p.textContent = elem.textToday;
//           });
//           input2.addEventListener("change", function () {
//             p.textContent = elem.textTomorrow;
//           });
//           input3.addEventListener("change", function () {
//             p.textContent = elem.textAterTomorrow;
//           });
//         }
//       }
//     }
//   });
  
//   // Сайт предсказаний
  
//   let good__predictions = [
//     "Вас ждет заклиневший мотор",
//     "За твоей дверью уже стоит дядя Богдан с гаечным ключом",
//     "Повезет встретися лоб в лоб с икарусом",
//     "Будешь одной рукой рулить , а второй слезы счастья вытиать.",
//     "Тебя ожидает долгий ремонт.",
//     "Всю зиму будешь дрифтить у ашана.",
//     "Успешным будет уход.",
//   ];
  
//   let bad__predictions = [
//     "Вы отойдете в мир иной",
//     "Получите 12.5.1",
//     "Сегодня вас арестуют",
//     "Сегодня у вас отвалится колесо",
//     "Вы не найдете запчасти",
//     "Вечером вы попадёте в облаву",
//     "Вам не удастся избежать потерь запчастей",
//   ];
  
//   let timer = document.querySelector("#timer");
//   let good__text = document.querySelector("#good__text");
//   let bad__text = document.querySelector("#bad__text");
//   let start = document.querySelector("#start");
//   let stop = document.querySelector("#stop");
  
//   let random3;
//   let timerId3;
//   start.addEventListener("click", function () {
//     this.classList.remove("active");
//     stop.classList.add("active");
  
//     timerId3 = setInterval(function () {
//       timer.textContent = random3 = getRandomInt(1, good__predictions.length);
//     }, 100);
//   });
  
//   stop.addEventListener("click", function () {
//     this.classList.remove("active");
//     clearInterval(timerId3);
  
//     good__text.textContent = good__predictions[random3 - 1];
//     bad__text.textContent = bad__predictions[random3 - 1];
//   });
  
//   function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
  // Автодополнение
  // let arr = [
  //   "Понедельник",
  //   "Вторник",
  //   "Среда",
  //   "Четверг",
  //   "Пятница",
  //   "Суббота",
  //   "Воскресенье"
  // ];
  
  // let elem = document.querySelector("#elem");
  // let list = document.querySelector("#list");
  
  // elem.addEventListener("input", function () {
  //   list.textContent = "";
  
  //   if (this.value !== "") {
  //     let matches = arr.filter((item) => item.startsWith(this.value));
  
  //     if (matches.length > 0) {
  //       for (let match of matches) {
  //         let li = document.createElement("li");
  //         li.textContent = match;
  //         list.appendChild(li);
  
  //         li.addEventListener("click", function () {
  //           elem.value = this.textContent;
  //           list.textContent = "";
  //         });
  //       }
  //     }
  //   }
  // });
  
  // Спойлер
  // let toggle2 = document.querySelectorAll(".toggle");
  
  // for (let elem of toggle2) {
  //   elem.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     elem.parentElement.nextElementSibling.classList.toggle('active');
  //   });
  // }
  
  
  // Вкладки      
  // let parent = document.querySelector('#parent-tabs');
  // let links  = parent.querySelectorAll('.menu a');
  // let tabs   = parent.querySelectorAll('.tab');
  
  // for (let i = 0; i < links.length; i++) {
  //   links[i].addEventListener('click', function(event) {
  //     let activeLink = parent.querySelector('.menu a.active');
  //     activeLink.classList.remove('active');
      
  //     let activeTab = parent.querySelector('.tab.active');
  //     activeTab.classList.remove('active');
      
  //     tabs[i].classList.add('active');
  //     this.classList.add('active');
      
  //     event.preventDefault();
  //   });
  // }
  
//   Аккордион           
  let accordion = document.querySelector('#accordion');
  let linkss  = accordion.querySelectorAll('.tab .link a'); 
  for (let link of linkss) {
    link.addEventListener('click', function(event) {
      let activeTab = accordion.querySelector('.tab.active');     
      if (activeTab) {
        activeTab.classList.remove('active');
      }    
      let newTab = link.closest('.tab');
      if (newTab !== activeTab) {
        newTab.classList.add('active');
      }     
      event.preventDefault();
    })}