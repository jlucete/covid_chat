(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(33)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),s=a(6),l=a.n(s),i=a(1),r=a(2),o=a(4),h=a(3),u=(a(13),a(14),function(t){Object(o.a)(a,t);var e=Object(h.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var t=this,e=this.props.chatList.map((function(e,a){return c.a.createElement("div",{key:a,className:"Chat1D-single",onClick:function(){return t.props.chatThreadHandleClick("o",a)}},c.a.createElement("span",{className:"Chat1D-single-writer"},e.writer),c.a.createElement("span",{className:"Chat1D-single-time"},e.time),c.a.createElement("div",{className:"Chat1D-single-chatValue"},e.chatValue))}));return c.a.createElement("div",{className:"Chat1D-layout"},c.a.createElement("div",{className:"Chat1D-title"},"1D \ucc44\ud305\ubc29"),c.a.createElement("div",{className:"Chat1D-container"},c.a.createElement("div",{className:"Chat1D-chatList"},e),c.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(e){t.props.scrollToBottom("o",e)}})))}}]),a}(n.Component)),m=(a(15),function(t){Object(o.a)(a,t);var e=Object(h.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var t=this.props.chatList.map((function(t,e){return c.a.createElement("div",{className:"Chat2D-popup",key:e,style:t.popupStyle},c.a.createElement("div",{className:"Chat2D-popup-writer"},t.writer),c.a.createElement("div",{className:"Chat2D-popup-chatValue"},t.chatValue))}));return c.a.createElement("div",null,t,c.a.createElement("div",{className:"Chat2D-layout"},c.a.createElement("div",{className:"Chat2D-title"},"2D\ucc44\ud305\ubc29")))}}]),a}(n.Component)),d=(a(16),function(t){Object(o.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={notice:"",inputBoxDisplay:"none",buttonValue:"\uc218\uc815"},n}return Object(r.a)(a,[{key:"blackboardDoFix",value:function(){this.setState({inputBoxDisplay:"block"})}},{key:"blackboardDoSubmit",value:function(){"\uc801\uc6a9"===this.state.buttonValue?this.setState({inputBoxDisplay:"none",buttonValue:"\uc218\uc815"}):this.setState({inputBoxDisplay:"block",buttonValue:"\uc801\uc6a9"})}},{key:"blackboardDoChange",value:function(t){var e=t.target.value;this.setState({notice:e})}},{key:"render",value:function(){var t=this,e={display:this.state.inputBoxDisplay};return c.a.createElement("div",{className:"Blackboard-layout"},c.a.createElement("div",{className:"Blackboard-title"},"\uacf5\uc9c0\uc0ac\ud56d"),c.a.createElement("button",{className:"Blackboard-updateButton",onClick:function(){return t.blackboardDoSubmit()}},this.state.buttonValue),c.a.createElement("pre",{className:"Blackboard-notice"},this.state.notice),c.a.createElement("textarea",{className:"Blackboard-inputBox",value:this.state.notice,onChange:function(e){return t.blackboardDoChange(e)},style:e}))}}]),a}(n.Component)),p=(a(17),function(t){Object(o.a)(a,t);var e=Object(h.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var t=this,e=this.props.chatList,a=this.props.chatTopic?c.a.createElement("div",{className:"ChatThread-topic"},c.a.createElement("span",{className:"Chat1D-single-writer"},this.props.chatTopic.writer),c.a.createElement("span",{className:"Chat1D-single-time"},this.props.chatTopic.time),c.a.createElement("div",{className:"Chat1D-single-chatValue"},this.props.chatTopic.chatValue)):c.a.createElement("div",null),n=e.map((function(t,e){return c.a.createElement("div",{key:e,className:"ChatThread-single"},c.a.createElement("span",{className:"Chat1D-single-writer"},t.writer),c.a.createElement("span",{className:"Chat1D-single-time"},t.time),c.a.createElement("div",{className:"Chat1D-single-chatValue"},t.chatValue))}));return c.a.createElement("div",{className:"ChatThread-layout"},a,c.a.createElement("div",{className:"ChatThread-container"},c.a.createElement("div",{className:"ChatThread-chatList"},n),c.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(e){t.props.scrollToBottom("t",e)}})))}}]),a}(n.Component)),v=a(7),f=a.n(v),D=(a(31),function(t){Object(o.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={videoID:"",playerStyle:{display:""}},n}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"Content-layout"},c.a.createElement("div",{className:"Content-player",style:this.props.playerStyle},c.a.createElement(f.a,{videoId:this.props.videoID,playbackState:"unstarted",configuration:{showinfo:0,controls:1,origin:"http://localhost:3000"}})))}}]),a}(n.Component)),b=(a(32),function(t){Object(o.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).Change=function(){n.setState({d:new Date})},n.state={d:new Date},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.timeID=setInterval((function(){return t.Change()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeID)}},{key:"addZeros",value:function(t){return t<10?"0"+t:t}},{key:"render",value:function(){var t=this.state.d,e=t.getFullYear()+"/"+t.getMonth()+"/"+t.getDate()+" "+["SUN","MON","TUE","WED","THU","FRI","SAT"][t.getDay()],a=" AM",n=this.addZeros(t.getHours()),s=this.addZeros(t.getMinutes()),l=this.addZeros(t.getSeconds());return n>=12&&(a=" PM",n=this.addZeros(n-12)),l>=50&&(l=c.a.createElement("span",{color:"#de1951"},l)),c.a.createElement("div",{className:"Clock-layout"},c.a.createElement("div",{className:"Clock-date"},e),c.a.createElement("span",{className:"Clock-time"},n,":",s,":",l,c.a.createElement("span",{className:"Clock-ampm"},a)))}}]),a}(n.Component)),y=function(t){Object(o.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={chatValue:"",chatThreadValue:"",chatThreadIndex:null,chatThreadList:[],chat2DList:[],chat1DList:[],remove:0,scrollIndex:"o",isBreakTime:!1,commandValue:"",videoID:"hF_lIqruUeQ",playerStyle:{display:"block"},classTitle:"1\ud559\ub144 1\ubc18"},n}return Object(r.a)(a,[{key:"handleReadData",value:function(t){if("break"===t)window.alert("\uc26c\ub294\uc2dc\uac04\uc785\ub2c8\ub2e4"),this.setState({classTitle:"\uc26c\ub294 \uc26c\uac04"});else if("!break"===t)window.alert("\uc218\uc5c5\uc2dc\uac04\uc785\ub2c8\ub2e4"),this.setState({classTitle:"\uc218\ud559"});else if("http"===t.substring(0,4)){var e=t.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(null!=e){this.setState({videoID:e[1],playerStyle:{display:"block"}}),window.alert("URL\uc774 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4")}else window.alert("\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 URL\uc785\ub2c8\ub2e4.")}else"refresh"===t&&this.setState({chatValue:"",chatThreadValue:"",chatThreadIndex:null,chatThreadList:[],chat2DList:[],chat1DList:[],remove:0,scrollIndex:"o",isBreakTime:!1,commandValue:"",videoID:"",playerStyle:{display:"none"}})}},{key:"chat1DdoChange",value:function(t){var e=t.target.value;this.setState({chatValue:e})}},{key:"chat1DdoSubmit",value:function(t){var e=this,a=this.state.chat2DList,n=this.state.chatValue;if("!"===n[0]){var c=this.state.chat1DList,s=new Date,l=s.getSeconds(),i=s.getMinutes(),r=s.getHours();l<10&&(l="0"+l),i<10&&(i="0"+i),r<10&&(r="0"+r);var o={time:s.getHours()+":"+i+":"+l,writer:"\ub098",chatValue:n.slice(1,n.length),chatThreadList:[]};c.empty?this.setState({chat1DList:[o]}):this.setState({chat1DList:c.concat(o)}),this.setState({scrollIndex:"o"})}else{if(n){var h={popupStyle:{left:69+16*Math.random()+"vw",top:11+48*Math.random()+"vh",width:40+15*n.length+"px"},writer:"\ub098",chatValue:n};if(a)this.setState({chat2DList:a.concat(h)});else{var u=[h];this.setState({chat2DList:u})}setTimeout((function(){e.setState((function(t){return{remove:t.remove+1}}))}),4e3)}this.setState({scrollIndex:"0"})}this.setState({chatValue:""}),t.preventDefault()}},{key:"chatThreadHandleClick",value:function(t,e){if("o"===t){var a=this.state.chat1DList[e].chatThreadList;this.setState({chatThreadIndex:e,chatThreadList:a,scrollIndex:"t"})}}},{key:"chatThreadDoChange",value:function(t){var e=t.target.value;this.setState({chatThreadValue:e})}},{key:"chatThreadDoSubmit",value:function(t){var e=this.state.chatThreadIndex,a=this.state.chatThreadValue;if(null!==e&&a){var n=this.state.chatThreadList,c=this.state.chat1DList.slice(),s=new Date,l=s.getSeconds(),i=s.getMinutes(),r=s.getHours();l<10&&(l="0"+l),i<10&&(i="0"+i),r<10&&(r="0"+r);var o={time:s.getHours()+":"+i+":"+l,writer:"\ub098",chatValue:a};n?(c[e].chatThreadList=c[e].chatThreadList.concat(o),this.setState({chat1DList:c,chatThreadList:n.concat(o),chatThreadValue:""})):(c[e].chatThreadList=[o],this.setState({chat1DList:c,chatThreadList:[o],chatThreadValue:""}))}this.setState({chatThreadValue:"",scrollIndex:"t"}),t.preventDefault()}},{key:"componentDidUpdate",value:function(){var t=this.state.chat2DList,e=this.state.remove;0!==e&&this.setState({chat2DList:t.slice(1,t.length),remove:e-1})}},{key:"scrollToBottom",value:function(t,e){e&&this.state.scrollIndex===t&&e.scrollIntoView({behavior:"smooth"})}},{key:"commandDoChange",value:function(t){var e=t.target.value;this.setState({commandValue:e})}},{key:"commandDoSubmit",value:function(t){this.handleReadData(this.state.commandValue),this.setState({commandValue:""}),t.preventDefault()}},{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"App"},c.a.createElement("span",{className:"App-clock"},c.a.createElement(b,null)),c.a.createElement("span",{className:"App-classTitle"},this.state.classTitle),c.a.createElement("span",{className:"App-Command"},c.a.createElement("form",{onSubmit:function(e){return t.commandDoSubmit(e)}},c.a.createElement("input",{type:"text",className:"AppCommandInput",value:this.state.commandValue,onChange:function(e){return t.commandDoChange(e)},placeholder:"\uba85\ub839\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}))),c.a.createElement("div",{className:"App-Blackboard"},c.a.createElement(d,null)),c.a.createElement("div",{className:"App-content"},c.a.createElement(D,{videoID:this.state.videoID,playerStyle:this.state.playerStyle})),c.a.createElement("div",{className:"App-ChatThread"},c.a.createElement(p,{chatList:this.state.chatThreadList,chatTopic:this.state.chat1DList[this.state.chatThreadIndex],scrollToBottom:function(e,a){return t.scrollToBottom(e,a)}})),c.a.createElement("div",{className:"App-Chat2D"},c.a.createElement(m,{chatList:this.state.chat2DList})),c.a.createElement("div",{className:"App-Chat1D"},c.a.createElement(u,{chatList:this.state.chat1DList,chatThreadHandleClick:function(e,a){return t.chatThreadHandleClick(e,a)},scrollToBottom:function(e,a){return t.scrollToBottom(e,a)}})),c.a.createElement("div",{className:"App-ChatInput"},c.a.createElement("form",{onSubmit:function(e){return t.chat1DdoSubmit(e)}},c.a.createElement("input",{type:"text",className:"chatInput",value:this.state.chatValue,onChange:function(e){return t.chat1DdoChange(e)},placeholder:"\ucc44\ud305\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}))),c.a.createElement("div",{className:"App-ChatThreadInput"},c.a.createElement("form",{onSubmit:function(e){return t.chatThreadDoSubmit(e)}},c.a.createElement("input",{type:"text",className:"chatThreadInput",value:this.state.chatThreadValue,onChange:function(e){return t.chatThreadDoChange(e)},placeholder:"\ucc44\ud305\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}))))}}]),a}(n.Component);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.50eea9a1.chunk.js.map