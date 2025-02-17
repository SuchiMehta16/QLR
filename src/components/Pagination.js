import React from "react"
import { Link } from "gatsby"

const Pagination = ({ pageContext, pathPrefix }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <section class="paginationss">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav className="pagination" role="navigation">
              <div className="navbar navbar-menu">
                {previousPagePath && (
                  <div className="navbar-item">
                    <Link
                      to={previousPagePath}
                      rel="prev"
                      className="navprev commonnav nav-link"
                    >
                      Previous
                    </Link>
                  </div>
                )}
                {nextPagePath && (
                  <div className="navbar-item xyz">
                    <Link
                      to={nextPagePath}
                      rel="next"
                      className="navnext commonnav nav-link"
                    >
                      Next
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pagination
