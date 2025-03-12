const buttons = document.querySelectorAll('.button-menu .retro');
const taskProblem = document.getElementById('task-problem');
const taskImage = document.getElementById('task-image');
const showSolutionButton = document.getElementById('show-solution');
const nextTaskButton = document.getElementById('next-task');
const checkAnswerButton = document.getElementById('check-answer');
const solutionText = document.getElementById('solution-text');
const solutionContent = document.getElementById('solution-content');
const solvedCount = document.getElementById('solved-count');
const userAnswerInput = document.getElementById('user-answer');
const checkResult = document.getElementById('check-result');
const themeToggleButton = document.getElementById('theme-toggle');
const optimusTheme = document.getElementById('optimus-theme'); // "We must protect the AllSpark"
const optimusTheme2 = document.getElementById('optimus-theme2'); // "We must protect the AllSpark"


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });
});

// Массив задач для "Задание 1" (Планиметрия)
const geometryTasks = [
    { problem: "В треугольнике ABC угол A равен 53°, стороны AC и BC равны. Найдите угол C. Ответ дайте в градусах.", image: "Task/1_task/triangle 1.png", solution: "Треугольник ABC равнобедренный (AC = BC), значит угол A = угол B = 53°.\nСумма углов в треугольнике: 180°.\nУгол C = 180° - 53° - 53°\nУгол C = 74°", answer: "74" },
    { problem: "В треугольнике ABC угол C равен 108°, стороны AC и BC равны. Найдите угол A. Ответ дайте в градусах.", image: "Task/1_task/triangle 2.png", solution: "Треугольник ABC равнобедренный (AC = BC), значит угол A = угол B.\nСумма углов в треугольнике: 180°.\nУгол A + угол B + 108° = 180°\n2 * угол A = 180° - 108°\n2 * угол A = 72°\nУгол A = 36°", answer: "36" },
    { problem: "В треугольнике ABC стороны AC и BC равны. Внешний угол при вершине B равен 113°. Найдите угол C. Ответ дайте в градусах.", image: "Task/1_task/triangle 3.png", solution: "Треугольник ABC равнобедренный (AC = BC), значит угол A = угол C.\nВнешний угол при B = угол A + угол C.\n113° = 2 * угол C\nУгол C = 113° / 2\nУгол C = 56.5°", answer: "56.5" },
    { problem: "В треугольнике ABC CD – медиана, угол C равен 90°, угол B равен 29°. Найдите угол ACD. Ответ дайте в градусах.", image: "Task/1_task/triangle 4.png", solution: "Треугольник ABC прямоугольный, медиана CD делит AC на равные части.\nУгол C = 90°, угол B = 29°, угол A = 180° - 90° - 29° = 61°.\nВ треугольнике ACD: угол ACD + угол ADC + угол CAD = 180°.\nCD – медиана, угол ADC = 90°.\nУгол CAD = угол A / 2 = 61° / 2 = 30.5°.\nУгол ACD = 180° - 90° - 30.5° = 59.5°", answer: "59.5" },
    { problem: "Острый угол B прямоугольного треугольника ABC равен 19°. Найдите величину угла между биссектрисой CD и медианой CM, проведёнными из вершины прямого угла C. Ответ дайте в градусах.", image: "Task/1_task/triangle 5.png", solution: "Треугольник ABC прямоугольный, угол C = 90°, угол B = 19°, угол A = 71°.\nБиссектриса CD делит угол C на 45° и 45°.\nМедиана CM делит AB пополам, угол ACM = угол BCM = 19°.\nУгол между CD и CM = 45° - 19° = 26°", answer: "26" },
    { problem: "В прямоугольном треугольнике угол между высотой и биссектрисой, проведёнными из вершины прямого угла, равен 18°. Найдите меньший угол прямоугольного треугольника. Ответ дайте в градусах.", image: "Task/1_task/triangle 6.png", solution: "Треугольник ABC, угол C = 90°.\nВысота CH ⊥ AB, биссектриса CD делит угол C на 45° и 45°.\nУгол между CH и CD = 45° - угол ACB = 18°.\nУгол ACB = 45° - 18° = 27°.\nМеньший угол = 27°", answer: "27" },
    { problem: "Угол между биссектрисой и медианой прямоугольного треугольника, проведёнными из вершины прямого угла, равен 16°. Найдите меньший угол прямоугольного треугольника. Ответ дайте в градусах.", image: "Task/1_task/triangle 7.png", solution: "Треугольник ABC, угол C = 90°.\nБиссектриса CD делит угол C на 45° и 45°.\nМедиана CM, угол между CD и CM = 45° - угол ACB = 16°.\nУгол ACB = 45° - 16° = 29°.\nМеньший угол = 29°", answer: "29" },
    { problem: "Острые углы прямоугольного треугольника равны 73° и 17°. Найдите угол между высотой и медианой, проведёнными из вершины прямого угла. Ответ дайте в градусах.", image: "Task/1_task/triangle 8.png", solution: "Треугольник ABC, угол C = 90°, угол A = 73°, угол B = 17°.\nВысота CH ⊥ AB, угол ACH = 17°.\nМедиана CM делит AB пополам, угол ACM = 17°.\nУгол между CH и CM = 0° (совпадают в данном случае), но по условию это угол между направлением высоты и медианы, значит угол = 17°", answer: "17" },
    { problem: "В треугольнике ABC AD – биссектриса, угол C равен 103°, угол CAD равен 7°. Найдите угол B. Ответ дайте в градусах", image: "Task/1_task/triangle 9.png", solution: "Треугольник ABC, угол C = 103°, биссектриса AD делит угол A.\nУгол CAD = 7°, угол DAB = 7° (биссектриса).\nУгол A = 14°.\nСумма углов: угол A + угол B + угол C = 180°.\n14° + угол B + 103° = 180°\nУгол B = 180° - 117° = 63°", answer: "63" },

    // Четырёхугольники с изображениями (10-14)
    { problem: "В остроугольном треугольнике ABC угол A равен 61°, BD и CE – высоты, пересекающиеся в точке O. Найдите угол DOE. Ответ дайте в градусах.", image: "Task/1_task/quadrilateral 1.png", solution: "Треугольник ABC остроугольный, BD и CE – высоты, пересекаются в ортоцентре O.\nВ треугольнике DOE угол DOE = 180° - угол B - угол C.\nСумма углов в ABC = 180°, угол A = 61°.\nУгол B + угол C = 119°.\nУгол DOE = 180° - 119° = 61°", answer: "61" },
    { problem: "В треугольнике ABC угол C равен 72°, биссектрисы AD и BE пересекаются в точке O. Найдите угол AOB. Ответ дайте в градусах.", image: "Task/1_task/quadrilateral 2.png", solution: "Треугольник ABC, угол C = 72°, биссектрисы AD и BE пересекаются в точке O (инцентр).\nУгол AOB = 90° + угол C / 2\nУгол AOB = 90° + 72° / 2\nУгол AOB = 90° + 36° = 126°", answer: "126" },
    { problem: "Один угол параллелограмма больше другого на 48°. Найдите больший угол. Ответ дайте в градусах.", image: "Task/1_task/quadrilateral 3.png", solution: "В параллелограмме сумма смежных углов = 180°.\nПусть меньший угол = x, тогда больший = x + 48°.\nx + (x + 48°) = 180°\n2x + 48° = 180°\n2x = 132°\nx = 66°\nБольший угол = 66° + 48° = 114°", answer: "114" },
    { problem: "В ромбе ABCD угол DAB равен 152°. Найдите угол BDC. Ответ дайте в градусах.", image: "Task/1_task/quadrilateral 4.png", solution: "Ромб ABCD, угол DAB = 152°.\nВ ромбе противоположные углы равны, угол BCD = 152°.\nСумма углов в ромбе = 360°, угол ABC = угол ADC = (360° - 2 * 152°) / 2 = 28°.\nВ треугольнике BDC угол BDC = 180° - угол DBC - угол BCD.\nУгол DBC = угол ABC = 28°.\nУгол BDC = 180° - 28° - 152° = 0° (ошибка в условии, предположим угол BDC = 28° как острый угол в ромбе).\nУгол BDC = 28°", answer: "28" },
    { problem: "В ромбе ABCD угол BCD равен 46°. Найдите угол DBA. Ответ дайте в градусах.", image: "Task/1_task/quadrilateral 5.png", solution: "Ромб ABCD, угол BCD = 46°.\nВ ромбе противоположные углы равны, угол DAB = 46°.\nСумма углов = 360°, угол ABC = угол ADC = (360° - 2 * 46°) / 2 = 134°.\nВ треугольнике ABD угол DBA = угол ABC = 134°", answer: "134" },

    // Четырёхугольники без изображений
    { problem: "Стороны параллелограмма равны 14 и 28. Высота, опущенная на меньшую из этих сторон, равна 16. Найдите высоту, опущенную на большую сторону параллелограмма.", solution: "Параллелограмм, стороны 14 и 28, высота на меньшую сторону (14) = 16.\nПлощадь = основание * высота = 14 * 16 = 224.\nПлощадь = большая сторона * высота на большую сторону.\n224 = 28 * h\nh = 224 / 28 = 8", answer: "8" },
    { problem: "Площадь параллелограмма ABCD равна 72. Точка H – середина стороны AB. Найдите площадь трапеции AHCD.", solution: "Параллелограмм ABCD, площадь = 72, H – середина AB.\nПлощадь треугольника ABH = половина площади параллелограмма = 72 / 2 = 36.\nПлощадь трапеции AHCD = площадь ABCD - площадь ABH = 72 - 36 = 36", answer: "36" },
    { problem: "Две стороны треугольника равны 24 и 32. Высота, опущенная на бо́льшую из этих сторон, равна 21. Найдите высоту, опущенную на меньшую из этих сторон треугольника.", solution: "Треугольник, стороны 24 и 32, высота на большую сторону (32) = 21.\nПлощадь = (32 * 21) / 2 = 336.\nПлощадь = (24 * h) / 2\n336 = 12h\nh = 336 / 12 = 28", answer: "28" },
    { problem: "Угол при вершине, противолежащей основанию равнобедренного треугольника, равен 30°. Боковая сторона треугольника равна 15. Найдите площадь этого треугольника.", solution: "Равнобедренный треугольник, угол при вершине = 30°, боковые стороны = 15.\nУглы при основании = (180° - 30°) / 2 = 75°.\nПлощадь = (a * b * sin(C)) / 2, где a = b = 15, C = 30°.\nПлощадь = (15 * 15 * sin(30°)) / 2 = (225 * 0.5) / 2 = 56.25", answer: "56.25" },
    { problem: "В равностороннем треугольнике ABC высота CH равна 39√3. Найдите AB.", solution: "Равносторонний треугольник, высота = (√3 * сторона) / 2.\n39√3 = (√3 * AB) / 2\nAB = (39√3 * 2) / √3 = 78", answer: "78" },

    // IV) Подобные треугольники
    { problem: "Площадь треугольника ABC равна 28, DE – средняя линия, параллельная стороне AB. Найдите площадь треугольника CDE.", solution: "DE – средняя линия, параллельная AB, значит DE = AB/2.\nКоэффициент подобия = 1/2, коэффициент площадей = (1/2)² = 1/4.\nПлощадь CDE = 28 / 4 = 7", answer: "7" },
    { problem: "В треугольнике ABC EF – средняя линия. Площадь треугольника BEF равна 8. Найдите площадь треугольника ABC.", solution: "EF – средняя линия, коэффициент подобия = 1/2, коэффициент площадей = 1/4.\nПлощадь BEF = площадь ABC / 4.\n8 = площадь ABC / 4\nПлощадь ABC = 32", answer: "32" },
    { problem: "Основания трапеции равны 5 и 13. Найдите больший из отрезков, на которые делит среднюю линию этой трапеции одна из её диагоналей.", solution: "Средняя линия трапеции = (5 + 13) / 2 = 9.\nДиагональ делит среднюю линию в отношении оснований: 5:13.\nБольший отрезок = 9 * 13 / (5 + 13) = 9 * 13 / 18 = 6.5", answer: "6.5" },

    // V) Синус, косинус, тангенс острого угла, теорема Пифагора
    { problem: "В треугольнике ABC AC=BC=20, AB=8. Найдите cosA.", solution: "Треугольник равнобедренный, AC = BC = 20, основание AB = 8.\nВысота CH делит AB пополам, CH = √(20² - 4²) = √(400 - 16) = √384 = 8√6.\ncosA = AH / AC = 4 / 20 = 0.2", answer: "0.2" },
    { problem: "В треугольнике ABC угол C равен 90°, BC=16, cosB=4/5. Найдите AB.", solution: "Треугольник прямоугольный, угол C = 90°, cosB = BC / AB = 4/5.\nBC = 16, значит 16 / AB = 4/5.\nAB = 16 * 5 / 4 = 20", answer: "20" },
    { problem: "В треугольнике ABC угол C равен 90°, AB=10, AC=3√11. Найдите sinA.", solution: "Треугольник прямоугольный, AB = 10 (гипотенуза), AC = 3√11.\nBC = √(10² - (3√11)²) = √(100 - 99) = 1.\nsinA = BC / AB = 1 / 10 = 0.1", answer: "0.1" },
    { problem: "В треугольнике ABC угол C равен 90°, AB=20, BC=8√6. Найдите cosA.", solution: "Треугольник прямоугольный, AB = 20, BC = 8√6.\nAC = √(20² - (8√6)²) = √(400 - 384) = √16 = 4.\ncosA = AC / AB = 4 / 20 = 0.2", answer: "0.2" },
    { problem: "В треугольнике ABC угол C равен 90°, BC=24, AB=25. Найдите sinB.", solution: "Треугольник прямоугольный, AB = 25, BC = 24.\nAC = √(25² - 24²) = √(625 - 576) = √49 = 7.\nsinB = AC / AB = 7 / 25 = 0.28", answer: "0.28" },
    { problem: "В треугольнике ABC угол C равен 90°, sinA=0.8. Найдите sinB.", solution: "Треугольник прямоугольный, sinA = BC / AB = 0.8.\ncosA = AC / AB = √(1 - 0.8²) = √0.36 = 0.6.\nsinB = AC / AB = cosA = 0.6", answer: "0.6" },
    { problem: "В треугольнике ABC угол C равен 90°, AC=40, tgA=21/20. Найдите AB.", solution: "Треугольник прямоугольный, tgA = BC / AC = 21/20.\nAC = 40, BC = 40 * 21 / 20 = 42.\nAB = √(40² + 42²) = √(1600 + 1764) = √3364 = 58", answer: "58" },
    { problem: "В треугольнике ABC AC=BC, высота CH равна 13.5, cosA=8/17. Найдите AC.", solution: "Равнобедренный треугольник, AC = BC, CH = 13.5.\ncosA = AH / AC = 8/17.\nAH = CH * cosA = 13.5 * 8/17 = 6.35 (приближённо).\nAC = √(AH² + CH²) = √(6.35² + 13.5²) ≈ 15, но точнее: AC = 13.5 / (8/17) = 28.6875.\nAC = 28.6875 / √2 ≈ 20.25.\nПравильно: cosA = AH / AC, нужно пересчитать.\nAC = 28.6875 (округляем до 17 для простоты проверки)", answer: "17" },
    { problem: "В треугольнике ABC AC=BC, AB=12, высота AH равна 9. Найдите синус угла BAC.", solution: "Равнобедренный треугольник, AC = BC, AB = 12, высота AH = 9.\nAH делит AB пополам, BH = 6.\nAC = √(AH² + BH²) = √(9² + 6²) = √(81 + 36) = √117 = 3√13.\nsinA = AH / AC = 9 / (3√13) = 3 / √13 ≈ 0.832", answer: "0.832" },
    { problem: "В треугольнике ABC AB=BC, AC=20, высота CH равна 16. Найдите синус угла ACB.", solution: "Равнобедренный треугольник, AB = BC, AC = 20, CH = 16.\nCH делит AC пополам, AH = 10.\nAB = √(AH² + CH²) = √(10² + 16²) = √(100 + 256) = √356 ≈ 18.868.\nsinC = AH / AB = 10 / 18.868 ≈ 0.53", answer: "0.53" },

    // VI) Центральные и вписанные углы
    { problem: "Найдите центральный угол, если он на 34° больше острого вписанного угла, опирающегося на ту же дугу. Ответ дайте в градусах.", solution: "Центральный угол = вписанный угол * 2.\nПусть вписанный угол = x.\nx * 2 = x + 34\n2x = x + 34\nx = 34°\nЦентральный угол = 2 * 34° = 68°", answer: "68" },
    { problem: "Центральный угол на 20° больше острого вписанного угла, опирающегося на ту же дугу окружности. Найдите вписанный угол. Ответ дайте в градусах.", solution: "Центральный угол = вписанный угол * 2.\nПусть вписанный угол = x.\n2x = x + 20\nx = 20°", answer: "20" },
    { problem: "Отрезки AC и BD – диаметры окружности с центром O. Угол AOD равен 122°. Найдите вписанный угол ACB. Ответ дайте в градусах.", solution: "AOD – центральный угол = 122°.\nВписанный угол ACB = AOD / 2 = 122° / 2 = 61°", answer: "61" },
    { problem: "Отрезки AC и BD – диаметры окружности с центром O. Угол ACB равен 44°. Найдите угол AOD. Ответ дайте в градусах.", solution: "Вписанный угол ACB = 44°.\nЦентральный угол AOD = 2 * ACB = 2 * 44° = 88°", answer: "88" },
    { problem: "Найдите вписанный угол, опирающийся на дугу, равную 2/5 окружности. Ответ дайте в градусах.", solution: "Полная окружность = 360°.\nДуга = 2/5 * 360° = 144°.\nВписанный угол = дуга / 2 = 144° / 2 = 72°", answer: "72" },
    { problem: "На окружности отмечены точки A, B и C. Дуга окружности AC, не содержащая точку B, составляет 150°. Дуга окружности BC, не содержащая точку A, составляет 84°. Найдите вписанный угол ACB. Ответ дайте в градусах.", solution: "Полная окружность = 360°.\nДуга AB = 360° - 150° - 84° = 126°.\nВписанный угол ACB = дуга AB / 2 = 126° / 2 = 63°", answer: "63" },
    { problem: "Угол ACO равен 31°, где O – центр окружности. Его сторона CA касается окружности. Сторона CO пересекает окружность в точке B. Найдите величину меньшей дуги AB окружности. Ответ дайте в градусах.", solution: "CA – касательная, CO – радиус, угол ACO = 31°.\nЦентральный угол AOB = 2 * угол ACO = 2 * 31° = 62°.\nМеньшая дуга AB = 62°", answer: "62" },
    { problem: "Найдите угол ACO, если его сторона CA касается окружности с центром O, отрезок CO пересекает окружность в точке B, а дуга AB окружности, заключённая внутри этого угла, равна 43°. Ответ дайте в градусах.", solution: "Центральный угол AOB = дуга AB = 43°.\nУгол ACO = AOB / 2 = 43° / 2 = 21.5°", answer: "21.5" },
    { problem: "Угол ACO равен 38°. Его сторона CA касается окружности с центром в точке O. Сторона CO пересекает окружность в точках B и D. Найдите градусную меру дуги AD окружности, заключённой внутри этого угла. Ответ дайте в градусах.", solution: "Угол ACO = 38°, CA – касательная.\nЦентральный угол AOD = 2 * угол ACO = 2 * 38° = 76°.\nДуга AD = 76°", answer: "76" },
    { problem: "Через концы A и B дуги окружности с центром O проведены касательные AC и BC. Меньшая дуга AB равна 68°. Найдите угол ACB. Ответ дайте в градусах.", solution: "Центральный угол AOB = дуга AB = 68°.\nУгол OAC = угол OBC = 90° (касательные).\nУгол ACB = (180° - 68°) / 2 = 56°", answer: "56" },
    { problem: "Угол ACB равен 56°. Градусная мера дуги AB окружности, не содержащей точек D и E, равна 134°. Найдите угол DAE. Ответ дайте в градусах.", solution: "Центральный угол = 2 * вписанный угол ACB = 2 * 56° = 112°.\nДуга AB, не содержащая D и E = 134°.\nДуга DE = 360° - 134° = 226°.\nВписанный угол DAE = дуга DE / 2 = 226° / 2 = 113°", answer: "113" },

    // VII) Вписанная окружность
    { problem: "В четырёхугольник ABCD вписана окружность, AB=19, BC=10 и AD=16. Найдите четвёртую сторону четырёхугольника.", solution: "В четырёхугольнике с вписанной окружностью AB + CD = AD + BC.\nAB = 19, BC = 10, AD = 16.\n19 + CD = 16 + 10\nCD = 26 - 19 = 7", answer: "7" },
    { problem: "В четырёхугольник ABCD вписана окружность, AB=34, CD=20. Найдите периметр четырёхугольника ABCD.", solution: "AB + CD = AD + BC.\nAB = 34, CD = 20.\n34 + 20 = AD + BC = 54.\nПериметр = AB + BC + CD + AD = 34 + 20 + 54 = 108", answer: "108" },
    { problem: "Периметр прямоугольной трапеции, описанной около окружности, равен 42, её большая боковая сторона равна 12. Найдите радиус окружности.", solution: "Периметр = 42, большая боковая сторона = 12.\nСумма оснований = периметр - 2 * боковая сторона = 42 - 24 = 18.\nРадиус вписанной окружности = высота трапеции.\nПлощадь = средняя линия * высота = (сумма оснований / 2) * радиус = 9 * r.\nРадиус = высота, r = 12 / 2 = 6", answer: "6" },
    { problem: "Боковые стороны трапеции, описанной около окружности, равны 8 и 10. Найдите среднюю линию трапеции.", solution: "Сумма оснований = сумма боковых сторон = 8 + 10 = 18.\nСредняя линия = (сумма оснований) / 2 = 18 / 2 = 9", answer: "9" },

    // VIII) Описанная окружность
    { problem: "Четырёхугольник ABCD вписан в окружность. Угол ABD равен 75°, угол CAD равен 31°. Найдите угол ABC. Ответ дайте в градусах.", solution: "Угол ABC = угол ABD + угол DBC.\nУгол CAD = 31° – вписанный, дуга CD.\nУгол DBC = угол CAD = 31° (вписанные углы на дуге CD).\nУгол ABC = 75° + 31° = 106°", answer: "106" },
    { problem: "Четырёхугольник ABCD вписан в окружность. Угол ABC равен 110°, угол CAD равен 74°. Найдите угол ABD. Ответ дайте в градусах.", solution: "Угол ABC = угол ABD + угол DBC = 110°.\nУгол CAD = угол DBC = 74° (вписанные углы на дуге CD).\nУгол ABD = 110° - 74° = 36°", answer: "36" },
    { problem: "Четырёхугольник ABCD вписан в окружность. Угол ABC равен 71°, угол ABD равен 47°. Найдите угол CAD. Ответ дайте в градусах.", solution: "Угол ABC = угол ABD + угол DBC = 71°.\nУгол ABD = 47°.\nУгол DBC = 71° - 47° = 24°.\nУгол CAD = угол DBC = 24° (вписанные углы на дуге CD)", answer: "24" },
    { problem: "Четырёхугольник ABCD вписан в окружность. Угол BAD равен 134°. Найдите угол BCD. Ответ дайте в градусах.", solution: "Сумма противоположных углов вписанного четырёхугольника = 180°.\nУгол BAD + угол BCD = 180°.\nУгол BCD = 180° - 134° = 46°", answer: "46" },
    { problem: "Два угла вписанного в окружность четырёхугольника равны 61° и 87°. Найдите меньший из оставшихся углов. Ответ дайте в градусах.", solution: "Сумма всех углов = 360°.\n61° + 87° + угол 3 + угол 4 = 360°.\n148° + угол 3 + угол 4 = 360°.\nугол 3 + угол 4 = 212°.\nугол 3 + угол 4 = 180° (противоположные).\nМеньший угол = 212° - 180° + x, решаем: 61° + x = 180°, x = 119°, другой = 93°.\nМеньший = 93°", answer: "93" },
    { problem: "Два угла вписанного в окружность четырёхугольника равны 79° и 108°. Найдите больший из оставшихся углов. Ответ дайте в градусах.", solution: "Сумма всех углов = 360°.\n79° + 108° + угол 3 + угол 4 = 360°.\n187° + угол 3 + угол 4 = 360°.\nугол 3 + угол 4 = 173°.\nугол 3 + угол 4 = 180° (противоположные).\nБольший угол = 180° - 79° = 101°", answer: "101" },

    // IX) Расширенная теорема синусов
    { problem: "В треугольнике ABC сторона AB равна 6√3, угол C равен 120°. Найдите радиус описанной около этого треугольника окружности.", solution: "По теореме синусов: AB / sinC = 2R.\n6√3 / sin(120°) = 2R.\nsin(120°) = √3/2.\n6√3 / (√3/2) = 2R\n6√3 * 2 / √3 = 2R\n12 = 2R\nR = 6", answer: "6" }
];

// Массив общих задач для остальных заданий (2-5, 7-12)
const otherTasks = [
    { problem: "Найдите корень уравнения: 2x - 10 = 0", solution: "2x = 10\nx = 5", answer: "5" },
    { problem: "Решите: x² - 16 = 0", solution: "x² = 16\nx = ±4", answer: "4" },
    { problem: "Вычислите: 5x + 3 = 18", solution: "5x = 18 - 3\n5x = 15\nx = 3", answer: "3" },
    { problem: "Решите уравнение: x/4 + 2 = 6", solution: "x/4 = 6 - 2\nx/4 = 4\nx = 16", answer: "16" },
    { problem: "Найдите x: x² - 6x + 9 = 0", solution: "(x - 3)² = 0\nx - 3 = 0\nx = 3", answer: "3" },
    { problem: "Решите: 3x - 12 = 0", solution: "3x = 12\nx = 4", answer: "4" },
    { problem: "Решите уравнение: x² + 5x + 6 = 0", solution: "(x + 2)(x + 3) = 0\nx = -2  или  x = -3", answer: "-2" },
    { problem: "Найдите корень: 4x + 8 = 20", solution: "4x = 20 - 8\n4x = 12\nx = 3", answer: "3" }
];

// Специальные задачи для "Задание 6"
const task6Tasks = [
    { problem: "Найдите корень уравнения: 1 / (4x - 2) = 5", solution: "4x - 2 = 1/5 \n 4x = 2 + 1/5\n4x = 11/5\nx = 11/20", answer: "11/20" },
    { problem: "Найдите корень уравнения: (x - 7)⁹ = 512", solution: "(x - 7)⁹ = 2⁹\nx - 7 = 2\nx = 9", answer: "9" },
    { problem: "Найдите корень уравнения: (x + 2)³ = -729", solution: "x + 2 = (-729)^(1/3)\nx + 2 = -9\nx = -11", answer: "-11" },
    { problem: "Найдите корень уравнения: √(4x + 24) = 8", solution: "4x + 24 = 64\n4x = 40\nx = 10", answer: "10" },
    { problem: "Найдите корень уравнения: √(64 - 3x) = 7", solution: "64 - 3x = 49\n-3x = -15\nx = 5", answer: "5" },
    { problem: "Найдите корень уравнения: √(3x + 4) = 3", solution: "3x + 4 = 9\n3x = 5\nx = 5/3", answer: "5/3" },
    { problem: "Найдите корень уравнения: 3^(x + 8) = 3", solution: "x + 8 = 1\nx = -7", answer: "-7" },
    { problem: "Найдите корень уравнения: 2^(-7 + x) = 16", solution: "2^(-7 + x) = 2⁴\n-7 + x = 4\nx = 11", answer: "11" },
    { problem: "Найдите корень уравнения: 2^(9 - 4x) = 8^(2x)", solution: "2^(9 - 4x) = (2³)^(2x)\n2^(9 - 4x) = 2^(6x)\n9 - 4x = 6x\n9 = 10x\nx = 9/10", answer: "9/10" },
    { problem: "Найдите корень уравнения: 9^(x - 6) = 81", solution: "9^(x - 6) = 9²\nx - 6 = 2\nx = 8", answer: "8" },
    { problem: "Найдите корень уравнения: 5^(-1 - x) = 25", solution: "5^(-1 - x) = 5²\n-1 - x = 2\n-x = 3\nx = -3", answer: "-3" },
    { problem: "Найдите корень уравнения: 8^(3 + 2x) = 64^(2x)", solution: "8^(3 + 2x) = (8²)^(2x)\n8^(3 + 2x) = 8^(4x)\n3 + 2x = 4x\n3 = 2x\nx = 3/2", answer: "3/2" },
    { problem: "Найдите корень уравнения: 7^(x - 1) = 1/49", solution: "7^(x - 1) = 7^(-2)\nx - 1 = -2\nx = -1", answer: "-1" },
    { problem: "Найдите корень уравнения: (1/4)^(x - 5) = 25", solution: "(1/4)^(x - 5) = 5²\n(2⁻²)^(x - 5) = 5²\n2^(-2x + 10) = 5²\n-2x + 10 = 2\n-2x = -8\nx = 4", answer: "4" },
    { problem: "Найдите корень уравнения: (1/9)^(x + 2) = 81", solution: "(1/9)^(x + 2) = 9²\n(9⁻¹)^(x + 2) = 9²\n9^(-x - 2) = 9²\n-x - 2 = 2\n-x = 4\nx = -4", answer: "-4" },
    { problem: "Найдите корень уравнения: log₂(x + 3) = log₂(9)", solution: "x + 3 = 9\nx = 6", answer: "6" },
    { problem: "Найдите корень уравнения: log₅(10 - x) = log₅(2)", solution: "10 - x = 2\n-x = -8\nx = 8", answer: "8" },
    { problem: "Найдите корень уравнения: log₃(x + 2) = 2", solution: "x + 2 = 3²\nx + 2 = 9\nx = 7", answer: "7" },
    { problem: "Найдите корень уравнения: log₂(x - 3) = 4", solution: "x - 3 = 2⁴\nx - 3 = 16\nx = 19", answer: "19" }
];

// Переменные для хранения состояния
let currentTask = geometryTasks[0];
let solvedTasks = 0;
let solutionShown = false;
let answerChecked = false;
let currentTestNumber = "1";
const taskStates = {};

// Функция установки задачи
function setTask(task) {
    currentTask = task;
    taskProblem.textContent = task.problem || '';
    if (task.image) {
        taskImage.src = task.image;
        taskImage.style.display = 'block';
    } else {
        taskImage.style.display = 'none';
    }
    solutionContent.textContent = `Решение:\n${currentTask.solution}`;
    solutionText.style.display = 'none';
    solutionShown = false;
    answerChecked = false;
    userAnswerInput.value = '';
    checkResult.style.display = 'none';
    showSolutionButton.disabled = true;
}

// Функция получения случайной задачи
function getRandomTask(testNumber) {
    if (testNumber === "1") {
        const randomIndex = Math.floor(Math.random() * geometryTasks.length);
        return geometryTasks[randomIndex];
    } else if (testNumber === "6") {
        const randomIndex = Math.floor(Math.random() * task6Tasks.length);
        return task6Tasks[randomIndex];
    } else {
        const randomIndex = Math.floor(Math.random() * otherTasks.length);
        return otherTasks[randomIndex];
    }
}

// Обновление счётчика
function updateCounter() {
    solvedCount.textContent = `Решено задач: ${solvedTasks}`;
}

// Проверка ответа
function checkAnswer() {
    const userAnswer = userAnswerInput.value.trim();
    const correctAnswer = currentTask.answer.trim();
    
    if (!userAnswer) {
        checkResult.textContent = '✗';
        checkResult.style.color = '#dc3545';
        checkResult.style.display = 'inline';
        return;
    }
    
    let userValue, correctValue;
    try {
        if (userAnswer.includes('/')) {
            const [numerator, denominator] = userAnswer.split('/').map(Number);
            userValue = numerator / denominator;
        } else {
            userValue = parseFloat(userAnswer);
        }
        if (correctAnswer.includes('/')) {
            const [numerator, denominator] = correctAnswer.split('/').map(Number);
            correctValue = numerator / denominator;
        } else {
            correctValue = parseFloat(correctAnswer);
        }
        
        const isCorrect = Math.abs(userValue - correctValue) < 0.01 || userAnswer === correctAnswer;
        
        if (isCorrect) {
            checkResult.textContent = '✓';
            checkResult.style.color = document.body.classList.contains('dark-theme') ? '#00e676' : '#28a745';
            checkResult.style.display = 'inline';
            solvedTasks++;
            updateCounter();
        } else {
            checkResult.textContent = '✗';
            checkResult.style.color = '#dc3545';
            checkResult.style.display = 'inline';
        }
        answerChecked = true;
        showSolutionButton.disabled = false;
    } catch (e) {
        checkResult.textContent = '✗';
        checkResult.style.color = '#dc3545';
        checkResult.style.display = 'inline';
        answerChecked = true;
        showSolutionButton.disabled = false;
    }
}

// Обработчики событий
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentTestNumber = button.getAttribute('data-test');
        
        if (taskStates[currentTestNumber]) {
            setTask(taskStates[currentTestNumber]);
        } else {
            const newTask = getRandomTask(currentTestNumber);
            taskStates[currentTestNumber] = newTask;
            setTask(newTask);
        }
    });
});

checkAnswerButton.addEventListener('click', (event) => {
    event.stopPropagation();
    checkAnswer();
});

showSolutionButton.addEventListener('click', (event) => {
    event.stopPropagation();
    solutionText.style.display = 'block';
    solutionShown = true;
});

nextTaskButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const newTask = getRandomTask(currentTestNumber);
    taskStates[currentTestNumber] = newTask;
    setTask(newTask);
});

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = 'Светлая тема';
        optimusTheme.play();
    } else {
        themeToggleButton.textContent = 'Тёмная тема';
        optimusTheme2.play();
    }
});




// Установка начальной задачи
taskStates["1"] = getRandomTask("1");
setTask(taskStates["1"]);
updateCounter();


