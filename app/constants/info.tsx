import controller1 from "../images/controller_images/fusion1.png"
import stock_predictor from "../images/stock_predictor.svg"
import movieMatch from "../images/movie_match.svg"
import plantSocial from "../images/plant_social2.svg"
import parallel from "../images/parallels.png"
import personal_site from "../images/personal_site.png"
import jcp_logo from "../images/jcp_logo.svg";
import macys_logo from "../images/macys_logo.svg"
import amazon_logo from "../images/amazon_logo.svg"
import remotask_logo from "../images/remotask_logo.svg"
import jamba from "../images/jamba_logo.svg"
import plant_social_home from "../images/plant_social_home.png"
import plant_social_login from "../images/plant_social_login.png"
import plant_social_lookup from "../images/plant_social_lookup.png"
import plant_social_main from "../images/plant_social_main.png"
import plant_social_picture from "../images/plant_social_picture.png"
import coinable from "../images/coinable.svg"
import particle_sim from "../images/particle-sim.png"
import lander from "../images/lander_game.png"
import codebase_navigator from "../images/codebase-navigator.png"
import dist_editor from "../images/dist-editor.png"
import synthetic_malware from "../images/Synthetic_Malware.svg"
export const navLinks = [
    {
        id: "home",
        title: "Home"
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
export const about = "I am a computer science graduate from Chico State (2023) and a current master’s student at San Jose State University, pursuing research on generating synthetic malware samples to improve cybersecurity model robustness. My academic and full-stack software engineer experience has strengthened my skills in machine learning, distributed systems, and end-to-end web application development. I’m passionate about research in machine learning and building intelligent, scalable AI systems that solve complex real-world problems."

export const projects = [
    {
        src: dist_editor,
        title: "Distributed Code Editor",
        description: "Built a distributed collaborative editor that allows multiple users to code on the same document in real time conflict free. The system is designed for high availability and fault tolerance, efficiently distributing traffic to handle heavy loads seamlessly.",
        h: "h-100",
        href: "",
        github: "https://github.com/jtmacoco/Distributed-Code-Editor",
        tools: "Golang, Node.js, Next.js, AWS, Docker",
    },
    {
        src: synthetic_malware,
        title: "Synthetic Malware Images",
        description: "Designed a Conditional GAN to generate synthetic malware images. Then developed a CNN classifier to test the synthetic malware images generated.",
        h: "h-100",
        href: "",
        github: "https://github.com/jtmacoco/Synthetic-Malware-Images",
        tools: "PyTorch, Python",
    },
    {
        src: codebase_navigator,
        title: "LLM Codebase Navigator",
        description: "Developed an AI-powered Codebase Navigator using a RAG pipeline to help users explore, search, and understand large codebases. Delivered semantic search, context-aware Q&A, and fast per-repo indexing for efficient, intuitive code exploration.",
        h: "h-100",
        href: "",
        github: "https://github.com/jtmacoco/Codebase-Navigator",
        tools: "Next.js, FastAPI, HuggingFace, Pinecone",
    },
    {
        src: particle_sim,
        title: "N-Bodies Simulation",
        description: "Developed an N-bodies simulator with real-time visualization using OpenGL and GLSL shaders. Parallelized computations with CUDA and particle generation with OpenMP, achieving 10× and 3× speedups respectively.",
        h: "h-100",
        href: "https://github.com/jtmacoco/n-bodies_sim",
        github: "https://github.com/jtmacoco/n-bodies_sim",
        tools: "C++, CUDA, OpenGL",
    },
    {
        src: lander,
        title: "Lander Game",
        description: "Contributed to a 3D lander game by implementing shaders, octree structures, particle generation, collision detection, and Euler-based movement.",
        h: "h-50",
        href: "https://www.youtube.com/watch?v=_90nc81bVAY",
        github: "https://github.com/jtmacoco/CS134-Final-Project",
        tools: "C++, OpenFrameworks, OpenGL, GLSL",
    },

    {
        src: stock_predictor,
        title: "Stock-Predictor",
        description: "Developed a website that will predict stock market closing value for any stock using an LSTM. Users can create their own portfolios to monitor the predictions of specific stocks and compare the predicted values with actual values",
        h: "h-100",
        href: "",
        github: "https://github.com/jtmacoco/Capstone",
        tools: "Django, Python, Docker, GCP, TensorFlow",
    },
    {
        src: controller1,
        title: "Game Controller Attachment",
        description: " Desgined a simple game controller that attaches to the back of a phone using mag safe magnets. This allows for users to play games similar to the Xperia phone.",
        h: "h-60",
        href: "https://www.thingiverse.com/thing:6760179",
        github: "",
        tools: "Fusion 360, 3d printer",
    },
    {
        src: movieMatch,
        title: "Movie Match",
        description: "Users can sign up and create a movie list. Once users have a movie list, they will be shown a list of users whose movie interests match their own. Users also have the option to update their movie list and delete any unwanted conversation.",
        h: "h-100",
        href: "https://project-moviematch.com/",
        github: "https://github.com/jtmacoco/movie_match_v2",
        tools: "React, Javascript, Firebase",

    },
    {
        src: plantSocial,
        title: "Plant Social",
        description: "The project allows users to share data and other plant information with people. Users can also take a picture of a plant, and the application will identify the plant type; if it is identified wrong, users may adjust it themselves.",
        h: "h-100",
        href: "/plantSocial",
        github: "",
        tools: "Flutter, Dart, Firebase, Python,",
    },
    {
        src: parallel,
        title: "Factoring a Large Semiprime",
        description: "For this project, I achieved speed up when finding the factors of a large semi-prime. This is the basic idea for cryptography strength used in the encryption and decryption of keys. This project's challenge is finding the original large primes used to produce the semi-prime. The tools that I used were C++ and OpenMP.",
        h: "h-30",
        href: "/parallel",
        github: "",
        tools: "C++, OpenMP",
    },
    {
        src: personal_site,
        title: "Personal Website",
        description: "You have most likely been to my site this is here incase you would like to view the code I used to develop this site.",
        h: "h-100",
        href: "/",
        github: "https://github.com/jtmacoco/personal_website_v2",
        tools: "Nextjs, Typescript"
    }
];
export const experience_info = [
    {
        title: "Full Stack Software Engineer Intern",
        date: "Febuary2024 - June 2024",
        description: [
            "Built secure email verification system with AWS SES, reducing onboarding friction for new users",
            "Designed and deployed RESTful APIs (Node.js + MongoDB) supporting scalable CRUD operations",
            "Architected MongoDB schemas that improved query efficiency and reduced data duplication",
            "Delivered responsive frontend login and signup flows in Flutter, streamlining user authentication",
        ],
        src: coinable,
        py: "py-1",
        location: "Remote",
        bg: "#5546FF",
        company: "Coinable",
    },
    {
        title: "AI Trainer",
        date: "May 2023 - Febuary 2024",
        description: [
            "Trained machine learning models on how to code in python and C, resolving issues that occur during training",
            "Conducted thorough code evaluations for optimal efficiency",
            "Documented and delivered clear explanations of the model output",
        ],
        src: remotask_logo,
        py: "py-1",
        location: "Remote",
        bg: "white",
        company: "Remotasks",
    },
    {
        title: "Warehouse Clerk",
        date: "May 2021 - August 2021",
        description: [
            "Processed orders, prepared items for shipment, and packed products into bags according to procedures.",
            "Maintained good communication and self-awareness to ensure the safety of self and coworkers"
        ],
        src: amazon_logo,
        py: "py-1",
        location: "San Leandro, CA",
        bg: "white",
        company: "Amazon",
    },
    {
        title: "Warehouse Clerk",
        date: "June 2019 - August 2019",
        description: [
            "Processed orders, prepared items for shipment, and packed products into bags according to procedures.",
            "Maintained good communication and self-awareness to ensure the safety of self and coworkers"
        ],
        src: amazon_logo,
        py: "py-1",
        location: "San Leandro, CA",
        bg: "white",
        company: "Amazon",
    },
    {
        title: "Sales Associate",
        date: "May 2019 - July 2019",
        description: [
            "Processed orders, prepared items for shipment, and packed products into bags according to procedures.",
            "Maintained good communication and self-awareness to ensure the safety of self and coworkers."
        ],
        src: macys_logo,
        py: "py-6",
        location: "San Leandro, CA",
        bg: "white",
        company: "Macy's",
    },
    {
        title: "Smooth Barista",
        date: "March 2018 - June 2018",
        description: [
            "Provide excellent customer service and maintain positive relations with customers.",
            "Prepared and served a variety of smoothies, juices, and snacks, adhering to quality and safety standards."
        ],
        src: jamba,
        py: "py-0",
        location: "Pleasanton, CA",
        bg: "white",
        company: "Jamba Juice",
    },
    {
        title: "Sales Associate",
        date: "November 2017 - March 2018",
        description: [
            "Handled cash transactions and maintained accurate registers, ensuring a smooth and error-free checkout process.",
            "Collaborated with team members to achieve team sales goals, fostering a cooperative and supportive work environment."
        ],
        src: jcp_logo,
        py: "py-6",
        location: "Pleasanton, CA",
        bg: "white",
        company: "JCPenny",
    },
]
export const plant_social_info = [
    {
        desc: [
            "This is plant social, and the project's goal is to create an app to provide information to users about plants, including information on how to care for a plant. The app will also provide a platform for users to interact with other users about sharing information on plants and to provide a service to exchange or give their plants to other users. Users can also take a picture of a plant, and the application will identify its type. The first picture says, \"Add plant type\" The app fills this in; if it is wrong, users can change the value.",
            "This was a group project, and I was on both the software engineer and usability engineer teams. My contribution to this project was helping to design the application, helping develop the front end, and designing and implementing the database. For the database work, we used Firebase as it was easiest to implement with Flutter.",
            "This project was developed in Flutter and uses Dart. The whole team had to learn Flutter and Dart during this project, as we needed to gain experience using these tools. To help maintain a clean and organized project, we each forked a main git repo with the working code. This allows us to work and then merge changes to the main repo individually. We also used the GitHub Kanban board to help with project management. During the development of this project, we would also have weekly scrum meetings to see where we are at with the project and how well this sprint is going. Toward the end, we did some user testing to see how well our application performed. Overall we could get a solid working application within a short period.",
        ],
        images: [
            {
                src: plant_social_home,
                alt: "home"
            },
            {
                src: plant_social_login,
                alt: "login"

            },
            {
                src: plant_social_picture,
                alt: "picture"
            },
            {
                src: plant_social_lookup,
                alt: "lookup"
            },
            {
                src: plant_social_main,
                alt: "main"
            },
        ]
    }

]