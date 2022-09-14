![header](https://i.ibb.co/mF018gV/emblem.png)
# Artboard | Adobe Illustrator Scripts

![Downloads](https://img.shields.io/badge/Downloads-23k-27CF7D.svg) [![Yotube](https://img.shields.io/badge/Telegram%20Channel-%40aiscripts-0088CC.svg)](https://t.me/aiscripts) [![Yotube](https://img.shields.io/badge/Youtube-%40SergOsokinArt-FF0000.svg)](https://www.youtube.com/c/SergOsokinArt/videos)

[На главную](../README.ru.md)

## 📜 Scripts
* ArtboardsFinder `(upd, 14.09.2022)`
* BatchRenamer `(upd, 14.09.2022)`
* DuplicateArtboards `(upd, 14.09.2022)`
* FitArtboardsToArtwork `(upd, 01.08.2022)`
* MoveArtboards `(upd, 14.09.2022)`
* RenameArtboardAsLayer `(upd, 14.09.2022)`
* RenameArtboardAsSize `(upd, 01.08.2022)`
* RenameArtboardAsTopObj `(upd, 14.09.2022)`

<a href="https://bit.ly/2M0j95N">
  <img width="140" height="43" src="https://i.ibb.co/Wp39Brs/download-ru.png">
</a> 

## ArtboardsFinder

Ищет артборды в документе по имени или размерам и масштабирует выбранные по центру окна. Размеры отображаются в единицах документа. Альбомные, книжные, квадратные артборды выводятся по убыванию размера при поиске по ориентации.

![ArtboardsFinder](https://i.ibb.co/VJXKjWQ/artboards-finder.gif)

## BatchRenamer

Массово переименовывает в документе артборды, слои верхнего уровня и выбранные объекты. Добавляет общий префикс и суффикс к имени. Через Find & Replace заменяется строка в текущих именах.

**Плейсхолдеры** 

* {w} - ширина артборда или выбранного объекта в единицах документа
* {h} - высота артборда или выбранного объекта
* {u} - единицы измерения документа (Document Setup > Units) 
* {nu:0} - автоматическая нумерация от введённого числа и выше
* {nd:0} - нумерация от введённого числа и ниже
* {c} - цветовая модель документа (RGB или CMYK)
* {d} - текущая дата в формате ГГГГММДД
* {n} - текущее имя для замены в Find & Replace

Если хотите изменить количество строк в высоту, то откройте файл скрипта текстовым редактором и поменяйте CFG `rows: 5` на другое число и его же в `listHeight: 5 * 32`. В CFG `precision: 0` задаётся число десятичных знаков для высоты и ширины артбордов и объектов.

![BatchRenamer](https://i.ibb.co/p2VXbY9/Batch-Renamer.gif) 

## DuplicateArtboardsLight

Script for copying the selected Artboard with his artwork. The Pro version with more options is available at [Gumroad](https://gumroad.com/sergosokin)   

<a href="https://youtu.be/qDH1YRaYMYk">
  <img width="122" height="47" src="https://i.ibb.co/02CqYYR/youtube-badge-ru.png">
</a>

![DuplicateArtboardsLight](https://i.ibb.co/rF92HpV/demo-Duplicate-Artboards-Light.gif) 

## FitArtboardsToArtwork

Масштабирует артборды по размеру видимого незаблокированного контента с отступами.

![FitArtboardsToArtwork](https://i.ibb.co/SJJh5Hc/Fit-Artboards-To-Artwork.gif) 

## MoveArtboards

Перемещает все артборды из диапазона по номерам с содержимым по осям X и Y на точное расстояние.

![MoveArtboards](https://i.ibb.co/wrHTpTG/Move-Artboards.gif) 

## RenameArtboardAsLayer

Переименовывает каждый артборд по имени слоя, в котором есть элемент, лежащий на соответствующем артборде.

![RenameArtboardAsLayer](https://i.ibb.co/9nk8Lqn/Rename-Artboard-As-Layer.gif)

## RenameArtboardAsSize

Скрипт ставит в имя артборда его размер в пикселях. Если не хотите сохранять старое имя, а только менять на размер, то откройте файл скрипта текстовым редактором и поменяйте значение в строке `var SAVE_NAME = true;` на `false`. 

![RenameArtboardAsSize](https://i.ibb.co/54H4Jcm/Rename-Artboard-As-Size.gif)

## RenameArtboardAsTopObj

Переименовывает каждый артборд по имени верхнего незаблокированного объекта, лежащего в его пределах. Если верхний объект — текст, то его содержимое станет именем артборда. 

![RenameArtboardAsTopObj](https://i.ibb.co/WPmf14B/Rename-Artboard-As-Top-Obj.gif)

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