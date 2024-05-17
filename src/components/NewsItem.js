import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgurl, url, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imgurl
                ? "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5ld3N8ZW58MHx8MHx8fDA%3D"
                : imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title ">{title}</h5>
            <p className="card-text">{description}</p>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
              {source}
            </span>
            <br />
            <p className="card-text ">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={url}
              target="_blank"
              className="btn btn-danger text-light mt-auto"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
