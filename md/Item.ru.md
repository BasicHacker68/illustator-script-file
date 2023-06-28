![header](https://i.ibb.co/mF018gV/emblem.png)
# Item | Adobe Illustrator Scripts

![Downloads](https://img.shields.io/badge/Скачивания-25k-27CF7D.svg) [![Telegram](https://img.shields.io/badge/Telegram--канал-%40aiscripts-0088CC.svg)](https://t.me/aiscripts) [![Сайт](https://img.shields.io/badge/Сайт-ais.sergosoikn.ru-FF7548.svg)](https://ais.sergosokin.ru) [![Yotube](https://img.shields.io/badge/Youtube-%40SergOsokinArt-FF0000.svg)](https://www.youtube.com/c/SergOsokinArt/videos)

[На главную](../README.ru.md)

### Как скачать один скрипт
1. В описании скрипта нажмите кнопку «Прямая ссылка».
2. Во вкладке откроется код скрипта.
3. Нажмите <kbd>Cmd/Ctrl</kbd> + <kbd>S</kbd>, чтобы сохранить файл на диск.

## Scripts
* [AlignToArtboards](https://github.com/creold/illustrator-scripts/blob/master/md/Item.ru.md#aligntoartboards) `(new, 28.06.2023)`
* [BatchTrace](https://github.com/creold/illustrator-scripts/blob/master/md/Item.ru.md#batchtrace) `(upd, 07.06.2023)`
* [DuplicateToArtboards](https://github.com/creold/illustrator-scripts/blob/master/md/Item.ru.md#duplicatetoartboards) `(upd, 14.09.2022)`
* [FitSelectionToArtboards](https://github.com/creold/illustrator-scripts/blob/master/md/Item.ru.md#fitselectiontoartboards) `upd, 22.12.2022`
* [MakeEnvelopesWithTops](https://github.com/creold/illustrator-scripts/blob/master/md/Item.ru.md#makeenvelopeswithtops)
* [MirrorMove](https://github.com/creold/illustrator-scripts/blob/master/md/Item.ru.md#mirrormove) `(upd, 01.08.2022)`
* [RenameItems](https://github.com/creold/illustrator-scripts/blob/master/md/Item.ru.md#renameitems) `(upd, 04.05.2023)`
* [Rescale](https://github.com/creold/illustrator-scripts/blob/master/md/Item.ru.md#rescale) `upd, 22.12.2022`
* [ResizeOnLargerSide](https://github.com/creold/illustrator-scripts/blob/master/md/Item.ru.md#resizeonlargerside) `upd, 14.10.2022`
* [ResizeToSize](https://github.com/creold/illustrator-scripts/blob/master/md/Item.ru.md#resizetosize) `upd, 04.05.2023`
* [RoundCoordinates](https://github.com/creold/illustrator-scripts/blob/master/md/Item.ru.md#roundcoordinates) `upd, 22.12.2022`

## AlignToArtboards
[![Direct](https://img.shields.io/badge/Прямая%20ссылка-AlignToArtboards.jsx-FF6900.svg)](https://rebrand.ly/alitoabs) [![Download](https://img.shields.io/badge/Скачать%20все-Zip--архив-0088CC.svg)](https://bit.ly/2M0j95N)

Скрипт выравнивает выбранные объекты по их родительским артбордам или содержимое всех артбордов документа. Если объект лежит на нескольких артбордах, скрипт проверит, в какой артборд попадает центр объекта — по нему и выровняет. Если же центр объекта вне артбордов — то выровняет по первому.

> **Warning**   
> Чем больше у вас артбордов с содержимым и выбранных для выравнивания объектов, тем скрипт медленнее будет работать.

![AlignToArtboards](https://i.ibb.co/XFQSmvR/Align-To-Artboards.gif)

## BatchTrace
[![Direct](https://img.shields.io/badge/Прямая%20ссылка-BatchTrace.jsx-FF6900.svg)](https://rebrand.ly/bchtr) [![Download](https://img.shields.io/badge/Скачать%20все-Zip--архив-0088CC.svg)](https://bit.ly/2M0j95N)

Пакетно трассирует выбранные пользователем линкованные и внедрённые изображения в документе или все изображения из папки. Штатное меню `Object → Image Trace → Make` доступно для одного выбранного изображения. Запись экшена не поможет, так как в нём не сохраняются настройки трассировки. В Adobe Bridge возможна трассировка только папки с изображениями: `Tools → Illustrator → Image Trace`. 

> **Note**   
> Скорость работы скрипта зависит от характеристик вашего компьютера, пресета и количества изображений.

> **Warning**   
> Скрипты Adobe некорректно применяют значение Colors из пользовательских пресетов, поэтому результат трассировки может не совпасть с пресетом. Сильно заметно в CC 2023. Проголосовать за исправление на [Uservoice](https://illustrator.uservoice.com/forums/908050-illustrator-desktop-sdk-scripting-issues/suggestions/46741876-tracing-bugs-in-scripts).

Тонкие настройки в коде скрипта:

* `CFG.extList` — список обрабатываемых форматов из папки. Можно добавить свои или удалить некоторые для пропуска скриптом;
* `CFG.isReverse` — развернуть список пресетов (true), пользовательские будут наверху.

![BatchTrace](https://i.ibb.co/YkMGpS9/Batch-Trace.gif)

## DuplicateToArtboards
[![Direct](https://img.shields.io/badge/Прямая%20ссылка-DuplicateToArtboards.jsx-FF6900.svg)](https://rebrand.ly/duptoabs) [![Download](https://img.shields.io/badge/Скачать%20все-Zip--архив-0088CC.svg)](https://bit.ly/2M0j95N)

Дублирует выбранные на активном артборде объекты на ту же позицию в указанные артборды. Номера артбордов перечисляются через запятую или дефис. Пустая строка — объекты продублируются на все артборды, кроме исходного. Выберите `Preserve layers`, если объекты в разных слоях и должны там остаться.

Цвет временных индексов артбордов меняется в коде `CFG.color: [255, 0, 0]`.

[Голосование за функцию на Illustrator Uservoice](https://illustrator.uservoice.com/forums/333657-illustrator-desktop-feature-requests/suggestions/32146360--paste-on-selected-artboards)

![DuplicateToArtboards](https://i.ibb.co/mJqLzHr/Duplicate-To-Artboards.gif)

## FitSelectionToArtboards
[![Direct](https://img.shields.io/badge/Прямая%20ссылка-FitSelectionToArtboards.jsx-FF6900.svg)](https://rebrand.ly/fittoabs) [![Download](https://img.shields.io/badge/Скачать%20все-Zip--архив-0088CC.svg)](https://bit.ly/2M0j95N)

Раскладывает выбранные объекты по центру артбордов и опционально подгоняет размеры каждого по наибольшей стороне к размеру артборда. При масштабировании объектов можно задать внутренние отступы от границ артбордов. С включённой опцией `Rename artboards...` артборды получат пользовательские имена помещенных на них объектов.   

Версия Lite (FitSelectionToArtboards-Lite.jsx) в тихом режиме выравнивает и масштабирует верхний выбранный объект по активному артборду. Если в её коде поменять флаг `CFG.isContains:true`, то выбранный объект обработается, только если он был целиком или частично в пределах артборда.

Существует два режима: тихий запуск и диалоговый. Меняется в `CFG.showUI`. Эти режимы меняются без правки кода, если удерживать клавишу Alt при запуске:

* <kbd>Alt</kbd> + `CFG.showUI: false` — появится диалог
* <kbd>Alt</kbd> + `CFG.showUI: true` — выполнится без диалога с опциями по умолчанию

![FitSelectionToArtboards](https://i.ibb.co/YT0qPWL/Fit-Selection-To-Artboards.gif)

## MakeEnvelopesWithTops
[![Direct](https://img.shields.io/badge/Прямая%20ссылка-MakeEnvelopesWithTops.jsx-FF6900.svg)](https://rebrand.ly/mkenvel) [![Download](https://img.shields.io/badge/Скачать%20все-Zip--архив-0088CC.svg)](https://bit.ly/2M0j95N)

Искажает выбранный нижний объект по форме верхних по отдельности. Аналогичен множественному выполнению команды `Object → Envelope Distort → Make with Top Object`.

![MakeEnvelopesWithTops](https://i.ibb.co/N24Lmy7/Make-Envelopes-With-Tops.gif)

## MirrorMove
[![Direct](https://img.shields.io/badge/Прямая%20ссылка-MirrorMove.jsx-FF6900.svg)](https://rebrand.ly/mirrmov) [![Download](https://img.shields.io/badge/Скачать%20все-Zip--архив-0088CC.svg)](https://bit.ly/2M0j95N)

Перемещает выбранные объекты или точки зеркально последней операции `Object → Transform → Move...` или сдвига мышью / клавиатурой. Расширяет стандартную команду `Object → Transform → Transform Again`. Возможные оси: XY, X, Y. Movement ratio — коэффициент на какую дистанцию переместить относительно предыдущей (1 = ту же самую). Существует два режима: тихий запуск и диалоговый. Меняется в `CFG.showUI`. Эти режимы меняются без правки кода, если удерживать клавишу Alt при запуске:

* <kbd>Alt</kbd> + `CFG.showUI: false` — появится диалог
* <kbd>Alt</kbd> + `CFG.showUI: true` — скрипт сработает с последними использованными опциями

![MirrorMove](https://i.ibb.co/vDPYtQC/Mirror-Move.gif) 

## RenameItems
[![Direct](https://img.shields.io/badge/Прямая%20ссылка-RenameItems.jsx-FF6900.svg)](https://rebrand.ly/renitems) [![Download](https://img.shields.io/badge/Скачать%20все-Zip--архив-0088CC.svg)](https://bit.ly/2M0j95N)

Массово переименовывает выбранные объекты или их родительские слои. Если объекты не выбраны, то скрипт переименовывает активный слой или артборд. Функция поиска и замены поддерживает RegExp.       

![RenameItems](https://i.ibb.co/9T8TfQv/rename-items.gif)

## Rescale
[![Direct](https://img.shields.io/badge/Прямая%20ссылка-Rescale.jsx-FF6900.svg)](https://rebrand.ly/resc) [![Download](https://img.shields.io/badge/Скачать%20все-Zip--архив-0088CC.svg)](https://bit.ly/2M0j95N)

Трансформирует выбранные объекты вместе до заданного размера. Также можно использовать скрипт для трансформирования по коэффициенту. Если перед запуском скрипта нарисовать линию размером объекта, то размер подставится в поле `Old size`. Единицы измерения в окне скрипта, как в настройках документа.      

![Rescale](https://i.ibb.co/gDj142f/demo-Rescale.gif)

## ResizeOnLargerSide
[![Direct](https://img.shields.io/badge/Прямая%20ссылка-ResizeOnLargerSide.jsx-FF6900.svg)](https://rebrand.ly/reslrgsd) [![Download](https://img.shields.io/badge/Скачать%20все-Zip--архив-0088CC.svg)](https://bit.ly/2M0j95N)

Трансформирует выбранные объекты пропорционально до заданной величины бОльшей стороны. Её скрипт определяет автоматически. Учитывает единицы измерения документа.  

![ResizeOnLargerSide](https://i.ibb.co/1bSj1kC/Resize-On-Larger-Side.gif)

## ResizeToSize
[![Direct](https://img.shields.io/badge/Прямая%20ссылка-ResizeToSize.jsx-FF6900.svg)](https://rebrand.ly/rsztsz) [![Download](https://img.shields.io/badge/Скачать%20все-Zip--архив-0088CC.svg)](https://bit.ly/2M0j95N)

В Illustrator есть панель `Transform`, но в ней нельзя трансформировать каждый выделенный объект до заданной величины. При стандартном способе периодически появляются дробные значения в размере. Скрипт трансформирует выделенные объекты со 100% точностью, в зависимости от стороны: ширины, высоты или бОльшей стороны. Все настройки переключаются горячими клавишами <kbd>Q</kbd> + подчеркнутая буква или цифра. Вместо <kbd>Q</kbd> можно задать свою клавишу-модификатор в коде `modKey: 'Q'`.

<a href="https://youtu.be/PN3dAf6rac8">
  <img width="122" height="47" src="https://i.ibb.co/02CqYYR/youtube-badge-ru.png">
</a>

![ResizeToSize](https://i.ibb.co/q0Ktmfm/Resize-To-Size.gif)

## RoundCoordinates
[![Direct](https://img.shields.io/badge/Прямая%20ссылка-RoundCoordinates.jsx-FF6900.svg)](https://rebrand.ly/rndcoord) [![Download](https://img.shields.io/badge/Скачать%20все-Zip--архив-0088CC.svg)](https://bit.ly/2M0j95N)

Округляет координаты каждого выделенного объекта. Ориентиром для выравнивания будет выбранная контрольная точка из панели `Transform`. Скрипт учитывает единицы измерения документа и толщину обводки, если включено `Preferences → Use Preview Bounds`. В файле скрипта можно изменить шаг округления координат CFG `step: 1`. Если шаг 0, то скрипт выровняет по сетке документа из `Preferences → Guides & Grid`.

![RoundCoordinates](https://i.ibb.co/3y0WpzC/Round-Coordinates.gif)

## Поддержка
Вы можете поддержать мою работу над новыми скриптами и их распространение любой суммой через [Buymeacoffee] (иностр. карты), [Tinkoff], [ЮMoney], [Donatty], [DonatePay].   

[Buymeacoffee]: https://www.buymeacoffee.com/osokin
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