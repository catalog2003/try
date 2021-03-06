// var imageFile=document.getElementById("imageFile");
//
// var canvas=document.getElementById("canvas");
//
// var button=document.getElementById("button");
//
//
// button.onclick=handleImageToPdf
//
// function handleImageToPdf(){
//   html2canvas(canvas,{
//     onrendered:function(canvas){
//       var imgData=canvas.toDataURL('image/png')
//
//       var doc=new jsPDF('p','mm')
//
//       doc.addImage(imgData,'PNG',10,10)
//
//       doc.save("image.pdf");
//     }
//   })
// }
//
// var ctx=canvas.getContext('2d');
//
// imageFile.addEventListener("change",handleImage,false)
//
// function handleImage(e){
//   var raeder= new FileReader();
// //listen for event Reader
// reader.onload=function(event){
//   var img=new Image();
//   img.onload=function(){
//     canvas.width=img.width;
//     canvas.height=img.height;
//
//     ctx.drawImage(img,0,0)
//   }
//   img.src=event.target.result;
// }
//   reader.readAsDataURL(e.target.files[0])
// }

const EL = (sel) => document.querySelector(sel);
  const ctx = EL("#canvas").getContext("2d");

  function readImage() {
    if (!this.files || !this.files[0]) return;

    const FR = new FileReader();
    FR.addEventListener("load", (evt) => {
      const img = new Image();
      img.addEventListener("load", () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(img, 0, 0);
      });
      img.src = evt.target.result;
    });
    FR.readAsDataURL(this.files[0]);
  }

  EL("#fileUpload").addEventListener("change", readImage);
  var canvas=document.getElementById("canvas");
  var button=document.getElementById("button");

  button.onclick=handleImageToPdf

  function handleImageToPdf(){
    html2canvas(canvas,{
      onrendered:function(canvas){
        var imgData=canvas.toDataURL('image/png')

        var doc=new jsPDF('p','pt','a4')
        var width = doc.internal.pageSize.width;
            var height = doc.internal.pageSize.height;
            var options = {
                 pagesplit: true
            };
            doc.addImage(imgData,'PNG',10,10);
        doc.addPage();
        doc.save("image.pdf");
      }
    })
  }
