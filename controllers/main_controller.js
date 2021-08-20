
$(document).ready(function(){
var pagination_handle = 0;
jQuery.expr[':'].icontains = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
};
  //search hotel
$(".star_s").on("change",function(){
  var star= $(this).val();
$("#select_cat").val(star);
console.log(star);

});

  //search hotel

//modal_infohotel control
$("#hab_data").on("click",function(){
    $(this).addClass("active");
    $("#info_hab_nav").removeClass("active");
    $("#serv_hab").removeClass("active")
    $("#info_hotel_content").hide();
    
    $("#info_hab_content").show();
    $("#info_hab_serv").hide();
    //var data_hab = $("#form_det_hab").val();
    get_det_hab("#form_det_hab");
});

$("#info_hab_nav").on("click",function(){
     $(this).addClass("active");
    $("#hab_data").removeClass("active");
    $("#serv_hab").removeClass("active");
    $("#hotel_galery").removeClass("active");
    $("#mapa_detalle").removeClass("active");
    $("#info_hotel_content").show();
    $("#info_hab_content").hide();
    $("#info_hab_serv").hide();
    $("#info_images").hide();
    $("#info_hab_map").hide();


});

$("#serv_hab").on("click",function(){
     $(this).addClass("active");
    $("#info_hab_nav").removeClass("active");
    $("#hab_data").removeClass("active");
    $("#info_hotel_content").hide();
    $("#info_hab_content").hide();
    $("#info_hab_serv").show();
    get_det_serv("#form_det_hab");
});

$("#hotel_galery").on("click",function(){
     $(this).addClass("active");
    $("#info_hab_nav").removeClass("active");
    $("#hab_data").removeClass("active");
    $("#serv_hab").removeClass("active");
    $("#info_hotel_content").hide();
    $("#info_hab_content").hide();
    $("#info_hab_serv").hide();
    $("#info_images").show();
    get_images("#form_det_hab");
});

$("#mapa_detalle").on("click",function(){
     $(this).addClass("active");
    $("#info_hab_nav").removeClass("active");
    $("#hab_data").removeClass("active");
    $("#serv_hab").removeClass("active");
    $("#hotel_galery").removeClass("active");
    $("#info_hotel_content").hide();
    $("#info_hab_content").hide();
    $("#info_hab_serv").hide();
    $("#info_images").hide();
    $("#info_hab_map").show();
var la = $("#modal_lat").val();
var lo = $("#modal_long").val();
//console.log("lat"+la+"long"+lo);
    //map
                     // mymap = L.map('mapid').setView([item.lat, item.long], 13);
                     if(la > 0){

                      mymap2.panTo(new L.LatLng(la, lo));

                       unique_marker = L.marker([la, lo]).addTo(mymap2);
                      //window['marker'+i].bindPopup("<b>"+item.hotel+"</b><br>").openPopup();

                      setTimeout(function() {
                        mymap2.invalidateSize();
                      }, 10);

                     }

                      
                    

                      
                   
                     
            


                   // map
    
});

//modal_infohotel control

//var mymap = L.map('mapid').setView([28.6353, -106.089], 13);
      var mymap = L.map('mapid').setView([51.505, -0.09], 13);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW5kam9uIiwiYSI6ImNrbW1vcXBnZjFuOG4zMG1pbm45d213d2YifQ.HOtdzsesN3zUjhP8ACXR0Q'
}).addTo(mymap);

      var mymap2 = L.map('mapid2').setView([51.505, -0.09], 13);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW5kam9uIiwiYSI6ImNrbW1vcXBnZjFuOG4zMG1pbm45d213d2YifQ.HOtdzsesN3zUjhP8ACXR0Q'
}).addTo(mymap2);

      // $("#map_button").on("click",function(){

      //   setTimeout(function(){ mymap.invalidateSize()}, 500);
      // });

//       $('body').on('shown.bs.modal', function (e) {
//     setTimeout(function(){ mymap.invalidateSize()}, 500);
// })



  $('input[name ="flexRadioDefault"]').on("change",function(){
console.log($(this).val());

if($(this).val() == 'pay'){
  $("#pay_dialog").show();
  $("#ban_dialog").hide();
  $("#b_data_se").val(3);
   $("#btn_p_sender").show();
   $("#btn_p_sender_amex").hide();
}
else if($(this).val() == 'ban'){
 $("#pay_dialog").hide();
  $("#ban_dialog").show();
  $("#b_data_se").val(1);
  $("#btn_p_sender").show();
   $("#btn_p_sender_amex").hide();

}
else if($(this).val() == 'ban_6_meses'){

  $("#pay_dialog").hide();
  $("#ban_dialog").show();
  $("#b_data_se").val(5);
  $("#btn_p_sender").show();
   $("#btn_p_sender_amex").hide();


}
else if($(this).val() == 'bamx'){
  $("#pay_dialog").hide();
  $("#ban_dialog").hide();
  $("#b_data_se").val(2);
  $("#btn_p_sender").show();
   $("#btn_p_sender_amex").hide();

}


else if($(this).val() == 'amex'){
$("#pay_dialog").hide();
  $("#ban_dialog").hide();
  $("#b_data_se").val(4);
  $("#btn_p_sender_amex").show();
  $("#btn_p_sender").hide();
  

}

else if($(this).val() == 'amex_6_meses'){
$("#pay_dialog").hide();
  $("#ban_dialog").hide();
  $("#b_data_se").val(6);
  $("#btn_p_sender_amex").show();
  $("#btn_p_sender").hide();
  

}

  });

$("#btn_p_sender_amex").on("click",function(e){
e.preventDefault();

window.location.href = 'views/card.html';

});
  //register user

$("#register_usr").on("click",function(){

reg_user("#reg_form");
});

  //register user

  $("#pay_dialog").hide();
  $("#ban_dialog").show();
  $("#b_data_se").val(1);


   $('#form1').keyup(function(){
 console.log("search");
  // Search text
  var text = $(this).val();
 
  // Hide all content class element
  //$('#hotels_container .card .row div a .card-body .card-title ').hide();

  // Search and show
  search_data=$('#hotels_container .card .row div a .card-body .card-title:contains("'+text+'")');
console.log("dataa"+search_data);
if(search_data){
  search_data.parent().parent().show();
}

 
 });


 window.currency='';
var counter=0;
var curency_val=$("#origin").val();
console.log("currency"+$("#origin").val());
if(curency_val == 'mex'){
 window.currency='MXN';
}

else if(curency_val == 'us' || curency_val == 'la'){
 window.currency='USD';

}

//post search
$("select #order_by_asc").on("click", function(){
$("#typeof_search").val(1);
search_filters();
});

$("#filter_order").on("change", function(){
  var current_val_filter = $(this).val();
  console.log(current_val_filter);
$("#typeof_search").val(current_val_filter);
$("#loader").show();
if ($("#des_hotel").val()=="" || $("#des_arrive").val()=="") {

  alert("Indique Destino, fechas de entrada y salida.")}

  else{

$date_arr=$("#des_arrive").val();
$date_depar=$("#des_depar").val();
beds_data=$("#select_bed").val();
$("#date_a_d").empty();
$("#bed_count").empty();
$("#bed_count").text(beds_data);
$("#date_a_d").text('Del '+' '+$date_arr+'al '+' '+$date_depar);
    main_container.hide();
search_container.show();
box_search.hide();




callajax("search_hotel","#search_form");
//callajax("fix_s","#search_form");

  }
});

$("#order_by_name_asc").on("click", function(){
$("#typeof_search").val(3);
search_filters();
});

$("#order_by_name_desc").on("click", function(){
$("#typeof_search").val(4);
search_filters();
});

$("#order_by_cat_asc").on("click", function(){
$("#typeof_search").val(5);
search_filters();
});

$("#order_by_cat_desc").on("click", function(){
$("#typeof_search").val(6);
search_filters();
});

$("#order_by_best").on("click", function(){
$("#typeof_search").val(7);
search_filters();
});

//post search



//search controllers

$("#select_bed").on("change",function(){

var value_s=$(this).val();
console.log(value_s);
if(value_s==1){

  $("#r2").hide();
  $("#r3").hide();
  $("#r4").hide();
  $("#r5").hide();
}
else if(value_s==2){

  $("#r2").show();
  $("#r3").hide();
  $("#r4").hide();
  $("#r5").hide();
}
else if(value_s==3){

  $("#r2").show();
  $("#r3").show();
  $("#r4").hide();
  $("#r5").hide();
}
else if(value_s==4){

  $("#r2").show();
  $("#r3").show();
  $("#r4").show();
  $("#r5").hide();
}
else if(value_s==5){

  $("#r2").show();
  $("#r3").show();
  $("#r4").show();
  $("#r5").show();
}
});
$("#select_minor").on("change",function(){

var value_s=$(this).val();
console.log(value_s);
if(value_s==0){
$("#minor_age1").hide();
  $("#minor_age2").hide();
  $("#minor_age3").hide();
   $("#minor_age4").hide();
  
}
else if(value_s==1){
$("#minor_age1").show();
  $("#minor_age2").hide();
  $("#minor_age3").hide();
   $("#minor_age4").hide();
  
}
else if(value_s==2){
$("#minor_age1").show();
  $("#minor_age2").show();
   $("#minor_age3").hide();
   $("#minor_age4").hide();
  
}
else if(value_s==3){
$("#minor_age1").show();
  $("#minor_age2").show();
   $("#minor_age3").show();
   $("#minor_age4").hide();
  
}
else if(value_s==4){
$("#minor_age1").show();
  $("#minor_age2").show();
   $("#minor_age3").show();
   $("#minor_age4").show();
  
}

});
$("#select_minor2").on("change",function(){

var value_s=$(this).val();
console.log(value_s);
if(value_s==0){
$("#minor_age1_minor2").hide();
  $("#minor_age2_minor2").hide();
  $("#minor_age3_minor2").hide();
   $("#minor_age4_minor2").hide();
  
}
else if(value_s==1){
$("#minor_age1_minor2").show();
  $("#minor_age2_minor2").hide();
  $("#minor_age3_minor2").hide();
   $("#minor_age4_minor2").hide();
  
}
else if(value_s==2){
$("#minor_age1_minor2").show();
  $("#minor_age2_minor2").show();
   $("#minor_age3_minor2").hide();
   $("#minor_age4_minor2").hide();
  
}
else if(value_s==3){
$("#minor_age1_minor2").show();
  $("#minor_age2_minor2").show();
   $("#minor_age3_minor2").show();
   $("#minor_age4_minor2").hide();
  
}
else if(value_s==4){
$("#minor_age1_minor2").show();
  $("#minor_age2_minor2").show();
   $("#minor_age3_minor2").show();
   $("#minor_age4_minor2").show();
  
}

});
//search controllers

//instance

var search=$("#btn_search");
var main_container=$("#main_cointainer");
var search_container=$("#search_container");
var box_search=$("#box_search_container");
var change_search=$("#chg_srch");
search.on("click",function(){
  $("#loader").show();
if ($("#des_hotel").val()=="" || $("#des_arrive").val()=="") {

  alert("Indique Destino, fechas de entrada y salida.")}

  else{

$date_arr=$("#des_arrive").val();
$date_depar=$("#des_depar").val();
beds_data=$("#select_bed").val();
$("#date_a_d").empty();
$("#bed_count").empty();
$("#bed_count").text(beds_data);
$("#date_a_d").text('Del '+' '+$date_arr+'al '+' '+$date_depar);
    main_container.hide();
search_container.show();
box_search.hide();




callajax("search_hotel","#search_form");
//callajax("fix_s","#search_form");

  }

});

change_search.on("click",function(){
// box_search.show();
// $('#hotels_container').empty();
// search_container.hide();
    location.reload();
});

//modal control
$("#r_sender").on("click",function(){

  if ($("#re2_name").val()=="" || $("#re2_surname").val()=="" || $("#re2_email").val()=="" || $("#re2_tel").val()=="") {

  alert("Ingrese todos los datos.")}
  else{
  $("#name_tosend").val($("#re2_name").val());
  $("#surname_tosend").val($("#re2_surname").val());
  $("#email_tosend").val($("#re2_email").val());
  $("#phone_tosend").val($("#re2_tel").val());
  

$('#exampleModal').modal('hide');
$('#confirm_dialog').modal('show');

  }



});


$("#btn_p_sender").on("click",function(e){
e.preventDefault();


$("#p_sender").submit();
//alert("Error 0345");
});

$("#val-id,#val-id_an").on("change",function(){

var ex1=$("#val-id").val();
var ex2=$("#val-id_an").val();
var exf=ex1+"/"+ex2;
console.log(exf);
$("#Expires").val(exf);
});

//modao control

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


function callajax(ctl,form,obj,search_id_obj){
 
 provaider='hd';//ex

	$.ajax({
  data: $(form).serialize(),
    type : 'POST',
    //url  : 'expedia.php?ctl='+ctl,
    //url  : 'hoteldo.php?ctl='+ctl,
    url  : 'c_model.php?ctl='+ctl,
    dataType: 'json',
    
    success :  function(result)
        { 
          

           
            if(result.length>0){
              
                  if(ctl == 'search_hotel'){
                    //console.log("finish!!");
                    if(result[0]['abort'] ){
                        alert("sinresultados");
                    }
                    else{
                         get_hotels(result,provaider);
                    }
                   
                    
                  }
                   if(ctl == 'rooms'){
                    console.log("enterrooms");
                    if(provaider == 'hd'){
                      get_rooms_hd(result,obj);

                    }
                    else{
                      //get_rooms(result,obj);
                    }
                    

                  }

                  else if(ctl == 'search'){
                      get_hotels(result,provaider);

                  }
                 

              }
          
        
        }
    });


}




function search_filters(){
  ctl='search';

callajax(ctl,'#search_form',1,1);

}

// function callajaxroom(ctl,form,obj){

// console.log("here");
//   $.ajax({
//   data: $(form).serialize(),
//     type : 'POST',
//     url  : 'expedia.php?ctl='+ctl,
//     //url  : 'hoteldo.php?ctl='+ctl,
//     dataType: 'json',
    
//     success :  function(result)
//         { 
          

           
//             if(result.length>0){
              
                 
                 
//                    console.log("here");
//                     get_rooms(result,obj);

                  
                 

//               }
          
        
//         }
//     });


// }


function get_hotels(result,provaider){


  

var rooms_select=$("#select_bed").val();
var url_img='';
console.log("tama"+result.length);
var h_pagi=Math.ceil(result.length/30);
              var string_hotels='';
              pagination=["pag-1","pag-2 no_show","pag-3 no_show","pag-4 no_show","pag-5 no_show","pag-6 no_show","pag-7 no_show","pag-8 no_show","pag-9 no_show","pag-10 no_show","pag-11 no_show","pag-12 no_show","pag-13 no_show","pag-14 no_show","pag-15 no_show","pag-16 no_show","pag-17 no_show","pag-18 no_show","pag-19 no_show","pag-20 no_show"];
              p=0;
              search_var=$("#des_hotel").val();
               $("#chg_des").text(search_var+" (y alrededores)");
               $("#destino_var").text(search_var+" (y alrededores)");
               string_hotels ='<nav aria-label="Page navigation example">'+
  '<ul class="pagination">'+
    '<li ><a style="color:black !important;" class="page-link pg_ant" >Página anterior</a></li>';
    for (var page_for = 1; page_for <= h_pagi; page_for++) {
   string_hotels +='<li  style="cursor:pointer;"  data-co='+page_for+' class="page-item"><a class="page-link  p'+page_for+'" >'+page_for+'</a></li>';
   
}
    
   
    
    
    
    string_hotels +='<li ><a style="color:black !important;" class="page-link pg_sig" >Página Siguiente</a></li>'+
  '</ul>'+
'</nav>';


                  $.each(result,function(i,item){
                    
                    //map
                    // if(i == 1){
                    //  // mymap = L.map('mapid').setView([item.lat, item.long], 13);
                    //  if(item.lat > 0){

                    //   mymap.panTo(new L.LatLng(item.lat, item.long));

                    //  }

                    //    mymap.panTo(new L.LatLng(item.lat, item.long));
                    // }

                    // if(item.lat > 0){
                    //    window['marker'+i] = L.marker([item.lat, item.long]).addTo(mymap);
                    //   window['marker'+i].bindPopup("<b>"+item.hotel+"</b><br>").openPopup();

                    // }
                   
                     
            


                    //map
                    //sarch control
                    if(i==1){
                      $("#current_search").val(item.search_id);
                    }
                    
                    //search control

                    if(item.t==1){
                      url_img=item.imge;
                    }
                    else if(item.t==2){
                      url_img=item.imge;
                    }
                    //console.log("iteration"+i);
                   // console.log(item.imge);
                   // console.log(url_img);

                   if ((i/30) - Math.floor(i/30) == 0) {
                    pagination_class=pagination[p];
                    p ++;
                  } 
                 
                   
                  console.log("pagination"+pagination_class);


                  


                   string_hotels +='<div  data-sort_p='+item.total+' class=" maincardd card mb-3 '+ pagination_class +'" style="width: 100%;box-shadow: 0 7px 25px 0 rgba(0,0,0,.1);"><p class="h_star" style="display:none;">'+item.stars+'</p><p class="h_se" style="display:none;">'+item.hotel+'</p>'+
      '<div class="row no-gutters">'+
        '<div class="col-md-4">'+
            '<img style="height:250px;" src="'+url_img+'" style="border-top-right-radius: 0!important;border-bottom-right-radius: 0!important;" class="card-img" alt="..." id="crd_ht1" name="crd_ht1">';
       if(item.stars==1){
         var star= '<i style="color: orange !important;" class="fas fa-star"></i>';
        
        //'<i style="color: orange !important;" class="fas fa-star-half"></i>'+
       }
       else if(item.stars==1.5){
         var star= '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star-half"></i>';
       }
       else if(item.stars==2){
         var star= '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>';
       }
       else if(item.stars==2.5){
         var star= '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star-half"></i>';
       }
       else if(item.stars==3){
         var star= '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>';
       }
       else if(item.stars==3.5){
         var star= '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star-half"></i>';
       }  
       else if(item.stars==4){
         var star= '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>';
       }            
       else if(item.stars==4.5){
         var star= '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star-half"></i>';
       }  
       else if(item.stars==5){
         var star= '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>';
       } 
       else if(item.stars==5.5){
         var star= '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star-half"></i>';
       }
       else if(item.stars==6){
         var star= '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>';
       }
       else{
        var star= '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>'+
                    '<i style="color: orange !important;" class="fas fa-star"></i>';
       }       

    //    string_hotels += '<div class="row">'+
    //     '<div class="col-md-12">'
    //     +star+
        
    // '</div>';
var shortText;
    var des_string =item.des;

    if(des_string){
      if(des_string.length < 100){
   shortText =item.des;

}
else {
   shortText = jQuery.trim(item.des).substring(0, 80)
    .split(" ").slice(0, -1).join(" ") + "...";
}
    }
    else {
      shortText ='Sin informacion de momento';
    }


    string_hotels +='</div>'+
        ''+
        
        '<div style="height:200px;" class="col-md-8"><a  data-toggle="collapse" href="#crd'+i+'" role="button" aria-expanded="false" aria-controls="collapseExample" class="col-md-8" id="crd_htxt1" name="crd_htxt1" style="color: black;">'+
            '<div style="padding-bottom: 0!important;padding-top: 0!important;" class="card-body room_info "  data-lat='+item.lat+'  data-long='+item.long+' data-hid=h'+item.h_id+'  data-p='+item.p+' data-s_id='+item.search_id+' data-cur_curr='+item.currency+'>'+
              '<h5 class="card-title" style="color: #FF4000">'+item.hotel+'-'+item.pr+'-'+item.currency+'</h5>'+
              '<p class="card-text">'+shortText+'</p><p class="description_data_s" style="display:none;">'+item.des+'</p>'+
              '<input type="hidden" id="'+item.h_id+'chk" value="'+item.loc_des+'">'+
              '<p class="card-text"><small class="text-muted">'+item.addr+'</small></p>'+
            // '<h5 id="'+item.h_id+'t_t_base" style="margin-left: 60%;font-size: 80%;">$'+item.base_price+'&nbsp MXN</h5>'+
            // '<h5 id="'+item.h_id+'t_tax" style="margin-left: 60%;font-size: 80%;">$'+item.tax_pice+'&nbsp MXN</h5>'+
            '<div class="row"><div class="col-4">'+star+'</div>'+
            '<div class="col-8"><h5 id="'+item.h_id+'t_t" style="margin-left: 60%;">$'+item.total+'&nbsp '+window.currency+'</h5></div></div>'+
            '<div class="row"><div class="col-6"><button  style="font-size: 0.6rem;background-color: #6c757d;border-color: #f8f9fa" class="btn btn-primary hotel_info"   type="submit"   style="background-color: #FF4000; border-color: #FF4000" >Más Información del Hotel</button></div></div>'+
            '</div>'+
        '</a></div>'+
        
        '<div class="col-12 col-mb-12 col-sm-12">'+
        '<div class="collapse" id="crd'+i+'">'+

            '<div class="card card-body">'+
            '<button  class="btn btn-primary reservar_btn_multiple"  data-pr='+item.pr+' type="submit" id=r-'+item.h_id+' name=r-'+item.h_id+' style="display:none;background-color: #FF4000; border-color: #FF4000" >Reservar Seleccionados</button>'+
              ' <div class="table-responsive"> '+
                '<table class="table" id='+item.h_id+'>'+
                  '<thead>'+
                    '<tr>'+
                      '<th>Tipo de habitación</th>'+
                      '<th>Pólitica de Cancelación</th>'+
                      '<th>Precio por habitación, por noche</th>';
                      
                        for (var i_i = 1; i_i <= rooms_select ; i_i++) {
                            string_hotels +='<th>Habitación '+i_i+'</th>';
                        }
                      
                      string_hotels +='<th></th>'+
                    '</tr>'+
                  '</thead>'+
                  '<tbody>'+
                    

                  '</tbody>'+
                '</table>'+
              '</div>'+
              '<hr>'+
              
            '</div>'+
          '</div>'+
          '</div>'+
      '</div>'+
  '</div>';



                  // recorre el arreglo del json para encontrar valores
                    
                      
                  });
                 
                      $('#hotels_container').empty();
                      $("#loader").hide();
                     string_hotels +='<nav aria-label="Page navigation example">'+
  '<ul class="pagination">'+
    '<li ><a class="page-link pg_ant" href="#">Página anterior</a></li>';
    for (var page_for_footer = 1; page_for_footer <= h_pagi; page_for_footer++) {
   string_hotels +='<li class="page-item" style="cursor:pointer;"  data-co='+page_for_footer+'><a class="page-link  p'+page_for_footer+'" href="#">'+page_for_footer+'</a></li>';
   
}
    
  
    
    
    
    string_hotels +='<li class="page-item"><a class="page-link" href="#">Página Siguiente</a></li>'+
  '</ul>'+
'</nav>';
                      $('#hotels_container').append(string_hotels);

                      
                      
                          $('.room_info').on("click",function(){
                           
                                //console.log("room");
                                search_id_obj=$(this).data('s_id');
                                //console.log('search_id'+search_id_obj);
                                obj_t=$(this).data('hid');
                                pr=$(this).data('p');
                                curr_curr = $(this).data('cur_curr');
                                $("#pr").val(pr);
                                //console.log("obj"+obj_t);
                                sender=obj_t.split("h");
                                //console.log("sender"+sender[1]);
                                $("#current_hid").val(sender[1]);
                                $("#current_s").val(search_id_obj);
                                $("#current_currency").val(curr_curr);
                                callajax("rooms","#search_form",obj_t,search_id_obj);
                            
                            

                          });

                          // hotel info
$(".hotel_info").on("click", function(){
  $("#hab_data").removeClass("active");
  $("#info_hab_nav").addClass("active");
  $("#serv_hab").removeClass("active");
   $("#mapa_detalle").removeClass("active");
   $("#hotel_galery").removeClass("active");
  $("#info_hotel_content").show();
$("#info_hab_content").hide();
$("#info_hab_serv").hide();
$("#info_images").hide();
$("#info_hab_map").hide();
$('#hotel_info_modal').modal('show');
var description_data=$(this).parent().parent().siblings(".description_data_s").text();
var hotel_id_data=$(this).parent().parent().parent("div").data("hid");
var hotel_lat=$(this).parent().parent().parent("div").data("lat");
var hotel_long=$(this).parent().parent().parent("div").data("long");
var hotel_p=$(this).parent().parent().parent("div").data("p");
$("#modal_hid").val(hotel_id_data);
$("#modal_lat").val(hotel_lat);
$("#modal_long").val(hotel_long);
$("#modal_provider").val(hotel_p);

$("#info_data_data").text(description_data);
});

// hotel info

var pag_counter = 1;
$(".page-item").on("click",function(){
  console.log("hey");
$(".page-item").removeClass("active");
$(this).addClass("active");
$("#active_pag").val($(this).data("co"));
pag_counter = $(this).data("co");

});

$(".pg_sig").on("click",function(){
  pag_data = $("#active_pag").val() ;
  final_pag = parseInt(pag_data)+ 1;
  console.log("pag"+final_pag);
 superdata = $( ".p"+ final_pag).parent().data("co");
console.log(superdata);
$("#active_pag").val(superdata);
 //$( ".p"+ final_pag).trigger( "click" );

if(final_pag == 1){
  $('.pag-2 , .pag-3 , .pag-4 , .pag-2, .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              $('.pag-1').removeClass("no_show");
}

else if(final_pag == 2){

$('.pag-1 ,  .pag-3 , .pag-4 , .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              $('.pag-2').removeClass("no_show");
}

else if(final_pag == 3){

$('.pag-1 , .pag-2 ,  .pag-4 ,  .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              
                              $('.pag-3').removeClass("no_show");
}

else if(final_pag == 4){

$('.pag-1 , .pag-2 , .pag-3, .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              
                              $('.pag-4').removeClass("no_show");
}

else if(final_pag == 5){

$('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              
                              $('.pag-5').removeClass("no_show");
}

});
$(".pg_ant").on("click",function(){

  pag_data = $("#active_pag").val() ;
  final_pag = parseInt(pag_data) - 1;
  console.log("pag"+final_pag);
 superdata = $( ".p"+ final_pag).parent().data("co");
console.log(superdata);
$("#active_pag").val(superdata);

if(final_pag == 1){
  $('.pag-2 , .pag-3 , .pag-4 , .pag-2, .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              $('.pag-1').removeClass("no_show");
}

else if(final_pag == 2){

$('.pag-1 ,  .pag-3 , .pag-4 , .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              $('.pag-2').removeClass("no_show");
}

else if(final_pag == 3){

$('.pag-1 , .pag-2 ,  .pag-4 ,  .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              
                              $('.pag-3').removeClass("no_show");
}

else if(final_pag == 4){

$('.pag-1 , .pag-2 , .pag-3, .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              
                              $('.pag-4').removeClass("no_show");
}

else if(final_pag == 5){

$('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              
                              $('.pag-5').removeClass("no_show");
}
  

});
                             $('.p1').on("click",function(){
                            console.log("here");
                              $('.pag-2 , .pag-3 , .pag-4 , .pag-2, .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              $('.pag-1').removeClass("no_show");
                           


                          });

                          $('.p2').on("click",function(){
                            console.log("here");
                              $('.pag-1 ,  .pag-3 , .pag-4 , .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              $('.pag-2').removeClass("no_show");
                              

                          });

                          $('.p3').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 ,  .pag-4 ,  .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              
                              $('.pag-3').removeClass("no_show");
                              

                          });

                           $('.p4').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              
                              $('.pag-4').removeClass("no_show");


                          });

                           $('.p5').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              
                              $('.pag-5').removeClass("no_show");


                          });

                            $('.p6').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-5 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              
                              $('.pag-6').removeClass("no_show");


                          });

                            $('.p7').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-5 , .pag-6 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              
                              $('.pag-7').removeClass("no_show");


                          });

                            $('.p8').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-5 , .pag-6 , .pag-7 , .pag-9 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              
                              $('.pag-8').removeClass("no_show");


                          });


                            $('.p9').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-10 , .pag-11 , .pag-12').addClass("no_show");
                              
                              $('.pag-9').removeClass("no_show");


                          });


                            $('.p10').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-11 , .pag-12').addClass("no_show");
                              
                              $('.pag-10').removeClass("no_show");


                          });

                             $('.p11').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-12').addClass("no_show");
                              
                              $('.pag-11').removeClass("no_show");


                          });

                             $('.p12').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11').addClass("no_show");
                              
                              $('.pag-12').removeClass("no_show");


                          });

                             $('.p13').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12 ').addClass("no_show");
                              
                              $('.pag-13').removeClass("no_show");


                          });

                             $('.p14').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12  , .pag-13 ').addClass("no_show");
                              
                              $('.pag-14').removeClass("no_show");


                          });

                              $('.p15').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12  , .pag-13 , .pag-14').addClass("no_show");
                              
                              $('.pag-15').removeClass("no_show");


                          });

                               $('.p16').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12  , .pag-13 , .pag-14 , .pag-15' ).addClass("no_show");
                              
                              $('.pag-16').removeClass("no_show");


                          });

                               $('.p17').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12  , .pag-13 , .pag-14 , .pag-15 , .pag-16' ).addClass("no_show");
                              
                              $('.pag-17').removeClass("no_show");


                          });

                                $('.p18').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12  , .pag-13 , .pag-14 , .pag-15 , .pag-16 , .pag-17' ).addClass("no_show");
                              
                              $('.pag-18').removeClass("no_show");


                          });


                                  $('.p19').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12  , .pag-13 , .pag-14 , .pag-15 , .pag-16 , .pag-17 , .pag-18' ).addClass("no_show");
                              
                              $('.pag-19').removeClass("no_show");


                          });

                                  $('.p20').on("click",function(){
                            console.log("here");
                              $('.pag-1 , .pag-2 , .pag-3, .pag-4 , .pag-5 , .pag-6 , .pag-7 , .pag-8 , .pag-9 , .pag-10 , .pag-11 , .pag-12  , .pag-13 , .pag-14 , .pag-15 , .pag-16 , .pag-17 , .pag-18 , .pag-19' ).addClass("no_show");
                              
                              $('.pag-20').removeClass("no_show");


                          });

                         


//search hotel
$("#btn_srch").on("click",function(e){
e.preventDefault();
var data_stri=$("#srch_es").val();
console.log(data_stri);
$(".maincardd").hide();
$('.card .h_se:icontains("'+data_stri+'")').parent().show();

});

$("#star_s").on("change",function(e){
e.preventDefault();
var data_stri_s=$(this).val();
console.log(data_stri_s);
$(".maincardd").hide();
$('.card .h_star:icontains("'+data_stri_s+'")').parent().show();

});

//search hotel


                         

                      

                     
                 
                  


}

function get_rooms(result,obj){
  string_rooms='';
final_h_to_use=obj.split("h");
$.each(result,function(i,item){


string_rooms +='<tr>'+
                      '<td class="t_h">'+
                      '<input type="hidden" class="rate" value="'+item.key_to_check+'">'+
                      '<input type="hidden" class="tool" value="'+item.tool+'">'+
                        //'<img src="icons/cuarto1.jpg" width="157px" height="115px">'+
                        '<p>'+item.rate_des[0]+' <br>'+
                          '<strong>'+item.des[0]+'</strong> <br>'+
                          
                          'adultos='+item.adult[0]+' <br>'+
                          'niños='+item.child[0]+' <br>'+
                          // '<a    class="image_files">Más detalles</a>'+
                        '</p>'+
                      '</td>'+
                      '<td class="pol">'+
                        '<p >'+item.pol[0]+' <br>'+
                          
                          
                         
                        '</p>'+
                      '</td>'+
                      '<td class="pre">'+
                        '<input class="p_modal_p" type="hidden" value="'+item.total+'"><small style="color: red;">Paquete</small>'+
                        '<h5>$'+item.total+' '+window.currency+'</h5>'+
                        // '<strike>$'+item.total*(1.30)+'MXN</strike>'+
                        // '<strong>¡Oferta!</strong>'+
                      '</td>'+
                      '<td>'+
                        '<button class="btn btn-primary reservar_btn" type="submit" id="btn_re10" name="btn_re10" style="background-color: #FF4000; border-color: #FF4000" data-toggle="modal" data-target="#exampleModal">Reservar</button>'+
                        '<small>Reserva en dos minutos</small>'+
                      '</td>'+
                    '</tr>';

 });



final_h=obj.split("h");
console.log("superonj"+final_h[1]);
$('#'+final_h[1]+' '+'tbody').empty();
$('#'+final_h[1]+' '+'tbody').append(string_rooms);
var relative_total=$('#'+final_h[1]+'t_t').text();
//console.log("relative total"+relative_total);
$(".reservar_btn").on("click",function(){
pol=$(this).parent().siblings(".pol").children("p").text();
pre=$(this).parent().siblings(".pre").children(".p_modal_p").val();
t_h=$(this).parent().siblings(".t_h").children("p").text();
t_rate=$(this).parent().siblings(".t_h").children(".rate").val();
console.log("rate"+t_rate);
delivery("check","#search_form",pol,pre,t_h);

$("#pol_reserva").empty();
$("#pol_reserva").text(pol);
$("#precio_modal").empty();
$("#precio_modal").text('$'+ pre + window.currency);
$("#total_to_send_prev").empty();
$("#total_to_send_prev").text('$'+ pre + window.currency);
$("#t_h_table").text(t_h);
$("#total_to_send").val(pre.replace(",",""));
$("#total_to_send_fromat").text('$'+ pre + window.currency);




})


dest_modal=$("#des_hotel").val();
fecha_inicial=$("#des_arrive").val();
fecha_final=$("#des_depar").val();
$("#des_modal").text(dest_modal);
$("#f_llegada_modal").text(fecha_inicial);
$("#f_salida_modal").text(fecha_final);

}


function get_rooms_hd(result,obj){
  string_rooms='';
  var img1=''; 
    var img2='';
     var img3='';
final_h_to_use=obj.split("h");
var rooms_select=$("#select_bed").val();
console.log("cuartos"+rooms_select); 
$.each(result,function(i,item){

    $.each(item.room_image,function(j,itemx){
//console.log("j----"+j);
   
if(j==0){
    img1=itemx.url_img;
}
else if(j==1){

     img2=itemx.url_img;
}

else if(j==2){
 img3=itemx.url_img;
}
 
    

    });



// var img1=''; item.room_image[1]['url_img']
// var img2='';
// var img3='';


string_rooms +='<tr>'+
                      '<td class="t_h">'+
                      '<input type="hidden" class="rate" value="'+item.key_to_check+'">'+
                      '<input type="hidden" class="tool" value="'+item.tool+'">'+
                      
                        //'<img src="icons/cuarto1.jpg" width="157px" height="115px">'+
                        '<p>'+item.rate_des+' <br>'+
                          '<strong>'+item.des+'</strong> <br>'+
                          '<p><b>Servicios:</b>'+item.services+'</p>'+
                          
                          'adultos='+item.adult+' <br>'+
                          'niños='+item.child+' <br>'+
                          '<p   style="color: blue;"  data-img_data1="'+img1+'" data-img_data2="'+img2+'" data-img_data3="'+img3+'" class="image_files">Imágenes del Cuarto</p>'+
                        '</p>'+
                      '</td>'+
                      '<td class="pol">'+
                        '<p >'+item.pol+' <br>'+
                          
                          
                         
                        '</p>'+
                      '</td>'+
                      '<td class="pre">'+
                        '<input class="p_modal_p" type="hidden" value="'+item.total+'"><small style="color: red;">Paquete</small>'+
                        '<h5 style="font-size: 17px">$'+item.total+' '+window.currency+'</h5>'+
                        // '<strike>$'+item.total*(1.30)+'MXN</strike>'+
                        // '<strong>¡Oferta!</strong>'+
                      '</td>';
                      
                      //console.log("rrr"+rooms_select);
                      if(rooms_select >1){

                          if(item.tool == 'hdo'){
                            adult_occ_split= (item.adult).split('-');
                            child_occ_split=(item.child).split('-');

                          }

                        for (var i = 1; i <= rooms_select ; i++) {
                            console.log("in");
                            //ocupation
                            if(i==1){
                               adult_occ=$("#select_adul").val();
                            child_occ=$("#select_minor").val();
                            }
                            else{
                               adult_occ=$("#select_adul"+i).val();
                            child_occ=$("#select_minor"+i).val();
                            }
                           
                            
                             if(item.tool == 'hdo'){
                              //ocupation
                              console.log('adult'+adult_occ_split[i-1]+'adulttt'+adult_occ);
                              console.log('child'+child_occ_split[i-1]+'child'+child_occ);

                            if(   adult_occ_split[i]  == adult_occ  &&  child_occ_split[i]  == child_occ ){  
                              console.log("here");
                              disabled='';
                            }

                            else{
                              disabled='';//disabled='disabled';
                            }
                             }

                             else if(item.tool == 'eps'){
                                disabled='';
                             }

                             else{
                              //ocupation
                            if(item.adult == adult_occ  && item.child == child_occ){  
                              disabled='';
                            }

                            else{
                              disabled='disabled';
                            }
                             }
                            
                            
                            string_rooms += '<td><button '+disabled+'  class="btn btn-primary reservar_btn" type="submit" id="btn_re10" name="btn_re10" style="background-color: #FF4000; border-color: #FF4000;font-size: 12px;" >Seleccionar</button>'+//data-toggle="modal" data-target="#exampleModal"
                            // '<small>Reserva en dos minutos</small>'+
                          '</td>';
                        }

                      }
                      else{
                        string_rooms += '<td><button  class="btn btn-primary reservar_btn" type="submit" id="btn_re10" name="btn_re10" style="background-color: #FF4000; border-color: #FF4000;font-size: 12px;" >Reservar</button>'+//data-toggle="modal" data-target="#exampleModal"
                            // '<small>Reserva en dos minutos</small>'+
                          '</td>';
                      }
                     
                       

                   string_rooms += '</tr>';

 });




final_h=obj.split("h");
  //modal image
$('#'+final_h[1]+' '+'tbody').on("click",".image_files",function(){

  //$( this ).data( "img_data" );
  $("#first_img").attr("src", $( this ).data( "img_data1" ));
  $("#second_img").attr("src", $( this ).data( "img_data2" ));
  $("#third_img").attr("src", $( this ).data( "img_data3" ));
$('#image_modal').modal('show');


});

//modal image
console.log("superonj"+final_h[1]);
$('#'+final_h[1]+' '+'tbody').empty();
$('#'+final_h[1]+' '+'tbody').append(string_rooms);
var relative_total=$('#'+final_h[1]+'t_t').text();
var check_in_instr=$('#'+final_h[1]+'chk').val();
//console.log("total"+relative_total);
//console.log("isntr"+check_in_instr);
var pre_counter=0.0;
$(".reservar_btn").on("click",function(){

  var rooms_select=$("#select_bed").val();

  if(rooms_select>1){
      var coun=$(".selected_1").length;
      if(coun == rooms_select & $(this).hasClass("selected_1")){
          $(this).toggleClass("selected_1");
          pre_c=$(this).parent().siblings(".pre").children(".p_modal_p").val();
          pre_counter=parseFloat(pre_counter) - parseFloat(pre_c);
        }
        else if(coun == rooms_select){
          alert("Deseleccione algun cuarto para agregar uno nuevo");
          

        }
        else{
          $(this).toggleClass("selected_1");
          pre_c=$(this).parent().siblings(".pre").children(".p_modal_p").val();
          if($(this).hasClass("selected_1")){
          console.log("con clase");
          pre_counter=parseFloat(pre_counter) + parseFloat(pre_c);
          }
          else{
            console.log("sin clase");
            pre_counter=parseFloat(pre_counter) - parseFloat(pre_c);
          }
          
          $('#'+final_h[1]+'t_t').text(pre_counter + window.currency);
           var coun=$(".selected_1").length;
           if(coun == rooms_select){

            $("#r-"+final_h[1]).show();
            $( "#r-"+final_h[1] ).focus();
            var r_iteraion=1;
            $(".selected_1").each(function(){
                $("#r_"+r_iteraion).val($(this).parent().siblings(".t_h").children(".rate").val());
              r_iteraion ++;
              //alert($(this).parent().siblings(".t_h").children(".rate").val());
          }); 

           }

        }
       
    //console.log("contador"+coun);
  

  }
  else{

    $('#exampleModal').modal('show');


    pol=$(this).parent().siblings(".pol").children("p").text();
    pre=$(this).parent().siblings(".pre").children(".p_modal_p").val();
    t_h=$(this).parent().siblings(".t_h").children("p").text();
    t_rate=$(this).parent().siblings(".t_h").children(".rate").val();
    t_tool=$(this).parent().siblings(".t_h").children(".tool").val();
    // console.log("rate"+t_rate);
    // console.log("rate"+t_tool);

    if(t_tool=='RECHECK'){
    delivery("check","#search_form",pol,pre,t_h,t_rate);
    }
    else if (t_tool=='eps'){
    delivery("check_eps","#search_form",pol,pre,t_h,t_rate,check_in_instr);

    }
    else if (t_tool=='hdo'){
    delivery("check_hdo","#search_form",pol,pre,t_h,t_rate);

    }

    else{

    $("#pol_reserva").empty();
    $("#pol_reserva").text(pol);
    $("#precio_modal").empty();
    $("#precio_modal").text(pre+ window.currency+'$');
    $("#total_to_send_prev").empty();
    $("#total_to_send_prev").text(pre+ window.currency+'$');
    
    $("#t_h_table").text(t_h);
    $("#total_to_send").val(pre.replace(",",""));

    $("#total_to_send_fromat").text( pre+ window.currency+'$');
    }

    $("#rtk").val(t_rate);
    if(pre < 599 ){
  
  $("#card_banamex").hide();
  $("#ban_6").hide();
  $("#amex_6").hide();

}
else{
  $("#card_banamex").show();
  $("#ban_6").show();
  $("#amex_6").show();
}

  }

 

});

$(".reservar_btn_multiple").unbind().on("click",function(){

   $('#exampleModal').modal('show');


    // pol=$(this).parent().siblings(".pol").children("p").text();
    // pre=$(this).parent().siblings(".pre").children(".p_modal_p").val();
     t_h=$(this).parent().siblings(".t_h").children("p").text();
     current_pr=$(this).data('pr');
    // t_rate=$(this).parent().siblings(".t_h").children(".rate").val();
     //t_tool=$(this).parent().siblings(".t_h").children(".tool").val();
    pol=1;
    pre=1;
    //t_h=1;
    t_rate='multi';
    
    //t_tool='hdo';
    t_tool=current_pr;
console.log('tool'+t_tool);
    if(t_tool=='BEDS'){

    delivery("check","#search_form",pol,pre,t_h,t_rate);
    }
    else if (t_tool=='EPS'){
    delivery("check_eps","#search_form",pol,pre,t_h,t_rate);

    }
    else if (t_tool=='HDO'){
    delivery("check_hdo","#search_form",pol,pre,t_h,t_rate);

    }

    else{

    $("#pol_reserva").empty();
    $("#pol_reserva").text(pol);
    $("#precio_modal").empty();
    $("#precio_modal").text(pre+window.currency+'MXN$');
    $("#total_to_send_prev").empty();
    $("#total_to_send_prev").text(pre+window.currency+'MXN$');
    
    $("#t_h_table").text(t_h);
    $("#total_to_send").text(pre.replace(",",""));
    $("#total_to_send_fromat").text('$'+ pre+window.currency+'MXN');
    }

   // $("#rtk").val(t_rate);


});

 
dest_modal=$("#des_hotel").val();
fecha_inicial=$("#des_arrive").val();
fecha_final=$("#des_depar").val();
$("#des_modal").text(dest_modal);
$("#f_llegada_modal").text(fecha_inicial);
$("#f_salida_modal").text(fecha_final);

}


function delivery(ctl,form,pol,pre,t_h,t_rate,inst){
  var string_table_conf='';

   $.ajax({
  data: $(form).serialize(),
    type : 'POST',
    
    url  : 'c_model.php?ctl='+ctl+'&r='+t_rate,
    dataType: 'json',
    
    success :  function(result)
        { 
          

           //console.log("succes");
           var multi_total=0;
            if(result.length>0){
               

              $.each(result,function(i,item){


             if(t_rate=='multi'){
              multi_total=parseFloat(multi_total) + parseFloat(item.total);
                  string_table_conf+='<tr>'+
      '<th id="t_h_table" >'+item.name_r+'</th>'+
      '<td >'+item.total+'</td>'+
      '<td id="t_h_ocupation"></td>'+
      '<td><input type="text" name="re_name"></td>'+
      '<td><input type="text" name="re_surname"></td>'+
      '</tr>';

             }

             else{

                   if(item.ratekey!=0){
                          $("#pol_reserva").empty();
                          $("#pol_reserva").text(pol+inst);
                          $("#precio_modal").empty();
                          $("#precio_modal").text('$'+item.total+window.currency);
                          $("#total_to_send_prev").empty();
                          $("#total_to_send_prev").text('$'+item.total+window.currency);
                          
                          $("#t_h_table").text(t_h);
                          $("#total_to_send").text((item.total).replace(",",""));
                          $("#total_to_send_fromat").text('$'+item.total+window.currency);

                  }
                  else{
                          $("#pol_reserva").empty();
                          $("#pol_reserva").text(pol);
                          $("#precio_modal").empty();
                          $("#precio_modal").text('$'+pre+window.currency);
                          $("#total_to_send_prev").empty();
                          $("#total_to_send_prev").text('$'+pre+window.currency);
                          
                          $("#t_h_table").text(t_h);
                          $("#total_to_send").text( pre.replace(",",""));
                          $("#total_to_send_fromat").text('$'+ pre+window.currency);
                  }
             }
              
               

                 



              });
                 
              if(t_rate=='multi'){
                $("#precio_modal").text(window.currency+'$'+multi_total);
                $("#total_to_send_prev").text(window.currency+'$'+multi_total);
                
                $("#confirmation_table tbody").empty();
                $("#confirmation_table tbody").append(string_table_conf);

              }
              }
          
        
        }
    });
}


function reg_user(form){


  $.ajax({
  data: $(form).serialize(),
    type : 'POST',
    
    url  : 'models/r_users.php?ctl=1',
    dataType: 'json',
    
    success :  function(result)
        { 
          

           //console.log("succes");
           var multi_total=0;
            if(result.length>0){
               

              $.each(result,function(i,item){


             



              });
                 
              
              }
          
        
        }
    });


}

function get_det_hab(form){

$.ajax({
  data: $(form).serialize(),
    type : 'POST',
    
    url  : 'models/get_hab.php',
    dataType: 'json',
    
    success :  function(result)
        { 
          

           //console.log("succes");
           var multi_total=0;
            if(result.length>0){
               
                var string_hab='';
              $.each(result,function(i,item){
                string_hab +='<div class="row"><div class="col-6">'+
                                '<img  width="200px;" height="150px;" src="'+item.img_hab+'" >'+

                              '</div>'+
                              '<div class="col-6">'+
                                '<p><b>'+item.name_hab+'</b></p>'+
                                '<label style="font-size: 70%;">'+item.des_hab+'</label>'+
                              '</div></div><br>';

             



              });

              $("#info_hab_content_1").empty();
              $("#info_hab_content_1").append(string_hab);
                 
              
              }
          
        
        }
    });


}


function get_det_serv(form){

  $.ajax({
  data: $(form).serialize(),
    type : 'POST',
    
    url  : 'models/get_serv.php',
    dataType: 'json',
    
    success :  function(result)
        { 
          

           //console.log("succes");
           var multi_total=0;
            if(result.length>0){
               
                var string_hab_serv='';
              $.each(result,function(i,item){

                string_hab_serv +='<div class="row"><div class="col-12"><ul class="list-group list-group-flush"> ';
                   var res = (item.servicios).split(",");

                   $.each(res,function(j,item2){
                     string_hab_serv +='<li class="list-group-item">'+item2+'</li>';


                   });
                 
                  string_hab_serv += '</div></ul></div>';



              });

              $("#info_hab_serv_1").empty();
              $("#info_hab_serv_1").append(string_hab_serv);
                 
              
              }
          
        
        }
    });


}


function get_images(form){

  $.ajax({
  data: $(form).serialize(),
    type : 'POST',
    
    url  : 'pandora_core/webservice_beast/images.php',
    dataType: 'json',
    
    success :  function(result)
        { 
          

           //console.log("succes");
           var multi_total=0;
            if(result.length>0){
               
                var string_images='';
                var string_indicators ='';
              $.each(result,function(i,item){

               if(i == 0){
                var active ='active';

               }
               else {
                var active ='';
               }
               if(item.pr == 2){
                 var url_image=item.ref[0];
               }
               else {
                var url_image=item.ref;
               }

              
               
                    string_indicators +='<li data-target="#carouselExampleIndicators1" data-slide-to="'+i+'" class="'+active+'"></li>'
                  string_images +='<div class="carousel-item '+active+'">'+
      '<img class="d-block w-100 style="height=400px;"    "  src="'+url_image+'" alt="First slide">'+
    '</div>';



              });

             
                 
              
              }
          $("#indicators").empty();
          $("#courusel_id").empty();
          $("#indicators").append(string_indicators);
        $("#courusel_id").append(string_images);
        }
    });


}




});