app.controller("ctrl", function($scope) {
    $scope.todoitems = [];
    $scope.text = "";
    $scope.searchTerm = "Eng";
    $scope.bodyHtml = "<div class='ExternalClassA750216BBBFB48AE80049B46B5C0ACD6'> <p>​​<br/></p> <p>The Communication Ribbon is located just below the Engage toolbar and consists of three tabs: <strong>Assignments</strong>, <strong>Unread&#160;Messages</strong> and <strong>Unread Internal Notes</strong>. This ribbon serves as an interface among our staff, our operators and our clients.</p> <p>When there are new items in<strong> Assignments</strong>, <strong>Unread Messages</strong> or <strong>Unread Internal Notes</strong>, the text colors change to blue, red and blue, respectively.<img src='/sites/EngageUniversity/SiteAssets/Lists/Knowledge%20Base/AllItems/image2.png' alt='image2.png' data-themekey='#' style='margin: 5px;'/><br/>When there are no <strong>Assignments</strong>, no <strong>Unread Messages</strong> and no <strong>Unread Internal Notes</strong>, the text color changes to black.<br/></p> <h4>1.&#160;&#160;&#160;&#160; Assignments<br/></h4> <p>— <strong>Assignments</strong> tab lists all jobs you are currently clocked into or jobs assigned to you; text is colored blue</p> <ul> <ul> <li>If you are not clocked into a job or there are no jobs assigned to you, <strong>Assignments</strong> text is colored black</li> </ul> </ul> <p>— Click anywhere on the <strong>Assignments</strong> tab, then click a job number to open the job ticket window</p> <ul> <ul> <li>You can click and drag to reposition the job ticket window; click on <strong>X</strong> to close the job ticket window<br/></li> </ul> </ul> <p>— The list is grouped by job number by default</p> <p>— The list can be filtered using the filter field</p> <p>— Click on <strong>Assignments</strong> tab again to close the panel if no job ticket window is open</p> <p>— When you clock out of a job, the job ticket will be removed from <strong>Assignments</strong> tab and appear on your Job Queue pane​<br/><br/></p> <p> <img src='/sites/EngageUniversity/SiteAssets/Lists/Knowledge%20Base/AllItems/image4.png' alt='image4.png' data-themekey='#' style='margin: 5px; width: 600px; height: 256px;'/>&#160;<br/></p> <h4>2.&#160;&#160;&#160;&#160; Unread Messages</h4> <p>— <strong>Unread Messages</strong> will list all unread messages from clients created through ENGAGE portal; text is colored red</p> <p>— Messages will contain name of client, date and time sent, message type, job number as well as the message itself</p> <ul> <ul> <li>There are five message types:</li> <ul> <ul> <li> <strong>New Request</strong> – newly submitted jobs are marked with green bar that have not been processed by Intake </li> <li> <strong>Rework </strong>– jobs resubmitted to be reworked that have not been processed by intake are marked with a yellow bar </li> <li> <strong>Supplemental</strong> – messages from client who uploaded additional files or added text comments from the client portal</li> <li> <strong>Cancel Request</strong> – messages are marked with red bar from client&#39;s previously submitted job that is canceled</li> <li> <strong>Completed Request</strong> – completed job notification messages that client have not mark read in client portal​<br/></li> </ul> </ul> </ul> </ul> <p> <img src='/sites/EngageUniversity/SiteAssets/Lists/Knowledge%20Base/AllItems/Picture1.png' alt='Picture1.png' data-themekey='#' style='margin: 5px; width: 600px; height: 242px;'/>&#160;</p> <style> A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass p.MsoNormal, A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass li.MsoNormal, A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass div.MsoNormal { margin-top:0in; margin-right:0in; margin-bottom:6.0pt; margin-left:0in; font-size:9.0pt; font-family:'Arial',sans-serif; } A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass p.Bullet2, A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass li.Bullet2, A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass div.Bullet2 { margin-top:0in; margin-right:0in; margin-bottom:3.0pt; margin-left:.3in; text-indent:-.15in; font-size:9.0pt; font-family:'Arial',sans-serif; } A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass p.Bullet1, A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass li.Bullet1, A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass div.Bullet1 { margin-top:0in; margin-right:0in; margin-bottom:3.0pt; margin-left:22.5pt; text-indent:-.15in; font-size:9.0pt; font-family:'Arial',sans-serif; } A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass span.Bullet1Char { font-family:'Arial',sans-serif; } A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass p.Bullet3, A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass li.Bullet3, A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass div.Bullet3 { margin-top:0in; margin-right:0in; margin-bottom:3.0pt; margin-left:.45in; text-indent:-.15in; font-size:9.0pt; font-family:'Arial',sans-serif; } A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass p.Bullet4, A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass li.Bullet4, A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass div.Bullet4 { margin-top:0in; margin-right:0in; margin-bottom:3.0pt; margin-left:46.1pt; text-indent:-.15in; font-size:9.0pt; font-family:'Arial',sans-serif; } A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass .MsoChpDefault { font-size:11.0pt; font-family:'Arial',sans-serif; } A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass .MsoPapDefault { margin-bottom:8.0pt; line-height:107%; } A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass div.WordSection1 { } A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass ol { margin-bottom:0in; } A750216BBBFB48AE80049B46B5C0ACD6 .ExternalClass ul { margin-bottom:0in; } </style> <p class='Bullet1'> <span> <span style='font-family: &quot;wingdings 2&quot;; color: #002f61;'>—<span style='font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;times new roman&quot;;'> </span></span></span>Click <img src='/sites/EngageUniversity/KnowledgeBase%20%20Image%20Library/image6.png' data-themekey='#' alt='' style='margin: 5px; width: 18px;'/> &#160;(found to the left of the presentation name line of the message) to open the job ticket</p> <ul> <ul> <li>You can click and drag to reposition the job ticket window; click on <strong>X</strong> to close the job ticket window</li> </ul> </ul> <p class='Bullet1'> <span><span style='font-family: &quot;wingdings 2&quot;; color: #002f61;'>—<span style='font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;times new roman&quot;;'> </span></span></span>Click <strong>Mark Read</strong> to remove the message from the list. After messages are Marked Read, they are moved to the <strong>Messages</strong> tab and the number of <strong>Unread Messages</strong> will dynamically update.<br/></p> <p> <br/> <br/> <br/> </p> <style>poopy</style> <p>Romance</p> </div>";

    $scope.initLoad = function() {
        var cleanedHtml = stripHtml($scope.bodyHtml);
        $scope.bodyHtml = highlight($scope.searchTerm, cleanedHtml);
    };

    function stripHtml(html) {
        var start = "<style>";
        var end = "</style>";

        var textToRemove = html.substring(
          html.indexOf(start),
          html.indexOf(end) + end.length
        );

        var tmp = document.createElement("DIV");

        if (html.indexOf(start) > 0) {
            $scope.text = html.replace(textToRemove, "");
        
            if ($scope.text.includes("<style>")) {
                return stripHtml($scope.text);
            } else {
                html = $scope.text;
            }
        }
        
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText;
    }

    function highlight(term, text) {
        term = term.toLowerCase();
        var index = text.toLowerCase().indexOf(term);
        
        // Trim and highlight
        if (index >= 0) { 
            text = text.substring(0,index) + "<strong>" + text.substring(index,index+term.length) + "</strong>" + text.substring(index + term.length);
        } else {
            if (text.length > 100) {
                text = text.substring(0, 100) + " &#8230;";
            }
        }

        return text;
    }
});