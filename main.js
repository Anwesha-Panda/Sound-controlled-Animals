dog = 0;
cat = 0;
lion = 0;
cow = 0;
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LL9AkdGqr/model.json', modelReady);
}

function modelReady(){
    console.log("model is ready");
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        img = document.getElementById("image");

        console.log(results);
        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;
        
        document.getElementById("which_audio").innerHTML='Accuracy- '+(results[0].confidence*100).toFixed(2)+' %';
        document.getElementById("no_of_audio").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("which_audio").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

      if(results[0].label=="Moo"){
      img.src="cow.jpg"
      cow=cow+1;
      document.getElementById("no_of_audio").innerHTML = "Cow: " + cow;
     
      }
       else if(results[0].label=="Roar"){
        img.src="lion.jpg"
        lion=lion+1;
        document.getElementById("no_of_audio").innerHTML = "Lion: " + lion;
       }
    else if(results[0].label=="Meow"){
        img.src="cat.jpg"
        cat=cat+1;
        document.getElementById("no_of_audio").innerHTML = "Cat: " + cat;
        
    }
    else{
        img.src="dog.jpg"
        dog=dog+1;
        document.getElementById("no_of_audio").innerHTML = "Dog: " + dog;
       
    }
    }
}

