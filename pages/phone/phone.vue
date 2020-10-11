<template>
	<view class="content">
		<view class="top_bar">
			<view class="top_bar_left">
				<!-- <image src="../../static/img/1.png" mode=""></image> -->
				<view class="back">
					<view class="iconfont" @click="goback()">&#xe611;</view>
				</view>
			</view>
			<view class="top_bar_mid">
				<text>暨阳文件查询系统v2.0</text>
			</view>
			<view class="top_bar_right">
				<view class="iconfont">&#xe626;</view>
				<!-- <text class="iconfont" @click="gotoSign">&#xe81b;</text> -->
			</view>

		</view>
		<scroll-view id="scrollview" class="chat-window" :style="{height: style.contentViewHeight}" scroll-y="true"  :scroll-with-animation="true" >
			<view class="mes_body" >
				<view class="receive" >
					<image src="../../static/img/school.png">
						
					</image>
					<view >
						该系统尚未推出，请耐心等待哦～
					</view>
					<!-- <view class="other"></view> -->
				</view>
			</view>
			<view id="last"></view>
		</scroll-view>
		<view class="bottom_bar">
			<view class="user_form">
				<input type="text" @keydown.enter="send()" placeholder="请输入内容" v-model="input_line">
				
			</view>
			<view class="iconfont" @click="send()">&#xe643;</view>
		</view>
	</view>
</template>

<script>
	import datas from '../../commons/js/data.js';
	import  Func from "../../commons/js/myfunc.js";
	export default {
		data() {

			return {
				// sender:{},
				mes_lis:[],
				input_line:'',
				viewId:'',
				selected:0,
				rec:[],
				origin_url:"http://www.zjyc.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=",
				style: {
					pageHeight: 0,
					contentViewHeight:0,
					footViewHeight: 90,
					mitemHeight: 0
				},
			}
		},
		onLoad(option) {
			// this.sender = JSON.parse(decodeURIComponent(option.sender));
			// console.log(this.sender);
			this.getmes();
			
		},
		created () {
		　　　const res = uni.getSystemInfoSync();   //获取手机可使用窗口高度     api为获取系统信息同步接口
		　　　this.style.pageHeight = res.windowHeight;
		　　　this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (100) - 70; //像素   因为给出的是像素高度 然后我们用的是upx  所以换算一下 
		// 　　　console.log(this.style.contentViewHeight);
			// this.scrollToBottom();   //创建后调用回到底部方法
		　},
		mounted() {
			this.scrollToBottom();
		},
		methods: {
			getdata:function(key){
				var that = this;
				uni.request({
					// method:"GET",
					url: 'http://gfp.ronghuai312.top/jyeye/api.php?code='+key,
					success: (res) => {
						console.log(res)
						// document.getElementById('butt').style.cursor = 'not-allowed'
						setTimeout(function(){
							// that.loading = false;
							if(res["data"]["error"]==1){
								that.mes_lis.push({
									"type":"receive",
									"mes":"请输入中文进行查询",
									"img":"../../static/img/school.png"
								})
							}
							else if(res["data"]["num"]==0){
								that.mes_lis.push({
									"type":"receive",
									"mes":"未查询到相应文件",
									"img":"../../static/img/school.png"
								})
							}
							else{
								that.rec = res["data"]["info"];
								// console.log(that.rec);
								let mes_temp = '';
								for(let i = 0;i<that.rec.length;i++){
									let each = that.rec[i];
									mes_temp+=(`<a href="`+that.origin_url+each['owner']+'&wbfileid='+each['id']+`"><view>`+each['name']+`</view></a>`)
								}
								that.mes_lis.push({
									"type":"receive",
									"mes":mes_temp,
									"img":"../../static/img/school.png"
								})
								that.scrollToBottom();
							}
						},1000);
					
					}
				})
				
			},
			local_files:function(){
				
			},
			goback:function(){
				uni.navigateBack();
			},
			gobottom:function(){
				// console.log("正要去底部");
			},
			getmes:function(){
				this.mes_lis = datas.sitefile_mes();
				// console.log(this.mes_lis)
			},
			site_files:function(){
				var that = this;
				that.selected = 1;
				that.mes_lis.push({
					"type":"receive",
					"mes":"已连接数据库<br>请输入想要查询的文件",
					"img":"../../static/img/school.png"
				})
				that.scrollToBottom();
			},
			anser_error:function(){
				var that = this;
				that.mes_lis.push({
					"type":"receive",
					"mes":"请先键入你的选择项",
					"img":"../../static/img/school.png"
				})
				that.scrollToBottom();
				
			},
			send:function(){
				var that = this;
				let img_url = "../../static/img/default.jpeg";
				let message_words = that.input_line;
				
				if(message_words!=""){
					// let len =message_words.length;
					// console.log(len);
					// message_words = Func.strInsert(message_words,15);
					that.mes_lis.push({
						"type":"send",
						"mes":message_words,
						"img":img_url
					})
					that.getdata(message_words);
				}
				else{
					that.mes_lis.push({
					"type":"receive",
					"mes":"请输入内容",
					"img":"../../static/img/school.png"
				})
				}
			
				this.input_line = '';
				this.scrollToBottom();
			},
		       scrollToBottom: function () {
				clearTimeout(this.timer);  //清除延迟执行 
					var that = this;
					let res = 0;
					that.style.pageHeight = res.windowHeight;
					that.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (100) - 70; //像素   因为给出的是像素高度 然后我们用的是upx  所以换算一下
					uni.createSelectorQuery().select("#last").boundingClientRect(function(res){
						// console.log("标签获取====>",typeof(res.top))
						// console.log(res.top)
						this.timer = setTimeout(()=>{   //设置延迟执行
							uni.pageScrollTo({
								scrollTop:99999999,
								duration: 300
							});
						},300);
					}).exec()

		        }
		}
	}
</script>

<style lang="scss">
	// #scroll_view{
	// 	height: 100vh;
	// }
.content{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
	}
	.top_bar{
		position: fixed;
		top: 0;
		left: 0;
		padding-top: var(--status-bar-height);
		box-shadow:0px 1px 0px 0px rgba(0,0,0,0.1) ;
		height: 100rpx;
		background-color:$uni-color-bgcolor;
		width: 100%;
		z-index: 1001;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		.top_bar_left{
			color: $uni-bg-color;
			.iconfont{
				font-size: 30rpx;
				font-weight: bold;
			}
		}
		image{
			margin-top: 5px;
			width: $uni-img-size-lg;
			height: $uni-img-size-lg;
			border-radius: 17px;
		}
		.top_bar_mid{
			color:$uni-text-color-inverse ;
			font-size:$uni-font-size-lg;
		}
		.top_bar_right{
			.iconfont{
				font-size:50rpx;
				// width: 80rpx;
				height: 90rpx;
				align-items: center;
				display: flex;
				// margin-left: 100rpx;
			}
			// width: 10%;
			display: flex;
			flex-direction: row;
			align-items: center;
			// width: 15%;
			color:$uni-text-color-inverse ;
			}
	}
	.mes_body{
		padding-top: var(--status-bar-height);
		margin-top: 120rpx;
		width: 100vw;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding-bottom: 130rpx;
		>view image{
			// margin-top: 15rpx;
			margin-right: 20rpx;
			width: 65rpx;
			height: 65rpx;
			border-radius: 50%;

		}
		.receive{
			width: 100vw;
			height: auto;
			margin-top: 30rpx;
			display: flex;
			// align-items: center;
			flex-direction: row;
			padding:10rpx 30rpx;
			justify-content: flex-start;
			left: 0;

			>view{
				// width: 50vw;
				max-width: 50vw;
				height: auto;
				border: 1px solid #E5E5EA;
				display: flex;
				flex-direction: column;
				word-break:break-all;
				justify-content: center;
				// align-items: flex-end;
				padding: 10rpx 10rpx 10rpx 20rpx;
				border-radius: 10rpx 10rpx 10rpx 30rpx;
			}
			
		}
		.send{
			width: 100vw;
			height: auto;
			// align-items: center;
			margin-top: 30rpx;
			display: flex;
			flex-direction: row-reverse;
			justify-content: flex-start;
			right: 0;
			>view{
				max-width: 50vw;
				height: auto;
				border: 1px solid #E5E5EA;
				display: flex;
				flex-direction: column;
				word-break:break-all;
				margin-right: 30rpx;
				justify-content: center;
				// align-items: flex-end;
				padding: 10rpx 20rpx 10rpx 20rpx;
				border-radius: 10rpx 10rpx 30rpx 10rpx;
			}
			
			// position: absolute;
		}
	}
	.bottom_bar{
		position: fixed;
		bottom: 0;
		left: 0;
		box-shadow:0px 1px 0px 0px rgba(0,0,0,0.1) ;
		height: 100rpx;
		background-color:$uni-color-bgcolor;
		width: 100%;
		z-index: 1001;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		.iconfont{
			display: flex;
			color:#fff;
			font-size: 45rpx;
			align-items: center;
		}
		.user_form{
			display: flex;
			flex-direction: row;
			padding-left: 30rpx;
			// justify-content: center;
			align-items: center;
			width: 70vw;
			height: 70rpx;
			border-radius: 50rpx;
			background-color: #fff;
			input{
				width: 65vw;
			}
		}
	}
</style>
