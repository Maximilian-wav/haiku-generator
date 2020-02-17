//a haikou generator
<!--
document.addEventListener("DOMContentLoaded", init, false);
	
	
function init() {

    generate();
    
    var enterButton = document.getElementById("maxioButton");
        enterButton.addEventListener("click", generate);

    }

function generate() {

    var oneS = ["mid", "dark", "cold", "young", "great", "flow", "zen", "want", "no", "free", "fix"];
    var twoS = ["ultra", "modern", "conscience", "process", "chaos", "water", "wifi", "doughnut", "decaf", "sadness"];
    var threeS = ["chicago", "gratitude", "ravishing", "amazing", "century", "maximum", "velvety", "chocolate"];
    var fourS = ["february", "continuous", "misunderstood", "contradicting", "overwhelming", "fashionable"];
    var fiveS = ["undeniable", "beautiful", "irreplaceable", "unbelievable","illuminati"];
    
    var num1=(Math.floor(Math.random()*11) % oneS.length);
    var num2a=(Math.floor(Math.random()*10) % twoS.length);
    var num2b=(Math.floor(Math.random()*10) % twoS.length);

    var num3=(Math.floor(Math.random()*10) % threeS.length);
    var num4=(Math.floor(Math.random()*10) % fourS.length);
    var num5=(Math.floor(Math.random()*10) % fiveS.length);

    var words=threeS[num3] + " " + twoS[num2a] + " " + fourS[num4] + " " + oneS[num1] + " " + twoS[num2b] + " " + fiveS[num5] ;

    console.log(words);    
    // var words= document.getElementById("words").HTML= threeS[num3] + " " + twoS[num2a] + " " + fourS[num4] + " " + oneS[num1] + " " + twoS[num2b] + " " + fiveS[num5] ;

    }		

-->	

