import{n as e,s as t,t as n}from"./jsx-runtime-DyTGnfRu.js";import{n as r}from"./chunk-OE4NN4TA-2xH6JM4s.js";import{t as i}from"./GlobalBtn-CXvinQr5.js";import{t as a}from"./proxy-B73eLIlZ.js";var o=t(e(),1),s=`https://gnt-official-website-backend.onrender.com/api`,c=async e=>{try{let t=await fetch(`${s}/contact`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)});if(!t.ok)throw Error(`Failed to send message`);return await t.json()}catch(e){throw console.error(e),e}},l=n(),u=()=>{let[e,t]=(0,o.useState)({name:``,email:``,message:``}),[n,s]=(0,o.useState)({}),[u,d]=(0,o.useState)(!1),[f,p]=(0,o.useState)(``),m=r=>{t({...e,[r.target.name]:r.target.value}),s({...n,[r.target.name]:``})},h=()=>{let t={};return e.name.trim()||(t.name=`Name is required`),e.email?/^\S+@\S+\.\S+$/.test(e.email)||(t.email=`Invalid email`):t.email=`Email is required`,e.message.trim()?e.message.length<10&&(t.message=`Minimum 10 characters required`):t.message=`Message is required`,t};return(0,l.jsxs)(`section`,{className:`contact-section`,children:[(0,l.jsxs)(`div`,{className:`container`,children:[(0,l.jsxs)(a.div,{className:`text-center mb-5`,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:[(0,l.jsxs)(`h2`,{className:`fw-bold`,children:[`Get in `,(0,l.jsx)(`span`,{children:`Touch`})]}),(0,l.jsx)(`p`,{className:`text-muted`,children:`We'd love to hear from you`})]}),(0,l.jsxs)(a.form,{onSubmit:async n=>{n.preventDefault();let r=h();if(Object.keys(r).length>0){s(r);return}try{d(!0),p(``),await c(e),p(`Message sent successfully!`),t({name:``,email:``,message:``}),s({})}catch{s({api:`Failed to send message`})}finally{d(!1)}},className:`contact-form mx-auto`,initial:{opacity:0,y:40},animate:{opacity:1,y:0},children:[f&&(0,l.jsx)(a.div,{className:`alert alert-success`,initial:{opacity:0},animate:{opacity:1},children:f}),n.api&&(0,l.jsx)(`div`,{className:`alert alert-danger`,children:n.api}),(0,l.jsxs)(`div`,{className:`mb-3`,children:[(0,l.jsx)(`label`,{className:`form-label`,children:`Full Name`}),(0,l.jsx)(a.input,{whileFocus:{scale:1.02},type:`text`,name:`name`,value:e.name,onChange:m,className:`form-control custom-input ${n.name?`is-invalid`:``}`,placeholder:`Enter your name`}),(0,l.jsx)(`div`,{className:`invalid-feedback`,children:n.name})]}),(0,l.jsxs)(`div`,{className:`mb-3`,children:[(0,l.jsx)(`label`,{className:`form-label`,children:`Email`}),(0,l.jsx)(a.input,{whileFocus:{scale:1.02},type:`email`,name:`email`,value:e.email,onChange:m,className:`form-control custom-input ${n.email?`is-invalid`:``}`,placeholder:`Enter your email`}),(0,l.jsx)(`div`,{className:`invalid-feedback`,children:n.email})]}),(0,l.jsxs)(`div`,{className:`mb-3`,children:[(0,l.jsx)(`label`,{className:`form-label`,children:`Message`}),(0,l.jsx)(a.textarea,{whileFocus:{scale:1.02},name:`message`,rows:`4`,value:e.message,onChange:m,className:`form-control custom-input ${n.message?`is-invalid`:``}`,placeholder:`Write your message`}),(0,l.jsx)(`div`,{className:`invalid-feedback`,children:n.message})]}),(0,l.jsx)(i,{btnName:`Submit`,px:`5`,style:{width:`100%`}})]}),(0,l.jsxs)(a.div,{className:`cta-box mt-5 text-center`,initial:{opacity:0,y:40},animate:{opacity:1,y:0},children:[(0,l.jsx)(`h4`,{className:`fw-bold`,children:`Wanna Join Our Team?`}),(0,l.jsx)(`p`,{children:`Have a Happy Learning Journey`}),(0,l.jsx)(r,{to:`/appljob`,children:(0,l.jsx)(i,{btnName:`Apply`,px:`5`})})]})]}),(0,l.jsx)(`style`,{children:`
        .contact-section {
          padding: 70px 0;
          background: #f7f9f6;
        }

        h2 span {
          color: #3a7b20;
        }

        .contact-form {
          max-width: 600px;
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        }

        .custom-input {
          border-radius: 8px;
          border: 1px solid #ddd;
          padding: 10px;
        }

        .custom-input:focus {
          border-color: #3a7b20;
          box-shadow: none;
        }

        .submit-btn {
          background: #3a7b20;
          color: white;
          border-radius: 8px;
          padding: 10px;
          font-weight: 600;
        }

        .submit-btn:hover {
          background: #2f6419;
        }

        .cta-box {
          background: #ffffff;
          padding: 25px;
          border-radius: 12px;
          border: 1px solid #eee;
        }
        `})]})};export{u as default};