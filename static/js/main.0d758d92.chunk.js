(this.webpackJsonpoxfordhack2020=this.webpackJsonpoxfordhack2020||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){},,,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.7b5fedba.png"},function(e,a,t){e.exports=t.p+"static/media/twoo_landing.4784ca72.webm"},function(e,a,t){e.exports=t.p+"static/media/twoo-flying.7213a8da.gif"},,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/oxhack-twoo-2020.4fdafe99.webm"},function(e,a,t){e.exports=t.p+"static/media/oxhack-twoo-2020.f4e7a0d7.gif"},function(e,a,t){e.exports=t.p+"static/media/Alex normal.7f12f863.JPG"},function(e,a,t){e.exports=t.p+"static/media/Alex haha.04fefcd9.JPG"},function(e,a,t){e.exports=t.p+"static/media/Ilia_normal.070ab2f1.png"},function(e,a,t){e.exports=t.p+"static/media/Ilia_fun.90ea81c4.png"},function(e,a,t){e.exports=t.p+"static/media/Jonny normal.6ba74c4d.jpg"},function(e,a,t){e.exports=t.p+"static/media/Jonny fun.056ed408.jpg"},function(e,a,t){e.exports=t.p+"static/media/Serbi normal.32ac9e84.jpg"},function(e,a,t){e.exports=t.p+"static/media/Serbi haha.d440e364.jpg"},function(e,a,t){e.exports=t.p+"static/media/Sonia 1.09c71fad.jpg"},function(e,a,t){e.exports=t.p+"static/media/Sonia2.e0740ef3.jpg"},function(e,a,t){e.exports=t.p+"static/media/Den_normal.7f06518d.jpg"},function(e,a,t){e.exports=t.p+"static/media/Den_fun.ed65b37c.jpg"},,function(e,a,t){e.exports=t.p+"static/media/twoo_faq.72050646.webm"},function(e,a,t){e.exports=t.p+"static/media/twoo_faq.19762891.gif"},function(e,a,t){e.exports=t.p+"static/media/bgskyline.aca02bf3.png"},,,,function(e,a,t){e.exports=t(125)},,,,,function(e,a,t){},,,,function(e,a,t){},function(e,a,t){},,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),o=t.n(l),c=(t(81),t(17)),i=t.n(c),s=(t(43),t(12),t(85),t(7)),m=t(22),d=(t(86),t(47)),u=t(48),f=function(e){var a=Object(n.useState)(),t=Object(m.a)(a,2),l=t[0],o=t[1];return r.a.createElement("div",null,r.a.createElement("div",{style:{zIndex:"120",position:"relative",padding:"15px"}},r.a.createElement(u.HamburgerButton,{open:l,onClick:function(){return o(!l)},width:26,height:18,strokeWidth:3,color:"#ffffff",animationDuration:.5})),r.a.createElement(d.Animate,{play:l,start:{transform:"translateX(20vw) translateY(-20vw)"},end:{transform:"translateX(-100vw) translateY(-20vw)"}},r.a.createElement("div",{style:{minHeight:"120vh",minWidth:"calc(100vw + 60px)",backgroundColor:"rgba(0, 0, 0, 0.9)",zIndex:"100",position:"fixed",display:"table"}},r.a.createElement("div",{style:{display:"table-cell",verticalAlign:"top",textAlign:"right",padding:"130px 50px 0px 0px"}},r.a.Children.map(e.children,(function(e){return r.a.cloneElement(e,{onClick:function(){return o(!l)}})}))))))},p=t(127),E=(t(96),t(75)),h=(t(100),t(101),t(102),function(e){var a,t,n,l=e.status,o=e.message,c=e.onValidated;return r.a.createElement("div",{style:{borderRadius:2,padding:"10px",display:"flex",width:"100%",textAlign:"center",flexDirection:"column"}},r.a.createElement("div",{className:"field"},r.a.createElement("input",{ref:function(e){return t=e},type:"text",placeholder:"First Name"}),r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{ref:function(e){return n=e},type:"text",placeholder:"Last Name"}),r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{ref:function(e){return a=e},type:"email",placeholder:"Your email"}),r.a.createElement("div",{className:"line"})),r.a.createElement("button",{className:"fancy-button",onClick:function(){return a&&t&&n&&a.value.indexOf("@")>-1&&c({EMAIL:a.value,FNAME:t.value,LNAME:n.value})},style:{margin:"20px"}},"Subscribe!"),r.a.createElement("small",{style:{color:"white",textAlign:"justify"}},"We use MailChimp as our marketing platform. By clicking subscribe, you acknowledge that your information will be transferred to MailChimp for processing. Learn more about MailChimp's privacy practices ",r.a.createElement("a",{href:"https://mailchimp.com/legal/"},"here"),". You can unsubscribe at any time by clicking the link in the footer of our emails. "),"sending"===l&&r.a.createElement("div",{style:{color:"blue"}},"sending..."),"error"===l&&r.a.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:o}}),"success"===l&&r.a.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:o}}))}),y=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],l=a[1],o=function(){return l(!0)},c=!Object(s.useMediaQuery)({query:"(max-width: 1224px)"});return r.a.createElement(r.a.Fragment,null,c?r.a.createElement("a",{className:"first after fancy",href:"#",onClick:o,style:{flexShrink:0,marginRight:"10px"}},r.a.createElement("p",{className:"element"}," Subscribe for updates! ")):r.a.createElement("div",null,r.a.createElement("button",{className:"button",onClick:o},"Subscribe for updates!")),r.a.createElement(p.a,{show:t,onHide:function(){return l(!1)},centered:!0,dialogClassName:"border-radius-2",style:{background:"none"}},r.a.createElement(p.a.Body,{style:{background:"rgba(0.1, 0.1, 0.1, 0.8)"}},r.a.createElement(E.a,{url:"https://oxfordhack.us17.list-manage.com/subscribe/post?u=6d21f884b8201af11f1246c51&amp;id=1d61d1ba22",render:function(e){var a=e.subscribe,t=e.status,n=e.message;return r.a.createElement(h,{status:t,message:n,onValidated:function(e){return a(e)}})}}))))},g=(t(104),t(105),t(36)),v=t.n(g),b=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("a",{href:"#landingscreen",onClick:function(){return!1}},r.a.createElement("img",{src:v.a,alt:"Logo",style:{maxHeight:"75px"}})),r.a.createElement("div",{className:"bar"},r.a.createElement("a",{className:"first after fancy",href:"#about"},r.a.createElement("p",{className:"element"}," About ")),r.a.createElement("a",{className:"first after fancy",href:"#event",onClick:function(){return!1}},r.a.createElement("p",{className:"element"}," Event ")),r.a.createElement("a",{className:"first after fancy",href:"#faq",onClick:function(){return!1}},r.a.createElement("p",{className:"element"}," FAQ ")),r.a.createElement("a",{className:"first after fancy",href:"#committee",onClick:function(){return!1}},r.a.createElement("p",{className:"element"}," Committee ")),r.a.createElement("a",{className:"first after fancy",href:"#sponsors",onClick:function(){return!1}},r.a.createElement("p",{className:"element"}," Sponsors ")),r.a.createElement(y,null),r.a.createElement("a",{id:"mlh-trust-badge",style:{maxWidth:"100px",minWidth:"60px",width:"10%",zIndex:"10000"},href:"https://mlh.io/seasons/eu-2021/events?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=yellow",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-yellow.svg",alt:"Major League Hacking 2021 Hackathon Season",style:{width:"100%"}}))))},w=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("a",{id:"mlh-trust-badge",style:{maxWidth:"100px",minWidth:"60px",width:"10%",zIndex:"10000"},href:"https://mlh.io/seasons/eu-2021/events?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=yellow",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-yellow.svg",alt:"Major League Hacking 2021 Hackathon Season",style:{width:"100%"}})),r.a.createElement("a",{href:"#landingscreen",onClick:function(){return!1}},r.a.createElement("img",{src:v.a,alt:"Logo",style:{maxHeight:"70px",padding:"5px"}})),r.a.createElement(f,null,r.a.createElement("a",{className:"first after fancy",href:"#landingscreen"},r.a.createElement("p",{className:"element-big"}," Home ")),r.a.createElement("a",{className:"first after fancy",href:"#about"},r.a.createElement("p",{className:"element-big"}," About ")),r.a.createElement("a",{className:"first after fancy",href:"#event",onClick:function(){return!1}},r.a.createElement("p",{className:"element-big"}," Event ")),r.a.createElement("a",{className:"first after fancy",href:"#faq",onClick:function(){return!1}},r.a.createElement("p",{className:"element-big"}," FAQ ")),r.a.createElement("a",{className:"first after fancy",href:"#committee",onClick:function(){return!1}},r.a.createElement("p",{className:"element-big"}," Committee ")),r.a.createElement("a",{className:"first after fancy",href:"#sponsors",onClick:function(){return!1}},r.a.createElement("p",{className:"element-big"}," Sponsors "))))},N=function(){var e=!Object(s.useMediaQuery)({query:"(max-width: 1224px)"});return r.a.createElement("div",{className:"navbar",id:"myNavbar"},e?r.a.createElement(b,null):r.a.createElement(w,null))},k=(t(106),t(18)),x=(t(108),function(){return r.a.createElement("a",{className:"container",style:{transform:"scaleX(2) scaleY(0.75)"},href:"#about"},r.a.createElement("div",{className:"content"},r.a.createElement("svg",{id:"more-arrows"},r.a.createElement("polygon",{className:"arrow-top",points:"37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "}),r.a.createElement("polygon",{className:"arrow-middle",points:"37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "}),r.a.createElement("polygon",{className:"arrow-bottom",points:"37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "}))))}),O=t(37),C=t.n(O),I=t(38),_=t.n(I),S=function(){var e=!Object(s.useMediaQuery)({query:"(max-width: 1224px)"});return r.a.createElement("div",{className:"landing"},e?r.a.createElement("p",{style:{width:"100%"}},k.isSafari?r.a.createElement("img",{src:_.a,alt:"Look at him go!",style:{width:"40%"}}):r.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,width:"40%"},r.a.createElement("source",{src:C.a,type:"video/webm"}),"Sorry, your browser doesn't support embedded videos.")):r.a.createElement("p",null,k.isSafari?r.a.createElement("img",{src:_.a,alt:"Look at him go!",style:{width:"90%",paddingTop:"50px"}}):r.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,width:"90%",style:{paddingTop:"50px"}},r.a.createElement("source",{src:C.a,type:"video/webm"}),"Sorry, your browser doesn't support embedded videos.")),r.a.createElement("p",{className:"coding"},"LET YOUR IDEAS TAKE FLIGHT, ",r.a.createElement("br",null),"SLEEP ALL DAY AND CODE ALL NIGHT!"),!e&&r.a.createElement(y,{place:"front"}),r.a.createElement(x,null))},B=t(73),A=Object(B.a)({wrapper:{position:"relative",width:"100%",paddingBottom:"56.25%",margin:"1rem 0"},iframe:{position:"absolute",width:"100%",height:"100%",left:0,top:0,border:0}}),H=function(e){var a=e.src,t=e.title,n=A();return r.a.createElement("div",{style:{padding:"40px"}},r.a.createElement("div",{className:n.wrapper},r.a.createElement("iframe",{className:n.iframe,src:a,title:t,allowFullScreen:!0})))},q=function(){return r.a.createElement("div",{className:"default"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center justify-content-center"},r.a.createElement("div",{className:"col-lg-6 col-md-12 order-lg-first order-last"},r.a.createElement("div",{className:"title"},"ABOUT OXFORD HACK"),r.a.createElement("p",{className:"main-text"},"Oxford Hack is the official Oxford student Hackathon, where over 300 people gather every year to collaborate, innovate, learn and experiment while creating a project from scratch in 24 hours. We give you all the resources you need, from hardware and APIs to workshops, sponsors and volunteers who can help you with whatever questions you might have. In a few words, you attend to have fun, learn things you didn\u2019t even know existed and see your ideas come to life. This year we are moving everything digitally - for more information about what is going to change, check out the Event page or the FAQs.")),r.a.createElement("div",{className:"col-lg-6 col-md-12 order-lg-last order-first"},r.a.createElement(H,{title:"Previous Event",src:"https://www.youtube-nocookie.com/embed/FqBxnolqFpk"})))))},T=(t(113),t(55)),j=t.n(T),K=t(56),M=t.n(K),L=function(){var e=!Object(s.useMediaQuery)({query:"(max-width: 1224px)"});return r.a.createElement("div",{className:"default"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center justify-content-center"},r.a.createElement("div",{className:"col-lg-6 col-md-12 order-first"},e&&(k.isSafari?r.a.createElement("img",{src:M.a,alt:"Look at him go!",style:{width:"75%"}}):r.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,width:"75%"},r.a.createElement("source",{src:j.a,type:"video/webm"}),"Sorry, your browser doesn't support embedded videos."))),r.a.createElement("div",{className:"col-lg-6 col-md-12 order-last"},r.a.createElement("div",{className:"title"},"OXFORD HACK 2020 ONLINE"),r.a.createElement("p",{className:"main-text"},"Oxford Hack 2020 will be the official Oxford student hackathon this year. We want to bring together as many like minded people together with the purpose of creating cool things. Though we can\u2019t be together in person, in 24 hours we will provide our hackers with APIs, mentoring and prize categories to provide direction. We also want to stay engaged with our community despite the distance, so we will run unrelated but fun activities. The aim of these is to help teams come together, provide a break from work and simulate the random interactions that happen when a Hackathon is physical.")))))},D=(t(114),function(){return r.a.createElement("div",{className:"default"},r.a.createElement("div",{className:"title"},"SPONSORS"),r.a.createElement("p",{style:{textAlign:"center"}},"Stay tuned for updates about this year's sponsors! ",r.a.createElement("br",null),"Interested in sponsoring us? Send us an email at sponsorship@oxfordhack.co.uk!"))}),R=(t(115),function(e){return r.a.createElement("div",{className:"cf"},r.a.createElement("img",{src:e.img2,alt:e.alt,className:"default-image bottom"}),r.a.createElement("img",{src:e.img1,alt:e.alt,className:"default-image top"}))}),W=t(57),P=t.n(W),F=t(58),Q=t.n(F),z=t(59),Y=t.n(z),J=t(60),G=t.n(J),X=t(61),U=t.n(X),V=t(62),$=t.n(V),Z=t(63),ee=t.n(Z),ae=t(64),te=t.n(ae),ne=t(65),re=t.n(ne),le=t(66),oe=t.n(le),ce=t(67),ie=t.n(ce),se=t(68),me=t.n(se),de=(t(116),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"title"},"MEET THE TEAM"),r.a.createElement("div",{className:"committee-row"},r.a.createElement("div",{className:"committee-col"},r.a.createElement(R,{img1:P.a,img2:Q.a}),r.a.createElement("h3",null,"Alexandra Manciu"),r.a.createElement("h5",null,"HACKATHON DIRECTOR")),r.a.createElement("div",{className:"committee-col"},r.a.createElement(R,{img1:ee.a,img2:te.a}),r.a.createElement("h3",null,"Serban Slincu"),r.a.createElement("h5",null,"HACKATHON DIRECTOR")),r.a.createElement("div",{className:"committee-col"},r.a.createElement(R,{img1:re.a,img2:oe.a}),r.a.createElement("h3",null,"Sonia Jakubiak"),r.a.createElement("h5",null,"SPONSORSHIP DIRECTOR")),r.a.createElement("div",{className:"committee-col"},r.a.createElement(R,{img1:U.a,img2:$.a}),r.a.createElement("h3",null,"Jonny Elkin"),r.a.createElement("h5",null,"MARKETING DIRECTOR")),r.a.createElement("div",{className:"committee-col"},r.a.createElement(R,{img1:Y.a,img2:G.a}),r.a.createElement("h3",null,"Ilia Manolov"),r.a.createElement("h5",null,"TECHNICAL DIRECTOR")),r.a.createElement("div",{className:"committee-col"},r.a.createElement(R,{img1:ie.a,img2:me.a}),r.a.createElement("h3",null,"Deniz de Barros"),r.a.createElement("h5",null,"DESIGN DIRECTOR"))))}),ue=t(128),fe=t(129),pe=(t(117),t(69)),Ee=t(15),he=(t(118),function(e){var a=e.children,t=e.eventKey,l=(e.text,Object(n.useContext)(Ee.a)),o=Object(pe.b)(t,(function(){return console.log("totally custom!")})),c=l===t,i=r.a.Children.toArray(a)[0].props.children;return console.log(i),r.a.createElement("button",{style:{outline:"none"},className:c?"pressed":"notPressed",type:"button",onClick:o},r.a.createElement("h2",null,i,c?" -":" +"))}),ye=t(70),ge=t.n(ye),ve=t(71),be=t.n(ve),we=function(){var e=!Object(s.useMediaQuery)({query:"(max-width: 1224px)"});return r.a.createElement("div",{className:"container",style:{textJustify:"center"}},r.a.createElement("div",{className:"row align-items-center justify-content-center"},r.a.createElement(ue.a,{className:"default col-lg-6 col-md-12 order-lg-first order-last",style:{marginBottom:"2.5rem"}},r.a.createElement("div",{className:"title"},"FREQUENTLY ASKED QUESTIONS"),r.a.createElement(fe.a,{style:{background:"none",border:"none"}},r.a.createElement(fe.a.Body,{className:"faq-question",style:{background:"none",border:"none"}},r.a.createElement(he,{eventKey:"0"},r.a.createElement("p",null,"What is Oxford Hack?"))),r.a.createElement(ue.a.Collapse,{eventKey:"0"},r.a.createElement(fe.a.Body,{className:"main-text"},r.a.createElement("p",null,"Oxford Hack is the official Oxford student Hackathon, where over 300 people gather every year to collaborate, innovate, learn and experiment while creating a project from scratch in 24 hours. We give you all the resources you need, from hardware and APIs to workshops, sponsors and volunteers who can help you with whatever questions you might have. In a few words, you attend to have fun, learn things you didn\u2019t even know existed and see your ideas come to life. This year we are moving everything digitally - for more information about what is going to change, check out the Event page.                        ")))),r.a.createElement(fe.a,{style:{background:"none",border:"none"}},r.a.createElement(fe.a.Body,{className:"faq-question",style:{background:"none",border:"none"}},r.a.createElement(he,{eventKey:"1"},r.a.createElement("p",null,"What is a digital Oxford Hack going to look like?"))),r.a.createElement(ue.a.Collapse,{eventKey:"1"},r.a.createElement(fe.a.Body,{className:"main-text"},r.a.createElement("p",null,"Oxford Hack 2020 will be the same as ever - only online! We won\u2019t be meeting in person and we will have workshops, meal breaks and other activities virtually. Don\u2019t worry, we will still do our best to engage our hackers and provide you with innovative ways to meet the other people.                        ")))),r.a.createElement(fe.a,{style:{background:"none",border:"none"}},r.a.createElement(fe.a.Body,{className:"faq-question",style:{background:"none",border:"none"}},r.a.createElement(he,{eventKey:"2"},r.a.createElement("p",null,"What makes Oxford Hack special?"))),r.a.createElement(ue.a.Collapse,{eventKey:"2"},r.a.createElement(fe.a.Body,{className:"main-text"},r.a.createElement("p",null,"Oxford Hack is an inclusive and encouraging event, providing a unique opportunity to hone your skills in any technical field you like. We don\u2019t impose any restrictions on the product your team makes, so you can be as experimental and disciplined as you like. We\u2019ve got some wonderful sponsors, who\u2019ll be arranging their own prize categories and workshops.")))),r.a.createElement(fe.a,{style:{background:"none",border:"none"}},r.a.createElement(fe.a.Body,{className:"faq-question",style:{background:"none",border:"none"}},r.a.createElement(he,{eventKey:"3"},r.a.createElement("p",null,"Can I participate in Oxford Hack?"))),r.a.createElement(ue.a.Collapse,{eventKey:"3"},r.a.createElement(fe.a.Body,{className:"main-text"},r.a.createElement("p",null,"Students at all levels of study are welcome to attend.")))),r.a.createElement(fe.a,{style:{background:"none",border:"none"}},r.a.createElement(fe.a.Body,{className:"faq-question",style:{background:"none",border:"none"}},r.a.createElement(he,{eventKey:"4"},r.a.createElement("p",null,"Do I need to have a team beforehand?"))),r.a.createElement(ue.a.Collapse,{eventKey:"4"},r.a.createElement(fe.a.Body,{className:"main-text"},r.a.createElement("p",null,"No - we\u2019ll help you e-meet everyone and find people with the same interests as you.")))),r.a.createElement(fe.a,{style:{background:"none",border:"none"}},r.a.createElement(fe.a.Body,{className:"faq-question",style:{background:"none",border:"none"}},r.a.createElement(he,{eventKey:"5"},r.a.createElement("p",null,"Do I need to pay to participate?"))),r.a.createElement(ue.a.Collapse,{eventKey:"5"},r.a.createElement(fe.a.Body,{className:"main-text"},r.a.createElement("p",null,"No - Oxford Hack is completely free to attend.")))),r.a.createElement(fe.a,{style:{background:"none",border:"none"}},r.a.createElement(fe.a.Body,{className:"faq-question",style:{background:"none",border:"none"}},r.a.createElement(he,{eventKey:"6"},r.a.createElement("p",null,"What do I need to have to participate?"))),r.a.createElement(ue.a.Collapse,{eventKey:"6"},r.a.createElement(fe.a.Body,{className:"main-text"},r.a.createElement("p",null,"You\u2019ll need to have a computer to work on and a good internet connection to participate in the workshops")))),r.a.createElement(fe.a,{style:{background:"none",border:"none"}},r.a.createElement(fe.a.Body,{className:"faq-question",style:{background:"none",border:"none"}},r.a.createElement(he,{eventKey:"7"},r.a.createElement("p",null,"How many people can be in a team?"))),r.a.createElement(ue.a.Collapse,{eventKey:"7"},r.a.createElement(fe.a.Body,{className:"main-text"},r.a.createElement("p",null,"You can have up to 4 people in a team.")))),r.a.createElement(fe.a,{style:{background:"none",border:"none"}},r.a.createElement(fe.a.Body,{className:"faq-question",style:{background:"none",border:"none"}},r.a.createElement(he,{eventKey:"8"},r.a.createElement("p",null,"Can I start working on my project before the event?"))),r.a.createElement(ue.a.Collapse,{eventKey:"8"},r.a.createElement(fe.a.Body,{className:"main-text"},r.a.createElement("p",null,"No - because we want our event to be fair, everyone has the same starting line, so all projects have to be created from scratch during the 24 hours of the hackathon.")))),r.a.createElement(fe.a,{style:{background:"none",border:"none"}},r.a.createElement(fe.a.Body,{className:"faq-question",style:{background:"none",border:"none"}},r.a.createElement(he,{eventKey:"9"},r.a.createElement("p",null,"Error 404 question not found"))),r.a.createElement(ue.a.Collapse,{eventKey:"9"},r.a.createElement(fe.a.Body,{className:"main-text"},r.a.createElement("p",null,"Have more questions? Contact us at committee@oxfordhack.co.uk."))))),r.a.createElement("p",{className:"col-lg-6 col-md-12 order-lg-first order-last",style:{width:"100%"}},k.isSafari?r.a.createElement("img",{src:be.a,alt:"He's just sittin' there...",style:{width:e?"75%":"40%"}}):r.a.createElement("video",{autoPlay:!0,loop:!0,width:e?"75%":"40%"},r.a.createElement("source",{src:ge.a,type:"video/webm"}),"Sorry, your browser doesn't support embedded videos."))))},Ne=(t(119),t(72)),ke=t.n(Ne),xe=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("img",{src:ke.a,alt:"I am a footer"}))},Oe=(t(120),t(40)),Ce=function(){var e=!Object(s.useMediaQuery)({query:"(max-width: 1224px)"});return r.a.createElement("div",{style:e?{}:{position:"absolute",left:"50%",transform:"translateX(-50%)"}},r.a.createElement("div",{className:"hover social",style:e?{}:{position:"unset"}},r.a.createElement("span",null,"Follow us"),r.a.createElement("a",{className:"social-link",href:"https://www.facebook.com/oxfordhack2020",target:"_blank"},r.a.createElement(Oe.a,{icon:["fab","facebook"]})),r.a.createElement("a",{className:"social-link",href:"https://www.youtube.com/channel/UCEwhr5k4KNnkKgTEbh62p1Q",target:"_blank"},r.a.createElement(Oe.a,{icon:["fab","youtube"]}))))};t(123);var Ie=function(){for(var e=function(){var e=Object(n.useState)({width:void 0,height:void 0}),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}(),a=[],t=0;t<100+Math.floor(100*Math.random());t++){var l=Math.random(),o=Math.random(),c=Math.floor(3*Math.random()+1),i={x:e.width*l,y:e.height*o},s=r.a.createElement("div",{className:"star star-type"+c,key:"star "+t,style:{top:i.y,left:i.x}});a.push(s)}return r.a.createElement("div",{className:"galaxy"},a)},_e=(t(124),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Ie,null),r.a.createElement("div",{className:"App-body",style:{position:"relative"}},r.a.createElement(N,null),r.a.createElement("div",{style:{scrollBehavior:"smooth"}},r.a.createElement(i.a,{animateIn:"animate__fadeIn",animateOut:"animate__fadeOut"},r.a.createElement("div",{id:"landingscreen"},r.a.createElement(S,null)),r.a.createElement("div",{style:{marginBottom:"20vw"}})),r.a.createElement(i.a,{animateIn:"animate__fadeIn",animateOut:"animate__fadeOut"},r.a.createElement("div",{id:"about",style:{paddingTop:"5vw"}},r.a.createElement(q,null)),r.a.createElement("div",{style:{marginBottom:"15vw"}})),r.a.createElement(i.a,{animateIn:"animate__fadeIn",animateOut:"animate__fadeOut"},r.a.createElement("div",{id:"event",style:{paddingTop:"15vw"}},r.a.createElement(L,null))),r.a.createElement("div",{style:{marginBottom:"5vw"}}),r.a.createElement(i.a,{animateIn:"animate__fadeIn",animateOut:"animate__fadeOut"}),r.a.createElement("div",{style:{marginBottom:"5vw"}}),r.a.createElement(i.a,{animateIn:"animate__fadeIn",animateOut:"animate__fadeOut"},r.a.createElement("div",{id:"faq",style:{paddingTop:"15vw"}},r.a.createElement(we,null))),r.a.createElement("div",{style:{marginBottom:"5vw"}}),r.a.createElement(i.a,{animateIn:"animate__fadeIn",animateOut:"animate__fadeOut"},r.a.createElement("div",{id:"committee",style:{paddingTop:"15vw"}},r.a.createElement(de,null))),r.a.createElement("div",{style:{marginBottom:"5vw"}}),r.a.createElement(i.a,{animateIn:"animate__fadeIn",animateOut:"animate__fadeOut"},r.a.createElement("div",{id:"sponsors",style:{paddingTop:"15vw"}},r.a.createElement(D,null))),r.a.createElement("div",{style:{marginBottom:"5vw"}}),r.a.createElement(Ce,null),r.a.createElement("div",{style:{marginBottom:"5vw"}}),r.a.createElement("div",{id:"footer",style:{paddingTop:"5vw"}},r.a.createElement(xe,null)))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se=t(27),Be=t(19);Se.b.add(Be.e,Be.a,Be.c,Be.d,Be.b),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[76,1,2]]]);
//# sourceMappingURL=main.0d758d92.chunk.js.map