var counterLeft,counterInterval;
function endlessCountdown(){
	if($(".endless_countdown").length){
		var counterToday = new Date();
		var counterDate = new Date($(".endless_countdown").attr("date").substring(2,4)+"/"+$(".endless_countdown").attr("date").substring(0,2)+"/"+$(".endless_countdown").attr("date").substring(4,6));
		var counterDate = new Date("20"+$(".endless_countdown").attr("date").substr(4,2),$(".endless_countdown").attr("date").substr(2,2)-1,$(".endless_countdown").attr("date").substr(0,2));
		counterLeft = (counterDate.getTime()-counterToday.getTime())/1000;
		while(counterLeft<0) counterLeft=counterLeft+3*60*60*24; // While time is negative add 3 days
		counterInterval = setInterval(counterCount, 1000);
	}
}
function counterCount(){
	counterDays = ~~(counterLeft/60/60/24);
	counterHours = ~~(counterLeft/60/60)-counterDays*24;
	counterMinutes = ~~(counterLeft/60)-counterDays*24*60-counterHours*60;
	counterSeconds = ~~(counterLeft)-counterDays*24*60*60-counterHours*60*60-counterMinutes*60;
	if(counterMinutes<10) counterMinutes="0"+counterMinutes;
	if(counterSeconds<10) counterSeconds="0"+counterSeconds;
	$(".endless_countdown div:nth-of-type(1)").text(counterDays);
	$(".endless_countdown div:nth-of-type(2)").text(counterHours);
	$(".endless_countdown div:nth-of-type(3)").text(counterMinutes);
	$(".endless_countdown div:nth-of-type(4)").text(counterSeconds);
	counterLeft--;
	if(counterDays==0 && counterHours==0 && counterMinutes==0 && counterSeconds==0) clearInterval(counterInterval);
}