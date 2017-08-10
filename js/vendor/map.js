var contactMap;
ymaps.ready(function () {
    var center = [59.931758, 30.362641];
    

    var mark = new ymaps.Placemark(center, {
        hintContent: 'МИБС',
        balloonContent: 'МИБС'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/mark.png',
        iconImageSize: [52, 75],
        iconImageOffset: [-5, -38]
    });


    var maps = [
        {
            selector: '#contactMap',
            map:  'contactMap',
            center: mark
        }
    ];

    $.each(maps, function(){
        if($(this.selector).get(0)) {
            if ($(window).width() <= '450') {
                 $(this.selector).css({'height': '320px'});
            }
            else {
                $(this.selector).css({'height': '550px'});
            }
            var centerMap = new ymaps.Map(this.map, {
                center: center,
                zoom: 14
            });
            this.center && centerMap.geoObjects.add(this.center);
        }
    });
 
});