![header](https://i.ibb.co/mF018gV/emblem.png)
# Color | Adobe Illustrator Scripts

![Downloads](https://img.shields.io/badge/Downloads-23k-27CF7D.svg) [![Yotube](https://img.shields.io/badge/Telegram%20Channel-%40aiscripts-0088CC.svg)](https://t.me/aiscripts) [![Yotube](https://img.shields.io/badge/Youtube-%40SergOsokinArt-FF0000.svg)](https://www.youtube.com/c/SergOsokinArt/videos)

[На главную](../README.ru.md)

## 📜 Scripts
* AverageColors `(new, 27.03.2022)`
* ColorBlindSimulator `(new, 18.04.2022)`
* ConvertToGradient
* CycleColors `(upd, 01.08.2022)`
* CycleGradient
* DistributeGradientStops
* RemoveGradientStops
* ReverseGradientColor
* StrokeColorFromFill `(upd, 12.01.2022)`

<a href="https://bit.ly/2M0j95N">
  <img width="140" height="43" src="https://i.ibb.co/Wp39Brs/download-ru.png">
</a>  

## AverageColors

Усредняет цвета выбранных объектов, отдельных групп или градиентов. Скрипт пропускает объекты без цвета или с паттерном. Если ничего не выбрано, скрипт предложит обработать все группы в документе. Существует два режима: тихий запуск и диалоговый. Меняется в `CFG.showUI`.   

Эти режимы меняются без правки кода, если удерживать клавишу Alt при запуске:

* <kbd>Alt</kbd> + `CFG.showUI: false` — появится диалог
* <kbd>Alt</kbd> + `CFG.showUI: true` — скрипт сработает с последними использованными опциями

![AverageColors](https://i.ibb.co/6bjPmLh/average-colors.gif) 

## ColorBlindSimulator

Имитирует нарушение восприятия цветов 8 типов. Можно перекрасить объекты или ограничиться предпросмотром. Программы Adobe ограничены просмотром двух типов в меню `View > Proof Setup` и не могут применить цвета. Скрипт поддерживает: пути, составные пути, текст, заливки и обводки. Вы можете изменить гамма-коррекцию в расчётах `CFG.gamma: 2.2` и активировать предпросмотр по умолчанию `CFG.defPreview: true`. К сожалению, скопированные градиенты связаны друг с другом в Иллюстраторе. Вручную удалите связь, развернув градиент дважды кнопкой `Reverse Gradient`.

![ColorBlindSimulator](https://i.ibb.co/ccps1mg/Color-Blind-Simulator.gif) 

## ConvertToGradient

Преобразует одноцветную заливку в градиент на базец исходного цвета.   
Работает с документами в RGB и CMYK, Spot и Grayscale цветами. Распознает составные пути и группы.   
*Основано на скрипте автора [Saurabh Sharma](https://tutsplus.com/authors/saurabh-sharma), 2010.*  

![ConvertToGradient](https://i.ibb.co/44tG9JP/demo-Convert-To-Gradient.gif) 

## CycleColors

Меняет местами цвета заливки и обводки выделенных объектов по порядку их расположения в панели Layers. Сохраняет толщину обводок, но если у объекта нет обводки, то копирует с другого объекта. Если ваши выделенные объекты хаотичны, то может показаться, что кнопки `Forward` и `Backward` переносят цвет случайным образом.  Кнопка `Revert` не возвращает кастомные кисти, пунктир, применённый к обводке. Вы можете использовать стандартную отмену истории после закрытия диалога.

![CycleColors](https://i.ibb.co/3zk9Jgs/Cycle-Colors.gif)

## CycleGradient

* CycleGradient.jsx (UI версия)
* CycleGradientBackward.jsx
* CycleGradientForward.jsx
* CycleGradientRandom.jsx   

Набор из 4 скриптов, которые меняют порядок цветов точек на слайдере градиента (Color Stop). Не затрагивают положение точек на слайдере, прозрачность, положение градиента на объекте. К сожалению, скопированные градиенты связаны друг с другом в Иллюстраторе. Вручную удалите связь, развернув градиент дважды кнопкой `Reverse Gradient`.   

![CycleGradient](https://i.ibb.co/84GsCBK/cycle-Gradient.gif)

## DistributeGradientStops

Распределяет равномерно расстояние между всеми точками на слайдере градиента, не меняя положения крайних. К сожалению, скопированные градиенты связаны друг с другом в Иллюстраторе. Вручную удалите связь, развернув градиент дважды кнопкой `Reverse Gradient`.  

![DistributeGradientStops](https://i.ibb.co/6XNkFqS/Distribute-Gradient-Stops.gif)

## GradientToFlat

Преобразует градиентные заливки или обводки в усреднённый сплошной цвет. Горячие клавиши: <kbd>F</kbd> заливка, <kbd>S</kbd> обводка.

![GradientToFlat](https://i.ibb.co/yn1j852/demo-Gradient-To-Flat.gif)

## ReverseGradientColor

Зеркально переворачивает цвета градиента: каждую точку (Color stop) вместе с прозрачностью. Само расположение точек сохраняется. Если градиент скопирован с другого объекта пипеткой (Eyedropper Tool), то Illustrator хранит связь между ним. В таком случае запуск скрипта приведет к разворачиванию всех скопированных градиентов. В таком случае, возможно, лучше использовать кнопку `Reverse Gradient` в стандартной панели Gradient. 

![ReverseGradient](https://i.ibb.co/Fg8nnHZ/Reverse-Gradient-Color.gif)

## StrokeColorFromFill

Присваивает обводке (Stroke) каждого выбранного объекта цвет из его сплошной или градиентной заливки. Опция автоматического добавления обводки объекту недоступна на Mac OS с Illustrator ниже CC 2020.  

![SplitPath](https://i.ibb.co/8dtK1V3/demo-Stroke-Color-From-Fill.gif)

<a href="https://bit.ly/2M0j95N">
  <img width="140" height="43" src="https://i.ibb.co/Wp39Brs/download-ru.png">
</a> 

## 💸 Поддержка
Вы можете поддержать мою работу над новыми скриптами и их распространение любой суммой через [Tinkoff], [ЮMoney], [Donatty], [DonatePay]. [PayPal] временно недоступен

[Tinkoff]: https://www.tinkoff.ru/rm/osokin.sergey127/SN67U9405/
[ЮMoney]: https://yoomoney.ru/to/410011149615582
[Donatty]: https://donatty.com/sergosokin
[DonatePay]: https://new.donatepay.ru/@osokin
[PayPal]: https://paypal.me/osokin/5usd

<a href="https://www.tinkoff.ru/rm/osokin.sergey127/SN67U9405/">
  <img width="111" height="40" src="https://i.ibb.co/hRsbYnM/tinkoff-badge.png">
</a>

<a href="https://yoomoney.ru/to/410011149615582">
  <img width="111" height="40" src="https://i.ibb.co/wwrYWJ5/yoomoney-badge.png">
</a>

<a href="https://donatty.com/sergosokin">
  <img width="111" height="40" src="https://i.ibb.co/s61FGCn/donatty-badge.png">
</a>

<a href="https://new.donatepay.ru/@osokin">
  <img width="111" height="40" src="https://i.ibb.co/0KJ94ND/donatepay-badge.png">
</a>

## 🤝 Развитие

Нашли ошибку? [Создайте запрос](https://github.com/creold/illustrator-scripts/issues) на Github или напишите мне на почту.

## ✉️ Контакты
Email <hi@sergosokin.ru>  
Telegram [@sergosokin](https://t.me/sergosokin)

### 📝 Лицензия

Скрипты распространяются по лицензии MIT.   
Больше деталей во вложенном файле LICENSE.