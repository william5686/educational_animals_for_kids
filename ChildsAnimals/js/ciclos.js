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
              document.getElementById('z').innerHTML ='<img class="img-circle" src="img/pe.jpg" style="display:block; margin:auto;" height="50%" width="50%"> <br> <p>El perro o perro dom??stico (Canis lupus familiaris),1???2???3??? tambi??n llamado can,4??? y coloquialmente llamado chucho5??? o tuso;6??? es un mam??fero carn??voro de la familia de los c??nidos, que constituye una subespecie del lobo (Canis lupus). En 2001, se estimaba que hab??a 400 millones de perros en el mundo.7??? Su tama??o o talla, su forma y pelaje es muy diverso seg??n la raza. Posee un o??do y olfato muy desarrollados, siendo este ??ltimo su principal ??rgano sensorial. En las razas peque??as puede alcanzar una longevidad de cerca de 20 a??os, con atenci??n esmerada por parte del propietario, de otra forma su vida en promedio es alrededor de los quince a??os.</p>';  
              document.getElementById('f1').style.color= "#FF7777";
              document.getElementById('f2').style.color= "#333333";
              document.getElementById('f3').style.color= "#333333";
              document.getElementById('f4').style.color= "#333333";
              document.getElementById('f5').style.color= "#333333";
             break;
              
        case 2:
               document.getElementById('z').innerHTML ='<img class="img-circle" src="img/va.jpg" style="display:block; margin:auto;" height="50%" width="50%"> <br> <p>La vaca en el caso de la hembra, o toro en el caso del macho (Bos primigenius taurus / Bos taurus), es un mam??fero artiod??ctilo de la familia de los b??vidos. El nombre cient??fico es el que se le asign?? al animal vacuno dom??stico europeo y norasi??tico, un conjunto de b??vidos dom??sticos descendientes de la subespecie de uro salvaje euroasi??tico conocida como Bos primigenius primigenius; mientras que se denomina Bos primigenius indicus a los ceb??es y otras razas bovinas dom??sticas provenientes del mismo tronco, y descendientes de la subespecie de uro salvaje del Sudeste Asi??tico, denominado Bos primigenius namadicus. Se trata de un mam??fero rumiante grande y de cuerpo robusto, con unos 120-150 cm de altura y 600-800 kg de peso medio.</p>';; 
               document.getElementById('f2').style.color= "#FF7777";
               document.getElementById('f1').style.color= "#333333";
               document.getElementById('f3').style.color= "#333333";
               document.getElementById('f4').style.color= "#333333";
               document.getElementById('f5').style.color= "#333333";
             break; 

              
        case 3:
              document.getElementById('z').innerHTML ='<img class="img-circle" src="img/toro.jpg" style="display:block; margin:auto;" height="50%" width="50%"> <br> <p>La adoraci??n del Toro Sagrado era com??n en el mundo antiguo. Su fuente de conocimiento viene de Egipto, y luego pas?? a los pueblos de la Mesopotamia Antigua y la Grecia Helenista, la misma que en su religiosidad la difundi?? a Roma. Es quiz??s m??s familiar a Occidente el empleo del toro por parte de Roma y su religi??n quienes en ciertas fiestas o acontecimientos de conquista a otros pueblos, para agradecer a los dioses hac??an sacrificar a uno de estos animales nobles y fuertes en sus rituales paganos y muchos, como sin??nimo de prosperidad y fortaleza, se ba??aban en la sangre del animal sacrificado. Viene a colaci??n en este hecho los sacrificios que se hac??an en Roma por ejemplo despu??s de que C??sar conquistara las Galias.</p>';
              document.getElementById('f3').style.color= "#FF7777";
              document.getElementById('f2').style.color= "#333333";
              document.getElementById('f1').style.color= "#333333";
              document.getElementById('f4').style.color= "#333333";
              document.getElementById('f5').style.color= "#333333";
             break; 

        case 4:
               document.getElementById('z').innerHTML ='<img class="img-circle" src="img/ga.jpg" style="display:block; margin:auto;" height="50%" width="50%"> <br> <p>El gato o gato dom??stico1???2??? (Felis silvestris catus) y coloquialmente llamado minino,3??? michino,4??? micho,5??? mizo,6??? miz,7??? morrongo8??? o morro??o;9??? es una subespecie de mam??fero carn??voro de la familia Felidae. El gato est?? en convivencia cercana al ser humano desde hace unos 9500 a??os,10??? periodo superior al estimado anteriormente, que oscilaba entre 3500 y 8000 a??os.</p>';
               document.getElementById('f4').style.color= "#FF7777";
               document.getElementById('f1').style.color= "#333333";
               document.getElementById('f2').style.color= "#333333";
               document.getElementById('f3').style.color= "#333333";
               document.getElementById('f5').style.color= "#333333";
             break;

        case 5:
               document.getElementById('z').innerHTML ='<img class="img-circle" src="img/bu.jpg" style="display:block; margin:auto;" height="50%" width="50%"> <br> <p>B??ho es el nombre com??n de aves de la familia Strigidae, del orden de los estrigiformes o aves rapaces nocturnas. Habitualmente designa especies que, a diferencia de las lechuzas, tienen plumas alzadas que parecen orejas (sus verdaderas orejas se encuentran al costado de la cabeza, a los laterales de los ojos) y presentan una coloraci??n amarilla o naranja en el iris. Debido a que sus ojos carecen de movilidad y solo pueden ver hacia delante, pueden girar la cabeza 270??.</p>'; 
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
     




    






