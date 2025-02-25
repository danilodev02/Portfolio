import React, { useState } from "react";
import './skills.css';

const Skills = () => {

    const [skillsCategory, setSkillsCategory] = useState("FRONT-END");
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

    const skills = {
        "FRONT-END": [
            { name: "HTML"},
            { name: "CSS"},
            { name: "JavaScript"},
            { name: "ReactJS"},
        ],
        "BACK-END": [
            { name: "MySQL"},
            { name: "NodeJS"},
        ],
        "FRAMEWORK": [
            { name: "BootStrap"},
        ],
    };

    const handleCategoryChange = (category) => {
        setSkillsCategory(category);
        setCurrentSkillIndex(0); // Resetar o índice ao mudar de categoria
    };

    const handleNextSkill = () => {
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills[skillsCategory].length);
    };

    const handlePreviousSkill = () => {
        setCurrentSkillIndex((prevIndex) => (prevIndex - 1 + skills[skillsCategory].length) % skills[skillsCategory].length);
    };

    
    return (
        <section className="skills" id="skills">
            <h1>SKILLS</h1>
            <div className="container_skill">
                <nav>
                    <ul>
                        <li 
                            className={skillsCategory === "FRONT-END" ? "selected" : ""}
                            onClick={() => handleCategoryChange("FRONT-END")}
                            
                        >
                            <h2>FRONT-END</h2>
                        </li>
                        <li 
                            className={skillsCategory === "BACK-END" ? "selected" : ""}
                            onClick={() => handleCategoryChange("BACK-END")}
                        >
                            <h2>BACK-END</h2>
                        </li>
                        <li 
                            className={skillsCategory === "FRAMEWORK" ? "selected" : ""}
                            onClick={() => handleCategoryChange("FRAMEWORK")}
                        >
                            <h2>FRAMEWORK</h2>
                        </li>
                    </ul>
                </nav>
                <div className="box_skill">
                    <div className="previous_skill" onClick={handlePreviousSkill}>
                        <i className="fas fa-less-than"></i>
                    </div>
                    <div className="view_skill">
                        <h2>{skills[skillsCategory][currentSkillIndex].name}</h2>
                    </div>
                    <div className="next_skill" onClick={handleNextSkill}>
                        <i className="fa-solid fa-greater-than"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;