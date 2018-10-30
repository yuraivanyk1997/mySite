$(document).ready(function() {
    $("#l-arrow").click(function() {
        var img = $(".photos img");
        makeCarusel("l", img);
    });
    $("#r-arrow").click(function() {
        var img = $(".photos img");
        makeCarusel("r", img);
    });

    var name =['Vovka','Orysia','Marry Zozulia', 'Striomna Tiolka', 'Norm Paca'], post=['cleaner','blowjober', 'tester', 'java developer', 'front-end'];
    function makeCarusel(turn, img) {
    	$(".photos").empty();
    	var mas = [];
    	for( var i=0; i<img.length; i++){
    		mas[i]=$(img[i]);
    	}
    	console.log(mas[0].attr("src"));
    	if(turn=="l"){
	    	var temp = mas[0];
	    	mas.shift();
	    	mas.push(temp);
    	}
    	if(turn=="r"){
	    	var temp = mas[4];
	    	mas.pop();
	    	mas.unshift(temp);
    	}
    	$(".photos").append(mas);
    	console.log(mas[0].attr("src"));
    	for(var i=0; i<mas.length; i++){
    		mas[i].css("width", "40px");
    	}
    	mas[2].css("width", "70px");
    	$("#worker_name").text(name[mas[2].attr("src")[mas[2].attr("src").length-5]-1]);
    	$("#post").text(post[mas[2].attr("src")[mas[2].attr("src").length-5]-1]);
    }
    
    
});