import{q as s,w as c,t as d,A as u,v as r,j as o,r as p,C as m}from"./index-DgEDt_PX.js";import{T as h,S as y,n as x,b as g}from"./CandidateProfilePage.styled-WY_FbtBk.js";const f=s.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
`,b=s.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`,a=s(h)`
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
`,T=({onCreateVacancy:l})=>{const e=c({initialValues:{position:"",company:"",location:"",employmentType:"",description:"",tags:[]},validationSchema:d().shape({position:r().min(3).max(50).required("Position is required"),company:r().min(3).max(50).required("Company is required"),location:r().min(3).max(50).required("Location is required"),employmentType:r().min(3).max(50).required("Employment Type is required"),description:r().min(3).max(200).required("Description is required"),tags:u().of(r()).min(1,"At least one tag is required").required("Tags are required")}),onSubmit:(n,{resetForm:t})=>{const i={id:x(),...n,createdAt:new Date().toISOString()};l(i),t()}});return o.jsxs(f,{onSubmit:e.handleSubmit,children:[o.jsx(b,{children:"Vacancies Form"}),o.jsx(a,{name:"position",label:"Position",placeholder:"Enter position",value:e.values.position,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.position&&!!e.errors.position,helperText:e.touched.position&&e.errors.position}),o.jsx(a,{name:"company",label:"Company",placeholder:"Enter company name",value:e.values.company,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.company&&!!e.errors.company,helperText:e.touched.company&&e.errors.company}),o.jsx(a,{name:"location",label:"Location",placeholder:"Enter location",value:e.values.location,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.location&&!!e.errors.location,helperText:e.touched.location&&e.errors.location}),o.jsx(a,{name:"employmentType",label:"Employment Type",placeholder:"Enter employment type",value:e.values.employmentType,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.employmentType&&!!e.errors.employmentType,helperText:e.touched.employmentType&&e.errors.employmentType}),o.jsx(a,{name:"description",label:"Description",placeholder:"Enter job description",value:e.values.description,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.description&&!!e.errors.description,helperText:e.touched.description&&e.errors.description}),o.jsx(a,{name:"tags",label:"Tags",placeholder:"Enter tags (comma separated)",value:e.values.tags.join(", "),onChange:n=>{const t=n.target.value.split(",").map(i=>i.trim().toLowerCase()).filter(Boolean);e.setFieldValue("tags",t)},onBlur:e.handleBlur,error:e.touched.tags&&!!e.errors.tags,helperText:e.touched.tags&&e.errors.tags}),o.jsx(y,{type:"submit",variant:"submit",disabled:!e.isValid||!e.dirty,children:"Submit"})]})},v=()=>{const l=p.useContext(m);if(!l)throw new Error("VacanciesPage must be used within VacanciesProvider");const{setVacancies:e}=l,n=t=>{e(i=>[...i,t])};return o.jsxs(o.Fragment,{children:[o.jsx(g,{children:"Vacancies Page"}),o.jsx(T,{onCreateVacancy:n})]})};export{v as default};
