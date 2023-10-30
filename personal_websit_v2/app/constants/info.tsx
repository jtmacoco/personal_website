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
        description: "This project allows users to pick out any stock and get the predicted closing price for the next day. Users who create an account can also create and manage a personalized portfolio and track the performance of the predicted values versus the actual values. Django, Docker, Python, Tensorflow, HTML, Git, and GCP power this application. This project is no longer online due to cost, but the code can be re-deployed with GCP.",
        h:"h-100",
        href:"/"
    },
    {
        src: movieMatch,
        title: "Movie Match",
        description: "This project has users input movies, based on their input, will list users with similar interests. Users can chat with one another and view others' movie lists. This application uses React, Tailwind, Javascript, Git, and Firebase.",
        h:"h-100",
        href:"https://project-moviematch.com/"
    },
    {
        src: plantSocial,
        title: "Plant Social",
        description: "This application allows users to share pictures and information about plants. This application also allows users to scan plants to see what type of plant it is. The tools used in this project were  Flutter, Dart, Google Firebase, and TensorFlow.",
        h:"h-100",
        href:"/plantSocial"
    },
    {
        src: parallel,
        title: "Factoring a Large Semiprime",
        description: "For this project, I achieved speed up when finding the factors of a large semi-prime. This is the basic idea for cryptography strength used in the encryption and decryption of keys. This project's challenge is finding the original large primes used to produce the semi-prime. The tools that I used were C++ and OpenMP.",
        h:"h-30",
        href:"/parallel"
        
    }
];