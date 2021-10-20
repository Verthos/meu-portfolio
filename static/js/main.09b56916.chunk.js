(this["webpackJsonpmeu-portfolio"]=this["webpackJsonpmeu-portfolio"]||[]).push([[0],{49:function(n,e,t){"use strict";t.r(e);var i,r,a,s,o,c,l,d=t(1),h=t.n(d),b=t(12),j=t.n(b),m=t(3),p=t(4),x=Object(p.a)(i||(i=Object(m.a)(["\n\n:root {\n    --background: #C8D3DE;\n    --blue: #003d80;\n    --cyan: #00ffff;\n    --text-title: #363F5F;\n    --text-body: #969CB3;\n    --shape: #FFFFFF;\n    --green: #04D361;\n    --soft-black: #262626;\n\n    --orange: #FF4500;\n    --gray:#364F59;\n\n}\n\n* { \n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n    \n}\n\n\nhtml {\n    \n\n    @media (max-width: 1080px) {\n            font-size: 93.75%; //15px\n        }\n    @media (max-width: 720px) {\n            font-size: 87.5%; //14px\n        }\n    @media (max-width: 340px) {\n            font-size: 82.5%; \n        }\n}\n\n\nbody {\n    \n    width: calc(100vw - (100vw - 100%));\n    background: var(--background);\n    -webkit-font-smoothing: antialiased;\n}\n\n\n\n\nh1, h2, h3, h4, h5, h6, strong {\n    font-weight: 600;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n[disabled] {\n    opacity: 0.6;\n    cursor: not-allowed;\n}\n\n"]))),g=p.b.footer(r||(r=Object(m.a)(["\n    \n    background: var(--gray);\n    width: 100%;\n    min-height: 60vh;\n    bottom: 0;\n    padding-top: 2rem;\n    justify-content: center;\n    display: grid;\n\n    p {\n        font-size: 1.2rem;\n        color: var(--shape);\n        text-align: center;\n        line-height: 2rem;\n        margin: 0 auto;\n        max-width: 40%;\n        @media (max-width: 600px) {\n            max-width: 80%;\n        }\n    }\n\n\n    h1{\n        font-size: 3rem;\n        color: var(--shape);\n        text-align: center;\n    }\n\n    img{\n        width: 10rem;\n        border-radius: 10rem;\n        margin: 0 auto;\n    }\n\n    \n    span{\n        color: var(--cyan);\n    }    \n"]))),u=(p.b.button(a||(a=Object(m.a)(["\n    font-size: 0.8rem;\n    margin: 0 auto;\n    color: var(--shape);\n    background: var(--blue);\n    border-radius: 3rem;\n    padding: 1rem;\n    width: 10rem;\n    border: none;\n    font-weight: bold;\n    box-shadow: 1px 1px 10px  var(--shape);\n    margin-bottom: 5rem;\n"]))),p.b.div(s||(s=Object(m.a)(["\n\n    display: flex;\n    justify-content: center;\n    grid-gap: 1rem;\n    margin-bottom: 2rem;\n    padding: 1rem;\n\n    .instagram{\n        color: white;\n        position: relative;\n        transition: filter 0.3s;\n        transition: transform 1s;\n\n        &:hover{\n            filter: brightness(1.2);\n            transform: skew(20deg, -20deg);\n        }\n    }\n\n    .linkedin{\n        color: #003d80;\n        position: relative;\n        transition: filter 0.3s;\n        transition: transform 1s;\n        text-shadow: 10px 10px 10px ;\n        &:hover{\n            filter: brightness(1.2);\n            transform: skew(20deg, -20deg);\n        }\n\n    }\n\n    .github{\n        color: #cccccc;\n        position: relative;\n        transition: filter 0.3s;\n        transition: transform 1s;\n        text-shadow: 10px 10px 10px white;\n\n        &:hover{\n            filter: brightness(1.2);\n            transform: skew(20deg, -20deg);\n        }\n    }\n"])))),f=t.p+"static/media/me_color.1aa24d96.jpg",O=t(6),v=t(7),w=t(5),k=t(13),y=t(0),z=Object(d.createContext)({});function S(n){var e=n.children,t=Object(d.useState)("isActive"),i=Object(k.a)(t,2),r=i[0],a=i[1],s=Object(d.useState)("false"),o=Object(k.a)(s,2),c=o[0],l=o[1],h=Object(d.useState)("ptbr"),b=Object(k.a)(h,2),j=b[0],m=b[1];return Object(y.jsx)(z.Provider,{value:{handleNewLanguage:function(n){j!==n&&(m(n),"ptbr"===n?(a("isActive"),l("false")):(l("isActive"),a("false")))},setLanguage:m,language:j,ptbr:r,en:c},children:e})}function F(){return Object(d.useContext)(z)}function I(){return"en"===F().language?Object(y.jsxs)(g,{children:[Object(y.jsxs)("h1",{children:["Let's work together",Object(y.jsx)("span",{children:"?"})]}),Object(y.jsx)("img",{src:f,alt:"avatar"}),Object(y.jsxs)("p",{children:[" ",w.texts.english_footer]}),Object(y.jsxs)(u,{id:"contato",children:[Object(y.jsx)("a",{target:"_blank",rel:"noreferrer",className:"linkedin",href:"https://www.linkedin.com/in/william-kszan-79b292105/",children:Object(y.jsx)(O.a,{icon:v.c,size:"3x"})}),Object(y.jsx)("a",{target:"_blank",rel:"noreferrer",className:"github",href:"https://github.com/Verthos",children:Object(y.jsx)(O.a,{icon:v.a,size:"3x"})}),Object(y.jsx)("a",{target:"_blank",rel:"noreferrer",className:"instagram",href:"https://www.instagram.com/wilkszan/",children:Object(y.jsx)(O.a,{icon:v.b,size:"3x"})})]})]}):Object(y.jsxs)(g,{children:[Object(y.jsxs)("h1",{children:["Vamos trabalhar juntos",Object(y.jsx)("span",{children:"?"})]}),Object(y.jsx)("img",{src:f,alt:"avatar"}),Object(y.jsxs)("p",{children:[" ",w.texts.footer]}),Object(y.jsxs)(u,{id:"contato",children:[Object(y.jsx)("a",{target:"_blank",rel:"noreferrer",className:"linkedin",href:"https://www.linkedin.com/in/william-kszan-79b292105/",children:Object(y.jsx)(O.a,{icon:v.c,size:"3x"})}),Object(y.jsx)("a",{target:"_blank",rel:"noreferrer",className:"github",href:"https://github.com/Verthos",children:Object(y.jsx)(O.a,{icon:v.a,size:"3x"})}),Object(y.jsx)("a",{target:"_blank",rel:"noreferrer",className:"instagram",href:"https://www.instagram.com/wilkszan/",children:Object(y.jsx)(O.a,{icon:v.b,size:"3x"})})]})]})}var J,N=p.b.div(o||(o=Object(m.a)(["\n    background: var(--shape);\n    min-height: 130vh;\n    padding-top: 4rem;\n    align-items: center;\n    justify-content: center;\n    display: grid;\n\n\n    h1{\n        line-height: 0.7;\n        color: var(--black);\n        text-align: right;\n        font-size: 5rem;\n    }\n\n    h2{\n        font-weight: normal;\n        color: var(--black);\n        text-align: right;\n\n    }\n    \n    @media (max-width: 600px) {\n            h1{\n                font-size: 3.5rem;\n                text-align: left;\n                margin-bottom: 3rem;\n                margin-left: 3rem;\n            };\n            h2{\n                text-align: left;\n            }\n            display: flex;\n            flex-direction: column;\n        }\n\n\n\n    span{\n        color: var(--blue);\n    }    \n\n    section{\n        span{\n            font-weight: bold;\n            position: absolute;\n            font-size: 10rem;\n            opacity: 5%;\n            color: var(--black);\n            right: 20rem;\n        }\n\n        @media (max-width: 600px) {\n            display: none;\n        }\n    }\n\n    a{\n        margin: 0 auto;\n        color: var(--shape);\n        text-decoration: none;\n        text-decoration-color: none;\n    }\n"]))),_=p.b.button(c||(c=Object(m.a)(["\n    font-size: 0.8rem;\n    margin: 0 auto;\n    color: var(--shape);\n    background: var(--blue);\n    border-radius: 3rem;\n    padding: 1rem;\n    width: 10rem;\n    border: none;\n    font-weight: bold;\n    margin-bottom: 5rem;\n\n\n    @media (max-width: 600px) {\n            margin-top: 4rem;\n            margin-bottom: 2rem;\n        }\n\n"]))),P=p.b.div(l||(l=Object(m.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    grid-gap: 8rem;\n    height: min-content;\n    max-width: 70vw;\n\n    p{\n        font-size: 1.5rem;\n        font-weight: bold;\n        margin-bottom: 1rem;\n    };\n\n    img{\n        height: 20rem;\n        width: 20rem;\n        border-radius: 1rem;\n    }\n\n    @media (max-width: 600px) {\n            display: flex;\n            flex-direction: column;\n            grid-gap: 2rem;\n        }\n\n    \n    ul{\n        p{\n            font-weight: bold;\n            font-size: 1.5rem;\n        }\n\n        li{\n            list-style: none;\n            font-size: 1.3rem;\n        }\n\n    }\n    \n"]))),A=t.p+"static/media/ignews.d6b882aa.png",C=t.p+"static/media/github-explorer.7e4b4adb.png",L=t.p+"static/media/meuportfolio.4f624a9b.png";function D(){return"en"===F().language?Object(y.jsxs)(N,{id:"portfolio",children:[Object(y.jsx)("section",{children:Object(y.jsx)("span",{children:"Projects"})}),Object(y.jsxs)("h1",{children:["My projects",Object(y.jsx)("span",{children:"."})]}),Object(y.jsxs)(P,{children:[Object(y.jsx)("img",{src:L,alt:"planta flor"}),Object(y.jsx)("img",{src:C,alt:"planta suculenta"}),Object(y.jsx)("img",{src:A,alt:"planta bonsai"})]}),Object(y.jsx)("a",{rel:"noreferrer",href:"https://github.com/Verthos?tab=repositories",target:"_blank",children:Object(y.jsx)(_,{children:"All Projects"})})]}):Object(y.jsxs)(N,{id:"portfolio",children:[Object(y.jsx)("section",{children:Object(y.jsx)("span",{children:"Projetos"})}),Object(y.jsxs)("h1",{children:["Meus projetos",Object(y.jsx)("span",{children:"."})]}),Object(y.jsxs)(P,{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{children:"Meu portfolio"}),Object(y.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/Verthos/meu-portfolio",children:Object(y.jsx)("img",{src:L,alt:"portfolio"})}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("p",{children:"Principais t\xe9cnologias"}),Object(y.jsx)("li",{children:"React JS"}),Object(y.jsx)("li",{children:"Styled-components"})]})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{children:"Github explorer"}),Object(y.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/Verthos/my-github-explorer",children:Object(y.jsx)("img",{src:C,alt:"github explorer"})}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("p",{children:"Principais t\xe9cnologias"}),Object(y.jsx)("li",{children:"React JS"}),Object(y.jsx)("li",{children:"Typescript"}),Object(y.jsx)("li",{children:"Styled-components"}),Object(y.jsx)("li",{children:"Github API"})]})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{children:"Ignews - Curso Ignite"}),Object(y.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/Verthos/my-github-explorer",children:Object(y.jsx)("img",{src:A,alt:"ignews"})}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("p",{children:"Principais t\xe9cnologias"}),Object(y.jsx)("li",{children:"React JS"}),Object(y.jsx)("li",{children:"Styled-components"}),Object(y.jsx)("li",{children:"Next JS"}),Object(y.jsx)("li",{children:"Github Oauth"})]})]})]}),Object(y.jsx)("a",{rel:"noreferrer",href:"https://github.com/Verthos?tab=repositories",target:"_blank",children:Object(y.jsx)(_,{children:"Todos os Projetos"})})]})}var V,q,E,M=p.b.div(J||(J=Object(m.a)(["\n    background: var(--shape);\n    min-height: 80vh;\n    padding-left: 5rem; \n    padding-top: 4rem;\n    padding-right: 10rem;\n    align-items: center;\n    justify-content: right;\n    display: grid;\n\n    @media(max-width: 600px){\n            padding-left: 2rem;\n            justify-content: left;\n            padding-right: 2rem;\n            \n        }\n\n    p{\n        font-size: 1.5rem;\n        color: var(--black);\n        text-align: left;\n        line-height: 2rem;\n        margin-bottom: 5rem;\n        margin-top: 1rem;\n        padding-right: 10rem;\n\n        @media(max-width: 600px){\n            padding-left: 1rem;\n            justify-content: left;\n            padding-right: 1rem;\n            font-size: 1.4rem;\n            \n        }\n    }\n\n\n    div{\n\n    width: 50vw;\n\n        width: 40vw;\n        h1{\n            line-height: 10rem;\n            color: var(--black);\n            text-align: left;\n            font-size: 5rem;\n        }\n\n        h2{\n                \n            font-weight: normal;\n            color: var(--black);\n            text-align: left;\n            line-height: 1rem;\n\n        }\n\n\n        @media(max-width: 600px){\n            width: 80vw;\n            h1{\n            line-height: 4rem;\n            color: var(--black);\n            text-align: left;\n            font-size: 5rem;\n            margin-top: 8rem;\n        }\n        }\n    }    \n\n\n    p{\n\n        h1{\n            line-height: 10rem;\n            color: var(--black);\n            text-align: left;\n            font-size: 5rem;\n        }\n\n        h2{\n            font-weight: normal;\n            color: var(--black);\n            text-align: left;\n            line-height: 1rem;\n        }\n    }\n\n\n    span{\n        color: var(--blue);\n    }    \n\n\n    section{\n        position: relative;\n        top: 10rem;\n        span{\n            font-weight: bold;\n            position: absolute;\n            font-size: 10rem;\n            opacity: 5%;\n            text-align: left;\n            color: var(--black);\n            \n        }\n        @media (max-width: 600px) {\n            display: none;\n        }\n    }\n\n    \n"])));function R(){return"en"===F().language?Object(y.jsxs)(M,{id:"sobre",children:[Object(y.jsx)("section",{children:Object(y.jsx)("span",{children:"Who am i"})}),Object(y.jsxs)("div",{children:[Object(y.jsxs)("h1",{children:["Who am i",Object(y.jsx)("span",{children:"?"})]}),Object(y.jsx)("p",{children:w.texts.whoAmI})]})]}):Object(y.jsxs)(M,{id:"sobre",children:[Object(y.jsx)("section",{children:Object(y.jsx)("span",{children:"Quem sou"})}),Object(y.jsxs)("div",{children:[Object(y.jsxs)("h1",{children:["Quem sou eu",Object(y.jsx)("span",{children:"?"})]}),Object(y.jsx)("p",{children:w.texts.quemsou})]})]})}var T,W,B=p.b.header(V||(V=Object(m.a)(["\n    position: fixed;\n    background: var(--gray);\n    width: 100%;\n    height: 8vh;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    \n    \n    .lingua{\n        display: flex;\n    }\n    .false{\n        transition: filter 0.5s;\n        filter: opacity(0.3);\n        }\n\n    img{\n\n        margin: 0.2rem;\n        width: 2rem;\n        border-radius: 2rem;\n        cursor: pointer;\n        transition: transform 1s;\n\n        &:hover{\n            filter: brightness(1.2);\n            transform: skew(20deg, -20deg);\n        }\n        \n    }\n\n    nav{\n\n        height: 8vh;\n        position: relative;\n        align-items: center;\n        \n\n\n        a{\n            cursor: pointer;\n            padding: 0 2rem;\n            text-decoration: none;\n            font-size: 1.5rem;\n            color: var(--shape);\n            margin: 0 auto;\n            &:first-child{\n                margin-left: 3rem;\n            }\n        }\n        \n    }\n\n"]))),G=(p.b.div(q||(q=Object(m.a)(["\n    position: absolute;\n    z-index: 1;\n    cursor: pointer;\n    left: 10%;\n    top: 1.5rem;\n    display: none;\n\n    .line{\n        width: 30px;\n        height: 3px;\n        background: var(--shape);\n        margin: 5px;\n    }\n\n    @media (max-width: 768px){\n        display: block;\n    }\n\n"]))),p.b.ul(E||(E=Object(m.a)(["\n\n    display: flex;\n    list-style: none;\n    height: 100%;\n    justify-content: space-around;\n    align-items: center;\n\n\n    @media (max-width: 768px){\n        left: 0;\n        position: fixed;\n        background: var(--gray);\n        height: 100vh;\n        width: 100%;\n        flex-direction: column;\n        transition: all 1s ease-out;\n        pointer-events: none;\n    \n                \n            a{\n                cursor: pointer;\n                text-decoration: none;\n                font-size: 2rem;\n                color: var(--shape);\n            }\n\n        &.isOpen{\n\n            pointer-events: all\n        }\n\n      \n    }\n        \n\n"]))),t.p+"static/media/pt-br.60c5a88e.jpg"),H=t.p+"static/media/en.185fdc95.jpg";function Q(){var n=F();return Object(y.jsx)(B,{children:Object(y.jsxs)("nav",{className:"lingua",children:[Object(y.jsx)("div",{className:n.ptbr,children:Object(y.jsx)("img",{src:G,alt:"bandeira-brasil",onClick:function(){return n.handleNewLanguage("ptbr")}})}),Object(y.jsx)("div",{className:n.en,children:Object(y.jsx)("img",{src:H,alt:"bandeira-ingraterra",onClick:function(){return n.handleNewLanguage("en")}})})]})})}var K,X,U=p.b.div(T||(T=Object(m.a)(["\n    background: var(--shape);\n    height: 60vh;\n    padding-left: 10rem; \n    padding-top: 20rem;\n    align-items: center;\n    justify-content: left;\n    display: flex;\n    color: var(--black);\n    text-align: left;\n\n\n    @media (max-width: 600px) {\n        padding-left: 2rem;\n        padding-top: 20rem;\n    }\n\n    \n\n    \n    .bispo{\n        opacity: 5%;\n        position: absolute;\n        transform: skew(30deg, -30deg);\n        width: 30rem;\n        right: 10vw;\n        top: 20vw;\n        @media (max-width: 1200px) {\n            display: none;\n        }\n    }\n\n    .dama{\n        opacity: 5%;\n        position: absolute;\n        transform: skew(120deg, -120deg);\n        right: 10vw;\n        top: 5rem; \n        width: 10rem;\n        @media (max-width: 1200px) {\n            display: none;\n        }\n        \n    }\n\n    .cavalo{\n        opacity: 5%;\n        position: absolute;\n        transform: skew(120deg, -120deg);\n        left: 20vw;\n        top: 30rem; \n        width: 15rem;\n        @media (max-width: 1200px) {\n            width: 22rem;\n            transform: none;\n            top: 8rem;\n            left: 10vw;\n            opacity: 10%;\n        }\n    }\n\n    \n\n    \n        \n    h1{\n        margin-top: 1rem;\n        margin-bottom: 5rem;\n\n\n        @media (max-width: 600px) {\n            h1 {\n                font-size: 3.5rem;\n            }\n        }\n    }\n\n\n    div{\n\n        width: 40vw;\n\n        h1{\n            color: var(--black);\n            text-align: left;\n            font-size: 6rem;\n        }\n\n        h2{\n            \n            \n            font-weight: normal;\n            color: var(--black);\n            text-align: left;\n            line-height: 1rem;\n\n        }\n\n    \n        @media (max-width: 600px) {\n            h1 {\n                font-size: 3.5rem;\n            }\n            width: 80%;\n            h2 {\n                font-size: 1.5rem;\n            }\n        }\n\n    }\n        \n\n\n    span{\n        color: var(--blue);\n    }    \n\n\n    section{\n\n        span{\n            font-weight: bold;\n            left: 25vw;\n            position: absolute;\n            font-size: 10rem;\n            opacity: 5%;\n            text-align: left;\n            color: var(--black);\n        }\n    }\n"]))),Y=p.b.button(W||(W=Object(m.a)(["\n    font-size: 0.8rem;\n    margin: 0 auto;\n    color: var(--shape);\n    background: var(--blue);\n    border-radius: 3rem;\n    padding: 1rem;\n    width: 10rem;\n    border: none;\n    font-weight: bold;\n    box-shadow: 1px 1px 10px 1px var(--blue);\n    margin-bottom: 5rem;\n    cursor: pointer;\n    z-index: 1;\n    position: relative;\n\n"]))),Z=t(21);function $(){return"en"===F().language?Object(y.jsx)(U,{id:"home",children:Object(y.jsxs)("div",{children:[Object(y.jsxs)("h2",{children:["William Peterson Kszan",Object(y.jsx)("span",{children:"."})]}),Object(y.jsxs)("h1",{children:["Front-End ",Object(y.jsx)("br",{})," Developer",Object(y.jsx)("span",{children:"!"})]}),Object(y.jsx)(Z.Link,{to:"contato",smooth:!0,duration:1e3,children:Object(y.jsx)(Y,{children:"Entre em contato"})})]})}):Object(y.jsx)(U,{id:"home",children:Object(y.jsxs)("div",{children:[Object(y.jsxs)("h2",{children:["William Peterson Kszan",Object(y.jsx)("span",{children:"."})]}),Object(y.jsxs)("h1",{children:["Desenvolvedor",Object(y.jsx)("br",{})," Front-End",Object(y.jsx)("span",{children:"!"})]}),Object(y.jsx)(Z.Link,{to:"contato",smooth:!0,duration:1e3,children:Object(y.jsx)(Y,{children:"Entre em contato"})})]})})}var nn=p.b.div(K||(K=Object(m.a)(["\n    background: var(--shape);\n    height: 70vh;\n    padding: 4rem;\n    padding-left: 10rem;\n    justify-content: center;\n    height: min-content;\n\n    @media (max-width: 600px) {\n            padding-left: 2rem;\n        }\n        \n    h1{\n        line-height: 0.7;\n        color: var(--black);\n        text-align: left;\n        font-size: 3.5rem;\n    }\n\n    h2{\n        font-weight: normal;\n        color: var(--black);\n        text-align: left;\n\n    }\n\n    \n\n\n\n    span{\n        color: var(--blue);\n    }    \n\n    section{\n        span{\n            font-weight: bold;\n            position: absolute;\n            font-size: 10rem;\n            opacity: 5%;\n            text-align: left;\n            color: var(--black);        \n        }\n        @media (max-width: 500px) {\n            display: none;\n        }\n        \n    }\n"]))),en=p.b.div(X||(X=Object(m.a)(["\n    margin-top: 6rem;\n    display: flex;\n    grid-gap: 5rem;\n\n\n    @media (max-width: 600px) {\n            display: flex;\n            flex-direction: column;\n        }\n\n    \n    ul{\n        p{\n            font-weight: bold;\n            font-size: 2rem;\n        }\n\n        li{\n            list-style: none;\n            font-size: 1.5rem;\n        }\n\n    }\n"])));function tn(){return"en"===F().language?Object(y.jsxs)(nn,{id:"oqfaco",children:[Object(y.jsx)("section",{children:Object(y.jsx)("span",{children:"Skills"})}),Object(y.jsx)("h2",{children:"My"}),Object(y.jsxs)("h1",{children:["Skills",Object(y.jsx)("span",{children:"."})]}),Object(y.jsxs)(en,{children:[Object(y.jsxs)("ul",{children:[Object(y.jsxs)("p",{children:["Languages",Object(y.jsx)("span",{children:"."})]}),w.skills.linguagens.map((function(n){return Object(y.jsx)("li",{children:n},n.index)}))]}),Object(y.jsxs)("ul",{children:[Object(y.jsxs)("p",{children:["Frameworks",Object(y.jsx)("span",{children:"."})]}),w.skills.frameworks.map((function(n){return Object(y.jsx)("li",{children:n},n.index)}))]}),Object(y.jsxs)("ul",{children:[Object(y.jsxs)("p",{children:["Tools",Object(y.jsx)("span",{children:"."})]}),w.skills.ferramentas.map((function(n){return Object(y.jsx)("li",{children:n},n.index)}))]}),Object(y.jsxs)("ul",{children:[Object(y.jsxs)("p",{children:["Softskills",Object(y.jsx)("span",{children:"."})]}),w.skills.en_softskills.map((function(n){return Object(y.jsx)("li",{children:n},n.index)}))]})]})]}):Object(y.jsxs)(nn,{id:"oqfaco",children:[Object(y.jsx)("section",{children:Object(y.jsx)("span",{children:"HABILIDADES"})}),Object(y.jsx)("h2",{children:"Minhas"}),Object(y.jsxs)("h1",{children:["Habilidades",Object(y.jsx)("span",{children:"."})]}),Object(y.jsxs)(en,{children:[Object(y.jsxs)("ul",{children:[Object(y.jsxs)("p",{children:["Linguagens",Object(y.jsx)("span",{children:"."})]}),w.skills.linguagens.map((function(n){return Object(y.jsx)("li",{children:n})}))]}),Object(y.jsxs)("ul",{children:[Object(y.jsxs)("p",{children:["Frameworks",Object(y.jsx)("span",{children:"."})]}),w.skills.frameworks.map((function(n){return Object(y.jsx)("li",{children:n})}))]}),Object(y.jsxs)("ul",{children:[Object(y.jsxs)("p",{children:["Ferramentas diversas",Object(y.jsx)("span",{children:"."})]}),w.skills.ferramentas.map((function(n){return Object(y.jsx)("li",{children:n})}))]}),Object(y.jsxs)("ul",{children:[Object(y.jsxs)("p",{children:["Softskills",Object(y.jsx)("span",{children:"."})]}),w.skills.pt_softskills.map((function(n){return Object(y.jsx)("li",{children:n})}))]})]})]})}function rn(){return Object(y.jsxs)(S,{children:[Object(y.jsx)(Q,{}),Object(y.jsx)($,{}),Object(y.jsx)(R,{}),Object(y.jsx)(tn,{}),Object(y.jsx)(D,{}),Object(y.jsx)(I,{}),Object(y.jsx)(x,{})]})}j.a.render(Object(y.jsx)(h.a.StrictMode,{children:Object(y.jsx)(rn,{})}),document.getElementById("root"))},5:function(n){n.exports=JSON.parse('{"skills":{"linguagens":["Javascript","HTML5","CSS / SCSS","SQL"],"frameworks":["React JS","React Native (b\xe1sico)","Node JS / Express (b\xe1sico)","Styled Components","Next JS (b\xe1sico)"],"ferramentas":["Git  GitHub","SQL Server","Microsoft Azure","Figma","Windows Server"],"pt_softskills":["Boa comunica\xe7\xe3o","Proatividade","Foco no resultado","Pensamento cr\xedtico","Trabalho em equipe","Resi\xeancia"],"en_softskills":["Communication skills","Proactive","Critical thinking","Team work","Resilience"]},"texts":{"footer":"Se gostou do meu trabalho e/ou tem algum projeto ou vaga para desenvoldedor Fron-end, no qual eu posso ser \xfatil, sinta-se \xe0 vontade para me contatar nas redes a seguir. Atualmente trabalho em periodo integral, mas com certeza responderei assim que poss\xedvel.","quemsou":"Meu nome \xe9 William, tenho 28 anos e sou um apaixonado por Xadrez, caf\xe9s e Tecnologia. Venho estudando diariamente Front-end e ferramentas relacionadas para ingressar no mercado de trabalho como desenvolvedor. Sei que ainda h\xe1 um mar de conte\xfados para estudar, mas sabendo o qu\xe3o comprometido e esfor\xe7ado sou, posso garantir que atenderei \xe0s espectativas dos que acreditarem no meu trabalho.","english_footer":"If you like my work and/or have any project or job opportunity for a Fron-end developer that I can be useful, please feel free to contact me on the networks ahead. I currently working full time, but I\'ll definitely return as soon as possible.","whoAmI":"My name is William, I\'m 28 years old and I\'m passionate about Chess, Coffee and Technology. I\'ve been studying Front-end and related tools every day to join a job as a developer. I know there is still a sea of \u200b\u200bcontent to study, but knowing how committed and hard-worker I\'m, I can guarantee that I will achive the expectations of those who believe in my work."},"projects":{"ptbr":[{"id":1,"repositorio":"Github explorer","link":"https://github.com/Verthos/my-github-explorer","tecnologias":["React JS","Javascript","Styled-components"],"descri\xe7\xe3o":"Desenvolvido utilizando consulta \xe0 API do github para localizar reposit\xf3rios e usu\xe1rios","status":"Em desenvolvimento - solo","imagem":"github-explorer"},{"id":2,"repositorio":"Ignews","link":"https://github.com/Verthos/ig-news","tecnologias":["React JS","NextJS","Javascript","Styled-components","FaunaDB","Oalth"],"descri\xe7\xe3o":"Desenvolvido utilizando consulta \xe0 API do github para localizar reposit\xf3rios e usu\xe1rios","status":"Em desenvolvimento - Aula, rocketseat","imagem":"ignews"},{"id":3,"repositorio":"Meu portf\xf3lio","link":"https://github.com/Verthos/meu-portfolio","tecnologias":["React JS","NextJS","Javascript","Styled-components","FaunaDB","Oalth"],"descri\xe7\xe3o":"Desenvolvido utilizando consulta \xe0 API do github para localizar reposit\xf3rios e usu\xe1rios","status":"Em desenvolvimento - Aula, rocketseat","imagem":"meuportfolio"}],"en":[]}}')}},[[49,1,2]]]);
//# sourceMappingURL=main.09b56916.chunk.js.map