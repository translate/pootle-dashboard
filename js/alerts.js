$(document).ready(function() {
   var feed_url = "http://pootle.locamotion.org/dashboard/alerts.xml";
   /* Number of items to display */
   var start = 1
   var n = 5;
   $.ajax({
     url: feed_url,
     dataType: "xml",
     type: "GET",
     success: function(data) {
       var items = $("item", data).slice(start, start+n);
       var html = "<ul>\n";
       $(items).each(function() {
         var link = $("link", this).text();
         var title = $("title", this).text();
	 var desco = "<div>" + $("description", this).text() + "</div>";
	 var desc = $(desco).text();
         html += "<li><a target=\"_top\" href=\"" + link + "\" title=\"" + desc + "\">"
                 + title + "</a></li>\n";
       });
       html += "</ul>\n";
       $("#rss-alerts div.bd").append(html);
     }
   });
});
