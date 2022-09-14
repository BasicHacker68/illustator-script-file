![header](https://i.ibb.co/mF018gV/emblem.png)
# Item | Adobe Illustrator Scripts

![Downloads](https://img.shields.io/badge/Downloads-23k-27CF7D.svg) [![Yotube](https://img.shields.io/badge/Telegram%20Channel-%40aiscripts-0088CC.svg)](https://t.me/aiscripts) [![Yotube](https://img.shields.io/badge/Youtube-%40SergOsokinArt-FF0000.svg)](https://www.youtube.com/c/SergOsokinArt/videos)

[На главную](../README.ru.md)

## 📜 Scripts
* BatchTrace `(new, 15.08.2022)`
* DuplicateToArtboards `(upd, 14.09.2022)`
* FitSelectionToArtboards `(upd, 01.08.2022)`
* MakeEnvelopesWithTops
* MirrorMove `(upd, 01.08.2022)`
* RememberSelectionLayers `(upd, 26.02.2022)`
* RenameItems `(upd, 14.09.2022)`
* Rescale `(upd, 14.09.2022)`
* ResizeOnLargerSide `(upd, 01.08.2022)`
* ResizeToSize `(upd, 14.09.2022)`
* RoundCoordinates `(upd, 01.08.2022)`
* SortLayerItems `(new, 29.08.2022)`

<a href="https://bit.ly/2M0j95N">
  <img width="140" height="43" src="https://i.ibb.co/Wp39Brs/download-ru.png">
</a>  

## BatchTrace
Пакетно трассирует выбранные пользователем линкованные и внедрённые изображения в документе или все изображения из папки. Штатное меню `Object → Image Trace → Make` доступно для одного выбранного изображения. Запись экшена не поможет, так как в нём не сохраняются настройки трассировки. В Adobe Bridge возможна трассировка только папки с изображениями: `Tools → Illustrator → Image Trace`. Скорость работы скрипта зависит от характеристик вашего компьютера, пресета и количества изображений.

Тонкие настройки в коде скрипта:

* `CFG.extList` — список обрабатываемых форматов из папки. Можно добавить свои или удалить некоторые для пропуска скриптом;
* `CFG.isInclSubdir` — поиск изображений во всех подпапках (true) или только корневой (false);
* `CFG.isReverse` — развернуть список пресетов (true), пользовательские будут наверху.

![BatchTrace](https://i.ibb.co/YkMGpS9/Batch-Trace.gif)

## DuplicateToArtboards
Дублирует выбранные на активном артборде объекты на ту же позицию в указанные артборды. Номера артбордов перечисляются через запятую или дефис. Пустая строка — объекты продублируются на все артборды, кроме исходного. Выберите `Preserve layers`, если объекты в разных слоях и должны там остаться.

Цвет временных индексов артбордов меняется в коде `CFG.color: [255, 0, 0]`.

[Голосование за функцию на Illustrator Uservoice](https://illustrator.uservoice.com/forums/333657-illustrator-desktop-feature-requests/suggestions/32146360--paste-on-selected-artboards)

![DuplicateToArtboards](https://i.ibb.co/mJqLzHr/Duplicate-To-Artboards.gif)

## FitSelectionToArtboards

Раскладывает выбранные объекты по центру артбордов и опционально подгоняет размеры каждого по наибольшей стороне к размеру артборда. При масштабировании объектов можно задать внутренние отступы от границ артбордов. С включённой опцией `Rename artboards...` артборды получат пользовательские имена помещенных на них объектов.   

Версия Lite (FitSelectionToArtboards-Lite.jsx) в тихом режиме выравнивает и масштабирует верхний выбранный объект по активному артборду. Если в её коде поменять флаг `CFG.isContains:true`, то выбранный объект обработается, только если он был целиком или частично в пределах артборда.

Существует два режима: тихий запуск и диалоговый. Меняется в `CFG.showUI`. Эти режимы меняются без правки кода, если удерживать клавишу Alt при запуске:

* <kbd>Alt</kbd> + `CFG.showUI: false` — появится диалог
* <kbd>Alt</kbd> + `CFG.showUI: true` — выполнится без диалога с опциями по умолчанию

![FitSelectionToArtboards](https://i.ibb.co/YT0qPWL/Fit-Selection-To-Artboards.gif)

## MakeEnvelopesWithTops

Искажает выбранный нижний объект по форме верхних по отдельности. Аналогичен множественному выполнению команды `Object → Envelope Distort → Make with Top Object`.

![MakeEnvelopesWithTops](https://i.ibb.co/N24Lmy7/Make-Envelopes-With-Tops.gif)


## MirrorMove

Перемещает выбранные объекты или точки зеркально последней операции `Object → Transform → Move...` или сдвига мышью / клавиатурой. Расширяет стандартную команду `Object → Transform → Transform Again`. Возможные оси: XY, X, Y. Movement ratio — коэффициент на какую дистанцию переместить относительно предыдущей (1 = ту же самую). Существует два режима: тихий запуск и диалоговый. Меняется в `CFG.showUI`. Эти режимы меняются без правки кода, если удерживать клавишу Alt при запуске:

* <kbd>Alt</kbd> + `CFG.showUI: false` — появится диалог
* <kbd>Alt</kbd> + `CFG.showUI: true` — скрипт сработает с последними использованными опциями

![MirrorMove](https://i.ibb.co/vDPYtQC/Mirror-Move.gif) 

## RememberSelectionLayers

Перемещает объекты в их оригинальные слои. Предварительно информацию необходимо сохранить. Объекты переносятся в начало слоя.

![RememberSelectionLayers](https://i.ibb.co/SJq5rj9/Remember-Selection-Layers.gif)

## RenameItems

Массово переименовывает выбранные объекты или их родительские слои. Если объекты не выбраны, то скрипт переименовывает активный слой или артборд. Функция поиска и замены поддерживает RegExp.       

![RenameItems](https://i.ibb.co/9T8TfQv/rename-items.gif)

## Rescale

Трансформирует выбранные объекты вместе до заданного размера. Также можно использовать скрипт для трансформирования по коэффициенту. Если перед запуском скрипта нарисовать линию размером объекта, то размер подставится в поле `Old size`. Единицы измерения в окне скрипта, как в настройках документа.      

![Rescale](https://i.ibb.co/gDj142f/demo-Rescale.gif)

## ResizeOnLargerSide

Трансформирует выбранные объекты пропорционально до заданной величины бОльшей стороны. Её скрипт определяет автоматически. Учитывает единицы измерения документа.  

![ResizeOnLargerSide](https://i.ibb.co/1bSj1kC/Resize-On-Larger-Side.gif)

## ResizeToSize

В Illustrator есть панель `Transform`, но в ней нельзя трансформировать каждый выделенный объект до заданной величины. При стандартном способе периодически появляются дробные значения в размере. Скрипт трансформирует выделенные объекты со 100% точностью, в зависимости от стороны: ширины, высоты или бОльшей стороны. Все настройки переключаются горячими клавишами <kbd>Q</kbd> + подчеркнутая буква или цифра. Вместо <kbd>Q</kbd> можно задать свою клавишу-модификатор в коде `modKey: 'Q'`.

<a href="https://youtu.be/PN3dAf6rac8">
  <img width="122" height="47" src="https://i.ibb.co/02CqYYR/youtube-badge-ru.png">
</a>

![ResizeToSize](https://i.ibb.co/q0Ktmfm/Resize-To-Size.gif)

## RoundCoordinates
Округляет координаты каждого выделенного объекта. Ориентиром для выравнивания будет выбранная контрольная точка из панели `Transform`. Скрипт учитывает единицы измерения документа и толщину обводки, если включено `Preferences → Use Preview Bounds`. В файле скрипта можно изменить шаг округления координат CFG `step: 1`. Если шаг 0, то скрипт выровняет по сетке документа из `Preferences → Guides & Grid`.

![RoundCoordinates](https://i.ibb.co/3y0WpzC/Round-Coordinates.gif)

## SortLayerItems
Сортирует объекты по алфавиту внутри слоёв. Подслои сортируются с объектами и при выборе `Include all sublayers` их содержимое тоже. Счётчик слоёв обновляется динамически. Объекты без имени (в угловых скобках `<Group>`, `<Ellipse>` и т.д.) помещаются вверх / вниз.

![SortLayerItems](https://i.ibb.co/R9wQS7t/Sort-Layer-Items.gif)

<a href="https://bit.ly/2M0j95N">
  <img width="140" height="43" src="https://i.ibb.co/Wp39Brs/download-ru.png">
</a> 

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