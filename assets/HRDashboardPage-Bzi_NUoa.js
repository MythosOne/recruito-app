const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CandidatesPage-BoaDHIt5.js","assets/index-DgEDt_PX.js","assets/index-Cnvh8m7a.css","assets/VacanciesPage-Mm0KH22l.js","assets/CandidateProfilePage.styled-WY_FbtBk.js"])))=>i.map(i=>d[i]);
import{x as l,q as e,N as h,j as a,H as m,T as p,D as x,r as t,R as u,z as r,E as g,L as b,_ as i}from"./index-DgEDt_PX.js";const s=[{id:"1",avatarUrl:"https://i.pravatar.cc/300?img=12",name:"Анна Ковальська",email:"anna.koval@recruito.com",company:"Recruito Agency",role:"Recruiter"},{id:"2",avatarUrl:"https://i.pravatar.cc/300?img=15",name:"Виктор Авраменко",email:"viktor.avramenko@recruito.com",company:"Recruito Agency",role:"Recruiter"},{id:"3",avatarUrl:"https://i.pravatar.cc/300?img=21",name:"Марина Ткаченко",email:"marina.tkachenko@recruito.com",company:"Recruito Agency",role:"Recruiter"},{id:"4",avatarUrl:"https://i.pravatar.cc/300?img=33",name:"Олександр Бондар",email:"oleksandr.bondar@recruito.com",company:"Recruito Agency",role:"Recruiter"},{id:"5",avatarUrl:"https://i.pravatar.cc/300?img=44",name:"Наталія Сидоренко",email:"natalia.sydorenko@recruito.com",company:"Recruito Agency",role:"Recruiter"},{id:"6",avatarUrl:"https://i.pravatar.cc/300?img=52",name:"Дмитро Іваненко",email:"dmytro.ivanenko@recruito.com",company:"Recruito Agency",role:"Recruiter"}],{breakpoints:v,colors:{primary:j,secondary:n},shadows:{hoverShadow:y}}=l,R=e.section`
  grid-area: sidebar;
  display: none;
  width: 250px;
  height: 80vh;
  background-color: #f5f5f5;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;

  @media screen and (min-width: ${v.tablet}) {
    display: block;
  }
`,k=e.div`
display: flex;
`,f=e.div``,L=e.img``,_=e.span``,A=e.nav``,S=e.ul``,P=e.li``,w=e(h)`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  transition:
    font-weight 0.25s,
    color 0.25s,
    text-shadow 0.25s ease-in-out;

  &:hover {
    color: ${n};
  }
`,U=e.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;
  border-radius: 80px;
  border: none;
  background-color: ${j};

  transition:
    transform 250ms,
    background-color 250ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
    background-color: ${n};
    box-shadow: ${y};
  }

  &:active {
    transform: scale(0.95);
  }
`,E=()=>{const c=[{label:"Candidates",to:"/hr-dashboard/candidates"},{label:"Vacancies",to:"/hr-dashboard/vacancies"},{label:"Applications",to:"/hr-dashboard/applications"},{label:"Settings",to:"/hr-dashboard/settings"}];return a.jsxs(R,{children:[a.jsxs(k,{children:[a.jsx(f,{children:a.jsx(L,{src:s[0].avatarUrl,alt:"user avatar"})}),a.jsx(_,{children:s[0].name})]}),a.jsx(A,{"aria-label":"HR sections",children:a.jsx(S,{children:c.map(({label:d,to:o})=>a.jsx(P,{children:a.jsx(w,{to:o,children:d})},o))})}),a.jsx(U,{type:"button",onClick:()=>{console.log("Logout button clicked")},children:"Logout"})]})},C=()=>a.jsx(a.Fragment,{children:a.jsx("h1",{children:"Candidates Page"})}),D=()=>a.jsx(a.Fragment,{children:a.jsx("h1",{children:"Settings Page"})}),z=t.lazy(()=>i(()=>import("./CandidatesPage-BoaDHIt5.js"),__vite__mapDeps([0,1,2]))),I=t.lazy(()=>i(()=>import("./VacanciesPage-Mm0KH22l.js"),__vite__mapDeps([3,1,2,4]))),$=()=>a.jsxs(m,{children:[a.jsx(p,{children:"HR Dashboard Page"}),a.jsx(E,{}),a.jsx(x,{children:a.jsx(t.Suspense,{fallback:a.jsx(b,{children:"Loading..."}),children:a.jsxs(u,{children:[a.jsx(r,{path:"candidates",element:a.jsx(z,{})}),a.jsx(r,{path:"vacancies",element:a.jsx(I,{})}),a.jsx(r,{path:"applications",element:a.jsx(C,{})}),a.jsx(r,{path:"settings",element:a.jsx(D,{})}),a.jsx(r,{path:"*",element:a.jsx(g,{})})]})})})]});export{$ as default};
