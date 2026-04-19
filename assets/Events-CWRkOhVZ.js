import{n as e,t}from"./jsx-runtime-DyTGnfRu.js";import{t as n}from"./Container-BMxixgBr.js";import{t as r}from"./Card-Bd6k-XGz.js";import{n as i,t as a}from"./Row-CZvzxGKh.js";import{C as o,i as s,n as c,u as l}from"./fa-DNTtHQt5.js";import{t as u}from"./proxy-B73eLIlZ.js";e();var d=t(),f=()=>{let e=[{title:`7-Day Foundation Program`,description:`Kickstart your journey with a powerful 7-day structured learning program.`,icon:(0,d.jsx)(o,{})},{title:`Weekly Events`,description:`Stay consistent with engaging weekly sessions and community activities.`,icon:(0,d.jsx)(s,{})},{title:`Sunday Business Events`,description:`Explore Mehandi, Embroidery, Freelancing & business opportunities.`,icon:(0,d.jsx)(c,{})},{title:`Stress Booster Games`,description:`Fun and interactive games designed to refresh your mind and reduce stress.`,icon:(0,d.jsx)(l,{})}],t={hidden:{},visible:{transition:{staggerChildren:.2}}},f={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.6,ease:`easeOut`}}};return(0,d.jsxs)(`section`,{className:`events-section py-5`,children:[(0,d.jsxs)(n,{children:[(0,d.jsxs)(u.div,{className:`text-center mb-5`,initial:{opacity:0,y:-30},whileInView:{opacity:1,y:0},transition:{duration:.6},children:[(0,d.jsxs)(`h1`,{className:`fw-bold display-4`,children:[`Discover Our `,(0,d.jsx)(`span`,{style:{color:`#3a7b20`},children:`Events`})]}),(0,d.jsx)(`p`,{className:`lead text-muted`,children:`Learn, grow, and explore exciting opportunities every week 🚀`})]}),(0,d.jsx)(u.div,{variants:t,initial:`hidden`,whileInView:`visible`,viewport:{once:!0},children:(0,d.jsx)(a,{className:`g-4`,children:e.map((e,t)=>(0,d.jsx)(i,{xs:12,md:6,lg:3,children:(0,d.jsx)(u.div,{variants:f,children:(0,d.jsxs)(r,{className:`event-card h-100 border-0 text-center p-4`,children:[(0,d.jsx)(u.div,{className:`icon-box mb-3`,whileHover:{scale:1.2,rotate:5},children:e.icon}),(0,d.jsxs)(r.Body,{children:[(0,d.jsx)(r.Title,{className:`fw-bold fs-5 mb-2`,children:e.title}),(0,d.jsx)(r.Text,{className:`text-muted small`,children:e.description})]})]})})},t))})})]}),(0,d.jsx)(`style`,{children:`
          .events-section {
            background: linear-gradient(to bottom, #f8fff5, #ffffff);
          }

          .event-card {
            border-radius: 20px;
            background: #ffffff;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            transition: 0.3s;
          }

          .event-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 50px rgba(58,123,32,0.2);
          }

          .icon-box {
            font-size: 28px;
            width: 60px;
            height: 60px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(58,123,32,0.1);
            color: #3a7b20;
            border-radius: 50%;
          }

          .event-btn {
            background: transparent;
            color: #3a7b20;
            border: 1px solid #3a7b20;
            border-radius: 8px;
            padding: 5px 12px;
            font-size: 14px;
            transition: 0.3s;
          }

          .event-btn:hover {
            background: #3a7b20;
            color: white;
          }
        `})]})};export{f as default};