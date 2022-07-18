/** Menu **/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/** Videos **/
$(document).ready(function(){
	/** Menu **/
	
	/** Home **/
	$('#home').click(function(){
		$('.videos').trigger('load');
		var Img = "images/background.jpg";
		$('body').css("background-image", "url(" + Img +")");
		$('.topnav').hide();
		$('.midia').hide();
		$('.videos').hide();
		$('.opcions').show();
		
	});
	/**Death Note**/
	$('#dn').click(function(){
		$('.videos').trigger('load');
		var Img = "images/DN.jpg";
		$('.topnav').show();
		$('body').css("background-image", "url(" + Img +")");
		$('.opcions').hide();
		$('.midia').show();
		$('.video').hide();
		$('#DN').show();
		$('.button1').css("background-color", "hsl(0, 0%, 100%)");
		$('.icon').click();
	});
	
	/**Dragon Ball GT**/
	$('#dbgt').click(function(){
		$('.videos').trigger('load');
		var Img = "images/DBGT.jpeg";
		$('.topnav').show();
		$('body').css("background-image", "url(" + Img +")");
		$('.opcions').hide();
		$('.midia').show();
		$('.video').hide();
		$('#DBGT').show();
		$('.icon').click();
	});
	
	/**Fullmetal Alchemis Brotherhood**/
	$('#fmab').click(function(){
		$('.videos').trigger('load');
		var Img = "images/FMAB.jpeg";
		$('.topnav').show();
		$('body').css("background-image", "url(" + Img +")");
		$('.opcions').hide();
		$('.midia').show();
		$('.video').hide();
		$('#FMAB').show();
		$('.icon').click();
	
	});
	
	/**Naruto Shippuden**/
	$('#nash').click(function(){
		$('.videos').trigger('load');
		var Img = "images/NaSh.jpeg";
		$('.topnav').show();
		$('body').css("background-image", "url(" + Img +")");
		$('.opcions').hide();
		$('.midia').show();
		$('.video').hide();
		$('#NaSh').show();
		$('.icon').click();
	});
	
	/**One Piece**/
	$('#op').click(function(){
		$('.videos').trigger('load');
		var Img = "images/OP.jpg";
		$('.topnav').show();
		$('body').css("background-image", "url(" + Img +")");
		$('.opcions').hide();
		$('.midia').show();
		$('.video').hide();
		$('#OP').show();
		$('.icon').click();
	});
	
	/**Tokyo Ghoul**/
	$('#tg').click(function(){
		$('.videos').trigger('load');
		var Img = "images/TG.jpg";
		$('.topnav').show();
		$('body').css("background-image", "url(" + Img +")");
		$('.topnav').show();
		$('.opcions').hide();
		$('.midia').show();
		$('.video').hide();
		$('#TG').show();
		$('.icon').click();
	});
	/** Buttons **/
	
	/**Death Note**/
	$('#btn-dn').click(function(){
		var Img = "images/DN.jpg";
		$('.topnav').show();
		$('body').css("background-image", "url(" + Img +")");
		$('.opcions').hide();
		$('.midia').show();
		$('.video').hide();
		$('#DN').show();
		$('.button1').css("background-color", "hsl(0, 0%, 100%)");
	});
	
	/**Dragon Ball GT**/
	$('#btn-dbgt').click(function(){
		var Img = "images/DBGT.jpeg";
		$('.topnav').show();
		$('body').css("background-image", "url(" + Img +")");
		$('.opcions').hide();
		$('.midia').show();
		$('.video').hide();
		$('#DBGT').show();
	});
	
	/**Fullmetal Alchemis Brotherhood**/
	$('#btn-fmab').click(function(){
		var Img = "images/FMAB.jpeg";
		$('.topnav').show();
		$('body').css("background-image", "url(" + Img +")");
		$('.opcions').hide();
		$('.midia').show();
		$('.video').hide();
		$('#FMAB').show();
		
	});
	
	/**Naruto Shippuden**/
	$('#btn-nash').click(function(){
		var Img = "images/NaSh.jpeg";
		$('.topnav').show();
		$('body').css("background-image", "url(" + Img +")");
		$('.opcions').hide();
		$('.midia').show();
		$('.video').hide();
		$('#NaSh').show();
	});
	
	/**One Piece**/
	$('#btn-op').click(function(){
		var Img = "images/OP.jpg";
		$('.topnav').show();
		$('body').css("background-image", "url(" + Img +")");
		$('.opcions').hide();
		$('.midia').show();
		$('.video').hide();
		$('#OP').show();
	});
	
	/**Tokyo Ghoul**/
	$('#btn-tg').click(function(){
		var Img = "images/TG.jpg";
		$('.topnav').show();
		$('body').css("background-image", "url(" + Img +")");
		$('.topnav').show();
		$('.opcions').hide();
		$('.midia').show();
		$('.video').hide();
		$('#TG').show();
	});
	
	/** Reproduction **/
	
	/** Death Note Japonês, Inglês, Português, Live **/
	$('#DN_BJ').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vdnj').slideToggle();
	});
	$('#DN_BI').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vdni').slideToggle();
	});$('#DN_BP').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vdnp').slideToggle();
	});$('#DN_BL').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vdnl').slideToggle();
	});
	
	/** Dragon Ball GT Japonês, Inglês, Português, Live **/
	$('#DBGT_BJ').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vdbgtj').slideToggle();
	});
	$('#DBGT_BI').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vdbgti').slideToggle();
	});$('#DBGT_BP').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vdbgtp').slideToggle();
	});$('#DBGT_BL').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vdbgtl').slideToggle();
	});
	
	/** Fullmetal Alchemist Brotherhood Japonês, Inglês, Português, Live **/
	$('#FMAB_BJ').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vfmabj').slideToggle();
	});
	$('#FMAB_BI').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vfmabi').slideToggle();
	});$('#FMAB_BP').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vfmabp').slideToggle();
	});$('#FMAB_BL').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vfmabl').slideToggle();
	});
	
	/** Naruto Shippuden Japonês, Inglês, Português, Live **/
	$('#NaSh_BJ').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vnashj').slideToggle();
	});
	$('#NaSh_BI').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vnashi').slideToggle();
	});$('#NaSh_BP').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vnashp').slideToggle();
	});$('#NaSh_BL').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vnashl').slideToggle();
	});
	
	/** One Piece Japonês, Inglês, Português, Live **/
	$('#OP_BJ').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vopj').slideToggle();
	});
	$('#OP_BI').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vopi').slideToggle();
	});$('#OP_BP').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vopp').slideToggle();
	});$('#OP_BL').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vopl').slideToggle();
	});
	
	/** Tokyo Ghoul Japonês, Inglês, Português, Live **/
	$('#TG_BJ').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vtgj').slideToggle();
	});
	$('#TG_BI').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vtgi').slideToggle();
	});$('#TG_BP').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vtgp').slideToggle();
	});$('#TG_BL').click(function(){
		$('.videos').trigger('load');
		$('.videos').hide();
		$('#vtgl').slideToggle();
	});
});