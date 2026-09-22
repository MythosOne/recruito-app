import{r as s,U as h,j as e,Y as z,a8 as H}from"./index-CkdmXoCS.js";const O={search:"",position:"",status:""},J=[{id:"1",avatarUrl:"https://i.pravatar.cc/300?img=1",candidateInfo:{firstName:"John",lastName:"Doe",position:"Frontend Developer"},status:"pending",expandedInfo:{email:"john.doe@example.com",phone:"+380671111111",experience:4,skills:["React","TypeScript","Redux"],location:"Kyiv",summary:"4 years of commercial frontend development experience."}},{id:"2",avatarUrl:"https://i.pravatar.cc/300?img=2",candidateInfo:{firstName:"Emily",lastName:"Smith",position:"UI/UX Designer"},status:"approved",expandedInfo:{email:"emily.smith@example.com",phone:"+380672222222",experience:6,skills:["Figma","Adobe XD","Photoshop"],location:"Lviv",summary:"Experienced designer focused on mobile applications."}},{id:"3",avatarUrl:"https://i.pravatar.cc/300?img=3",candidateInfo:{firstName:"Michael",lastName:"Brown",position:"Backend Developer"},status:"pending",expandedInfo:{email:"michael.brown@example.com",phone:"+380673333333",experience:5,skills:["Node.js","Express","MongoDB"],location:"Odesa",summary:"Backend engineer with REST API development experience."}},{id:"4",avatarUrl:"https://i.pravatar.cc/300?img=4",candidateInfo:{firstName:"Sophia",lastName:"Wilson",position:"QA Engineer"},status:"rejected",expandedInfo:{email:"sophia.wilson@example.com",phone:"+380674444444",experience:3,skills:["Cypress","Playwright","Jest"],location:"Dnipro",summary:"Automation QA engineer with frontend testing experience."}},{id:"5",avatarUrl:"https://i.pravatar.cc/300?img=5",candidateInfo:{firstName:"Daniel",lastName:"Taylor",position:"DevOps Engineer"},status:"approved",expandedInfo:{email:"daniel.taylor@example.com",phone:"+380675555555",experience:7,skills:["Docker","Kubernetes","AWS"],location:"Kharkiv",summary:"Infrastructure and CI/CD specialist."}},{id:"6",avatarUrl:"https://i.pravatar.cc/300?img=6",candidateInfo:{firstName:"Olivia",lastName:"Martin",position:"React Native Developer"},status:"pending",expandedInfo:{email:"olivia.martin@example.com",phone:"+380676666666",experience:4,skills:["React Native","Expo","TypeScript"],location:"Kyiv",summary:"Develops cross-platform mobile applications."}},{id:"7",avatarUrl:"https://i.pravatar.cc/300?img=7",candidateInfo:{firstName:"James",lastName:"Anderson",position:"Full Stack Developer"},status:"approved",expandedInfo:{email:"james.anderson@example.com",phone:"+380677777777",experience:8,skills:["React","Node.js","PostgreSQL"],location:"Zaporizhzhia",summary:"Full stack developer experienced in scalable web applications."}},{id:"8",avatarUrl:"https://i.pravatar.cc/300?img=8",candidateInfo:{firstName:"Emma",lastName:"Thomas",position:"Project Manager"},status:"pending",expandedInfo:{email:"emma.thomas@example.com",phone:"+380678888888",experience:9,skills:["Scrum","Kanban","Jira"],location:"Vinnytsia",summary:"Led software teams delivering enterprise products."}},{id:"9",avatarUrl:"https://i.pravatar.cc/300?img=9",candidateInfo:{firstName:"William",lastName:"Harris",position:"Business Analyst"},status:"rejected",expandedInfo:{email:"william.harris@example.com",phone:"+380679999999",experience:5,skills:["SQL","BPMN","Confluence"],location:"Cherkasy",summary:"Business analyst with experience gathering product requirements."}},{id:"10",avatarUrl:"https://i.pravatar.cc/300?img=10",candidateInfo:{firstName:"Isabella",lastName:"Moore",position:"Data Analyst"},status:"pending",expandedInfo:{email:"isabella.moore@example.com",phone:"+380670000000",experience:2,skills:["SQL","Power BI","Excel"],location:"Poltava",summary:"Junior data analyst passionate about data visualization."}}];function K(n,t,a,c){var u=this,i=s.useRef(null),d=s.useRef(0),r=s.useRef(0),o=s.useRef(null),x=s.useRef([]),f=s.useRef(),v=s.useRef(),k=s.useRef(n),p=s.useRef(!0),g=s.useRef(),C=s.useRef();k.current=n;var j=typeof window<"u",w=!t&&t!==0&&j;if(typeof n!="function")throw new TypeError("Expected a function");t=+t||0;var P=!!(a=a||{}).leading,A=!("trailing"in a)||!!a.trailing,N=!!a.flushOnExit&&A,I="maxWait"in a,T="debounceOnServer"in a&&!!a.debounceOnServer,D=I?Math.max(+a.maxWait||0,t):null,M=s.useMemo(function(){var b=function(l){var m=x.current,y=f.current;return x.current=f.current=null,d.current=l,r.current=r.current||l,v.current=k.current.apply(y,m)},S=function(l,m){w&&cancelAnimationFrame(o.current),o.current=w?requestAnimationFrame(l):setTimeout(l,m)},U=function(l){if(!p.current)return!1;var m=l-i.current;return!i.current||m>=t||m<0||I&&l-d.current>=D},B=function(l){return o.current=null,A&&x.current?b(l):(x.current=f.current=null,v.current)},L=function l(){var m=Date.now();if(P&&r.current===d.current&&$(),U(m))return B(m);if(p.current){var y=t-(m-i.current),E=I?Math.min(y,D-(m-d.current)):y;S(l,E)}},$=function(){c&&c({})},R=function(){if(j||T){var l,m=Date.now(),y=U(m);if(x.current=[].slice.call(arguments),f.current=u,i.current=m,N&&!g.current&&(g.current=function(){var E;((E=globalThis.document)==null?void 0:E.visibilityState)==="hidden"&&C.current.flush()},(l=globalThis.document)==null||l.addEventListener==null||l.addEventListener("visibilitychange",g.current)),y){if(!o.current&&p.current)return d.current=i.current,S(L,t),P?b(i.current):v.current;if(I)return S(L,t),b(i.current)}return o.current||S(L,t),v.current}};return R.cancel=function(){var l=o.current;l&&(w?cancelAnimationFrame(o.current):clearTimeout(o.current)),d.current=0,x.current=i.current=f.current=o.current=null,l&&c&&c({})},R.isPending=function(){return!!o.current},R.flush=function(){return o.current?B(Date.now()):v.current},R},[P,I,t,D,A,N,w,j,T,c]);return C.current=M,s.useEffect(function(){return p.current=!0,function(){var b;N&&C.current.flush(),g.current&&((b=globalThis.document)==null||b.removeEventListener==null||b.removeEventListener("visibilitychange",g.current),g.current=null),p.current=!1}},[N]),M}function Q(n,t){return n===t}function W(n,t,a){var c=Q,u=s.useRef(n),i=s.useState({})[1],d=K(s.useCallback(function(o){u.current=o,i({})},[i]),t,a,i),r=s.useRef(n);return c(r.current,n)||(d(n),r.current=n),[u.current,d]}const V=h.section`
  grid-area: hr-filters;
  width: 100%;
  height: 100px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`,_=h.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`,q=({filters:n,onFiltersChange:t,availablePositions:a})=>{const[c,u]=s.useState(n.search),[i]=W(c,300);s.useEffect(()=>{t({...n,search:i})},[i]);const d=(r,o)=>{t({...n,[o]:r.target.value})};return e.jsxs(V,{children:[e.jsx(_,{children:"HR Filters"}),e.jsxs("label",{children:["Search candidates",e.jsx("input",{value:c,placeholder:"Search candidate...",type:"search",onChange:r=>u(r.target.value)})]}),e.jsxs("label",{children:["Position",e.jsxs("select",{value:n.position,onChange:r=>{d(r,"position")},children:[e.jsx("option",{value:"",children:"All positions"}),a.map(r=>e.jsx("option",{value:r,children:r},r))]})]}),e.jsxs("label",{children:["Status",e.jsxs("select",{value:n.status,onChange:r=>d(r,"status"),children:[e.jsx("option",{value:"",children:"All statuses"}),e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"approved",children:"Approved"}),e.jsx("option",{value:"rejected",children:"Rejected"})]})]}),e.jsx("button",{type:"button",onClick:()=>t(O),children:"Reset filters"})]})},X=h.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  max-width: 850px;
  max-height: 100px;
`,G=h.img`
  width: 10%;
  height: auto;
`,Y=h.div`
  margin-top: 8px;
`,Z=h.div`
  margin-top: 8px;
`,ee=h.button`
  background: none;
  border: none;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 8px;
`,ne=h.span`
  display: inline-block;
  margin-right: 0.5rem;
  cursor: pointer;
`,te=h.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  margin-right: 8px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`,ae=h.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #da190b;
  }
`,re=({candidate:n,setIsOpen:t})=>{const{candidateInfo:{firstName:a,lastName:c,position:u},expandedInfo:{email:i,phone:d,experience:r,skills:o,location:x,summary:f}}=n;return e.jsxs("div",{className:"candidate-detail-modal",children:[e.jsx("button",{onClick:()=>t(!1),children:"Close"}),e.jsxs("div",{className:"modal-content",children:[e.jsxs("h2",{children:[a," ",c]}),e.jsxs("p",{children:["Position: ",u]}),e.jsxs("p",{children:["Email: ",i]}),e.jsxs("p",{children:["Phone: ",d]}),e.jsxs("p",{children:["Experience: ",r," years"]}),e.jsxs("p",{children:["Skills: ",o.join(", ")]}),e.jsxs("p",{children:["Location: ",x]}),e.jsxs("p",{children:["Summary: ",f]})]})]})},ie=({candidate:n,onStatusChange:t})=>{const{avatarUrl:a,candidateInfo:{firstName:c,lastName:u,position:i},expandedInfo:{experience:d,location:r},status:o}=n,[x,f]=s.useState(!1);return e.jsxs(X,{children:[e.jsx(G,{alt:`${c} ${u}`,src:a}),e.jsxs(Y,{children:[e.jsxs("strong",{children:[c," ",u]}),e.jsx("span",{children:i}),e.jsxs("span",{children:[d," years of experience, located in ",r]})]}),e.jsx(Z,{children:o}),e.jsxs(ee,{type:"button","aria-label":`View details of ${c} ${u}`,onClick:()=>f(!0),children:[e.jsx(ne,{"aria-hidden":"true",children:"⌄"}),"View details"]}),x&&e.jsx(re,{candidate:n,setIsOpen:f}),e.jsx(te,{type:"button",onClick:()=>t(n.id,"approved"),children:"Approve"}),e.jsx(ae,{type:"button",onClick:()=>t(n.id,"rejected"),children:"Reject"})]})},se=h.section`
  grid-area: candidates-list;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 68vh;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`,oe=h.ul`
  /* overflow: scroll; */
  list-style: none;
  padding: 0;
  margin: 0;
`,ce=h.h2`
  font-size: 24px;
  margin-bottom: 20px;
`,le=({candidates:n,onStatusChange:t})=>e.jsxs(se,{children:[e.jsx(ce,{children:"Candidates List"}),e.jsx(oe,{children:n.map(a=>e.jsx(ie,{candidate:a,onStatusChange:t},a.id))})]}),{colors:{primary:de,secondary:ue}}=z,pe=h.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  
  .Mui-selected {
    background-color: ${de} !important;
  }

  .MuiPaginationItem-root:hover {
    background-color: ${ue};
  }
`,me=({currentPage:n,totalPages:t,onPageChange:a})=>{const c=(u,i)=>{a(i)};return e.jsx(pe,{"aria-label":"Candidates pagination",children:e.jsx(H,{count:t,page:n,onChange:c,shape:"rounded",color:"primary"})})},F=7,xe=()=>{const[n,t]=s.useState(1),[a,c]=s.useState(O),[u,i]=s.useState(J),d=[...new Set(u.map(p=>p.candidateInfo.position))],r=u.filter(p=>(p.candidateInfo.position===a.position||!a.position)&&(p.status===a.status||!a.status)&&(`${p.candidateInfo.firstName} ${p.candidateInfo.lastName}`.toLowerCase().trim().includes(a.search.toLowerCase().trim())||!a.search)),o=Math.ceil(r.length/F),x=(n-1)*F,f=r.slice(x,x+F),v=p=>{c(p),t(1)},k=(p,g)=>{i(C=>C.map(j=>j.id===p?{...j,status:g}:j))};return e.jsxs(e.Fragment,{children:[e.jsx(q,{filters:a,onFiltersChange:v,availablePositions:d}),e.jsx(le,{candidates:f,onStatusChange:k}),e.jsx(me,{currentPage:n,totalPages:o,onPageChange:t})]})};export{xe as default};
