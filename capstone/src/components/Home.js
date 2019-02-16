import React, {Component} from 'react'
import Footer from './Footer'

const Home = props =>  
  <div>
    THIS IS THE HOME PAGE!

    {/* <div className="container">
      <Labels />
    </div>

    <main role="main" className="container">
      <div className="row">
        <Switch>
          <Route exact path={props.match.url} component={BlogPostsFrontPage} />
          <Route path={`${props.match.url}archive/:month/:year`} component={ BlogPostArchive } />
          <Route path={`${props.match.url}users/:username`} component={ BlogPostsByUser } />
          <Route path={`${props.match.url}labels/:label`} component={ BlogPostsByLabel } />
        </Switch>

        <SideBar />
      </div>
    </main>

    <Footer /> */}
  </div>

export default Home
