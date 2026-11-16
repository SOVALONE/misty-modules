// Живий перекладач з камери — модуль для Місті та сестер.
// Мова перекладу: та, яку попросили, інакше остання обрана, інакше українська.
var tools = {
  live_camera_translate: function (args) {
    var to = (args && args.to) || misty.storage.get("to") || "uk";
    misty.storage.set("to", to);
    misty.log("живий переклад → " + to);
    return misty.camera.liveTranslate({ to: to });
  }
};
