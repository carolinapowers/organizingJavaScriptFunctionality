
var Details = (function () {
    var $content;
    function init() {
        $content = $("[rel=js-details]");
       
    }
    function personClicked (id) { 
        $.ajax("details/" + id + ".html", {dataType:"text"}).then(function (contents) {
            $content.html(contents);
        })
    }
   
    return{ 
        init: init,
        loadPerson: personClicked
    }
    
})(); 


