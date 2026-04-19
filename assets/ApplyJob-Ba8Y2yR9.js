import{n as e,s as t,t as n}from"./jsx-runtime-DyTGnfRu.js";import{t as r}from"./proxy-B73eLIlZ.js";import{t as i}from"./AnimatePresence-BTcy3qdM.js";var a=t(e(),1),o=`https://gnt-official-website-backend.onrender.com/api`,s=async e=>{try{let t=await fetch(`${o}/apply-job`,{method:`POST`,body:e});if(!t.ok)throw Error(`Failed to submit application`);return await t.json()}catch(e){throw console.error(e),e}},c=n(),l=()=>{let[e,t]=(0,a.useState)(1),[n,o]=(0,a.useState)({fullName:``,email:``,phone:``,position:``,resume:null,coverLetter:``}),[l,u]=(0,a.useState)({}),[d,f]=(0,a.useState)(!1),[p,m]=(0,a.useState)(``),[h,g]=(0,a.useState)(``),_=e=>{let{name:t,value:r,files:i}=e.target;o({...n,[t]:i?i[0]:r}),u({...l,[t]:``}),g(``)},v=()=>{let t={};return e===1&&(n.fullName||(t.fullName=`Required`),n.email||(t.email=`Required`),n.phone||(t.phone=`Required`)),e===2&&(n.position||(t.position=`Required`),n.resume||(t.resume=`Required`)),e===3&&(n.coverLetter||(t.coverLetter=`Required`)),u(t),Object.keys(t).length===0};return(0,c.jsxs)(`section`,{className:`apply-section`,children:[(0,c.jsxs)(`div`,{className:`container`,children:[(0,c.jsxs)(r.div,{className:`text-center mb-5`,initial:{opacity:0,y:-30},animate:{opacity:1,y:0},children:[(0,c.jsxs)(`h2`,{className:`fw-bold`,children:[`Apply for `,(0,c.jsx)(`span`,{children:`Job`})]}),(0,c.jsx)(`p`,{className:`text-muted`,children:`Complete the steps to join our team`})]}),p&&(0,c.jsx)(`div`,{className:`alert alert-success`,children:p}),h&&(0,c.jsx)(`div`,{className:`alert alert-danger`,children:h}),(0,c.jsx)(`div`,{className:`stepper mb-4`,children:[1,2,3].map(t=>(0,c.jsx)(`div`,{className:`step ${e>=t?`active`:``}`,children:t},t))}),(0,c.jsx)(r.div,{className:`form-card`,layout:!0,children:(0,c.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),v())try{f(!0);let e=new FormData;Object.keys(n).forEach(t=>{e.append(t,n[t])}),await s(e),m(`Application submitted successfully!`),t(1),o({fullName:``,email:``,phone:``,position:``,resume:null,coverLetter:``})}catch{g(`Submission failed. Try again.`)}finally{f(!1)}},children:[(0,c.jsxs)(i,{mode:`wait`,children:[e===1&&(0,c.jsxs)(r.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50},children:[(0,c.jsx)(`input`,{type:`text`,name:`fullName`,placeholder:`Full Name`,className:`form-control mb-2 ${l.fullName&&`is-invalid`}`,value:n.fullName,onChange:_}),(0,c.jsx)(`input`,{type:`email`,name:`email`,placeholder:`Email`,className:`form-control mb-2 ${l.email&&`is-invalid`}`,value:n.email,onChange:_}),(0,c.jsx)(`input`,{type:`tel`,name:`phone`,placeholder:`Phone`,className:`form-control ${l.phone&&`is-invalid`}`,value:n.phone,onChange:_})]},`step1`),e===2&&(0,c.jsxs)(r.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50},children:[(0,c.jsxs)(`select`,{name:`position`,className:`form-control mb-2 ${l.position&&`is-invalid`}`,value:n.position,onChange:_,children:[(0,c.jsx)(`option`,{value:``,children:`Select Position`}),(0,c.jsx)(`option`,{children:`Frontend Developer`}),(0,c.jsx)(`option`,{children:`Backend Developer`}),(0,c.jsx)(`option`,{children:`UI/UX Designer`})]}),(0,c.jsx)(`input`,{type:`file`,name:`resume`,className:`form-control ${l.resume&&`is-invalid`}`,onChange:_})]},`step2`),e===3&&(0,c.jsx)(r.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50},children:(0,c.jsx)(`textarea`,{rows:`4`,name:`coverLetter`,placeholder:`Cover Letter`,className:`form-control ${l.coverLetter&&`is-invalid`}`,value:n.coverLetter,onChange:_})},`step3`)]}),(0,c.jsxs)(`div`,{className:`d-flex gap-2 mt-3`,children:[e>1&&(0,c.jsx)(`button`,{type:`button`,className:`btn btn-outline-secondary`,onClick:()=>t(e-1),children:`Back`}),e<3?(0,c.jsx)(`button`,{type:`button`,className:`btn submit-btn w-100`,onClick:()=>{v()&&t(e+1)},children:`Next →`}):(0,c.jsx)(`button`,{type:`submit`,className:`btn submit-btn w-100`,disabled:d,children:d?`Submitting...`:`Submit Application`})]})]})})]}),(0,c.jsx)(`style`,{children:`
        .apply-section {
          padding: 80px 0;
          background: #f7f9f6;
        }

        h2 span {
          color: #3a7b20;
        }

        .form-card {
          max-width: 600px;
          margin: auto;
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        }

        .submit-btn {
          background: #3a7b20;
          color: white;
        }

        /* STEPPER */
        .stepper {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .step {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step.active {
          background: #3a7b20;
          color: white;
        }
        `})]})};export{l as default};