import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import NavBar from "./navbar.js"


const Layout = ({ children }) => {

  window.addEventListener('load', function() {
	
    // setTimeout to simulate the delay from a real page load
    setTimeout(lazyLoad, 1000);
    
  });
  
  function lazyLoad() {
    var ll_images = document.querySelectorAll('.ll-image');
    
    // loop over each card image
    ll_images.forEach(function(ll_image) {
      var image_url = ll_image.getAttribute('data-image-full');
      var content_image = ll_image.querySelector('img');
      
      // change the src of the content image to load the new high res photo
      content_image.src = image_url;
      
      // listen for load event when the new photo is finished loading
      content_image.addEventListener('load', function() {
        // add a class to remove the blur filter to smoothly transition the image change
        ll_image.className = ll_image.className + 'is-loaded';
      });
      
    });
    
  }

  return (
    <>
      <NavBar/>
        <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
