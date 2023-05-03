const school = [
    {
        name: "University of San Carlos",
        picture: "../images/usc.png",
        motto: "Scientia | Virtus | Devotio"
    },
    {
        name: "University of the Philippines",
        picture: "../images/upc.png",
        motto: "Honor and Excellence"
    },
    {
        name: "Southwestern University",
        picture: "../images/swu.png",
        motto: "Scientia Intergritas Fidelitas"
    },
    {
        name: "Cebu Normal University",
        picture: "../images/cnu.png",
        motto: "Quality with Integrity"
    },
    {
        name: "Velez College",
        picture: "../images/velez.png",
        motto: "Knowledge and Truth through Education"
    },
    {
        name: "Cebu Doctor's University",
        picture: "../images/cdu.png",
        motto: "Let Him First Be a Man"
    },
    {
        name: "University of San Jose - Recoletos",
        picture: "../images/usjr.png",
        motto: "Caritas et Scientia Adelante!"
    },
    {
        name: "Cebu Technological University",
        picture: "../images/ctu.png",
        motto: "Lead Innovation in the Fourth Industrial Revolution"
    },
    {
        name: "Cebu Institute Technological - University",
        picture: "../images/citu.png",
        motto: "Virtus in Scientia et Technologia"
    },
    {
        name: "University of Cebu",
        picture: "../images/uc.png",
        motto: "Education towards Global Competitiveness"
    },
    {
        name: "St. Therese's College",
        picture: "../images/stc.png",
        motto: "Virtute, Scientia, Atribus Floreat"
    },
    {
        name: "AMA",
        picture: "../images/ama.png",
        motto: "Quality with Integrity"
    },
    {
        name: "Don Bosco Technological Center",
        picture: "../images/dbtc.png",
        motto: "A blend of technological know-how and aesthetic talent. Design choose the visual components such the typeface and style."
    },
    {
        name: "Lapu-Lapu City College",
        picture: "../images/llcc.png",
        motto: "Graphic design goes beyond making something look nice and is about more than just aesthetics."
    },
    {
        name: "Cebu Institute Of Medicine",
        picture: "../images/cim.png",
        motto: "Physicians with a heart"
    }
]

const university = document.querySelector('.uni');

school.forEach(uni => {
    university.innerHTML += `<div class="uni__list">
              <h2>
                <img src="${uni.picture}" class="uni__img" />
                <b>${uni.name}</b>
              </h2>
              <p><b>${uni.motto}</b></p>
            </div>`
})