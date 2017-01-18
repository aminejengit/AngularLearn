
app.directive("showworkers", function () {
    return {
        template: function (elmt,attr) {
            return  attr.name+"{{worker}}"
        }
    };
});