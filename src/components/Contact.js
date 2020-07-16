import React from 'react';

const Contact = () => {
    // scrolls to top of page when 'back to top' button is clicked
    const backToTop = () => {
        let scrollOptions = {
            top: 0,
            behavior: "smooth"
        }

        window.scrollTo(scrollOptions);
    }
    return (
        <section class="contact" id="contact">
            <h2 class="contact__h2">Contact</h2>
            <div class="contact__info">
                <p><a href="https://www.linkedin.com/in/aejgardner/" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/aejgardner</a>
                </p>
                <p><a href="https://github.com/aejgardner" target="_blank" rel="noopener noreferrer">https://github.com/aejgardner</a></p>
                <p><a href="mailto:adam_gardner@hotmail.co.uk">adam_gardner@hotmail.co.uk</a></p>
            </div>
            <button class="contact__backToTopBtn" onClick={backToTop}>Back to top</button>
            <p class="contact__copyright">&#169; Adam Gardner 2020</p>
        </section>
    );
};

export default Contact;