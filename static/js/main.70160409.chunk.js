(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(33)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(6),i=a.n(c),l=a(1),r=a(2),o=a(4),h=a(3),u=(a(13),a(14),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props.chatList.map((function(t,a){return s.a.createElement("div",{key:a,className:"Chat1D-single",onClick:function(){return e.props.chatThreadHandleClick("o",a)}},s.a.createElement("span",{className:"Chat1D-single-writer"},t.writer),s.a.createElement("span",{className:"Chat1D-single-time"},t.time),s.a.createElement("div",{className:"Chat1D-single-chatValue"},t.chatValue))}));return s.a.createElement("div",{className:"Chat1D-layout"},s.a.createElement("div",{className:"Chat1D-title"},"1D \ucc44\ud305\ubc29"),s.a.createElement("div",{className:"Chat1D-container"},s.a.createElement("div",{className:"Chat1D-chatList"},t),s.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.props.scrollToBottom("o",t)}})))}}]),a}(n.Component)),m=(a(15),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.chatList.map((function(e,t){return s.a.createElement("div",{className:"Chat2D-popup",key:t,style:e.popupStyle},s.a.createElement("div",{className:"Chat2D-popup-writer"},e.writer),s.a.createElement("div",{className:"Chat2D-popup-chatValue"},e.chatValue))}));return s.a.createElement("div",null,e,s.a.createElement("div",{className:"Chat2D-layout"},s.a.createElement("div",{className:"Chat2D-title"},"2D\ucc44\ud305\ubc29")))}}]),a}(n.Component)),d=(a(16),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={notice:"",inputBoxDisplay:"none",buttonValue:"\uc218\uc815"},n}return Object(r.a)(a,[{key:"blackboardDoFix",value:function(){this.setState({inputBoxDisplay:"block"})}},{key:"blackboardDoSubmit",value:function(){"\uc801\uc6a9"===this.state.buttonValue?this.setState({inputBoxDisplay:"none",buttonValue:"\uc218\uc815"}):this.setState({inputBoxDisplay:"block",buttonValue:"\uc801\uc6a9"})}},{key:"blackboardDoChange",value:function(e){var t=e.target.value;this.setState({notice:t})}},{key:"render",value:function(){var e=this,t={display:this.state.inputBoxDisplay};return s.a.createElement("div",{className:"Blackboard-layout"},s.a.createElement("div",{className:"Blackboard-title"},"\uacf5\uc9c0\uc0ac\ud56d"),s.a.createElement("button",{className:"Blackboard-updateButton",onClick:function(){return e.blackboardDoSubmit()}},this.state.buttonValue),s.a.createElement("pre",{className:"Blackboard-notice"},this.state.notice),s.a.createElement("textarea",{className:"Blackboard-inputBox",value:this.state.notice,onChange:function(t){return e.blackboardDoChange(t)},style:t}))}}]),a}(n.Component)),p=(a(17),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props.chatList,a=this.props.chatTopic?s.a.createElement("div",{className:"ChatThread-topic"},s.a.createElement("span",{className:"Chat1D-single-writer"},this.props.chatTopic.writer),s.a.createElement("span",{className:"Chat1D-single-time"},this.props.chatTopic.time),s.a.createElement("div",{className:"Chat1D-single-chatValue"},this.props.chatTopic.chatValue)):s.a.createElement("div",null),n=t.map((function(e,t){return s.a.createElement("div",{key:t,className:"ChatThread-single"},s.a.createElement("span",{className:"Chat1D-single-writer"},e.writer),s.a.createElement("span",{className:"Chat1D-single-time"},e.time),s.a.createElement("div",{className:"Chat1D-single-chatValue"},e.chatValue))}));return s.a.createElement("div",{className:"ChatThread-layout"},a,s.a.createElement("div",{className:"ChatThread-container"},s.a.createElement("div",{className:"ChatThread-chatList"},n),s.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.props.scrollToBottom("t",t)}})))}}]),a}(n.Component)),v=a(7),f=a.n(v),D=(a(31),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={videoID:"",playerStyle:{display:""}},n}return Object(r.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.videoID!==e.videoID}},{key:"render",value:function(){return s.a.createElement("div",{className:"Content-layout"},s.a.createElement("div",{className:"Content-player",style:this.props.playerStyle},s.a.createElement(f.a,{videoId:this.props.videoID,playbackState:"playing",configuration:{showinfo:0,controls:1,origin:"http://localhost:3000"}})))}}]),a}(n.Component)),y=(a(32),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).Change=function(){n.setState({d:new Date})},n.state={d:new Date},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timeID=setInterval((function(){return e.Change()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeID)}},{key:"addZeros",value:function(e){return e<10?"0"+e:e}},{key:"render",value:function(){var e=this.state.d,t=e.getFullYear()+"/"+e.getMonth()+"/"+e.getDate()+" "+["SUN","MON","TUE","WED","THU","FRI","SAT"][e.getDay()],a=" AM",n=this.addZeros(e.getHours()),c=this.addZeros(e.getMinutes()),i=this.addZeros(e.getSeconds());return n>=12&&(a=" PM",n=this.addZeros(n-12)),i>=50&&(i=s.a.createElement("span",{color:"#de1951"},i)),s.a.createElement("div",{className:"Clock-layout"},s.a.createElement("div",{className:"Clock-date"},t),s.a.createElement("span",{className:"Clock-time"},n,":",c,":",i,s.a.createElement("span",{className:"Clock-ampm"},a)))}}]),a}(n.Component)),b=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={chatValue:"",chatThreadValue:"",chatThreadIndex:null,chatThreadList:[],chat2DList:[],chat1DList:[],remove:0,scrollIndex:"o",isBreakTime:!1,commandValue:"",videoID:"hF_lIqruUeQ",playerStyle:{display:"block"},classTitle:"1\ud559\ub144 1\ubc18",isPlayerRendered:!1,userName:"",isLogin:!1},n}return Object(r.a)(a,[{key:"handleReadData",value:function(e){if("break"===e)window.alert("\uc26c\ub294\uc2dc\uac04\uc785\ub2c8\ub2e4"),this.setState({classTitle:"\uc26c\ub294 \uc26c\uac04",isBreakTime:!0});else if("!break"===e)window.alert("\uc218\uc5c5\uc2dc\uac04\uc785\ub2c8\ub2e4"),this.setState({classTitle:"\uc218\ud559",isBreakTime:!1});else if("http"===e.substring(0,4)){var t=e.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(null!=t){this.setState({videoID:t[1],playerStyle:{display:"block"}}),window.alert("URL\uc774 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4")}else window.alert("\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 URL\uc785\ub2c8\ub2e4.")}else"refresh"===e&&this.setState({chatValue:"",chatThreadValue:"",chatThreadIndex:null,chatThreadList:[],chat2DList:[],chat1DList:[],remove:0,scrollIndex:"o",isBreakTime:!1,commandValue:"",videoID:"",playerStyle:{display:"none"},classTitle:"1\ud559\ub144 1\ubc18",isPlayerRendered:!1,userName:"",isLogin:!1})}},{key:"chat1DdoChange",value:function(e){var t=e.target.value;this.setState({chatValue:t})}},{key:"chat1DdoSubmit",value:function(e){var t=this,a=this.state.chat2DList,n=this.state.chatValue;if("!"===n[0]){var s=this.state.chat1DList,c=new Date,i=c.getSeconds(),l=c.getMinutes(),r=c.getHours();i<10&&(i="0"+i),l<10&&(l="0"+l),r<10&&(r="0"+r);var o={time:c.getHours()+":"+l+":"+i,writer:this.state.userName,chatValue:n.slice(1,n.length),chatThreadList:[]};s.empty?this.setState({chat1DList:[o]}):this.setState({chat1DList:s.concat(o)}),this.setState({scrollIndex:"o"})}else{if(n){var h={popupStyle:{left:69+16*Math.random()+"vw",top:11+48*Math.random()+"vh",width:40+15*n.length+"px"},writer:this.state.userName,chatValue:n};if(a)this.setState({chat2DList:a.concat(h)});else{var u=[h];this.setState({chat2DList:u})}setTimeout((function(){t.setState((function(e){return{remove:e.remove+1}}))}),4e3)}this.setState({scrollIndex:"0"})}this.setState({chatValue:""}),e.preventDefault()}},{key:"chatThreadHandleClick",value:function(e,t){if("o"===e){var a=this.state.chat1DList[t].chatThreadList;this.setState({chatThreadIndex:t,chatThreadList:a,scrollIndex:"t"})}}},{key:"chatThreadDoChange",value:function(e){var t=e.target.value;this.setState({chatThreadValue:t})}},{key:"chatThreadDoSubmit",value:function(e){var t=this.state.chatThreadIndex,a=this.state.chatThreadValue;if(null!==t&&a){var n=this.state.chatThreadList,s=this.state.chat1DList.slice(),c=new Date,i=c.getSeconds(),l=c.getMinutes(),r=c.getHours();i<10&&(i="0"+i),l<10&&(l="0"+l),r<10&&(r="0"+r);var o={time:c.getHours()+":"+l+":"+i,writer:this.state.userName,chatValue:a};n?(s[t].chatThreadList=s[t].chatThreadList.concat(o),this.setState({chat1DList:s,chatThreadList:n.concat(o),chatThreadValue:""})):(s[t].chatThreadList=[o],this.setState({chat1DList:s,chatThreadList:[o],chatThreadValue:""}))}this.setState({chatThreadValue:"",scrollIndex:"t"}),e.preventDefault()}},{key:"componentDidUpdate",value:function(){var e=this.state.chat2DList,t=this.state.remove;0!==t&&this.setState({chat2DList:e.slice(1,e.length),remove:t-1})}},{key:"scrollToBottom",value:function(e,t){t&&this.state.scrollIndex===e&&t.scrollIntoView({behavior:"smooth"})}},{key:"commandDoChange",value:function(e){var t=e.target.value;this.setState({commandValue:t})}},{key:"commandDoSubmit",value:function(e){this.handleReadData(this.state.commandValue),this.setState({commandValue:""}),e.preventDefault()}},{key:"loginDoChange",value:function(e){var t=e.target.value;this.setState({userName:t})}},{key:"loginDoSubmit",value:function(e){""===this.state.userName?window.alert("\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc774\ub984\uc785\ub2c8\ub2e4"):this.setState({isLogin:!0}),e.preventDefault()}},{key:"render",value:function(){var e=this;return this.state.isLogin?s.a.createElement("div",{className:"App"},s.a.createElement("span",{className:"App-clock"},s.a.createElement(y,null)),s.a.createElement("span",{className:"App-classTitle"},this.state.classTitle),s.a.createElement("span",{className:"App-Command"},s.a.createElement("form",{onSubmit:function(t){return e.commandDoSubmit(t)}},s.a.createElement("input",{type:"text",className:"AppCommandInput",value:this.state.commandValue,onChange:function(t){return e.commandDoChange(t)},placeholder:"\uba85\ub839\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}))),s.a.createElement("div",{className:"App-Blackboard"},s.a.createElement(d,null)),s.a.createElement("div",{className:"App-content"},s.a.createElement(D,{videoID:this.state.videoID,playerStyle:this.state.playerStyle})),s.a.createElement("div",{className:"App-ChatThread"},s.a.createElement(p,{chatList:this.state.chatThreadList,chatTopic:this.state.chat1DList[this.state.chatThreadIndex],scrollToBottom:function(t,a){return e.scrollToBottom(t,a)}})),s.a.createElement("div",{className:"App-Chat2D"},s.a.createElement(m,{chatList:this.state.chat2DList})),s.a.createElement("div",{className:"App-Chat1D"},s.a.createElement(u,{chatList:this.state.chat1DList,chatThreadHandleClick:function(t,a){return e.chatThreadHandleClick(t,a)},scrollToBottom:function(t,a){return e.scrollToBottom(t,a)}})),s.a.createElement("div",{className:"App-ChatInput"},s.a.createElement("form",{onSubmit:function(t){return e.chat1DdoSubmit(t)}},s.a.createElement("input",{type:"text",className:"chatInput",value:this.state.chatValue,onChange:function(t){return e.chat1DdoChange(t)},placeholder:"\ucc44\ud305\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}))),s.a.createElement("div",{className:"App-ChatThreadInput"},s.a.createElement("form",{onSubmit:function(t){return e.chatThreadDoSubmit(t)}},s.a.createElement("input",{type:"text",className:"chatThreadInput",value:this.state.chatThreadValue,onChange:function(t){return e.chatThreadDoChange(t)},placeholder:"\ucc44\ud305\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"})))):s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"App-loginTitle"},"\uc628\ub77c\uc778 \uc6f9 \uad50\uc2e4"),s.a.createElement("span",{className:"App-loginInput"},s.a.createElement("form",{onSubmit:function(t){return e.loginDoSubmit(t)}},s.a.createElement("input",{type:"text",className:"App-loginInputBox",value:this.state.userName,onChange:function(t){return e.loginDoChange(t)},placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}))))}}]),a}(n.Component);i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.70160409.chunk.js.map