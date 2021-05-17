import React from 'react'
import BlogComponent from "../BlogComponent";
import blogs from "../BlogComponent";
import "../Blog.css";
import Title from "../Title";




function Blog(){
    return(
        <div>
            <div className="B-title">
                <Title title={'Blogs'} span={'Blogs'} />
            </div>
        <div className="blog-page">
            {
               BlogComponent.map((blogs)=>{
                   return <div className="blog" key={blogs.id}>
                       <div className="blog-content">
                           <img src={blogs.image} alt=""/>
                           <a href={blogs.link} className="blog-link">
                               {blogs.title}
                           </a>
                       </div>
                   </div>
               })
            }
        </div>
        </div>
    );
}

export default Blog;