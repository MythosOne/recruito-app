import{q as r,w as b,t as f,v as l,j as o,r as x,V as g}from"./index-YduqHnoY.js";import{T as y,S as V,n as C,b as j}from"./CandidateProfilePage.styled-DnE3WlEM.js";const T=r.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
`,B=r.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`,d=r(y)`
  & .MuiInputLabel-root {
    color: #7e7e7e;
  }

  & label.Mui-focused:not(.Mui-error) {
    color: #7e7e7e;
  }

  & label.Mui-focused.Mui-error {
    color: #d32f2f;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused:not(.Mui-error) fieldset {
      border-color: #d0cfcf;
    }

    &.Mui-focused.Mui-error fieldset {
      border-color: #d32f2f;
    }

    &.Mui-error fieldset {
      border-color: #d32f2f;
    }
  }

  & .MuiInputBase-input {
    font-size: 16px;
    color: #000;
    line-height: 26px;
  }
`,w=({onCreateVacancy:n,currentRecruiterId:s})=>{const e=b({initialValues:{position:"",company:"",location:"",employmentType:"",description:"",tags:""},validationSchema:f().shape({position:l().min(3).max(50).required("Position is required"),company:l().min(3).max(50).required("Company is required"),location:l().min(3).max(50).required("Location is required"),employmentType:l().min(3).max(50).required("Employment Type is required"),description:l().min(3).max(200).required("Description is required"),tags:l().test("tags-required","At least one tag is required",t=>!!t?.split(",").some(i=>i.trim())).required("Tags are required")}),onSubmit:(t,{resetForm:i})=>{const p={id:C(),recruiterId:s,status:"draft",...t,tags:t.tags.split(",").map(u=>u.trim().toLowerCase()).filter(Boolean),createdAt:new Date().toISOString()};n(p),i()}});return o.jsxs(T,{onSubmit:e.handleSubmit,children:[o.jsx(B,{children:"Vacancies Form"}),o.jsx(d,{name:"position",label:"Position",placeholder:"Enter position",value:e.values.position,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.position&&!!e.errors.position,helperText:e.touched.position&&e.errors.position}),o.jsx(d,{name:"company",label:"Company",placeholder:"Enter company name",value:e.values.company,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.company&&!!e.errors.company,helperText:e.touched.company&&e.errors.company}),o.jsx(d,{name:"location",label:"Location",placeholder:"Enter location",value:e.values.location,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.location&&!!e.errors.location,helperText:e.touched.location&&e.errors.location}),o.jsx(d,{name:"employmentType",label:"Employment Type",placeholder:"Enter employment type",value:e.values.employmentType,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.employmentType&&!!e.errors.employmentType,helperText:e.touched.employmentType&&e.errors.employmentType}),o.jsx(d,{name:"description",label:"Description",placeholder:"Enter job description",value:e.values.description,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.description&&!!e.errors.description,helperText:e.touched.description&&e.errors.description}),o.jsx(d,{name:"tags",label:"Tags",placeholder:"Enter tags (comma separated)",value:e.values.tags,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.tags&&!!e.errors.tags,helperText:e.touched.tags&&e.errors.tags}),o.jsx(V,{type:"submit",variant:"submit",disabled:!e.isValid||!e.dirty,children:"CReate Vacancy"})]})},q=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
`,v=r.h2`
  margin: 0;
  font-size: 1.8rem;
  color: #333;
`,P=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 5px;

  width: clamp(320px, 90vw, 880px);
  height: 150px;

  border: 1px solid #a2a2a2;
  border-radius: 16px;

  transition:
    transform 250ms,
    border 250ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    transform: scale(1.02);
    border: 2px solid #f5cc66;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`,E=r.h3`
  margin: 0;
  font-size: 1.5rem;
`,M=r.p`
  margin: 4px 0;
  font-weight: bold;
`,k=r.p`
  margin: 4px 0;
`,L=r.p`
  margin: 4px 0;
`,S=r.p`
  margin: 4px 0;
`,F=r.p`
  margin: 8px 0;
`,I=r.p`
  margin: 4px 0;
`,z=r.button`
  padding: 6px 12px;
  background-color: #f5cc66;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #fff;

  &:hover {
    background-color: #e0b35c;
  }
`,D=r.button`
  padding: 6px 12px;
  background-color: #4caf50;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #fff;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
    box-shadow: none;
  }
`,A=({vacancy:n,onDeleteVacancy:s,onPublishVacancy:e})=>{const{position:t,company:i,location:p,employmentType:u,description:a,createdAt:m}=n;return o.jsxs(P,{children:[o.jsx(E,{children:"Vacancy Title"}),o.jsx(M,{children:t}),o.jsx(k,{children:i}),o.jsx(L,{children:p}),o.jsx(S,{children:u}),o.jsx(F,{children:a}),o.jsxs(I,{children:["Created At: ",m]}),o.jsx(z,{onClick:()=>s(n.id),children:"Clear Vacancies"}),o.jsx(D,{onClick:()=>e(n.id),disabled:n.status==="published",children:n.status==="published"?"Published":"Publish Vacancy"})]})},R=({recruiterId:n})=>{const s=x.useContext(g);if(!s)throw new Error("VacanciesList must be used within VacanciesProvider");const{vacancies:e,setVacancies:t}=s,i=e.filter(a=>a.recruiterId===n),p=a=>{t(m=>m.filter(c=>c.id!==a||c.recruiterId!==n))},u=a=>{t(m=>m.map(c=>c.id===a&&c.recruiterId===n?{...c,status:"published"}:c))};return o.jsxs(q,{children:[o.jsx(v,{children:"Vacancies List"}),i.map(a=>o.jsx(A,{vacancy:a,onDeleteVacancy:p,onPublishVacancy:u},a.id))]})},h="recruiter-123",H=()=>{const n=x.useContext(g);if(!n)throw new Error("VacanciesPage must be used within VacanciesProvider");const{setVacancies:s}=n,e=t=>{s(i=>[...i,t])};return o.jsxs(o.Fragment,{children:[o.jsx(j,{children:"Vacancies Page"}),o.jsx(w,{onCreateVacancy:e,currentRecruiterId:h}),o.jsx(R,{recruiterId:h})]})};export{H as default};
