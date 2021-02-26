"use strict";
function identity(arg) {
    return arg;
}
var myIdentity = identity;
var output = myIdentity("myString");
var output2 = myIdentity("myString");
