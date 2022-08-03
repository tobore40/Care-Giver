import React from "react";
import {
  BookOutlined,
  AddLocationOutlined,
  NotInterestedOutlined,
} from "@material-ui/icons";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About Us</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row">
            <div
              className="col-xl-5 col-lg-6 video-box d-flex justify-content-center
     align-items-stretch position-relative"
            >
              {/* <a href="https://youtu.be/h39m-e8JHDc" className="glightbox play-btn mb-4" /> */}
            </div>
            <div
              className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch
     justify-content-center py-5 px-lg-5"
            >
              <div className="icon-box">
                <div className="icon">
                  <AddLocationOutlined />
                </div>
                <h4 className="title">
                  <a href>HEALTH IS WEALTH</a>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
              <div className="icon-box">
                <div className="icon">
                  <NotInterestedOutlined />
                </div>
                <h4 className="title">
                  <a href>EMERGENCY</a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
              <div className="icon-box">
                <div className="icon">
                  <BookOutlined />
                </div>
                <h4 className="title">
                  <a href>SERVICES </a>
                </h4>
                <p className="description">
                  Explicabo est voluptatum asperiores consequatur magnam. Et
                  veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
