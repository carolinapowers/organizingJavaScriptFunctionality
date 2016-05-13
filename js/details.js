
var Details = (function () {
    var $items, $content;
    function init() {
        $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
        $content = $("[rel=js-details]");
        $items.on("click", "[rel^='js-item-']", personClicked);
    }
    function personClicked (evt) {
        var id = $(evt.target).attr("rel").replace(/^.*(\d+)$/, "$1");
        $.ajax("details/" + id + ".html", {dataType:"text"}).then(function (contents) {
            $content.html(contents);
        })
    }
   
    return{ 
        init: init
    }
    
})(); 

$(document).ready(Details.init);
