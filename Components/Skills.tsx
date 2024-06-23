import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
    return (
        <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
            <h1 className="heading">
                Education & <span className="text-yellow-400">Skill</span>
            </h1>
            <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
                <div>
                    <SkillsItem title="Laravel Developer" year="2020 - 2021"/>
                    <SkillsItem title="Odoo Developer" year="2022 - 2024"/>
                    <SkillsLanguage 
                        skill1="Laravel"
                        skill2="Javascript"
                        skill3="Odoo"
                        level1="w-[91%]"
                        level2="w-[88%]" 
                        level3="w-[88%]"
                    />
                </div>

                <div>
                    <SkillsItem title="Frontend Developer" year="2022 - 2024"/>
                    <SkillsItem title="Web Developer" year="2024 - Present"/>
                    <SkillsLanguage
                        skill1="React Js"
                        skill2="Python"
                        skill3="Typescript"
                        level1="w-[81%]"
                        level2="w-[78%]" 
                        level3="w-[78%]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills;