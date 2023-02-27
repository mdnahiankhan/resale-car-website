import React from 'react';

const Blog = () => {
    return (
        <section className='max-w-[1440px] mx-auto bg-violet-400 rounded-xl font-serif m-6'>
            <div className='bg-gray-400 rounded-lg p-6'>
                <h1 className="bg-white text-xl p-2 text-center rounded-lg font-bold">1. What are the different ways to manage a state in a React application?</h1>
                <h3 className='bg-white mt-5 rounded-lg p-4 font-bold'>Answer: Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components. The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage states in React, including the use of: 1.Hooks 2.React Context API 3.Apollo Link State</h3>
            </div>
            <div className='bg-gray-400 rounded-lg p-6'>
                <h1 className="bg-white text-xl p-2 text-center rounded-lg font-bold">2.How does prototypical inheritance work?</h1>
                <h3 className='bg-white mt-5 rounded-lg p-4 font-bold'>Answer: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</h3>
            </div>
            <div className='bg-gray-400 rounded-lg p-6'>
                <h1 className="bg-white text-xl p-2 text-center rounded-lg font-bold">3.What is a unit test? Why should we write unit tests?</h1>
                <h3 className='bg-white mt-5 rounded-lg p-4 font-bold'>Answer: The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</h3>
            </div>
            <div className='bg-gray-400 rounded-lg p-6'>
                <h1 className="bg-white text-xl p-2 text-center rounded-lg font-bold">4.React vs. Angular vs. Vue?
                </h1>
                <h3 className='bg-white mt-5 rounded-lg font-bold p-4 '>Answer:React=React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website .
                    Angular==Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name - AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                    Vue==Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn't have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.
                </h3>
            </div>
        </section>
    );
};

export default Blog;