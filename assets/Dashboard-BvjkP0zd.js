import{n as e,s as t,t as n}from"./jsx-runtime-DyTGnfRu.js";/* empty css                      */import{t as r}from"./proxy-B73eLIlZ.js";import{t as i}from"./AnimatePresence-BTcy3qdM.js";var a=t(e(),1),o=n(),s=()=>{let[e,t]=(0,a.useState)(`register`),[n,s]=(0,a.useState)({register:[],contact:[],job:[],meeting:[]}),[c,l]=(0,a.useState)(!0);(0,a.useEffect)(()=>{(async()=>{try{let[e,t,n,r]=await Promise.all([fetch(`https://gnt-official-website-backend.onrender.com/api/register`).then(e=>e.json()),fetch(`https://gnt-official-website-backend.onrender.com/api/contact`).then(e=>e.json()),fetch(`https://gnt-official-website-backend.onrender.com/api/apply-job`).then(e=>e.json()),fetch(`https://gnt-official-website-backend.onrender.com/api/meetings`).then(e=>e.json())]);s({register:e.data||[],contact:t.data||[],job:n.data||[],meeting:r.data||[]}),l(!1)}catch(e){console.error(e),l(!1)}})()},[]);let u=async(e,t)=>{try{await fetch(`https://gnt-official-website-backend.onrender.com/api/${e}/${t}`,{method:`DELETE`}),s(n=>({...n,[e]:n[e].filter(e=>e.id!==t)}))}catch(e){console.error(e)}};return(0,o.jsxs)(`div`,{className:`d-flex admin-container`,children:[(0,o.jsxs)(r.div,{initial:{x:-200},animate:{x:0},transition:{duration:.5},className:`sidebar p-3`,children:[(0,o.jsx)(`h4`,{className:`text-white mb-4 fw-bold`,children:`Admin Dashboard`}),[`register`,`contact`,`job`,`meeting`].map(n=>(0,o.jsx)(r.button,{whileHover:{scale:1.05},className:`btn w-100 mb-2 ${e===n?`btn-light`:`btn-outline-light`}`,onClick:()=>t(n),children:n.toUpperCase()},n))]}),(0,o.jsxs)(r.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},className:`content p-4 w-100`,children:[(0,o.jsxs)(`h3`,{className:`mb-4 text-capitalize fw-bold`,children:[e,` Data`]}),(()=>{let t=n[e];return c?(0,o.jsx)(`p`,{className:`text-muted`,children:`Loading...`}):t.length?(0,o.jsx)(`div`,{className:`row g-4`,children:(0,o.jsx)(i,{children:t.map(t=>(0,o.jsx)(r.div,{className:`col-md-6 col-lg-4`,initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,scale:.9},transition:{duration:.4},children:(0,o.jsx)(r.div,{whileHover:{scale:1.03},className:`card shadow-lg border-0 h-100`,children:(0,o.jsxs)(`div`,{className:`card-body`,children:[Object.entries(t).map(([e,t])=>e!==`id`&&(0,o.jsxs)(`p`,{className:`mb-2`,children:[(0,o.jsxs)(`strong`,{className:`text-capitalize`,children:[e,`:`]}),` `,e===`resume`?(0,o.jsx)(`span`,{className:`text-success`,children:t}):t]},e)),(0,o.jsx)(r.button,{whileTap:{scale:.9},className:`btn btn-danger mt-3 w-100`,onClick:()=>u(e,t.id),children:`Delete`})]})})},t.id))})}):(0,o.jsx)(`p`,{className:`text-muted`,children:`No data found`})})()]}),(0,o.jsx)(`style`,{children:`
        .admin-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f4f7, #e9ecef);
        }

        .sidebar {
          width: 240px;
          background: linear-gradient(180deg, #2e7d32, #1b5e20);
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          box-shadow: 4px 0 10px rgba(0,0,0,0.1);
        }

        .content {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
        }

        .card {
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .admin-container {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            display: flex;
            gap: 10px;
            overflow-x: auto;
            border-radius: 0;
          }

          .sidebar button {
            flex: 1;
            white-space: nowrap;
          }
        }
      `})]})},c=()=>(0,o.jsx)(`div`,{children:(0,o.jsx)(s,{})});export{c as default};