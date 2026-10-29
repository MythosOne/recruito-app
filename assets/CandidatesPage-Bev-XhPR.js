import{r as o,q as t,j as e,x as T,P as J}from"./index-B452NvnE.js";const V={search:"",position:"",status:""},K=[{id:"1",avatarUrl:"https://i.pravatar.cc/300?img=1",candidateInfo:{firstName:"John",lastName:"Doe",position:"Frontend Developer"},status:"Pending",expandedInfo:{email:"john.doe@example.com",phone:"+380671111111",experience:4,skills:["React","TypeScript","Redux"],location:"Kyiv",summary:"4 years of commercial frontend development experience."}},{id:"2",avatarUrl:"https://i.pravatar.cc/300?img=2",candidateInfo:{firstName:"Emily",lastName:"Smith",position:"UI/UX Designer"},status:"Approved",expandedInfo:{email:"emily.smith@example.com",phone:"+380672222222",experience:6,skills:["Figma","Adobe XD","Photoshop"],location:"Lviv",summary:"Experienced designer focused on mobile applications."}},{id:"3",avatarUrl:"https://i.pravatar.cc/300?img=3",candidateInfo:{firstName:"Michael",lastName:"Brown",position:"Backend Developer"},status:"Pending",expandedInfo:{email:"michael.brown@example.com",phone:"+380673333333",experience:5,skills:["Node.js","Express","MongoDB"],location:"Odesa",summary:"Backend engineer with REST API development experience."}},{id:"4",avatarUrl:"https://i.pravatar.cc/300?img=4",candidateInfo:{firstName:"Sophia",lastName:"Wilson",position:"QA Engineer"},status:"Rejected",expandedInfo:{email:"sophia.wilson@example.com",phone:"+380674444444",experience:3,skills:["Cypress","Playwright","Jest"],location:"Dnipro",summary:"Automation QA engineer with frontend testing experience."}},{id:"5",avatarUrl:"https://i.pravatar.cc/300?img=5",candidateInfo:{firstName:"Daniel",lastName:"Taylor",position:"DevOps Engineer"},status:"Approved",expandedInfo:{email:"daniel.taylor@example.com",phone:"+380675555555",experience:7,skills:["Docker","Kubernetes","AWS"],location:"Kharkiv",summary:"Infrastructure and CI/CD specialist."}},{id:"6",avatarUrl:"https://i.pravatar.cc/300?img=6",candidateInfo:{firstName:"Olivia",lastName:"Martin",position:"React Native Developer"},status:"Pending",expandedInfo:{email:"olivia.martin@example.com",phone:"+380676666666",experience:4,skills:["React Native","Expo","TypeScript"],location:"Kyiv",summary:"Develops cross-platform mobile applications."}},{id:"7",avatarUrl:"https://i.pravatar.cc/300?img=7",candidateInfo:{firstName:"James",lastName:"Anderson",position:"Full Stack Developer"},status:"Approved",expandedInfo:{email:"james.anderson@example.com",phone:"+380677777777",experience:8,skills:["React","Node.js","PostgreSQL"],location:"Zaporizhzhia",summary:"Full stack developer experienced in scalable web applications."}},{id:"8",avatarUrl:"https://i.pravatar.cc/300?img=8",candidateInfo:{firstName:"Emma",lastName:"Thomas",position:"Project Manager"},status:"Pending",expandedInfo:{email:"emma.thomas@example.com",phone:"+380678888888",experience:9,skills:["Scrum","Kanban","Jira"],location:"Vinnytsia",summary:"Led software teams delivering enterprise products."}},{id:"9",avatarUrl:"https://i.pravatar.cc/300?img=9",candidateInfo:{firstName:"William",lastName:"Harris",position:"Business Analyst"},status:"Rejected",expandedInfo:{email:"william.harris@example.com",phone:"+380679999999",experience:5,skills:["SQL","BPMN","Confluence"],location:"Cherkasy",summary:"Business analyst with experience gathering product requirements."}},{id:"10",avatarUrl:"https://i.pravatar.cc/300?img=10",candidateInfo:{firstName:"Isabella",lastName:"Moore",position:"Data Analyst"},status:"Pending",expandedInfo:{email:"isabella.moore@example.com",phone:"+380670000000",experience:2,skills:["SQL","Power BI","Excel"],location:"Poltava",summary:"Junior data analyst passionate about data visualization."}}];function Q(n,a,r,s){var d=this,c=o.useRef(null),u=o.useRef(0),i=o.useRef(0),l=o.useRef(null),f=o.useRef([]),h=o.useRef(),v=o.useRef(),C=o.useRef(n),m=o.useRef(!0),g=o.useRef(),y=o.useRef();C.current=n;var b=typeof window<"u",I=!a&&a!==0&&b;if(typeof n!="function")throw new TypeError("Expected a function");a=+a||0;var N=!!(r=r||{}).leading,A=!("trailing"in r)||!!r.trailing,S=!!r.flushOnExit&&A,k="maxWait"in r,U="debounceOnServer"in r&&!!r.debounceOnServer,$=k?Math.max(+r.maxWait||0,a):null,B=o.useMemo(function(){var j=function(p){var x=f.current,w=h.current;return f.current=h.current=null,u.current=p,i.current=i.current||p,v.current=C.current.apply(w,x)},P=function(p,x){I&&cancelAnimationFrame(l.current),l.current=I?requestAnimationFrame(p):setTimeout(p,x)},O=function(p){if(!m.current)return!1;var x=p-c.current;return!c.current||x>=a||x<0||k&&p-u.current>=$},z=function(p){return l.current=null,A&&f.current?j(p):(f.current=h.current=null,v.current)},D=function p(){var x=Date.now();if(N&&i.current===u.current&&W(),O(x))return z(x);if(m.current){var w=a-(x-c.current),E=k?Math.min(w,$-(x-u.current)):w;P(p,E)}},W=function(){s&&s({})},R=function(){if(b||U){var p,x=Date.now(),w=O(x);if(f.current=[].slice.call(arguments),h.current=d,c.current=x,S&&!g.current&&(g.current=function(){var E;((E=globalThis.document)==null?void 0:E.visibilityState)==="hidden"&&y.current.flush()},(p=globalThis.document)==null||p.addEventListener==null||p.addEventListener("visibilitychange",g.current)),w){if(!l.current&&m.current)return u.current=c.current,P(D,a),N?j(c.current):v.current;if(k)return P(D,a),j(c.current)}return l.current||P(D,a),v.current}};return R.cancel=function(){var p=l.current;p&&(I?cancelAnimationFrame(l.current):clearTimeout(l.current)),u.current=0,f.current=c.current=h.current=l.current=null,p&&s&&s({})},R.isPending=function(){return!!l.current},R.flush=function(){return l.current?z(Date.now()):v.current},R},[N,k,a,$,A,S,I,b,U,s]);return y.current=B,o.useEffect(function(){return m.current=!0,function(){var j;S&&y.current.flush(),g.current&&((j=globalThis.document)==null||j.removeEventListener==null||j.removeEventListener("visibilitychange",g.current),g.current=null),m.current=!1}},[S]),B}function q(n,a){return n===a}function _(n,a,r){var s=q,d=o.useRef(n),c=o.useState({})[1],u=Q(o.useCallback(function(l){d.current=l,c({})},[c]),a,r,c),i=o.useRef(n);return s(i.current,n)||(u(n),i.current=n),[d.current,u]}const X=t.div`
  grid-area: hr-filters;
  width: 100%;
  height: 100px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`,G=t.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`,Z=({filters:n,onFiltersChange:a,availablePositions:r})=>{const[s,d]=o.useState(n.search),[c]=_(s,300);o.useEffect(()=>{a({...n,search:c})},[c]);const u=(i,l)=>{a({...n,[l]:i.target.value})};return e.jsxs(X,{children:[e.jsx(G,{children:"HR Filters"}),e.jsxs("label",{children:["Search candidates",e.jsx("input",{value:s,placeholder:"Search candidate...",type:"search",onChange:i=>d(i.target.value)})]}),e.jsxs("label",{children:["Position",e.jsxs("select",{value:n.position,onChange:i=>{u(i,"position")},children:[e.jsx("option",{value:"",children:"All positions"}),r.map(i=>e.jsx("option",{value:i,children:i},i))]})]}),e.jsxs("label",{children:["Status",e.jsxs("select",{value:n.status,onChange:i=>u(i,"status"),children:[e.jsx("option",{value:"",children:"All statuses"}),e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"approved",children:"Approved"}),e.jsx("option",{value:"rejected",children:"Rejected"})]})]}),e.jsx("button",{type:"button",onClick:()=>a(V),children:"Reset filters"})]})},{shadows:H}=T,Y=t.div`
  position: fixed;
  inset: 0;
  z-index: 1001;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);

  opacity: ${({visible:n})=>n?1:0};
  transition: opacity 300ms ease-out;
`,ee=t.div`
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
`,ne=t.h2`
  margin-bottom: 16px;
`,te=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`,ae=t.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`,re=t.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`,oe=t.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`,ie=t.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`,se=t.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`,ce=t.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`,le=t.p`
  margin-bottom: 8px;
  color: var(--text-secondary);
`,de=t.button`
  width: 100px;
  height: 34px;
  border-radius: 80px;
  border: none;
  background-color: #f4e041;
  margin: 10px auto 0;

  cursor: pointer;

  transition:
    transform 250ms,
    background-color 250ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

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
`,ue=({candidate:n,isOpen:a,setIsOpen:r})=>{const[s,d]=o.useState(!1),[c,u]=o.useState(!1);o.useLayoutEffect(()=>{a?(u(!0),requestAnimationFrame(()=>{d(!0)})):d(!1)},[a]);const i=()=>{s||u(!1)};if(!c)return null;const{candidateInfo:{firstName:l,lastName:f,position:h},expandedInfo:{email:v,phone:C,experience:m,skills:g,location:y,summary:b}}=n;return e.jsx(Y,{visible:s,onTransitionEnd:i,children:e.jsxs(ee,{role:"dialog","aria-modal":"true","aria-labelledby":"candidate-detail-modal",children:[e.jsxs(ne,{children:["View details about ",l," ",f]}),e.jsxs(te,{children:[e.jsxs(ae,{children:["Position: ",h]}),e.jsxs(re,{children:["Email: ",v]}),e.jsxs(oe,{children:["Phone: ",C]}),e.jsxs(ie,{children:["Experience: ",m," years"]}),e.jsxs(se,{children:["Skills: ",g.join(", ")]}),e.jsxs(ce,{children:["Location: ",y]}),e.jsxs(le,{children:["Summary: ",b]})]}),e.jsx(de,{onClick:()=>r(!1),children:"Close"})]})})},{colors:L,shadows:{hoverShadow:F}}=T,pe=t.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  /* margin: 16px; */
  min-width: 625px;
  min-height: 145px;

  transition:
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    border: 1px solid #f5cc66;
    box-shadow: ${F};
  }
`,me=t.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & > :last-child {
    margin-left: auto;
  }
`,xe=t.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
`,fe=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,he=t.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* margin-top: 8px; */
`,ge=t.h3`
  margin: 0;
`,ve=t.p`
  margin: 0;
`,be=t.p`
  margin: 0;
`,ye=t.p`
  margin: 0;
`,je=t.span`
  font-weight: bold;
  color: ${({children:n})=>{switch(n){case"Approved":return L.success;case"Rejected":return L.error;case"Pending":return L.pending;default:return"black"}}};
`,Ce=t.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`,we=t.button`
  background: none;
  border: none;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 8px;
`,ke=t.span`
  display: inline-block;
  margin-right: 0.5rem;
  cursor: pointer;
`,Ie=t.button`
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
    box-shadow: ${F};
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
`,Se=t.button`
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
    box-shadow: ${F};
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
`,Pe=({candidate:n,onStatusChange:a})=>{const{avatarUrl:r,candidateInfo:{firstName:s,lastName:d,position:c},expandedInfo:{experience:u,location:i},status:l}=n,[f,h]=o.useState(!1);return e.jsxs(pe,{children:[e.jsxs(me,{children:[e.jsx(xe,{children:e.jsx(fe,{alt:`${s} ${d}`,src:r})}),e.jsxs(he,{children:[e.jsxs(ge,{children:[s," ",d]}),e.jsx(ve,{children:c}),e.jsxs(be,{children:[u," years of experience"]}),e.jsxs(ye,{children:["Located in ",i]})]}),e.jsx(je,{children:l})]}),e.jsxs(Ce,{children:[e.jsxs(we,{type:"button","aria-label":`View details of ${s} ${d}`,onClick:()=>h(!0),children:[e.jsx(ke,{"aria-hidden":"true",children:"⌄"}),"View details"]}),e.jsx(ue,{candidate:n,isOpen:f,setIsOpen:h}),e.jsx(Ie,{type:"button","aria-label":`Approve ${s} ${d}`,onClick:()=>a(n.id,"Approved"),children:"Approve"}),e.jsx(Se,{type:"button","aria-label":`Reject ${s} ${d}`,onClick:()=>a(n.id,"Rejected"),children:"Reject"})]})]})},Re=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 68vh;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`,Ee=t.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`,Ne=t.h2`
  font-size: 24px;
  margin-bottom: 20px;
`,Ae=({candidates:n,onStatusChange:a})=>e.jsxs(Re,{children:[e.jsx(Ne,{children:"Candidates List"}),e.jsx(Ee,{children:n.map(r=>e.jsx(Pe,{candidate:r,onStatusChange:a},r.id))})]}),{colors:{primary:$e,secondary:De}}=T,Le=t.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  
  .Mui-selected {
    background-color: ${$e} !important;
  }

  .MuiPaginationItem-root:hover {
    background-color: ${De};
  }
`,Me=({currentPage:n,totalPages:a,onPageChange:r})=>{const s=(d,c)=>{r(c)};return e.jsx(Le,{"aria-label":"Candidates pagination",children:e.jsx(J,{count:a,page:n,onChange:s,shape:"rounded",color:"primary"})})},Te=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`,M=7,Ue=()=>{const[n,a]=o.useState(1),[r,s]=o.useState(V),[d,c]=o.useState(K),u=[...new Set(d.map(m=>m.candidateInfo.position))],i=d.filter(m=>(m.candidateInfo.position===r.position||!r.position)&&(m.status===r.status||!r.status)&&(`${m.candidateInfo.firstName} ${m.candidateInfo.lastName}`.toLowerCase().trim().includes(r.search.toLowerCase().trim())||!r.search)),l=Math.ceil(i.length/M),f=(n-1)*M,h=i.slice(f,f+M),v=m=>{s(m),a(1)},C=(m,g)=>{c(y=>y.map(b=>b.id===m?{...b,status:g}:b))};return e.jsxs(Te,{children:[e.jsx(Z,{filters:r,onFiltersChange:v,availablePositions:u}),e.jsx(Ae,{candidates:h,onStatusChange:C}),e.jsx(Me,{currentPage:n,totalPages:l,onPageChange:a})]})};export{Ue as default};
