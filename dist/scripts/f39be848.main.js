"use strict";$("#filter").keyup(function(){var a=new Array,b=this.value.toLowerCase();a=b.split(" ");var c=a.length;$(".errno").each(function(){for(var b=$(this),d=b.find("h4").text().toLowerCase(),e=0,f=0;c>f;f++)d.indexOf(a[f])<0&&(b.hide(),e=1);0==e&&b.show()})});