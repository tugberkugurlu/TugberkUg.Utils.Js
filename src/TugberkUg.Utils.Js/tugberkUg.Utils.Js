var tu = tu || {};

!function (tUg) {

    //queryString utility
    tUg.queryString = function () {

        var qStrings = {},
            get = function (queryStringParam) {

                return qStrings[queryStringParam];
            },
            isDefined = function (queryStringParam) {

                return (qStrings[queryStringParam]) ? true : false;
            };

        //fill it in
        !function (obj) {

            var e,
                a = /\+/g,  // Regex for replacing addition symbol with a space
                r = /([^&=]+)=?([^&]*)/g,
                d = function (string) {
                    //we need to do proper url decoding here
                    return string.replace(a, " ");
                },
                q = window.location.search.substring(1);

            while (e = r.exec(q)) {
                obj[d(e[1])] = d(e[2]);
            }

        }(qStrings);

        return {
            get: get,
            isDefined: isDefined
        };

    }();

}(tu);