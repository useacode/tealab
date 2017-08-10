// cookie

function SetCookie(strName, oValue)
{
    Cookies.set(strName, oValue);
}

function GetCookie(strName)
{
     return Cookies.get(strName);
}
function DeleteCookie(strName)
{
    Cookies.remove(strName);
}
function DeleteAllCookie()
{
    var arr = new Array();
    var str = document.cookie;

    var i = 0, nBeg = 0, nEnd;

    do
    {
        if((nEnd = str.indexOf("=", nBeg)) > -1)
            arr[i] = str.substring(nBeg, nEnd);
    }
    while(i++, nBeg = str.indexOf(" ", nEnd) + 1);

    for(i = 0; i < arr.length; i++)
        DeleteCookie(arr[i]);
}
function IsCookieEnabled()
{

    if(typeof(navigator.cookieEnabled) != "undefined")
        return navigator.cookieEnabled;
    else     { var _c = "__V_TEST_COOKIE_NAME_";
        SetCookie(_c, "1");
        if(GetCookie(_c) != null)
        {
            DeleteCookie(_c);
            return true;
        }
        return false;
    }
}

jQuery(document).ready(function(){
    function addBodyClass (nameclass) {
        var cname=$("body"). attr("class");
        cname +=" ";
        cname += nameclass;
        $("body"). attr("class",cname);
        SetCookie("special", cname);
    }

    function delBodyClass (nameclass) {
        var cname=$("body"). attr("class");
        var ind1=cname.indexOf(nameclass,0);
        if (ind1!=-1) {
            var ind2=cname.indexOf(" ",ind1);
            var  newclass=cname.substr(0, ind1);
            if (ind2!=-1) {
                newclass+=cname.substr(ind2+1,cname.length);
            }
            $("body"). attr("class",newclass);
        }

    }

    $("a.on_settings").click(function (e) {
        e.preventDefault();
        $(".open_settings").slideToggle();
    });

    $("a.close_panel").click(function () {
        $(".open_settings").hide();
    });
//font-size
    $("a.font1").click(function () {
        delBodyClass ("font")
        addBodyClass("font1");
    });
    $("a.font2").click(function () {
        delBodyClass ("font")
        addBodyClass("font2");
    });
    $("a.font3").click(function () {
        delBodyClass ("font")
        addBodyClass("font3");
    });
//images
    var iii=1;
    $("a.img_off").click(function () {

        if (iii==1)
        {
            iii=0;
            delBodyClass ("img");
            addBodyClass("img_off");
            $(this).text("Включить изображения");
        }
        else
        {
            iii=1;
            delBodyClass ("img");
            addBodyClass("img_on");
            $(this).text("Выключить изображения");
        }
    });

//color
    $("a.color1").click(function () {
        delBodyClass ("color")
        addBodyClass("color1");
    });
    $("a.color2").click(function () {
        delBodyClass ("color")
        addBodyClass("color2");
    });
    $("a.color3").click(function () {
        delBodyClass ("color")
        addBodyClass("color3");
    });
    $("a.color4").click(function () {
        delBodyClass ("color")
        addBodyClass("color4");
    });
    $("a.color5").click(function () {
        delBodyClass ("color")
        addBodyClass("color5");
    });
//font-family
    $("a.arial").click(function () {
        delBodyClass ("verdana")
        delBodyClass ("times")
        delBodyClass ("arial")
        addBodyClass("arial");
        $("body.arial p").css("font-family","Arial");
        $("body.arial span").css("font-family","Arial");
        $("body.arial a").css("font-family","Arial");

    });
    $("a.times").click(function () {
        delBodyClass ("verdana")
        delBodyClass ("times")
        delBodyClass ("arial")
        addBodyClass("times");
        $("body.times p").css("font-family","Times New Roman");
        $("body.times span").css("font-family","Times New Roman");
        $("body.times a").css("font-family","Times New Roman");
    });
    $("a.verdana").click(function () {
        delBodyClass ("verdana")
        delBodyClass ("times")
        delBodyClass ("arial")
        addBodyClass("verdana");
        $("body.verdana p").css("font-family","Verdana");
        $("body.verdana span").css("font-family","Verdana");
        $("body.vardana a").css("font-family","Verdana");

    });
//spacing
    $("a.spacing-small").click(function () {
        delBodyClass ("spacing")
        addBodyClass("spacing-small");
    });
    $("a.spacing-normal").click(function () {
        delBodyClass ("spacing")
        addBodyClass("spacing-normal");
    });
    $("a.spacing-big").click(function () {
        delBodyClass ("spacing")
        addBodyClass("spacing-big");
    });
    $("a.standart_settings").click(function () {
        $("body").attr("class","arial font1 color1 img_on spacing-small");
        SetCookie("special", "arial font1 color1 img_on spacing-small");
    });
    
    $(".special_show").click(function () {
        $(".spesial_settings").slideToggle();
    });


});
