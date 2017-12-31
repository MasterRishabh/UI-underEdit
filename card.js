
function addMsg() {


    var msg = '<li class="cui__list__item"><div class="cui__bubble cui__bubble--response" style="transform: translate3d(0px, 0px, 0px); opacity: 1;">Shoot!</div></li>' +
        '<li class="cui__list__item"><div class="cui__bubble cui__bubble--slideIn cui__bubble--fade">Hey, welcome back!</div></li>';
    $("ol").append(msg);

}



$(document).ready(function () {
    var url = 'http://webhose.io/filterWebContent?token=337a1801-2821-4855-ab1d-5c3acca357a4&format=json&ts=1510257448860&sort=performance_score&q=thread.country%3AIN%20thread.title%3AInsurance';
    var couponURL = 'http://demo.coupomated.com/apiv2/demoBasicFeed.php?key=de70-df65-72b8-d68f&format=json';
    $.ajax({
        type: "GET",
        url: url,
        success: function (data) {
            newsFeeds = data;
            updateFeeds();
        }
    });
    $("#divEvent").click(function () {
        window.open("https://skillenza.com/challenge/insuretechathon", "_blank");
    });

});



var feedIndex = 0;
function updateFeeds() {
    if (feedIndex == newsFeeds.posts.length)
        feedIndex = 0;
    var p1 = newsFeeds.posts[feedIndex];
    feedIndex++;
    if (feedIndex == newsFeeds.posts.length)
        feedIndex = 0;
    var p2 = newsFeeds.posts[feedIndex].thread;
    feedIndex++;

    $('#titleFeed').html(p1.thread.title.slice(0, 100));
    $('#bodyFeed1').html(p1.text.slice(0,100) + "..." + "<a href='" + p1.thread.url + "'><em>Visit Page</em></a>");
    //$("#fimg").attr("src", p1.thread.main_image);
   
    document.getElementById(fimg).style.backgroundImage = 'p1.thread.main_image';



    setTimeout(function () {
        updateFeeds();
    }, 5000);
}


