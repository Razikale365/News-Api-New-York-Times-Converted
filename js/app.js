$(document).ready(function () {
  let url =
    "https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=Dsak6ljecPclOkCgEeAdB1dmdr1bEqAC";

  $.ajax({
    url: url,
    method: "GET",
    dataType: "JSON",

    beforeSend: function () {
      $(".progress").show();
    },

    complete: function () {
      $(".progress").hide();
    },

    success: function (newsdata) {
      let output = "";
      let latestNews = newsdata.results;

      for (var i in latestNews) {
        // console.log(latestNews[i].media[0]["media-metadata"][2].url);
        // console.log("-------------------------------------------------------");   testing for finding the image src url
        // console.log(latestNews[i].media[0]);
        output += `
          <div class="col l4 m6 s12">
          <div class="card medium hoverable">
            <div class="card-image">
              <img style="height: auto; width:auto;" src= "${latestNews[i].media[0]["media-metadata"][2].url}" class = "responsive-img"
 alt = "${latestNews[i].media}" >
            </div>
            <div class="card-content">
              <span class="card-title activator"><i class="material-icons right">more_vert</i></span>
              <h6 class="truncate">Title: <a href="${latestNews[i].url}" title="${latestNews[i].title}">${latestNews[i].title}</a></h6>
              <p><b>Author</b>: ${latestNews[i].byline} </p>
              <p><b>News source</b>: ${latestNews[i].source} </p>
              <p><b>Published Date</b>: ${latestNews[i].published_date} </p>
            </div>

            <div class="card-reveal">
              <span class="card-title"><i class="material-icons right">close</i></span>
              < p> <b> Description </b>: ${latestNews[i].abstract}</>
            </div>

            <div class="card-action">
              <a href="${latestNews[i].url}" target="_blank" class="btn">Read More</a>
            </div>
           </div>
          </div>
        `;
        // imgs = latestNews[i].media
        // console.log(img);
      }

      if (output !== "") {
        $("#newsResults").html(output);
      }
    },

    error: function () {
      let errorMsg = `<div class="errorMsg center">Some error occured</div>`;
      $("#newsResults").html(errorMsg);
    },
  });
});
