![header](https://i.ibb.co/mF018gV/emblem.png)
# Style | Adobe Illustrator Scripts

[![Yotube](https://img.shields.io/badge/-YouTube%20Channel-FF0000.svg)](https://www.youtube.com/c/SergOsokinArt/videos)

[На главную](../README.ru.md)

## 📜 Scripts
* ChangeOpacity
* GrayscaleToOpacity
* OpacityMaskClip
* RandomStrokeWidth `(new, 16.04.2022)`
* StrokesWeightUp
* StrokesWeightDown

<a href="https://bit.ly/2M0j95N">
  <img width="140" height="43" src="https://i.ibb.co/Wp39Brs/download-ru.png">
</a> 

## ChangeOpacity

Задаёт точное значение непрозрачности (Opacity) выбранных объектов. Со знаком плюс или минус впереди числа произойдёт сдвиг относительно текущего значения у каждого объекта. Внутри групп масок (Clipping Group) не меняет непрозрачность самой маски. Но можно учитывать маски, если в коде поменять `inclMask: false` на `true`. 

![ChangeOpacity](https://i.ibb.co/zP3Vkww/Change-Opacity.gif)

## GrayscaleToOpacity

Преобразует цвет выбранных объектов в оттенки серого (Grayscale) и устанавливает прозрачность (Opacity) численно равную каналу серого цвета.

![GrayscaleToOpacity](https://i.ibb.co/DVfGtkz/Grayscale-To-Opacity.gif)

## OpacityMaskClip

Активирует чекбокс `Clip` в панели `Transparency > Opacity Mask` для выделенных объектов с масками прозрачности.

![OpacityMaskClip](https://i.ibb.co/k0CBJKq/Opacity-Mask-Clip.gif)

## RandomStrokeWidth

Применяет случайное значение из диапазона с заданным шагом к толщине обводки выбранных объектов. Единицы измерения берет из `Preferences > Units > Stroke`. Существует два режима: тихий запуск и диалоговый. Меняется в `CFG.showUI`.   

Эти режимы меняются без правки кода, если удерживать клавишу Alt при запуске:

* <kbd>Alt</kbd> + `CFG.showUI: false` — появится диалог
* <kbd>Alt</kbd> + `CFG.showUI: true` — скрипт сработает с последними использованными опциями

![RandomStrokeWidth](https://i.ibb.co/PQN1qkV/Random-Stroke-Width.gif) 

## StrokesWeight

* StrokesWeightDown.jsx
* StrokesWeightUp.jsx

Набор из двух отдельных скриптов, которые меняют толщину обводок относительно текущих у выбранных путей. Для округления толщин установите переменную `isRoundWeight = true` иначе `isRoundWeight = false`.  

* +/- 0,01 единиц, если толщина < 0,1
* +/- 0.2 if < 1
* +/- 0.5 if < 5
* +/- 1 if >= 5

![StrokesWeight](https://i.ibb.co/kKXhnxN/Strokes-Weight.gif)

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