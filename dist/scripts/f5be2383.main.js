"use strict";$(document).ready(function(){$("#aixButton").addClass("active");var a=new Firebase("https://errno.firebaseio.com/");a.once("value",function(a){a.forEach(function(a){var b=a.child("Number").val(),c=a.child("Message").val(),d=a.child("Description").val();$(".errnoTable").append('<tr class="errnoRow"><td>'+b+"</td><td>"+c+"</td><td>"+d+"</td></tr>")})}),$("#errnoInput").keyup(function(){var a=[],b=this.value.toLowerCase();a=b.split(" ");var c=a.length;$(".errnoRow").each(function(){for(var b=$(this),d=b.find("td").text().toLowerCase(),e=0,f=0;c>f;f++)d.indexOf(a[f])<0&&(b.hide(),e=1);0===e&&b.show()})}),$("#aixButton").click(function(){$("#aixButton").hasClass("active")||($("#aixButton").addClass("active"),$("#linuxButton").removeClass("active"),$(".errnoRow").remove(),a=new Firebase("https://errno.firebaseio.com/"),a.once("value",function(a){a.forEach(function(a){var b=a.child("Number").val(),c=a.child("Message").val(),d=a.child("Description").val();$(".errnoTable").append('<tr class="errnoRow"><td>'+b+"</td><td>"+c+"</td><td>"+d+"</td></tr>")})}),document.getElementById("errnoInput").value="")}),$("#linuxButton").click(function(){$("#linuxButton").hasClass("active")||($("#linuxButton").addClass("active"),$("#aixButton").removeClass("active"),$(".errnoRow").remove(),a=new Firebase("https://errno-linux.firebaseio.com/"),a.once("value",function(a){a.forEach(function(a){var b=a.child("Number").val(),c=a.child("Message").val(),d=a.child("Description").val();$(".errnoTable").append('<tr class="errnoRow"><td>'+b+"</td><td>"+c+"</td><td>"+d+"</td></tr>")})}),document.getElementById("errnoInput").value="")})});