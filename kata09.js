
//A	50	3 for 130
//B	30	2 for 45
//C	20	
//D	15
//var mocha = require ('mocha');
//var promoA = [
  //  value = 130,
   // qtd = 3
//];
//var promoB = [
  //  value = 45,
    //qtd = 2
//];
const arrPrice = [
    {
        code:'A',
        qtd:0,
        price:50,
        ptotal:0,
        promo : {
            value: 130,
            qtd: 3
        }
    },
    {
        code:'B',
        qtd:0,
        price:30,
        ptotal:0,
        promo: {
            value: 45,
            qtd: 2
        }
    },
    {
        code:'C',
        qtd:0,
        price:20,
        ptotal:0,
        promo:null
    },
    {
        code:'D',
        qtd:0,
        price:15,
        ptotal:0,
        promo:null
    }
    ];

var coo = ['B','B','B','A','A','A','A','A','A','A','D','D','D'];

function groupIten (){
    for (i = 0 , max = coo.length; i < max; i++){
        
        if(coo[i]==='A'){
            arrPrice[0].qtd+=1;
            
        }       
        else if(coo[i]==='B'){
            arrPrice[1].qtd+=1;
            
        }
        else if(coo[i]==='C'){
            arrPrice[2].qtd+=1;
            
        }
        else{
            arrPrice[3].qtd+=1;
            
        }
       
    };
};

function calcPrice() {
   var valCoo = 0;
    for (i = 0 , max = arrPrice.length; i < max; i++){
         
            if((arrPrice[i].promo!= null )&& (arrPrice[i].qtd >= arrPrice[i].promo.qtd)){
                if((arrPrice[i].qtd % arrPrice[i].promo.qtd)===0){
                arrPrice[i].ptotal = (arrPrice[i].qtd/arrPrice[i].promo.qtd)*arrPrice[i].promo.value;
                valCoo += arrPrice[i].ptotal;
                }else{
                arrPrice[i].ptotal = (parseInt(arrPrice[i].qtd/arrPrice[i].promo.qtd)*arrPrice[i].promo.value)+((arrPrice[i].qtd % arrPrice[i].promo.qtd)*arrPrice[i].price);
                valCoo += arrPrice[i].ptotal;
            }
       
    }else if((arrPrice[i].promo!= null )&& (arrPrice[i].qtd < arrPrice[i].promo.qtd)){
        arrPrice[i].ptotal = arrPrice[i].qtd * arrPrice[i].price;
        valCoo += arrPrice[i].ptotal;
    }else{
        arrPrice[i].ptotal = arrPrice[i].qtd * arrPrice[i].price;
        valCoo += arrPrice[i].ptotal;
    };
}
};


var agrupaIten = groupIten();
 
var calcula = calcPrice();
console.log(arrPrice); 
 

