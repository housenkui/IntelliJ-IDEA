$(window).on("load",function () {
   $("#AsideMenu>li>ul").addClass("menuItem");
   $("#AsideMenu >li > a").click(function () {
       let vIndex = $(this).parent('li').index();
       console.log(vIndex);
       $("#AsideMenu >li").each(function () {
           let vLiIndex = $(this).index();
           if(vLiIndex===vIndex){
               if ($(this).children(".menuItem").css('display')==='none'){
                   $(this).children(".menuItem").slideDown('fast');
               } else {
                   $(this).children(".menuItem").slideUp('fast');
               }
           }
           else {
               $(this).children(".menuItem").slideUp('fast');

           }
       })
   })
});

// $(window).on("load",function(){
//     $("#AsideMenu>li>ul").addClass("menuItem");
//     $("#AsideMenu >li>a").click(function(){
//         var vIndex=$(this).parent("li").index();
//         $("#AsideMenu >li").each(function(){
//             var vLiIndex=$(this).index();
//             if(vLiIndex==vIndex)
//                 if($(this).children(".menuItem").css("display")=="none")
//                     $(this).children(".menuItem").slideDown("fast");
//                 else
//                     $(this).children(".menuItem").slideUp("fast");
//             else
//                 $(this).children(".menuItem").slideUp("fast");
//         });
//     });
// });