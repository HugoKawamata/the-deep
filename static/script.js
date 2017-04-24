$(document).ready(function(){
    function renderCard() {
        var faction = $("#faction-input").val().toUpperCase();
        switch (faction) {
            case "MAD":
                $("#card").addClass("mad-mountains");
                break;
            case "LAK":
                $("#card").addClass("lavovi");
                break;
            case "KZJ":
                $("#card").addClass("kzjath");
                break;
            case "DRE":
                $("#card").addClass("drevostoy");
                break;
            case "PAT":
                $("#card").addClass("pathos");
                break;
            case "JIN":
                $("#card").addClass("jindavah");
                break;
            case "SPE":
                $("#card").addClass("spell");
                break;
            case "PRA":
                $("#card").addClass("prayer");
                break;
                       }
        
        var name = $("#name-input").val();
        $("#name").html(name);
        
        var arturl = $("#artbox-input").val();
        $("#artbox").css("background-image", "url(\'".concat(arturl, "\')"));
        
        
        $("#elements").html("");
        var numelems = parseInt($("#numelems").val());
        for (i = 0; i < numelems; i++) {
            $("#elements").append(
                "<div class='element-container'><div id='elem".concat(
                i.toString(), "-icon' class='element'></div><div id='elem", i.toString(), "-text' class='element-text'></div></div>")
            );
        }
        
        var elem0 = $("#elem0-input").val();
        if (elem0 != "") {
            $("#elem0-icon").addClass(elem0);
            $("#elem0-text").text(elem0);
            if (elem0 == "necrotic" || elem0 == "madness") {
                $("#elem0-text").addClass("long-text");
            }
        }
        var elem1 = $("#elem1-input").val();
        if (elem1 != "") {
            $("#elem1-icon").addClass(elem1);
            $("#elem1-text").text(elem1);
            if (elem1 == "necrotic" || elem1 == "madness") {
                $("#elem1-text").addClass("long-text");
            }
        }
        var elem2 = $("#elem2-input").val();
        if (elem2 != "") {
            $("#elem2-icon").addClass(elem2);
            $("#elem2-text").text(elem2);
            if (elem2 == "necrotic" || elem2 == "madness") {
                $("#elem2-text").addClass("long-text");
            }
        }
        
        $("#typeline").html($("#type-input").val());
        $("#main-text").html($("#main-text-input").val());
        $("#counter-text").html($("#counter-text-input").val());
        $("#flavour-text").html($("#flavour-input").val());
        
        $(".san-val").html($("#san-input").val());
        $(".mht-val").html($("#mht-input").val());
        $(".int-val").html($("#int-input").val());
        $(".dex-val").html($("#dex-input").val());
        $(".spd-val").html($("#spd-input").val());
        $(".hp-val").html($("#hp-input").val());
    };
    
    function saveCreature() {
        var creatureToSave = {
            "faction" : $("#faction-input").val().toUpperCase(),
            "name" : $("#name-input").val(),
            "art-url" : $("#artbox-input").val(),
            "num-elements" : $("#numelems").val(),
            "elem0" : $("#elem0-input").val(),
            "elem1" : $("#elem1-input").val(),
            "elem2" : $("#elem2-input").val(),
            "type" : $("#type-input").val(),
            "main-text" : $("#main-text-input").val(),
            "flavour" : $("#flavour-input").val(),
            "san" : $("#san-input").val(),
            "mht" : $("#mht-input").val(),
            "int" : $("#int-input").val(),
            "dex" : $("#dex-input").val(),
            "spd" : $("#spd-input").val(),
            "hp" : $("#hp-input").val()
        };
        
        return creatureToSave;
    };
    
    
    $("#renderButt").click(renderCard);
    $("#saveButt").click(console.log("meme"));
    console.log("start");
    /*$("#saveCreatureButt").click(
        $.post("/creature-save", 
        {name: "big", other: "boppa"});
    );*/
    
});