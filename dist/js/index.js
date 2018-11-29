// ===================================== require start =====================================
{

	jQuery = require('jquery');
	$ = require('jquery');

  require('jquery-ui-css/jquery-ui');

  require('jquery-ui/ui/widgets/dialog');

  require("bootstrap");

  introJs = require("intro.js");

}
// ===================================== require  end  =====================================

// ===================================== intro start =====================================
{
  var step = 1;
  var intro;

  // 画面の説明
  var startIntro = function(){

    step = 1;
    intro = "";

    // First name
    $('#firstName').attr('data-step', step);
    intro = 'firstName 説明①';
    intro += '<br>' + 'firstName 説明②';
    intro += '<br>' + 'firstName 説明③';
    $('#firstName').attr('data-intro', intro);
    step++;

    // Last name
    $('#lastName').attr('data-step', step);
    intro = 'lastName 説明①';
    intro += '<br>' + 'lastName 説明②';
    intro += '<br>' + 'lastName 説明③';
    $('#lastName').attr('data-intro', intro);
    step++;

    // htmlでmodal起動
    $('#modalOpenHtml').attr('data-step', step);
    intro = 'modalOpenHtml 説明①';
    intro += '<br>' + 'modalOpenHtml 説明②';
    intro += '<br>' + 'modalOpenHtml 説明③';
    $('#modalOpenHtml').attr('data-intro', intro);
    step++;

    // jsでmodal起動
    $('#modalOpenJs').attr('data-step', step);
    intro = 'modalOpenJs 説明①';
    intro += '<br>' + 'modalOpenJs 説明②';
    intro += '<br>' + 'modalOpenJs 説明③';
    $('#modalOpenJs').attr('data-intro', intro);
    step++;

    // 画面の説明開始
    $('#intro').attr('data-step', step);
    intro = 'intro 説明①';
    intro += '<br>' + 'intro 説明②';
    intro += '<br>' + 'intro 説明③';
    $('#intro').attr('data-intro', intro);
    step++;

    introJs().setOptions({
      nextLabel:"次へ",
      prevLabel:"前へ",
      skipLabel:"スキップ",
      doneLabel:"終了"
    }).start().onbeforeexit(function(){
      $('[data-step]').each(function(index, value){
        $(this).removeAttr('data-step data-intro');
      });
    });

  }

  // modal画面の説明
  var startIntroModal = function(){

    step = 1;
    intro = "";

    // aaa
    $('#aaa').attr('data-step', step);
    intro = 'aaa 説明①';
    intro += '<br>' + 'aaa 説明②';
    intro += '<br>' + 'aaa 説明③';
    $('#aaa').attr('data-intro', intro);
    step++;

    // bbb
    $('#bbb').attr('data-step', step);
    intro = 'bbb 説明①';
    intro += '<br>' + 'bbb 説明②';
    intro += '<br>' + 'bbb 説明③';
    $('#bbb').attr('data-intro', intro);
    step++;

    // closeModal
    $('#closeModal').attr('data-step', step);
    intro = 'closeModal 説明①';
    intro += '<br>' + 'closeModal 説明②';
    intro += '<br>' + 'closeModal 説明③';
    $('#closeModal').attr('data-intro', intro);
    step++;

    // saveChanges
    $('#saveChanges').attr('data-step', step);
    intro = 'saveChanges 説明①';
    intro += '<br>' + 'saveChanges 説明②';
    intro += '<br>' + 'saveChanges 説明③';
    $('#saveChanges').attr('data-intro', intro);
    step++;

    // 画面の説明開始
    $('#introModal').attr('data-step', step);
    intro = 'introModal 説明①';
    intro += '<br>' + 'introModal 説明②';
    intro += '<br>' + 'introModal 説明③';
    $('#introModal').attr('data-intro', intro);
    step++;

    introJs('#exampleModal').setOptions({
      nextLabel:"次へ",
      prevLabel:"前へ",
      skipLabel:"スキップ",
      doneLabel:"終了"
    }).start().onbeforeexit(function(){
      $('[data-step]').each(function(index, value){
        $(this).removeAttr('data-step data-intro');
      });
    });
  }
}
// ===================================== intro  end  =====================================

// ===================================== 処理 start =====================================
$(function() {
	$('div.modal').appendTo('body');
	console.log("open");

  // modalボタン押下時の処理
  $(document).on('click', '#modalOpenJs', function () {

    $("#exampleModalLabel").text("JavaScriptで起動");
    $('#exampleModal').modal('show');
  });

  // modal起動時の処理
	$('#exampleModal').on('shown.bs.modal', function () {
    console.log("modal open");
  });

  // introボタン押下時の処理
  $(document).on('click', '#intro', function () {
		startIntro();
  });

  // introModalボタン押下時の処理
  $(document).on('click', '#introModal', function () {
		startIntroModal();
  });

  // HomeタブOpenボタン押下時の処理
  $(document).on('click', '.tabOpenHome', function () {

		$('#nav-tab a[href="#nav-home"]').tab('show');
  });

  // ProfileタブOpenボタン押下時の処理
  $(document).on('click', '.tabOpenProfile', function () {

		$('#nav-tab a[href="#nav-profile"]').tab('show');
  });

  // ContactタブOpenボタン押下時の処理
  $(document).on('click', '.tabOpenContact', function () {

		$('#nav-tab a[href="#nav-contact"]').tab('show');
  });

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

//		console.log(e.target);
//		console.log(e.relatedTarget);

		if(e.relatedTarget != undefined){
			switch (e.relatedTarget.id) {
				case "nav-home-tab":
					console.log("HomeタグClose");
				break;
				case "nav-profile-tab":
					console.log("ProfileタグClose");
				break;
				case "nav-contact-tab":
					console.log("ContactタグClose");
				break;
			}
		}

		switch (e.target.id) {
			case "nav-home-tab":
				console.log("HomeタグOpen");
			break;
			case "nav-profile-tab":
				console.log("ProfileタグOpen");
			break;
			case "nav-contact-tab":
				console.log("ContactタグOpen");
			break;
		}
	});

});
// ===================================== 処理  end  =====================================