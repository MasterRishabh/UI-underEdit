
function addMsg() {

$('#suggestion').hide();
    var msg = '<li class="restored-item cui__list__item"><div class="cui__bubble cui__bubble--response" style="transform: translate3d(0px, 0px, 0px); opacity: 1">Shoot!</div></li>';
    
    //$('.my_div_r').style='transform: translate3d(0px, 0px, 0px); opacity: 1;';
    $("ol").append(msg);

$("ol").append('<li class="restored-item cui__list__item"><div class="my_div">...</div></li>');
$('.my_div').addClass('cui__bubble');
$('.my_div').show();
$('.my_div').addClass('cui__bubble--slideIn');
$('.my_div').addClass('cui__bubble--fade');
window.setTimeout(function (){$('.my_div').text('My name is Rishabh')}, 1500);

//$('.my_div').delay("slow").fadeIn();



$('#suggestion').slideDown( "slow" );

}

function keyMsg(obj) {
    if ($('#question').hasClass('cui__answers__placeholder'))
    {
        $('#question').removeClass('cui__answers__placeholder');
}
    


    //alert(obj.keyCode);
    if (obj.keyCode == 13) {
        //alert('ghhh');
        addMsg();
        $('#question').addClass('cui__answers__placeholder');
        $('#question').text('');

    }
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


