export default{
	friends:function(){
		let friend = [{
			'index':1,
			'img':"../../static/img/2.png",
			'mes_number':12,
			'name':'李大炮',
			'mes':"项目 'Chat' 编译成功。",
			'time':"2020-09-27T05:27:05.242Z"
		}
		,{
			'index':2,
			'img':"../../static/img/4.png",
			'mes_number':12,
			'name':'李大炮',
			'mes':"项目 'Chat' 编译成功。",
			'time':"2019-04-27T05:27:05.242Z"
		},{
			'index':3,
			'img':"../../static/img/3.png",
			'mes_number':102,
			'name':'李大炮',
			'mes':"项目 'Chat' 编译成功。",
			'time':new Date()
		},{
			'index':4,
			'img':"../../static/img/1.png",
			'mes_number':12,
			'name':'李大炮',
			'mes':"如手机上HBuilder调试基座未启动，请手动启动..",
			'time':"2020-09-27T05:27:05.242Z"
		},{
			'index':5,
			'img':"../../static/img/2.png",
			'mes_number':12,
			'name':'李大炮',
			'mes':"项目 'Chat' 编译成功。",
			'time':"2019-09-25T05:27:05.242Z"
		},{
			'index':6,
			'img':"../../static/img/2.png",
			'mes_number':12,
			'name':'李大炮',
			'mes':"项目 'Chat' 编译成功。",
			'time':"2020-09-27T05:27:05.242Z"
		}
		,{
			'index':7,
			'img':"../../static/img/4.png",
			'mes_number':12,
			'name':'李大炮',
			'mes':"项目 'Chat' 编译成功。",
			'time':"2019-04-27T05:27:05.242Z"
		},{
			'index':8,
			'img':"../../static/img/2.png",
			'mes_number':12,
			'name':'李大炮',
			'mes':"项目 'Chat' 编译成功。",
			'time':"2020-09-27T05:27:05.242Z"
		}
		,{
			'index':9,
			'img':"../../static/img/4.png",
			'mes_number':12,
			'name':'李大炮',
			'mes':"项目 'Chat' 编译成功。",
			'time':"2019-04-27T05:27:05.242Z"
		}
		]
		return friend;
	}
	,
	meslis:function(){
		let mes = [{
			'img':"../../static/img/school.png",
			'mes':"欢迎来到暨阳文件查询系统",
			"type":"receive",
		},{
			'img':"../../static/img/school.png",
			'mes':"请键入您想查询的内容",
			"type":"receive",
		},{
			'img':"../../static/img/school.png",
			'mes':`<view style="display: flex;flex-direction: column; color: #778899">
			<view @click = "ck(1)">1、官方文件</view>
			<view @click = "ck(2)">2、各专业人才培养方案、题库</view>
			<view @click = "ck(3)">3、教师联系方式查询</view>
			<view>`,
			"type":"receive",
		}]
		return mes;
	}
}