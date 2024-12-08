/*
**********************************************************************
*
* util.js
* 사이트 전반에 걸쳐서 사용되는 JavaScript 함수 모음
*
* 작    성 : 배찬두
* 최초일자 : 2007-08-03(금)
* 수정일자 : 최초작성
*
**********************************************************************
*/
if(typeof(config_home)== "undefined"){
	var config_home = "/";
} // config_home 변수값이 존재 하는가 판단

function openWin(url,width,height) {
	var argv = openWin.arguments;
	var argc = openWin.arguments.length;
	var scl=(argc>3)?"yes":"no";
	var str,top,left;
	top = parseInt(screen.height/3 - height/2);
	left = parseInt(screen.width/3 - width/2);
	if(top<0) top=0;
	if(left<0) left=0;
	str="toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars="+scl+",resizable=no,copyhistory=no,";
	str=str+"width="+width+",height="+height;
	str=str+",top="+top;
	str=str+",left="+left;
	var st = window.open(url,"",str);
	st.focus();
	return st;
}
function openWinS(url,width,height,pname) {
	var argv = openWinS.arguments;
	var argc = openWinS.arguments.length;
	var scl=(argc>4)?"yes":"no";
	var str,top,left;
	top = parseInt(screen.height/3 - height/2);
	left = parseInt(screen.width/3 - width/2);
	if(top<0) top=0;
	if(left<0) left=0;
	str="toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars="+scl+",resizable=no,copyhistory=no,";
	str=str+"width="+width+",height="+height;
	str=str+",top="+top;
	str=str+",left="+left;
	var st = window.open(url,pname,str);
	st.focus();
	return st;
}
function openWinSr(url,width,height,pname) {
	var argv = openWinSr.arguments;
	var argc = openWinSr.arguments.length;
	var scl=(argc>4)?"yes":"no";
	var str,top,left;
	top = parseInt(screen.height/3 - height/2);
	left = parseInt(screen.width/3 - width/2);
	if(top<0) top=0;
	if(left<0) left=0;
	str="toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars="+scl+",resizable=yes,copyhistory=no,";
	str=str+"width="+width+",height="+height;
	str=str+",top="+top;
	str=str+",left="+left;
	var st = window.open(url,pname,str);
	st.focus();
	return st;
}
function openWinStop(url,width,height,pname){
	var argv = openWinStop.arguments;
	var argc = openWinStop.arguments.length;
	var scl=(argc>4)?"yes":"no";
	str="toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars="+scl+",resizable=yes,copyhistory=no,";
	str=str+"width="+width+",height="+height;
	str=str+",top=0,left=0";
	var st = window.open(url,pname,str);
	st.focus();
	return st;
}
function readdoc(st){
	var AgntUsr=navigator.userAgent.toLowerCase();
	var width=800,height=600;
	var str,top,left;
	top = parseInt(screen.height/3 - height/2);
	if(top<0) top=0;
	left = parseInt(screen.width/3 - width/2);
	if(AgntUsr.indexOf('msie 7.')!=-1 || AgntUsr.indexOf('msie 8.')!=-1){
		str="toolbar=no,location=yes,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,";
	}else{
		str="toolbar=yes,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,";
	}
	str=str+"width="+width+",height="+height;
	str=str+",top="+top;
	str=str+",left="+left;
	var st = window.open(st,"Read_Doc_Win",str);
	st.focus();
	return st;
}

function PicPrevWin(st){
	var str,top,left, width, height;
	width=200;
	height=200;
	top = parseInt((screen.availHeight / 3) - (height / 2));
	left = parseInt((screen.availWidth / 3) - (width / 2));
	str="toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,";
	str=str+"width=" + width + ",height=" + height;
	str=str+",top=" + top;
	str=str+",left="+left;
	ff = window.open(config_home + "common/imgview.php?p="+st,"Image_View_Win",str);
	ff.focus();
	return ff;
}
function VrViewWin(st){
	var str,top,left, width, height;
	width=860;
	height=700;
	top = parseInt((screen.availHeight / 3) - (height / 2));
	left = parseInt((screen.availWidth / 3) - (width / 2));
	str="toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=no,resizable=no,copyhistory=no,";
	str=str+"width=" + width + ",height=" + height;
	str=str+",top=" + top;
	str=str+",left="+left;
	ff = window.open(config_home + "common/vrview.php?p="+st,"VR_View_Win",str);
	ff.focus();
	return ff;
}
function SwfPrevWin(st){
	var str,top,left, width, height;
	width=200;
	height=200;
	top = parseInt((screen.availHeight / 3) - (height / 2));
	left = parseInt((screen.availWidth / 3) - (width / 2));
	str="toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=no,resizable=yes,copyhistory=no,";
	str=str+"width=" + width + ",height=" + height;
	str=str+",top=" + top;
	str=str+",left="+left;
	ff = window.open(config_home + "common/swfview.php?p="+st,"Flash_View_Win",str);
	ff.focus();
	return ff;
}
function VODPrevWin(st){
	var str,top,left, width, height;
	width=360;
	height=400;
	top = parseInt((screen.availHeight / 3) - (height / 2));
	left = parseInt((screen.availWidth / 3) - (width / 2));
	str="toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=no,resizable=yes,copyhistory=no,";
	str=str+"width=" + width + ",height=" + height;
	str=str+",top=" + top;
	str=str+",left="+left;
	ff = window.open(config_home + "common/vodview.php?p="+st,"VOD_View_Win",str);
	ff.focus();
	return ff;
}
function checkemail(st){
	if(st=="") return true;
	var email=/^([A-Za-z0-9_\.\-]{1,15})(@{1})([A-Za-z0-9_\-]{1,15})(.{1})([A-Za-z0-9_\-]{2,10})(.{1}[A-Za-z]{2,10})?(.{1}[A-Za-z\-]{2,10})?$/;
	if (!email.test(st)){
		if(checkemail.arguments.length>1){
			alert(checkemail.arguments[1]);
		}else{
			alert("eMail 형식이 아닙니다.\n\n입력하지 않을경우 삭제 하십시오");
		}
		return false;
	}
	return true;
}
function checkTelNum(st){
	var telF = /^0[0-9]{1,2}[\-\) ]{0,1}[0-9]{3,4}[\- ]{0,1}[0-9]{4}$/;
	if(st=="") return true
	if(!telF.test(st)){
		alert("전화번호가 아닙니다.\n\n010-1234-5678 형태로 입력하십시오\n\n입력하지 않을경우 삭제 하십시오");
		return false;
	}
	return true;
}
function chkresno(resno) {
	if(resno=="") return true;
	var fmt = /^\d{6}-[1234]\d{6}$/;
	if (!fmt.test(resno)) {
		alert("주민등록 번호 형식이 아닙니다.\n\n숫자6자리-숫자7자리");
		return false;
	}
	var buf = new Array(13);
	for (i = 0; i < 6; i++) buf[i] = parseInt(resno.charAt(i));
	for (i = 6; i < 13; i++) buf[i] = parseInt(resno.charAt(i + 1));
	multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	for (i = 0, sum = 0; i < 12; i++) sum += (buf[i] *= multipliers[i]);
	if ((11 - (sum % 11)) % 10 != buf[12]) {
		alert("올바른 주민등록 번호가 아닙니다.");
		return false;
	}
	return true;
}
function checkNum(e){
//  onkeydown="return checkNum(event)" style="ime-mode:disabled" onPaste="return false"
	var argv = checkNum.arguments;
	var argc = checkNum.arguments.length;
	var ch;
	if(window.event) ch = event.keyCode; else ch = e.keyCode;
	if(argc>1){
		if(ch==190 || ch==110) return true;
	}
	if(ch<32 || ch==46 || ch==37 || ch==38 || ch==39 || ch==40 || (ch>=96 && ch<=105)){
		return true;
	}
	if(ch>57 || ch<48){
		return false;
	}
	return true;
}
// onmousedown="InsertTextarea(obj,str,sel)" onmouseup="obj.focus()"
function InsertTextarea(obj, text, selected) {
	var AgntUsr=navigator.userAgent.toLowerCase();
	if(AgntUsr.indexOf('msie')!=-1){ // IE이면
		var selection = document.selection.createRange(); 
		if(selection.text)
			document.selection.clear(); 
		selection.text = text; 
		if(selected)
			selection.moveStart('character', -text.length); 
		selection.select(); 
	}else{ // FF & Opera & Safari
		var scroll = obj.scrollTop; 
		var start = obj.selectionStart; 
		var end = obj.selectionEnd; 
		obj.value = obj.value.substring(0, start) + text 
			+ obj.value.substring(end, obj.value.length); 
		if(selected)
			obj.setSelectionRange(start, start+text.length); 
		else
			obj.setSelectionRange(start+text.length, start+text.length); 
		obj.scrollTop = scroll; 
	}
}
function check_next(l1,l2,obj){
	if(l1>=l2){
		obj.focus();
	}
}
function getByte(message){
	var nbytes = 0;
	for (i=0; i<message.length; i++) {
		var ch = message.charAt(i);
		if(escape(ch).length > 4) {
			nbytes += 2;
		} else if (ch == '\n') {
			if (message.charAt(i-1) != '\r') {
				nbytes += 1;
			}
		} else if (ch == '<' || ch == '>') {
		nbytes += 4;
		} else {
		nbytes += 1;
		}
	}
	return nbytes;
}
function trim(strSource) { 
	re = /^ +| +$|^\n+|\n+$|^\r+$|\r+$/g; 
	return strSource.replace(re, ''); 
} 
if(typeof ''.trim == 'undefined'){
	String.prototype.trim = function(){
		re = /^ +| +$|^\n+|\n+$|^\r+$|\r+$/g;
		return this.replace(re, '');
	};
}

function ActiveXStart(id){
	var AgntUsr=navigator.userAgent.toLowerCase();
	if(AgntUsr.indexOf('msie')!=-1){ // IE이면
		document.write(id.text);
	}
	id.id = '';
}
function ActiveXArea(idName){
	var o = document.getElementById(idName);
	if(o && o.type=='textarea'){
		document.write(o.value);
		o.removeAttribute('id');
		if(o.parentElement){
			o.parentElement.removeChild(o);
		}else if(o.parentNode){
			o.parentNode.removeChild(o);
		}
	}
}
var scroll_tm = null;
function scroll_right(obj){
	var s = obj.scrollWidth;
	var l = obj.scrollLeft;
	l+=6;
	if(l>s){
		clearTimeout(scroll_tm);
		scroll_tm = null;
	}else{
		obj.scrollLeft = l;
		scroll_tm = setTimeout(function (){
			scroll_right(obj);
		},50);
	}
}
function scroll_reset(obj){
	if(scroll_tm!=null){
		clearTimeout(scroll_tm);
		scroll_tm = null;
	}
	obj.scrollLeft = 0;
}
function getParam(varName){
	var ret_str = "";
	var str = location.search;
	var ptr = str.indexOf(varName+"=");
	if(ptr>-1){
		ptr += varName.length+1;
		var ptr2 = str.indexOf("&", ptr);
		if(ptr2!=-1){
			ret_str = str.substring(ptr, ptr2);
		}else{
			ret_str = str.substring(ptr, str.length);
		}
	}
	return ret_str;
}

function number_format(n){
	var sgn = n<0 ? -1 : 1;
	if(sgn<0) n = -n;
	var str = "" + n + "";
	var t_val = '';
	if(str.indexOf(".")>0){
		var f_val = str.substring(0, str.indexOf("."));
		t_val = str.substring(str.indexOf("."), str.length);
		str = f_val;
	}
	var retValue = "";
	for (iii = 0; iii < str.length; iii++) {
		if (iii > 0 && (iii % 3) == 0) {
			retValue = str.charAt(str.length - iii - 1) + "," + retValue;
		} else {
			retValue = str.charAt(str.length - iii - 1) + retValue;
		}
	}
	retValue += t_val;
	if (retValue == "0") {
		return "0";
	}
	return (sgn<0?'-':'') + retValue;
}
function escapeHtml(text) {
	return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

/*==========================================================================================
		쿠키 유틸리티
------------------------------------------------------------------------------------------*/
function getCookieVal (offset) {
   var endstr = document.cookie.indexOf (";", offset);
   if (endstr == -1) endstr = document.cookie.length;
   return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie(name) {
   var arg = name + "=";
   var alen = arg.length;
   var clen = document.cookie.length;
   var i = 0;
   while (i < clen) {
	  var j = i + alen;
	  if (document.cookie.substring(i, j) == arg)
		 return getCookieVal (j);
	  i = document.cookie.indexOf(" ", i) + 1;
	  if (i == 0) break; 
   }
   return null;
}

function SetCookie (name, value) {
   var argv = SetCookie.arguments;
   var argc = SetCookie.arguments.length;
   var expires = (2 < argc) ? argv[2] : null;
   var path = (3 < argc) ? argv[3] : null;
   var domain = (4 < argc) ? argv[4] : null;
   var secure = (5 < argc) ? argv[5] : false;
   document.cookie = name + "=" + escape (value) +
	  ((expires == null) ? "" : 
		 ("; expires=" + expires.toGMTString())) +
	  ((path == null) ? "" : ("; path=" + path)) +
	  ((domain == null) ? "" : ("; domain=" + domain)) +
	  ((secure == true) ? "; secure" : "");
} 
var Drag = {
	obj : null,
	init : function(o, oRoot, minX, maxX, minY, maxY, bSwapHorzRef, bSwapVertRef, fXMapper, fYMapper){
		o.onmousedown   = Drag.start;

		o.hmode         = bSwapHorzRef ? false : true ;
		o.vmode         = bSwapVertRef ? false : true ;

		o.root = oRoot && oRoot != null ? oRoot : o ;

		if (o.hmode  && isNaN(parseInt(o.root.style.left  ))) o.root.style.left   = "0px";
		if (o.vmode  && isNaN(parseInt(o.root.style.top   ))) o.root.style.top    = "0px";
		if (!o.hmode && isNaN(parseInt(o.root.style.right ))) o.root.style.right  = "0px";
		if (!o.vmode && isNaN(parseInt(o.root.style.bottom))) o.root.style.bottom = "0px";

		o.minX  = typeof minX != 'undefined' ? minX : null;
		o.minY  = typeof minY != 'undefined' ? minY : null;
		o.maxX  = typeof maxX != 'undefined' ? maxX : null;
		o.maxY  = typeof maxY != 'undefined' ? maxY : null;

		o.xMapper = fXMapper ? fXMapper : null;
		o.yMapper = fYMapper ? fYMapper : null;

		o.root.onDragStart  = new Function();
		o.root.onDragEnd    = new Function();
		o.root.onDrag       = new Function();
	},
	start : function(e){
		var o = Drag.obj = this;
		e = Drag.fixE(e);
		var y = parseInt(o.vmode ? o.root.style.top  : o.root.style.bottom);
		var x = parseInt(o.hmode ? o.root.style.left : o.root.style.right );
		o.root.onDragStart(x, y);

		o.lastMouseX    = e.clientX;
		o.lastMouseY    = e.clientY;

		if (o.hmode) {
			if (o.minX != null) o.minMouseX = e.clientX - x + o.minX;
			if (o.maxX != null) o.maxMouseX = o.minMouseX + o.maxX - o.minX;
		} else {
			if (o.minX != null) o.maxMouseX = -o.minX + e.clientX + x;
			if (o.maxX != null) o.minMouseX = -o.maxX + e.clientX + x;
		}

		if (o.vmode) {
			if (o.minY != null) o.minMouseY = e.clientY - y + o.minY;
			if (o.maxY != null) o.maxMouseY = o.minMouseY + o.maxY - o.minY;
		} else {
			if (o.minY != null) o.maxMouseY = -o.minY + e.clientY + y;
			if (o.maxY != null) o.minMouseY = -o.maxY + e.clientY + y;
		}

		document.onmousemove    = Drag.drag;
		document.onmouseup      = Drag.end;

		return false;
	},
	drag : function(e){
		e = Drag.fixE(e);
		var o = Drag.obj;

		var ey  = e.clientY;
		var ex  = e.clientX;
		var y = parseInt(o.vmode ? o.root.style.top  : o.root.style.bottom);
		var x = parseInt(o.hmode ? o.root.style.left : o.root.style.right );
		var nx, ny;

		if (o.minX != null) ex = o.hmode ? Math.max(ex, o.minMouseX) : Math.min(ex, o.maxMouseX);
		if (o.maxX != null) ex = o.hmode ? Math.min(ex, o.maxMouseX) : Math.max(ex, o.minMouseX);
		if (o.minY != null) ey = o.vmode ? Math.max(ey, o.minMouseY) : Math.min(ey, o.maxMouseY);
		if (o.maxY != null) ey = o.vmode ? Math.min(ey, o.maxMouseY) : Math.max(ey, o.minMouseY);

		nx = x + ((ex - o.lastMouseX) * (o.hmode ? 1 : -1));
		ny = y + ((ey - o.lastMouseY) * (o.vmode ? 1 : -1));

		if (o.xMapper)      nx = o.xMapper(y)
		else if (o.yMapper) ny = o.yMapper(x)

		Drag.obj.root.style[o.hmode ? "left" : "right"] = nx + "px";
		Drag.obj.root.style[o.vmode ? "top" : "bottom"] = ny + "px";
		Drag.obj.lastMouseX = ex;
		Drag.obj.lastMouseY = ey;

		Drag.obj.root.onDrag(nx, ny);
		return false;
	},
	end : function(){
		document.onmousemove = null;
		document.onmouseup   = null;
		Drag.obj.root.onDragEnd(	parseInt(Drag.obj.root.style[Drag.obj.hmode ? "left" : "right"]), 
									parseInt(Drag.obj.root.style[Drag.obj.vmode ? "top" : "bottom"]));
		Drag.obj = null;
	},
	fixE : function(e){
		if (typeof e == 'undefined') e = window.event;
		if (typeof e.layerX == 'undefined') e.layerX = e.offsetX;
		if (typeof e.layerY == 'undefined') e.layerY = e.offsetY;
		return e;
	}
};
	var SCH_DETAIL = {
		container: null,
		tm: null,
		ObjPos: function(obj){
			var tmp_obj;
			var curLeft = 0;
			var curTop = 0;
			tmp_obj = obj;
			if(tmp_obj.offsetParent){
				while(tmp_obj.offsetParent){
					curLeft += tmp_obj.offsetLeft;
					curTop += tmp_obj.offsetTop;
					tmp_obj = tmp_obj.offsetParent;
				}
			}else{
				curLeft = +tmp_obj.offsetLeft;
				curTop = +tmp_obj.offsetTop;
			}
			var ret = { 'left':curLeft, 'top':curTop, 'width':obj.offsetWidth, 'height':obj.offsetHeight };
			return ret;
		},
		init: function(){
			var bObj = document.getElementsByTagName('div');
			for(var i=0; i<bObj.length; i++){
				var detail = bObj[i].getAttribute("detail");
				if(detail!=null){
					bObj[i].onmouseover = function(e){
						if(window.event) e = window.event;
						with(SCH_DETAIL){
							if(container==null){
								container = document.createElement('div');
								document.body.appendChild(container);
								with(container){
									style.position = 'absolute';
									style.display = 'none';
									style.visibility = 'hidden';
									style.zIndex = '1000';
									style.position = 'absolute';
									style.overflow = 'visible';
									style.wordBreak = 'break-all';
									//style.whiteSpace = 'nowrap';
									style.width = 'auto';
									style.maxWidth = '300px';
									style.height = 'auto';
									style.left = '0px';
									style.top = '0px';
									style.zIndex = '20';
									style.backgroundColor = '#ffffff';
									style.border = '2px solid #666666';
									style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.3)';
									style.padding = '5px';
								}
							}
						}
						var html = this.getAttribute("detail");
						if(html=='') return false;
						SCH_DETAIL.container.innerHTML = html;
						var pos = SCH_DETAIL.ObjPos(this);
						if(SCH_DETAIL.tm!=null){ clearTimeout(SCH_DETAIL.tm); }
						SCH_DETAIL.container.style.display = 'block';
						setTimeout(function(){
							var ssw = document.body.scrollWidth;
							var meHeight = SCH_DETAIL.container.offsetHeight;
							var meWidth = SCH_DETAIL.container.offsetWidth;
							var l = pos.left - 5;
							if(l + meWidth > ssw) l -= ((l+meWidth)-ssw);
							SCH_DETAIL.container.style.left = (l) + 'px';
							SCH_DETAIL.container.style.top = (pos.top - meHeight) + 'px';
							SCH_DETAIL.container.style.visibility = 'visible';
						},0);
					};
					bObj[i].onmouseout = function(e){
						SCH_DETAIL.tm = setTimeout(function(){
							if(SCH_DETAIL.container!=null){
								SCH_DETAIL.container.style.display = 'none';
								SCH_DETAIL.container.style.visibility = 'hidden';
							}
						}, 50);
					};
				}
			}
		},
		addEvent: function(o, evt, f){
			if(o.addEventListener){
				o.addEventListener(evt, f, false);
			}else if(o.attachEvent){
				o.attachEvent("on" + evt, f);
			}
		}
	};
	SCH_DETAIL.addEvent(window, "load", SCH_DETAIL.init);

/** POPUP 창 핸들 이전 이사마켓 레이어팝업 **/
var ViewLayerPopupWindow2 = new Array();
function ViewLayerPopup2(idx, w, h, l, t, scl, title, imdit_url){
	var cookie_str = 'SITEMANAGER_POPUP'+idx;
	var cookval = GetCookie(cookie_str);
	if(cookval != 'hidden'){
		var ptr = ViewLayerPopupWindow2.length;
		ViewLayerPopupWindow2[ptr] = layerP = document.createElement('div');
		layerP.style.position = 'absolute';
		layerP.style.left = l + 'px';
		layerP.style.top = t + 'px';
		layerP.style.width = 'auto';
		layerP.style.height = 'auto';
		//layerP.style.overflow = 'hidden';
		layerP.style.zIndex = (900000 + ptr);
		if(document.getElementById("LayerPopupContainer")){
			document.getElementById("LayerPopupContainer").appendChild(layerP);
		}else{
			document.body.appendChild(layerP);
		}
		var str = '<table cellpadding="0" cellspacing="1" border="0" bgcolor="#201175">'
			+ '<tr><td height="20" bgcolor="#003088" onclick="ViewLayerPopupClose2('+ptr+')" '
			+ 'onkeypress="return true;" '
			+ 'style="cursor:pointer;color:#dceaf1;">'
			+ '<span style="float:right">닫기 &nbsp;</span>'
			+ ' &nbsp;  ' + title
			+ '</td></tr>'
			+ '<tr><td bgcolor="#ffffff">'
			+	'<iframe src="' + (idx>0 ? config_home + 'popup.php?num='+idx+'&layer='+ptr : imdit_url)+'" width="'+w+'" height="'+h +'" border="0" frameborder="0" scrolling="'+scl+'" title="팝업창" id="innerFrame_popup_' + ptr + '" style="padding:0;margin:0;"></iframe>'
			+ '</td></tr>'
			+ '<tr><td bgcolor="#201175" height="30" align="center"><font color="#ffffff">'
			+ '<input type="checkbox" onclick="frame_exi_cookie(' + ptr + ',' + idx + ')" id="popup_close_layer_' + ptr + '"> <label for="popup_close_layer_' + ptr + '">오늘 하루 창을 표시하지 않습니다.</label> '
			+ '<input type="button" value="창닫기" onclick="ViewLayerPopupClose2(' + ptr+ ');">'
			+ '</font></td></tr></table>';

		layerP.innerHTML = str;
	}
}
function ViewLayerPopupClose2(ptr){
	if(ViewLayerPopupWindow2[ptr]){
		ViewLayerPopupWindow2[ptr].innerHTML = '';
		ViewLayerPopupWindow2[ptr].style.display = 'none';
	}
}

/** POPUP 창 핸들 **/
	var ViewLayerPopupWindow = new Array();
	function ViewLayerPopup(idx, w, h, l, t, scl, title){
		var cookie_str = 'SITEMANAGER_POPUP'+idx;
		var cookval = GetCookie(cookie_str);
		var isMSIE = navigator.userAgent.toLowerCase().indexOf('msie')!=-1;
		if(cookval != 'hidden'){
			var ptr = ViewLayerPopupWindow.length;
			ViewLayerPopupWindow[ptr] = layerP = document.createElement('div');
			layerP.style.position = 'absolute';
			layerP.style.left = l + 'px';
			layerP.style.top = t + 'px';
			layerP.style.width = (parseInt(w)) + 'px';
			layerP.style.height = (parseInt(h)+27) + 'px';
			layerP.style.overflow = 'hidden';
			layerP.style.boxShadow = "3px 3px 25px rgba(0,0,0,0.5)";
			layerP.style.border = "1px solid #2d3442";
			layerP.meZindex = (10000 + ptr);
			layerP.mePtr = ptr;
			layerP.style.zIndex = (10000 + ptr);
			if(document.getElementById("LayerPopupContainer")){
				document.getElementById("LayerPopupContainer").appendChild(layerP);
			}else{
				document.body.appendChild(layerP);
			}
			var str = '<table width="100%" cellpadding="0" cellspacing="0" border="0">'
				+ '<tr><td height="26" bgcolor="#596886" style="border-bottom:1px solid #2d3442;" id="layerSM2_Popup_' + ptr + '" align="left">'
					+ '<table border="0" cellpadding="0" cellspacing="0" width="100%">'
					+ '<tr>'
					+ '<td style="cursor:move;color:#f0f0f0;">'
					+ ' &nbsp; ▒ ' + title
					+ '</td>'
					+ '<td width="50" align="center" style="cursor:pointer;color:#f0f0f0;"'
					+ ' onclick="ViewLayerPopupClose('+ptr+')" onkeypress="return true;">'
					+ '× 닫기</td>'
					+ '</tr></table>'
				+ '</td></tr>'
				+ '<tr><td bgcolor="#ffffff" align="left"><div style="position:relative;overflow:hidden;'
					+ 'width:'+w+'px; height:'+h+'px;">'
				+ '<iframe src="' + config_home + 'popup.php?num='+idx+'&layer='+ptr+'" width="'+w+'" height="'+h+'" border="0" frameborder="0" scrolling="'+scl+'" title="팝업창"></iframe>'
				+ '<div id="layerSM2_Popup_'+ptr+'_mask" style="'
					+ 'position:absolute;'
					+ 'background:#ffffff;'
					+ 'opacity:0.1;filter:alpha(opacity=10);'
					+ 'left:0px; top:0px;'
					+ 'overflow:hidden;'
					+ 'width:'+w+'px; height:'+h+'px;'
					+ 'display:none;'
					+ '"></div>';
				+ '</div></td></tr></table>';
			layerP.innerHTML = str;
			layerP.titleBox = document.getElementById('layerSM2_Popup_' + ptr);
			Drag.init(layerP.titleBox, layerP);
			layerP.onDragStart = function(x, y){
				var maxVal = -1;
				var me_meZindex = this.meZindex;
				var me_mePtr = this.mePtr;
				var maskO = document.getElementById("layerSM2_Popup_"+me_mePtr+"_mask");
				if(isMSIE){
					this.setCapture();
				}else{
					maskO.style.display = 'block';
				}
				for(var i=0; i<ViewLayerPopupWindow.length; i++){
					if(ViewLayerPopupWindow[i].meZindex>maxVal) maxVal = ViewLayerPopupWindow[i].meZindex;
				}
				ViewLayerPopupWindow[me_mePtr].meZindex = maxVal;
				ViewLayerPopupWindow[me_mePtr].style.zIndex = maxVal;
				for(var i=0; i<ViewLayerPopupWindow.length; i++){
					if(i!=me_mePtr && ViewLayerPopupWindow[i].meZindex>me_meZindex){
						ViewLayerPopupWindow[i].meZindex--;
						ViewLayerPopupWindow[i].style.zIndex = ViewLayerPopupWindow[i].meZindex;
					}
				}
			};
			layerP.onDragEnd = function(x, y){
				var me_mePtr = this.mePtr;
				var maskO = document.getElementById("layerSM2_Popup_"+me_mePtr+"_mask");
				if(isMSIE){
					this.releaseCapture();
				}else{
					maskO.style.display = 'none';
				}
			};
		}
	}
	function ViewLayerPopupClose(ptr){
		if(ViewLayerPopupWindow[ptr]){
			ViewLayerPopupWindow[ptr].innerHTML = '';
			ViewLayerPopupWindow[ptr].style.display = 'none';
		}
	}
	function ViewPopup(idx, w, h, l, t, scl){
		var str = "toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars="+scl
			+ ",resizable=no,copyhistory=no,"
			+ "width=" + w + ",height=" +h + ",top=" + t + ",left=" + l;
		var cookie_str = 'SITEMANAGER_POPUP'+idx;
		var cookval = GetCookie(cookie_str);
		if(cookval != 'hidden'){
			var st = window.open(config_home + "popup.php?num="+idx,"POPUP_IDX_"+idx,str);
			st.focus();
		}
	}
/**
 *
 * AJAX(Asynchronous JavaScript and XML) 유틸리티
 *
 **/
var sc_ajax = function(fn_callback, v_data, v_method, v_url, v_async, v_refresh, v_user, v_password) {
	this.XMLHttp = this.createHttpRequest();
	if (!this.ck_made_XMLHttp()) {
		return false;
	}
	if (v_url) {
		this.sendRequest(fn_callback, v_data, v_method, v_url, v_async, v_refresh, v_user, v_password);
	}
}
sc_ajax.prototype.ck_made_XMLHttp = function() {
	if (!this.XMLHttp) {
		return false;
	} else {
		return true;
	}
}
sc_ajax.prototype.createHttpRequest = function() {
	if (!document.getElementById) {
		return null;
	}
	if (window.ActiveXObject) {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				return new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e2) {
				return null;
			}
		}
	} else if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else {
		return null;
	}
}

sc_ajax.prototype.sendRequest = function(fn_callback, v_data, v_method, v_url, v_async, v_refresh, v_user, v_password) {
	if (!this.ck_made_XMLHttp) return false;
	if (v_refresh == null) v_refresh = false;
	if (v_refresh || v_method.toUpperCase() == 'GET'){
		if(v_url.indexOf('?') == -1){
			v_url += "?";
		}else{
			v_url += "&";
		}
	}
	var times = (new Date()).getTime().toString();
	if (v_refresh) v_url += '_tt' + times.substr(5) + '=' + times;
	var XMLHttp = this.XMLHttp;
	if (v_async == undefined) v_async = true;

	if (window.XMLHttpRequest && !window.document.all) {
		XMLHttp.onload = function() {
			fn_callback(XMLHttp);
		}
	} else {
		XMLHttp.onreadystatechange = function() {
			if (XMLHttp.readyState == 4) {
				fn_callback(XMLHttp);
			}
		}
	}
	v_data = this.uniEncode(v_data);
	this.XMLHttp.open(v_method, v_url, v_async, v_user, v_password);
	this.setEncHeader();
	this.XMLHttp.send(v_data);
}
sc_ajax.prototype.uniEncode = function(v_data) {
	if (!this.ck_made_XMLHttp) return false;
	if (v_data != null && v_data != '') {
		var encdata = '';
		if(typeof v_data == 'string'){
			var v_data_a = v_data.split("&");
			for (i = 0; i < v_data_a.length; i++) {
				var dataq = v_data_a[i].split('=');
				encdata += (encdata!=''?'&':'') + encodeURIComponent(dataq[0]) + '=' + encodeURIComponent(dataq[1]);
			}
		}else if(typeof v_data == 'object'){
			for(var k in v_data){
				encdata += (encdata!=''?'&':'') + encodeURIComponent(k) + '=' + encodeURIComponent(v_data[k]);
			}
		}
	} else {
		encdata = "";
	}
	return encdata;
}
sc_ajax.prototype.setEncHeader = function() {
	if (!this.ck_made_XMLHttp) return false;
	var contentTypeUrlenc = 'application/x-www-form-urlencoded; charset=EUC-KR';
	var contentTypeUrlenc_multipart = 'multipart/form-data; charset=EUC-KR';
	if (!window.opera) {
		this.XMLHttp.setRequestHeader('Content-Type', contentTypeUrlenc);
		//this.XMLHttp.setRequestHeader('User-Agent', navigator.userAgent);
		this.XMLHttp.setRequestHeader('Accept-Language', "ko");
	} else {
		if ((typeof this.XMLHttp.setRequestHeader) == 'function')
			this.XMLHttp.setRequestHeader('Content-Type', contentTypeUrlenc);
			//this.XMLHttp.setRequestHeader('User-Agent', navigator.userAgent);
			this.XMLHttp.setRequestHeader('Accept-Language', "ko");
	}
}
function getObjAbsPos(obj){
	var tmp_obj;
	var curLeft = 0;
	var curTop = 0;
	tmp_obj = obj;
	if(tmp_obj.offsetParent){
		while(tmp_obj.offsetParent){
			curLeft += tmp_obj.offsetLeft;
			curTop += tmp_obj.offsetTop;
			tmp_obj = tmp_obj.offsetParent;
		}
	}else{
		curLeft = +tmp_obj.offsetLeft;
		curTop = +tmp_obj.offsetTop;
	}
	var ret = { 'left':curLeft, 'top':curTop, 'width':obj.offsetWidth, 'height':obj.offsetHeight };
	return ret;
};
function number_input_start(o){
	o.style.textAlign = 'left';
	o.style.fontWeight = 'bold';
	var v = parseInt(o.value.replace(/,/g, ''));
	if(isNaN(v)) v = '';
	o.value = v;
}
function number_input_end(o){
	o.style.textAlign = 'right';
	o.style.fontWeight = 'normal';
	var v = parseInt(o.value);
	if(isNaN(v)) v = '';
	o.value = number_format(v);
}
var Drag = {
	obj : null,
	init : function(o, oRoot, minX, maxX, minY, maxY, bSwapHorzRef, bSwapVertRef, fXMapper, fYMapper){
		o.onmousedown   = Drag.start;

		o.hmode         = bSwapHorzRef ? false : true ;
		o.vmode         = bSwapVertRef ? false : true ;

		o.root = oRoot && oRoot != null ? oRoot : o ;

		if (o.hmode  && isNaN(parseInt(o.root.style.left  ))) o.root.style.left   = "0px";
		if (o.vmode  && isNaN(parseInt(o.root.style.top   ))) o.root.style.top    = "0px";
		if (!o.hmode && isNaN(parseInt(o.root.style.right ))) o.root.style.right  = "0px";
		if (!o.vmode && isNaN(parseInt(o.root.style.bottom))) o.root.style.bottom = "0px";

		o.minX  = typeof minX != 'undefined' ? minX : null;
		o.minY  = typeof minY != 'undefined' ? minY : null;
		o.maxX  = typeof maxX != 'undefined' ? maxX : null;
		o.maxY  = typeof maxY != 'undefined' ? maxY : null;

		o.xMapper = fXMapper ? fXMapper : null;
		o.yMapper = fYMapper ? fYMapper : null;

		o.root.onDragStart  = new Function();
		o.root.onDragEnd    = new Function();
		o.root.onDrag       = new Function();
	},
	start : function(e){
		var o = Drag.obj = this;
		e = Drag.fixE(e);
		var y = parseInt(o.vmode ? o.root.style.top  : o.root.style.bottom);
		var x = parseInt(o.hmode ? o.root.style.left : o.root.style.right );
		o.root.onDragStart(x, y);

		o.lastMouseX    = e.clientX;
		o.lastMouseY    = e.clientY;

		if (o.hmode) {
			if (o.minX != null) o.minMouseX = e.clientX - x + o.minX;
			if (o.maxX != null) o.maxMouseX = o.minMouseX + o.maxX - o.minX;
		} else {
			if (o.minX != null) o.maxMouseX = -o.minX + e.clientX + x;
			if (o.maxX != null) o.minMouseX = -o.maxX + e.clientX + x;
		}

		if (o.vmode) {
			if (o.minY != null) o.minMouseY = e.clientY - y + o.minY;
			if (o.maxY != null) o.maxMouseY = o.minMouseY + o.maxY - o.minY;
		} else {
			if (o.minY != null) o.maxMouseY = -o.minY + e.clientY + y;
			if (o.maxY != null) o.minMouseY = -o.maxY + e.clientY + y;
		}

		document.onmousemove    = Drag.drag;
		document.onmouseup      = Drag.end;

		return false;
	},
	drag : function(e){
		e = Drag.fixE(e);
		var o = Drag.obj;

		var ey  = e.clientY;
		var ex  = e.clientX;
		var y = parseInt(o.vmode ? o.root.style.top  : o.root.style.bottom);
		var x = parseInt(o.hmode ? o.root.style.left : o.root.style.right );
		var nx, ny;

		if (o.minX != null) ex = o.hmode ? Math.max(ex, o.minMouseX) : Math.min(ex, o.maxMouseX);
		if (o.maxX != null) ex = o.hmode ? Math.min(ex, o.maxMouseX) : Math.max(ex, o.minMouseX);
		if (o.minY != null) ey = o.vmode ? Math.max(ey, o.minMouseY) : Math.min(ey, o.maxMouseY);
		if (o.maxY != null) ey = o.vmode ? Math.min(ey, o.maxMouseY) : Math.max(ey, o.minMouseY);

		nx = x + ((ex - o.lastMouseX) * (o.hmode ? 1 : -1));
		ny = y + ((ey - o.lastMouseY) * (o.vmode ? 1 : -1));

		if (o.xMapper)      nx = o.xMapper(y)
		else if (o.yMapper) ny = o.yMapper(x)

		Drag.obj.root.style[o.hmode ? "left" : "right"] = nx + "px";
		Drag.obj.root.style[o.vmode ? "top" : "bottom"] = ny + "px";
		Drag.obj.lastMouseX = ex;
		Drag.obj.lastMouseY = ey;

		Drag.obj.root.onDrag(nx, ny);
		return false;
	},
	end : function(){
		document.onmousemove = null;
		document.onmouseup   = null;
		Drag.obj.root.onDragEnd(	parseInt(Drag.obj.root.style[Drag.obj.hmode ? "left" : "right"]), 
									parseInt(Drag.obj.root.style[Drag.obj.vmode ? "top" : "bottom"]));
		Drag.obj = null;
	},
	fixE : function(e){
		if (typeof e == 'undefined') e = window.event;
		if (typeof e.layerX == 'undefined') e.layerX = e.offsetX;
		if (typeof e.layerY == 'undefined') e.layerY = e.offsetY;
		return e;
	}
};
function sc_addEvent(o, evt, f){
	if(o.addEventListener){
		o.addEventListener(evt, f, false);
	}else if(o.attachEvent){
		o.attachEvent("on" + evt, f);
	}
}

function phoneNumber(el) {
	if(event.keyCode == 8) return;
	el.value = _phoneNumber(el.value);
}
function _phoneNumber(value) {

	value = value.replace(/[^0-9]/g, "")
	var pattern = new RegExp("^(02|[0-9]{3})([0-9]{" + (value.length <= (/^02/.test(value) ? 9 : 10) ? 3 : 4) + "})?([0-9]{4})?");
	var arr = value.replace(pattern, "$1-$2-$3").replace(/--/g, "-").split("-");
	if(arr[2]) arr[2] = arr[2].substring(0, 4);
	return arr.join("-", arr);
}
function ssNumber(el) {
	el.value = _ssNumber(el.value);
}
function _ssNumber(value) {
	value = value.replace(/[^0-9]/g, "")
	var pattern = new RegExp("^([0-9]{6})([0-9]{7})?");
	var arr = value.replace(pattern, "$1-$2").replace(/--/g, "-").split("-");
	if(arr[1]) arr[1] = arr[1].substring(0, 7);
	return arr.join("-", arr);
}
function bizNumber(el) {
	el.value = _bizNumber(el.value);
}
function _bizNumber(value) {
	value = value.replace(/[^0-9]/g, "")
	var pattern = new RegExp("^([0-9]{3})([0-9]{2})?([0-9]{5})?");
	var arr = value.replace(pattern, "$1-$2-$3").replace(/--/g, "-").split("-");
	if(arr[2]) arr[2] = arr[2].substring(0, 5);
	return arr.join("-", arr);
}