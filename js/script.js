ymaps.ready(init); // карта соберется после загрузки скрипта и элементов
var myMap; // заглобалим переменную карты чтобы можно было ею вертеть из любого места
function init() { // функция - собиралка карты и фигни
    myMap = new ymaps.Map("map", { // создаем и присваиваем глобальной переменной карту и суем её в див с id="map"
        center: [59.939523, 30.329727], // ну тут центр
        behaviors: ['default', 'scrollZoom'], // скроллинг колесом
        zoom: 16 // тут масштаб
    });
    myMap.controls // добавим всяких кнопок, в скобках их позиции в блоке
        .add('zoomControl', {
            left: 5,
            top: 5
        })
    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], { // Создаем метку с такими координатами и суем в переменную
        balloonContent: 'ул. Большая Конюшенная 19/8' // сдесь содержимое балуна в формате html, все стили в css
    }, {
        iconImageHref: 'img/map-tag.png', // картинка иконки
        iconImageSize: [80, 140], // размер иконки
        iconImageOffset: [-40, -140], // позиция иконки
    });
    myMap.geoObjects
        .add(myPlacemark);
}
