//High order Function=Functions which accept function as a argument
//Callback Function= Function which are passed as an argument in a function
function getFirstName(fullname){
    //fullname="Tony Stark".split(" ") => ["Tony" , "Stark"]
    fullname=fullname.split(" ");
    return fullname[0];
}
function getLastName(fullname){
    fullname=fullname.split(" ");
    return fullname[1];
}

function sayHi(fullname ,fun ){
    let name = fun(fullname);
    console.log(name);

}

sayHi("Tony Stark", getFirstName);
sayHi("Bruce Banner",getLastName);