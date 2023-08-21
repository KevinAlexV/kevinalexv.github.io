import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projectDesc = this.props.resumeBasicInfo.projects_description;
      var projects = this.props.resumeProjects.map(function (projects) 
      {
        var splitString = projects.images[0].split(".");
        if(splitString[splitString.length - 1] == "mp4")
        {
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              key={projects.title}
              style={{ cursor: "pointer" }}
            >
              <span className="portfolio-item d-block">
                <div className="foto" onClick={() => detailsModalShow(projects)}>
                  <div>
                    <video width="100%" controls autoPlay={false} muted={true} loop={true} style={{"margin-bottom": 0, "padding-bottom": 0, "position": 'relative'}}>
                      <source src = {projects.images[0]} type="video/mp4"/>
                      Your browser does not support the video tag.
                    </video>
                    <span className="project-date">{projects.startDate}</span>
                    <br />
                    <p className="project-title-settings mt-3">
                      {projects.title}
                    </p>
                  </div>
                </div>
              </span>
            </div>
          );
        }
        else{
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              key={projects.title}
              style={{ cursor: "pointer" }}
            >
              <span className="portfolio-item d-block">
                <div className="foto" onClick={() => detailsModalShow(projects)}>
                  <div>
                    <img
                      src={projects.images[0]}
                      alt="projectImages"
                      height="230"
                      style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                    />
                    
                    <span className="project-date">{projects.startDate}</span>
                    <br />
                    <p className="project-title-settings mt-3">
                      {projects.title}
                    </p>
                  </div>
                </div>
              </span>
            </div>
          );
        }
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div>
            <p style={{ margin: "2em", textAlign: "center" }}>
              {projectDesc}
            </p>
          </div>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
