$(document).ready(function(){
    var nomor=0;
        $(".header").hide();
        $("#formhobi").hide();
        $("#formpendidikan").hide();
        $("#formpekerjaan").hide();
    
        $("#inputwarnatext").change(function() {
            var warnatext
            warnatext=$("#inputwarnatext").val()
            $(".content").css({"color":warnatext});
            $(".footer").css({"color":warnatext});
            $("table").css({"color":warnatext});
        });
        $("#inputwarnabg").change(function() {
            var warnabg
            warnabg=$("#inputwarnabg").val()
            $(".content").css({"background-color":warnabg});
            $(".footer").css({"background-color":warnabg});
            $("table").css({"background-color":warnabg});
    
        });
        $("#tampilmenu").click(function() { 
            $(".header").toggle();
        });

     $("#btnsimpan").click(function(){
        var nik, nama, tmptlahir, tgllahir, jeniskel, goldarah, rt, rw, desa, kecamatan, agama, perkawinan, kerja, warga;
        
        nik=$("#nik").val();
		nama=$("#nama").val();
        tmptlahir=$("#tmptlahir").val();
        tgllahir=$("#tgllahir").val();
		jeniskel=$("#jeniskel").val();
        goldarah=$("#goldarah").val();
        rt=$("#rt").val();
        rw=$("#rw").val();
        desa=$("#desa").val();
        kecamatan=$("#kecamatan").val();
        agama=$("#agama").val();
        perkawinan=$("#perkawinan").val();
        kerja=$("#kerja").val();
        warga=$("#warga").val();

		nomor++;
		$("#hasilinput").append("<tr><td>"+nomor+"</td><td>"+nik+"</td><td>"+nama+"</td><td>"+tmptlahir+"</td><td>"+tgllahir+"</td><td>"+jeniskel+"</td><td>"+goldarah+"</td><td>"+rt+"</td><td>"+rw+"</td><td>"+desa+"</td><td>"+kecamatan+"</td><td>"+agama+"</td><td>"+perkawinan+"</td><td>"+kerja+"</td><td>"+warga+"</td></tr>");
				
		alert("Data berhasil disimpan");

        $("#btnhilang").click(function(){
            $("#formdata").toggle();
        });
        
    });
    $("#btnprint").click(function(){
        
        
        $("#tbform").hide();
        $("#tampilmenu").hide();
        $(".header").hide();
        window.print();
        $("#tbform").show();
        $("#tampilmenu").show();
    });       
    
});