import React from "react";
import "tailwindcss/tailwind.css";
import './Home.css'
import codeditorimg from './codeeditor.jpeg'
import jsonditorimg from './jsoneditor.jpeg'
import Card from "./Card";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Home() {
    return (
        <div
            className="home min-h-screen flex flex-col justify-center items-center">

            <div className="herobanner">
                <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-white">CodeStudio</h1>
                <div className="flex flex-wrap justify-center gap-8 ">
                    <Card title="Code Editor" image="https://user-images.githubusercontent.com/68281476/221411823-1e5222a1-dc0b-4f14-af09-eebb20c531c9.png" link="./codeeditor" />

                    <Card title="Json Editor" image="https://user-images.githubusercontent.com/68281476/221411720-2b5bb125-e066-4cd9-9655-98d7a813f965.jpeg" link="./jsoneditor" />

                </div>

            </div>


            <div className="mt-8 flex justify-center flex-col items-center bannerdisplay">

                <div className="editor1display">
                    <article className="description">
                        <h1 className="text-4xl font-bold mb-8">Code Editor: The Ultimate Web App for Efficient Programming</h1>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-lg">
                            <strong>Code Editor</strong> 
                            {/* is a web app that allows users to write and run code in multiple programming languages with custom input. With its user-friendly interface, <strong> multiple themes, and font sizes </strong>, along with convenient shortcuts for code execution, Code Editor is a valuable tool for programmers of all levels. The app also includes an <strong> internet status</strong> indicator to ensure users are always connected. */}
                        </p>


                    </article>
                    <div className="screenshot">
                        <img src={codeditorimg} alt="CodePad 1" className="w-1/2 mb-4" />
                    </div>

                </div>

                <div className="editor2display">
                    <article className="description">
                        <h1 className="text-4xl font-bold mb-8">JsonEditor: A Versatile Tool for Converting, and Validating JSON Data</h1>
                        <p className="text-lg font-normal text-gray-700 dark:text-gray-400">
                            <strong>JsonEditor </strong>  
                            {/* is a powerful web application that can read JSON code from <strong>uploaded files </strong> and convert it into <strong> CSV, XML, and YAML formats.</strong> The app also includes a feature to easily <strong>Beautify JSON code </strong> and validate its syntax. With its diverse range of functions, JsonEditor is an essential tool for working with JSON data. */}
                        </p>


                    </article>
                    <div className="screenshot">
                        <img src={jsonditorimg} alt="CodePad 1" className="w-1/2 mb-4" />
                    </div>

                </div>


            </div>
        </div >



    );
}

export default Home;
