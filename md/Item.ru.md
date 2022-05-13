![header](https://i.ibb.co/mF018gV/emblem.png)
# Item | Adobe Illustrator Scripts

[![Yotube](https://img.shields.io/badge/-YouTube%20Channel-FF0000.svg)](https://www.youtube.com/c/SergOsokinArt/videos)

[На главную](../README.ru.md)

## 📜 Scripts
* MakeEnvelopesWithTops
* MirrorMove `(new, 13.05.2022)`
* RememberSelectionLayers `(upd, 26.02.2022)`
* RenameItems `(upd, 29.03.2022)`
* Rescale
* ResizeOnLargerSide
* ResizeToSize
* RoundCoordinates `(upd, 15.03.2022)`

<a href="https://bit.ly/2M0j95N">
  <img width="140" height="43" src="https://i.ibb.co/Wp39Brs/download-ru.png">
</a>  

## MakeEnvelopesWithTops

Искажает выбранный нижний объект по форме верхних по отдельности. Аналогичен множественному выполнению команды `Object > Envelope Distort > Make with Top Object`.

![MakeEnvelopesWithTops](https://i.ibb.co/N24Lmy7/Make-Envelopes-With-Tops.gif)


## MirrorMove

Перемещает выбранные объекты или точки зеркально последней операции `Object > Transform > Move...` или сдвига мышью / клавиатурой. Расширяет стандартную команду `Object > Transform > Transform Again`. Возможные оси: XY, X, Y. Movement ratio — коэффициент на какую дистанцию переместить относительно предыдущей (1 = ту же самую). Существует два режима: тихий запуск и диалоговый. Меняется в `CFG.showUI`.   

Эти режимы меняются без правки кода, если удерживать клавишу Alt при запуске:

* <kbd>Alt</kbd> + `CFG.showUI: false` — появится диалог
* <kbd>Alt</kbd> + `CFG.showUI: true` — скрипт сработает с последними использованными опциями

![MirrorMove](https://i.ibb.co/vDPYtQC/Mirror-Move.gif) 

## RememberSelectionLayers

Перемещает объекты в их оригинальные слои. Предварительно информацию необходимо сохранить. Объекты переносятся в начало слоя.

![RememberSelectionLayers](https://i.ibb.co/SJq5rj9/Remember-Selection-Layers.gif)

## RenameItems

Массово переименовывает выбранные объекты или их родительские слои. Если объекты не выбраны, то скрипт переименовывает активный слой. Функция поиска и замены поддерживает RegExp.       

![RenameItems](https://i.ibb.co/9T8TfQv/rename-items.gif)

## Rescale

Трансформирует выбранные объекты вместе до заданного размера. Также можно использовать скрипт для трансформирования по коэффициенту. Если перед запуском скрипта нарисовать линию размером объекта, то размер подставится в поле `Old size`. Единицы измерения в окне скрипта, как в настройках документа.      

![Rescale](https://i.ibb.co/gDj142f/demo-Rescale.gif)

## ResizeOnLargerSide

Трансформирует выбранные объекты пропорционально до заданной величины бОльшей стороны. Её скрипт определяет автоматически. Учитывает единицы измерения документа.  

![ResizeOnLargerSide](https://i.ibb.co/1bSj1kC/Resize-On-Larger-Side.gif)

## ResizeToSize

В Illustrator есть панель `Transform`, но в ней нельзя трансформировать каждый выделенный объект до заданной величины. При стандартном способе периодически появляются дробные значения в размере. Скрипт трансформирует выделенные объекты со 100% точностью, в зависимости от стороны: ширины, высоты или бОльшей стороны. Все настройки переключаются горячими клавишами <kbd>Alt</kbd> + подчеркнутая буква или цифра.      

<a href="https://youtu.be/PN3dAf6rac8">
  <img width="122" height="47" src="https://i.ibb.co/02CqYYR/youtube-badge-ru.png">
</a>

![ResizeToSize](https://i.ibb.co/FxPGDM2/demo-Resize-To-Size.gif)

## RoundCoordinates

Округляет координаты каждого выделенного объекта. Ориентиром для выравнивания будет выбранная контрольная точка из панели `Transform`. Скрипт учитывает единицы измерения документа и толщину обводки, если включено `Preferences > Use Preview Bounds`. В файле скрипта можно изменить шаг округления координат CFG `step: 1`. Если шаг 0, то скрипт выровняет по сетке документа из `Preferences > Guides & Grid`.

![RoundCoordinates](https://i.ibb.co/3y0WpzC/Round-Coordinates.gif)

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