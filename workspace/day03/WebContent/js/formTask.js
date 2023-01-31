	let userName = $("#userName");
	let userEmail = $("#userEmail");
	let userPassword = $("#userPassword");
	
	let emailFormat = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
	let regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
	
	userName.keyup(function(e){
		if(userName.val() == ""){
			userName.css("border", "1px solid red");
			$(".name-check").text("이름을 입력해주세요.");
		}else if(userName.val().length < 2){
			userName.css("border", "1px solid red");
			$(".name-check").text("이름은 최소 2자 이상 입력해주세요.");
		}else{
			userName.css("border", "1px solid #e1e1e1");
			$(".name-check").text("");
		}
	});
	
	userName.blur(function(e){
		if(userName.val() == ""){
			userName.css("border", "1px solid red");
			$(".name-check").text("이름을 입력해주세요.");
		}else if(userName.val().length < 2){
			userName.css("border", "1px solid red");
			$(".name-check").text("이름은 최소 2자 이상 입력해주세요.");
		}else{
			userName.css("border", "1px solid #e1e1e1");
			$(".name-check").text("");
		}
	});

	userEmail.keyup(function(e){
		if(userEmail.val() == ""){
			userEmail.css("border", "1px solid red");
			$(".email-check").text("이메일을 입력해주세요.");
		}else if(!emailFormat.test(userEmail.val())){
			userEmail.css("border", "1px solid red");
			$(".email-check").text("올바른 이메일 주소를 입력해주세요.");
		}else{
			userEmail.css("border", "1px solid #e1e1e1");
			$(".email-check").text("");
		}
	});
	
	userEmail.blur(function(e){
		if(userEmail.val() == ""){
			userEmail.css("border", "1px solid red");
			$(".email-check").text("이메일을 입력해주세요.");
		}else if(!emailFormat.test(userEmail.val())){
			userEmail.css("border", "1px solid red");
			$(".email-check").text("올바른 이메일 주소를 입력해주세요.");
		}else{
			userEmail.css("border", "1px solid #e1e1e1");
			$(".email-check").text("");
		}
	});

	userPassword.keyup(function(e){
		if(userPassword.val() == ""){
			userPassword.css("border", "1px solid red");
			$(".pw-check").text("비밀번호를 입력해주세요.");
		}else if(!regPassword.test(userPassword.val())){
			userPassword.css("border", "1px solid red");
			$(".pw-check").text("영문+숫자 조합 8자리 이상 입력해주세요.");
		}else{
			userPassword.css("border", "1px solid #e1e1e1");
			$(".pw-check").text("");
		}
	});
	
	userPassword.blur(function(e){
		if(userPassword.val() == ""){
			userPassword.css("border", "1px solid red");
			$(".pw-check").text("비밀번호를 입력해주세요.");
		}else if(!regPassword.test(userPassword.val())){
			userPassword.css("border", "1px solid red");
			$(".pw-check").text("영문+숫자 조합 8자리 이상 입력해주세요.");
		}else{
			userPassword.css("border", "1px solid #e1e1e1");
			$(".pw-check").text("");
		}
	});
	
	$(document).ready(function() {
		$("#allSelect").click(function() {
			if($("#allSelect").is(":checked")) $("input[name=check]").prop("checked", true);
			else $("input[name=check]").prop("checked", false);
		});

		$("input[name=check]").click(function() {
			var total = $("input[name=check]").length;
			var checked = $("input[name=check]:checked").length;

			if(total != checked) $("#allSelect").prop("checked", false);
			else $("#allSelect").prop("checked", true); 
		});
	});
	
	$(".password-show").click(function(){
		if(userPassword.attr("type") == "password"){
			$(".password-show").text("숨김");
			userPassword.attr("type","text");			
		}else if(userPassword.attr("type") == "text"){
			userPassword.attr("type","password");			
			$(".password-show").text("표시");
		}
	});