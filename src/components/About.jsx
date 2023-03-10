import React from "react";
import Tilt from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {services} from "../constants";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";

const ServiceCard = ({index, title, icon}) => (
    //react-tilt是一个React组件，它使用了Vanilla Tilt 库，用于实现在鼠标移动下的可视元素的倾斜效果。
    // Tilt组件可以在鼠标移动时，根据鼠标的位置和方向来改变元素的倾斜角度和视角，使得元素在屏幕上呈现出动态和交互性。
    // 这个组件可以在网页设计中使用，以提高用户的交互体验和视觉吸引力。例如，可以在导航菜单或产品展示页面中使用，使页面更加生动和有趣。
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>初次投入使用</p>
                <h2 className={styles.sectionHeadText}>概述</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                我是一个熟练的软件开发人员，有TypeScript和JavaScript的经验，以及React、Node.js和Three.js等框架的专业知识。我学习能力强，能与客户紧密合作，创造高效、可扩展、用户友好的解决方案，解决现实问题。让我们一起努力，把你的想法变成现实!
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
