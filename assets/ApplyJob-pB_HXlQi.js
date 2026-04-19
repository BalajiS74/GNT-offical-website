import{n as e,s as t,t as n}from"./jsx-runtime-DyTGnfRu.js";import{a as r,c as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./proxy-B73eLIlZ.js";var d=t(e(),1),f=`http://localhost:5000/api`,p=async e=>{try{let t=await fetch(`${f}/apply-job`,{method:`POST`,body:e});if(!t.ok)throw Error(`Failed to submit application`);return await t.json()}catch(e){throw console.error(e),e}};function m(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function h(...e){return t=>{let n=!1,r=e.map(e=>{let r=m(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():m(e[t],null)}}}}function g(...e){return d.useCallback(h(...e),e)}var _=n(),v=class extends d.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(a(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=a(e)&&e.offsetWidth||0,r=a(e)&&e.offsetHeight||0,i=getComputedStyle(t),o=this.props.sizeRef.current;o.height=parseFloat(i.height),o.width=parseFloat(i.width),o.top=t.offsetTop,o.left=t.offsetLeft,o.right=n-o.width-o.left,o.bottom=r-o.height-o.top}return null}componentDidUpdate(){}render(){return this.props.children}};function y({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,d.useId)(),s=(0,d.useRef)(null),l=(0,d.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:u}=(0,d.useContext)(c),f=g(s,e.props?.ref??e?.ref);return(0,d.useInsertionEffect)(()=>{let{width:e,height:c,top:d,left:f,right:p,bottom:m}=l.current;if(t||a===!1||!s.current||!e||!c)return;let h=n===`left`?`left: ${f}`:`right: ${p}`,g=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let _=document.createElement(`style`);u&&(_.nonce=u);let v=i??document.head;return v.appendChild(_),_.sheet&&_.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${c}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),v.contains(_)&&v.removeChild(_)}},[t]),(0,_.jsx)(v,{isPresent:t,childRef:s,sizeRef:l,pop:a,children:a===!1?e:d.cloneElement(e,{ref:f})})}var b=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:a,presenceAffectsLayout:o,mode:s,anchorX:c,anchorY:u,root:f})=>{let p=l(x),m=(0,d.useId)(),h=!0,g=(0,d.useMemo)(()=>(h=!1,{id:m,initial:t,isPresent:n,custom:a,onExitComplete:e=>{p.set(e,!0);for(let e of p.values())if(!e)return;i&&i()},register:e=>(p.set(e,!1),()=>p.delete(e))}),[n,p,i]);return o&&h&&(g={...g}),(0,d.useMemo)(()=>{p.forEach((e,t)=>p.set(t,!1))},[n]),d.useEffect(()=>{!n&&!p.size&&i&&i()},[n]),e=(0,_.jsx)(y,{pop:s===`popLayout`,isPresent:n,anchorX:c,anchorY:u,root:f,children:e}),(0,_.jsx)(r.Provider,{value:g,children:e})};function x(){return new Map}var S=e=>e.key||``;function C(e){let t=[];return d.Children.forEach(e,e=>{(0,d.isValidElement)(e)&&t.push(e)}),t}var w=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:a=!0,mode:c=`sync`,propagate:u=!1,anchorX:f=`left`,anchorY:p=`top`,root:m})=>{let[h,g]=o(u),v=(0,d.useMemo)(()=>C(e),[e]),y=u&&!h?[]:v.map(S),x=(0,d.useRef)(!0),w=(0,d.useRef)(v),T=l(()=>new Map),E=(0,d.useRef)(new Set),[D,O]=(0,d.useState)(v),[k,A]=(0,d.useState)(v);s(()=>{x.current=!1,w.current=v;for(let e=0;e<k.length;e++){let t=S(k[e]);y.includes(t)?(T.delete(t),E.current.delete(t)):T.get(t)!==!0&&T.set(t,!1)}},[k,y.length,y.join(`-`)]);let j=[];if(v!==D){let e=[...v];for(let t=0;t<k.length;t++){let n=k[t],r=S(n);y.includes(r)||(e.splice(t,0,n),j.push(n))}return c===`wait`&&j.length&&(e=j),A(C(e)),O(v),null}let{forceRender:M}=(0,d.useContext)(i);return(0,_.jsx)(_.Fragment,{children:k.map(e=>{let i=S(e),o=u&&!h?!1:v===k||y.includes(i);return(0,_.jsx)(b,{isPresent:o,initial:!x.current||n?void 0:!1,custom:t,presenceAffectsLayout:a,mode:c,root:m,onExitComplete:o?void 0:()=>{if(E.current.has(i))return;if(T.has(i))E.current.add(i),T.set(i,!0);else return;let e=!0;T.forEach(t=>{t||(e=!1)}),e&&(M?.(),A(w.current),u&&g?.(),r&&r())},anchorX:f,anchorY:p,children:e},i)})})},T=()=>{let[e,t]=(0,d.useState)(1),[n,r]=(0,d.useState)({fullName:``,email:``,phone:``,position:``,resume:null,coverLetter:``}),[i,a]=(0,d.useState)({}),[o,s]=(0,d.useState)(!1),[c,l]=(0,d.useState)(``),[f,m]=(0,d.useState)(``),h=e=>{let{name:t,value:o,files:s}=e.target;r({...n,[t]:s?s[0]:o}),a({...i,[t]:``}),m(``)},g=()=>{let t={};return e===1&&(n.fullName||(t.fullName=`Required`),n.email||(t.email=`Required`),n.phone||(t.phone=`Required`)),e===2&&(n.position||(t.position=`Required`),n.resume||(t.resume=`Required`)),e===3&&(n.coverLetter||(t.coverLetter=`Required`)),a(t),Object.keys(t).length===0};return(0,_.jsxs)(`section`,{className:`apply-section`,children:[(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsxs)(u.div,{className:`text-center mb-5`,initial:{opacity:0,y:-30},animate:{opacity:1,y:0},children:[(0,_.jsxs)(`h2`,{className:`fw-bold`,children:[`Apply for `,(0,_.jsx)(`span`,{children:`Job`})]}),(0,_.jsx)(`p`,{className:`text-muted`,children:`Complete the steps to join our team`})]}),c&&(0,_.jsx)(`div`,{className:`alert alert-success`,children:c}),f&&(0,_.jsx)(`div`,{className:`alert alert-danger`,children:f}),(0,_.jsx)(`div`,{className:`stepper mb-4`,children:[1,2,3].map(t=>(0,_.jsx)(`div`,{className:`step ${e>=t?`active`:``}`,children:t},t))}),(0,_.jsx)(u.div,{className:`form-card`,layout:!0,children:(0,_.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),g())try{s(!0);let e=new FormData;Object.keys(n).forEach(t=>{e.append(t,n[t])}),await p(e),l(`Application submitted successfully!`),t(1),r({fullName:``,email:``,phone:``,position:``,resume:null,coverLetter:``})}catch{m(`Submission failed. Try again.`)}finally{s(!1)}},children:[(0,_.jsxs)(w,{mode:`wait`,children:[e===1&&(0,_.jsxs)(u.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50},children:[(0,_.jsx)(`input`,{type:`text`,name:`fullName`,placeholder:`Full Name`,className:`form-control mb-2 ${i.fullName&&`is-invalid`}`,value:n.fullName,onChange:h}),(0,_.jsx)(`input`,{type:`email`,name:`email`,placeholder:`Email`,className:`form-control mb-2 ${i.email&&`is-invalid`}`,value:n.email,onChange:h}),(0,_.jsx)(`input`,{type:`tel`,name:`phone`,placeholder:`Phone`,className:`form-control ${i.phone&&`is-invalid`}`,value:n.phone,onChange:h})]},`step1`),e===2&&(0,_.jsxs)(u.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50},children:[(0,_.jsxs)(`select`,{name:`position`,className:`form-control mb-2 ${i.position&&`is-invalid`}`,value:n.position,onChange:h,children:[(0,_.jsx)(`option`,{value:``,children:`Select Position`}),(0,_.jsx)(`option`,{children:`Frontend Developer`}),(0,_.jsx)(`option`,{children:`Backend Developer`}),(0,_.jsx)(`option`,{children:`UI/UX Designer`})]}),(0,_.jsx)(`input`,{type:`file`,name:`resume`,className:`form-control ${i.resume&&`is-invalid`}`,onChange:h})]},`step2`),e===3&&(0,_.jsx)(u.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50},children:(0,_.jsx)(`textarea`,{rows:`4`,name:`coverLetter`,placeholder:`Cover Letter`,className:`form-control ${i.coverLetter&&`is-invalid`}`,value:n.coverLetter,onChange:h})},`step3`)]}),(0,_.jsxs)(`div`,{className:`d-flex gap-2 mt-3`,children:[e>1&&(0,_.jsx)(`button`,{type:`button`,className:`btn btn-outline-secondary`,onClick:()=>t(e-1),children:`Back`}),e<3?(0,_.jsx)(`button`,{type:`button`,className:`btn submit-btn w-100`,onClick:()=>{g()&&t(e+1)},children:`Next →`}):(0,_.jsx)(`button`,{type:`submit`,className:`btn submit-btn w-100`,disabled:o,children:o?`Submitting...`:`Submit Application`})]})]})})]}),(0,_.jsx)(`style`,{children:`
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
        `})]})};export{T as default};