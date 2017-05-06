/// @name: -=[ addClassScrollTop ]=-.
/// @description: добавляет заданный класс заданному объекту через заданное расстояние.
/// @require: jQuery 1.7+.
/// @access: public.
/// @type: function.
/// @prop: target {string} - объект, к которому применяется данная функция.
/// @prop: offsetTop {integer} - расстояния от верха в px, - точнка срабатывания.
/// @prop: classAdd {string} - класс, который добавляется при условии == true.
/// (класс, идентификатор или селектор).

function addClassScrollTop (target, offsetTop, classAdd) {
    if($(document).scrollTop() > offsetTop) {
        if( !$(target).hasClass(classAdd) )
            $(target).addClass(classAdd);
    }
    else {
        if( $(target).hasClass(classAdd) )
            $(target).removeClass(classAdd);
    }
}
