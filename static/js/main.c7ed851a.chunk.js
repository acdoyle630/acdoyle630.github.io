(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n.p+"static/media/Adam_Doyle_resume.19fcb1bb.pdf"},5312:function(e,t,n){e.exports=n(5458)},5325:function(e,t,n){},5455:function(e,t,n){},5458:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(24),r=n.n(o),l=n(12),c=n(13),s=function(e){return{type:"SET_SCREEN_SIZE",screenSize:e}},p=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"desktop",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_SCREEN_SIZE":return(e=n.screenSize)<600?"mobile":e>=600&&e<1e3?"tablet":"desktop";default:return t}},d=function(){return{type:"OPEN_ABOUT"}},m=function(){return{type:"CLOSE_ABOUT"}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"OPEN_ABOUT":return!0;case"CLOSE_ABOUT":return!1;default:return e}},h=function(e){return{type:"SELECT_COMPANY",company:e}},b={WALMART:"Walmart Labs",CODING_WITH_KIDS:"Coding With Kids"},g=b.WALMART,f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_COMPANY":return t.company;default:return e}},y=function(){return{type:"OPEN_CONTACT_MODAL"}},v=function(){return{type:"CLOSE_CONTACT_MODAL"}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"OPEN_CONTACT_MODAL":return!0;case"CLOSE_CONTACT_MODAL":return!1;default:return e}},x=n(25),C=n.n(x),S=n(32),O=n(87),j={serviceId:"gmail",templateId:"template_QlwfBWPE",userId:"user_6NdIceWS3QBGkrEOHXYY1"},k=function(e){return function(){var t=Object(S.a)(C.a.mark(function t(n,a){var i;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n(w()),i={to_name:"Adam",from_name:"".concat(e.name," email: ").concat(e.email),message_html:e.message},O.send(j.serviceId,j.templateId,i,j.userId).then(function(e){n(T()),console.log("SUCCESS!",e.status,e.text)},function(e){n(z()),console.log("FAILED...",e)});case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},w=function(){return{type:"EMAIL_SENT"}},T=function(){return{type:"EMAIL_RECEIVED"}},z=function(){return{type:"EMAIL_FAILED"}},I={emailInFlight:!1,emailReceived:!1,emailFailed:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;switch((arguments.length>1?arguments[1]:void 0).type){case"EMAIL_SENT":return Object.assign({},e,{emailInFlight:!0,emailReceived:!1,emailFailed:!1});case"EMAIL_RECEIVED":return Object.assign({},e,{emailInFlight:!1,emailReceived:!0,emailFailed:!1});case"EMAIL_FAILED":return Object.assign({},e,{emailInFlight:!1,emailReceived:!1,emailFailed:!0});default:return e}},D=Object(c.c)({screenSize:p,aboutOpen:u,selectedCompany:f,contactModalIsOpen:E,emailStatus:A}),M=n(5460),H=n(5461),B=(n(5325),n(6)),R=n(7),L=n(9),_=n(8),W=n(10),N=n(88),F=n.n(N),P=n(89),U=n.n(P),K=n(36),G=n.n(K),J=n(45),q=n(33),X=n.n(q),Y={background:"#2A2A2A",white:"#E5E5E5",grey:"#848586",blue:"#16ADC2",primary:"#401786",secondary:"#9880C1",third:"#38E5F2"},Q={navBar:{desktop:{cursor:"pointer",height:"11vh",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:Y.background,position:"fixed",width:"100vw",marginTop:"-100px"},tablet:{cursor:"pointer",height:"11vh",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:Y.background,position:"fixed",width:"100vw",marginTop:"-100px"},mobile:{cursor:"pointer",height:"11vh",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:Y.background,position:"fixed",width:"100vw",marginTop:"-100px"}},logo:{desktop:{height:"40px",color:Y.white,marginLeft:"203px"},tablet:{height:"40px",color:Y.white},mobile:{height:"40px",color:Y.white}},paths:{display:"flex",flexDirection:"row",path:{marginRight:"30px",cursor:"pointer",color:Y.white}},hamburger:{color:Y.white},resumeLink:{textDecoration:"none",color:Y.white,border:"1px solid ".concat(Y.white),width:"107px",height:"40px",boxSizing:"border-box",borderRadius:"5px",padding:"3px",mobile:{textDecoration:"none",color:"black"}}},V={ABOUT:"about",EXPERIENCE:"experience",CONTACT:"contact",HOME:"home"},Z=function(e){function t(){var e,n;Object(B.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(L.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(i)))).state={anchorEl:null},n.handleClick=function(e){n.setState({anchorEl:e.currentTarget})},n.handleOpenResume=function(){n.handleClose()},n.handleClose=function(){n.setState({anchorEl:null})},n.scroll=function(){var e=Object(S.a)(C.a.mark(function e(t){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.handleClose();case 2:n.props.scrollToElement(t);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(W.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){var e=this,t=this.state.anchorEl;return i.a.createElement("div",null,i.a.createElement(F.a,{onClick:this.handleClick},i.a.createElement(J.b,{style:Q.hamburger})),i.a.createElement(U.a,{id:"simple-menu",anchorEl:t,open:Boolean(t),onClose:this.handleClose},i.a.createElement(G.a,{onClick:function(){e.scroll(V.ABOUT)}}," About "),i.a.createElement(G.a,{onClick:function(){e.scroll(V.EXPERIENCE)}}," Experience "),i.a.createElement(G.a,{onClick:function(){e.scroll(V.CONTACT)}}," Contact "),i.a.createElement(G.a,null,i.a.createElement("a",{href:X.a,target:"_blank",style:Q.resumeLink.mobile},"Resume"))))}}]),t}(i.a.Component),$=n(90),ee=n.n($),te=function(e){return i.a.createElement("div",{style:Q.navBar[e.screenSize]},i.a.createElement("div",null,i.a.createElement("img",{onClick:function(){e.scrollToElement(V.HOME)},style:Q.logo[e.screenSize],src:ee.a,alt:"Adam Doyle"})),"desktop"===e.screenSize||"tablet"===e.screenSize?i.a.createElement("div",{style:Q.paths},i.a.createElement("div",{onClick:function(){e.scrollToElement(V.ABOUT)},style:Q.paths.path}," About "),i.a.createElement("div",{onClick:function(){e.scrollToElement(V.EXPERIENCE)},style:Q.paths.path}," Experience "),i.a.createElement("div",{onClick:function(){e.scrollToElement(V.CONTACT)},style:Q.paths.path}," Contact "),i.a.createElement("div",{style:Q.paths.path},i.a.createElement("a",{href:X.a,target:"_blank",style:Q.resumeLink},"Resume"))):i.a.createElement(Z,e))},ne=function(e){function t(){var e,n;Object(B.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(L.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(i)))).viewResume=function(){window.open("data:application/pdf"+X.a)},n.scrollToElement=function(e){n.props.scrollToMyRef(e)},n}return Object(W.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:V.HOME},i.a.createElement(te,{viewResume:this.viewResume,screenSize:this.props.screenSize,scrollToElement:this.scrollToElement,style:Q.navBarComponent}))}}]),t}(a.Component),ae=Object(l.b)(function(e){return{screenSize:e.screenSize,aboutOpen:e.aboutOpen}},function(e){return Object(c.b)({openAbout:d,closeAbout:m},e)})(ne),ie=n(3),oe={body:{desktop:{marginLeft:"203px",marginRight:"203px",marginBottom:"150px",backgroundColor:Y.background},mobile:{marginBottom:"150px",backgroundColor:Y.background,marginLeft:"10px",marginRight:"10px"}},componentHeader:{color:Y.blue,fontSize:"30px",marginBottom:"15px",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"normal"},componentSubHeader:{color:Y.white,fontFamily:"Helvetica",lineHeight:"normal"}},re=function(e){return{headline:{desktop:Object(ie.a)({},oe.body.desktop,{height:"100vh",marginTop:"100px",marginBottom:"0"}),tablet:Object(ie.a)({},oe.body.mobile,{marginTop:"100px"}),mobile:Object(ie.a)({},oe.body.mobile,{marginTop:"100px"})},intro:{color:Y.grey,fontFamily:"Helvetica",lineHeight:"30px",fontSize:"desktop"===e?"30px":"20px",fontWeight:"bold",marginBottom:"desktop"===e?"10vh":"0vh"},myNameIs:{color:Y.blue,fontSize:"desktop"===e?"100px":"70px",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"normal",marginBottom:"desktop"===e?"10vh":"15px"},wat:{color:Y.white,fontSize:"desktop"===e?"30px":"20px",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"desktop"===e?"50px":"30px",marginBottom:"desktop"===e?"5vh":"15px"},details:{color:Y.grey,fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"30px",fontSize:"desktop"===e?"30px":"20px",marginBottom:"desktop"===e?"10vh":"50px"},contact:{backgroundColor:Y.blue,padding:"5px",width:"110px",display:"flex",justifyContent:"center",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"30px",fontSize:"15px",cursor:"pointer"}}},le={modal:{mobile:{height:"75vh",width:"75vw",margin:"auto"},desktop:{height:"75vh",width:"600px",margin:"auto"},tablet:{height:"75vh",width:"600px",margin:"auto"}},contactContent:{backgroundColor:Y.grey,padding:"3vh",height:"69vh",display:"flex",flexDirection:"column"},header:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"4vh"},cancel:{marginTop:"5px"},headerText:{color:Y.blue,fontSize:"26px",fontWeight:"bold"},input:{height:"5vh",marginBottom:"4vh"},messageInput:{height:"20vh",marginBottom:"4vh"},emailButton:{true:{backgroundColor:"grey",padding:"5px",width:"110px",display:"flex",justifyContent:"center",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"30px",fontSize:"15px",cursor:"pointer"},false:{backgroundColor:Y.blue,padding:"5px",width:"110px",display:"flex",justifyContent:"center",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"30px",fontSize:"15px",cursor:"pointer"}}},ce=n(35),se=n.n(ce),pe={errorModal:{margin:"auto",height:"80px",width:"300px",border:"1px solid black"},content:{backgroundColor:"white"},header:{backgroundColor:"white",padding:"24px 24px 20px 24px",fontSize:"16px",fontWeight:"bold",marginBottom:"4vh"},message:{padding:"0 24px 40px"},ok:{position:"relative",bottom:"8px",left:"252px",color:Y.blue,cursor:"pointer",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"30px",fontSize:"15px"}},de=function(e){function t(){return Object(B.a)(this,t),Object(L.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return i.a.createElement(se.a,{open:this.props.open,style:pe.errorModal},i.a.createElement("div",{style:pe.content},i.a.createElement("div",{style:pe.header},"Cannot send email"),i.a.createElement("div",{style:pe.message},this.props.errorMessage),i.a.createElement("div",{style:pe.ok,onClick:this.props.closeErrorModal},"OK")))}}]),t}(a.Component),me=function(e){function t(e){var n;return Object(B.a)(this,t),(n=Object(L.a)(this,Object(_.a)(t).call(this,e))).handleNameChange=function(e){e.preventDefault(),n.setState({name:e.target.value})},n.handleMessageChange=function(e){e.preventDefault(),n.setState({message:e.target.value})},n.handleEmailChange=function(e){e.preventDefault(),n.setState({email:e.target.value})},n.handleSubjectChange=function(e){e.preventDefault(),n.setState({subject:e.target.value})},n.closeErrorModal=function(){n.setState({error:!1,name:"",message:"",email:"",subject:"",errorMessage:""})},n.checkMail=Object(S.a)(C.a.mark(function e(){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.email||!n.state.message){e.next=6;break}return e.next=3,n.props.sendEmail(n.state);case 3:window.setTimeout(function(){n.props.closeContactModal()},1500),e.next=8;break;case 6:t=n.state.email||n.state.message?n.state.email?"Please include a message to send an email":"Please include an email address to send an email":"Please include an email address and message to send an email",n.setState({error:!0,errorMessage:t});case 8:case"end":return e.stop()}},e,this)})),n.state={name:"",message:"",email:"",subject:"",errorMessage:"",error:!1},n}return Object(W.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){var e=this,t=this.props.emailStatus.emailInFlight;return i.a.createElement(se.a,{open:this.props.open,style:le.modal[this.props.screenSize]},i.a.createElement("div",{style:le.contactContent},i.a.createElement("div",{style:le.header},i.a.createElement("div",{style:le.headerText},"Get in Touch"),i.a.createElement(J.a,{style:le.cancel,onClick:function(){e.props.closeContactModal()}})),i.a.createElement("input",{placeholder:"name",style:le.input,onChange:this.handleNameChange}),i.a.createElement("input",{placeholder:"email",style:le.input,onChange:this.handleEmailChange}),i.a.createElement("input",{placeholder:"subject",style:le.input,onChange:this.handleSubjectChange}),i.a.createElement("textarea",{cols:40,placeholder:"message",style:le.messageInput,onChange:this.handleMessageChange}),i.a.createElement("div",{style:le.emailButton[t],onClick:function(){!t&&e.checkMail()}},"SEND"),i.a.createElement(de,{open:this.state.error,errorMessage:this.state.errorMessage,closeErrorModal:this.closeErrorModal})))}}]),t}(a.Component),ue=Object(l.b)(function(e){return{emailStatus:e.emailStatus}},function(e){return Object(c.b)({sendEmail:k},e)})(me),he=function(e){function t(){var e,n;Object(B.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(L.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(i)))).closeContactModal=function(){n.props.closeContactModal()},n}return Object(W.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return i.a.createElement(ue,{open:this.props.contactModalIsOpen,screenSize:this.props.screenSize,closeContactModal:this.props.closeContactModal})}}]),t}(a.Component),be=Object(l.b)(function(e){return{screenSize:e.screenSize,contactModalIsOpen:e.contactModalIsOpen}},function(e){return Object(c.b)({closeContactModal:v},e)})(he),ge={intro:"Hi, my name is",myNameIs:"ADAM DOYLE",wat:"I'm a software engineer specializing in developing high-quality mobile and web applications.",watOne:"I'm a ",watTwo:" specializing in developing high-quality mobile and web applications.",contact:"Get in Touch",details:"Currently working at Walmart Labs as a software engineer."},fe=function(e){function t(e){var n;return Object(B.a)(this,t),(n=Object(L.a)(this,Object(_.a)(t).call(this,e))).componentWillMount=function(){},n.startChangingTitles=function(){setTimeout(n.changeTitle,6e3)},n.changeTitle=function(){var e=n.state.currentTitle,t=e===n.state.titles.length-1?0:++e;n.setState({currentTitle:t}),n.startChangingTitles()},n.showTitle=function(){var e=n.state.currentTitle%2===1?{textDecoration:"line-through",color:"red"}:null;return i.a.createElement("span",{style:e},n.state.titles[n.state.currentTitle])},n.state={titles:["software engineer","software engineer","problem solver","problem solver","adrenaline junkie","adrenaline junkie"],currentTitle:0},n}return Object(W.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:re(this.props.screenSize).headline[this.props.screenSize]},i.a.createElement("div",{style:re(this.props.screenSize).intro},ge.intro),i.a.createElement("div",{style:re(this.props.screenSize).myNameIs},ge.myNameIs),i.a.createElement("div",{style:re(this.props.screenSize).wat},ge.wat),i.a.createElement("div",{style:re(this.props.screenSize).details},ge.details),i.a.createElement("div",{onClick:function(){e.props.openContactModal()},style:re(this.props.screenSize).contact},ge.contact),i.a.createElement(be,null))}}]),t}(a.Component),ye=Object(l.b)(void 0,function(e){return Object(c.b)({openContactModal:y},e)})(fe),ve={about:{desktop:Object(ie.a)({},oe.body.desktop,{marginTop:"75px",fontSize:"20px"}),tablet:Object(ie.a)({},oe.body.mobile),mobile:Object(ie.a)({},oe.body.mobile)},aboutHeader:Object(ie.a)({},oe.componentHeader),aboutContent:{desktop:Object(ie.a)({},oe.componentSubHeader,{display:"flex",flexDirection:"row",justifyContent:"space-between"}),tablet:Object(ie.a)({},oe.componentSubHeader,{display:"flex",flexDirection:"row",justifyContent:"space-between"}),mobile:Object(ie.a)({},oe.componentSubHeader,{display:"flex",flexDirection:"column",alignItems:"center"})},aboutWords:{display:"flex",flexDirection:"column",marginBottom:"50px"},aboutText:{marginRight:"10px",marginBottom:"30px"},skillsHeader:Object(ie.a)({},oe.componentSubHeader,{color:Y.grey,marginBottom:"30px",fontWeight:"bold"}),skills:{display:"flex",flexDirection:"row"},individualSkill:{desktop:{marginBottom:"10px",color:Y.white},tablet:{marginBottom:"10px",color:Y.white},mobile:{marginBottom:"10px",color:Y.white}},bullet:{color:Y.blue,marginBottom:"15px"},skillsColumn:{display:"flex",flexDirection:"column",marginRight:"20px"},profilePicture:{desktop:{width:"25vw",marginLeft:"150px",marginBottom:"50px"},tablet:{width:"250px",marginLeft:"150px",marginBottom:"50px"},mobile:{width:"200px",marginBottom:"50px"}}},Ee={aboutHeader:"ABOUT",aboutTextP1:"I am a software engineer with a passion for building high-quality, high performance applications. I am focused on user-experience driven development, and building clean, maintainable products.",aboutTextP3:" I joined Walmart Labs in 2017, where I have continued to grow as a developer. I enjoy constantly learning, and gaining exposure to as many new technologies as possible.",aboutTextP2:"Prior to my career in programming, I had a successful career in restaurant operations. My interest in creating system-level solutions and optimizations has proven to be one my biggest assets as an engineer.",skillsHeader:"Here's a few things I'm experienced with"},xe=n(91),Ce=n.n(xe),Se=function(e){return i.a.createElement("div",{style:ve.about[e.screenSize]},i.a.createElement("div",{style:ve.aboutHeader},Ee.aboutHeader),i.a.createElement("div",{style:ve.aboutContent[e.screenSize]},i.a.createElement("div",{style:ve.aboutWords},i.a.createElement("div",{style:ve.aboutText},Ee.aboutTextP1),i.a.createElement("div",{style:ve.aboutText},Ee.aboutTextP2),i.a.createElement("div",{style:ve.aboutText},Ee.aboutTextP3)),i.a.createElement("div",null,i.a.createElement("img",{style:ve.profilePicture[e.screenSize],src:Ce.a,alt:"Adam Doyle"}))),i.a.createElement("div",null,i.a.createElement("div",{style:ve.skillsHeader},Ee.skillsHeader),i.a.createElement("div",null,"desktop"===(t=e.screenSize)||"tablet"===t?i.a.createElement("div",{style:ve.skills},i.a.createElement("div",{style:ve.skillsColumn},i.a.createElement("li",{style:ve.bullet},i.a.createElement("span",{style:ve.individualSkill[t]},"JavaScript")),i.a.createElement("li",{style:ve.bullet},i.a.createElement("span",{style:ve.individualSkill[t]},"HTML & CSS")),i.a.createElement("li",{style:ve.bullet},i.a.createElement("span",{style:ve.individualSkill[t]},"React & Redux")),i.a.createElement("li",{style:ve.bullet},i.a.createElement("span",{style:ve.individualSkill[t]},"Jest/Mocha"))),i.a.createElement("div",{style:ve.skillsColumn},i.a.createElement("li",{style:ve.bullet},i.a.createElement("span",{style:ve.individualSkill[t]},"Node")),i.a.createElement("li",{style:ve.bullet},i.a.createElement("span",{style:ve.individualSkill[t]},"MongoDB")),i.a.createElement("li",{style:ve.bullet},i.a.createElement("span",{style:ve.individualSkill[t]},"Express"))),i.a.createElement("div",{style:ve.skillsColumn},i.a.createElement("li",{style:ve.bullet},i.a.createElement("span",{style:ve.individualSkill[t]},"Agile/Scrum methodologies")),i.a.createElement("li",{style:ve.bullet},i.a.createElement("span",{style:ve.individualSkill[t]},"Responsive/Mobile First Development")),i.a.createElement("li",{style:ve.bullet},i.a.createElement("span",{style:ve.individualSkill[t]},"Test-Driven Development")),i.a.createElement("li",{style:ve.bullet},i.a.createElement("span",{style:ve.individualSkill[t]},"CI/CD")))):i.a.createElement("div",{style:ve.skills},i.a.createElement("div",{style:ve.skillsColumn},i.a.createElement("div",{style:ve.individualSkill[t]},"JavaScript"),i.a.createElement("div",{style:ve.individualSkill[t]},"HTML & CSS"),i.a.createElement("div",{style:ve.individualSkill[t]},"React & Redux"),i.a.createElement("div",{style:ve.individualSkill[t]},"Node")),i.a.createElement("div",{style:ve.skillsColumn},i.a.createElement("div",{style:ve.individualSkill[t]},"MongoDB"),i.a.createElement("div",{style:ve.individualSkill[t]},"Agile/Scrum methodologies"),i.a.createElement("div",{style:ve.individualSkill[t]},"Responsive/Mobile First Development"),i.a.createElement("div",{style:ve.individualSkill[t]},"Test-Driven Development"))))));var t},Oe=function(e){function t(){return Object(B.a)(this,t),Object(L.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"about"},i.a.createElement(Se,{screenSize:this.props.screenSize}))}}]),t}(a.Component),je=Object(l.b)(function(e){return{screenSize:e.screenSize}})(Oe),ke={companyNameList:{desktop:{fontSize:"20px"},tablet:{},mobile:{display:"flex",flexDirection:"row"}},companyName:Object(ie.a)({},oe.componentSubHeader,{marginBottom:"20px",marginTop:"20px",cursor:"pointer",width:"150px"}),selectedCompany:Object(ie.a)({},oe.componentSubHeader,{marginBottom:"20px",marginTop:"20px",color:Y.third,cursor:"pointer",width:"150px"})},we=function(e){return i.a.createElement("div",{style:ke.companyNameList[e.screenSize]},i.a.createElement("div",{style:e.selectedCompany===b.WALMART?ke.selectedCompany:ke.companyName,onClick:function(){e.selectCompany(b.WALMART)}},"Walmart Labs"),i.a.createElement("div",{style:e.selectedCompany===b.CODING_WITH_KIDS?ke.selectedCompany:ke.companyName,onClick:function(){e.selectCompany(b.CODING_WITH_KIDS)}},"Coding With Kids"))},Te=function(e){function t(){return Object(B.a)(this,t),Object(L.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return i.a.createElement(we,{selectCompany:this.props.selectCompany,selectedCompany:this.props.selectedCompany,screenSize:this.props.screenSize})}}]),t}(a.Component),ze=Object(l.b)(function(e){return{screenSize:e.screenSize,selectedCompany:e.selectedCompany}},function(e){return Object(c.b)({selectCompany:h},e)})(Te),Ie=function(e){return{jobs:{marginLeft:"20px"},jobHeader:{display:"flex",flexDirection:"row"},title:Object(ie.a)({},oe.componentSubHeader,{color:Y.primary}),company:Object(ie.a)({},oe.componentSubHeader,{color:Y.secondary}),dates:{color:Y.primary},titleAndDate:{color:Y.grey,fontSize:"24px",fontWeight:"bold",marginBottom:"10px"},bullet:{color:Y.white,marginBottom:"10px",fontSize:"desktop"===e?"20px":null},bulletItem:{color:Y.white},bulletContainer:{desktop:{marginTop:"20px",width:"55vw"},tablet:{marginTop:"20px",width:"55vw"},mobile:{marginTop:"20px"}}}},Ae={"Walmart Labs":{title:"Software Engineer",company:"Walmart Labs",dates:"Dec 2017 - Present",bullets:["Software Engineer working on mobile applications using React.js while integrating with teams throughout a micro-service ecosystem","Contributor to a cutting-edge team in supply chain technologies","Working in an agile environment with a focus on UX-driven development and CI/CD practices","Responsible for writing and reviewing JavaScript code, QA, planning and breaking down work","Frequently meet with, and provide support to business partners while collecting feedback from end-users","Interview and effectively participate in hiring and onboarding of employees"]},"Coding With Kids":{title:"Coding Instructor",company:"Coding With Kids",dates:"July 2017 - December 2017",bullets:["Taught programming classes to students ranging from grades K - 12","Co-designed lessions based on class level and student age","Provided classroom feedback to executive leadership in order to analyze and improve syllabus","Responded to questions and concerns from parents and school administration"]}},De=function(e){return i.a.createElement("div",{style:Ie(e.screenSize).jobs},i.a.createElement("div",{style:Ie(e.screenSize).bulletContainer[e.screenSize]},i.a.createElement("div",{style:Ie(e.screenSize).titleAndDate},"".concat(Ae[e.selectedCompany].title," ").concat(Ae[e.selectedCompany].dates)),Ae[e.selectedCompany].bullets.map(function(t){return i.a.createElement("li",{style:Ie(e.screenSize).bullet},t)})))},Me=function(e){function t(){return Object(B.a)(this,t),Object(L.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return i.a.createElement(De,{selectedCompany:this.props.selectedCompany,screenSize:this.props.screenSize})}}]),t}(a.Component),He=Object(l.b)(function(e){return{selectedCompany:e.selectedCompany,screenSize:e.screenSize}})(Me),Be={experience:{desktop:Object(ie.a)({},oe.body.desktop),tablet:Object(ie.a)({},oe.body.mobile),mobile:Object(ie.a)({},oe.body.mobile)},experienceHeader:Object(ie.a)({},oe.componentHeader),jobInfo:{desktop:{display:"flex",flexDirection:"row",justifyContent:"space-between"},tablet:{display:"flex",flexDirection:"row",justifyContent:"space-between"},mobile:{display:"flex",flexDirection:"column"}}},Re=function(e){return i.a.createElement("div",{id:"experience",style:Be.experience[e.screenSize]},i.a.createElement("div",{style:Be.experienceHeader},"Experience"),i.a.createElement("div",{style:Be.jobInfo[e.screenSize]},i.a.createElement(ze,null),i.a.createElement(He,null)))},Le=function(e){function t(){return Object(B.a)(this,t),Object(L.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return i.a.createElement(Re,{screenSize:this.props.screenSize})}}]),t}(a.Component),_e=Object(l.b)(function(e){return{screenSize:e.screenSize}})(Le),We={getInTouch:{desktop:Object(ie.a)({},oe.body.desktop,{display:"flex",justifyContent:"center",flexDirection:"column"}),tablet:Object(ie.a)({},oe.body.mobile,{display:"flex",justifyContent:"center",flexDirection:"column"}),mobile:Object(ie.a)({},oe.body.mobile,{display:"flex",justifyContent:"center",flexDirection:"column"})},header:Object(ie.a)({},oe.componentHeader,{textAlign:"center",marginBottom:"30px"}),subHeader:{color:Y.grey,fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"normal",fontSize:"20px",marginBottom:"30px",textAlign:"center"},contact:{color:Y.white,fontFamily:"Helvetica",lineHeight:"normal",fontSize:"20px",marginBottom:"15px",textAlign:"center"}},Ne={HEADER:"Get in Touch!",SUB_HEADER:"Let's connect! Feel free to reach out to me, regarding a potential project or just to stay hi.",PHONE:"(630)217-2264",EMAIL:"acdoyle630@gmail.com"},Fe=function(e){return i.a.createElement("div",{id:"contact",style:We.getInTouch[e.screenSize]},i.a.createElement("div",{style:We.header},Ne.HEADER),i.a.createElement("div",{style:We.subHeader},Ne.SUB_HEADER),i.a.createElement("div",{style:We.contact},Ne.EMAIL))},Pe=function(e){function t(){return Object(B.a)(this,t),Object(L.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return i.a.createElement(Fe,{screenSize:this.props.screenSize})}}]),t}(a.Component),Ue=Object(l.b)(function(e){return{screenSize:e.screenSize}})(Pe),Ke=(n(5455),function(e){function t(){var e,n;Object(B.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(L.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(i)))).componentDidMount=function(){n.resize(),window.addEventListener("resize",n.resize)},n.resize=function(){n.props.setScreenSize(window.innerWidth)},n.scrollToMyRef=function(e){if(e){var t=document.getElementById(e),n=document.body.getBoundingClientRect().top,a=t.getBoundingClientRect().top-n-100;window.scrollTo({top:a,behavior:"smooth"})}},n}return Object(W.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(ae,{scrollToMyRef:this.scrollToMyRef}),i.a.createElement(ye,{screenSize:this.props.screenSize,scrollToMyRef:this.scrollToMyRef}),i.a.createElement(je,null),i.a.createElement(_e,null),i.a.createElement(Ue,null))}}]),t}(a.Component)),Ge=Object(l.b)(function(e){return{screenSize:e.screenSize}},function(e){return Object(c.b)({setScreenSize:s},e)})(Ke);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=n(92),qe=Object(c.d)(D,Object(c.a)(Je.a));r.a.render(i.a.createElement(l.a,{store:qe},i.a.createElement(M.a,{basename:"/adam_doyle"},i.a.createElement("div",null,i.a.createElement(H.a,{exact:!0,path:"/",component:Ge})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},90:function(e,t,n){e.exports=n.p+"static/media/logo.5ab808bf.svg"},91:function(e,t,n){e.exports=n.p+"static/media/Adam_Doyle_img.8a0f871b.jpg"}},[[5312,2,1]]]);
//# sourceMappingURL=main.c7ed851a.chunk.js.map