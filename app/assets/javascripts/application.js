// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require materialize-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	$(".button-collapse").sideNav();
	console.log("Document Loaded")
	balance = 0
	savingsBalance = 0
	
	console.log("Checking Balance=" + balance)
	console.log("Savings Balance" + savingsBalance)
	
	$("#balance").click(function(){
		$("#message").text("Your checking account has: $" + balance.toString() + " and your savings account has $" + savingsBalance.toString())
	})

	$('#deposit').click(function(){
		var amount = parseFloat($('#d_amount').val())
		balance += amount
		$("#d_amount").val('')
		$('#message').text('Thank you for your deposit of $' + amount.toString() + '!')
	})

	$('#withdraw').click(function(){
		var amount = parseFloat($('#w_amount').val())
		$("#w_amount").val('')
		if(balance < amount){
			alert("You do not have enough funds!")
		}else{
			balance -= amount
			$('#message').text("You're welcome for your withdrawal of $" + amount.toString() + '!')
		}
	})

	$('#x2check').click(function(){
		var amount = parseFloat($('#x2c_amount').val())
		$("#x2c_amount").val('')
		if(savingsBalance < amount){
			alert("You do not have enough funds!")
		}else{
			savingsBalance -= amount
			balance += amount
			$('#message').text("Your tansfer from savings of $" + amount.toString() + ' to checking is complete!')
		}
	})

	$('#x2save').click(function(){
		var amount = parseFloat($('#x2s_amount').val())
		$("#x2s_amount").val('')
		if(balance < amount){
			alert("You do not have enough funds!")
		}else{
			balance -= amount
			savingsBalance += amount
			$('#message').text("Your tansfer from checking of $" + amount.toString() + ' to savings is complete!')
		}
	})
})
