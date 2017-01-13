




(function(s){
    $(document).ready(function(){

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


    })



    $('input,select').styler({
 });


    $(".text_hide").hide();

    $('.pers_dan').click(function(){
        $(".text_hide").slideToggle(500);
        return false
    });




    });

})(jQuery);

