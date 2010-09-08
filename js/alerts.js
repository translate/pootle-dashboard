$(document).ready(function() {
   var feed_url = "http://pootle.locamotion.org/dashboard/alerts.xml";
   /* Number of items to display */
   var n = 5;
   $.ajax({
     url: feed_url,
     dataType: "xml",
     type: "GET",
     success: function(data) {
       var items = $("item", data).slice(0, -n);
       var html = "<ul>\n";
       $(items).each(function() {
         var link = $("link", this).text();
         var title = $("title", this).text();
         var desc = $("description", "&lt;div&gt;" + $(this).text() + "&lt;/div&gt;").text();
         html += "<li><a target=\"_top\" href=\"" + link + "\" title=\"" + desc + "\">"
                 + title + "</a></li>\n";
       });
       html += "</ul>\n";
       $("#rss-alerts div.bd").append(html);
     }
   });
});
