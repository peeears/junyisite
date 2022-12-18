window.onload = function () {
  const imgContainer = document.querySelector(".worksImg");
  imgContainer.addEventListener("wheel", function (event) {
    if (!event.deltaY) return;
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    event.preventDefault();
  });
};

(function showIndex() {
  const index_Btn = document.getElementById("index");
  const indexWrapper = document.querySelector(".textwrapper");
  index_Btn.addEventListener("click", function () {
    indexWrapper.toggleAttribute("hidden");
    index_Btn.classList.toggle("wavy");
  });
})();

$(document).ready(function () {
  $("img").lazy();

  let indexClicked = false;
  $("#index").click(function () {
    if (indexClicked == false) {
      $("#project_info").removeClass("wavy");
      $(".projectTitle").hide();
      indexClicked = true;
    } else {
      $(".projectTitle").show();
      $("#project_info").addClass("wavy");
      indexClicked = false;
    }
  });

  let pNum = 26;
  let widths = [];
  let widthsSum = [];
  function getWidths() {
    for (let i = 1; i < pNum + 1; i++) {
      widths.push($(`#p${i}`).width());
    }
    widthsSum.push(widths[0]);
    let widthSum = widthsSum[0];
    for (let i = 1; i < widths.length; i++) {
      widthSum += widths[i];
      widthsSum.push(widthSum);
    }
  }
  setTimeout(getWidths, 1000);

  let scrollOffset;
  $(".worksImg").scroll(function () {
    scrollOffset = Math.round($(".scroll-container").offset().left * -1);
    if (scrollOffset <= widthsSum[0]) {
      $(".projectTitle").html(
        "Images of Books with Black Types on White Cover"
      );
    } else if (scrollOffset > widthsSum[0] && scrollOffset <= widthsSum[1]) {
      $(".projectTitle").html("A W-W-W Party");
    } else if (scrollOffset > widthsSum[1] && scrollOffset <= widthsSum[2]) {
      $(".projectTitle").html(".Png Pastoral");
    } else if (scrollOffset > widthsSum[2] && scrollOffset <= widthsSum[3]) {
      $(".projectTitle").html("Eye Exercise");
    } else if (scrollOffset > widthsSum[3] && scrollOffset <= widthsSum[4]) {
      $(".projectTitle").html("Yale Photo Lecture Series");
    } else if (scrollOffset > widthsSum[4] && scrollOffset <= widthsSum[5]) {
      $(".projectTitle").html("Daido Moriyama: Seeping into Darkness");
    } else if (scrollOffset > widthsSum[5] && scrollOffset <= widthsSum[6]) {
      $(".projectTitle").html("One for All, All for one");
    } else if (scrollOffset > widthsSum[6] && scrollOffset <= widthsSum[7]) {
      $(".projectTitle").html("Flexy Display");
    } else if (scrollOffset > widthsSum[7] && scrollOffset <= widthsSum[8]) {
      $(".projectTitle").html("Dena Yago: Paul Rand Lecture Series");
    } else if (scrollOffset > widthsSum[8] && scrollOffset <= widthsSum[9]) {
      $(".projectTitle").html("Purple Heart");
    } else if (scrollOffset > widthsSum[9] && scrollOffset <= widthsSum[10]) {
      $(".projectTitle").html("Medals");
    } else if (scrollOffset > widthsSum[10] && scrollOffset <= widthsSum[11]) {
      $(".projectTitle").html("Circle, Sphere, Flag");
    } else if (scrollOffset > widthsSum[11] && scrollOffset <= widthsSum[12]) {
      $(".projectTitle").html("Paprika! Reading the Room");
    } else if (scrollOffset > widthsSum[12] && scrollOffset <= widthsSum[13]) {
      $(".projectTitle").html("Houseplants from the Wild");
    } else if (scrollOffset > widthsSum[13] && scrollOffset <= widthsSum[14]) {
      $(".projectTitle").html(
        "Rooted Immigrants: Traveling History of Domesticated Household Plants in United States"
      );
    } else if (scrollOffset > widthsSum[14] && scrollOffset <= widthsSum[15]) {
      $(".projectTitle").html("Counting Down");
    } else if (scrollOffset > widthsSum[15] && scrollOffset <= widthsSum[16]) {
      $(".projectTitle").html(
        "Action Required: Yale School of Art First Year Show"
      );
    } else if (scrollOffset > widthsSum[16] && scrollOffset <= widthsSum[17]) {
      $(".projectTitle").html("John Edmonds Lecture");
    } else if (scrollOffset > widthsSum[17] && scrollOffset <= widthsSum[18]) {
      $(".projectTitle").html("The Greatest Artist");
    } else if (scrollOffset > widthsSum[18] && scrollOffset <= widthsSum[19]) {
      $(".projectTitle").html("No Access, No Crossing");
    } else if (scrollOffset > widthsSum[19] && scrollOffset <= widthsSum[20]) {
      $(".projectTitle").html("Faust");
    } else if (scrollOffset > widthsSum[20] && scrollOffset <= widthsSum[21]) {
      $(".projectTitle").html("On the Desktop");
    } else if (scrollOffset > widthsSum[21] && scrollOffset <= widthsSum[22]) {
      $(".projectTitle").html("Flags Book");
    } else if (scrollOffset > widthsSum[22] && scrollOffset <= widthsSum[23]) {
      $(".projectTitle").html("All the Same");
    } else if (scrollOffset > widthsSum[23] && scrollOffset <= widthsSum[24]) {
      $(".projectTitle").html("C-dSchool CAFA");
    } else if (scrollOffset > widthsSum[24] && scrollOffset <= widthsSum[25]) {
      $(".projectTitle").html(".zip");
    }
  });
});
