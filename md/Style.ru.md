![header](https://i.ibb.co/mF018gV/emblem.png)
# Style | Adobe Illustrator Scripts

![Downloads](https://img.shields.io/badge/Скачивания-23k-27CF7D.svg) [![Telegram](https://img.shields.io/badge/Telegram--канал-%40aiscripts-0088CC.svg)](https://t.me/aiscripts) [![Yotube](https://img.shields.io/badge/Youtube-%40SergOsokinArt-FF0000.svg)](https://www.youtube.com/c/SergOsokinArt/videos)

[На главную](../README.ru.md)

### Как скачать один скрипт
1. В описании скрипта нажмите кнопку «Прямая ссылка».
2. Во вкладке откроется код скрипта.
3. Нажмите <kbd>Cmd/Ctrl</kbd> + <kbd>S</kbd>, чтобы сохранить файл на диск.

## Scripts
* [ChangeOpacity](https://github.com/creold/illustrator-scripts/blob/master/md/Style.ru.md#changeopacity) `(upd, 01.08.2022)`
* [GrayscaleToOpacity](https://github.com/creold/illustrator-scripts/blob/master/md/Style.ru.md#grayscaletoopacity)
* [OpacityMaskClip](https://github.com/creold/illustrator-scripts/blob/master/md/Style.ru.md#opacitymaskclip)
* [RandomStrokeWidth](https://github.com/creold/illustrator-scripts/blob/master/md/Style.ru.md#randomstrokewidth) `upd, 14.10.2022`
* [StrokesWeightUp](https://github.com/creold/illustrator-scripts/blob/master/md/Style.ru.md#strokesweight) `upd, 14.10.2022`
* [StrokesWeightDown](https://github.com/creold/illustrator-scripts/blob/master/md/Style.ru.md#strokesweight) `upd, 14.10.2022`

## ChangeOpacity
[![Direct](https://img.shields.io/badge/Прямая%20ссылка-ChangeOpacity.jsx-FF6900.svg)](http://bit.do/chngopa) [![Download](https://img.shields.io/badge/Скачать%20все-Zip--архив-0088CC.svg)](https://bit.ly/2M0j95N)

Задаёт точное значение непрозрачности (Opacity) выбранных объектов. Со знаком плюс или минус впереди числа произойдёт сдвиг относительно текущего значения у каждого объекта. Внутри групп масок (Clipping Group) не меняет непрозрачность самой маски. Но можно учитывать маски, если в коде поменять `inclMask: false` на `true`. 

![ChangeOpacity](https://i.ibb.co/zP3Vkww/Change-Opacity.gif)

## GrayscaleToOpacity
[![Direct](https://img.shields.io/badge/Прямая%20ссылка-GrayscaleToOpacity.jsx-FF6900.svg)](http://bit.do/graytoopa) [![Download](https://img.shields.io/badge/Скачать%20все-Zip--архив-0088CC.svg)](https://bit.ly/2M0j95N)

Преобразует цвет выбранных объектов в оттенки серого (Grayscale) и устанавливает прозрачность (Opacity) численно равную каналу серого цвета.

![GrayscaleToOpacity](https://i.ibb.co/DVfGtkz/Grayscale-To-Opacity.gif)

## OpacityMaskClip
[![Direct](https://img.shields.io/badge/Прямая%20ссылка-OpacityMaskClip.jsx-FF6900.svg)](http://bit.do/opamclip) [![Download](https://img.shields.io/badge/Скачать%20все-Zip--архив-0088CC.svg)](https://bit.ly/2M0j95N)

Активирует чекбокс `Clip` в панели `Transparency > Opacity Mask` для выделенных объектов с масками прозрачности.

![OpacityMaskClip](https://i.ibb.co/k0CBJKq/Opacity-Mask-Clip.gif)

## RandomStrokeWidth
[![Direct](https://img.shields.io/badge/Прямая%20ссылка-RandomStrokeWidth.jsx-FF6900.svg)](http://bit.do/rndstrwd) [![Download](https://img.shields.io/badge/Скачать%20все-Zip--архив-0088CC.svg)](https://bit.ly/2M0j95N)

Применяет случайное значение из диапазона с заданным шагом к толщине обводки выбранных объектов. Единицы измерения берет из `Preferences > Units > Stroke`. Существует два режима: тихий запуск и диалоговый. Меняется в `CFG.showUI`.   

Эти режимы меняются без правки кода, если удерживать клавишу Alt при запуске:

* <kbd>Alt</kbd> + `CFG.showUI: false` — появится диалог
* <kbd>Alt</kbd> + `CFG.showUI: true` — скрипт сработает с последними использованными опциями

![RandomStrokeWidth](https://i.ibb.co/PQN1qkV/Random-Stroke-Width.gif) 

## StrokesWeight
[![Direct](https://img.shields.io/badge/Прямая%20ссылка-StrokesWeightDown.jsx-FF6900.svg)](http://bit.do/strwtdn) [![Direct](https://img.shields.io/badge/Прямая%20ссылка-StrokesWeightUp.jsx-FF6900.svg)](http://bit.do/strwtup) [![Download](https://img.shields.io/badge/Скачать%20все-Zip--архив-0088CC.svg)](https://bit.ly/2M0j95N)

* StrokesWeightDown.jsx
* StrokesWeightUp.jsx

Набор из двух отдельных скриптов, которые меняют толщину обводок относительно текущих у выбранных путей. Для округления толщин установите переменную `isRoundWeight = true` иначе `isRoundWeight = false`.  

* +/- 0,01 единиц, если толщина < 0,1
* +/- 0.2 if < 1
* +/- 0.5 if < 5
* +/- 1 if >= 5

![StrokesWeight](https://i.ibb.co/kKXhnxN/Strokes-Weight.gif)

## 💸 Поддержка
Вы можете поддержать мою работу над новыми скриптами и их распространение любой суммой через [Buymeacoffee](https://www.buymeacoffee.com/osokin) (иностр. карты), [Tinkoff], [ЮMoney], [Donatty], [DonatePay].   

[Tinkoff]: https://www.tinkoff.ru/rm/osokin.sergey127/SN67U9405/
[ЮMoney]: https://yoomoney.ru/to/410011149615582
[Donatty]: https://donatty.com/sergosokin
[DonatePay]: https://new.donatepay.ru/@osokin

<a href="https://www.buymeacoffee.com/osokin">
  <img width="111" height="40" src="https://i.ibb.co/0ssTJQ1/bmc-badge.png">
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