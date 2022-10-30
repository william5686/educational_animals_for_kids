// function troll() {

// 	var num =prompt('Digite un valor');
// 	document.body.style.background="#ffffff";


// 	while(num==1){

//          num = prompt('Digite un valor');
//         document.body.style.background="#ffffff";
		

// 		if (num!=1) {

// 			alert("Muy bien");

// 			document.body.style.background="#FF0000";	
// 		}

// 	}

// }


function well(){
swal({
         title: 'Bienvenido',
         text: 'Nos place tenerte en nuestra pagina',
         imageUrl: 'img/gra2.jpg',
         imageWidth: 400,
         imageHeight: 200,
          imageAlt: 'Custom image',
          animation: false,
          customClass: 'animated wobble'
     })

}
    





function troll2(){
    


	var x = 0;

  swal({
  title: 'Seleciona un animal',
  input: 'text',
  inputPlaceholder: 'Elige un animal',
  showCancelButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) {
        resolve()
      } else {
        reject('Debes ingresar un numero')
      }
    })
  }
}).then(function (name) {
  var opAnimal = parseInt(name);
  
  switch(opAnimal){
   case 1:
      name = 'Perro'
      break;

   case 2:
      name = 'Vaca'
      break;

    case 3:
      name = 'Toro'
      break;  

    case 4:
      name = 'Gato'
      break;

    case 5:
      name = 'Toro'
      break;
      
    default:
    swal({type:'error', title:'Seleccione un numero correcto '}); 
    break;       

  }


  swal({type:'success', title:'Muy bien Seleccionaste al'+ name});


    if (opAnimal==1 || opAnimal==2 || opAnimal==3 || opAnimal==4 || opAnimal==5) {

       swal({
         title: 'Gracias',
         text: 'Nos place tenerte en nuestra pagina',
         imageUrl: 'img/cra.jpg',
         imageWidth: 400,
         imageHeight: 200,
          imageAlt: 'Custom image',
          animation: false,
          customClass: 'animated tada'

     })
}
else{
  swal({type:'error', title:'Seleccione un numero correcto :(', customClass: 'animated tada' }); 
}



      switch(opAnimal){
          case 1:
              document.getElementById('z').innerHTML ='<img class="img-circle" src="img/pe.jpg" style="display:block; margin:auto;" height="50%" width="50%"> <br> <p>El perro o perro doméstico (Canis lupus familiaris),1​2​3​ también llamado can,4​ y coloquialmente llamado chucho5​ o tuso;6​ es un mamífero carnívoro de la familia de los cánidos, que constituye una subespecie del lobo (Canis lupus). En 2001, se estimaba que había 400 millones de perros en el mundo.7​ Su tamaño o talla, su forma y pelaje es muy diverso según la raza. Posee un oído y olfato muy desarrollados, siendo este último su principal órgano sensorial. En las razas pequeñas puede alcanzar una longevidad de cerca de 20 años, con atención esmerada por parte del propietario, de otra forma su vida en promedio es alrededor de los quince años.</p>';  
              document.getElementById('f1').style.color= "#FF7777";
              document.getElementById('f2').style.color= "#333333";
              document.getElementById('f3').style.color= "#333333";
              document.getElementById('f4').style.color= "#333333";
              document.getElementById('f5').style.color= "#333333";
             break;
              
        case 2:
               document.getElementById('z').innerHTML ='<img class="img-circle" src="img/va.jpg" style="display:block; margin:auto;" height="50%" width="50%"> <br> <p>La vaca en el caso de la hembra, o toro en el caso del macho (Bos primigenius taurus / Bos taurus), es un mamífero artiodáctilo de la familia de los bóvidos. El nombre científico es el que se le asignó al animal vacuno doméstico europeo y norasiático, un conjunto de bóvidos domésticos descendientes de la subespecie de uro salvaje euroasiático conocida como Bos primigenius primigenius; mientras que se denomina Bos primigenius indicus a los cebúes y otras razas bovinas domésticas provenientes del mismo tronco, y descendientes de la subespecie de uro salvaje del Sudeste Asiático, denominado Bos primigenius namadicus. Se trata de un mamífero rumiante grande y de cuerpo robusto, con unos 120-150 cm de altura y 600-800 kg de peso medio.</p>';; 
               document.getElementById('f2').style.color= "#FF7777";
               document.getElementById('f1').style.color= "#333333";
               document.getElementById('f3').style.color= "#333333";
               document.getElementById('f4').style.color= "#333333";
               document.getElementById('f5').style.color= "#333333";
             break; 

              
        case 3:
              document.getElementById('z').innerHTML ='<img class="img-circle" src="img/toro.jpg" style="display:block; margin:auto;" height="50%" width="50%"> <br> <p>La adoración del Toro Sagrado era común en el mundo antiguo. Su fuente de conocimiento viene de Egipto, y luego pasó a los pueblos de la Mesopotamia Antigua y la Grecia Helenista, la misma que en su religiosidad la difundió a Roma. Es quizás más familiar a Occidente el empleo del toro por parte de Roma y su religión quienes en ciertas fiestas o acontecimientos de conquista a otros pueblos, para agradecer a los dioses hacían sacrificar a uno de estos animales nobles y fuertes en sus rituales paganos y muchos, como sinónimo de prosperidad y fortaleza, se bañaban en la sangre del animal sacrificado. Viene a colación en este hecho los sacrificios que se hacían en Roma por ejemplo después de que César conquistara las Galias.</p>';
              document.getElementById('f3').style.color= "#FF7777";
              document.getElementById('f2').style.color= "#333333";
              document.getElementById('f1').style.color= "#333333";
              document.getElementById('f4').style.color= "#333333";
              document.getElementById('f5').style.color= "#333333";
             break; 

        case 4:
               document.getElementById('z').innerHTML ='<img class="img-circle" src="img/ga.jpg" style="display:block; margin:auto;" height="50%" width="50%"> <br> <p>El gato o gato doméstico1​2​ (Felis silvestris catus) y coloquialmente llamado minino,3​ michino,4​ micho,5​ mizo,6​ miz,7​ morrongo8​ o morroño;9​ es una subespecie de mamífero carnívoro de la familia Felidae. El gato está en convivencia cercana al ser humano desde hace unos 9500 años,10​ periodo superior al estimado anteriormente, que oscilaba entre 3500 y 8000 años.</p>';
               document.getElementById('f4').style.color= "#FF7777";
               document.getElementById('f1').style.color= "#333333";
               document.getElementById('f2').style.color= "#333333";
               document.getElementById('f3').style.color= "#333333";
               document.getElementById('f5').style.color= "#333333";
             break;

        case 5:
               document.getElementById('z').innerHTML ='<img class="img-circle" src="img/bu.jpg" style="display:block; margin:auto;" height="50%" width="50%"> <br> <p>Búho es el nombre común de aves de la familia Strigidae, del orden de los estrigiformes o aves rapaces nocturnas. Habitualmente designa especies que, a diferencia de las lechuzas, tienen plumas alzadas que parecen orejas (sus verdaderas orejas se encuentran al costado de la cabeza, a los laterales de los ojos) y presentan una coloración amarilla o naranja en el iris. Debido a que sus ojos carecen de movilidad y solo pueden ver hacia delante, pueden girar la cabeza 270°.</p>'; 
               document.getElementById('f5').style.color= "#FF7777";
               document.getElementById('f2').style.color= "#333333";
               document.getElementById('f1').style.color= "#333333";
               document.getElementById('f3').style.color= "#333333";
               document.getElementById('f4').style.color= "#333333";
             break;   

             default:
             
             document.getElementById('z').innerHTML='<img class="img-circle" style="display:block; margin:auto;" src="img/tenor.gif" <br> <p style="text-align:center;">Algo no esta bien</p>';          
           document.getElementById('f1').style.color= "#333333";
           document.getElementById('f2').style.color= "#333333";
           document.getElementById('f3').style.color= "#333333";
           document.getElementById('f4').style.color= "#333333";
           document.getElementById('f5').style.color= "#333333";
           break;
      }


})



    }
     




    






