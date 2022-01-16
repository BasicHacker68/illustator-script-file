![header](https://i.ibb.co/mF018gV/emblem.png)
# Color | Adobe Illustrator Scripts

[![Yotube](https://img.shields.io/badge/-YouTube%20Channel-FF0000.svg)](https://www.youtube.com/c/SergOsokinArt/videos)

[На главную](../README.ru.md)

## 📜 Scripts
* ConvertToGradient
* CycleColors
* CycleGradient
* DistributeGradientStops
* GradientToFlat
* RemoveGradientStops
* ReverseGradientColor
* StrokeColorFromFill

<a href="https://bit.ly/2M0j95N">
  <img width="140" height="43" src="https://i.ibb.co/Wp39Brs/download-ru.png">
</a>  

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

## RemoveGradientStops

Удаляет промежуточные цветовые точки градиентной заливки и обводки у выделенных объектов.

![RemoveGradientStops](https://i.ibb.co/cv6wgPq/remove-Gradient-Stops.gif)

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
Вы можете поддержать мою работу над новыми скриптами и их распространение любой суммой через [ЮMoney], [Donatty] или [PayPal]

[ЮMoney]: https://yoomoney.ru/to/410011149615582
[Donatty]: https://donatty.com/sergosokin
[PayPal]: https://paypal.me/osokin/5usd

<a href="https://yoomoney.ru/to/410011149615582">
  <img width="147" height="40" src="https://i.ibb.co/448NHjM/yoomoney-badge.png" >
</a>

<a href="https://donatty.com/sergosokin">
  <img width="147" height="40" src="https://i.ibb.co/p2Qj9Fr/donatty-badge.png" >
</a>

<a href="https://paypal.me/osokin/3usd">
  <img width="147" height="40" src="https://i.ibb.co/Z8Wd8Sn/paypal-badge.png" >
</a>

## 🤝 Развитие

Нашли ошибку? [Создайте запрос](https://github.com/creold/illustrator-scripts/issues) на Github или напишите мне на почту.

## ✉️ Контакты
Email <hi@sergosokin.ru>  
Telegram [@sergosokin](https://t.me/sergosokin)

### 📝 Лицензия

Скрипты распространяются по лицензии MIT.   
Больше деталей во вложенном файле LICENSE.