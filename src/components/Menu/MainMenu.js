import React, { Component } from "react"
import { ListGroup } from "react-bootstrap"
import { Link, StaticQuery, graphql } from "gatsby"

export default class HMenu extends Component {
  constructor(props) {
    super(props)
    this.toggleClass = this.toggleClass.bind(this)
    this.state = {
      activeIndex: 0,
    }
  }

  toggleClass(index, e) {
    this.setState({ activeIndex: index })
  }

  render() {
    return (
      <>
        <StaticQuery
        // query={graphql`
        //   query {
        //     allWordpressWpApiMenusMenusItems(
        //       filter: { slug: { eq: "gatsby-header-menu" } }
        //         ) {
        //           edges {
        //             node {
        //               slug
        //               name
        //               items {
        //               title
        //               url
        //               object_slug
        //         }
        //       }
        //     }
        //   }
        // }
        // `}

        // render={data => {
        //   return (
        //     <>

        //         {data &&
        //         data.allWordpressWpApiMenusMenusItems &&
        //         data.allWordpressWpApiMenusMenusItems.edges &&
        //         data.allWordpressWpApiMenusMenusItems.edges[0] &&
        //         data.allWordpressWpApiMenusMenusItems.edges[0].node &&
        //         data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
        //         data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
        //         (prop,i) => {
        //           return (
        //             <ListGroup.Item as="li" className="font-16 font-semibold">
        //               <Link className={this.state.activeIndex==i ? 'nav-link active': 'nav-link'} onClick={this.toggleClass.bind(this, i)} to={"/"+prop.url.toLowerCase().replace("http://", '')}>{prop.title}</Link>
        //             </ListGroup.Item>

        //             )
        //           }
        //         )}
        //     </>
        //   )
        // }}
        />
      </>
    )
  }
}
