(this["webpackJsonpreact-contact-form"]=this["webpackJsonpreact-contact-form"]||[]).push([[0],{23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(20),i=a.n(s),o=(a(28),a(10)),c=a(12),r=(a(29),a(30),a(3)),m=a(4),u=a(6),h=a(5),d=a(1),v=a(7),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).onBlurUHID=a.onBlurUHID.bind(Object(d.a)(a)),a.onFocusUHID=a.onFocusUHID.bind(Object(d.a)(a)),a.onChangeUHID=a.onChangeUHID.bind(Object(d.a)(a)),a.onBlurFirstname=a.onBlurFirstname.bind(Object(d.a)(a)),a.onFocusFirstname=a.onFocusFirstname.bind(Object(d.a)(a)),a.onChangeFirstname=a.onChangeFirstname.bind(Object(d.a)(a)),a.onBlurLastname=a.onBlurLastname.bind(Object(d.a)(a)),a.onFocusLastname=a.onFocusLastname.bind(Object(d.a)(a)),a.onChangeLastname=a.onChangeLastname.bind(Object(d.a)(a)),a.onBlurAge=a.onBlurAge.bind(Object(d.a)(a)),a.onFocusAge=a.onFocusAge.bind(Object(d.a)(a)),a.onChangeAge=a.onChangeAge.bind(Object(d.a)(a)),a.onBlurQualification=a.onBlurQualification.bind(Object(d.a)(a)),a.onFocusQualification=a.onFocusQualification.bind(Object(d.a)(a)),a.onChangeQualification=a.onChangeQualification.bind(Object(d.a)(a)),a.onBlurSES=a.onBlurSES.bind(Object(d.a)(a)),a.onFocusSES=a.onFocusSES.bind(Object(d.a)(a)),a.onChangeSES=a.onChangeSES.bind(Object(d.a)(a)),a.onBlurMaritalStatus=a.onBlurMaritalStatus.bind(Object(d.a)(a)),a.onFocusMaritalStatus=a.onFocusMaritalStatus.bind(Object(d.a)(a)),a.onChangeMaritalStatus=a.onChangeMaritalStatus.bind(Object(d.a)(a)),a.onBlurEmploymentStatus=a.onBlurEmploymentStatus.bind(Object(d.a)(a)),a.onFocusEmploymentStatus=a.onFocusEmploymentStatus.bind(Object(d.a)(a)),a.onChangeEmploymentStatus=a.onChangeEmploymentStatus.bind(Object(d.a)(a)),a.onBlurReferalDoctor=a.onBlurReferalDoctor.bind(Object(d.a)(a)),a.onFocusReferalDoctor=a.onFocusReferalDoctor.bind(Object(d.a)(a)),a.onChangeReferalDoctor=a.onChangeReferalDoctor.bind(Object(d.a)(a)),a.onSubmit=a.onSubmit.bind(Object(d.a)(a)),a.state={UHID:"",UHIDBlank:void 0,personFirstname:"",firstnameBlank:void 0,personLastname:"",lastNameBlank:void 0,age:"",ageBlank:void 0,qualification:"",qualificationBlank:void 0,SES:"",SESBlank:void 0,maritalStatus:"",maritalStatusBlank:void 0,employmentStatus:"",employmentStatusBlank:void 0,referalDoctor:"",referalDoctorBlank:void 0},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"onFocusUHID",value:function(e){this.setState({UHIDBlank:!1})}},{key:"onBlurUHID",value:function(e){""===e.target.value?this.setState({UHIDBlank:!0}):this.setState({UHIDBlank:!1})}},{key:"onChangeUHID",value:function(e){this.setState({UHID:e.target.value})}},{key:"onFocusFirstname",value:function(e){this.setState({firstnameBlank:!1})}},{key:"onBlurFirstname",value:function(e){""===e.target.value?this.setState({firstnameBlank:!0}):this.setState({firstnameBlank:!1})}},{key:"onChangeFirstname",value:function(e){this.setState({personFirstname:e.target.value})}},{key:"onFocusLastname",value:function(e){this.setState({lastnameBlank:!1})}},{key:"onBlurLastname",value:function(e){""===e.target.value?this.setState({lastnameBlank:!0}):this.setState({lastnameBlank:!1})}},{key:"onChangeLastname",value:function(e){this.setState({personLastname:e.target.value})}},{key:"onFocusAge",value:function(e){this.setState({ageBlank:!1})}},{key:"onBlurAge",value:function(e){""===e.target.value||!1===/\d+/.test(e.target.value)?this.setState({ageBlank:!0}):this.setState({ageBlank:!1})}},{key:"onChangeAge",value:function(e){this.setState({age:e.target.value})}},{key:"onFocusQualification",value:function(e){this.setState({qualificationBlank:!1})}},{key:"onBlurQualification",value:function(e){""===e.target.value?this.setState({qualificationBlank:!0}):this.setState({qualificationBlank:!1})}},{key:"onChangeQualification",value:function(e){this.setState({qualification:e.target.value})}},{key:"onFocusSES",value:function(e){this.setState({SESBlank:!1})}},{key:"onBlurSES",value:function(e){""===e.target.value?this.setState({SESBlank:!0}):this.setState({SESBlank:!1})}},{key:"onChangeSES",value:function(e){this.setState({SES:e.target.value})}},{key:"onFocusMaritalStatus",value:function(e){this.setState({maritalStatusBlank:!1})}},{key:"onBlurMaritalStatus",value:function(e){""===e.target.value?this.setState({maritalStatusBlank:!0}):this.setState({maritalStatusBlank:!1})}},{key:"onChangeMaritalStatus",value:function(e){this.setState({maritalStatus:e.target.value})}},{key:"onFocusEmploymentStatus",value:function(e){this.setState({employmentStatusBlank:!1})}},{key:"onBlurEmploymentStatus",value:function(e){""===e.target.value?this.setState({employmentStatusBlank:!0}):this.setState({employmentStatusBlank:!1})}},{key:"onChangeEmploymentStatus",value:function(e){this.setState({employmentStatus:e.target.value})}},{key:"onFocusReferalDoctor",value:function(e){this.setState({referalDoctorBlank:!1})}},{key:"onBlurReferalDoctor",value:function(e){""===e.target.value?this.setState({referalDoctorBlank:!0}):this.setState({referalDoctorBlank:!1})}},{key:"onChangeReferalDoctor",value:function(e){this.setState({referalDoctor:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("The values are ".concat(this.state.UHID,", \n      ").concat(this.state.personFirstname,", \n      ").concat(this.state.personLastname,",\n      ").concat(this.state.age,",\n      ").concat(this.state.qualification,",\n      ").concat(this.state.SES,",\n      ").concat(this.state.maritalStatus,",\n      ").concat(this.state.employmentStatus,",\n      ").concat(this.state.referalDoctor,","));var t=document.getElementsByClassName("form-control");function a(e){var a=new Event("blur",{view:window,bubbles:!1,cancelable:!0});!t[e].dispatchEvent(a)?console.log("cancelled"):console.log("not cancelled")}a(0),a(1),a(2),a(3),a(4),a(5),a(6),a(7),a(8),""===this.state.personFirstname||""===this.state.personLastname||""===this.state.age||""===this.state.qualification||""===this.state.SES||""===this.state.maritalStatus||""===this.state.employmentStatus||""===this.state.referalDoctor?this.setState({allFilled:!1}):(this.setState({allFilled:!0}),localStorage.setItem("uhid",this.state.UHID),localStorage.setItem("firstname",this.state.personFirstname),localStorage.setItem("lastname",this.state.personLastname),localStorage.setItem("age",this.state.age),localStorage.setItem("qualification",this.state.qualification),localStorage.setItem("ses",this.state.SES),localStorage.setItem("marital_status",this.state.maritalStatus),localStorage.setItem("employment_status",this.state.employmentStatus),localStorage.setItem("referal_doctor",this.state.referalDoctor),this.props.history.push("/ahana-psychometry/assessments/"))}},{key:"render",value:function(){var e=this.state.UHIDBlank?"form-group error":"form-group",t=this.state.firstnameBlank?"form-group error":"form-group",a=this.state.lastnameBlank?"form-group error":"form-group",n=this.state.ageBlank?"form-group error":"form-group",s=this.state.qualificationBlank?"form-group error":"form-group",i=this.state.SESBlank?"form-group error":"form-group",o=this.state.maritalStatusBlank?"form-group error":"form-group",c=this.state.employmentStatusBlank?"form-group error":"form-group",r=this.state.referalDoctorBlank?"form-group error":"form-group";return l.a.createElement("div",{className:"container",style:{marginTop:25}},l.a.createElement("h2",{className:"h2-small"},"Fill in the patient's details"),l.a.createElement("form",{className:"person-details",onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:e},l.a.createElement("label",null,"UHID"),l.a.createElement("input",{type:"text",className:"form-control",onChange:this.onChangeUHID,onFocus:this.onFocusUHID,onBlur:this.onBlurUHID})))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:t},l.a.createElement("label",null,"First Name"),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.personFirstname,onChange:this.onChangeFirstname,onFocus:this.onFocusFirstname,onBlur:this.onBlurFirstname}))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:a},l.a.createElement("label",null,"Last Name"),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.personLastname,onChange:this.onChangeLastname,onFocus:this.onFocusLastname,onBlur:this.onBlurLastname})))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:n},l.a.createElement("label",null,"Age  "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.personAge,onChange:this.onChangeAge,onFocus:this.onFocusAge,onBlur:this.onBlurAge}))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:s},l.a.createElement("label",{htmlFor:"Qualification"},"Qualification "),l.a.createElement("select",{id:"Qualification",className:"form-control",value:this.state.qualification,onChange:this.onChangeQualification,onFocus:this.onFocusQualification,onBlur:this.onBlurQualification},l.a.createElement("option",{value:"",defaultValue:!0},"Choose..."),l.a.createElement("option",{value:"Primary"},"Primary"),l.a.createElement("option",{value:"Secondary"},"Secondary"),l.a.createElement("option",{value:"UG"},"UG"),l.a.createElement("option",{value:"PG"},"PG"),l.a.createElement("option",{value:"Diploma"},"Diploma"),l.a.createElement("option",{value:"Others"},"Others"))))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col"},l.a.createElement("div",{className:i},l.a.createElement("label",{htmlFor:"SocioEconomicStatus"},"Socio-Economic Status"),l.a.createElement("select",{id:"SocioEconomicStatus",className:"form-control",value:this.state.SES,onChange:this.onChangeSES,onFocus:this.onFocusSES,onBlur:this.onBlurSES},l.a.createElement("option",{value:"",defaultValue:!0},"Choose..."),l.a.createElement("option",{value:"Lower Class"},"Lower Class"),l.a.createElement("option",{value:"Middle Class"},"Middle Class"),l.a.createElement("option",{value:"Upper Class"},"Upper Class")))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:o},l.a.createElement("label",{htmlFor:"Marital Status"},"Marital Status"),l.a.createElement("select",{id:"MaritalStatus",className:"form-control",value:this.state.maritalStatus,onChange:this.onChangeMaritalStatus,onFocus:this.onFocusMaritalStatus,onBlur:this.onBlurMaritalStatus},l.a.createElement("option",{value:"",defaultValue:!0},"Choose..."),l.a.createElement("option",{value:"Married"},"Married"),l.a.createElement("option",{value:"Unmarried"},"Unmarried"),l.a.createElement("option",{value:"Divorcee"},"Divorcee"),l.a.createElement("option",{value:"Widow"},"Widow"),l.a.createElement("option",{value:"Widower"},"Widower"))))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:c},l.a.createElement("label",{htmlFor:"EmploymentStatus"},"Employment Status "),l.a.createElement("select",{id:"EmploymentStatus",className:"form-control",value:this.state.employmentStatus,onChange:this.onChangeEmploymentStatus,onFocus:this.onFocusEmploymentStatus,onBlur:this.onBlurEmploymentStatus},l.a.createElement("option",{value:"",defaultValue:!0},"Choose..."),l.a.createElement("option",{value:"Employed"},"Employed"),l.a.createElement("option",{value:"Unemployed"},"Unemployed"),l.a.createElement("option",{value:"Self-employed"},"Self-employed"),l.a.createElement("option",{value:"Home maker"},"Home-maker"),l.a.createElement("option",{value:"Student"},"Student")))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:r},l.a.createElement("label",null,"Referal Doctor"),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.referalDoctor,onChange:this.onChangeReferalDoctor,onFocus:this.onFocusReferalDoctor,onBlur:this.onBlurReferalDoctor})))),l.a.createElement("p",{className:this.state.allFilled?"form-feedback hidden":"form-feedback shown"},"All fields are mandatory."),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-primary"}))))}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).getDate=a.getDate.bind(Object(d.a)(a)),a.getImpression=a.getImpression.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"getDate",value:function(){return(new Date).toDateString()}},{key:"getImpression",value:function(){var e=localStorage.getItem("total");return e>=1&&e<11?"These ups and downs are considered normal":e>=11&&e<17?"Mild mood disturbance":e>=17&&e<21?"Borderline clinical depression":e>=21&&e<31?"Moderate depression":e>=31&&e<41?"Severe depression":e>=41?"Extreme depression":void 0}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target,a=t.getElementsByTagName("textarea")[0],n=a.value,l=document.createElement("p");l.innerHTML=n,t.insertBefore(l,a),a.value=""}},{key:"render",value:function(){return l.a.createElement("div",{className:"container result-page"},l.a.createElement("h1",null,"Psychological Report"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("p",{className:"print-btn-container"},l.a.createElement("button",{onClick:window.print,className:"btn btn-primary"},"Print"))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"UHID: "),localStorage.getItem("uhid")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"First Name: "),localStorage.getItem("firstname")),l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"Last Name: "),localStorage.getItem("lastname")),l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"Age: "),localStorage.getItem("age")),l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"Referal Doctor: "),localStorage.getItem("referal_doctor"))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"Qualification: "),localStorage.getItem("qualification")),l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"Socio-Economic Status: "),localStorage.getItem("ses")),l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"Marital Status: "),localStorage.getItem("marital_status")),l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"Employment Status: "),localStorage.getItem("employment_status")))),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Assessment"),l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Observed Value"),l.a.createElement("th",null,"Normal Referance"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,localStorage.getItem("assessment")),l.a.createElement("td",null,this.getDate()),l.a.createElement("td",null,localStorage.getItem("total")),l.a.createElement("td",null,"1 - 10 These ups and downs are considered normal ",l.a.createElement("br",null),"11 - 16 Mild mood disturbance",l.a.createElement("br",null),"17 -20 Borderline clinical depression",l.a.createElement("br",null),"21 - 30 Moderate depression",l.a.createElement("br",null),"31 - 40 Severe depression",l.a.createElement("br",null),"Over 40 Extreme depression")))),l.a.createElement("p",{className:"impression"},l.a.createElement("span",{className:"bold"},"Impression:")," ",this.getImpression()),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"Comments:")," "),l.a.createElement("textarea",{id:"comment"}),l.a.createElement("p",{className:"submit-btn-container"},l.a.createElement("input",{type:"submit",value:"Add Comment",className:"btn btn-primary"}))))}}]),t}(n.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"vertically-center-outer"},l.a.createElement("div",{className:"vertically-center-middle"},l.a.createElement("div",{className:"vertically-center-inner"},l.a.createElement("form",{className:"search-bar"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search by ID, age or name","aria-label":"Search","aria-describedby":"button-addon2"}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-outline-primary",type:"submit",id:"button-addon2"},"Search")))),l.a.createElement("p",{className:"text-below-search-bar"},l.a.createElement(o.b,{to:"/ahana-psychometry/create"},"Proceed to Asssessments")))),l.a.createElement("a",{href:"/ahana_psychometry/",className:"logo-link"},l.a.createElement("img",{src:"/logo-ahana.png",alt:"Ahana : Experience the exceptional care"})))}}]),t}(n.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"assessments container"},l.a.createElement("p",null,"Choose from the following assessments"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/ahana-psychometry/assessments/01"},"Beck's Depression Inventory"))))}}]),t}(n.Component),g=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("label",{className:this.props.className,htmlFor:this.props.Id},l.a.createElement("input",{onClick:this.props.onClick,type:"radio",name:this.props.name,id:this.props.Id,value:this.props.value}),this.props.children)}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={motivation:"songs",score:[]},a.handleClick=a.handleClick.bind(Object(d.a)(a)),a.getElementY=a.getElementY.bind(Object(d.a)(a)),a.doScrolling=a.doScrolling.bind(Object(d.a)(a)),a.isActive=a.isActive.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"handleClick",value:function(e){var t=e.target,a=Number(t.id.slice(9,11)),n=t.value,l=this.state.score.slice();l[a]=n,this.setState({score:l})}},{key:"getElementY",value:function(e){return window.pageYOffset+document.querySelector(e).getBoundingClientRect().top}},{key:"doScrolling",value:function(e,t){var a,n=window.pageYOffset,l=this.getElementY(e),s=(document.body.scrollHeight-l<window.innerHeight?document.body.scrollHeight-window.innerHeight:l)-n;s&&window.requestAnimationFrame((function e(l){a||(a=l);var i,o=l-a,c=Math.min(o/t,1);c=(i=c)<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1,window.scrollTo(0,n+s*c),o<t&&window.requestAnimationFrame(e)}))}},{key:"isActive",value:function(e,t){return e===Number(this.state.score[t])?"active":"default"}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=0,a=!0;if(this.state.score.forEach((function(e,a){void 0!==e&&(t+=Number(e))})),console.log(t),0===this.state.score.length)a=!1,this.doScrolling("#question-1",1e3);else for(var n=1;n<=21&&a;n++)if(console.log("Score of all 21 questions",this.state.score[n]),void 0===this.state.score[n]){console.log("if score is undefined, set filledAll to false."),a=!1,console.log("Scroll to #question-"+n),this.doScrolling("#question-"+n,1e3);break}a&&(console.log("filled all"),localStorage.setItem("total",t),localStorage.setItem("assessment","Beck's Depression Inventory"),this.props.history.push("/ahana-psychometry/index"))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Beck's Depression Inventory"),l.a.createElement("p",null,"Select an appropriate option from each of the following:"),l.a.createElement("form",{className:"depression-metrics",onSubmit:this.handleSubmit},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-1"},l.a.createElement(g,{className:this.isActive(0,1),Id:"question-01-answer-01",value:"0",onClick:this.handleClick},"I do not feel sad."),l.a.createElement(g,{className:this.isActive(1,1),Id:"question-01-answer-02",value:"1",onClick:this.handleClick},"I feel sad."),l.a.createElement(g,{className:this.isActive(2,1),Id:"question-01-answer-03",value:"2",onClick:this.handleClick},"I am sad all the time and I can't snap out of it."),l.a.createElement(g,{className:this.isActive(3,1),Id:"question-01-answer-04",value:"3",onClick:this.handleClick},"I am so sad and unhappy that I can't stand it."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-2"},l.a.createElement(g,{className:this.isActive(0,2),Id:"question-02-answer-01",value:"0",onClick:this.handleClick},"I am not particularly discouraged about the future."),l.a.createElement(g,{className:this.isActive(1,2),Id:"question-02-answer-02",value:"1",onClick:this.handleClick},"I feel discouraged about the future."),l.a.createElement(g,{className:this.isActive(2,2),Id:"question-02-answer-03",value:"2",onClick:this.handleClick},"I feel I have nothing to look forward to."),l.a.createElement(g,{className:this.isActive(3,2),Id:"question-02-answer-04",value:"3",onClick:this.handleClick},"I feel the future is hopeless and that things cannot improve."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-3"},l.a.createElement(g,{className:this.isActive(0,3),Id:"question-03-answer-01",value:"0",onClick:this.handleClick},"I do not feel like a failure."),l.a.createElement(g,{className:this.isActive(1,3),Id:"question-03-answer-02",value:"1",onClick:this.handleClick},"I feel like I have failed more than the average person."),l.a.createElement(g,{className:this.isActive(2,3),Id:"question-03-answer-03",value:"2",onClick:this.handleClick},"As I look back on my life, all I can see is a lot of failures."),l.a.createElement(g,{className:this.isActive(3,3),Id:"question-03-answer-04",value:"3",onClick:this.handleClick},"I feel I am a complete failure as a person."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-4"},l.a.createElement(g,{className:this.isActive(0,4),Id:"question-04-answer-01",value:"0",onClick:this.handleClick},"I get as much satisfaction out of things as I used to."),l.a.createElement(g,{className:this.isActive(1,4),Id:"question-04-answer-02",value:"1",onClick:this.handleClick},"I don't enjoy things the way I used to."),l.a.createElement(g,{className:this.isActive(2,4),Id:"question-04-answer-03",value:"2",onClick:this.handleClick},"I don't get real satisfaction out of anything anymore."),l.a.createElement(g,{className:this.isActive(3,4),Id:"question-04-answer-04",value:"3",onClick:this.handleClick},"I am dissatisfied or bored with everything."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-5"},l.a.createElement(g,{className:this.isActive(0,5),Id:"question-05-answer-01",value:"0",onClick:this.handleClick},"I don't feel particularly guilty."),l.a.createElement(g,{className:this.isActive(1,5),Id:"question-05-answer-02",value:"1",onClick:this.handleClick},"I feel guilty a good part of the time."),l.a.createElement(g,{className:this.isActive(2,5),Id:"question-05-answer-03",value:"2",onClick:this.handleClick},"I feel quite guilty most of the time."),l.a.createElement(g,{className:this.isActive(3,5),Id:"question-05-answer-04",value:"3",onClick:this.handleClick},"I feel guilty all of the time."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-6"},l.a.createElement(g,{className:this.isActive(0,6),Id:"question-06-answer-01",value:"0",onClick:this.handleClick},"I don't feel I am being punished."),l.a.createElement(g,{className:this.isActive(1,6),Id:"question-06-answer-02",value:"1",onClick:this.handleClick},"I feel I may be punished."),l.a.createElement(g,{className:this.isActive(2,6),Id:"question-06-answer-03",value:"2",onClick:this.handleClick},"I expect to be punished."),l.a.createElement(g,{className:this.isActive(3,6),Id:"question-06-answer-04",value:"3",onClick:this.handleClick},"I feel I am being punished."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-7"},l.a.createElement(g,{className:this.isActive(0,7),Id:"question-07-answer-01",value:"0",onClick:this.handleClick},"I don't feel dissapointed in myself."),l.a.createElement(g,{className:this.isActive(1,7),Id:"question-07-answer-02",value:"1",onClick:this.handleClick},"I am dissapointed in myself."),l.a.createElement(g,{className:this.isActive(2,7),Id:"question-07-answer-03",value:"2",onClick:this.handleClick},"I am disgusted with myself."),l.a.createElement(g,{className:this.isActive(3,7),Id:"question-07-answer-04",value:"3",onClick:this.handleClick},"I hate myself."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-8"},l.a.createElement(g,{className:this.isActive(0,8),Id:"question-08-answer-01",value:"0",onClick:this.handleClick},"I don't feel I am any worse than anybody else."),l.a.createElement(g,{className:this.isActive(1,8),Id:"question-08-answer-02",value:"1",onClick:this.handleClick},"I am critical of myself for my weakness or mistakes."),l.a.createElement(g,{className:this.isActive(2,8),Id:"question-08-answer-03",value:"2",onClick:this.handleClick},"I blame myself all the time for my faults."),l.a.createElement(g,{className:this.isActive(3,8),Id:"question-08-answer-04",value:"3",onClick:this.handleClick},"I blame myself for everything bad that happens."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-9"},l.a.createElement(g,{className:this.isActive(0,9),Id:"question-09-answer-01",value:"0",onClick:this.handleClick},"I don't have any thoughts of killing myself."),l.a.createElement(g,{className:this.isActive(1,9),Id:"question-09-answer-02",value:"1",onClick:this.handleClick},"I have thoughts of killing myself, but I would not carry them out."),l.a.createElement(g,{className:this.isActive(2,9),Id:"question-09-answer-03",value:"2",onClick:this.handleClick},"I would like to kill myself."),l.a.createElement(g,{className:this.isActive(3,9),Id:"question-09-answer-04",value:"3",onClick:this.handleClick},"I would kill myself if I had the chance."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-10"},l.a.createElement(g,{className:this.isActive(0,10),Id:"question-10-answer-01",value:"0",onClick:this.handleClick},"I don't cry any more than usual."),l.a.createElement(g,{className:this.isActive(1,10),Id:"question-10-answer-02",value:"1",onClick:this.handleClick},"I cry more now than I used to."),l.a.createElement(g,{className:this.isActive(2,10),Id:"question-10-answer-03",value:"2",onClick:this.handleClick},"I cry all the time now."),l.a.createElement(g,{className:this.isActive(3,10),Id:"question-10-answer-04",value:"3",onClick:this.handleClick},"I used to be able to cry, but now I can't even though I want to."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-11"},l.a.createElement(g,{className:this.isActive(0,11),Id:"question-11-answer-01",value:"0",onClick:this.handleClick},"I am no more irritated about things than I ever was."),l.a.createElement(g,{className:this.isActive(1,11),Id:"question-11-answer-02",value:"1",onClick:this.handleClick},"I am slightly more irritated now than usual."),l.a.createElement(g,{className:this.isActive(2,11),Id:"question-11-answer-03",value:"2",onClick:this.handleClick},"I am quite annoyed or irritated a good deal of time."),l.a.createElement(g,{className:this.isActive(3,11),Id:"question-11-answer-04",value:"3",onClick:this.handleClick},"I feel irritated all the time."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-12"},l.a.createElement(g,{className:this.isActive(0,12),Id:"question-12-answer-01",value:"0",onClick:this.handleClick},"I have not lost interest in other people."),l.a.createElement(g,{className:this.isActive(1,12),Id:"question-12-answer-02",value:"1",onClick:this.handleClick},"I am less interested in other people than I used to be."),l.a.createElement(g,{className:this.isActive(2,12),Id:"question-12-answer-03",value:"2",onClick:this.handleClick},"I have lost most of my interest in other people."),l.a.createElement(g,{className:this.isActive(3,12),Id:"question-12-answer-04",value:"3",onClick:this.handleClick},"I have lost all of my interest in other people."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-13"},l.a.createElement(g,{className:this.isActive(0,13),Id:"question-13-answer-01",value:"0",onClick:this.handleClick},"I make decisions about as well as I ever could."),l.a.createElement(g,{className:this.isActive(1,13),Id:"question-13-answer-02",value:"1",onClick:this.handleClick},"I put off making decisions more than I used to."),l.a.createElement(g,{className:this.isActive(2,13),Id:"question-13-answer-03",value:"2",onClick:this.handleClick},"I have greater difficulty in making decisions more than I used to."),l.a.createElement(g,{className:this.isActive(3,13),Id:"question-13-answer-04",value:"3",onClick:this.handleClick},"I can't make decisions at all anymore."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-14"},l.a.createElement(g,{className:this.isActive(0,14),Id:"question-14-answer-01",value:"0",onClick:this.handleClick},"I don't feel that I look any worse than what I used to."),l.a.createElement(g,{className:this.isActive(1,14),Id:"question-14-answer-02",value:"1",onClick:this.handleClick},"I am worried that I am looking old or unattractive."),l.a.createElement(g,{className:this.isActive(2,14),Id:"question-14-answer-03",value:"2",onClick:this.handleClick},"I feel there are permanent changes in my appearance that makes me look unattractive."),l.a.createElement(g,{className:this.isActive(3,14),Id:"question-14-answer-04",value:"3",onClick:this.handleClick},"I believe that I look ugly."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-15"},l.a.createElement(g,{className:this.isActive(0,15),Id:"question-15-answer-01",value:"0",onClick:this.handleClick},"I can work about as well as before."),l.a.createElement(g,{className:this.isActive(1,15),Id:"question-15-answer-02",value:"1",onClick:this.handleClick},"It takes an extra effort to get started at doing something."),l.a.createElement(g,{className:this.isActive(2,15),Id:"question-15-answer-03",value:"2",onClick:this.handleClick},"I have to push myself very hard to do anything."),l.a.createElement(g,{className:this.isActive(3,15),Id:"question-15-answer-04",value:"3",onClick:this.handleClick},"I can't do any work at all."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-16"},l.a.createElement(g,{className:this.isActive(0,16),Id:"question-16-answer-01",value:"0",onClick:this.handleClick},"I can sleep as well as usual."),l.a.createElement(g,{className:this.isActive(1,16),Id:"question-16-answer-02",value:"1",onClick:this.handleClick},"I don't sleep as well as I used to."),l.a.createElement(g,{className:this.isActive(2,16),Id:"question-16-answer-03",value:"2",onClick:this.handleClick},"I wake up 1-2 hours earlier than usual and find it hard to get back to sleep."),l.a.createElement(g,{className:this.isActive(3,16),Id:"question-16-answer-04",value:"3",onClick:this.handleClick},"I wake up several hours earlier than I used to and cannot get back to sleep."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-17"},l.a.createElement(g,{className:this.isActive(0,17),Id:"question-17-answer-01",value:"0",onClick:this.handleClick},"I don't get more tired than usual."),l.a.createElement(g,{className:this.isActive(1,17),Id:"question-17-answer-02",value:"1",onClick:this.handleClick},"I get tired more easily than I used to."),l.a.createElement(g,{className:this.isActive(2,17),Id:"question-17-answer-03",value:"2",onClick:this.handleClick},"I get tired from doing almost anything."),l.a.createElement(g,{className:this.isActive(3,17),Id:"question-17-answer-04",value:"3",onClick:this.handleClick},"I am too tired to do anything."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-18"},l.a.createElement(g,{className:this.isActive(0,18),Id:"question-18-answer-01",value:"0",onClick:this.handleClick},"My apetite is no worse than usual."),l.a.createElement(g,{className:this.isActive(1,18),Id:"question-18-answer-02",value:"1",onClick:this.handleClick},"My apetite is not as good as it used to be."),l.a.createElement(g,{className:this.isActive(2,18),Id:"question-18-answer-03",value:"2",onClick:this.handleClick},"My apetite is much worse now."),l.a.createElement(g,{className:this.isActive(3,18),Id:"question-18-answer-04",value:"3",onClick:this.handleClick},"I have no apetite at all anymore."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-19"},l.a.createElement(g,{className:this.isActive(0,19),Id:"question-19-answer-01",value:"0",onClick:this.handleClick},"I haven't lost much weight, if any, lately."),l.a.createElement(g,{className:this.isActive(1,19),Id:"question-19-answer-02",value:"1",onClick:this.handleClick},"I have lost more than five pounds."),l.a.createElement(g,{className:this.isActive(2,19),Id:"question-19-answer-03",value:"2",onClick:this.handleClick},"I have lost more than ten pounds."),l.a.createElement(g,{className:this.isActive(3,19),Id:"question-19-answer-04",value:"3",onClick:this.handleClick},"I have lost more than fifteen pounds."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-20"},l.a.createElement(g,{className:this.isActive(0,20),Id:"question-20-answer-01",value:"0",onClick:this.handleClick},"I am no more worried about my health than usual."),l.a.createElement(g,{className:this.isActive(1,20),Id:"question-20-answer-02",value:"1",onClick:this.handleClick},"I am worried about physical problems like aches, pains, upset stomach, or constipation."),l.a.createElement(g,{className:this.isActive(2,20),Id:"question-20-answer-03",value:"2",onClick:this.handleClick},"I am very worried about my physical problems and it's hard to think of much else."),l.a.createElement(g,{className:this.isActive(3,20),Id:"question-20-answer-04",value:"3",onClick:this.handleClick},"I am so worried about my physical problems that I cannot think of anything else."))),l.a.createElement("li",null,l.a.createElement("div",{className:"question",id:"question-21"},l.a.createElement(g,{className:this.isActive(0,21),Id:"question-21-answer-01",value:"0",onClick:this.handleClick},"I have not noticed any recent change in my interest in sex."),l.a.createElement(g,{className:this.isActive(1,21),Id:"question-21-answer-02",value:"1",onClick:this.handleClick},"I am less interested in sex than I used to be."),l.a.createElement(g,{className:this.isActive(2,21),Id:"question-21-answer-03",value:"2",onClick:this.handleClick},"I have almost no interest in sex."),l.a.createElement(g,{className:this.isActive(3,21),Id:"question-21-answer-04",value:"3",onClick:this.handleClick},"I have lost interest in sex completely.")))),l.a.createElement("p",null,l.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-primary"}))))}}]),t}(n.Component),I=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("p",null,"Welcome to Assessment 02"),l.a.createElement(o.b,{to:"/",className:"btn btn-primary"},"Next"))}}]),t}(n.Component),C=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("p",null,"Welcome to Assessment 03"),l.a.createElement(o.b,{to:"/",className:"btn btn-primary"},"Next"))}}]),t}(n.Component);var y=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light"},l.a.createElement(o.b,{to:"/ahana-psychometry",className:"navbar-brand"},"Ahana Psychometry"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"}))),l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/ahana-psychometry/create",component:E}),l.a.createElement(c.a,{path:"/ahana-psychometry/index",component:p}),l.a.createElement(c.a,{exact:!0,path:"/ahana-psychometry/",component:k}),l.a.createElement(c.a,{exact:!0,path:"/ahana-psychometry/assessments/",component:f}),l.a.createElement(c.a,{path:"/ahana-psychometry/assessments/01",component:b}),l.a.createElement(c.a,{path:"/ahana-psychometry/assessments/02",component:I}),l.a.createElement(c.a,{path:"/ahana-psychometry/assessments/03",component:C}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.6d32bad5.chunk.js.map