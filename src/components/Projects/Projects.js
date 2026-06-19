import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import newsApp from "../../Assets/Projects/NewsApp.png";
import textUtilsHome from "../../Assets/Projects/TextUtils_Home.png";
import textUtilsAbout from "../../Assets/Projects/TextUtils_About.png";
import iNoteBookLogin from "../../Assets/Projects/iNoteBook_Login.png";
import iNoteBookSignup from "../../Assets/Projects/iNoteBook_SignUp.png";
import iNoteBookHome from "../../Assets/Projects/iNoteBook_Home.png";
import iNoteBookAbout from "../../Assets/Projects/iNoteBook_Home.png";
import RTTTLogin from "../../Assets/Projects/RTTT_Login.png";
import RTTTAdminDash from "../../Assets/Projects/RTTT_Admin_Dashboard.png";
import RTTTRoute from "../../Assets/Projects/RTTT_Routes.png";
import RTTTVehicles from "../../Assets/Projects/RTTT_Vehicles.png";
import RTTTApp1 from "../../Assets/Projects/RTTT_App1.png";
import RTTTApp2 from "../../Assets/Projects/RTTT_App2.png";
import HM_Home from "../../Assets/Projects/HM_Dash.png";
import HM_Members from "../../Assets/Projects/HM_Members.png";
import HM_Rooms from "../../Assets/Projects/HM_Room.png";
import HM_Txn from "../../Assets/Projects/HM_Transactions.png";
import RPS from "../../Assets/Projects/RPS.png";
import TicTacToe from "../../Assets/Projects/TicTacToe.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <div className="section-divider">
          <span>My Portfolio <strong className="purple">Projects </strong></span>
        </div>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              images={[RTTTLogin, RTTTAdminDash, RTTTRoute, RTTTVehicles, RTTTApp1, RTTTApp2]}
              isBlog={false}
              title="Real-Time Public Transport Tracking Management System"
              techLang="React.js, Node.js, Express.js, MongoDB, WebSockets, React Native"
              description="Developed a Real-Time Public Transport Tracking web application that enables users to track the live location of public transport vehicles using mobile GPS data. The system collects location updates from drivers' mobile devices and displays them on an interactive map, allowing passengers to monitor vehicle positions in real time. Implemented location tracking, route visualization, and real-time updates to improve commuting convenience and reduce waiting times."
              ghLink="https://github.com/Sumitnaphade004/Real_Time_Public_Transport_Tracking"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              images={[HM_Home, HM_Rooms, HM_Members, HM_Txn]}
              isBlog={false}
              title="Hostel Management System"
              techLang="React.js, Node.js, Express.js, MySQL"
              description="Developed a Hostel Management System to streamline hostel operations, including member registration, room allocation, fee management, and resident record maintenance. The system provides an intuitive interface for administrators to manage hostel data efficiently while ensuring organized and secure storage of information. Built using React.js for the frontend, Node.js and Express.js for the backend, and MySQL for database management."
              ghLink="https://github.com/Sumitnaphade004/Hostel_Management"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              images={[iNoteBookLogin, iNoteBookSignup, iNoteBookHome, iNoteBookAbout]}
              isBlog={false}
              title="iNoteBook"
              techLang="React.js, Node.js, Express.js, MongoDB"
              description="Developed iNotebook, my first full-stack web application, enabling users to securely store and manage their notes in the cloud. Implemented user authentication, CRUD operations for notes, and persistent data storage using MongoDB. Built the frontend with React.js and the backend with Node.js and Express.js, providing a responsive and seamless note-taking experience accessible from anywhere."
              ghLink="https://github.com/Sumitnaphade004/iNoteBook"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              images={newsApp}
              isBlog={false}
              title="News App"
              techLang="JavaScript, React.js, Bootstrap, NewsAPI"
              description="Developed a responsive News App that fetches real-time news articles from a free News API and displays them to users in an organized and user-friendly interface. Built the frontend using React and the backend using Node.js and Express to handle API requests efficiently. Implemented category-wise news browsing, dynamic content rendering, and a clean, responsive UI for an enhanced reading experience."
              ghLink="https://github.com/Sumitnaphade004/NewsApp-React.js"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              images={[textUtilsHome, textUtilsAbout]}
              isBlog={false}
              title="TextUtils"
              techLang="JavaScript, React.js, Bootstrap"
              description="Developed a TextUtils web application that provides various text manipulation and analysis features. Users can convert text to uppercase/lowercase, remove extra spaces, copy text, clear text, and view real-time text statistics such as word count, character count, and estimated reading time. Designed a responsive and user-friendly interface using React and Bootstrap for a seamless user experience."
              ghLink="https://github.com/Sumitnaphade004/TextUtils-React"
              demoLink="https://sumitnaphade004.github.io/TextUtils-React/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              images={RPS}
              isBlog={false}
              title="Rock Paper Scissor"
              techLang="HTML, CSS, JavaScript"
              description="Built a Rock Paper Scissors game using HTML, CSS, and JavaScript that allows users to play against the computer. Implemented random computer move generation, score tracking, result evaluation, and dynamic UI updates using DOM manipulation. Added responsive design and smooth animations to create an interactive and enjoyable gaming experience."
              ghLink="https://github.com/Sumitnaphade004/Rock-Paper-Scissor"
              demoLink="https://sumitnaphade004.github.io/Rock-Paper-Scissor/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              images={TicTacToe}
              isBlog={false}
              title="Tic Tac Toe"
              techLang="HTML, CSS, Javascript"
              description="Developed an interactive Tic-Tac-Toe game using HTML, CSS, and JavaScript where users compete against a computer opponent. Implemented game logic for move validation, win/draw detection, turn management, and automatic computer moves. Designed a responsive user interface with engaging animations and game reset functionality to enhance the overall user experience."
              ghLink="https://github.com/Sumitnaphade004/Tic-Tac-Toe"
              demoLink="https://sumitnaphade004.github.io/Tic-Tac-Toe/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;