import Vue from "vue";

Vue.filter("deleteHtmlTags", function(val) {
    var a = val.replace(/(<([^>]+)>)/gi, "");
    return a;
});
Vue.filter("upperCase", function(val) {
    return val.toUpperCase();
});

Vue.filter("truncateFilter", function(val, truncateLength) {
    if (val.length > truncateLength) {
        return val.slice(0, truncateLength) + "...";
    } else {
        return val;
    }
});
