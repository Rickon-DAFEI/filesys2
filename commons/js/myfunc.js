export default{
	//首页时间转换
	dateTime(input_date){
		let time = new Date(input_date);
		
		let now = new Date();
		let d = time.getTime();
		let h = time.getHours();
		let m = time.getMinutes();
		let y = time.getFullYear();
		let M = time.getMonth()+1;
		let Day = time.getDate();
		// console.log(D);
		let nd = now.getTime();
		let nh = now.getHours();
		let nm = now.getMinutes();
		let ny = now.getFullYear();
		let nM = now.getMonth()+1;
		let nDay = now.getDate();
		// console.log("Time"+Day)
		// console.log("Now"+nDay);
		if(Day == nDay && y==ny && M==nM){
			if(h<10){
				h = '0'+h;
			}
			if(m<10){
				m = '0'+m;
			}
			return h+':'+m;
		}
		if(Day == nDay-1 && y==ny && M==nM){
			if(h<10){
				h = '0'+h;
			}
			if(m<10){
				m = '0'+m;
			}
			return '昨天'+h+':'+m;
		}
		if(Day == nDay-2 && y==ny && M==nM){
			if(h<10){
				h = '0'+h;
			}
			if(m<10){
				m = '0'+m;
			}
			return '前天'+h+':'+m;
		}
		if(y==ny && M==nM && Day !=nDay){
			let WeekW = ['日','一','二','三','四','五','六','日']
			if(nDay-Day<7){
				return "星期"+WeekW[time.getDay(Day)];
			}
			if(h<10){
				h = '0'+h;
			}
			if(m<10){
				m = '0'+m;
			}
			return Day+'日'+h+':'+m;
		}
		if(y==ny&&M !=nM){
			return M+'-'+ Day+'';
		}
		if(y!=ny){
			
			return y+'.'+M+'.'+Day;
		}
	},
	short_mes(mes){
		if(mes.length>=20){
			mes = mes.substr(0,15)+"...";
		}
		return mes;
	},
	strInsert(str, length) {
		let res = '';
		let len = str.length;
		let sub_len = len/length;
		if(sub_len<=1){
			return str;
		}
		else{
			console.log(sub_len);
			for(let i = 0;i<sub_len-1;i++){
				res+=str.substr(i*length,length);
				res+='<br>'
			}
			res+=str.substr((sub_len-1)*length),len-(sub_len-1)*length;
			return res+"cesshi";
		}
	}
}