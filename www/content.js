let iframe = $("iframe");

if(iframe.attr("src").split("youtube").length > 1) {
  iframe.remove();
}
