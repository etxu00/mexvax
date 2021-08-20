	$(document).ready(function(){

		$("#destination").hide();
		$("#hotels").hide();
		$("#hotels_data").hide();
		//$("#1").focus();
	   $("#des_hotel").keyup(function(e){
	      //e.preventDefault();
	     var t = $("#des_hotel").val();
			if($("#des_hotel").val().trim().length < 1){
			$("#destination").hide();
			$("#hotels").hide();
		} else{
			callajax(t);
			//callajax2(t); 	
			$("#destination").show();
			//$("#hotels").show();
		}
//	     var ht = "<h3>"+t+"</h3>";
//	     $("#resultado").html(ht);
	   });

	    $("#slt_ad_htl").keyup(function(e){
	      //e.preventDefault();
	     var t = $("#slt_ad_htl").val();
			if($("#slt_ad_htl").val().trim().length < 1){
			$("#hotels_data").hide();
			
		} else{
			var ides_dat=$("#id_des").val();
			callajax2(t,ides_dat);
			//callajax2(t); 	
			$("#hotels_data").show();
			//$("#hotels").show();
		}
//	     var ht = "<h3>"+t+"</h3>";
//	     $("#resultado").html(ht);
	   });

	   function callajax(dest){

	   	$.ajax({
		  	data : {"dato":dest},
		    type : 'POST',
		    url  : 'buscar.php?ctl=search_d_h',
		    dataType: 'json',

		    success: function(result)
		    {
		    	var html = '';
		    	//alert(result.lenght);
		    	if(result.length>0){
		    		html = '<div class="ist-group">Destinos';
		    		$.each(result,function(i,item){
		    			if (item.destino != "no"){
		    				//var desi=item.destino;
		    				//var desspli=desi.split(',');
		    				var des = "'" + item.destino + "'";
		    			html = html + '<a style="cursor: pointer !important;" class="list-group-item list-group-item-action text-primary" onclick="llenar('+des+','+item.id_des+','+item.h_id+')">'+item.destino+'('+item.origen+')</a>';
		    		}else{
		    			//html = html + '<a class="list-group-item list-group-item-action">Sin Coindencia</a>';
		    			$("#destination").hide();
		    		}
		    		});
		    		html= html + '</div>';
		    		$("#destination").html(html);
		    	}
		    }
	   	});

	   }
//Aqui va el metodo para buscar hoteles
	   function callajax2(dest,id_des){

	   	$.ajax({
		  	data : {"dato":dest,"id_des":id_des},
		    type : 'POST',
		    url  : 'buscar.php?ctl=hotels_data',
		    dataType: 'json',

		    success: function(result)
		    {
		    	var html2 = '';
		    	//alert(result.lenght);
		    	if(result.length>0){
					html2 = '<div class="list-group">Hoteles';
		    		$.each(result,function(i,item){
		    			if (item.hotel != "no"){
		    				var h = "'" + item.hotel + "'";
		    				var h_id_data= item.h_id;
		    			html2 = html2 + '<a class="list-group-item list-group-item-action text-secondary" onclick="llenar('+h+',0,'+h_id_data+')">'+item.hotel+'</a>';
		    		}else{
		    			//html2 = html2 + '<a class="list-group-item list-group-item-action">Sin Coindencia</a>';
		    			$("#hotels").hide();
		    		}
		    		});
		    		html2= html2 + '</div>';
		    		$("#hotels_data").html(html2);
		    	}
		    }
	   	});

	   }

//**********************************************************************************************************//////
	});
		   function llenar(xdest,xid,xhid){
		   	console.log("idd:"+xid);
	   	$("#des_hotel").val(xdest);
	   	$("#id_des").val(xid);
	   	$("#destination").hide();
	   	$("#hotels").hide();
	   	
	   	if(xhid==0){
$("#opciones_container").show();
$("#search_hotel_data").val(0);
	   	}
	   	else{
	   		$("#opciones_container").hide();
	   		$("#search_hotel_data").val(xhid);
	   		//console.log("hid"+xhid);
	   	}
	   }