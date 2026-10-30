function abc(){
    console.log(obj.name);

}
var obj={
    name:"ravi",
    show:abc,
};
obj.show();