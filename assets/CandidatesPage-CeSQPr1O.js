import{r as i,q as n,x as N,j as e,P as J}from"./index-DpDYpMrZ.js";const V={search:"",position:"",status:""},K=[{id:"1",avatarUrl:"https://i.pravatar.cc/300?img=1",candidateInfo:{firstName:"John",lastName:"Doe",position:"Frontend Developer"},status:"Pending",expandedInfo:{email:"john.doe@example.com",phone:"+380671111111",experience:4,skills:["React","TypeScript","Redux"],location:"Kyiv",summary:"4 years of commercial frontend development experience."}},{id:"2",avatarUrl:"https://i.pravatar.cc/300?img=2",candidateInfo:{firstName:"Emily",lastName:"Smith",position:"UI/UX Designer"},status:"Approved",expandedInfo:{email:"emily.smith@example.com",phone:"+380672222222",experience:6,skills:["Figma","Adobe XD","Photoshop"],location:"Lviv",summary:"Experienced designer focused on mobile applications."}},{id:"3",avatarUrl:"https://i.pravatar.cc/300?img=3",candidateInfo:{firstName:"Michael",lastName:"Brown",position:"Backend Developer"},status:"Pending",expandedInfo:{email:"michael.brown@example.com",phone:"+380673333333",experience:5,skills:["Node.js","Express","MongoDB"],location:"Odesa",summary:"Backend engineer with REST API development experience."}},{id:"4",avatarUrl:"https://i.pravatar.cc/300?img=4",candidateInfo:{firstName:"Sophia",lastName:"Wilson",position:"QA Engineer"},status:"Rejected",expandedInfo:{email:"sophia.wilson@example.com",phone:"+380674444444",experience:3,skills:["Cypress","Playwright","Jest"],location:"Dnipro",summary:"Automation QA engineer with frontend testing experience."}},{id:"5",avatarUrl:"https://i.pravatar.cc/300?img=5",candidateInfo:{firstName:"Daniel",lastName:"Taylor",position:"DevOps Engineer"},status:"Approved",expandedInfo:{email:"daniel.taylor@example.com",phone:"+380675555555",experience:7,skills:["Docker","Kubernetes","AWS"],location:"Kharkiv",summary:"Infrastructure and CI/CD specialist."}},{id:"6",avatarUrl:"https://i.pravatar.cc/300?img=6",candidateInfo:{firstName:"Olivia",lastName:"Martin",position:"React Native Developer"},status:"Pending",expandedInfo:{email:"olivia.martin@example.com",phone:"+380676666666",experience:4,skills:["React Native","Expo","TypeScript"],location:"Kyiv",summary:"Develops cross-platform mobile applications."}},{id:"7",avatarUrl:"https://i.pravatar.cc/300?img=7",candidateInfo:{firstName:"James",lastName:"Anderson",position:"Full Stack Developer"},status:"Approved",expandedInfo:{email:"james.anderson@example.com",phone:"+380677777777",experience:8,skills:["React","Node.js","PostgreSQL"],location:"Zaporizhzhia",summary:"Full stack developer experienced in scalable web applications."}},{id:"8",avatarUrl:"https://i.pravatar.cc/300?img=8",candidateInfo:{firstName:"Emma",lastName:"Thomas",position:"Project Manager"},status:"Pending",expandedInfo:{email:"emma.thomas@example.com",phone:"+380678888888",experience:9,skills:["Scrum","Kanban","Jira"],location:"Vinnytsia",summary:"Led software teams delivering enterprise products."}},{id:"9",avatarUrl:"https://i.pravatar.cc/300?img=9",candidateInfo:{firstName:"William",lastName:"Harris",position:"Business Analyst"},status:"Rejected",expandedInfo:{email:"william.harris@example.com",phone:"+380679999999",experience:5,skills:["SQL","BPMN","Confluence"],location:"Cherkasy",summary:"Business analyst with experience gathering product requirements."}},{id:"10",avatarUrl:"https://i.pravatar.cc/300?img=10",candidateInfo:{firstName:"Isabella",lastName:"Moore",position:"Data Analyst"},status:"Pending",expandedInfo:{email:"isabella.moore@example.com",phone:"+380670000000",experience:2,skills:["SQL","Power BI","Excel"],location:"Poltava",summary:"Junior data analyst passionate about data visualization."}}];function Q(t,r,a,s){var l=this,c=i.useRef(null),d=i.useRef(0),x=i.useRef(0),o=i.useRef(null),m=i.useRef([]),f=i.useRef(),v=i.useRef(),w=i.useRef(t),p=i.useRef(!0),b=i.useRef(),y=i.useRef();w.current=t;var g=typeof window<"u",I=!r&&r!==0&&g;if(typeof t!="function")throw new TypeError("Expected a function");r=+r||0;var A=!!(a=a||{}).leading,$=!("trailing"in a)||!!a.trailing,S=!!a.flushOnExit&&$,k="maxWait"in a,T="debounceOnServer"in a&&!!a.debounceOnServer,F=k?Math.max(+a.maxWait||0,r):null,B=i.useMemo(function(){var j=function(u){var h=m.current,C=f.current;return m.current=f.current=null,d.current=u,x.current=x.current||u,v.current=w.current.apply(C,h)},P=function(u,h){I&&cancelAnimationFrame(o.current),o.current=I?requestAnimationFrame(u):setTimeout(u,h)},U=function(u){if(!p.current)return!1;var h=u-c.current;return!c.current||h>=r||h<0||k&&u-d.current>=F},O=function(u){return o.current=null,$&&m.current?j(u):(m.current=f.current=null,v.current)},D=function u(){var h=Date.now();if(A&&x.current===d.current&&W(),U(h))return O(h);if(p.current){var C=r-(h-c.current),E=k?Math.min(C,F-(h-d.current)):C;P(u,E)}},W=function(){s&&s({})},R=function(){if(g||T){var u,h=Date.now(),C=U(h);if(m.current=[].slice.call(arguments),f.current=l,c.current=h,S&&!b.current&&(b.current=function(){var E;((E=globalThis.document)==null?void 0:E.visibilityState)==="hidden"&&y.current.flush()},(u=globalThis.document)==null||u.addEventListener==null||u.addEventListener("visibilitychange",b.current)),C){if(!o.current&&p.current)return d.current=c.current,P(D,r),A?j(c.current):v.current;if(k)return P(D,r),j(c.current)}return o.current||P(D,r),v.current}};return R.cancel=function(){var u=o.current;u&&(I?cancelAnimationFrame(o.current):clearTimeout(o.current)),d.current=0,m.current=c.current=f.current=o.current=null,u&&s&&s({})},R.isPending=function(){return!!o.current},R.flush=function(){return o.current?O(Date.now()):v.current},R},[A,k,r,F,$,S,I,g,T,s]);return y.current=B,i.useEffect(function(){return p.current=!0,function(){var j;S&&y.current.flush(),b.current&&((j=globalThis.document)==null||j.removeEventListener==null||j.removeEventListener("visibilitychange",b.current),b.current=null),p.current=!1}},[S]),B}function q(t,r){return t===r}function _(t,r,a){var s=q,l=i.useRef(t),c=i.useState({})[1],d=Q(i.useCallback(function(o){l.current=o,c({})},[c]),r,a,c),x=i.useRef(t);return s(x.current,t)||(d(t),x.current=t),[l.current,d]}const{shadows:X}=N,G=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 100px; */
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`,Z=n.h2`
  margin: 0 auto;
  font-size: 1.5rem;
  color: #333;
`,Y=n.div`
  display: flex;
  align-items: flex-end;
  gap: 30px;
`,ee=n.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`,ne=n.input`
  box-sizing: border-box;
  width: 200px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  font-size: 14px;
  padding: 4px;

  transition: var(--animation-border-color);

  &:hover,
  &:focus {
    outline: none;
    border: 2px solid var(--pr-color-hover);
  }
`,te=n.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`,re=n.select`
  box-sizing: border-box;
  width: 200px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  font-size: 14px;
  color: var(--text-secondary);

  transition: var(--animation-border-color);

  &:hover,
  &:focus {
    outline: none;
    border: 2px solid var(--pr-color-hover);
  }
`,oe=n.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`,ae=n.select`
  box-sizing: border-box;
  width: 200px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  font-size: 14px;
  color: var(--text-secondary);

  transition: var(--animation-border-color);

  &:hover,
  &:focus {
    outline: none;
    border: 2px solid var(--pr-color-hover);
  }
`,ie=n.button`
  width: 100px;
  height: 34px;
  border-radius: 80px;
  border: none;
  background-color: #f4e041;
  margin: 10px auto 0;

  cursor: pointer;

  transition:
    var(--animation-button);

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
    background-color: #f5cc66;
    box-shadow: ${X.hoverShadow};
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
    box-shadow: none;
  }

  &:disabled:hover,
  &:disabled:focus-visible {
    transform: none;
  }
`,se=({filters:t,onFiltersChange:r,availablePositions:a})=>{const[s,l]=i.useState(t.search),[c]=_(s,300);i.useEffect(()=>{r({...t,search:c})},[c]);const d=(o,m)=>{r({...t,[m]:o.target.value})},x=()=>{l(""),r(V)};return e.jsxs(G,{children:[e.jsx(Z,{children:"HR Filters"}),e.jsxs(Y,{children:[e.jsxs(ee,{children:["Search candidates",e.jsx(ne,{name:"search",value:s,placeholder:"Search candidate...",type:"search",onChange:o=>l(o.target.value)})]}),e.jsxs(te,{children:["Position",e.jsxs(re,{name:"position",value:t.position,onChange:o=>{d(o,"position")},children:[e.jsx("option",{value:"",children:"All positions"}),a.map(o=>e.jsx("option",{value:o,children:o},o))]})]}),e.jsxs(oe,{children:["Status",e.jsxs(ae,{name:"status",value:t.status,onChange:o=>d(o,"status"),children:[e.jsx("option",{value:"",children:"All statuses"}),e.jsx("option",{value:"Pending",children:"Pending"}),e.jsx("option",{value:"Approved",children:"Approved"}),e.jsx("option",{value:"Rejected",children:"Rejected"})]})]}),e.jsx(ie,{type:"button",onClick:x,children:"Reset filters"})]})]})},{shadows:H}=N,ce=n.div`
  position: fixed;
  inset: 0;
  z-index: 1001;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);

  opacity: ${({visible:t})=>t?1:0};
  transition: opacity 300ms ease-out;
`,le=n.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  border: 2px solid #f5cc66;
  border-radius: 16px;

  box-shadow: ${H.hoverShadow};
`,de=n.h2`
  margin-bottom: 16px;
`,ue=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`,pe=n.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`,xe=n.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`,me=n.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`,he=n.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`,fe=n.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`,be=n.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`,ve=n.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`,ge=n.button`
  width: 100px;
  height: 34px;
  border-radius: 80px;
  border: none;
  background-color: #f4e041;
  margin: 10px auto 0;

  cursor: pointer;

  transition:
    var(--animation-button);

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
    background-color: #f5cc66;
    box-shadow: ${H.hoverShadow};
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
    box-shadow: none;
  }

  &:disabled:hover,
  &:disabled:focus-visible {
    transform: none;
  }
`,ye=({candidate:t,isOpen:r,setIsOpen:a})=>{const[s,l]=i.useState(!1),[c,d]=i.useState(!1);i.useLayoutEffect(()=>{r?(d(!0),requestAnimationFrame(()=>{l(!0)})):l(!1)},[r]);const x=()=>{s||d(!1)};if(!c)return null;const{candidateInfo:{firstName:o,lastName:m,position:f},expandedInfo:{email:v,phone:w,experience:p,skills:b,location:y,summary:g}}=t;return e.jsx(ce,{visible:s,onTransitionEnd:x,children:e.jsxs(le,{role:"dialog","aria-modal":"true","aria-labelledby":"candidate-detail-modal",children:[e.jsxs(de,{children:["View details about ",o," ",m]}),e.jsxs(ue,{children:[e.jsxs(pe,{children:["Position: ",f]}),e.jsxs(xe,{children:["Email: ",v]}),e.jsxs(me,{children:["Phone: ",w]}),e.jsxs(he,{children:["Experience: ",p," years"]}),e.jsxs(fe,{children:["Skills: ",b.join(", ")]}),e.jsxs(be,{children:["Location: ",y]}),e.jsxs(ve,{children:["Summary: ",g]})]}),e.jsx(ge,{onClick:()=>a(!1),children:"Close"})]})})},{colors:L,shadows:{hoverShadow:z}}=N,je=n.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  /* margin: 16px; */
  min-width: 625px;
  min-height: 145px;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    border: 1px solid #f5cc66;
    box-shadow: ${z};
  }
`,we=n.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & > :last-child {
    margin-left: auto;
  }
`,Ce=n.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
`,ke=n.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Ie=n.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* margin-top: 8px; */
`,Se=n.h3`
  margin: 0;
`,Pe=n.p`
  margin: 0;
`,Re=n.p`
  margin: 0;
`,Ee=n.p`
  margin: 0;
`,Ne=n.span`
  font-weight: bold;
  color: ${({children:t})=>{switch(t){case"Approved":return L.success;case"Rejected":return L.error;case"Pending":return L.pending;default:return"black"}}};
`,Ae=n.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`,$e=n.button`
  background: none;
  border: none;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 8px;
`,Fe=n.span`
  display: inline-block;
  margin-right: 0.5rem;
  cursor: pointer;
`,De=n.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  /* margin-right: 8px; */
  cursor: pointer;

  transition:
    transform 250ms,
    background-color 250ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
    background-color: #45a049;
    box-shadow: ${z};
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
    box-shadow: none;
  }

  &:disabled:hover,
  &:disabled:focus-visible {
    transform: none;
  }
`,Le=n.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  transition:
    transform 250ms,
    background-color 250ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
    background-color: #da190b;
    box-shadow: ${z};
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
    box-shadow: none;
  }

  &:disabled:hover,
  &:disabled:focus-visible {
    transform: none;
  }
`,Me=({candidate:t,onStatusChange:r})=>{const{avatarUrl:a,candidateInfo:{firstName:s,lastName:l,position:c},expandedInfo:{experience:d,location:x},status:o}=t,[m,f]=i.useState(!1);return e.jsxs(je,{children:[e.jsxs(we,{children:[e.jsx(Ce,{children:e.jsx(ke,{alt:`${s} ${l}`,src:a})}),e.jsxs(Ie,{children:[e.jsxs(Se,{children:[s," ",l]}),e.jsx(Pe,{children:c}),e.jsxs(Re,{children:[d," years of experience"]}),e.jsxs(Ee,{children:["Located in ",x]})]}),e.jsx(Ne,{children:o})]}),e.jsxs(Ae,{children:[e.jsxs($e,{type:"button","aria-label":`View details of ${s} ${l}`,onClick:()=>f(!0),children:[e.jsx(Fe,{"aria-hidden":"true",children:"⌄"}),"View details"]}),e.jsx(ye,{candidate:t,isOpen:m,setIsOpen:f}),e.jsx(De,{type:"button","aria-label":`Approve ${s} ${l}`,onClick:()=>r(t.id,"Approved"),children:"Approve"}),e.jsx(Le,{type:"button","aria-label":`Reject ${s} ${l}`,onClick:()=>r(t.id,"Rejected"),children:"Reject"})]})]})},ze=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 68vh;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`,Te=n.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`,Be=n.h2`
  font-size: 24px;
  margin-bottom: 20px;
`,Ue=({candidates:t,onStatusChange:r})=>e.jsxs(ze,{children:[e.jsx(Be,{children:"Candidates List"}),e.jsx(Te,{children:t.map(a=>e.jsx(Me,{candidate:a,onStatusChange:r},a.id))})]}),{colors:{primary:Oe,secondary:Ve}}=N,He=n.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  
  .Mui-selected {
    background-color: ${Oe} !important;
  }

  .MuiPaginationItem-root:hover {
    background-color: ${Ve};
  }
`,We=({currentPage:t,totalPages:r,onPageChange:a})=>{const s=(l,c)=>{a(c)};return e.jsx(He,{"aria-label":"Candidates pagination",children:e.jsx(J,{count:r,page:t,onChange:s,shape:"rounded",color:"primary"})})},Je=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`,M=7,Qe=()=>{const[t,r]=i.useState(1),[a,s]=i.useState(V),[l,c]=i.useState(K),d=[...new Set(l.map(p=>p.candidateInfo.position))],x=l.filter(p=>(p.candidateInfo.position===a.position||!a.position)&&(p.status===a.status||!a.status)&&(`${p.candidateInfo.firstName} ${p.candidateInfo.lastName}`.toLowerCase().trim().includes(a.search.toLowerCase().trim())||!a.search)),o=Math.ceil(x.length/M),m=(t-1)*M,f=x.slice(m,m+M),v=p=>{s(p),r(1)},w=(p,b)=>{c(y=>y.map(g=>g.id===p?{...g,status:b}:g))};return e.jsxs(Je,{children:[e.jsx(se,{filters:a,onFiltersChange:v,availablePositions:d}),e.jsx(Ue,{candidates:f,onStatusChange:w}),e.jsx(We,{currentPage:t,totalPages:o,onPageChange:r})]})};export{Qe as default};
