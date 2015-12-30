var process = require('process')
var os=require('os'); 
var arguments = process.argv.splice(2);
console.log(arguments, 'canshu')
var curEnv = getENV(arguments);
//接口地址
var baseHref ='';
var httpReg = /^https?:\/\//;
if( !!curEnv && !httpReg.test(curEnv) ){
	//未处理https的情况
	baseHref = 'http://'+curEnv;
}else{
	baseHref = 'http://'+getLocal();
}


function getENV(arg){
	var curEnv = '';//本地环境
	var envReg = /^-env=([\w\.]+)/;
	if(!Array.isArray(arg)){
		console.error('arg is not an array!');
		return;
	}else{
		//多次设置 以最后一次设置为准
		arg.forEach(function (item){
			var search = envReg.exec( item );//["-env=dev", "dev"]
			console.log( search )
			if( search&& search[1].length ){
				curEnv = search[1];
			}
		})
	}
	if( !!curEnv ){
		return curEnv;
	}else{
		console.log('没有指定环境参数，使用了本地环境')
	}
	
}

function getLocal(){
	//获取本机ip
	var ifaces=os.networkInterfaces();
	var ips = [];
	for (var dev in ifaces) {  
	  var alias=0;  
	  ifaces[dev].forEach(function(details){  
	    if (details.family=='IPv4') {  
	      //console.log(dev+(alias?':'+alias:''),details.address); 
	      ips.push(details.address) 
	      ++alias;  
	    }  
	  });  
	}

	return ips[0];
}
module.exports = baseHref;