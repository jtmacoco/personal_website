import cLogo from "../images/cLogo.png"
import java_logo from "../images/java_logo.png"
import sql_logo from "../images/sql_logo.png"
import java_script_logo from "../images/java_script_logo.png"
import css_logo from "../images/css_logo.png"
import docker_logo from "../images/docker_logo.png"
import gcp_logo from "../images/gcp_logo.png"
import git_logo from "../images/git_logo.png"
import html_logo from "../images/html_logo.png"
import cLogo2 from "../images/cLogo2.png"
import django_logo from "../images/django_logo.png"
import react_logo from "../images/react_logo.png"
import python_logo from "../images/python_logo.png"
import aws from "../images/aws.png"
import tensorFlow_logo from "../images/tensorFlow_logo.png"
import linux_logo from "../images/linux_logo.png"
import stock_predictor from "../images/stock_predictor.png"
import movieMatch from "../images/movie_match.png"
import plantSocial from "../images/plant_social2.png"
import parallel from "../images/parallels.png"
export const navLinks = [
    {
        id: "home",
        title: "Home"
    },
    {
        id: "skills",
        title: "Skills"
    },
    {
        id: "projects",
        title: "Projects"
    },
    {
        id: "experience",
        title: "Experience"
    }
];
export const about = "I am a from the San Francisco Bay Area and have recently graduated from California State University, Chico, with a bachelor's degree in computer science.Throughout my academic journey, I have gained a significant understanding of agile project management, object-oriented programming, web development, machine learning, and parallel computing. My coursework and projects have provided me with hands-on experience with data manipulation and full-stack development, including web and mobile software applications.";

export const skill = [
    {
        src: cLogo2,
        title: "C"
    },
    {
        src: cLogo,
        title: "C++",
    },
    {
        src: java_logo,
        title: "Java"
    },
    {
        src: sql_logo,
        title: "SQL"
    },
    {
        src: python_logo,
        title: "Python"
    },
    {
        src: css_logo,
        title: "CSS"
    },
    {
        src: html_logo,
        title: "HTML"
    },
    {
        src: git_logo,
        title: "Git"
    },
    {
        src: java_script_logo,
        title: "JavaScript"
    },
    {
        src: gcp_logo,
        title: "GCP"
    },
    {
        src: django_logo,
        title: "Django"
    },
    {
        src: react_logo,
        title: "React"
    },
    {
        src: linux_logo,
        title: "Linux"
    },
    {
        src: aws,
        title: "AWS"
    },
    {
        src: docker_logo,
        title: "Docker"
    },
    {
        src: tensorFlow_logo,
        title: "TensorFlow"
    }
]
export const projects = [
    {
        src: stock_predictor,
        title: "Stock-Predictor",
        description: "Users can view the predicted price for any stock and create a personal portfolio, allowing them to keep track of their portfolio data and compare the predicted portfolio price vs the actual portfolio price.",
        h:"h-100",
        href:"/",
        github:"https://github.com/jtmacoco/Capstone",
        tools:"django python docker gcp",
    },
    {
        src: movieMatch,
        title: "Movie Match",
        description: "Users can sign up and create a movie list. Once users have a movie list, they will be shown a list of users whose movie interests match their own. Users also have the option to update their movie list and delete any unwanted conversation.",
        h:"h-100",
        href:"https://project-moviematch.com/",
        github:"https://github.com/jtmacoco/movie_match_v2",
        tools:"react javascript firebase",

    },
    {
        src: plantSocial,
        title: "Plant Social",
        description: "The project allows users to share data and other plant information with people. Users can also take a picture of a plant, and the application will identify the plant type; if it is identified wrong, users may adjust it themselves.",
        h:"h-100",
        href:"/plantSocial",
        github:"/plantSocial",
        tools:"flutter dart firebase python",
    },
    {
        src: parallel,
        title: "Factoring a Large Semiprime",
        description: "For this project, I achieved speed up when finding the factors of a large semi-prime. This is the basic idea for cryptography strength used in the encryption and decryption of keys. This project's challenge is finding the original large primes used to produce the semi-prime. The tools that I used were C++ and OpenMP.",
        h:"h-30",
        href:"/parallel",
        github:"/parallel",
        tools:"c++ openmp",
    }
];