




(function(s){
    $(document).ready(function(){

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<, slider
    /*$('.bxslider').bxSlider({
        mode: 'horizontal',
        speed: 500,
        slideMargin: 0,
        startSlide: 0,
        randomStart: false,
        captions: false,
        ticker: false,
        tickerHover: false,
        adaptiveHeight: false,
        adaptiveHeightSpeed: 500,
        responsive: true,

        // PAGER
        pager: true,
        pagerType: 'full',
        pagerShortSeparator: ' / ',

        // CONTROLS
        controls: true,

        // AUTO
        auto: true,
        pause: 4000,

        // CAROUSEL
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 0
    });*/





//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< бегунки и формула

    $(function() {

        $('#slider').slider({
            range: "min",
            animate: true,
            min: 10000, // минимальное значение цены
            max: 30000, // максимальное значение цены
            step: 5000, // шаг слайдера
            value: 10000,  // начальные значения - позиции ползунков на шкале
            create: setInputsFromSlider,
            slide: setInputsFromSlider,
            stop: setInputsFromSlider
        })

        function setInputsFromSlider() {
            $('#slideVal').val($('#slider').slider("value"));


        }


        $('#slider2').slider({
            range: "min",
            animate: true,
            min: 8, // минимальное значение цены
            max: 52, // максимальное значение цены
            step: 1, // шаг слайдера
            value: 1,  // начальные значения - позиции ползунков на шкале
            create: setInputsFromSlider2,
            slide: setInputsFromSlider2,
            stop: setInputsFromSlider2
        });

        function setInputsFromSlider2() {
            $('#slideVal2').val($('#slider2').slider("value"));

        }



        $('input').change(function(e) {
            switch (this.id) {

                case "slideVal":
                    $('#slider').slider("value", $(this).val())
                    break;


                case "slideVal2":
                    $('#slider2').slider("value", $(this).val())
                    break;
            }
        })



        /* $("#result").click(function(){
            var a1 =  parseInt($('#slideVal').val());
            var b1 =  parseInt($('#slideVal2').val());

            //var a2 = a1-(a1*0.02);
            //var a2 = a1*0.02;
            //var b2 = b1/30;
            //var res = ((a1 / b2)+ a2).toFixed(3);
            //$('#result2').val(res);
            //$('#result2').val(a1);

            var res = ((a1 / 100)* b1*(24 / 365)).toFixed(2);
            $('#result2').val(res);
            $('#per').val(res);
        });*/


    })



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< для формы


           /*$(function(){
            // откуда берем данные сформы
            $('.product_add').submit(function(e){
                //отменяем стандартное действие при отправке формы
                e.preventDefault();
                //берем из формы метод передачи данных
                var m_method=$(this).attr('method');
                //получаем адрес скрипта на сервере, куда нужно отправить форму
                var m_action=$(this).attr('action');
                //получаем данные, введенные пользователем в формате input1=value1&input2=value2...,
                //то есть в стандартном формате передачи данных формы
                var m_data=$(this).serialize();
                $.ajax({
                    type: m_method,
                    url: m_action,
                    data: m_data,
                    success: function(result){
                        // где показываем результат
                        $('#product_add_result').html(result);
                    }
                });
            });
        });*/

























    // скрипты для инпутов

    $('input,select').styler({
       // idSuffix:'-select', // Суффикс, добавляемый к ID стандартного элемента. Т.е., если его id "test", то у стилизованного элемента он будет "test-select".
       // browseText:'Файл не выбран...', // Текст кнопки у загрузчика файлов.
       // selectVisibleOptions:5, // Кол-во отображаемых пунктов в селекте без прокрутки.
       // singleSelectzIndex:50, // Уровень слоя с псевдоселектом.
       // selectSmartPositioning:true // "Умное" позиционирование выпадающего списка.
    });
    /*$('input:radio').styler({
        idSuffix:'-select', // Суффикс, добавляемый к ID стандартного элемента. Т.е., если его id "test", то у стилизованного элемента он будет "test-select".
        browseText:'Файл не выбран...', // Текст кнопки у загрузчика файлов.
        selectVisibleOptions:5, // Кол-во отображаемых пунктов в селекте без прокрутки.
        singleSelectzIndex:50, // Уровень слоя с псевдоселектом.
        selectSmartPositioning:true // "Умное" позиционирование выпадающего списка.
    });*/
    //$('input:checkbox').styler({

    //});
    // //скрипты для инпутов




    $(".text_hide").hide();

    $('.pers_dan').click(function(){
        $(".text_hide").slideToggle(500);
        return false
    });




    });

})(jQuery);

