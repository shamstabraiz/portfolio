/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Shams Tabraiz",
  title: "Hi all, I'm Shams",
  subTitle: emoji(
    "A passionate Full Stack Software eveloper 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: false // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/drakosi99",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "contact@davidrakosi.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@davidrakosi",
  stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: 'https://www.instagram.com/davidrakosi/',
  twitter: 'https://twitter.com/davidrakosi_',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "MERN",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "CTO / co-founder",
      company: "Sell Hunza",
      companylogo: require("./assets/images/cpLogo.png"),
      date: "Feb 2020 – Present",
      desc: "I handle Mobile and web application of sell hunza, my own startup"
    },
    {
      role: "Software Dev",
      company: "Techscape",
      companylogo: require("./assets/images/ersteLogo.jpg"),
      date: "Dec 2019 – Present",
      desc:
        "I build Websites and web applications for techscape clients"
    },
    {
      role: "Web Dev",
      company: "Hunza Trek & Tours",
      companylogo: require("./assets/images/vodafoneLogo.png"),
      date: "Fed 2021 – Present",
      desc:
        "I Handle The web Application of hunza trek and tours"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Previous Projects",
  subtitle: "Here are some of my Previous projects",
  projects: [
    {
      image: "data:image/png;base64,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",
      projectName: "Spotify Clone - React",
      projectDesc: "Created Spotify clone with react",
      footerLink: [
        {
          name: "Visit Site",
          url: "iwantcustomgift.com"
        }
      ]
    },
    {
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDxANDRAQDQ4NEA4NDQ0NDg8ODw0NFhEXFhURFRMYHiggGBolHRUVITEhJSkrLjouFyAzODMsOCgtMCsBCgoKDg0OGBAQFy0dHSYrLy03LSsrLSsrKy0tLS8tLS0tKy0rLSsrKy8tLSstLSstKy0tKy0tKy0tLSsrLS0tL//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIHAwUGBAj/xABJEAACAQIBBQoLBAgFBQAAAAAAAQIDEQQFBhIhMQcTMkFRYXFykbEUIiNCQ0RSgaGywTNzktEVNFNiY4Kz0hYklOHwVIOEk6L/xAAbAQACAwEBAQAAAAAAAAAAAAAAAQIDBgQFB//EAEIRAAIBAgMEBAgMBAcAAAAAAAABAgMRBCExBUFR8BJhcZEGIkNSgaGx0RMUMjM0NkJigpLB4RVTcrIjNYOis9Li/9oADAMBAAIRAxEAPwCmmx3BiLAJaQrgAEh3C4DAYXHdgIBkriuAwGK7C7JBYAsRuFyQAFiNw1kgsAWI3YXJCALBcV2AgEFxXJAAEbhcAAQXFcBARFcLsYgEZrgIAERYCYATGAEgGAgGBIBjABoAGIBjAQwGIBgIBDNpkXIGJx++eDQU950FO9SFO2lpaPCavwWbL/AWU/2NP/UUf7iahJq6T7jlqY3DUpOFSrGL4OST46N8o5kR0/8AgHKf7Gn/AKmj/cKeYmUopydGFopyf+YovUl0j+Dn5r7iH8Rwf8+H54+85kQIZA7LERExARsIiMYCIgAAIiDGDAiTAdgARBgDGBMYgGBIYwGAwEAxEhDAYDQgGMB2EAwAZYm4/wCu/wDid1YtPAYF19PRko6G2/P2FW7kPrvThe6sW/m36bpp9zOxScaHSWv/AKMPi6EK+25Up5xdurSknu60iH6Cn7cewU8gTaac42as9XEzfgUfGanKR6r2Dgmvkv8AMz5fxWZuJoznTlUo3pSnCV5TveLafm8xzid9fKXrn1k50MZvlvExPlk+LTulUj26/wCco+tR3ucqb205Sh+F2+hzU5N3T3G12hh6MaVGtRWU075t55ZZ8HcgIBlp5JEiTEAhERjAiQBjEAjKAABGxBjB7RATGSEMCVhiAYiQAAwGAwGBIQwEAxgIYAWJuQeu9OF7qxb+bXpumn3MqDch9c6cL3Vi4c2/TdNPuZ1v6Nz5xjKn1gfPkTcgAHCac1WceSFjaDpOynF75Rk9Vqltj/dex9vEj5zzzyZLDYmTnFw31vSUlrjWjaMov3WfafUJy+fGZtLK9GUdVPEJeTrNeLdcHTS1251r1vatRG1ndHfh8UvgZYep8m90/Nl7no+GqWp8zCNllvI2JyfWlhsZSlSqRbtdeJUXtQlslHnXwNcWlCd1dAIBjEQAZECIhEyLAiZQAAERYkDGBMaGIAJAMBiJWAYDAkAgGBIBgMBpCAYgHYsTch9c62E7qxcGbXpumn9Sn9yL1zrYTurFwZtem6af1Ot/RufOMVV+sHP8g3IABwmmAAAAPBlnI9DHU3SxFOnVjxKpFVIp9D4+crHLu5Thk5Sg6uHXFvc41acv5Z6/ddFuiRZCpbJq650e72dRx18I5vp0qjpy4x0f9UdJep7r2yPnLOLMOWBw1TE+EqpGmoPQ3lwk9KpGHtP2vgcWfTO6BkahXyfiVODTapeNGUov7an7ii8rZu0qFGdaE6rdOzUJuDWuajxLnCpUp9JKKtz2np7L2fjqmFnVrTjPoyeaydlGL0slfN/uc0RJkQFYREYMCJkAYAIxvaSIvaSQEkMSGAEwQxEhEkAwEBIYzY5IyHicbLRw9KVSztKo7xpw603qXC2beY7jJW5nBWljK8pS1Nww1ow6HOcbv3RROFOU9F7jhxm1MLhMqs/G81ZvuWnpaK3AuzDZoZPp7MLSlz1YyrfO2ev9A4FK3geFS5PBaP8AaXrCye/n1Hi1PC3Dp+LSk11uK/7FE2A7TdNydQw1TD+D0aWHjOnNzjSpqlGbUlZtLpOKiznnFxk4vcaLA4uOLw8K8VZSvle+ja/QsTci9c62F7qxb2bXpumn9SodyP1zrYTurFv5tem6af1Ol/RufOMpV+sL58gbkhWnoxlLbowlK2y9lexMw4z7Kp93U+VnCaVangyJl+hjYre5aNTzqNRpVE+Oy85c699jalGylKOk4+K1eUWtTUkrppntzU3WarjGni9GUrJeVbTl1a30ld85XCbazNFtHYsKNVRozWd7Rk7aWyUtHr9qz62XKBzuCzzwdWym54eT1NVY3V+tC/xsbmjlHDzV6dejPqVabfZckpJ6M8Wtg8RR+cpuPanbv0Ndnl+oYjop/wBeBSucf6nX6Kf9SBdOeLTwGIs09VLY/wCNApbOP9Tr9FP+pArl84ud5o9k/wCV1/8AU/40cEJgDOozbIsGDBgQMgAACMbJIiySAkgGIYiYxoQ0BMR3GZmZDxSjicYpU8O9dOjdxqV17TvrjD4vmVm8e59mqsXLwvExvh6c7Qg9laqrPX7UFx8r1cTLYOqhQ6XjSMttzbkqLeHw7tL7UuHUuvi92i8a9seGw8KMI06UIU6cFaMKaUYxXMke/B5OqVtaWjH23ZfA2GS8k6lUrLW9ahydLX/OXn3BKribZQ793PWefs/YLqJVMS2k8+jvf9T3dnyutGuoZGpR4flGuNuUe76M99OjGPBil7iYHFKcpau5pqGEoUMqUFHsWffq/Szgt0qT06GvzJ/MVHnld1KF/Yrd8C290vh4fqS+YqPPHh0OpW74FEfnOeBt4NvY0OfKM6Lcj9c62F7qxb2bXpumn9SotyT1zrYXurFvZtem6af1PTf0bnzj5XW+sL58gbkw4z7Kp93U+VmYw4z7Kp93U+VnAzSlJVfO6su4rGnwY9VFn1fO6sisafBj0IhQ0Zr/AAi+XT/F7YnvwOV69Cypz8ReiqLTj0LjXuaN7hs7YO2+05wf8OSqR6bOz7zlRFsoRlqjycPtLE4fKE8uDzX7eho7ull/CT1b+o/eKpT70efL2NozwlaEKtKc2oWjCpFt+UjxJnFisQVFJ3R11NuVqlOUJxTumrq61VuLEAAXHhMiAMAIGUAAAMTJEXtJIBoBgAiYz2ZIwE8VXpYentrTjC/sxveU+hJN+48RYO5Lk7SqYjFyT8SKwsHxaUrTn2JR/GTpx6UlE5No4r4rhp1lqll2vJet3fVcsXAYSnh6UKFFaNOlBU4LmXLyvjvzm/yHgL+XkuPyd+PibNdg6DqzjTXHx8i/58DrIpRSilZJKyXEkdWJqdFdCPKMjsHBfDVHiKmai8r75a3fZr2tPdYYAcRnlnRKMng8NLRavGtVpy8a/HTg1wbcbWu+rVZnmykoq5u8Hg6mKqqnT7W3olxZ0eUs4sLhbxqVNKa1OlStUmnyO2qPvaNNLP3DcVGvbn3pPs0iutr1/wCyNPjc48PTejC9eX8O2h+Pj91ypTnJ5Gn/AINgcPC9aTfW3buS9mbO5zyy3Sx0qMqOmt7jKMlUik03K62Np9pW2ePDodWr3wB51z4qEbffP+w8GWcqLFOnLQdNwU01paad2tjsuQnGMuldkK+IwiwboUZN2ta6fnX1aOx3I/XOthe6sW9m16bpp/UqHcj9c62E7qxb+bXpumn9T0n9G584+WVvrC+fIG5MOM+yqfd1PlZmMOM+yqfd1PlZwM0pSdXzurLuKxp8GPQizqvndWXcVhS4MeqiGH0Zr/CL5dP8XtiTEMTLzOCEMQEWIABjIMiwBgwIGUBAAGN7SSIsYDRISAAJjRce5lh1DJ0JJa61atWlztSVPupopwuzMC36MwtvZn275UuX4b5b7GZ7wmdsJFffX9sjvM3aNtOfVS+N/obk8GQo2w9N+1pfMe8pru9RnTsmkqeCpJb0n+bxv17jw5bxvg2GrVuOEHo9eXiw/wDpopx63rbbe1t3bfK2Wjn3+pS69K/RpfnYqDK+JdHDVai1SjFKL5Jyein2s46mckj6BsBQpYSpWfnO/ZGKf6vvOezjyu6spUKbtRg9Go16aXJ1V8TSEIrRJHSopKyPEr4idebqT19i4c9u8YERjKixNyL1zrYTurFvZtem6af1Ki3I4PRxcuJyw6T51Gpf5kW9m16bpp/U639G584xNX6wvnyBuTDjPsqn3dT5WZjDjX5Kr91V+RnCzTLUpOr53Vl3FY0+DHoRZtbzurLuKxpcGPQiuhozX+EXzlP8XtiTIjEXmbEACYEBiYyIxCYMQMCBlAAARBiQPaIBkxkRgTGXDuYYlTyfGC20KtalJcjclUXwqIp07/cmylo1q+Ek9Vanv8E36SFk0udxaf8A2y3Du00eN4QUXUwUmvstS9Cyfde/YmXtkV/5en/P87Paa/IM/IRj7Dfxbf5mwKqqtOXay7Z0r4Si/uR9SS9p48s4LwnD1qGq9SDUG9iqcKD/ABJFCZ205Rw1RNPxKlNTTVnG1RJprlTPoc4nPzM/wyFWph149WLVWmtsuNVILjlsuuO11r20SWalwNLsvGRjTqYao7KadnuUmrZ9Tyz3WW7M+dxkqtKdOUqdVOE6cnCcJJpxknZppmMuOPNaqxILkUzuMyczJ4iUcVjIOGHi1KnRqR0ZYh8V4y8zp29BKMHJ2Rz4vGUsLSdWq7L1t8Fxfs1eR1257kx4XAwc9U8TLwqV9qUoqMF+GKf8xYObkdVZ9R+/X/saM6nJWG3qkoteNrk+m+r4HXiLQpKKMRshzxe0JYiX3pPheV0l63bsZ6zw5drKlhMRJ+LahVS6zi4xXa0e45TdEx+94eNBcKvNOSv6OFpfNodjPNm7RZvcBR+GxNOHFruWb9SK2ry8WT5IzKyp8GPQiw8sVNDC15fwpRXWktFfForxCoaM0HhBK9Smupvva9zGACLjPAIBgREIZEZEQiTIsCJlAAARjYyLJAMESIEgGiR6cmY6eFrU8RS4dGpGpFcUteuL5mrr3nlGA5RUk4yV08vQz6ZzMyrTxEI1KUrwxMIygr7JK+lF861xfOjqD5v3O87Hk+qqNaVsNVlfSdrYes9W+a/Na29vLf6KweJjWpxqRtaSurO/Q7kqz6fjr09v7nj4ClLCuWEloruL4wb/ALou/S01TSszMAAUnpHNZ05m4LKXlKtCDr2V6sVoVJpbE5xs9XOcBiNzHAxm1KeMg/YVSjJLtpt295chGpTUlaSuuR2LqdVRylFM87FYOrPxqFaVJ8E30X6Lqz616U3mVlkvNLAYRqVOhGc1rjUr+VmnyrS1J9CN4ld2WtvYlrbZ1DyXQ270ulTml3nopUIQ4EVFdvxL/jUIrxY/oeJLYGKrT6Vesn13lJ/7kvb2GqyVkpxaqVlZrZB7U+exuAA5alRzd2aLCYSlhafwdNZcd7fF82W4UpJJttJJNtt2SS2tsqTOjKvhmJnUV97janST1Wpx2O3O25e+3EdJnxnHwsHh3+7iJp9tJPj/AHuzlODqVFCLnJqMIpylJ7EltZy1JXyRudhYB0ovEVMnJZX3R1v1Xtl1dpz+eWKtThQW2rLTmuWEdnxt+E5M9eVMc8RVnWepPVBPzYLYvr0tnjOiEeirHjbQxPxjESmtNF2L3u79ICAZI4QEAhkRCAYCIgwEBEzAIAEY2AMAGSEIkAxjIEgJEjvNzvdEqZLlHD4nSrYGVlZa6mG54X2xXs9nI+CGBGcIztdaZrqfVzno7rI+ucn4+jiqca2HqQrUpLxZwlpRf5Pmes9B8tZsZ1YvJc9LD1JaEn49LS0U+fXqfQ013lw5u7qFLExW+Q02l4+9WjUguenLU+lSsVSfR1OqngZVvmGpPzW0pei+Ul2Z8YosQDR4bO7A1PS70+SrCUWvek4/E9X6fwf/AFNH8aF0o8SqWCxEHaVKS/C/cbIDT4jOnA09teM+anGc/pY0mPz/AKcbrD0ZSeu0q7SV+pG7fahOcUXUdmYyq/FpNdq6K73Y7CrUjCLnOShGKvKU2oxiuVt7Dh85s87qVDBNq94yxGuLfKqb2rrbeTiZzOVsuYjGO9ab0E7xpxdqa27ILj17Xd85qsTiKdGO+VZKnFccuN8iXG+YrlUbyRocDsOnQ/xcQ1JrO32V1u+vpSXUzNrb5Wzjc5Msqt5Ci70ovylRbKslxL91fF9GvHlvOCVdOlSvTovVJ+fWXPyLm7eQ0ZZTpWzZRtXa6qp0qLut749S6uL37ss2xAMuM8AgEMQEQGBECIAAgEwEBEzAIAC5BiBiARIBDAkSEIkAwGIQDJjpzcWpRbjJbJRbjJdDRAYDTN5hM58RT1VFHEJe15Op+JfkbajnZQfDhVpvjScakO29/gccBW6UXuPTo7XxdJWU+kvvZ+vX1ncrOXB/tJf+qf5GCpnVhlwY1p88YxivizjQF8DEv/juLe6Pc/1kzocTnXVlqo040f3pPfZe7UkviaLEV51ZadWcqsuWTvbmXJ7jGBNRS0POxGMr4j52bfs7lZeoYCESOcYCEAgEAwEBEAAQCAYEWyIMbIgRMoAAAYmMT2gADGK4AMYxABIZIgO4ASEIYDGAXC4AAXAAAAALgACHcVwAYEQuAAACAQwFcQCAAuIBADAAImUAAAGyIAADGhgAwAAAaGAAAwQwABgAAADAAAYCAAAAAAEJgAAACYAAgExgAmRBgACAAABGQAAAP//Z",
      projectName: "TikTok Clone - React",
      projectDesc: "Created TikTok clone with react",
      footerLink: [
        {
          name: "Visit Site",
          url: "iwantcustomgift.com"
        }
      ]
    },
    {
      image: 'https://sellhunza.com/wp-content/uploads/2021/09/logo.png',
      projectName: "sell Hunza - Wordpress",
      projectDesc: "Multiple vendor Ecommerce site",
      footerLink: [
        {
          name: "Visit Website",
          url: "sellhunza.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "https://tnsdiamonds.com/wp-content/uploads/2020/03/TNS-Diamonds-Banner-1030x229.png",
      projectName: "Tns Diamonds - PHP",
      projectDesc: "Have Created a form for them to get subbmissions from user to sell their watches",
      footerLink: [
        {
          name: "Visit Form",
          url: "tnsdiamonds.com/form"
        }
      ]
    },
    {
      image: "https://pennsylvaniawine.com/wp-content/uploads/2016/12/cropped-cropped-pawines_header_logo-1.png",
      projectName: "Pennsylvania Wine - PHP",
      projectDesc: "Have Created Coustom wordpress plugin for them to sell their Wines and backend for their mobile app",
      footerLink: [
        {
          name: "Visit Site",
          url: "pennsylvaniawine.com"
        }
      ]
    },
    {
      image: "https://iwantcustomgift.com/wp-content/uploads/2020/02/IWANTCUSTOMGIFT-NEW-LOGO-_-290620-2LINES.jpg",
      projectName: "iwantcustom Gift",
      projectDesc: "Ecommerce Site",
      footerLink: [
        {
          name: "Visit Site",
          url: "iwantcustomgift.com"
        }
      ]
    },
    {
      image: "data:image/png;base64,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",
      projectName: "Twitter Clone",
      projectDesc: "Created Twitter clone with react",
      footerLink: [
        {
          name: "Visit Site",
          url: "iwantcustomgift.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+923554119517",
  email_address: "shamstabraiz81@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
