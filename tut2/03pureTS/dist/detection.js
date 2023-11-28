"use strict";
//Always remember to perform checks for these kinds of situations
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    return id.toLowerCase();
}
function printAll(strs) {
    //never do this , else check of an empty string becomes problematic
    //read the documentation on narrowing for more understanding 
    if (strs) {
    }
}
const systemAccount = (account) => {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
};
